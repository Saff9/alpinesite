import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mountain, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { ItineraryButton } from "@/components/forms/itinerary-button";
import { destinations } from "@/data/destinations";
import { site } from "@/data/site";
import type { DestinationOption } from "@/data/itinerary-context";

export const metadata: Metadata = {
  title: "Himalayan Destinations | Kashmir, Ladakh & Sikkim",
  description:
    "Explore our mountain destinations, Gulmarg's powder bowls, the Kashmir valley, Ladakh's high passes, and Kangchenjunga in Sikkim. Guided by our local mountain team since 2012.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Alpine Club India! I want to inquire about your mountain destinations and custom itineraries."
  )}`;

  return (
    <>
      <PageHeader
        title="Our Destinations"
        subtitle="The Himalayan regions we know trail-by-trail: Kashmir's timeless valleys, Ladakh's high Trans-Himalayan passes, and Kangchenjunga in Sikkim."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Destinations" },
        ]}
      />

      <section className="py-14 sm:py-20 lg:py-24 bg-white" aria-labelledby="destinations-list">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            title="Explore by Region"
            description="Handcrafted itineraries, licensed mountain guides, and private logistics across the three premier adventure territories of the Indian Himalayas."
          />

          {/* 3 Destination Cards (Clean Card Layout without heavy photo-gallery brick images) */}
          <div className="mt-12 space-y-10 sm:space-y-14">
            {destinations.map((dest, idx) => (
              <div
                key={dest.slug}
                id={dest.slug}
                className="rounded-3xl border border-neutral-200/90 bg-neutral-50/60 p-6 sm:p-10 shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200/80 pb-4">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-brand/10 px-3.5 py-1.5 font-heading text-xs font-bold uppercase tracking-wider text-brand">
                    <Mountain className="h-4 w-4" aria-hidden="true" />
                    Himalayan Territory 0{idx + 1}
                  </div>
                  <span className="font-poppins text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    Best Time: {dest.bestTime}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-950">
                    {dest.name}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-neutral-600 italic">
                    {dest.tagline}
                  </p>
                  <p className="mt-4 font-poppins text-sm leading-relaxed text-neutral-700 max-w-4xl">
                    {dest.shortDescription}
                  </p>

                  <div className="mt-6 pt-5 border-t border-neutral-200/70">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3">
                      Key Highlights &amp; Adventure Features
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 font-poppins text-xs sm:text-sm text-neutral-800">
                      {dest.highlights.slice(0, 6).map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-brand mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button
                      asChild
                      className="rounded-xl bg-brand px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep"
                    >
                      <Link href={`/destinations/${dest.slug}`}>
                        Explore {dest.name} Guide
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                    <ItineraryButton
                      destination={dest.slug as DestinationOption}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand hover:underline font-heading cursor-pointer"
                    >
                      Inquire Custom Itinerary
                    </ItineraryButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
