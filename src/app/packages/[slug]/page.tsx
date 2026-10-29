import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  MapPin,
  Mountain,
  ShieldCheck,
  Check,
  CheckCircle2,
  X,
  XCircle,
  ArrowRight,
  Phone,
  Compass,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { packagesData, getPackageBySlug, getPackagesByCategory, type PackageItem } from "@/data/packages";
import { ItineraryButton } from "@/components/forms/itinerary-button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import type { DestinationOption, ActivityOption } from "@/data/itinerary-context";

interface PackagePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return packagesData.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    return {
      title: "Package Not Found | Alpine Club India",
    };
  }

  const cleanDescription = pkg.description.replace(/\s+/g, " ").trim().slice(0, 160);
  const keywords = [
    pkg.title,
    `${pkg.title} package`,
    `${pkg.title} cost`,
    `${pkg.title} itinerary`,
    `${pkg.title} booking`,
    pkg.region || "Himalayas",
    pkg.categoryName,
    "Alpine Club India",
    "Himalayan expeditions",
    ...(pkg.route ? pkg.route.split(/→|->/).map((s) => s.trim()) : []),
  ].filter(Boolean);

  return {
    title: `${pkg.title} | ${pkg.region || "Himalayas"} | Alpine Club India`,
    description: cleanDescription,
    keywords,
    alternates: { canonical: `/packages/${pkg.slug}` },
    openGraph: {
      title: `${pkg.title} | Alpine Club India Deals & Packages`,
      description: cleanDescription,
      url: `/packages/${pkg.slug}`,
      type: "website",
      images: [
        {
          url: `${site.url}${pkg.image}`,
          width: 1200,
          height: 630,
          alt: `${pkg.title} - Alpine Club India`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pkg.title} | Alpine Club India`,
      description: cleanDescription,
      images: [`${site.url}${pkg.image}`],
    },
  };
}

function resolveContext(pkg: PackageItem): {
  destination: DestinationOption;
  activity: ActivityOption;
} {
  if (pkg.category === "ski-packages") {
    return { destination: "kashmir", activity: "skiing-snowboarding" };
  }
  if (pkg.region?.toLowerCase().includes("ladakh") || pkg.title.toLowerCase().includes("ladakh")) {
    return { destination: "ladakh", activity: "expeditions" };
  }
  if (pkg.region?.toLowerCase().includes("sikkim") || pkg.title.toLowerCase().includes("sikkim")) {
    return { destination: "sikkim", activity: "trekking" };
  }
  return { destination: "kashmir", activity: "trekking" };
}

export default async function PackageDetailPage({ params }: PackagePageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const { destination, activity } = resolveContext(pkg);
  const relatedPackages = getPackagesByCategory(pkg.category)
    .filter((p) => p.slug !== pkg.slug)
    .slice(0, 3);

  const waypoints = pkg.route
    ? pkg.route
        .split(/→|->/)
        .map((w) => w.trim())
        .filter(Boolean)
    : [];

  const defaultSkiExclusions = [
    "Personal ski & snowboard equipment (high-end rentals available on-site)",
    "Avalanche safety kit: beacon, probe, shovel & ABS airbag",
    "International & domestic airfare to/from Srinagar International Airport",
    "Personal winter sports & emergency mountain rescue insurance",
    "Lunches, dinners (unless specified in package), alcoholic beverages & personal snacks",
    "Gratuities and tips for mountain ski guides, drivers, and hotel staff",
  ];

  const defaultTrekExclusions = [
    "Personal trekking gear, high-altitude clothing, backpacks & trekking poles",
    "Airfare to/from Leh, Srinagar, or Bagdogra arrival airports",
    "High-altitude wilderness travel & emergency medical evacuation insurance",
    "Hotel stays and meals outside the scheduled trek itinerary dates",
    "Personal expenses, laundry, telephone calls & packaged mineral water",
    "Gratuities and tips for mountain leaders, local camp cooks, porters, and horsemen",
  ];

  const inclusions = pkg.inclusions || [];
  const exclusions =
    pkg.exclusions && pkg.exclusions.length > 0
      ? pkg.exclusions
      : pkg.category === "ski-packages"
      ? defaultSkiExclusions
      : defaultTrekExclusions;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Deals & Packages", item: `${site.url}/packages` },
      { "@type": "ListItem", position: 3, name: pkg.title, item: `${site.url}/packages/${pkg.slug}` },
    ],
  };

  const touristTripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.description,
    touristType: [
      pkg.category === "ski-packages" ? "Skiers & Snowboarders" : "Trekkers & Alpine Hikers",
      "Adventure Travelers",
    ],
    offers: {
      "@type": "Offer",
      name: pkg.title,
      price: pkg.price ? pkg.price.replace(/[^0-9]/g, "") || undefined : undefined,
      priceCurrency: pkg.price?.includes("$") ? "USD" : "INR",
      availability: "https://schema.org/InStock",
      url: `${site.url}/packages/${pkg.slug}`,
      validFrom: "2026-01-01",
    },
    provider: {
      "@type": "TravelAgency",
      name: site.name,
      url: site.url,
      telephone: site.phone,
      email: site.email,
    },
    ...(waypoints.length > 0 && {
      itinerary: {
        "@type": "ItemList",
        numberOfItems: waypoints.length,
        itemListElement: waypoints.map((stop, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: stop,
        })),
      },
    }),
  };

  return (
    <main className="min-h-screen bg-neutral-50/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripJsonLd) }}
      />
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-neutral-950 py-16 sm:py-24 text-white">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[1.04] contrast-[1.02]"
        />
        {/* Subtle gradient ensuring the tour package landscape is vivid and visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              {pkg.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-200 font-poppins pt-1">
              <div className="flex items-center gap-1.5 font-medium text-white">
                <Clock className="h-4 w-4 text-brand" />
                <span>{pkg.duration}</span>
              </div>
              {pkg.region && (
                <>
                  <span className="text-white/40">•</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-neutral-300" />
                    <span>{pkg.region}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          {/* Left Column (Overview, Path Route Traverse, Inclusions & Exclusions) */}
          <div className="lg:col-span-2 space-y-10">
            {/* 1. Overview / Verbatim Description */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-900 border-b border-neutral-100 pb-3">
                Overview &amp; Experience
              </h2>
              <p className="font-poppins text-[13px] sm:text-[14px] text-neutral-700 leading-relaxed whitespace-pre-line">
                {pkg.description}
              </p>
            </div>

            {/* 2. Trail & Route Traverse — Path-Structured Stepper */}
            {waypoints.length > 0 && (
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 pb-4">
                  <div className="flex items-center gap-2">
                    <Compass className="h-5 w-5 text-brand" />
                    <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-900">
                      Trail &amp; Route Traverse
                    </h2>
                  </div>
                  <span className="font-heading text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                    {waypoints.length} Route Stages
                  </span>
                </div>

                {/* Structured Path Map Line */}
                <div className="relative pl-6 sm:pl-8 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-brand before:via-neutral-300 before:to-brand">
                  <div className="space-y-3.5">
                    {waypoints.map((point, index) => {
                      const isStart = index === 0;
                      const isEnd = index === waypoints.length - 1;
                      return (
                        <div key={index} className="relative flex items-center gap-3.5 group">
                          {/* Stepper node circle along the path */}
                          <span
                            className={cn(
                              "absolute -left-6 sm:-left-8 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full text-[10px] sm:text-xs font-bold font-heading transition-all duration-200 ring-4 ring-white",
                              isStart
                                ? "bg-brand text-white shadow-xs"
                                : isEnd
                                ? "bg-neutral-950 text-white shadow-xs"
                                : "bg-white border-2 border-neutral-300 text-neutral-700 group-hover:border-brand group-hover:text-brand"
                            )}
                          >
                            {index + 1}
                          </span>

                          {/* Waypoint container card */}
                          <div className="flex-1 rounded-xl border border-neutral-200/80 bg-neutral-50/70 px-4 py-3 transition-all duration-200 group-hover:bg-white group-hover:border-brand/40 group-hover:shadow-xs">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="font-poppins text-xs sm:text-sm font-semibold text-neutral-900">
                                {point}
                              </span>
                              {isStart && (
                                <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded-md border border-emerald-300">
                                  Trailhead / Start
                                </span>
                              )}
                              {isEnd && (
                                <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-neutral-900 bg-neutral-200 px-2.5 py-0.5 rounded-md">
                                  Final Waypoint / End
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* 3. Package Inclusions & Exclusions (Audited Green & Red Sections) */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-900 border-b border-neutral-100 pb-4">
                Package Inclusions &amp; Features
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* What's Included (Green / Emerald Section) */}
                <div className="rounded-2xl border border-emerald-300/80 bg-emerald-50/50 p-5 sm:p-6 shadow-xs flex flex-col">
                  <div className="flex items-center justify-between border-b border-emerald-200/80 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                      <h3 className="font-heading text-sm sm:text-base font-extrabold uppercase tracking-wider text-emerald-950">
                        What&apos;s Included
                      </h3>
                    </div>
                    <span className="rounded-full bg-emerald-600 px-2.5 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                      Included
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 font-poppins text-xs sm:text-sm text-neutral-800 leading-snug">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What's Not Included (Red / Rose Section) */}
                <div className="rounded-2xl border border-rose-300/80 bg-rose-50/50 p-5 sm:p-6 shadow-xs flex flex-col">
                  <div className="flex items-center justify-between border-b border-rose-200/80 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-rose-600 shrink-0" />
                      <h3 className="font-heading text-sm sm:text-base font-extrabold uppercase tracking-wider text-rose-950">
                        What&apos;s Not Included
                      </h3>
                    </div>
                    <span className="rounded-full bg-rose-600 px-2.5 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                      Not Included
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 font-poppins text-xs sm:text-sm text-neutral-800 leading-snug">
                        <X className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Sticky Booking & Action Card) */}
          <aside className="lg:sticky lg:top-24 space-y-6">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-lg">
              <div className="border-b border-neutral-100 pb-5 mb-5">
                <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-neutral-600 block">
                  Package Price
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900">
                    {pkg.price ? pkg.price : "Custom Quote"}
                  </span>
                </div>
                <p className="font-poppins text-xs text-neutral-600 mt-2">
                  Duration: <strong className="text-neutral-800">{pkg.duration}</strong>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <ItineraryButton
                  destination={destination}
                  activity={activity}
                  title={`Book Package: ${pkg.title}`}
                  packageSlug={pkg.slug}
                  className="w-full font-heading text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl bg-brand text-white hover:bg-brand-deep transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Inquire / Customize Itinerary</span>
                </ItineraryButton>

                <a
                  href={site.phoneHref}
                  className="w-full font-heading text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl border border-neutral-300 text-neutral-800 hover:border-brand hover:text-brand hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call Us: {site.phone}</span>
                </a>
              </div>

              {/* Guarantees checklist */}
              <div className="mt-6 pt-5 border-t border-neutral-100 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-poppins text-neutral-700">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Verified Certified Mountain Guides</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-poppins text-neutral-700">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Flexible Dates & Group Customization</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-poppins text-neutral-700">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Zero Hidden Fees & Transparent Logistics</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-center space-y-2">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-900">
                Need Help Planning?
              </h4>
              <p className="font-poppins text-xs text-neutral-600">
                Speak directly with an Alpine Club India expedition leader to match your fitness and dates.
              </p>
              <Link
                href="/contact"
                className="inline-block font-heading text-xs font-bold uppercase tracking-wider text-brand hover:underline pt-1"
              >
                Go to Contact Form &rarr;
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Packages */}
        {relatedPackages.length > 0 && (
          <div className="mt-20 pt-12 border-t border-neutral-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-900">
                  More {pkg.categoryName}
                </h3>
                <p className="font-poppins text-xs sm:text-sm text-neutral-600 mt-1">
                  Explore other curated itineraries in this collection.
                </p>
              </div>
              <Link
                href="/packages"
                className="font-heading text-xs font-bold uppercase tracking-wider text-brand hover:underline"
              >
                View All &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPackages.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/packages/${rel.slug}`}
                  className="group rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-3.5 bg-neutral-100">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-heading text-sm sm:text-base font-bold text-neutral-900 group-hover:text-brand transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
