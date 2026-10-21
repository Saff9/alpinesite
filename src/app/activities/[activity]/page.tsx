import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Mountain, Compass, Shield, CheckCircle2, Calendar, Phone, Clock, Wind } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/cards/tour-card";

interface ActivityPageProps {
  params: Promise<{ activity: string }>;
}

const activityData: Record<
  string,
  {
    title: string;
    subtitle: string;
    heroImage: string;
    duration: string;
    bestSeason: string;
    difficulty: string;
    description: string[];
    highlights: string[];
    gearNeeded: string[];
    destinationFilter: string;
  }
> = {
  trekking: {
    title: "High-Altitude Himalayan Trekking",
    subtitle: "Classic pass crossings, glacial tarns, and front-row massifs in Kashmir, Ladakh, and Sikkim.",
    heroImage: "/images/destinations/sikkim/kangchenjunga.jpg",
    duration: "6 – 9 Days",
    bestSeason: "June – October (Kashmir/Ladakh); April – May & Oct – Nov (Sikkim)",
    difficulty: "Moderate to Strenuous (up to 4,940 m)",
    description: [
      "Himalayan trekking with Alpine Club India is built on genuine mountain stewardship. We lead small, high-safety expeditions through some of the most dramatic terrain on Earth — from the turquoise tarns of the Kashmir Great Lakes to the colossal Kangchenjunga massif in Sikkim and the arid canyons of the Markha Valley.",
      "Every trek is staffed by certified Wilderness First Responder mountain leaders, experienced camp cooks who serve fresh hot meals, and reliable pack animal support. We pace daily ascents to ensure proper acclimatisation and maximum enjoyment of the high alpine landscapes.",
    ],
    highlights: [
      "Goechala Pass (4,940 m) eye-level view of Kangchenjunga",
      "Kashmir Great Lakes (Vishansar, Gadsar, Gangabal)",
      "Markha Valley & Kang Yatse II base camp in Ladakh",
      "High ridge camps at Tshoka, Dzongri, and Nichnai",
      "Comprehensive medical kits, pulse oximeters, and emergency oxygen",
    ],
    gearNeeded: [
      "High-ankle waterproof trekking boots with good tread",
      "Down jacket (-10°C rated) and thermal base layers",
      "Four-season sleeping bag (rental available)",
      "Trekking poles with snow/mud baskets",
      "UV400 Category 3/4 alpine sunglasses",
    ],
    destinationFilter: "sikkim",
  },
  hiking: {
    title: "Himalayan Day Hikes & Ridge Walks",
    subtitle: "Accessible alpine meadow hikes, pine forest trails, and panoramic view ridges for all fitness levels.",
    heroImage: "/images/destinations/kashmir/pahalgam.jpg",
    duration: "1 – 4 Days",
    bestSeason: "April – November",
    difficulty: "Easy to Moderate (up to 3,200 m)",
    description: [
      "You don't need two weeks of expedition time to experience Himalayan magic. Our guided day hikes take you into untouched cedar forests, cascading waterfalls, and rolling flower meadows around Gulmarg, Pahalgam, and Sonamarg.",
      "Perfect for families, couples, and casual walkers, our hikes include private transfers, packed artisan lunches, and local nature guides who share stories of local flora, wildlife, and Himalayan folklore.",
    ],
    highlights: [
      "Aru to Lidderwat meadow day hike in Pahalgam",
      "Kongdoori ridge to Khilanmarg wildflowers walk",
      "Thajiwas Glacier foot-trail in Sonamarg",
      "Yuksom coronation trail and Dubdi monastery in Sikkim",
      "Sham Valley gentle village walks and apricot orchard trails",
    ],
    gearNeeded: [
      "Comfortable trail walking shoes or lightweight boots",
      "Breathable daypack (20–30L) with rain cover",
      "Fleece jacket and windproof shell",
      "Reusable water bottle and sunscreen",
      "Camera or smartphone with extra power bank",
    ],
    destinationFilter: "kashmir",
  },
  "winter-hiking": {
    title: "Winter Snow Hiking & Snowshoeing",
    subtitle: "Silent frozen pine forests, snowshoe ridge walks, and magical sub-zero Himalayan landscapes.",
    heroImage: "/images/destinations/kashmir/gulmarg.jpg",
    duration: "1 – 5 Days",
    bestSeason: "December – March",
    difficulty: "Moderate (snow-pack walking)",
    description: [
      "When 13+ metres of snow blankets Gulmarg and the higher valleys, the mountains take on a profound, serene stillness. Winter hiking and snowshoeing allows non-skiers and adventure enthusiasts to access frozen waterfalls, high pine glades, and dramatic ridge viewpoints.",
      "We provide modern MSR snowshoes, insulated gaiters, and adjustable poles. Guided by our winter mountain leaders, you will follow safe routes away from avalanche paths, ending your day around blazing wood bonfires with hot kahwa.",
    ],
    highlights: [
      "Snowshoe treks from Tangmarg pine woods to Gulmarg meadow",
      "Kongdoori snow park and frozen alpine stream traverses",
      "Drung frozen waterfall day walk with giant icicle formations",
      "Bonfire evenings in heated alpine chalets",
      "Wildlife tracking in snow-covered pine glades",
    ],
    gearNeeded: [
      "Insulated, waterproof winter boots",
      "Waterproof ski pants and down jacket",
      "MSR Snowshoes & trekking poles (provided)",
      "Thermal gloves, fleece beanie, and neck gaiter",
      "Snow goggles or polarized sunglasses",
    ],
    destinationFilter: "gulmarg",
  },
  expeditions: {
    title: "Trans-Himalayan Expeditions & Safaris",
    subtitle: "Overland 4x4 safaris, high-pass motorcycle tours, and remote mountaineering expeditions.",
    heroImage: "/images/tours/ladakh-bike-expedition/cover.jpg",
    duration: "8 – 12 Days",
    bestSeason: "June – September",
    difficulty: "Challenging (high-altitude road & terrain)",
    description: [
      "For those who crave vast horizons and remote wild country. Our expeditions cross the highest motorable passes on the planet, including Khardung La (17,582 ft) and Chang La (17,590 ft), skirting high-altitude saltwater lakes like Pangong Tso and Tso Moriri.",
      "Choose between riding Royal Enfield Himalayan motorcycles with dedicated backup mechanics or traveling in expedition-prepared 4x4 SUVs with oxygen support and vetted high-altitude logistics.",
    ],
    highlights: [
      "Cross Khardung La (17,582 ft) into the Nubra Valley",
      "Camping beside the shifting turquoise waters of Pangong Tso",
      "Suru Valley expedition base beneath Nun (7,135 m) and Kun (7,077 m)",
      "Double-humped camel desert dunes of Hunder",
      "Zanskar Valley gorges and clifftop monasteries",
    ],
    gearNeeded: [
      "Full motorcycle protective armor / all-weather riding jacket",
      "Heavy-duty windproof riding gloves and thermal liners",
      "Full-face helmet and clear/tinted visors",
      "Thermal sleeping liner and insulated water flask",
      "Personal medical kit and hydration bladder",
    ],
    destinationFilter: "ladakh",
  },
};

