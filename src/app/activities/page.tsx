import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mountain, Compass, Shield, Wind, CheckCircle2, Phone, Calendar } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { tours } from "@/data/tours";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Himalayan Activities & Mountain Expeditions | Alpine Club India",
  description:
    "Explore world-class Himalayan adventures: Gulmarg backcountry skiing, high-altitude trekking to Kangchenjunga in Sikkim, 7,000m mountaineering in Ladakh, and Himalayan bike expeditions.",
  alternates: { canonical: "/activities" },
  openGraph: {
    title: "Activities & Expeditions | Alpine Club India",
    description:
      "World-class ski guiding, high-altitude trekking, motorcycle safaris, and mountaineering across Kashmir, Ladakh, and Sikkim.",
    url: "/activities",
  },
};

const activityCategories = [
  {
    id: "ski",
    title: "Powder Skiing & Snowboarding",
    tagline: "Asia's powder capital with 1,300 m vertical drop served by the Gulmarg Gondola",
    image: "/images/ski/powder-skiing.jpg",
    features: [
      "Gulmarg Gondola to Apharwat Shoulder (3,980 m)",
      "13+ metres average annual maritime-dry Himalayan powder",
      "Certified IFMGA and Avalanche Level 2 mountain guides",
      "Full backcountry safety equipment: Mammut beacon, probe, shovel & ABS packs",
      "Beginner-friendly nursery slopes and certified ski school at Kongdoori",
    ],
    link: "/gulmarg-ski-resort",
    linkText: "Explore Gulmarg Ski Resort",
    highlight: "December to March",
  },
  {
    id: "trekking",
    title: "High-Altitude Trekking & Mountaineering",
    tagline: "Traverse high passes and behold 7,000 m massifs in Kashmir, Ladakh, and Sikkim",
    image: "/images/destinations/sikkim/kangchenjunga.jpg",
    features: [
      "Goechala Pass Trek (4,940 m) for eye-level views of Kangchenjunga (8,586 m)",
      "Kashmir Great Lakes trail visiting 7 alpine glacial tarns",
      "Markha Valley & Kang Yatse II (6,250 m) mountaineering ascent in Ladakh",
      "Nun (7,135 m) and Kun (7,077 m) Suru Valley expedition staging",
      "Yuksom to Dzongri ridge viewpoint (4,030 m) in the Eastern Himalayas",
    ],
    link: "/destinations/sikkim",
    linkText: "View Sikkim Treks",
    highlight: "April to November",
  },
  {
    id: "expeditions",
    title: "Motorcycle & 4x4 Overlanding",
    tagline: "Conquer the world's highest motorable passes across the Trans-Himalayan desert",
    image: "/images/tours/ladakh-bike-expedition/cover.jpg",
    features: [
      "Khardung La Pass (17,582 ft) & Chang La (17,590 ft) pass crossings",
      "Pangong Tso & Tso Moriri high-altitude saltwater lakes",
      "Royal Enfield Himalayan 411 fleet with dedicated support truck & mechanics",
      "Double-humped camel desert dunes in Nubra Valley",
      "Zanskar Valley gorge routes and ancient clifftop monasteries",
    ],
    link: "/tours/ladakh-bike-expedition",
    linkText: "View Ladakh Bike Expedition",
    highlight: "June to September",
  },
  {
    id: "leisure",
    title: "Alpine Leisure, Lakes & Culture",
    tagline: "Timeless Kashmiri houseboats, sunrise shikara rides, and Himalayan heritage",
    image: "/images/hero/dal-lake-hero.jpg",
    features: [
      "Cedarwood heritage houseboat stays on tranquil Nigeen and Dal Lakes",
      "Mughal gardens (Nishat & Shalimar Bagh) and April Tulip bloom",
      "Betaab and Aru Valleys riverside retreats in Pahalgam",
      "Centuries-old Buddhist gompas in Leh, Thiksey, and Hemis",
      "17-course traditional Kashmiri Wazwan dinners with local families",
    ],
    link: "/tours/kashmir-7-day-tour",
    linkText: "View Kashmir Explorer",
    highlight: "Year-Round",
  },
];

