import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ToursExplorer } from "@/components/tours/tours-explorer";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Browse Alpine Club India tour packages, Gulmarg ski weeks, Kashmir houseboats, Ladakh expeditions, and Himalayan journeys. Private trips, local mountain guides, honest pricing.",
  alternates: { canonical: "/tours" },
};

export default function ToursPage() {
  return (
    <>
      <PageHeader
        title="Tour Packages"
        subtitle="Handcrafted itineraries, designed, driven, and guided by our own mountain team. Every trip is private, from the houseboats to the cabs."
        image="/images/destinations/kashmir/gulmarg.jpg"
        imageAlt="Snow-covered pine slopes of Gulmarg under a clear winter sky"
        crumbs={[{ label: "Home", href: "/" }, { label: "Tours" }]}
      />

      <section className="pb-16 pt-12 sm:pb-20" aria-labelledby="tours-explorer-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <h2 id="tours-explorer-heading" className="sr-only">
            Browse all tour packages
          </h2>
          <ToursExplorer tours={tours} />
        </div>
      </section>
    </>
  );
}
