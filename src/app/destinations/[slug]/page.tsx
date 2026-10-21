import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Mountain, Compass, MapPin, Shield, Calendar, Clock, CheckCircle2, Waves, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ItineraryButton } from "@/components/forms/itinerary-button";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { site, formatINR } from "@/data/site";
import type { DestinationOption } from "@/data/itinerary-context";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return { title: "Destination not found" };

  return {
    title: `${destination.name} Travel Guide, Peaks & Mountain Expeditions`,
    description: destination.shortDescription,
    keywords: [
      destination.name,
      destination.country,
      `${destination.name} tour packages`,
      `${destination.name} travel guide`,
      `${destination.name} best time to visit`,
      `Alpine Club India · ${destination.name}`,
    ],
    alternates: { canonical: `/destinations/${destination.slug}` },
    openGraph: {
      title: `${destination.name}, ${destination.tagline}`,
      description: destination.shortDescription,
      url: `/destinations/${destination.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${destination.name}, ${destination.tagline}`,
      description: destination.shortDescription,
    },
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Destinations",
        item: `${site.url}/destinations`,
      },
      { "@type": "ListItem", position: 3, name: destination.name },
    ],
  };

  const touristDestinationJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.shortDescription,
    image: `${site.url}${destination.image}`,
    url: `${site.url}/destinations/${destination.slug}`,
  };

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello Alpine Club India! I want to inquire about visiting and trekking in ${destination.name}.`
  )}`;

  return (
    <>
      <PageHeader
        title={destination.name}
        subtitle={destination.tagline}
        image={destination.image}
        imageAlt={destination.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: destination.name },
        ]}
      />

      {/* Quick Facts Strip */}
      <section className="border-b border-neutral-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-brand shrink-0" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                  Best Time
                </span>
                <span className="text-xs font-semibold text-neutral-900 font-heading">
                  {destination.bestTime}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-brand shrink-0" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                  Ideal Duration
                </span>
                <span className="text-xs font-semibold text-neutral-900 font-heading">
                  {destination.idealDuration}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mountain className="h-5 w-5 text-brand shrink-0" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                  Starting Price
                </span>
                <span className="text-xs font-semibold text-neutral-900 font-heading">
                  From {formatINR(destination.startingPrice)}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Compass className="h-5 w-5 text-brand shrink-0" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                  Expedition Style
                </span>
                <span className="text-xs font-semibold text-neutral-900 font-heading capitalize">
                  {destination.travelStyles.slice(0, 3).join(", ")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <SectionHeading title={`About ${destination.name}`} />
          <div className="mx-auto max-w-3xl space-y-5 text-center sm:text-left">
            {destination.description.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-relaxed text-neutral-700 sm:text-lg font-poppins"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Special Ladakh Geography & Major Peaks Section */}
      {slug === "ladakh" && (
        <section className="bg-sand py-16 sm:py-20 lg:py-24" id="peaks">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
                Trans-Himalayan Massifs &amp; 7,000m Summits
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-neutral-950 sm:text-4xl">
                Major Mountain Ranges and Peaks of Ladakh
              </h2>
              <p className="mt-4 text-base text-neutral-600 font-poppins leading-relaxed">
                Ladakh encompasses several prominent mountain systems, including the Karakoram, Ladakh Range, Zanskar Range, and parts of the Greater Himalaya.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-brand/10 px-2.5 py-1 text-xs font-bold font-heading text-brand">
                    Karakoram
                  </span>
                  <span className="font-heading text-base font-extrabold text-neutral-900">7,742 m</span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-neutral-950">
                  Saltoro Kangri
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-poppins">
                  A prominent summit in the Saltoro Range, part of the broader Karakoram mountain system. Highly technical high-altitude terrain.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-brand/10 px-2.5 py-1 text-xs font-bold font-heading text-brand">
                    Eastern Karakoram
                  </span>
                  <span className="font-heading text-base font-extrabold text-neutral-900">7,672 m</span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-neutral-950">
                  Saser Kangri I
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-poppins">
                  The highest peak of the Saser Muztagh, a subrange of the eastern Karakoram. Renowned for massive glacial walls and remote approach routes.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-brand/10 px-2.5 py-1 text-xs font-bold font-heading text-brand">
                    Suru Valley
                  </span>
                  <span className="font-heading text-base font-extrabold text-neutral-900">7,135 m</span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-neutral-950">
                  Mount Nun
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-poppins">
                  A major Himalayan peak in the Suru Valley region, forming the highest point of the twin Nun–Kun massif in the western Himalayas.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-brand/10 px-2.5 py-1 text-xs font-bold font-heading text-brand">
                    Suru Valley
                  </span>
                  <span className="font-heading text-base font-extrabold text-neutral-900">7,077 m</span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-neutral-950">
                  Mount Kun
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-poppins">
                  A prominent summit of the Nun–Kun massif in the western Himalayas, attracting international mountaineering expeditions annually.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-brand/10 px-2.5 py-1 text-xs font-bold font-heading text-brand">
                    Markha Valley
                  </span>
                  <span className="font-heading text-base font-extrabold text-neutral-900">~6,250 m</span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-neutral-950">
                  Kang Yatse II
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-poppins">
                  A notable trekking and mountaineering peak rising above the Nimaling plateau in the Markha Valley region with commanding views.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-brand/10 px-2.5 py-1 text-xs font-bold font-heading text-brand">
                    Stok Range
                  </span>
                  <span className="font-heading text-base font-extrabold text-neutral-900">6,153 m</span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-neutral-950">
                  Stok Kangri
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-poppins">
                  A well-known peak in the Stok Range near Leh; climbing access and permissions may vary. A classic acclimatisation viewpoint.
                </p>
              </div>
            </div>

            {/* Rivers, Valleys & High-Altitude Lakes Sub-block */}
            <div className="mt-14 rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10" id="valleys">
              <div id="lakes">
                <h3 className="font-heading text-2xl font-extrabold text-neutral-950">
                  Rivers, Valleys and High-Altitude Lakes
                </h3>
                <p className="mt-3 text-sm sm:text-base text-neutral-600 font-poppins leading-relaxed">
                  The Indus River flows through Ladakh, shaping its principal valleys and settlements. Other notable geographical features include the Zanskar Valley, Nubra Valley, Markha Valley, and the Changthang Plateau. High-altitude lakes such as Pangong Tso (134 km long) and Tso Moriri add to the region’s distinctive mountain environment.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-3 font-poppins text-xs text-neutral-800">
                  <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-100">
                    <strong className="block text-sm font-heading font-bold text-neutral-950 mb-1">
                      Pangong Tso
                    </strong>
                    Endorheic saltwater lake at 4,350 m, famous for shifting shades of cobalt, turquoise, and teal.
                  </div>
                  <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-100">
                    <strong className="block text-sm font-heading font-bold text-neutral-950 mb-1">
                      Nubra Valley
                    </strong>
                    Cold-desert sand dunes at Hunder with Bactrian camels framed between snowy Karakoram walls.
                  </div>
                  <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-100">
                    <strong className="block text-sm font-heading font-bold text-neutral-950 mb-1">
                      Zanskar Valley
                    </strong>
                    Deep granite canyons, remote cliff monasteries, and the legendary winter frozen-river Chadar trail.
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100" id="mountaineering">
                <h4 className="font-heading text-lg font-bold text-neutral-950">
                  Mountaineering and Adventure Significance
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-poppins leading-relaxed">
                  With its concentration of high mountain summits, including numerous peaks exceeding 7,000 metres, Ladakh offers exceptional terrain for mountaineering, technical climbing, high-altitude trekking, and remote Himalayan expeditions. The region’s high elevations require careful acclimatisation, appropriate expedition planning, and awareness of altitude-related risks.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Special Sikkim Kangchenjunga & Adventure Regions Section */}
      {slug === "sikkim" && (
        <section className="bg-sand py-16 sm:py-20 lg:py-24" id="kangchenjunga">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
                Eastern Himalayas &amp; World's Third-Highest Peak
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-neutral-950 sm:text-4xl">
                Sikkim’s Key Adventure Regions &amp; Trails
              </h2>
              <p className="mt-4 text-base text-neutral-600 font-poppins leading-relaxed">
                Home to the magnificent Kangchenjunga massif (8,586 m), Sikkim offers rugged mountain ranges, alpine lakes, and biodiversity from dense rhododendron forests to high glacial moraines.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs" id="goechala">
                <span className="rounded-lg bg-brand/10 px-2.5 py-1 text-xs font-bold font-heading text-brand">
                  4,940 m Pass
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-neutral-950">
                  Goechala Pass Trek
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-poppins">
                  The quintessential Sikkim trek. Starting in Yuksom, ascending through Tshoka and Dzongri to eye-level sunrise panoramas of Kangchenjunga&apos;s giant southeast face.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs" id="yuksom">
                <span className="rounded-lg bg-brand/10 px-2.5 py-1 text-xs font-bold font-heading text-brand">
                  Historic Capital
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-neutral-950">
                  Yuksom &amp; Dzongri Viewpoint
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-poppins">
                  The coronation site of the first Chogyal monarch (1642). Dzongri top (4,250 m) provides a breathtaking 360-degree amphitheater of peaks including Kabru, Pandim, and Simvo.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs" id="yumthang">
                <span className="rounded-lg bg-brand/10 px-2.5 py-1 text-xs font-bold font-heading text-brand">
                  North Sikkim
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-neutral-950">
                  Yumthang Valley of Flowers
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-poppins">
                  Nestled near Lachung at 3,564 m, carpeted with 24 species of rhododendrons in spring, hot sulphur springs, and snowy views extending to Zero Point (Yumesamdong).
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs" id="lachen">
                <span className="rounded-lg bg-brand/10 px-2.5 py-1 text-xs font-bold font-heading text-brand">
                  High Altitude Gateway
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-neutral-950">
                  Lachen &amp; Gurudongmar Lake
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-poppins">
                  Base for expeditions to the sacred Gurudongmar Lake (5,150 m), one of the highest lakes in the world, sacred to both Buddhists and Sikhs near the Tibetan frontier.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs">
                <span className="rounded-lg bg-brand/10 px-2.5 py-1 text-xs font-bold font-heading text-brand">
                  Lachung Village
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-neutral-950">
                  Lachung &amp; Katao
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-poppins">
                  Traditional wooden cottages, apple orchards, and cascading mountain waterfalls. The gateway to snow activities and high pass walks.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs">
                <span className="rounded-lg bg-brand/10 px-2.5 py-1 text-xs font-bold font-heading text-brand">
                  Monastery Heritage
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-neutral-950">
                  Pemayangtse &amp; Tashiding
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-poppins">
                  Ancient 17th-century Nyingma Buddhist monasteries perched on forested hillsides, preserving sacred masked dances and ancient scriptures.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Highlights Checklist */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            title={`Top Highlights in ${destination.name}`}
            description="Essential sights and high-altitude experiences curated by our mountain leaders."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destination.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-neutral-800 font-poppins">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Booking CTA */}
      <section className="bg-neutral-950 py-16 text-white text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Plan Your Journey to {destination.name}
          </h3>
          <p className="mt-3 text-sm text-neutral-300 font-poppins max-w-xl mx-auto">
            Contact our senior mountain guides directly to customize your itinerary, check permit requirements, or reserve dates.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ItineraryButton
              destination={destination.slug as DestinationOption}
              className="inline-flex items-center justify-center rounded-none bg-brand px-8 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-deep h-12 font-heading cursor-pointer shadow-xs transition-colors"
            >
              Inquire Itinerary Now
            </ItineraryButton>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-800 h-12"
            >
              WhatsApp Our Guides
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristDestinationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
