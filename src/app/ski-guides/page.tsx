import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Certified Ski Guides in Gulmarg | Mountain Leaders & Avalanche Safety | Alpine Club India",
  description:
    "Local knowledge. Expertly trained. Technical expertise. A safety-first mindset. Explore Gulmarg's Mount Apharwat with certified backcountry ski guides at $200 USD per day.",
  keywords: [
    "hire ski guide Gulmarg",
    "Gulmarg ski guide cost",
    "certified ski guides Gulmarg",
    "Apharwat backcountry guide",
    "Tiger ski guide Gulmarg",
    "avalanche safety Gulmarg guide",
    "ski instructor Gulmarg",
    "private ski guide Kashmir",
    "Alpine Club India ski guides",
  ],
  alternates: { canonical: "/ski-guides" },
  openGraph: {
    title: "Our Ski Guides | Alpine Club India",
    description:
      "Certified local ski guides with in-depth snowpack knowledge, avalanche safety training, and high-alpine freeride experience at $200 USD per day.",
    url: "/ski-guides",
    images: [
      {
        url: `${site.url}/images/ski/apharwat-peaks.jpg`,
        width: 1200,
        height: 630,
        alt: "Alpine Club India Ski Guides in Gulmarg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certified Ski Guides in Gulmarg | Alpine Club India",
    description:
      "Certified backcountry ski guides in Gulmarg. Mountain leaders and avalanche safety experts at $200 USD per day.",
    images: [`${site.url}/images/ski/apharwat-peaks.jpg`],
  },
};

export default function SkiGuidesPage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Alpine Club India! I'd like to book a certified ski guide in Gulmarg ($200 USD per day) for my upcoming ski trip."
  )}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Our Ski Guides", item: `${site.url}/ski-guides` },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Certified Ski Guiding in Gulmarg",
    description:
      "Professional backcountry ski and snowboard guiding on Mount Apharwat, Gulmarg. Snowpack evaluation, terrain navigation, and avalanche safety.",
    provider: {
      "@type": "TravelAgency",
      name: site.name,
      url: site.url,
      telephone: site.phone,
      email: site.email,
    },
    offers: {
      "@type": "Offer",
      price: "200",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "200",
        priceCurrency: "USD",
        unitText: "DAY",
      },
    },
    areaServed: {
      "@type": "Place",
      name: "Gulmarg, Kashmir, India",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHeader
        title="Our Ski Guides"
        subtitle="“Behind every great descent is a guide who knows when to go—and when not to.”"
        image="/images/ski/apharwat-peaks.jpg"
        imageAlt="Guide overlooking snow-covered ridges of Apharwat"
      />

      {/* Main Philosophy & Core Guiding Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white" id="local-experts">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
                Alpine Club India
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-neutral-950 sm:text-4xl">
                Our Ski Guides
              </h2>

              {/* Guiding Principles Bullet Quotes */}
              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4">
                  <p className="font-heading text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                    • “Local knowledge. Expertly trained. Technical expertise. A safety-first mindset.”
                  </p>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4">
                  <p className="font-heading text-sm sm:text-base font-bold text-brand leading-snug">
                    • “Behind every great descent is a guide who knows when to go—and when not to.”
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 space-y-4 text-base text-neutral-600 leading-relaxed font-poppins">
                <p>
                  Our qualified and experienced ski guides bring professional training, in-depth mountain knowledge, and a strong commitment to safety to every adventure. From evaluating snow conditions to navigating challenging terrain, they make informed decisions to help you explore the mountains with confidence.
                </p>
                <p>
                  We believe the greatest adventures aren&apos;t about taking unnecessary risks—they&apos;re about exploring the extraordinary with the right people by your side.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep"
                >
                  Book Private Guide
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-neutral-300 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:bg-neutral-100"
                >
                  <Link href="/gulmarg-ski-resort">Resort &amp; Slopes Guide</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/about/founder.avif"
                alt="Alpine Club India mountain guide in winter gear"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* 200$ USD per day Tag */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-neutral-950/85 px-4 py-2 text-white shadow-xl backdrop-blur-md border border-white/20 sm:top-5 sm:right-5 sm:px-5 sm:py-2.5">
                <span className="font-heading text-sm font-extrabold tracking-tight text-white sm:text-base">
                  $200 USD
                </span>
                <span className="font-poppins text-xs font-medium text-neutral-300">
                  per day
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
