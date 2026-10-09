import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ToursExplorer } from "@/components/tours/tours-explorer";
import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";
import { travelStyles } from "@/data/travel-styles";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Browse Alpine Club India tour packages — Gulmarg ski weeks, Kashmir houseboats, Ladakh expeditions, and Himalayan journeys. Private trips, local mountain guides, honest pricing.",
  alternates: { canonical: "/tours" },
};

const DURATION_VALUES = new Set(["short", "medium", "long"]);

interface ToursPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ToursPage({ searchParams }: ToursPageProps) {
  const sp = await searchParams;

  const rawDestination = typeof sp.destination === "string" ? sp.destination : "";
  const rawCategory = typeof sp.category === "string" ? sp.category : "";
  const rawDuration = typeof sp.duration === "string" ? sp.duration : "";

  const initialDestination = destinations.some((d) => d.slug === rawDestination)
    ? rawDestination
    : "any";
  const initialCategory = travelStyles.some((style) => style.id === rawCategory)
    ? rawCategory
    : "any";
  const initialDuration = DURATION_VALUES.has(rawDuration) ? rawDuration : "any";

  return (
    <>
      <PageHeader
        title="Tour Packages"
        subtitle="Handcrafted itineraries — designed, driven, and guided by our own mountain team. Filter by destination, travel style, or duration. Every trip is private, from the houseboats to the cabs."
        image="/images/destinations/kashmir/gulmarg.jpg"
        imageAlt="Snow-covered pine slopes of Gulmarg under a clear winter sky"
        crumbs={[{ label: "Home", href: "/" }, { label: "Tours" }]}
      />

      <section className="pb-16 pt-12 sm:pb-20" aria-labelledby="tours-explorer-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 id="tours-explorer-heading" className="sr-only">
            Browse and filter all tour packages
          </h2>
          {/* Keyed by the URL-derived initial values so client-side navigations
              between /tours query variants remount the explorer with fresh
              filter state (in-page changes use history.replaceState and never
              change this key). */}
          <ToursExplorer
            key={`${initialDestination}|${initialCategory}|${initialDuration}`}
            tours={tours}
            initialDestination={initialDestination}
            initialCategory={initialCategory}
            initialDuration={initialDuration}
          />
        </div>
      </section>
    </>
  );
}
