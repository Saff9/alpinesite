import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Destination } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Editorial photo essay, the destination's own gallery images, retold as a
 * travel story. Renders ONLY when the destination carries a `story` in its
 * data entry; pages without one fall back to the plain gallery grid.
 *
 * Layout: lead scene full-width, following scenes alternate image/text sides
 * on lg. Captions print in italic serif with a terracotta scene number.
 */
export function DestinationStories({ destination }: { destination: Destination }) {
  const { story, gallery } = destination;
  if (!story) return null;

  const scenes = gallery.filter((image) => image.caption);
  if (scenes.length === 0) return null;
  const [lead, ...rest] = scenes;

  return (
    <section className="pb-16 sm:pb-20" aria-labelledby="story-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Story header, editorial, left-aligned with a hairline rule */}
        <div className="max-w-3xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
            Travel story
          </p>
          <h2
            id="story-heading"
            className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2.1rem]"
          >
            {story.title}
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground sm:text-base">
            {story.intro}
          </p>
          <div
            aria-hidden="true"
            className="mt-6 h-px w-24 bg-gradient-to-r from-terracotta/70 to-transparent"
          />
        </div>

        {/* Lead scene, full width, caption centred beneath */}
        <figure className="group mt-10 sm:mt-12">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-sm sm:aspect-[16/8]">
            <Image
              src={lead.src}
              alt={lead.alt}
              fill
              quality={90}
              sizes="(max-width: 640px) 100vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
          <figcaption className="mx-auto mt-5 max-w-3xl text-center sm:mt-6">
            <span
              aria-hidden="true"
              className="font-heading text-sm font-semibold italic text-terracotta"
            >
              01
            </span>{" "}
            <span className="font-heading text-[0.95rem] italic leading-relaxed text-foreground/90 sm:text-base">
              {lead.caption}
            </span>
          </figcaption>
        </figure>

        {/* Following scenes, alternating image / caption rows on lg */}
        <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12 lg:space-y-16">
          {rest.map((scene, i) => {
            const flip = i % 2 === 0; // scene 2 = index 0 after lead flips
            return (
              <div
                key={scene.src}
                className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12"
              >
                <figure
                  className={cn(
                    "group relative aspect-[16/10] overflow-hidden rounded-3xl shadow-sm",
                    flip ? "lg:order-1" : "lg:order-2",
                  )}
                >
                  <Image
                    src={scene.src}
                    alt={scene.alt}
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </figure>
                <div
                  className={cn(
                    "max-w-xl",
                    flip ? "lg:order-2 lg:pl-2" : "lg:order-1 lg:pr-4 lg:text-right",
                  )}
                >
                  <p
                    aria-hidden="true"
                    className={cn(
                      "font-heading text-sm font-semibold italic text-terracotta",
                      !flip && "lg:ml-auto",
                    )}
                  >
                    {String(i + 2).padStart(2, "0")}
                  </p>
                  <p className="mt-1.5 font-heading text-[0.95rem] italic leading-relaxed text-foreground/90 sm:text-base">
                    {scene.caption}
                  </p>
                  <p
                    className={cn(
                      "mt-3 hidden text-xs leading-relaxed text-muted-foreground sm:block",
                      !flip && "lg:ml-auto",
                    )}
                  >
                    {scene.alt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Outro + CTA */}
        <div className="mt-14 border-t border-border pt-10 text-center sm:mt-16">
          <p className="mx-auto max-w-2xl text-pretty font-heading italic text-lg leading-relaxed text-foreground/90 sm:text-xl">
            {story.outro}
          </p>
          <Button
            asChild
            className="mt-7 bg-terracotta text-white hover:bg-terracotta-deep"
          >
            <Link href={`/tours?destination=${destination.slug}`}>
              See our {destination.name} tours
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
