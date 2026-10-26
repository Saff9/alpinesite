import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Himalayan Destinations | Kashmir, Ladakh & Sikkim | Alpine Club India",
  description:
    "Explore our three premier mountain destinations across Kashmir, Ladakh, and Sikkim. Guided by our certified local Himalayan mountain team.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <>
      <PageHeader
        title="Our Destinations"
        subtitle="Handcrafted itineraries, certified mountain guides, and private logistics across Kashmir's timeless valleys, Ladakh's high Trans-Himalayan passes, and Kangchenjunga in Sikkim."
      />

      <section className="py-14 sm:py-20 lg:py-24 bg-neutral-50/50" aria-labelledby="destinations-list">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            title="Explore by Destination"
            description="From the high powder bowls of Gulmarg and remote passes of Ladakh to the sacred valleys of Sikkim, discover our three premier Himalayan territories."
          />

          {/* Clean Destinations Grid - Same structure as Packages */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {destinations.map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Clean Image Container without overlaid badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100">
                  <Image
                    src={dest.image}
                    alt={dest.imageAlt || dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Clean Title, Action Arrow and Short Description */}
                <div className="flex flex-col flex-1 justify-between pt-4 pb-1 gap-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-brand transition-colors leading-snug">
                      {dest.name}
                    </h3>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-all duration-200 group-hover:bg-brand group-hover:text-white mt-0.5">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <p className="font-poppins text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                    {dest.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
