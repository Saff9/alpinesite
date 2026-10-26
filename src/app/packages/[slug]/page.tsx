import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  MapPin,
  Calendar,
  Mountain,
  ShieldCheck,
  Check,
  ArrowRight,
  Phone,
  Compass,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { packagesData, getPackageBySlug, getPackagesByCategory, type PackageItem } from "@/data/packages";
import { ItineraryButton } from "@/components/forms/itinerary-button";
import { site } from "@/data/site";
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

  return {
    title: `${pkg.title} | Alpine Club India`,
    description: pkg.description.slice(0, 160),
    alternates: { canonical: `/packages/${pkg.slug}` },
    openGraph: {
      title: `${pkg.title} | Alpine Club India Deals & Packages`,
      description: pkg.description.slice(0, 160),
      url: `/packages/${pkg.slug}`,
      images: [{ url: pkg.image }],
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

  return (
    <main className="min-h-screen bg-neutral-50/50">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-neutral-950 py-16 sm:py-24 text-white">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white drop-shadow-md">
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
          {/* Left Column (Overview, Specs, Route, Inclusions) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview / Verbatim Description */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-900 border-b border-neutral-100 pb-3">
                Overview & Experience
              </h2>
              <p className="font-poppins text-[13px] sm:text-[14px] text-neutral-700 leading-relaxed whitespace-pre-line">
                {pkg.description}
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-900 border-b border-neutral-100 pb-3">
                Key Trip Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-poppins">
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100">
                  <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-neutral-600 block">
                    Duration
                  </span>
                  <span className="font-semibold text-neutral-900">{pkg.duration}</span>
                </div>
                {pkg.region && (
                  <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100">
                    <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-neutral-600 block">
                      Region
                    </span>
                    <span className="font-semibold text-neutral-900">{pkg.region}</span>
                  </div>
                )}
                {pkg.bestSeason && (
                  <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100">
                    <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-neutral-600 block">
                      Best Time
                    </span>
                    <span className="font-semibold text-neutral-900">{pkg.bestSeason}</span>
                  </div>
                )}
                {pkg.difficulty && (
                  <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100">
                    <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-neutral-600 block">
                      Difficulty Level
                    </span>
                    <span className="font-semibold text-neutral-900">{pkg.difficulty}</span>
                  </div>
                )}
                {pkg.maxAltitude && (
                  <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100">
                    <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-neutral-600 block">
                      Maximum Altitude
                    </span>
                    <span className="font-semibold text-neutral-900">{pkg.maxAltitude}</span>
                  </div>
                )}
                {pkg.distance && (
                  <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100">
                    <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-neutral-600 block">
                      Trek / Route Distance
                    </span>
                    <span className="font-semibold text-neutral-900">{pkg.distance}</span>
                  </div>
                )}
                {pkg.startingPoint && (
                  <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100">
                    <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-neutral-600 block">
                      Starting Point
                    </span>
                    <span className="font-semibold text-neutral-900">{pkg.startingPoint}</span>
                  </div>
                )}
                {pkg.endingPoint && (
                  <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100">
                    <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-neutral-600 block">
                      Ending Point
                    </span>
                    <span className="font-semibold text-neutral-900">{pkg.endingPoint}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Route Milestones (if route specified) */}
            {pkg.route && (
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
                <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-900 border-b border-neutral-100 pb-3">
                  Trail & Route Traverse
                </h2>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <p className="font-poppins text-[13px] sm:text-[14px] text-neutral-800 font-medium leading-relaxed">
                    {pkg.route}
                  </p>
                </div>
              </div>
            )}

            {/* Inclusions / What's Included */}
            {pkg.inclusions && pkg.inclusions.length > 0 && (
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
                <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-900 border-b border-neutral-100 pb-3">
                  Package Inclusions & Features
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {pkg.inclusions.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-neutral-50/80 border border-neutral-100"
                    >
                      <Check className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                      <span className="font-poppins text-[13px] text-neutral-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
