"use client";

import { useState } from "react";
import { Calendar, ChevronDown, ChevronsUpDown } from "lucide-react";
import type { ItineraryDay } from "@/data/packages";
import { cn } from "@/lib/utils";

interface ItineraryAccordionProps {
  itinerary: ItineraryDay[];
}

export function ItineraryAccordion({ itinerary }: ItineraryAccordionProps) {
  // By default, open the first day to show users it's interactive
  const [openDays, setOpenDays] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {};
    if (itinerary.length > 0) {
      initial[0] = true;
    }
    return initial;
  });

  const allOpen = itinerary.length > 0 && itinerary.every((_, i) => openDays[i]);

  const toggleDay = (index: number) => {
    setOpenDays((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleAll = () => {
    if (allOpen) {
      setOpenDays({});
    } else {
      const all: Record<number, boolean> = {};
      itinerary.forEach((_, i) => {
        all[i] = true;
      });
      setOpenDays(all);
    }
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-7 lg:p-8 shadow-xs space-y-5">
      {/* Header bar with Expand/Collapse All toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
            <Calendar className="h-4.5 w-4.5" />
          </div>
          <div>
            <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-tight text-neutral-900">
              Day-by-Day Itinerary
            </h2>
            <p className="font-poppins text-xs text-neutral-500 mt-0.5">
              {itinerary.length}-day schedule · Tap any day to expand or collapse
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={toggleAll}
          className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 font-heading text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:bg-neutral-100 hover:text-brand transition-colors cursor-pointer"
        >
          <ChevronsUpDown className="h-3.5 w-3.5 text-neutral-500" />
          <span>{allOpen ? "Collapse All" : "Expand All"}</span>
        </button>
      </div>

      {/* Accordion Items List */}
      <div className="space-y-3">
        {itinerary.map((item, index) => {
          const isOpen = Boolean(openDays[index]);
          return (
            <div
              key={index}
              className={cn(
                "rounded-xl border transition-all duration-200 overflow-hidden",
                isOpen
                  ? "border-neutral-300 bg-white shadow-2xs"
                  : "border-neutral-200/80 bg-neutral-50/60 hover:bg-white hover:border-neutral-300"
              )}
            >
              {/* Day Header Trigger */}
              <button
                type="button"
                onClick={() => toggleDay(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-3 p-3.5 sm:p-4 text-left cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-brand"
              >
                <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                  <span
                    className={cn(
                      "shrink-0 flex h-6 sm:h-7 px-2 sm:px-2.5 items-center justify-center rounded-md font-heading text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors",
                      isOpen
                        ? "bg-brand text-white shadow-xs"
                        : "bg-neutral-200 text-neutral-800"
                    )}
                  >
                    Day {item.day}
                  </span>
                  <h3 className="font-heading text-xs sm:text-sm md:text-base font-bold text-neutral-900 truncate leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-neutral-500 transition-transform duration-200",
                    isOpen && "rotate-180 text-brand bg-brand/10"
                  )}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              {/* Collapsible Content */}
              <div
                className={cn(
                  "grid transition-all duration-200 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-3.5 pb-4 pt-1 sm:px-4 sm:pb-5 border-t border-neutral-100/80 text-neutral-600 font-poppins text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
