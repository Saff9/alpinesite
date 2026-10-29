import type { Metadata } from "next";
import { Mountain, ShieldCheck, Compass, Snowflake, Calendar, AlertTriangle } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Ski Resorts in India | Gulmarg, Auli, Solang & Narkanda | Alpine Club India",
  description:
    "Explore the spectacular ski resorts in India across the Himalayas: Gulmarg in J&K, Auli in Uttarakhand, Solang Valley near Manali, and Narkanda in Himachal Pradesh.",
  keywords: [
    "ski resorts in India",
    "best ski resorts in India",
    "Gulmarg ski resort",
    "Auli ski resort",
    "Solang valley skiing",
    "Narkanda skiing Himachal",
    "skiing in India cost",
    "ski season in India",
    "powder skiing India",
    "Himalayan ski destinations",
  ],
  alternates: { canonical: "/ski-resorts-in-india" },
  openGraph: {
    title: "Ski Resorts in India | Alpine Club India",
    description:
      "Spectacular skiing destinations in the Himalayas: Gulmarg, Auli, Solang Valley, and Narkanda.",
    url: "/ski-resorts-in-india",
    images: [
      {
        url: `${site.url}/images/ski/powder-skiing.jpg`,
        width: 1200,
        height: 630,
        alt: "Ski Resorts in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ski Resorts in India | Alpine Club India",
    description:
      "Spectacular skiing destinations in the Himalayas: Gulmarg, Auli, Solang Valley, and Narkanda.",
    images: [`${site.url}/images/ski/powder-skiing.jpg`],
  },
};

const skiResorts = [
  {
    number: "01",
    name: "Gulmarg",
    region: "Jammu & Kashmir",
    elevation: "3,980 m Gondola / 4,300 m Peaks",
    specialty: "Best for Off-Piste Skiing & Deep Powder",
    bestTime: "December to March",
    description:
      "World-renowned for dry Himalayan powder and massive alpine terrain. Gulmarg features the iconic two-stage gondola ascending to 3,980 metres, surrounded by protected pine forests and dramatic high-altitude bowls.",
  },
  {
    number: "02",
    name: "Auli",
    region: "Uttarakhand",
    elevation: "2,500 – 3,050 m",
    specialty: "Groomed Slopes & Nanda Devi Vistas",
    bestTime: "December to March",
    description:
      "Set amidst oak and coniferous woodlands with panoramic vistas of Nanda Devi (7,816 m). Auli is famous for its wide ski slopes, chairlift systems, and scenic mountain backdrops.",
  },
  {
    number: "03",
    name: "Solang Valley",
    region: "Near Manali, Himachal Pradesh",
    elevation: "2,560 m",
    specialty: "Beginner Slopes & Winter Snow Sports",
    bestTime: "December to March",
    description:
      "Located just 14 km from Manali, Solang Valley is a popular winter sports hub featuring gentle slopes, introductory ski facilities, and dramatic views of glaciated Pir Panjal peaks.",
  },
  {
    number: "04",
    name: "Narkanda",
    region: "Himachal Pradesh",
    elevation: "2,708 m",
    specialty: "Pine Forest Runs & Historic Training",
    bestTime: "December to March",
    description:
      "Situated along the Hindustan-Tibet road near Hatu Peak. Surrounded by dense fir forests and apple orchards, Narkanda offers quiet, scenic beginner-friendly slopes.",
  },
];

export default function SkiResortsInIndiaPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Ski Resorts in India", item: `${site.url}/ski-resorts-in-india` },
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
        title="Ski Resorts in India"
        subtitle="India has some spectacular skiing destinations in the Himalayas, from the world-famous slopes of Gulmarg in Kashmir to the scenic ski resorts of Auli and Manali."
        image="/images/hero/gulmarg-hero.jpg"
        imageAlt="Skiing in the Himalayas of India"
      />

      {/* 1. Overview & Resorts Showcase (No Navigation Buttons) */}
      <section className="py-14 sm:py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Spectacular Destinations"
            title="Skiing Destinations in the Indian Himalayas"
            description="The best time for skiing is generally December to March, depending on snowfall and local conditions."
          />

          {/* 4 Showcase Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {skiResorts.map((resort) => (
              <div
                key={resort.name}
                className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-xs font-black text-brand bg-brand/10 px-2.5 py-1 rounded-md">
                      {resort.number}
                    </span>
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-500">
                      {resort.region}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 font-poppins text-xs font-medium text-neutral-500">
                    <Calendar className="h-3.5 w-3.5 text-brand" />
                    <span>{resort.bestTime}</span>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="font-heading text-2xl font-extrabold text-neutral-950">
                    {resort.name}
                  </h3>
                  <p className="mt-1 font-heading text-xs font-bold uppercase tracking-wider text-brand">
                    {resort.specialty}
                  </p>
                  <p className="mt-3 font-poppins text-xs sm:text-sm leading-relaxed text-neutral-600">
                    {resort.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-neutral-100">
                    <span className="font-poppins text-xs font-semibold text-neutral-800">
                      Elevation: <span className="font-normal text-neutral-600">{resort.elevation}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Gulmarg Deep Dive Showcase (All text visible, pure showcase) */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 font-heading text-xs font-bold uppercase tracking-wider text-brand">
              <Snowflake className="h-4 w-4" />
              World-Renowned Off Piste
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950">
              Gulmarg — Best for Off Piste Skiing
            </h2>
          </div>

          {/* Full Narrative Text Displayed */}
          <div className="mt-8 space-y-5 font-poppins text-sm sm:text-base text-neutral-700 leading-relaxed max-w-4xl">
            <p>
              Gulmarg offers some of the most exciting skiing terrain in Asia, with options ranging from beginner slopes to challenging mountain descents. The gondola rises from the village in two stages to an elevation of 3,980 metres. During big storms, the huge pines from the mid station offer great protected tree lines, while the options off the top are endless. Lap the main bowls, hike to the summit and explore the northern slopes or drop off the ridge to remote mountain villages.
            </p>
            <p className="font-medium text-neutral-900">
              The majestic views, amazing powder, unique cultural experience and our tailored Gulmarg ski tours make this place one of the greatest ski and boarding destinations on earth.
            </p>
          </div>

          {/* Core Gulmarg Specifications Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Terrain & Elevation */}
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-6 sm:p-7">
              <div className="flex items-center gap-2.5 font-heading text-xs font-bold uppercase tracking-wider text-brand">
                <Mountain className="h-4 w-4" />
                Terrain &amp; Elevation
              </div>
              <h3 className="mt-3 font-heading text-lg font-bold text-neutral-950">
                Mount Affarwat (3,940 m to 4,300 m)
              </h3>
              <p className="mt-2 font-poppins text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Mount Affarwat reaches 3,940 metres with surrounding peaks up to 4,300 metres, offering over 1,300 to 1,600 metres of continuous vertical drops.
              </p>
            </div>

            {/* Backcountry Focus */}
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-6 sm:p-7">
              <div className="flex items-center gap-2.5 font-heading text-xs font-bold uppercase tracking-wider text-brand">
                <Compass className="h-4 w-4" />
                Backcountry Focus
              </div>
              <h3 className="mt-3 font-heading text-lg font-bold text-neutral-950">
                95% Natural Backcountry
              </h3>
              <p className="mt-2 font-poppins text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Roughly 95% of the terrain is un-groomed, natural backcountry (alpine bowls, steep ridges, gullies, and tree lines) rather than a traditional resort with daily avalanche control.
              </p>
            </div>

            {/* Safety & Guides */}
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-6 sm:p-7">
              <div className="flex items-center gap-2.5 font-heading text-xs font-bold uppercase tracking-wider text-brand">
                <ShieldCheck className="h-4 w-4" />
                Safety &amp; Guides
              </div>
              <h3 className="mt-3 font-heading text-lg font-bold text-neutral-950">
                Certified Mountain Leadership
              </h3>
              <p className="mt-2 font-poppins text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Hiring a certified local or international ski guide is strongly recommended due to avalanche risks, changing snowpack conditions, and unmarked alpine hazards.
              </p>
            </div>

            {/* Mandatory Gear */}
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-6 sm:p-7">
              <div className="flex items-center gap-2.5 font-heading text-xs font-bold uppercase tracking-wider text-brand">
                <AlertTriangle className="h-4 w-4" />
                Mandatory Gear
              </div>
              <h3 className="mt-3 font-heading text-lg font-bold text-neutral-950">
                Avalanche Safety &amp; Powder Setups
              </h3>
              <p className="mt-2 font-poppins text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Fat skis (110mm+ waist width with touring setups), splitboards, and a complete avalanche safety kit (transceiver, shovel, probe, and ABS airbag) are essential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}