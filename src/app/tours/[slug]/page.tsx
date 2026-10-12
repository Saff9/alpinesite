import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BedDouble,
  CheckCircle2,
  MessageCircle,
  Phone,
  UtensilsCrossed,
  XCircle,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { TourGallery } from "@/components/tours/tour-gallery";
import { ShareButtons } from "@/components/blog/share-buttons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getTourBySlug, tours } from "@/data/tours";
import { travelStyles as styleInfo } from "@/data/travel-styles";
import { formatINR, site } from "@/data/site";
import type { GalleryImage } from "@/types";

interface TourPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};

  return {
    title: tour.title,
    description: tour.shortDescription,
    keywords: [tour.title, tour.destinationName, "tour package"],
    alternates: { canonical: `/tours/${tour.slug}` },
    openGraph: {
      title: tour.title,
      description: tour.shortDescription,
      // og:image comes from the per-slug opengraph-image.tsx file convention.
    },
  };
}

export default async function TourDetailPage({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const discount =
    tour.originalPrice && tour.originalPrice > tour.price
      ? Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)
      : 0;

  const gallery: GalleryImage[] = [
    { src: tour.coverImage, alt: tour.coverImageAlt },
    ...tour.gallery,
  ];

  const styleLabels = tour.travelStyles
    .map((style) => styleInfo.find((info) => info.id === style)?.label ?? style)
    .slice(0, 3);

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hi Alpine Club India! I'm interested in the "${tour.title}" tour.`,
  )}`;

  const tourFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tour.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const tourBreadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Tours", item: `${site.url}/tours` },
      {
        "@type": "ListItem",
        position: 3,
        name: tour.destinationName,
        item: `${site.url}/tours?destination=${tour.destinationSlug}`,
      },
      { "@type": "ListItem", position: 4, name: tour.title },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.shortDescription,
    url: `${site.url}/tours/${tour.slug}`,
    image: `${site.url}${tour.coverImage}`,
    touristType: styleLabels.join(", "),
    itinerary: {
      "@type": "ItemList",
      itemListElement: tour.itinerary.map((day) => ({
        "@type": "ListItem",
        position: day.day,
        name: day.title,
      })),
    },
    offers: {
      "@type": "Offer",
      price: tour.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${site.url}/tours/${tour.slug}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tour.rating,
      reviewCount: tour.reviewsCount,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <>
      <div className="relative">
        <PageHeader
          title={tour.title}
          subtitle={`${tour.destinationName} · ${tour.durationDays} days / ${tour.durationNights} nights`}
          image={tour.coverImage}
          imageAlt={tour.coverImageAlt}
          className="[&>div:last-child]:pb-32 sm:[&>div:last-child]:pb-36 lg:[&>div:last-child]:pb-40"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Tours", href: "/tours" },
            { label: tour.destinationName, href: `/destinations/${tour.destinationSlug}` },
            { label: tour.title },
          ]}
        />

        {/* Pricing & Quick Contact Card positioned half inside and half outside the hero image */}
        <aside
          id="book"
          aria-label="Book this tour"
          data-print-hidden
          className="relative z-20 mx-auto -mt-24 max-w-3xl px-5 sm:-mt-28 sm:px-6"
        >
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-xl sm:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              From
            </p>
            <p className="mt-1 font-heading text-3xl font-semibold tabular-nums sm:text-4xl">
              {formatINR(tour.price)}
              <span className="ml-1.5 text-sm font-normal text-muted-foreground">
                / person
              </span>
            </p>
            {tour.originalPrice && discount > 0 && (
              <div className="mt-2 flex items-center justify-center gap-2 text-sm">
                <span className="line-through text-muted-foreground">
                  {formatINR(tour.originalPrice)}
                </span>
                <span className="rounded-full bg-terracotta/10 px-2.5 py-0.5 text-xs font-bold text-terracotta">
                  Save {discount}%
                </span>
              </div>
            )}
            <div className="my-5 border-t border-border" aria-hidden="true" />

            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <MessageCircle className="h-4 w-4 text-pine" aria-hidden="true" />
                WhatsApp us
              </a>
              <a
                href={site.phoneHref}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Phone className="h-4 w-4 text-pine" aria-hidden="true" />
                {site.phone}
              </a>
            </div>

            <div className="mt-5 flex justify-center border-t border-border pt-4">
              <ShareButtons
                title={`Alpine Club India, ${tour.title}`}
                path={`/tours/${tour.slug}`}
                label="Share this trip"
              />
            </div>
          </div>
        </aside>
      </div>

      <div className="pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <article className="mx-auto space-y-12 sm:space-y-16">
            {/* Overview */}
            <section aria-labelledby="overview-heading" className="text-center">
              <h2 id="overview-heading" className="font-heading text-2xl font-semibold sm:text-3xl">
                Trip overview
              </h2>
              <div className="mx-auto mt-4 max-w-3xl space-y-4 leading-relaxed text-muted-foreground sm:text-base">
                {tour.overview.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* What's Included & Excluded */}
            <section aria-labelledby="inclusions-heading">
              <h2
                id="inclusions-heading"
                className="text-center font-heading text-2xl font-semibold sm:text-3xl"
              >
                What&apos;s Included &amp; Excluded
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-sm dark:border-emerald-900/50 dark:bg-emerald-950/20">
                  <h3 className="flex items-center gap-2.5 font-heading text-lg font-semibold text-emerald-900 dark:text-emerald-300">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    </span>
                    What&apos;s Included
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {tour.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-emerald-950 dark:text-emerald-100"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6 shadow-sm dark:border-red-900/50 dark:bg-red-950/20">
                  <h3 className="flex items-center gap-2.5 font-heading text-lg font-semibold text-red-900 dark:text-red-300">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300">
                      <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" aria-hidden="true" />
                    </span>
                    What&apos;s Excluded
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {tour.excluded.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-red-950 dark:text-red-100"
                      >
                        <XCircle
                          className="mt-0.5 h-4 w-4 shrink-0 text-red-600 dark:text-red-400"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Photo gallery */}
            <section aria-labelledby="gallery-heading" data-print-hidden>
              <h2
                id="gallery-heading"
                className="text-center font-heading text-2xl font-semibold sm:text-3xl"
              >
                From this trip
              </h2>
              <TourGallery images={gallery} tourTitle={tour.title} />
            </section>

            {/* Itinerary */}
            <section aria-labelledby="itinerary-heading">
              <div className="mb-8 text-center sm:mb-10">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                  Itinerary
                </p>
                <h2
                  id="itinerary-heading"
                  className="text-2xl font-semibold sm:text-3xl lg:text-[2.1rem]"
                >
                  Day-by-day itinerary
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-muted-foreground sm:text-base">
                  {`${tour.durationDays} days planned by people who drive these roads every week, with room left for the unplanned.`}
                </p>
              </div>
              <Accordion
                type="single"
                collapsible
                defaultValue="day-1"
                className="rounded-2xl border border-border bg-card px-4 shadow-sm sm:px-5"
              >
                {tour.itinerary.map((day) => (
                  <AccordionItem key={day.day} value={`day-${day.day}`}>
                    <AccordionTrigger className="group/day items-center gap-4 py-4 text-left hover:no-underline">
                      <span className="flex flex-1 items-center gap-3.5 text-left sm:gap-4">
                        <span
                          aria-hidden="true"
                          className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl border border-terracotta/30 bg-terracotta/5 leading-none transition-colors duration-200 group-hover/day:border-terracotta/50 group-hover/day:bg-terracotta/10"
                        >
                          <span className="text-[0.5rem] font-bold uppercase tracking-[0.16em] text-terracotta/80">
                            Day
                          </span>
                          <span className="mt-1 font-heading text-xl font-semibold tabular-nums text-terracotta-deep dark:text-terracotta">
                            {day.day}
                          </span>
                        </span>
                        <span className="min-w-0 font-heading text-[0.95rem] font-semibold leading-snug sm:text-base">
                          {day.title}
                          <span className="sr-only">, day {day.day} of {tour.durationDays}</span>
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 pl-[3.75rem] sm:pl-[4.25rem]">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {day.description}
                      </p>
                      {(day.meals || day.stay) && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {day.meals && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-sand/70 px-3 py-1.5 text-xs font-semibold text-foreground">
                              <UtensilsCrossed
                                className="h-3.5 w-3.5 text-pine"
                                aria-hidden="true"
                              />
                              Meals: {day.meals}
                            </span>
                          )}
                          {day.stay && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-sand/70 px-3 py-1.5 text-xs font-semibold text-foreground">
                              <BedDouble
                                className="h-3.5 w-3.5 text-pine"
                                aria-hidden="true"
                              />
                              Stay: {day.stay}
                            </span>
                          )}
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* FAQs */}
            <section aria-labelledby="faqs-heading">
              <SectionHeading
                align="center"
                eyebrow="Good questions"
                title="Things travellers ask before booking"
              />
              <Accordion
                type="single"
                collapsible
                className="rounded-2xl border border-border bg-card px-5 shadow-sm"
              >
                {tour.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline sm:text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </article>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {tour.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(tourFaqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourBreadcrumbJsonLd) }}
      />
    </>
  );
}
