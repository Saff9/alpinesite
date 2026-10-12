import Image from "next/image";
import type { Destination } from "@/types";
import { cn } from "@/lib/utils";

interface DestinationsExplorerProps {
  destinations: Destination[];
}

/**
 * Staggered running-bond brick spans across a 12-column desktop grid
 * (and 6-column tablet grid):
 *   Row 1: [7, 5]
 *   Row 2: [4, 4, 4]
 *   Row 3: [5, 7]
 *   Row 4: [4, 4, 4]
 */
const BRICK_SPANS = [
  "sm:col-span-3 lg:col-span-7",
  "sm:col-span-3 lg:col-span-5",
  "sm:col-span-2 lg:col-span-4",
  "sm:col-span-2 lg:col-span-4",
  "sm:col-span-2 lg:col-span-4",
  "sm:col-span-3 lg:col-span-5",
  "sm:col-span-3 lg:col-span-7",
  "sm:col-span-2 lg:col-span-4",
  "sm:col-span-2 lg:col-span-4",
  "sm:col-span-2 lg:col-span-4",
] as const;

export function DestinationsExplorer({ destinations }: DestinationsExplorerProps) {
  const seen = new Set<string>();
  const galleryItems: {
    src: string;
    alt: string;
  }[] = [];

  for (const d of destinations) {
    if (!seen.has(d.image)) {
      seen.add(d.image);
      galleryItems.push({
        src: d.image,
        alt: d.imageAlt,
      });
    }
    for (const img of d.gallery) {
      if (!seen.has(img.src)) {
        seen.add(img.src);
        galleryItems.push({
          src: img.src,
          alt: img.alt,
        });
      }
    }
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-6 sm:gap-7 lg:grid-cols-12 lg:gap-8">
      {galleryItems.map((item, i) => {
        const spanClass = BRICK_SPANS[i % BRICK_SPANS.length];
        return (
          <figure
            key={item.src}
            className={cn(
              "relative h-64 overflow-hidden rounded-2xl bg-neutral-900 shadow-sm select-none sm:h-72 lg:h-80",
              spanClass,
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={i < 4}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 58vw"
              className="object-cover pointer-events-none"
            />
          </figure>
        );
      })}
    </div>
  );
}
