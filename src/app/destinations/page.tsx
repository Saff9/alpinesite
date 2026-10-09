import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { DestinationsExplorer } from "@/components/destinations/destinations-explorer";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore our mountain destinations — Gulmarg's powder bowls, the Kashmir valley, Ladakh's high passes, and Spiti's cold desert. Guided by our local mountain team since 2012.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <>
      <PageHeader
        title="Our Destinations"
        subtitle="The places we know trail-by-trail — Gulmarg is home, alongside Dal Lake houseboats, Ladakh's moonscapes, and high Himalayan passes."
        image="/images/destinations/ladakh/hero.jpg"
        imageAlt="Pangong Lake in Ladakh with brilliant blue water and barren mountains behind"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Destinations" },
        ]}
      />

      <section className="pb-16 pt-12 sm:pb-20" aria-labelledby="destinations-list">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <h2 id="destinations-list" className="sr-only">
            Browse all destinations
          </h2>
          <DestinationsExplorer destinations={destinations} />
        </div>
      </section>
    </>
  );
}
