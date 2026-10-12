import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import type { Tour } from "@/types";
import { formatINR } from "@/data/site";
import { cn } from "@/lib/utils";

interface TourCardProps {
  tour: Tour;
  className?: string;
  priority?: boolean;
}

export function TourCard({ tour, className, priority = false }: TourCardProps) {
  const discount =
    tour.originalPrice && tour.originalPrice > tour.price
      ? Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)
      : 0;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pine/40 hover:shadow-lg",
        className,
      )}
    >
      {/* Keyboard focus ring, inset so the card's overflow-hidden can't
          clip it; highlights whichever control inside the card is focused. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 ring-2 ring-inset ring-terracotta transition-opacity duration-150 group-focus-within:opacity-100"
      />
      <Link
        href={`/tours/${tour.slug}`}
        className="relative block aspect-[4/3] overflow-hidden"
        aria-label={`View details of ${tour.title}`}
      >
        <Image
          src={tour.coverImage}
          alt={tour.coverImageAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent" aria-hidden="true" />
        <span className="absolute bottom-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 font-heading text-xs font-extrabold uppercase tracking-wider text-black shadow-md ring-1 ring-black/10">
          <Clock className="h-3.5 w-3.5 text-brand stroke-[2.5]" aria-hidden="true" />
          {tour.durationDays}D / {tour.durationNights}N
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <p className="flex min-w-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{tour.destinationName}</span>
          </p>
        </div>
        <h3 className="mt-1.5 font-heading text-lg font-bold uppercase leading-snug text-black">
          <Link
            href={`/tours/${tour.slug}`}
            className="transition-colors hover:text-brand focus-visible:underline focus-visible:decoration-brand focus-visible:decoration-2 focus-visible:underline-offset-4"
          >
            {tour.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-600">
          {tour.shortDescription}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5 border-t border-neutral-100">
          <div>
            {discount > 0 && (
              <p className="text-xs text-neutral-500">
                <span className="line-through">{formatINR(tour.originalPrice!)}</span>
                <span className="ml-1.5 font-bold text-brand">{discount}% off</span>
              </p>
            )}
            <p className="font-heading text-xl font-extrabold tabular-nums text-black">
              {formatINR(tour.price)}
              <span className="ml-1 text-xs font-normal text-neutral-500">
                / person
              </span>
            </p>
          </div>
          <Link
            href={`/tours/${tour.slug}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-xs"
          >
            View Tour
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
