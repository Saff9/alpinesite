import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { TourCard } from "@/components/cards/tour-card";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { getToursByDestination } from "@/data/tours";
import { site } from "@/data/site";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return { title: "Destination not found" };

  return {
    title: `${destination.name} Tours & Travel Guide`,
    description: destination.shortDescription,
    keywords: [
      destination.name,
      destination.country,
      `${destination.name} tour packages`,
      `${destination.name} travel guide`,
      `${destination.name} best time to visit`,
      `Alpine Club India · ${destination.name}`,
    ],
    alternates: { canonical: `/destinations/${destination.slug}` },
    openGraph: {
      title: `${destination.name}, ${destination.tagline}`,
      description: destination.shortDescription,
      url: `/destinations/${destination.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${destination.name}, ${destination.tagline}`,
      description: destination.shortDescription,
    },
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const tours = getToursByDestination(slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Destinations",
        item: `${site.url}/destinations`,
      },
      { "@type": "ListItem", position: 3, name: destination.name },
    ],
  };

  const touristDestinationJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.shortDescription,
    image: `${site.url}${destination.image}`,
    url: `${site.url}/destinations/${destination.slug}`,
  };

  return (
    <>
      <PageHeader
        title={destination.name}
        subtitle={destination.tagline}
        image={destination.image}
        imageAlt={destination.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: destination.name },
        ]}
      />

      {/* About <Destination> */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <SectionHeading title={`About ${destination.name}`} />
          <div className="mx-auto max-w-3xl space-y-5 text-center sm:text-left">
            {destination.description.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Follow-up Tour Packages related to the destination */}
      {tours.length > 0 && (
        <section className="bg-sand py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <SectionHeading title={`Tours in ${destination.name}`} />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tours.map((tour, i) => (
                <TourCard key={tour.slug} tour={tour} priority={i < 3} />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Button
                asChild
                className="w-[80%] max-w-sm rounded-xl border border-brand bg-brand px-8 py-3 text-white shadow-xs hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-11 sm:w-auto"
              >
                <Link href="/tours">
                  View All Packages
                  <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristDestinationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
