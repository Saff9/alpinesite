import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { site } from "@/data/site";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "About Us | Passionate Mountain & Ski Guides | Alpine Club India",
  description:
    "Alpine Club India is a team of passionate mountain and ski guides based across different mountain destinations, coming together in different seasons to create unforgettable mountain experiences.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Alpine Club India",
    description:
      "Alpine Club India is a team of passionate mountain and ski guides based across different mountain destinations, coming together in different seasons to create unforgettable mountain experiences.",
    url: "/about",
  },
};

const reviewStats = [
  { figure: `${site.stats.rating.toFixed(1)}/5`, label: "Google rating" },
  { figure: `${site.stats.reviewsCount}`, label: "Post-trip reviews" },
  { figure: site.stats.travellersServed, label: "Travellers guided" },
  { figure: `${site.stats.yearsExperience}+`, label: "Years on the mountain" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Alpine Club India"
        subtitle="A team of passionate mountain and ski guides coming together across seasons to create unforgettable Himalayan experiences."
        image="/images/about/group-trek.jpg"
        imageAlt="A small group of travellers walking a Himalayan trail together with their guide"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* About Us Main Section */}
      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="about-us-heading">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 text-center">
          <h2
            id="about-us-heading"
            className="font-heading text-2xl font-extrabold uppercase tracking-tight text-black sm:text-3xl lg:text-[2.2rem]"
          >
            About Us
          </h2>
          <div className="mt-8 space-y-6 text-foreground/85 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Alpine Club India is a team of passionate mountain and ski guides based across different mountain destinations, coming together in different seasons to create unforgettable mountain experiences.
            </p>
            <p>
              We specialize in organizing safe, professionally guided mountain adventures, including skiing, trekking, mountaineering, and high-altitude expeditions. From snow-covered slopes and remote Himalayan trails to challenging mountain summits, we bring together local knowledge, technical expertise, and a deep respect for the mountains.
            </p>
            <p>
              Our mission is to share the beauty and spirit of the mountains with adventure lovers from all over the world. With a strong focus on safety, responsible mountain travel, and authentic experiences, we aim to make every journey rewarding, memorable, and inspiring.
            </p>
            <p>
              Whether you&apos;re an experienced mountaineer, a passionate skier, or someone discovering the mountains for the first time, Alpine Club India welcomes you to explore, experience, and connect with the mountains.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials wall */}
      <section className="py-16 sm:py-20" aria-labelledby="about-testimonials">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="Traveller stories"
            title="What they say when they're home"
            description="Real stories and reviews from travellers who explored Kashmir and the Himalayas with us."
          />
          <div id="about-testimonials">
            {/* Review stats band */}
            <div
              className="grid grid-cols-2 gap-x-6 gap-y-8 rounded-2xl bg-sand px-4 py-8 sm:grid-cols-4 sm:divide-x sm:divide-border sm:px-6 sm:py-9"
              aria-label="Reviews in numbers"
            >
              {reviewStats.map((stat) => (
                <div key={stat.label} className="text-center sm:px-4">
                  <p className="font-heading text-3xl font-semibold text-brand">
                    {stat.figure}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Masonry wall, every review we publish, unedited */}
            <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                  className="mb-5 break-inside-avoid"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-20" aria-labelledby="about-cta">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-14 text-center sm:px-12 sm:py-16">
            <h2
              id="about-cta"
              className="mx-auto max-w-2xl font-heading text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl"
            >
              Come say hello in Gulmarg
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
              Our office on Gulmarg Road has a kettle that&rsquo;s always on and
              skis leaning by the door. Can&rsquo;t make it up the hill? We
              plan just as well over phone, email and WhatsApp.
            </p>
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-[80%] max-w-sm rounded-xl border border-white bg-white px-7 py-3.5 text-black shadow-md hover:bg-neutral-100 font-heading text-xs font-bold uppercase tracking-wider h-12 sm:w-auto"
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-[80%] max-w-sm rounded-xl border-white/60 bg-transparent px-7 py-3.5 text-white hover:bg-white/10 hover:text-white font-heading text-xs font-bold uppercase tracking-wider h-12 sm:w-auto"
              >
                <Link href="/activities">Our Activities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
