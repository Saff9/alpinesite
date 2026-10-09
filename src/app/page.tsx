import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { OurServices } from "@/components/home/our-services";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { SectionHeading } from "@/components/shared/section-heading";
import { DestinationCard } from "@/components/cards/destination-card";
import { TourCard } from "@/components/cards/tour-card";
import { popularDestinations } from "@/data/destinations";
import { featuredTours } from "@/data/tours";
import { testimonials } from "@/data/testimonials";
import { RatingStars } from "@/components/shared/rating-stars";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Alpine Club India: Ski Guides, Gulmarg and Kashmir Tour Packages",
  description:
    "Private ski guiding on Gulmarg's Apharwat powder bowls, Kashmir tour packages, Ladakh road trips and honeymoons by local mountain guides since 2012. Rated 5.0 on Google.",
  alternates: { canonical: "/" },
};

function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-6">
      <hr className="border-0 h-px bg-neutral-200/80" />
    </div>
  );
}

export default function HomePage() {
  const topDestinations = popularDestinations.slice(0, 3);
  const topPackages = featuredTours.slice(0, 3);

  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured tour packages",
    itemListElement: topPackages.map((tour, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${site.url}/tours/${tour.slug}`,
      name: tour.title,
    })),
  };

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      <SectionDivider />

      {/* 2. Our Services Section */}
      <OurServices />

      <SectionDivider />

      {/* 3. Packages Section */}
      <section className="py-16 sm:py-20" aria-labelledby="featured-packages">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="Curated Packages"
            title="Popular Tour Packages"
            description="Handcrafted private itineraries guided by our own mountain team."
            linkHref="/tours"
            linkLabel="View All Packages"
          />
          <div id="featured-packages" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topPackages.map((tour, i) => (
              <TourCard key={tour.slug} tour={tour} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. Destinations Section */}
      <section className="py-16 sm:py-20" aria-labelledby="popular-destinations">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="Where We Guide"
            title="Featured Destinations"
            description="Explore the timeless valleys of Kashmir, Gulmarg powder bowls, and high passes of Ladakh."
            linkHref="/destinations"
            linkLabel="All Destinations"
          />
          <div
            id="popular-destinations"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {topDestinations.map((d, index) => (
              <DestinationCard
                key={d.slug}
                destination={d}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 5. About Us Section */}
      <WhyChooseUs />

      <SectionDivider />

      {/* 6. Testimonials Section */}
      <section className="py-16 sm:py-20" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-8 flex flex-col items-center text-center justify-center gap-4 sm:mb-10">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <p className="mb-2.5 inline-flex items-center justify-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.2em] text-brand">
                <span aria-hidden="true" className="h-0.5 w-4 bg-brand" />
                Traveller Stories
                <span aria-hidden="true" className="h-0.5 w-4 bg-brand" />
              </p>
              <h2 id="testimonials-heading" className="font-heading text-2xl font-extrabold uppercase tracking-tight text-black sm:text-3xl lg:text-[2.2rem]">
                {site.stats.travellersServed} Travellers Guided Across the Himalayas
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />
    </>
  );
}
