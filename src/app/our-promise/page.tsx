import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, HeartHandshake, Compass, Users, Sparkles, Star, Award, CheckCircle2, Phone } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Promise | Alpine Club India",
  description:
    "Our guiding philosophy: 100% certified mountain guides, uncompromising avalanche safety, fair local stewardship, transparent pricing, and genuine Himalayan hospitality.",
  alternates: { canonical: "/our-promise" },
  openGraph: {
    title: "Our Promise | Alpine Club India",
    description:
      "Safety, integrity, and local mountain stewardship. Read what Alpine Club India promises to every traveller.",
    url: "/our-promise",
  },
};

const promisePillars = [
  {
    number: "01",
    title: "100% Certified Mountain Guides",
    desc: "We never sub-contract your safety to untrained seasonal freelancers. Every Alpine Club India guide holds formal diplomas from premier institutes (JIM&WS, HMI) alongside recognized international avalanche safety training.",
    icon: Award,
  },
  {
    number: "02",
    title: "Uncompromising Alpine Safety",
    desc: "At 3,980 metres on Apharwat or 4,940 metres at Goechala, safety is paramount. We supply top-tier Mammut digital transceivers, probes, shovels, satellite radios, and emergency medical oxygen on every expedition.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "True Local Stewardship & Fair Wages",
    desc: "We are born in these peaks. Operating from Gulmarg since 2012, 100% of your booking supports local mountain families, ski instructors, horsemen, and drivers with fair wages and respectful working conditions.",
    icon: HeartHandshake,
  },
  {
    number: "04",
    title: "Transparent Pricing · Zero Hidden Surprises",
    desc: "No hidden permit surcharges, no mandatory shopping commission stops, and no unexpected fees. What we agree upon in your custom proposal is exactly what you pay.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Weather Flexibility & Snow-Chasing",
    desc: "The Himalayas make their own weather. When the top gondola is on wind-hold or high passes close temporarily, our guides immediately pivot to sheltered tree runs or alternate cultural routes at zero penalty.",
    icon: Compass,
  },
];

export default function OurPromisePage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Alpine Club India! I read your promise and would love to discuss planning an authentic Himalayan trip."
  )}`;

  return (
    <>
      <PageHeader
        title="Our Promise"
        subtitle="Behind every powder line on Mount Apharwat and every high pass in Ladakh stands an unshakeable commitment to mountain safety, honest hospitality, and local stewardship."
        image="/images/hero/gulmarg-hero.jpg"
        imageAlt="Snow covered peaks under clear blue sky"
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Promise" }]}
      />

      {/* Intro Manifesto */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 text-center">
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
            Our Guiding Philosophy
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-neutral-950 sm:text-4xl lg:text-5xl">
            Mountains Demand Respect. We Deliver Integrity.
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-neutral-600 font-poppins">
            When you travel to the high Himalayas with Alpine Club India, you are not booking through a nameless corporate aggregator in a distant metropolis. You are placing your trust in mountain professionals whose homes, families, and lifetimes are rooted right here in Gulmarg, Kashmir, Ladakh, and Sikkim.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="mx-auto mt-14 max-w-7xl px-5 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {promisePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="relative rounded-3xl border border-neutral-200/90 bg-sand p-8 shadow-xs transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-xs">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="font-heading text-2xl font-black text-neutral-300">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold text-neutral-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 font-poppins">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}

            {/* Testimonial / Google Reviews Card */}
            <div className="rounded-3xl border border-brand/20 bg-brand p-8 text-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="mt-4 font-heading text-2xl font-extrabold text-white">
                  5.0 ★ Google Rating
                </div>
                <p className="mt-3 text-sm text-neutral-200 leading-relaxed font-poppins">
                  &ldquo;Imtiyaz and his guides at Alpine Club India made our Gulmarg ski week unforgettable. True mountain safety, unmatched powder guidance, and the warmest hospitality.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20 text-xs font-semibold uppercase tracking-wider text-neutral-300">
                Verified Travellers from Over 28 Countries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-neutral-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
            <div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-light">
                {site.stats.yearsExperience}+
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-neutral-400 font-heading font-semibold">
                Years Operating
              </div>
            </div>
            <div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-light">
                {site.stats.travellersServed}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-neutral-400 font-heading font-semibold">
                Travellers Guided
              </div>
            </div>
            <div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-light">
                100%
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-neutral-400 font-heading font-semibold">
                Certified Guides
              </div>
            </div>
            <div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-light">
                5.0 ★
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-neutral-400 font-heading font-semibold">
                Perfect Guest Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-white py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <SectionHeading
            title="Experience the High Himalayas With Us"
            description="Let’s design a journey that honors your time, your safety, and your love for mountain exploration."
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="rounded-xl bg-brand px-8 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep h-12"
            >
              <Link href="/contact">
                Plan Your Journey
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-xs hover:bg-neutral-50 h-12"
            >
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