export default function ActivitiesPage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Alpine Club India! I want to inquire about your mountain activities and expeditions."
  )}`;

  return (
    <>
      <PageHeader
        title="Himalayan Activities"
        subtitle="Skiing Apharwat's deep powder, ascending Kangchenjunga's high passes, and overlanding Trans-Himalayan deserts with licensed mountain guides."
        image="/images/hero/gulmarg-hero.jpg"
        imageAlt="Skier in deep powder against dramatic Himalayan peaks"
        crumbs={[{ label: "Home", href: "/" }, { label: "Activities" }]}
      />

      {/* Intro Overview */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
              Mountain Expeditions &amp; Guiding
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-neutral-950 sm:text-4xl lg:text-5xl">
              Authentic Himalayan Adventures
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-600">
              Alpine Club India was founded by mountain guides born in these high valleys. Whether you are carving first tracks through Gulmarg’s maritime-dry powder, trekking beneath Kangchenjunga’s sheer granite faces in Sikkim, or navigating 7,000 m summits in Ladakh, every itinerary is guided with uncompromising mountain safety and genuine local hospitality.
            </p>
          </div>

          {/* Activity Category Cards */}
          <div className="mt-14 space-y-12 sm:space-y-16">
            {activityCategories.map((activity, idx) => (
              <div
                key={activity.id}
                id={activity.id}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-12 items-center rounded-3xl border border-neutral-200/80 bg-neutral-50/50 p-6 sm:p-10 shadow-sm ${
                  idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-md">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-black/75 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                      {activity.highlight}
                    </div>
                  </div>
                </div>

                <div className={idx % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-brand/10 px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-brand">
                    <Mountain className="h-3.5 w-3.5" aria-hidden="true" />
                    Activity Pillar {idx + 1}
                  </div>
                  <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-extrabold text-neutral-950">
                    {activity.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-neutral-600 italic">
                    {activity.tagline}
                  </p>

                  <ul className="mt-6 space-y-3 font-poppins text-xs sm:text-sm text-neutral-700">
                    {activity.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-brand mt-0.5" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button
                      asChild
                      className="rounded-xl bg-brand px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep"
                    >
                      <Link href={activity.link}>
                        {activity.linkText}
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand hover:underline"
                    >
                      Inquire Custom Dates
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Credentials & Safety Strip */}
      <section className="bg-neutral-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
              <Shield className="h-8 w-8 text-brand-light" aria-hidden="true" />
              <h4 className="mt-4 font-heading text-base font-bold text-white">Certified Mountain Guides</h4>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                IFMGA-aligned, HMI, and JIM&amp;WS certified expedition leaders with deep snowpack knowledge.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
              <Wind className="h-8 w-8 text-brand-light" aria-hidden="true" />
              <h4 className="mt-4 font-heading text-base font-bold text-white">Avalanche &amp; High Altitude Safety</h4>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                Comprehensive Mammut beacons, probes, shovels, satellite radios, and supplemental emergency oxygen.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
              <Compass className="h-8 w-8 text-brand-light" aria-hidden="true" />
              <h4 className="mt-4 font-heading text-base font-bold text-white">100% Local Stewardship</h4>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                Born in Gulmarg and Leh. We live where we guide, ensuring intimate local connections and fair wages.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
              <Calendar className="h-8 w-8 text-brand-light" aria-hidden="true" />
              <h4 className="mt-4 font-heading text-base font-bold text-white">Guaranteed Flexibility</h4>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                Weather-dependent snow-chasing and flexible day itineraries to ensure you hit the absolute best conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sand py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <SectionHeading
            title="Ready to Plan Your Mountain Expedition?"
            description="Speak directly with our senior mountain guides to customize your dates, check current snow and trail conditions, or reserve private guiding."
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="rounded-xl bg-brand px-8 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep h-12"
            >
              <Link href="/contact">
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
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
    </>
  );
}
