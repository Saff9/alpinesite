
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
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
    subtitle:
      "Perched high on Mt. Apharwat with over 1,330 vertical meters of skiable terrain in the mighty Himalayas.",
    heroImage: "/images/hero/gulmarg-hero.jpg",
    tagline: "Mt. Apharwat & The World's Highest Ski Lift",
    description: [
      "Perched at the very top of India, the beautiful village of Gulmarg sits high on Mt. Apharwat, a ski and snowboard resort with over 1,330 vertical meters of skiable terrain on the rim of the Kashmir valley in the Pir Panjal range of the mighty Himalayas. The resort's claim to fame is the Gulmarg Gondola – the highest ski lift in the world, ascending to an elevation of 3,980 meters.",
      "CNN International helped put Gulmarg Ski Resort on the map with a Number 7 ranking for the best ski areas in Asia.",
      "The gondola rises from the village in two stages to an elevation of 3,980 metres. During big storms, the huge pines from the mid station offer great protected tree lines, while the options off the top are endless. Lap the main bowls, hike to the summit and explore the northern slopes or drop off the ridge to remote mountain villages.",
      "The majestic views, amazing powder, unique cultural experience and our tailored Gulmarg ski tours make this place one of the greatest ski and boarding destinations on earth.",
    ],
    features: [
      "1,330+ vertical meters of skiable Himalayan terrain",
      "World's highest ski lift ascending to 3,980 meters",
      "Ranked #7 Best Ski Area in Asia by CNN International",
      "Protected deep powder tree skiing and massive alpine bowls",
    ],
    recommendations: [
      "Check daily avalanche advisory reports before riding Phase 2",
      "Always carry transceiver, probe, shovel and ride with certified local guides",
      "Pace yourself for high-altitude acclimatization above 3,900 meters",
    ],
  },

  "backcountry-skiing": {
    title: "Backcountry Skiing on Mount Apharwat",
    subtitle:
      "Explore Himalayan powder bowls, steep chutes, and spectacular mountain terrain.",
    heroImage: "/images/ski/powder-skiing.jpg",
    tagline: "Discover the Himalayan Backcountry",
    description: [
      "Explore the mountains of Gulmarg with Alpine Club India. Our Himalayan adventures bring travellers closer to nature while prioritising responsible exploration and safety.",
      "The Himalayan backcountry offers remarkable opportunities for experienced skiers. Because mountain conditions can change quickly, always follow local safety guidance and travel with qualified mountain professionals.",
    ],
    features: [
      "Explore Gulmarg's mountain terrain with experienced local professionals",
      "Discover spectacular Himalayan landscapes and powder snow",
      "Plan your adventure according to current mountain conditions",
    ],
    recommendations: [
      "Check local weather and avalanche conditions before heading out",
      "Use appropriate safety equipment and follow your guide's instructions",
      "Choose routes suitable for your experience and ability",
    ],
  },

  "ski-touring": {
    title: "Ski Touring & Splitboarding Expeditions",
    subtitle:
      "Discover the Himalayan wilderness through ski touring and splitboarding adventures.",
    heroImage: "/images/ski/apharwat-peaks.jpg",
    tagline: "Explore Beyond the Slopes",
    description: [
      "Experience the quieter side of the Himalayas through ski touring and splitboarding adventures with Alpine Club India. Explore mountain landscapes while developing a deeper connection with nature.",
      "Our adventures prioritise responsible travel, local expertise, and careful preparation. Routes and itineraries should be selected according to weather, snow conditions, and the experience of each group.",
    ],
    features: [
      "Explore Himalayan landscapes with qualified mountain professionals",
      "Plan expeditions around weather and snow conditions",
      "Experience responsible adventure travel in the mountains",
    ],
    recommendations: [
      "Prepare for changing weather and demanding mountain conditions",
      "Bring suitable touring equipment and clothing",
      "Follow your guide's safety advice throughout the expedition",
    ],
  },

  "ski-classes": {
    title: "Ski School & Snowboard Lessons",
    subtitle:
      "Build confidence on the snow with skiing and snowboarding instruction in Gulmarg.",
    heroImage: "/images/tours/gulmarg-ski-adventure/slopes.jpg",
    tagline: "Your Himalayan Snow Adventure Starts Here",
    description: [
      "Whether you are stepping into skis for the first time or looking to improve your technique, Gulmarg offers an unforgettable setting for learning and enjoying winter sports.",
      "Alpine Club India helps travellers explore adventure opportunities across the Himalayas, with an emphasis on safety, responsible travel, and experiences connected to local communities.",
    ],
    features: [
      "Explore skiing opportunities suitable for different experience levels",
      "Plan your winter adventure around your skills and goals",
      "Discover Gulmarg's mountain scenery and snow-covered slopes",
    ],
    recommendations: [
      "Choose instruction appropriate for your experience level",
      "Wear suitable winter clothing and a properly fitted helmet",
      "Follow instructor guidance and local slope safety rules",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(sectionData).map((slug) => ({
    section: slug,
  }));
}

export async function generateMetadata({
  params,
}: ResortSectionProps): Promise<Metadata> {
  const { section } = await params;
  const data = sectionData[section];

  if (!data) {
    return { title: "Section Not Found" };
  }

  return {
    title: `${data.title} | Gulmarg Ski Resort | Alpine Club India`,
    description: data.subtitle,
    alternates: {
      canonical: `/gulmarg-ski-resort/${section}`,
    },
    openGraph: {
      title: `${data.title} | Gulmarg Ski Resort`,
      description: data.subtitle,
      url: `/gulmarg-ski-resort/${section}`,
      images: [{ url: data.heroImage }],
    },
  };
}

export default async function ResortSectionPage({
  params,
}: ResortSectionProps) {
  const { section } = await params;
  const data = sectionData[section];

  if (!data) {
    notFound();
  }

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello Alpine Club India! I'd like to ask about ${data.title} for my trip to Gulmarg.`,
  )}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Gulmarg Ski Resort", item: `${site.url}/gulmarg-ski-resort` },
      { "@type": "ListItem", position: 3, name: data.title, item: `${site.url}/gulmarg-ski-resort/${section}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader
        title={data.title}
        subtitle={data.subtitle}
        image={data.heroImage}
        imageAlt={data.title}
        crumbs={[
          { label: "Home", href: "/" },
          {
            label: "Gulmarg Ski Resort",
            href: "/gulmarg-ski-resort",
          },
          { label: data.title },
        ]}
      />

      {/* Main Narrative */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
              {data.tagline}
            </span>

            <h2 className="mt-3 font-heading text-3xl font-extrabold text-neutral-950 sm:text-4xl">
              {data.title}
            </h2>

            <div className="mt-6 space-y-4 font-poppins text-base leading-relaxed text-neutral-600">
              {data.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <ItineraryButton
                destination="kashmir"
                activity="skiing-snowboarding"
                className="inline-flex cursor-pointer items-center gap-2 rounded-none bg-brand px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep"
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
        </div>
      </section>
    </>
  );
}
