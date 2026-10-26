import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { ItineraryButton } from "@/components/forms/itinerary-button";
import { site } from "@/data/site";
import type { ActivityOption } from "@/data/itinerary-context";

interface ActivityPageProps {
  params: Promise<{ activity: string }>;
}

interface ActivityDetail {
  title: string;
  subtitle: string;
  leadBold?: string;
  heroImage: string;
  description: string[];
  highlights: string[];
  gearNeeded: string[];
  destinationFilter: string;
}

const activityData: Record<string, ActivityDetail> = {
  trekking: {
    title: "Trekking",
    subtitle: "The Indian Himalayas are a true paradise for alpine enthusiasts.",
    leadBold: "The Indian Himalayas are a true paradise for alpine enthusiasts.",
    heroImage: "/images/destinations/sikkim/kangchenjunga.jpg",
    description: [
      "The Indian Himalayas represent an extraordinary world of mountains, shaped by ancient geological forces, glaciers, rivers and changing climatic conditions. Stretching from the western Himalayan landscapes of Kashmir and Ladakh to the eastern mountains of Sikkim and Arunachal Pradesh, this vast region contains some of India's most spectacular natural environments.",
      "High mountain summits rise above deep valleys, while alpine lakes, coniferous forests, wildflower meadows and glacier-fed rivers create diverse landscapes. These mountain environments support rich biodiversity and provide opportunities for trekking, hiking, skiing, mountaineering and high-altitude exploration.",
      "Alpine Club India introduces the major Himalayan mountain regions, highlighting their geographical features, important peaks, natural attractions and adventure potential.",
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
    title: "Hiking",
    subtitle: "One trail. Endless possibilities.",
    leadBold: "One trail. Endless possibilities.",
    heroImage: "/images/destinations/kashmir/pahalgam.jpg",
    description: [
      "The Himalayas of India offer everything a hiker could dream of, from scenic mountain trails and lush green valleys to snow-capped peaks, pristine alpine lakes, and breathtaking panoramic views. Whether you're a beginner seeking peaceful nature walks or an experienced adventurer looking for challenging high-altitude treks, the Indian Himalayas promise unforgettable experiences at every turn. Discover the beauty of the mountains, immerse yourself in nature, and embark on an adventure that will stay with you forever.",
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
    title: `${data.title} in the Himalayas | Alpine Club India`,
    description: data.subtitle,
    alternates: { canonical: `/activities/${activity}` },
    openGraph: {
      title: `${data.title} | Alpine Club India`,
      description: data.subtitle,
      url: `/activities/${activity}`,
      images: [{ url: data.heroImage }],
    },
  };
}

export default async function ActivityDetailPage({ params }: ActivityPageProps) {
  const { activity } = await params;
  const data = activityData[activity];
  if (!data) notFound();

  return (
    <>
      <PageHeader
        title={data.title}
        subtitle={data.subtitle}
        image={data.heroImage}
        imageAlt={data.title}
      />

      {/* Description & Highlights */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
                Activity Overview
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-neutral-950 sm:text-4xl">
                {data.title}
              </h2>

              <div className="mt-6 space-y-4 text-base text-neutral-600 font-poppins leading-relaxed">
                {data.leadBold && (
                  <p className="font-heading text-lg sm:text-xl font-bold text-neutral-950 leading-snug">
                    {data.leadBold}
                  </p>
                )}
                {data.description.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <ItineraryButton
                  activity={
                    activity === "hiking"
                      ? "trekking"
                      : (activity as ActivityOption)
                  }
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep font-heading cursor-pointer"
                >
                  Inquire This Activity
                  <ArrowRight className="h-4 w-4" />
                </ItineraryButton>
                <ItineraryButton
                  activity={
                    activity === "hiking"
                      ? "trekking"
                      : (activity as ActivityOption)
                  }
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:bg-neutral-100 font-heading cursor-pointer"
                >
                  Custom Itinerary
                </ItineraryButton>
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
    </>
  );
}