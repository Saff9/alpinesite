import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  IndianRupee,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { ShareButtons } from "@/components/blog/share-buttons";
import { SeasonGuide } from "@/components/destinations/season-guide";
import { DestinationStories } from "@/components/destinations/destination-stories";
import { TourCard } from "@/components/cards/tour-card";
import { BlogCard } from "@/components/cards/blog-card";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { getToursByDestination } from "@/data/tours";
import { blogPosts } from "@/data/blog";
import { travelStyles } from "@/data/travel-styles";
import { site, formatINR } from "@/data/site";
import { cn } from "@/lib/utils";

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
      title: `${destination.name} — ${destination.tagline}`,
      description: destination.shortDescription,
      url: `/destinations/${destination.slug}`,
      // og:image comes from the per-slug opengraph-image.tsx file convention.
    },
    twitter: {
      card: "summary_large_image",
      title: `${destination.name} — ${destination.tagline}`,
      description: destination.shortDescription,
    },
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const tours = getToursByDestination(slug);
  const relatedPosts = blogPosts
    .filter((post) => post.relatedDestinationSlugs.includes(slug))
    .slice(0, 3);
  const styleLabels = destination.travelStyles
    .map((id) => travelStyles.find((s) => s.id === id)?.label)
    .filter((label): label is string => Boolean(label));
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    site.whatsappMessage,
  )}`;

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

      {/* About + quick facts */}
      <section className="pb-16 pt-12 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={destination.country}
            title={`About ${destination.name}`}
          />
          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
            <div>
              <div className="space-y-4">
                {destination.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Travel styles that work here
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {styleLabels.map((label) => (
                    <Badge
                      key={label}
                      variant="outline"
                      className="rounded-full border-pine/30 bg-card px-3 py-1 text-pine"
                    >
                      {label}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:sticky lg:top-24 lg:self-start">
              <h3 className="font-heading text-lg font-semibold">Quick facts</h3>
              <dl className="mt-5 space-y-4">
                <div className="flex gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sand text-pine">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Ideal duration
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold">{destination.idealDuration}</dd>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sand text-pine">
                    <CalendarDays className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Best time to visit
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold">{destination.bestTime}</dd>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sand text-pine">
                    <IndianRupee className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Tours from
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold">
                      {formatINR(destination.startingPrice)} per person
                    </dd>
                  </div>
                </div>
              </dl>
              <Button
                asChild
                size="lg"
                className="mt-6 w-full bg-terracotta text-white hover:bg-terracotta-deep"
              >
                <Link href={`/tours?destination=${destination.slug}`}>
                  View tours
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <div className="mt-5 border-t border-border pt-4">
                <ShareButtons
                  title={`Alpine Club India — ${destination.name} travel guide`}
                  path={`/destinations/${destination.slug}`}
                  label="Share this guide"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* When to visit — season guide */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SeasonGuide destination={destination} />
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-sand py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Highlights"
            title={`${destination.name}, done properly`}
            description="The moments our travellers mention most in their reviews — no filler stops, no tourist-trap add-ons."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {destination.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-pine" aria-hidden="true" />
                <span className="text-sm font-medium leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery — becomes an editorial photo essay when the destination
          carries a story; plain grid otherwise. */}
      {destination.story ? (
        <DestinationStories destination={destination} />
      ) : (
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Gallery"
            title={`Postcards from ${destination.name}`}
            description="Every photo below was taken by our team or travellers on our trips — no stock-photo promises."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destination.gallery.map((image, i) => (
              <figure
                key={image.src}
                className={cn(
                  "group relative overflow-hidden rounded-2xl shadow-sm",
                  i === 0 ? "aspect-[16/10] sm:col-span-2" : "aspect-[4/3]",
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  quality={90}
                  sizes={
                    i === 0
                      ? "(max-width: 640px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Tours */}
      {tours.length > 0 && (
        <section className="bg-sand py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Tour packages"
              title={`Tours in ${destination.name}`}
              description={`${tours.length} ready-to-book ${
                tours.length === 1 ? "itinerary" : "itineraries"
              } — each one adjustable to your dates, budget and pace.`}
              linkHref={`/tours?destination=${destination.slug}`}
              linkLabel="View all tours"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tours.map((tour, i) => (
                <TourCard key={tour.slug} tour={tour} priority={i < 3} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related travel guides */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Travel guides"
              title={`Travel guides about ${destination.name}`}
              description="Field notes from our team — seasons, permits, packing and the stuff guidebooks miss."
              linkHref="/blog"
              linkLabel="All travel guides"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA band */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl bg-pine-deep px-6 py-12 sm:px-12 sm:py-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
                  Let&apos;s plan it
                </p>
                <h2 className="mt-2 font-heading text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl">
                  Plan your {destination.name} trip
                </h2>
                <p className="mt-3 leading-relaxed text-primary-foreground/80">
                  Tell us your dates and rough budget — we&apos;ll send back a day-by-day
                  plan with an honest price within 24 hours. No pressure, no spam; just
                  a Gulmarg-based team that knows {destination.name} first-hand.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:shrink-0">
                <Button
                  asChild
                  size="lg"
                  className="bg-terracotta text-white hover:bg-terracotta-deep"
                >
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-white/10 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground"
                >
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
