import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Himalayan Activities | Trekking, Hiking & Expeditions | Alpine Club India",
  description:
    "Explore world-class Himalayan adventures: high-altitude trekking to Kangchenjunga in Sikkim, alpine day hikes in Kashmir, winter snowshoeing, and 7,000m mountaineering expeditions in Ladakh.",
  alternates: { canonical: "/activities" },
  openGraph: {
    title: "Activities & Expeditions | Alpine Club India",
    description:
      "World-class high-altitude trekking, alpine day hikes, winter snowshoeing, and mountaineering expeditions across Kashmir, Ladakh, and Sikkim.",
    url: "/activities",
  },
};

interface ActivityCategory {
  id: string;
  title: string;
  tagline: string;
  image: string;
  link: string;
  linkText: string;
}

const activityCategories: ActivityCategory[] = [
  {
    id: "trekking",
    title: "Trekking",
    tagline: "The Indian Himalayas are a true paradise for alpine enthusiasts. Traverse high alpine passes, glacial tarns, and behold 7,000 m massifs.",
    image: "/images/destinations/sikkim/kangchenjunga.jpg",
    link: "/activities/trekking",
    linkText: "Explore Trekking",
  },
  {
    id: "hiking",
    title: "Hiking",
    tagline: "One trail. Endless possibilities. Scenic mountain trails, lush green valleys, and pristine alpine lakes at every turn.",
    image: "/images/destinations/kashmir/pahalgam.jpg",
    link: "/activities/hiking",
    linkText: "Explore Hiking",
  },
  {
    id: "winter-hiking",
    title: "Winter Hiking & Snowshoeing",
    tagline: "Silent frozen pine forests, snowshoe ridge walks, and magical sub-zero Himalayan landscapes.",
    image: "/images/destinations/kashmir/gulmarg.jpg",
    link: "/activities/winter-hiking",
    linkText: "Explore Winter Hiking",
  },
  {
    id: "expeditions",
    title: "Himalayan Expeditions",
    tagline: "Conquer 7,000 m summits and the world's highest motorable Trans-Himalayan passes.",
    image: "/images/tours/ladakh-bike-expedition/cover.jpg",
    link: "/activities/expeditions",
    linkText: "Explore Expeditions",
  },
];

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-neutral-50/50">
      {/* Page Header */}
      <PageHeader
        title="Himalayan Activities"
        subtitle="Skiing Apharwat's deep powder, ascending Kangchenjunga's high passes, and overlanding Trans-Himalayan deserts with licensed mountain guides."
        image="/images/hero/gulmarg-hero.jpg"
        imageAlt="Skier in deep powder against dramatic Himalayan peaks"
      />

      {/* Main Info Cards Section */}
      <section className="py-14 sm:py-20 lg:py-24" aria-labelledby="activities-list">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Mountain Expeditions & Guiding"
            title="Authentic Himalayan Adventures"
            description="Four signature mountain disciplines guided by native Himalayan professionals across Kashmir, Ladakh, and Sikkim."
          />

          {/* Clean Focused Info Cards Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {activityCategories.map((activity) => (
              <div
                key={activity.id}
                id={activity.id}
                className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Clean Image Container without overlaid badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100 shadow-xs">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Card Body: Heading, Short Paragraph, and Explore Button */}
                <div className="flex flex-col flex-1 justify-between pt-5 gap-4">
                  <div className="space-y-2">
                    <Link href={activity.link} className="focus:outline-hidden">
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-brand transition-colors leading-snug">
                        {activity.title}
                      </h3>
                    </Link>
                    <p className="font-poppins text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {activity.tagline}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Button
                      asChild
                      className="rounded-xl bg-brand px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep"
                    >
                      <Link href={activity.link}>
                        {activity.linkText}
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 sm:py-20 text-center border-t border-neutral-200">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="Start Your Journey"
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
    </main>
  );
}