export function generateStaticParams() {
  return Object.keys(activityData).map((slug) => ({ activity: slug }));
}

export async function generateMetadata({
  params,
}: ActivityPageProps): Promise<Metadata> {
  const { activity } = await params;
  const data = activityData[activity];
  if (!data) return { title: "Activity Not Found" };

  return {
    title: `${data.title} | Alpine Club India`,
    description: data.subtitle,
    alternates: { canonical: `/activities/${activity}` },
  };
}

export default async function ActivityDetailPage({ params }: ActivityPageProps) {
  const { activity } = await params;
  const data = activityData[activity];
  if (!data) notFound();

  const relatedTours = tours.slice(0, 3);
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello Alpine Club India! I want to inquire about your ${data.title} activities.`
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
          { label: "Activities", href: "/activities" },
          { label: data.title },
        ]}
      />

      {/* Quick Specs */}
      <section className="border-b border-neutral-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                Typical Duration
              </span>
              <span className="text-sm font-bold text-neutral-900 font-heading">
                {data.duration}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                Best Season
              </span>
              <span className="text-sm font-bold text-neutral-900 font-heading">
                {data.bestSeason}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                Difficulty Level
              </span>
              <span className="text-sm font-bold text-neutral-900 font-heading">
                {data.difficulty}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                Guiding Ratio
              </span>
              <span className="text-sm font-bold text-brand font-heading">
                Certified 1:4 Ratio
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Description & Highlights */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
                Activity Overview
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-neutral-950 sm:text-4xl">
                Experience the Mountain First-Hand
              </h2>
              <div className="mt-6 space-y-4 text-base text-neutral-600 font-poppins leading-relaxed">
                {data.description.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep"
                >
                  Inquire This Activity
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-neutral-300 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:bg-neutral-100"
                >
                  <Link href="/contact">Custom Itinerary</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-sand p-7 sm:p-9 shadow-xs">
              <h3 className="font-heading text-xl font-bold text-neutral-950">
                Key Highlights
              </h3>
              <ul className="mt-5 space-y-3 font-poppins text-xs sm:text-sm text-neutral-700">
                {data.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-8 pt-6 border-t border-neutral-200 font-heading text-base font-bold text-neutral-950">
                Recommended Gear
              </h4>
              <ul className="mt-3 space-y-2 font-poppins text-xs text-neutral-600">
                {data.gearNeeded.map((g) => (
                  <li key={g} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tour Packages */}
      <section className="bg-sand py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            title="Featured Packages &amp; Departures"
            description="Handcrafted itineraries matching this activity with certified guiding and full on-ground logistics."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {relatedTours.map((tour, i) => (
              <TourCard key={tour.slug} tour={tour} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
