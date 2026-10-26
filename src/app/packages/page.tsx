import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { PackagesExplorer } from "@/components/packages/packages-explorer";

export const metadata: Metadata = {
  title: "Deals & Packages | Guided Himalayan Skiing & Trekking",
  description:
    "Explore fully guided Gulmarg ski packages, epic Ladakh summer traverses, and iconic Kashmir & Sikkim trekking expeditions with Alpine Club India.",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Deals & Packages | Alpine Club India",
    description:
      "Handcrafted ski packages, summer high-altitude traverses, and classic Himalayan treks with certified mountain guides.",
    url: "/packages",
  },
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-neutral-50/50">
      {/* Page Header */}
      <PageHeader
        title="Deals & Packages"
        subtitle="Fully guided ski adventures, pristine summer traverses, and iconic Himalayan treks across Kashmir, Ladakh, and Sikkim."
        image="/images/hero/gulmarg-hero.jpg"
        imageAlt="Himalayan mountain peaks and guided expeditions"
      />

      {/* Main Content Area */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <PackagesExplorer />
      </section>
    </main>
  );
}
