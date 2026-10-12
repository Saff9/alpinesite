"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/types";

interface TourGalleryProps {
  /** Plain serializable data, built server-side from coverImage + gallery. */
  images: GalleryImage[];
  tourTitle: string;
}

export function TourGallery({ images, tourTitle }: TourGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const goTo = useCallback(
    (i: number) => {
      setIndex((current) => (i + images.length) % images.length);
    },
    [images.length],
  );

  // Arrow-key navigation while the lightbox is open.
  // Escape key and backdrop clicks are handled by the Dialog component.
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setIndex((current) => (current - 1 + images.length) % images.length);
      } else if (event.key === "ArrowRight") {
        setIndex((current) => (current + 1) % images.length);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, images.length]);

  if (images.length === 0) return null;

  // Same odd-count-aware grid logic as the original server-rendered gallery:
  // the cover is wide, and a lone remainder image also goes wide.
  const rest = images.slice(1);
  const lastIsWide = rest.length % 2 === 1;

  const current = images[index];

  return (
    <>
      {/*
        Grid reproduces the previous server markup 1:1 (grid-cols-2, wide
        col-span-2 aspect-[16/9] first tile + odd-count-aware wide last tile,
        group-hover zoom). Each tile is now a focusable <button> that opens
        the lightbox at that index.
      */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
        {images.map((image, i) => {
          const isWide = i === 0 || (lastIsWide && i === images.length - 1);
          return (
            <button
              key={image.src}
              type="button"
              onClick={() => openAt(i)}
              aria-label={`Open photo: ${image.alt}`}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2",
                isWide ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]",
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={90}
                sizes={
                  isWide
                    ? "(max-width: 1024px) 100vw, 780px"
                    : "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 390px"
                }
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          );
        })}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          aria-describedby={undefined}
          className="fixed top-0 left-0 z-[70] flex h-full w-full max-w-none translate-x-0 translate-y-0 flex-col rounded-none border-0 bg-black/95 p-4 shadow-none sm:max-w-none sm:p-6"
        >
          <DialogTitle className="sr-only">
            {tourTitle}, photo gallery
          </DialogTitle>

          {/* Top bar, counter + caption, close */}
          <div className="flex shrink-0 items-start justify-between gap-4">
            <div className="min-w-0 flex-1" aria-live="polite">
              <p className="text-sm font-semibold text-white">
                {index + 1} / {images.length}
              </p>
              <p className="truncate text-sm text-white/80">{current.alt}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close gallery"
              className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Center, photo with fade/scale-in on change */}
          <div className="relative mx-auto aspect-[3/2] w-full max-w-5xl max-h-[70vh] flex-1">
            <div
              key={index}
              className="absolute inset-0 animate-in fade-in zoom-in-95 duration-200"
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                quality={90}
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => goTo(index - 1)}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(index + 1)}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <ChevronRight className="h-6 w-6" aria-hidden="true" />
                </button>
              </>
            )}
          </div>

          {/* Bottom, thumbnail strip (hidden on <sm) */}
          <div className="hidden shrink-0 gap-2 overflow-x-auto py-3 sm:flex">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}: ${image.alt}`}
                aria-current={i === index ? "true" : undefined}
                className={cn(
                  "relative h-16 w-24 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                  i === index
                    ? "border-terracotta opacity-100"
                    : "border-transparent opacity-60 transition-opacity hover:opacity-100",
                )}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
