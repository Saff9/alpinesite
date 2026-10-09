"use client";

import { useMemo, useState } from "react";
import { Compass, RotateCcw, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DestinationCard } from "@/components/cards/destination-card";
import type { Destination } from "@/types";

interface DestinationsExplorerProps {
  destinations: Destination[];
}

export function DestinationsExplorer({ destinations }: DestinationsExplorerProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return destinations;
    return destinations.filter((d) =>
      [d.name, d.country, d.tagline, d.shortDescription].some((field) =>
        field.toLowerCase().includes(q),
      ),
    );
  }, [destinations, query]);

  const isFiltered = query.trim() !== "";

  const reset = () => {
    setQuery("");
  };

  return (
    <div>
      {/* Search control */}
      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-md">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              id="destination-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search destinations by name or country…"
              aria-describedby="destination-search-hint"
              className="h-11 rounded-xl bg-secondary/50 pl-10 text-base"
            />
            <p id="destination-search-hint" className="sr-only">
              Search by destination name, country or description
            </p>
          </div>

          <p aria-live="polite" className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">{filtered.length}</span> of{" "}
            {destinations.length} destinations
          </p>
        </div>
      </div>

      {/* Results grid */}
      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d, i) => (
            <DestinationCard key={d.slug} destination={d} priority={i < 3} />
          ))}
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-card/60 px-6 py-14 text-center sm:mt-8 sm:py-16">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sand text-pine">
            <Compass className="h-7 w-7" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-heading text-xl font-semibold">No destinations match</h3>
            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Try a different search term or tell us where you&apos;re dreaming of and we&apos;ll build an itinerary for you.
            </p>
          </div>
          {isFiltered && (
            <Button
              type="button"
              variant="outline"
              onClick={reset}
              className="gap-2 rounded-xl border-pine/40 text-pine hover:bg-pine hover:text-primary-foreground"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Reset search
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
