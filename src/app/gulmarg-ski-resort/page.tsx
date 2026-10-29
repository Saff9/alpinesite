import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Gulmarg Ski Resort | Gondola, Apharwat Peak & Backcountry Powder | Alpine Club India",
  description:
    "Complete guide to skiing in Gulmarg: About Gulmarg, Backcountry Skiing on Mount Apharwat, Ski Touring expeditions, and certified ski classes.",
  keywords: [
    "Gulmarg ski resort",
    "Gulmarg Gondola phases",
    "Apharwat peak skiing",
    "backcountry skiing Gulmarg",
    "Gulmarg powder snow",
    "ski touring Gulmarg",
    "ski classes Gulmarg",
    "skiing in Kashmir",
    "Alpine Club India Gulmarg",
  ],
  alternates: { canonical: "/gulmarg-ski-resort" },
  openGraph: {
    title: "Gulmarg Ski Resort | Alpine Club India",
    description:
      "Explore Gulmarg Ski Resort: About Gulmarg, Backcountry Skiing, Ski Touring, and Ski Classes on Mount Apharwat.",
    url: "/gulmarg-ski-resort",
    images: [
      {
        url: `${site.url}/images/ski/apharwat-peaks.jpg`,
        width: 1200,
        height: 630,
        alt: "Gulmarg Ski Resort Mount Apharwat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gulmarg Ski Resort | Alpine Club India",
    description:
      "Explore Gulmarg Ski Resort: About Gulmarg, Backcountry Skiing, Ski Touring, and Ski Classes on Mount Apharwat.",
    images: [`${site.url}/images/ski/apharwat-peaks.jpg`],
  },
};

interface ResortSection {
  id: string;
  title: string;
  tagline: string;
  image: string;
  link: string;
  linkText: string;
}

const resortSections: ResortSection[] = [
  {
    id: "about-gulmarg",
    title: "About Gulmarg",
    tagline:
      "Asia’s premier powder skiing capital at 2,650 metres. Discover 1,300 vertical metres of lift-served terrain, deep maritime-dry snow, and cozy alpine chalets.",
    image: "/images/hero/gulmarg-hero.jpg",
    link: "/gulmarg-ski-resort/about-gulmarg",
    linkText: "Explore About Gulmarg",
  },
  {
    id: "backcountry-skiing",
    title: "Backcountry Skiing",
    tagline:
      "Untracked Himalayan powder bowls, steep chutes, South Bowl, North Bowl, and Mary's Shoulder descending from Apharwat Peak shoulder at 3,980 metres.",
    image: "/images/ski/powder-skiing.jpg",
    link: "/gulmarg-ski-resort/backcountry-skiing",
    linkText: "Explore Backcountry",
  },
  {
    id: "ski-touring",
    title: "Ski Touring",
    tagline:
      "Ascend beyond the lifts with climbing skins to explore untouched Himalayan ridgelines, Apharwat summit (4,200 m), and virgin powder bowls.",
    image: "/images/ski/apharwat-peaks.jpg",
    link: "/gulmarg-ski-resort/ski-touring",
    linkText: "Explore Ski Touring",
  },
  {
    id: "ski-classes",
    title: "Ski Classes",
    tagline:
      "Patient, certified ski and snowboard instruction from beginner nursery slopes at Kongdoori to advanced steep powder clinics with local instructors.",
    image: "/images/tours/gulmarg-ski-adventure/slopes.jpg",
    link: "/gulmarg-ski-resort/ski-classes",
    linkText: "Explore Ski Classes",
  },
];

export default function GulmargSkiResortPage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Alpine Club India! I'd like to ask about skiing in Gulmarg, gondola passes, and hiring a certified ski guide."
  )}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Gulmarg Ski Resort", item: `${site.url}/gulmarg-ski-resort` },
    ],
  };

  return (
    <main className="min-h-screen bg-neutral-50/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Page Header */}
      <PageHeader
        title="Gulmarg Ski Resort"
        subtitle="Asia’s legendary powder capital on Mount Apharwat (3,980 m), where 13+ metres of dry snow meets the world's highest lift-served terrain."
        image="/images/hero/gulmarg-hero.jpg"
        imageAlt="Red Gulmarg Gondola rising through snow-covered pine forests toward Mount Apharwat"
      />

      {/* Main Info Cards Section */}
      <section className="py-14 sm:py-20 lg:py-24" aria-labelledby="resort-sections">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Mount Apharwat · 3,980 Metres"
            title="Explore Gulmarg Ski Resort"
            description="Everything you need to know about Asia’s legendary powder capital, from mountain history and backcountry bowls to guided ski touring and beginner lessons."
          />

          {/* Clean Focused Info Cards Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {resortSections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Clean Image Container without overlaid badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100 shadow-xs">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Card Body: Heading, Short Paragraph, and Explore Button */}
                <div className="flex flex-col flex-1 justify-between pt-5 gap-4">
                  <div className="space-y-2">
                    <Link href={section.link} className="focus:outline-hidden">
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-brand transition-colors leading-snug">
                        {section.title}
                      </h3>
                    </Link>
                    <p className="font-poppins text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {section.tagline}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Button
                      asChild
                      className="rounded-xl bg-brand px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep"
                    >
                      <Link href={section.link}>
                        {section.linkText}
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Ski Guiding Callout */}
      <section className="bg-white py-16 sm:py-20 text-center border-t border-neutral-200">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="Certified Powder Guiding"
            title="Ready to Ski Mount Apharwat?"
            description="Direct guiding with our local mountain guides. Daily snowpack analysis, certified avalanche safety gear, backcountry bowls, and private transport."
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="rounded-xl bg-brand px-8 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep h-12"
            >
              <Link href="/ski-guides">
                Meet Our Ski Guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-xs hover:bg-neutral-50 h-12"
            >
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
