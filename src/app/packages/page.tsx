import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { PackagesExplorer } from "@/components/packages/packages-explorer";
import { packagesData } from "@/data/packages";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Deals & Packages | Guided Himalayan Skiing & Trekking | Alpine Club India",
  description:
    "Explore fully guided Gulmarg ski packages, epic Ladakh summer traverses, and iconic Kashmir & Sikkim trekking expeditions with Alpine Club India.",
  keywords: [
    "Himalayan tour packages",
    "Gulmarg ski packages",
    "Kashmir Great Lakes trek package",
    "Chadar trek package",
    "Ladakh trekking tours",
    "Goechala trek package",
    "Markha valley trek cost",
    "Gulmarg ski guiding cost",
    "guided ski tours India",
    "Himalayan trekking expeditions",
    "Alpine Club India packages",
  ],
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Deals & Packages | Alpine Club India",
    description:
      "Handcrafted ski packages, summer high-altitude traverses, and classic Himalayan treks with certified mountain guides.",
    url: "/packages",
    images: [
      {
        url: `${site.url}/images/hero/gulmarg-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Alpine Club India Deals & Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deals & Packages | Alpine Club India",
    description:
      "Handcrafted ski packages, summer high-altitude traverses, and classic Himalayan treks with certified mountain guides.",
    images: [`${site.url}/images/hero/gulmarg-hero.jpg`],
  },
};

export default function PackagesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Deals & Packages", item: `${site.url}/packages` },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: packagesData.length,
    itemListElement: packagesData.map((pkg, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: pkg.title,
      description: pkg.description,
      url: `${site.url}/packages/${pkg.slug}`,
    })),
  };

  return (
    <main className="min-h-screen bg-neutral-50/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
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
