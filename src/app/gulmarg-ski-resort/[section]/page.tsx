import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Mountain, Shield, CheckCircle2, Award, Calendar, Phone, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { ItineraryButton } from "@/components/forms/itinerary-button";
import { site } from "@/data/site";

interface ResortSectionProps {
  params: Promise<{ section: string }>;
}

const sectionData: Record<
  string,
  {
    title: string;
    subtitle: string;
    heroImage: string;
    tagline: string;
    description: string[];
    features: string[];
    recommendations: string[];
  }
> = {
  "about-gulmarg": {
    title: "About Gulmarg Ski Resort",
    subtitle: "The story, elevation, and winter soul of Asia’s premier powder skiing destination at 2,650 metres.",
    heroImage: "/images/hero/gulmarg-hero.jpg",
    tagline: "The Meadow of Flowers that Became a World Powder Capital",
    description: [
      "Nestled 52 km southwest of Srinagar in the Pir Panjal range of the western Himalayas, Gulmarg sits at an altitude of 2,650 metres (8,694 ft). Historically a summer retreat for Mughal emperors and British royalty, Gulmarg transformed into one of the globe's most revered ski meccas with the installation of the French-engineered Gulmarg Gondola.",
      "The resort operates with a delightfully unpolished, genuine mountain character: no velvet ropes, no designer fashion boutiques — just towering Himalayan pines, red gondola cabins, cozy wooden chalets with roaring bukhari wood-stoves, and snowfalls so deep (over 13 metres a season) that the entire bowl is buried under snow from December until late April.",
    ],
    features: [
      "Base elevation: 2,650 m · Top lift elevation: 3,980 m on Mount Apharwat",
      "Total vertical drop: 1,300 continuous metres of lift-served terrain",
      "Winter snowpack: Maritime-dry powder delivered by western disturbance storm cycles",
      "Short 90-minute scenic mountain drive from Srinagar International Airport (SXR)",
      "Cozy slope-side hotels, traditional Kashmiri cuisine, and vibrant global ski culture",
    ],
    recommendations: [
      "Best months: January and February for deep powder; March for spring corn snow",
      "Pre-book Phase 2 gondola passes early during peak holiday windows",
      "Hire a certified local mountain guide for all off-piste and tree runs",
    ],
  },
  "backcountry-skiing": {
    title: "Backcountry Skiing on Mount Apharwat",
    subtitle: "Untracked Himalayan powder bowls, steep chutes, and 1,300 vertical metres of freeride bliss.",
    heroImage: "/images/ski/powder-skiing.jpg",
    tagline: "One of the World's Greatest Big-Mountain Backcountry Arenas",
    description: [
      "Stepping out of the Phase 2 Gondola at 3,980 metres, you stand on the shoulder of Mount Apharwat overlooking Pakistan's Nanga Parbat and the endless Himalayan ridgelines. What lies beneath your ski tips is one of the most expansive lift-accessed backcountry playgrounds on Earth.",
      "From wide-open powder bowls like South Bowl and North Bowl to technical ridges like Shark Fin and long tree-lined descents running all the way down to the village of Drung, Gulmarg backcountry skiing offers immense variety. Because the terrain is avalanche-prone high alpine, skiing with an avalanche-certified local guide equipped with transceivers, probes, and shovels is non-negotiable.",
    ],
    features: [
      "Epic descents: South Bowl, Mary's Shoulder, North Bowl, Sunset Peak, Shark Fin",
      "Continuous 1,300 m vertical drop ending at Tangmarg road or Drung Valley",
      "Untracked snow accessible directly from lift or short 20–40 minute boot-packs",
      "Certified IFMGA and Avalanche Level 2 mountain guides provided by Alpine Club India",
      "Mammut Barryvox beacons, telescopic probes, and alloy shovels provided",
    ],
    recommendations: [
      "Strict avalanche protocol: beacon check daily before loading Phase 2",
      "Wide powder skis (105mm to 118mm underfoot) or freeride splitboard recommended",
      "Respect ski patrol avalanche hazard boards and guide instructions at all times",
    ],
  },
  "ski-touring": {
    title: "Ski Touring & Splitboarding Expeditions",
    subtitle: "Ascend beyond the lifts with climbing skins to explore untouched Himalayan peaks and valleys.",
    heroImage: "/images/ski/apharwat-peaks.jpg",
    tagline: "Earn Your Turns in Pure Himalayan Wilderness",
    description: [
      "For skiers and splitboarders seeking pure wilderness solitude away from lift lines, Mount Apharwat and the surrounding Pir Panjal range provide limitless touring possibilities. Using climbing skins and tech pin-bindings, you will ascend remote ridgelines, summit high shoulders, and drop into virgin powder bowls that see only a handful of tracks each winter.",
      "Alpine Club India arranges full-day and multi-day ski touring expeditions, including route planning, weather and snowpack analysis, satellite communications, and warm basecamp logistics. Whether skinning up to Apharwat’s true summit (4,200 m) or touring across to Sunset Peak, the rewards are unmatched.",
    ],
    features: [
      "Guided tours to Apharwat true summit (4,200 m) and Frozen Alpather Lake",
      "Full-day wilderness tours into Sunshine Bowl and the remote Babareshi pine glades",
      "Rental fleet of touring skis, tech pin bindings, splitboards, and pre-cut skins",
      "Small expedition groups capped at 4 skiers per certified mountain leader",
      "Wilderness First Responder safety and radio link with valley rescue",
    ],
    recommendations: [
      "Requires good physical endurance for 3–5 hours of uphill skinning",
      "Familiarity with kick-turns and transition procedures is helpful",
      "Pack lightweight touring layers, hydration, and energy snacks in a 30L pack",
    ],
  },
  "ski-classes": {
    title: "Ski School & Snowboard Lessons",
    subtitle: "Patient, certified instruction from first-time nursery slopes to advanced powder clinics.",
    heroImage: "/images/tours/gulmarg-ski-adventure/slopes.jpg",
    tagline: "Learn and Master Skiing With Gulmarg’s Best Instructors",
    description: [
      "Whether you have never stepped into a pair of skis or you are an intermediate skier wanting to master steep powder, our certified ski instructors make learning safe, rewarding, and fun. Gulmarg offers gentle 10–15° nursery slopes at the Baby Slopes and Kongdoori, perfectly suited for rapid progression.",
      "We offer private 1-on-1 coaching as well as intimate small group lessons. Our curriculum covers balance and snowplow stops for beginners, parallel carving on groomed runs, and specialized powder clinics covering stance, rhythm, and terrain selection in deep snow.",
    ],
    features: [
      "Level 1 Beginner Courses: Balance, snowplow turns, stopping, and drag-lift riding",
      "Level 2 Intermediate Progression: Stem christie to parallel turns on Kongdoori slopes",
      "Level 3 Advanced Powder Masterclasses: Skiing deep Himalayan powder with rhythm and flow",
      "Complete equipment package: Skis, boots, poles, and helmet fitted upon arrival",
      "Official certificate of completion from Alpine Club India Ski School",
    ],
    recommendations: [
      "First-time beginners should book at least a 3 to 5-day continuous lesson block",
      "Wear waterproof ski jacket and pants; helmets are mandatory for all students",
      "Private lessons offer the fastest skill development and flexible daily hours",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(sectionData).map((slug) => ({ section: slug }));
}

export async function generateMetadata({
  params,
}: ResortSectionProps): Promise<Metadata> {
  const { section } = await params;
  const data = sectionData[section];
  if (!data) return { title: "Section Not Found" };

  return {
    title: `${data.title} | Gulmarg Ski Resort | Alpine Club India`,
    description: data.subtitle,
    alternates: { canonical: `/gulmarg-ski-resort/${section}` },
    openGraph: {
      title: `${data.title} | Gulmarg Ski Resort`,
      description: data.subtitle,
      url: `/gulmarg-ski-resort/${section}`,
      images: [{ url: data.heroImage }],
    },
  };
}

export default async function ResortSectionPage({ params }: ResortSectionProps) {
  const { section } = await params;
  const data = sectionData[section];
  if (!data) notFound();

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello Alpine Club India! I'd like to ask about ${data.title} for my trip to Gulmarg.`
  )}`;

  return (
    <>
      <PageHeader
        title={data.title}
        subtitle={data.subtitle}
        image={data.heroImage}
        imageAlt={data.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Gulmarg Ski Resort", href: "/gulmarg-ski-resort" },
          { label: data.title },
        ]}
      />

      {/* Main Narrative */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
                {data.tagline}
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-neutral-950 sm:text-4xl">
                {data.title}
              </h2>
              <div className="mt-6 space-y-4 text-base text-neutral-600 font-poppins leading-relaxed">
                {data.description.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <ItineraryButton
                  destination="kashmir"
                  activity="skiing-snowboarding"
                  className="inline-flex items-center gap-2 rounded-none bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep font-heading cursor-pointer"
                >
                  Book / Inquire Now
                  <ArrowRight className="h-4 w-4" />
                </ItineraryButton>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-neutral-300 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:bg-neutral-100"
                >
                  <Link href="/ski-guides">Meet Our Ski Guides</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-sand p-7 sm:p-9 shadow-xs">
              <h3 className="font-heading text-xl font-bold text-neutral-950">
                Key Details &amp; Highlights
              </h3>
              <ul className="mt-5 space-y-3 font-poppins text-xs sm:text-sm text-neutral-700">
                {data.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-8 pt-6 border-t border-neutral-200 font-heading text-base font-bold text-neutral-950">
                Guide Recommendations
              </h4>
              <ul className="mt-3 space-y-2 font-poppins text-xs text-neutral-600">
                {data.recommendations.map((r) => (
                  <li key={r} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
