import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonSkiing,
  faPersonHiking,
  faHotel,
  faVanShuttle,
  faSliders,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { SectionHeading } from "@/components/shared/section-heading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: faPersonSkiing,
    title: "Ski & Snowboard Guiding",
    description:
      "Private backcountry powder lines off Apharwat, snow school for beginners, and safety-certified local avalanche pros.",
  },
  {
    icon: faPersonHiking,
    title: "Trekking & Expeditions",
    description:
      "Kashmir Great Lakes, Tarsar Marsar, and high mountain passes across Ladakh & Spiti with experienced camp crews.",
  },
  {
    icon: faHotel,
    title: "Handpicked Stays & Houseboats",
    description:
      "Heritage cedarwood houseboats on Dal Lake, audited pine retreats, and boutique homestays with hot water guaranteed.",
  },
  {
    icon: faVanShuttle,
    title: "Private Mountain Logistics",
    description:
      "4×4 winter vehicles with snow chains, sanitized private transfers, gondola passes, and all permit formalities handled.",
  },
  {
    icon: faSliders,
    title: "Tailor-Made Itineraries",
    description:
      "Flexible private journeys designed around your pace, travel style, and preferences, no rigid group schedules.",
  },
  {
    icon: faShieldHalved,
    title: "24/7 Dedicated Support",
    description:
      "Direct line to our local Gulmarg office throughout your journey. A real mountain guide is always a call away.",
  },
] as const;

export function OurServices() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          description="We specialise  in adventure tours throughout the Himalayas of India.our journeys include Skiing, Trekking, Hiking, Cultural trips and High altitude expeditions"
        />

        {/* Responsive Grid: 1 column with generous gap on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {services.map(({ icon, title, description }) => (
            <article
              key={title}
              className="group flex flex-col items-center text-center rounded-2xl border border-border/80 bg-card p-5 sm:p-6 lg:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
            >
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 sm:mt-5 font-heading text-base sm:text-lg font-bold uppercase tracking-tight text-black">
                {title}
              </h3>
              <p className="mt-2.5 font-poppins font-normal text-sm leading-relaxed text-neutral-600 hidden lg:block">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            className="w-[80%] max-w-sm rounded-xl border border-brand bg-brand px-7 py-3 text-white shadow-sm hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-11 sm:w-auto"
          >
            <Link href="/contact">
              Discuss Your Trip Plan
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
