import type { Metadata } from "next";
import Link from "next/link";
import { Mountain, Compass, MapPin, Waves, Trees, ShieldAlert, ArrowRight, Layers, SunMedium } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { ItineraryButton } from "@/components/forms/itinerary-button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "The Indian Himalayas | Geography, Ranges, Peaks & Glaciers | Alpine Club India",
  description:
    "Comprehensive geographical guide to the Indian Himalayas: major mountain ranges, 8,000m summits, glaciers, high passes, river systems, lakes, and alpine ecosystems.",
  keywords: [
    "Indian Himalayas",
    "Himalayan mountain ranges",
    "Kangchenjunga peak",
    "Nanda Devi Uttarakhand",
    "Siachen glacier",
    "Zanskar river Ladakh",
    "Himalayan geography",
    "highest mountain passes India",
    "Alpine Club India Himalayas guide",
  ],
  alternates: { canonical: "/himalayas-of-india" },
  openGraph: {
    title: "The Indian Himalayas | Alpine Club India",
    description:
      "Geography, mountain ranges, peaks, glaciers, rivers, and lakes across Jammu & Kashmir, Ladakh, Himachal, Uttarakhand, and Sikkim.",
    url: "/himalayas-of-india",
    images: [
      {
        url: `${site.url}/images/destinations/sikkim/kangchenjunga.jpg`,
        width: 1200,
        height: 630,
        alt: "The Indian Himalayas - Peaks and Glaciers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Indian Himalayas | Alpine Club India",
    description:
      "Geography, mountain ranges, peaks, glaciers, rivers, and lakes across the Indian Himalayas.",
    images: [`${site.url}/images/destinations/sikkim/kangchenjunga.jpg`],
  },
};

const peaksData = [
  { name: "K2", elevation: "8,611 m", region: "Karakoram" },
  { name: "Kangchenjunga", elevation: "8,586 m", region: "Sikkim–Nepal boundary" },
  { name: "Nanda Devi", elevation: "7,816 m", region: "Uttarakhand" },
  { name: "Kamet", elevation: "7,756 m", region: "Uttarakhand" },
  { name: "Saser Kangri I", elevation: "7,672 m", region: "Eastern Karakoram" },
  { name: "Mamostong Kangri", elevation: "7,516 m", region: "Eastern Karakoram" },
  { name: "Nun", elevation: "7,135 m", region: "Zanskar Range" },
  { name: "Chaukhamba I", elevation: "7,138 m", region: "Garhwal Himalayas" },
  { name: "Trishul I", elevation: "7,120 m", region: "Garhwal Himalayas" },
  { name: "Kangto", elevation: "Approx. 7,090 m", region: "Arunachal Pradesh region" },
];

const glaciersData = [
  { name: "Siachen Glacier", region: "Karakoram", length: "75 km" },
  { name: "Gangotri Glacier", region: "Uttarakhand", length: "30 km" },
  { name: "Zemu Glacier", region: "Sikkim", length: "26 km" },
  { name: "Bara Shigri Glacier", region: "Himachal Pradesh", length: "25 km" },
  { name: "Drang-Drung Glacier", region: "Zanskar, Ladakh", length: "23–25 km" },
  { name: "Milam Glacier", region: "Uttarakhand", length: "16–19 km" },
  { name: "Satopanth Glacier", region: "Uttarakhand", length: "Approx. 13 km" },
  { name: "Pindari Glacier", region: "Uttarakhand", length: "9–10 km" },
  { name: "Chhota Shigri Glacier", region: "Himachal Pradesh", length: "Approx. 9 km" },
  { name: "Kolahoi Glacier", region: "Kashmir", length: "Historically approx. 5 km" },
];

const passesData = [
  { name: "Umling La", elevation: "5,798 m", region: "Ladakh" },
  { name: "Mana Pass", elevation: "5,610 m", region: "Uttarakhand" },
  { name: "Karakoram Pass", elevation: "5,540 m", region: "Karakoram region" },
  { name: "Khardung La", elevation: "Approx. 5,359 m", region: "Ladakh" },
  { name: "Chang La", elevation: "Approx. 5,360 m", region: "Ladakh" },
  { name: "Lipulekh Pass", elevation: "Approx. 5,100 m", region: "Uttarakhand" },
  { name: "Baralacha La", elevation: "Approx. 4,890 m", region: "Himachal Pradesh" },
  { name: "Kunzum Pass", elevation: "Approx. 4,551 m", region: "Himachal Pradesh" },
  { name: "Pensi La", elevation: "Approx. 4,400 m", region: "Zanskar, Ladakh" },
  { name: "Nathu La", elevation: "Approx. 4,310 m", region: "Sikkim" },
  { name: "Fotu La", elevation: "Approx. 4,108 m", region: "Ladakh" },
  { name: "Rohtang Pass", elevation: "Approx. 3,978 m", region: "Himachal Pradesh" },
  { name: "Zoji La", elevation: "Approx. 3,528 m", region: "Kashmir–Ladakh" },
  { name: "Banihal Pass", elevation: "Approx. 2,832 m", region: "Jammu and Kashmir" },
];

const lakesData = [
  { name: "Pangong Tso", region: "Ladakh", elevation: "4,225 m" },
  { name: "Tso Moriri", region: "Ladakh", elevation: "4,522 m" },
  { name: "Tso Kar", region: "Ladakh", elevation: "4,530 m" },
  { name: "Suraj Tal", region: "Himachal Pradesh", elevation: "4,890 m" },
  { name: "Chandratal", region: "Himachal Pradesh", elevation: "4,300 m" },
  { name: "Roopkund", region: "Uttarakhand", elevation: "5,020 m" },
  { name: "Hemkund", region: "Uttarakhand", elevation: "4,329 m" },
  { name: "Gurudongmar Lake", region: "Sikkim", elevation: "5,150 m" },
  { name: "Tsomgo Lake", region: "Sikkim", elevation: "3,753 m" },
  { name: "Tarsar Lake", region: "Kashmir", elevation: "Approx. 3,780 m" },
  { name: "Marsar Lake", region: "Kashmir", elevation: "Approx. 4,000 m" },
  { name: "Gangabal Lake", region: "Kashmir", elevation: "Approx. 3,575 m" },
  { name: "Dal Lake", region: "Kashmir", elevation: "1,583 m" },
  { name: "Wular Lake", region: "Kashmir", elevation: "Approx. 1,580 m" },
];

const mountainRanges = [
  {
    name: "Karakoram Range",
    description: "Located north of Ladakh, the Karakoram contains enormous glaciers, rugged terrain, and some of the world's highest peaks.",
  },
  {
    name: "Ladakh Range",
    description: "A high-altitude mountain system characterised by barren slopes, rocky ridges, deep valleys, and cold desert landscapes.",
  },
  {
    name: "Zanskar Range",
    description: "Located in the Ladakh region, the Zanskar Range features remote valleys, high mountain passes, steep ridges, and glacial river systems.",
  },
  {
    name: "Pir Panjal Range",
    description: "Extending across Jammu and Kashmir and Himachal Pradesh, this range separates the Kashmir Valley from parts of the outer Himalayan region.",
  },
  {
    name: "Greater Himalayas (Himadri)",
    description: "The principal high mountain belt of the Himalayas, containing extensive glaciers, permanent snowfields, and numerous peaks above 6,000 metres.",
  },
  {
    name: "Dhauladhar Range",
    description: "A prominent mountain range in Himachal Pradesh, characterised by steep ridges, forested slopes, and high snow-covered summits.",
  },
  {
    name: "Garhwal and Kumaon Himalayas",
    description: "Located in Uttarakhand, these mountain regions contain major peaks, extensive glaciers, and the headwaters of important Himalayan rivers.",
  },
  {
    name: "Sikkim Himalayas",
    description: "A high mountain region dominated by Kangchenjunga and surrounded by glaciers, alpine lakes, and deep valleys.",
  },
  {
    name: "Eastern Himalayas",
    description: "Extending through Arunachal Pradesh, this region features rugged mountains, heavy monsoon rainfall, dense forests, and exceptional biodiversity.",
  },
];

export default function HimalayasOfIndiaPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "The Himalayas of India", item: `${site.url}/himalayas-of-india` },
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
        title="The Indian Himalayas"
        subtitle="Geography, Mountain Ranges, Peaks, Glaciers, Rivers and Lakes"
        image="/images/hero/kashmir-hero.jpg"
        imageAlt="The Indian Himalayas mountain peaks and glaciers"
      />

      {/* 1. Overview & Geographical Location */}
      <section className="py-14 sm:py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Physical Geography"
            title="Overview of the Indian Himalayas"
          />

          <div className="mt-8 space-y-6 font-poppins text-base sm:text-lg leading-relaxed text-neutral-700">
            <p>
              The Indian Himalayas form an extensive mountain region along the northern and northeastern parts of India. Stretching from Jammu and Kashmir and Ladakh in the west to Arunachal Pradesh in the east, this vast mountain system features towering peaks, extensive glaciers, deep valleys, high-altitude lakes, dense forests, and diverse ecosystems.
            </p>
            <p>
              The Indian Himalayas are part of the greater Himalayan mountain system, shaped by millions of years of tectonic activity, glacial erosion, and river processes. Their landscapes range from subtropical foothills and temperate forests to alpine meadows, cold deserts, and permanently snow-covered summits.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-10">
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-neutral-950">
              Geographical Location &amp; Extent
            </h3>
            <div className="mt-4 space-y-4 font-poppins text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                The Indian Himalayan region extends across six principal states and union territories: <strong>Jammu and Kashmir, Ladakh, Himachal Pradesh, Uttarakhand, Sikkim, and Arunachal Pradesh</strong>.
              </p>
              <p>
                The Himalayan mountain system stretches for approximately <strong>2,400–2,500 kilometres</strong> across South Asia. Its width varies considerably, generally reaching around <strong>200–400 kilometres</strong>.
              </p>
              <p>
                The region borders the Indo-Gangetic plains to the south and the Tibetan Plateau to the north. Its western, central, and eastern sectors differ in elevation, climate, rainfall, vegetation, and geological structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Major Mountain Ranges */}
      <section className="py-14 sm:py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tectonic Systems"
            title="Major Mountain Ranges"
            description="The Indian Himalayan region contains several major mountain ranges, each with distinctive geographical characteristics."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mountainRanges.map((range, i) => (
              <div
                key={range.name}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs hover:border-brand/40 transition-colors"
              >
                <div className="flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-brand">
                  <Mountain className="h-4 w-4" />
                  Range 0{i + 1}
                </div>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-extrabold text-neutral-950">
                  {range.name}
                </h3>
                <p className="mt-2.5 font-poppins text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {range.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Highest Mountains & Peaks */}
      <section className="py-14 sm:py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Summits Above 7,000m"
            title="Highest Mountains and Peaks"
            description="The Indian Himalayan region contains some of the highest mountains on Earth. Their elevations range from approximately 6,000 metres to peaks exceeding 8,000 metres."
          />

          {/* Peaks Table */}
          <div className="mt-10 overflow-x-auto rounded-2xl border border-neutral-200 shadow-xs">
            <table className="w-full text-left font-poppins text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-900 text-white font-heading text-xs uppercase tracking-wider">
                  <th className="p-4 sm:px-6">Mountain</th>
                  <th className="p-4 sm:px-6">Elevation</th>
                  <th className="p-4 sm:px-6">Region</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white">
                {peaksData.map((peak, idx) => (
                  <tr key={peak.name} className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50/60"}>
                    <td className="p-4 sm:px-6 font-heading font-bold text-neutral-950">{peak.name}</td>
                    <td className="p-4 sm:px-6 font-semibold text-brand">{peak.elevation}</td>
                    <td className="p-4 sm:px-6 text-neutral-600">{peak.region}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl bg-amber-50/70 border border-amber-200/80 p-4 font-poppins text-xs text-amber-900 leading-relaxed">
            <strong>Geographical note:</strong> K2 lies in the Karakoram in a region administered by Pakistan and claimed by India. Kangchenjunga, on the Sikkim–Nepal boundary, is generally recognised as India&apos;s highest mountain.
          </div>
        </div>
      </section>

      {/* 4. Major Glaciers & Mountain Passes */}
      <section className="py-14 sm:py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Glaciers */}
            <div>
              <div className="flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-brand mb-2">
                <Waves className="h-4 w-4" />
                Freshwater Reservoirs
              </div>
              <h3 className="font-heading text-2xl font-black text-neutral-950">
                Major Glaciers
              </h3>
              <p className="mt-2 font-poppins text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Glaciers store freshwater, feed mountain rivers, shape valleys, and contribute to the formation of glacial lakes.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200 shadow-xs bg-white">
                <table className="w-full text-left font-poppins text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-neutral-900 text-white font-heading text-xs uppercase tracking-wider">
                      <th className="p-3.5 sm:px-5">Glacier</th>
                      <th className="p-3.5 sm:px-5">Region</th>
                      <th className="p-3.5 sm:px-5">Approx. Length</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {glaciersData.map((g, idx) => (
                      <tr key={g.name} className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50/60"}>
                        <td className="p-3.5 sm:px-5 font-heading font-bold text-neutral-950">{g.name}</td>
                        <td className="p-3.5 sm:px-5 text-neutral-600">{g.region}</td>
                        <td className="p-3.5 sm:px-5 font-semibold text-brand">{g.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Passes */}
            <div>
              <div className="flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-brand mb-2">
                <Compass className="h-4 w-4" />
                High Altitude Routes
              </div>
              <h3 className="font-heading text-2xl font-black text-neutral-950">
                Major Mountain Passes
              </h3>
              <p className="mt-2 font-poppins text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Connecting valleys across high ridges. Many lie above 4,000 metres and experience severe winter conditions.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200 shadow-xs bg-white max-h-[515px] overflow-y-auto">
                <table className="w-full text-left font-poppins text-xs sm:text-sm border-collapse">
                  <thead className="sticky top-0 z-10">
                    <tr className="bg-neutral-900 text-white font-heading text-xs uppercase tracking-wider">
                      <th className="p-3.5 sm:px-5">Mountain Pass</th>
                      <th className="p-3.5 sm:px-5">Elevation</th>
                      <th className="p-3.5 sm:px-5">Region</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {passesData.map((p, idx) => (
                      <tr key={p.name} className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50/60"}>
                        <td className="p-3.5 sm:px-5 font-heading font-bold text-neutral-950">{p.name}</td>
                        <td className="p-3.5 sm:px-5 font-semibold text-brand">{p.elevation}</td>
                        <td className="p-3.5 sm:px-5 text-neutral-600">{p.region}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Major Rivers & Lakes */}
      <section className="py-14 sm:py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Hydrology & Drainage"
            title="Major Rivers and Lakes"
            description="The Indian Himalayas are the source region for several major river systems that sustain ecosystems, agriculture, and settlements across northern India."
          />

          {/* River Systems */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6">
              <h4 className="font-heading text-base font-bold text-neutral-950">
                Indus River System
              </h4>
              <p className="mt-2 font-poppins text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Originates in the Tibetan Plateau and flows through Ladakh. Principal Himalayan tributaries include the Zanskar, Shyok, Nubra, and Suru.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6">
              <h4 className="font-heading text-base font-bold text-neutral-950">
                Ganges River System
              </h4>
              <p className="mt-2 font-poppins text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Formed at Devprayag by the confluence of the Bhagirathi and Alaknanda. Includes the Yamuna, Mandakini, Pindar, Dhauliganga, and Nandakini.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6">
              <h4 className="font-heading text-base font-bold text-neutral-950">
                Brahmaputra System
              </h4>
              <p className="mt-2 font-poppins text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Originating on the Tibetan Plateau as the Yarlung Tsangpo, entering Arunachal Pradesh as the Siang/Dihang before flowing into Assam.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6">
              <h4 className="font-heading text-base font-bold text-neutral-950">
                Other Major Rivers
              </h4>
              <p className="mt-2 font-poppins text-xs sm:text-sm text-neutral-600 leading-relaxed">
                The Chenab, Ravi, Beas, and Sutlej drain extensive parts of the western and central Himalayas through glaciated gorges.
              </p>
            </div>
          </div>

          {/* Lakes Table */}
          <div className="mt-12">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-neutral-950 mb-4">
              Major High-Altitude &amp; Valley Lakes
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-xs">
              <table className="w-full text-left font-poppins text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-neutral-900 text-white font-heading text-xs uppercase tracking-wider">
                    <th className="p-3.5 sm:px-6">Lake</th>
                    <th className="p-3.5 sm:px-6">Region</th>
                    <th className="p-3.5 sm:px-6">Approximate Elevation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white">
                  {lakesData.map((lake, idx) => (
                    <tr key={lake.name} className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50/60"}>
                      <td className="p-3.5 sm:px-6 font-heading font-bold text-neutral-950">{lake.name}</td>
                      <td className="p-3.5 sm:px-6 text-neutral-600">{lake.region}</td>
                      <td className="p-3.5 sm:px-6 font-semibold text-brand">{lake.elevation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Forests, Wildlife & Ecology */}
      <section className="py-14 sm:py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 space-y-12">
          {/* Valleys */}
          <div>
            <h3 className="font-heading text-2xl font-extrabold text-neutral-950">
              Valleys and Natural Landscapes
            </h3>
            <p className="mt-3 font-poppins text-sm sm:text-base text-neutral-700 leading-relaxed">
              The Indian Himalayas contain a wide range of valleys formed through tectonic activity, glacial erosion, and river processes. Important valleys include the <strong>Kashmir Valley, Nubra Valley, Zanskar Valley, Spiti Valley, Lahaul Valley, Kullu Valley, Kangra Valley, and the Garhwal valleys</strong> of Uttarakhand.
            </p>
            <p className="mt-2 font-poppins text-sm sm:text-base text-neutral-700 leading-relaxed">
              These landscapes contain steep mountain walls, river gorges, fertile valley floors, glacial moraines, alpine meadows, and high-altitude plateaus. The cold deserts of Ladakh and Spiti contrast with the forested valleys and high-rainfall landscapes of the eastern Himalayas.
            </p>
          </div>

          {/* Vegetation */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-neutral-950">
              Forests and Vegetation
            </h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 font-poppins text-xs sm:text-sm text-neutral-700">
              <div className="p-4 rounded-xl bg-neutral-50">
                <strong className="block font-heading text-neutral-900 mb-1">Subtropical Forests</strong>
                Found in lower mountain slopes and foothills; chir pine, broadleaf trees, and subtropical shrubs.
              </div>
              <div className="p-4 rounded-xl bg-neutral-50">
                <strong className="block font-heading text-neutral-900 mb-1">Temperate Broadleaf Forests</strong>
                Oak, maple, chestnut, and birch species at intermediate elevations.
              </div>
              <div className="p-4 rounded-xl bg-neutral-50">
                <strong className="block font-heading text-neutral-900 mb-1">Coniferous Forests</strong>
                Dominated by deodar cedar, blue pine, fir, spruce, and other cold-climate conifers.
              </div>
              <div className="p-4 rounded-xl bg-neutral-50">
                <strong className="block font-heading text-neutral-900 mb-1">Subalpine &amp; Alpine Meadows</strong>
                Birch, juniper, cold-tolerant shrubs, and high-altitude grasslands active during short summers.
              </div>
            </div>
          </div>

          {/* Wildlife */}
          <div>
            <h3 className="font-heading text-2xl font-extrabold text-neutral-950">
              Wildlife and Biodiversity
            </h3>
            <p className="mt-3 font-poppins text-sm sm:text-base text-neutral-700 leading-relaxed">
              Notable wildlife includes the <strong>snow leopard, Himalayan brown bear, Himalayan black bear, red panda, Himalayan musk deer, Himalayan tahr, bharal (blue sheep), Himalayan monal, and western tragopan</strong>.
            </p>
            <p className="mt-2 font-poppins text-sm sm:text-base text-neutral-700 leading-relaxed">
              Protected conservation areas include <strong>Hemis National Park (Ladakh), Great Himalayan National Park (Himachal Pradesh), Nanda Devi National Park (Uttarakhand), and Khangchendzonga National Park (Sikkim)</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Geological and Environmental Overview CTA */}
      <section className="py-16 sm:py-24 bg-neutral-950 text-white text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
            Preserve · Respect · Explore
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Explore the Indian Himalayas With Us
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-poppins max-w-2xl mx-auto leading-relaxed">
            From high passes and glacial moraines to ski bowls and sacred valleys, Alpine Club India organizes responsible, sustainable, and safety-certified expeditions led by local Himalayan mountain guides.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="rounded-xl bg-brand px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-deep shadow-md"
            >
              <Link href="/packages">
                Explore Himalayan Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-xl border-neutral-700 bg-neutral-900 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-800"
            >
              <Link href="/destinations">
                Our Destinations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
