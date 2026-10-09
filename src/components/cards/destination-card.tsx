import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { Destination } from "@/types";
import { formatINR } from "@/data/site";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  destination: Destination;
  /**
   * "tall" is the feature card in the home mosaic — it spans two rows on
   * sm+ screens (pass `className="sm:row-span-2"` alongside) and stretches
   * to fill them, so its height is always derived from the grid rows
   * rather than an aspect ratio. On phones it gets an explicit height.
   * "default" cards keep a 4:3 aspect and size their own grid rows, which
   * never overflows because rows are content-sized (auto).
   */
  variant?: "default" | "tall";
  className?: string;
  priority?: boolean;
}

export function DestinationCard({
  destination,
  variant = "default",
  className,
  priority = false,
}: DestinationCardProps) {
  const isTall = variant === "tall";

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      aria-label={`Explore ${destination.name}, ${destination.country}`}
      className={cn(
        "group relative block overflow-hidden rounded-2xl bg-foreground shadow-sm transition-shadow duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta",
        // Fixed height on phones, stretch (h-auto) from sm up so the
        // spanning card always fills exactly two rows + the row gap.
        isTall ? "h-[24rem] sm:h-auto" : "aspect-[4/3]",
        className,
      )}
    >
      <Image
        src={destination.image}
        alt={destination.imageAlt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* readability scrim — kept subtle and solid-leaning */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
        <div className="min-w-0">
          <p className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white/80">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {destination.country}
          </p>
          <h3
            className={cn(
              "mt-1 font-heading font-extrabold uppercase leading-tight text-white",
              isTall ? "text-2xl sm:text-3xl" : "text-xl sm:text-[1.35rem]",
            )}
          >
            {destination.name}
          </h3>
          <p
            className={cn(
              "mt-1 line-clamp-2 leading-snug text-white/85",
              isTall ? "text-sm sm:text-[0.95rem]" : "text-[0.8rem] sm:text-sm",
            )}
          >
            {destination.tagline}
          </p>
          <p className="mt-2.5 border-t border-white/20 pt-2 text-xs uppercase tracking-wider text-white/90">
            Tours from{" "}
            <span className="font-extrabold text-white tabular-nums">
              {formatINR(destination.startingPrice)}
            </span>
          </p>
        </div>
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-[2px] transition-colors duration-200 group-hover:bg-brand"
        >
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
