import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { SkiGulmarg } from "@/components/home/ski-gulmarg";
import { TravelCategories } from "@/components/home/travel-categories";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { CtaBanner } from "@/components/home/cta-banner";
import { SectionHeading } from "@/components/shared/section-heading";
import { DestinationCard } from "@/components/cards/destination-card";
import { TourCard } from "@/components/cards/tour-card";
import { BlogCard } from "@/components/cards/blog-card";
import { FaqSection } from "@/components/shared/faq-section";
import { popularDestinations } from "@/data/destinations";
import { featuredTours, tours } from "@/data/tours";
import { blogPosts } from "@/data/blog";
import { testimonials } from "@/data/testimonials";
import { generalFaqs } from "@/data/faqs";
import { RatingStars } from "@/components/shared/rating-stars";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Alpine Club India: Ski Guides, Gulmarg and Kashmir Tour Packages",
  description:
    "Private ski guiding on Gulmarg's Apharwat powder bowls, Kashmir tour packages, Ladakh road trips and honeymoons by local mountain guides since 2012. Rated 5.0 on Google.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const latestPosts = [...blogPosts]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 3);

  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured tour packages",
    itemListElement: featuredTours.map((tour, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${site.url}/tours/${tour.slug}`,
      name: tour.title,
    })),
  };

  return (
    <>
      <Hero />
      <SkiGulmarg />

      {/* Popular destinations */}
      <section className="py-16 sm:py-20" aria-labelledby="popular-destinations">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="Popular destinations"
            title="Where our travellers are heading this year"
            description="Gulmarg is our mountain home. Beyond it, explore the timeless valleys of Kashmir, high mountain passes of Ladakh, and the deep Himalayas."
            linkHref="/destinations"
            linkLabel="All destinations"
          />
          <div
            id="popular-destinations"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {popularDestinations.map((d, index) => (
              <DestinationCard
                key={d.slug}
                destination={d}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured tours */}
      <section className="bg-sand py-16 sm:py-20" aria-labelledby="featured-tours">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="Featured tour packages"
            title="Trips we're quietly proud of"
            description="Handcrafted itineraries driven and guided by our own team, each private and customizable."
            linkHref="/tours"
            linkLabel="View all tours"
          />
          <div id="featured-tours" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour, i) => (
              <TourCard key={tour.slug} tour={tour} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>

      <TravelCategories />
      <WhyChooseUs />

      {/* Testimonials */}
      <section className="bg-sand py-16 sm:py-20" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-8 flex flex-col items-center text-center justify-center gap-4 sm:mb-10">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <p className="mb-2.5 inline-flex items-center justify-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.2em] text-brand">
                <span aria-hidden="true" className="h-0.5 w-4 bg-brand" />
                Traveller stories
                <span aria-hidden="true" className="h-0.5 w-4 bg-brand" />
              </p>
              <h2 id="testimonials-heading" className="font-heading text-2xl font-extrabold uppercase tracking-tight text-black sm:text-3xl lg:text-[2.2rem]">
                {site.stats.travellersServed} travellers, one phone that answers.
              </h2>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
                <RatingStars rating={site.stats.rating} size="md" />
                <p className="text-sm text-neutral-600">
                  {site.stats.rating.toFixed(1)}/5 on Google with {site.stats.reviewsCount} reviews earned on the mountain
                </p>
              </div>
            </div>
          </div>
          <TestimonialsCarousel />
          <p className="mt-6 text-center text-xs text-neutral-500">
            {testimonials.length} verified reviews from our travellers.
          </p>
        </div>
      </section>

      <CtaBanner />

      {/* Blog teaser */}
      <section className="pb-16 pt-2 sm:pb-20" aria-labelledby="guides-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="Travel guides"
            title="Read before you pack"
            description="Field notes from our team with honest guides on seasons, packing, permits, and local spots."
            linkHref="/blog"
            linkLabel="All travel guides"
          />
          <div id="guides-heading" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FaqSection className="bg-sand" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: generalFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
