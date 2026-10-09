import {
  Mountain,
  Heart,
  Users,
  Snowflake,
  Footprints,
  Palmtree,
  Landmark,
  Coffee,
  Bike,
  Compass,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { travelStyles } from "@/data/travel-styles";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Mountain,
  Heart,
  Users,
  Snowflake,
  Footprints,
  Palmtree,
  Landmark,
  Coffee,
  Bike,
  Compass,
};

export function TravelCategories() {
  return (
    <section className="bg-sand py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Travel by mood"
          title="What kind of traveller are you?"
          description="Every itinerary we build starts with this question. Pick a mood — we'll take it from there."
          linkHref="/tours"
          linkLabel="Browse all tours"
        />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {travelStyles.map((style) => {
            const Icon = iconMap[style.icon] ?? Compass;
            return (
              <li key={style.id} className="group">
                <Link
                  href={`/tours?category=${style.id}`}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-md"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-pine transition-colors duration-300 group-hover:bg-terracotta group-hover:text-white"
                  >
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold">
                    {style.label}
                  </h3>
                  <p className="mt-1.5 hidden text-sm leading-relaxed text-muted-foreground sm:block">
                    {style.description}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
