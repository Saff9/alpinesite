import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Destination } from "@/types";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  destination: Destination;
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
      aria-label={`Explore ${destination.name}`}
      className={cn(
        "group relative block overflow-hidden rounded-2xl bg-foreground shadow-sm transition-shadow duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
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
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 sm:p-5">
        <h3
          className={cn(
            "font-heading font-extrabold uppercase leading-tight text-white drop-shadow-md",
            isTall ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
          )}
        >
          {destination.name}
        </h3>
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
