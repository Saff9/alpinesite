import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { OurServices } from "@/components/home/our-services";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { SectionHeading } from "@/components/shared/section-heading";
import { DestinationCard } from "@/components/cards/destination-card";
import { popularDestinations } from "@/data/destinations";
import { testimonials } from "@/data/testimonials";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RatingStars } from "@/components/shared/rating-stars";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Alpine Club India | Certified Mountain Guides, Gulmarg Skiing & Himalayan Expeditions",
  description:
    "Private ski guiding on Gulmarg's Apharwat powder bowls, high-altitude trekking in Kashmir & Sikkim, and Trans-Himalayan expeditions led by certified local guides since 2012. Rated 5.0 on Google.",
  keywords: [
    "Alpine Club India",
    "Gulmarg ski packages",
    "Gulmarg ski guide",
    "Kashmir trekking packages",
    "Kashmir Great Lakes trek",
    "Chadar trek",
    "Ladakh expeditions",
    "Gulmarg powder skiing",
    "Himalayan mountaineering guides",
    "Mount Apharwat ski tours",
    "ski resorts in India",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Alpine Club India | Certified Mountain Guides, Gulmarg Skiing & Himalayan Expeditions",
    description:
      "Private ski guiding on Gulmarg's Apharwat powder bowls, high-altitude trekking in Kashmir & Sikkim, and Trans-Himalayan expeditions led by certified local guides since 2012.",
    url: "/",
    images: [
      {
        url: "/images/hero/gulmarg-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Alpine Club India Gulmarg Ski Guiding and Himalayan Treks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpine Club India | Certified Mountain Guides & Skiing",
    description:
      "Private ski guiding on Gulmarg's Apharwat powder bowls, high-altitude trekking in Kashmir & Sikkim.",
    images: ["/images/hero/gulmarg-hero.jpg"],
  },
};

function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-6 my-2 sm:my-4">
      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent shadow-xs" />
    </div>
  );
}

export default function HomePage() {
  const topDestinations = popularDestinations.slice(0, 3);

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      <SectionDivider />

      {/* 2. Our Services Section */}
      <OurServices />

      <SectionDivider />

      {/* 3. Destinations Section */}
      <section className="py-16 sm:py-20 relative bg-neutral-50/50 rounded-3xl border border-neutral-200/60 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.04)] mx-3 sm:mx-6 my-4 sm:my-8" aria-labelledby="popular-destinations">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="Where We Guide"
            title="Featured Destinations"
            description="Explore the timeless valleys of Kashmir, Gulmarg powder bowls, and high passes of Ladakh."
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
          <div className="mt-10 flex justify-center">
            <Button
              asChild
              className="w-[80%] max-w-sm rounded-xl border border-brand bg-brand px-8 py-3 text-white shadow-xs hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-11 sm:w-auto"
            >
              <Link href="/destinations">
                View All Destinations
                <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. About Us Section */}
      <div className="bg-neutral-50/50 rounded-3xl border border-neutral-200/60 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.04)] mx-3 sm:mx-6 my-4 sm:my-8">
        <WhyChooseUs />
      </div>

      <SectionDivider />

      {/* 5. Testimonials Section */}
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
              <a
                href={site.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex flex-wrap items-center justify-center gap-3 transition-opacity hover:opacity-80"
              >
                <RatingStars rating={site.stats.rating} size="md" />
                <p className="text-sm text-neutral-600 underline decoration-neutral-300 underline-offset-4">
                  {site.stats.rating.toFixed(1)}/5 on Google with {site.stats.reviewsCount} reviews earned on the mountain
                </p>
              </a>
            </div>
          </div>
          <TestimonialsCarousel />
          <p className="mt-6 text-center text-xs text-neutral-500">
            <a
              href={site.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-neutral-300 underline-offset-4 hover:text-brand"
            >
              {testimonials.length} verified reviews from our travellers on Google
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
