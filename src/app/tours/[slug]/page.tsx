import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BedDouble,
  CheckCircle2,
  Clock,
  MessageCircle,
  PackageCheck,
  PackageX,
  Phone,
  Users,
  UtensilsCrossed,
  XCircle,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { RatingStars } from "@/components/shared/rating-stars";
import { TourCard } from "@/components/cards/tour-card";
import { BookingForm } from "@/components/tours/booking-form";
import { TourGallery } from "@/components/tours/tour-gallery";
import { ShareButtons } from "@/components/blog/share-buttons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getTourBySlug, getToursByDestination, tours } from "@/data/tours";
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

  let related = getToursByDestination(tour.destinationSlug).filter(
    (t) => t.slug !== tour.slug,
  );
  if (related.length === 0) {
    related = tours.filter(
      (t) => t.slug !== tour.slug && t.travelStyles.includes(tour.travelStyles[0]),
    );
  }
  related = related.slice(0, 3);

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
      <PageHeader
        title={tour.title}
        subtitle={`${tour.destinationName} · ${tour.durationDays} days / ${tour.durationNights} nights`}
        image={tour.coverImage}
        imageAlt={tour.coverImageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Tours", href: "/tours" },
          { label: tour.destinationName, href: `/destinations/${tour.destinationSlug}` },
          { label: tour.title },
        ]}
      />

      <div className="pb-16 pt-12 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-8">
            {/* Left column — everything about the trip */}
            <article className="space-y-12 sm:space-y-14">
              {/* Quick facts header */}
              <header>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <RatingStars
                    rating={tour.rating}
                    size="lg"
                    showValue
                    reviewsCount={tour.reviewsCount}
                  />
                  {tour.badge && (
                    <span className="rounded-full bg-terracotta px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      {tour.badge}
                    </span>
                  )}
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                    <Users className="h-3.5 w-3.5 text-pine" aria-hidden="true" />
                    {tour.groupSize}
                  </li>
                  {styleLabels.map((label) => (
                    <li
                      key={label}
                      className="inline-flex items-center rounded-full bg-sand px-3 py-1.5 text-xs font-semibold text-foreground"
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              </header>

              {/* Overview */}
              <section aria-labelledby="overview-heading">
                <h2 id="overview-heading" className="font-heading text-2xl font-semibold">
                  Trip overview
                </h2>
                <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                  {tour.overview.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </section>

              {/* Highlights */}
              <section aria-labelledby="highlights-heading">
                <h2 id="highlights-heading" className="font-heading text-2xl font-semibold">
                  Trip highlights
                </h2>
                <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {tour.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-sm leading-relaxed">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-terracotta"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Photo gallery */}
              <section aria-labelledby="gallery-heading" data-print-hidden>
                <h2 id="gallery-heading" className="font-heading text-2xl font-semibold">
                  From this trip
                </h2>
                <TourGallery images={gallery} tourTitle={tour.title} />
              </section>

              {/* Itinerary */}
              <section aria-labelledby="itinerary-heading">
                <div className="mb-8 flex flex-wrap items-center justify-between gap-3 sm:mb-10">
                  <div className="max-w-2xl">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                      Itinerary
                    </p>
                    <h2
                      id="itinerary-heading"
                      className="text-2xl font-semibold sm:text-3xl lg:text-[2.1rem]"
                    >
                      Day-by-day itinerary
                    </h2>
                    <p className="mt-3 text-muted-foreground sm:text-base">
                      {`${tour.durationDays} days planned by people who drive these roads every week — with room left for the unplanned.`}
                    </p>
                  </div>
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
                          {/* Printed-itinerary day block: serif figure with a
                              hairline frame — the editorial centrepiece of the
                              money page. */}
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
                            <span className="sr-only"> — day {day.day} of {tour.durationDays}</span>
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

              {/* Included / excluded */}
              <section aria-label="What is included and excluded">
                <h2 className="font-heading text-2xl font-semibold">
                  What your money covers
                </h2>
                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <h3 className="flex items-center gap-2.5 font-heading text-lg font-semibold">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pine/10 text-pine">
                        <PackageCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                      What&apos;s included
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {tour.included.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-pine"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <h3 className="flex items-center gap-2.5 font-heading text-lg font-semibold">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand-deep text-foreground">
                        <PackageX className="h-5 w-5" aria-hidden="true" />
                      </span>
                      Not included
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {tour.excluded.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
                          <XCircle
                            className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Travel facts */}
              <section aria-labelledby="facts-heading">
                <h2 id="facts-heading" className="font-heading text-2xl font-semibold">
                  Trip facts
                </h2>
                <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-sand p-4">
                    <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      <Clock className="h-4 w-4 text-pine" aria-hidden="true" />
                      Duration
                    </dt>
                    <dd className="mt-2 text-sm font-semibold">
                      {tour.durationDays} days / {tour.durationNights} nights
                    </dd>
                  </div>
                  <div className="rounded-xl bg-sand p-4">
                    <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      <Users className="h-4 w-4 text-pine" aria-hidden="true" />
                      Group size
                    </dt>
                    <dd className="mt-2 text-sm font-semibold">{tour.groupSize}</dd>
                  </div>
                </dl>
              </section>

              {/* FAQs */}
              <section aria-labelledby="faqs-heading">
                <SectionHeading
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

            {/* Right column — sticky booking card (hidden on paper) */}
            <aside id="book" aria-label="Book this tour" data-print-hidden className="scroll-mt-24">
              <div className="scroll-thin rounded-2xl border border-border bg-card p-6 shadow-lg lg:sticky lg:top-24 lg:max-h-[calc(100vh-6.5rem)] lg:overflow-y-auto">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  From
                </p>
                <p className="mt-1 font-heading text-3xl font-semibold tabular-nums">
                  {formatINR(tour.price)}
                  <span className="ml-1.5 text-sm font-normal text-muted-foreground">
                    / person
                  </span>
                </p>
                {tour.originalPrice && discount > 0 && (
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <span className="line-through text-muted-foreground">
                      {formatINR(tour.originalPrice)}
                    </span>
                    <span className="rounded-full bg-terracotta/10 px-2.5 py-0.5 text-xs font-bold text-terracotta">
                      Save {discount}%
                    </span>
                  </div>
                )}
                <div className="mt-3">
                  <RatingStars
                    rating={tour.rating}
                    size="sm"
                    showValue
                    reviewsCount={tour.reviewsCount}
                  />
                </div>

                <div className="my-5 border-t border-border" aria-hidden="true" />

                <h2 className="font-heading text-lg font-semibold">
                  Book this trip
                </h2>
                <p className="mb-4 mt-1 text-sm text-muted-foreground">
                  Tell us your dates — we&apos;ll confirm availability and customise from
                  there.
                </p>
                <BookingForm
                  tourSlug={tour.slug}
                  tourTitle={tour.title}
                  tourPrice={tour.price}
                />

                <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <MessageCircle className="h-4 w-4 text-pine" aria-hidden="true" />
                    WhatsApp us
                  </a>
                  <a
                    href={site.phoneHref}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Phone className="h-4 w-4 text-pine" aria-hidden="true" />
                    {site.phone}
                  </a>
                </div>

                {/* Share row — travellers forward trips to family/friends
                    before booking; make that one tap. */}
                <div className="mt-5 border-t border-border pt-4">
                  <ShareButtons
                    title={`Alpine Club India — ${tour.title}`}
                    path={`/tours/${tour.slug}`}
                    label="Share this trip"
                  />
                </div>
              </div>
            </aside>
          </div>

          {/* Related tours */}
          {related.length > 0 && (
            <section className="mt-16 sm:mt-20" aria-labelledby="related-heading" data-print-hidden>
              <div className="rounded-2xl bg-sand px-4 py-10 sm:px-8 sm:py-12">
                <SectionHeading
                  eyebrow="Keep exploring"
                  title="You may also like"
                  description={`More trips our ${tour.destinationName} travellers end up comparing before they decide.`}
                  linkHref="/tours"
                  linkLabel="All tours"
                />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((t) => (
                    <TourCard key={t.slug} tour={t} />
                  ))}
                </div>
              </div>
            </section>
          )}
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
