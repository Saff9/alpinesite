"use client";

import { useCallback, useMemo, useState } from "react";
import { Compass, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { TourCard } from "@/components/cards/tour-card";
import { destinations } from "@/data/destinations";
import { travelStyles } from "@/data/travel-styles";
import type { Tour, TravelStyle } from "@/types";

const DURATION_OPTIONS = [
  { value: "any", label: "Any duration" },
  { value: "short", label: "1 – 4 days" },
  { value: "medium", label: "5 – 7 days" },
  { value: "long", label: "8 days +" },
] as const;

const SORT_OPTIONS = [
  { value: "featured", label: "Featured first" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Rating" },
  { value: "duration", label: "Duration" },
] as const;

type SortOption = (typeof SORT_OPTIONS)[number]["value"];

interface ToursExplorerProps {
  /** Full tour data — plain serializable objects passed from the server page. */
  tours: Tour[];
  initialDestination?: string;
  initialCategory?: string;
  initialDuration?: string;
}

const isDurationValue = (value: string): boolean =>
  DURATION_OPTIONS.some((option) => option.value === value);

export function ToursExplorer({
  tours,
  initialDestination = "any",
  initialCategory = "any",
  initialDuration = "any",
}: ToursExplorerProps) {
  const [destination, setDestination] = useState(initialDestination);
  const [category, setCategory] = useState(initialCategory);
  const [duration, setDuration] = useState(
    isDurationValue(initialDuration) ? initialDuration : "any",
  );
  const [sort, setSort] = useState<SortOption>("featured");

  /** Update filter state and keep the URL shareable without a round-trip. */
  const applyFilters = useCallback(
    (next: {
      destination?: string;
      category?: string;
      duration?: string;
    }) => {
      const nextDestination = next.destination ?? destination;
      const nextCategory = next.category ?? category;
      const nextDuration = next.duration ?? duration;

      setDestination(nextDestination);
      setCategory(nextCategory);
      setDuration(nextDuration);

      if (typeof window !== "undefined") {
        const params = new URLSearchParams();
        if (nextDestination !== "any") params.set("destination", nextDestination);
        if (nextCategory !== "any") params.set("category", nextCategory);
        if (nextDuration !== "any") params.set("duration", nextDuration);
        const qs = params.toString();
        window.history.replaceState(null, "", qs ? `/tours?${qs}` : "/tours");
      }
    },
    [destination, category, duration],
  );

  const clearAll = useCallback(() => {
    applyFilters({ destination: "any", category: "any", duration: "any" });
  }, [applyFilters]);

  const visibleTours = useMemo(() => {
    const filtered = tours.filter((tour) => {
      if (destination !== "any" && tour.destinationSlug !== destination) return false;
      if (category !== "any" && !tour.travelStyles.includes(category as TravelStyle))
        return false;
      if (duration === "short" && (tour.durationDays < 1 || tour.durationDays > 4))
        return false;
      if (duration === "medium" && (tour.durationDays < 5 || tour.durationDays > 7))
        return false;
      if (duration === "long" && tour.durationDays < 8) return false;
      return true;
    });

    const sorted = [...filtered];
    switch (sort) {
      case "price-asc": {
        sorted.sort((a, b) => a.price - b.price);
        break;
      }
      case "price-desc": {
        sorted.sort((a, b) => b.price - a.price);
        break;
      }
      case "rating": {
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      }
      case "duration": {
        sorted.sort((a, b) => b.durationDays - a.durationDays);
        break;
      }
      default: {
        sorted.sort(
          (a, b) => Number(b.featured) - Number(a.featured) || b.rating - a.rating,
        );
      }
    }
    return sorted;
  }, [tours, destination, category, duration, sort]);

  const activeFilters = useMemo(() => {
    const chips: {
      key: string;
      label: string;
      remove: () => void;
    }[] = [];
    if (destination !== "any") {
      const name =
        destinations.find((d) => d.slug === destination)?.name ?? destination;
      chips.push({
        key: "destination",
        label: name,
        remove: () => applyFilters({ destination: "any" }),
      });
    }
    if (category !== "any") {
      const label =
        travelStyles.find((style) => style.id === category)?.label ?? category;
      chips.push({
        key: "category",
        label,
        remove: () => applyFilters({ category: "any" }),
      });
    }
    if (duration !== "any") {
      chips.push({
        key: "duration",
        label: DURATION_OPTIONS.find((option) => option.value === duration)?.label ?? duration,
        remove: () => applyFilters({ duration: "any" }),
      });
    }
    return chips;
  }, [destination, category, duration, applyFilters]);

  return (
    <div>
      {/* Filter row */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-1.5">
          <label
            htmlFor="filter-destination"
            className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
          >
            Destination
          </label>
          <Select value={destination} onValueChange={(v) => applyFilters({ destination: v })}>
            <SelectTrigger id="filter-destination" className="h-11 w-full bg-secondary/50">
              <SelectValue placeholder="Any destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any destination</SelectItem>
              {destinations.map((d) => (
                <SelectItem key={d.slug} value={d.slug}>
                  {d.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="filter-style"
            className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
          >
            Travel style
          </label>
          <Select value={category} onValueChange={(v) => applyFilters({ category: v })}>
            <SelectTrigger id="filter-style" className="h-11 w-full bg-secondary/50">
              <SelectValue placeholder="Any style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any style</SelectItem>
              {travelStyles.map((style) => (
                <SelectItem key={style.id} value={style.id}>
                  {style.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="filter-duration"
            className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
          >
            Duration
          </label>
          <Select value={duration} onValueChange={(v) => applyFilters({ duration: v })}>
            <SelectTrigger id="filter-duration" className="h-11 w-full bg-secondary/50">
              <SelectValue placeholder="Any duration" />
            </SelectTrigger>
            <SelectContent>
              {DURATION_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="filter-sort"
            className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
          >
            Sort by
          </label>
          <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
            <SelectTrigger id="filter-sort" className="h-11 w-full bg-secondary/50">
              <SelectValue placeholder="Featured first" />
            </SelectTrigger>
            <SelectContent>
              {SORT_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Active filter chips + result count */}
      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
        {activeFilters.map((chip) => (
          <span
            key={chip.key}
            className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 py-1 pl-3 pr-1.5 text-xs font-semibold"
          >
            {chip.label}
            <button
              type="button"
              onClick={chip.remove}
              aria-label={`Remove ${chip.label} filter`}
              className="inline-flex h-5 w-5 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <X className="h-3 w-3" aria-hidden="true" />
            </button>
          </span>
        ))}
        {activeFilters.length > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="text-xs font-semibold text-terracotta underline-offset-2 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded"
          >
            Clear all
          </button>
        )}
        <p className="ml-auto text-sm text-muted-foreground" aria-live="polite">
          Showing{" "}
          <span className="font-semibold text-foreground">{visibleTours.length}</span> of{" "}
          {tours.length} tours
        </p>
      </div>

      {/* Results grid / empty state */}
      {visibleTours.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
          <Compass className="h-12 w-12 text-muted-foreground/40" aria-hidden="true" />
          <h3 className="mt-4 font-heading text-xl font-semibold">
            No tours match those filters
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Try widening the duration, or pick a different destination or travel style —
            our {tours.length} itineraries cover most combinations. Or just WhatsApp us
            and we&apos;ll build one from scratch.
          </p>
          <Button type="button" variant="outline" onClick={clearAll} className="mt-6">
            Reset filters
          </Button>
        </div>
      )}
    </div>
  );
}
