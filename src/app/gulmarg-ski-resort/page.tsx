import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mountain, Shield, CloudSnow, Compass, Award, Calendar, Phone, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Gulmarg Ski Resort | Gondola, Apharwat Peak & Backcountry Powder",
  description:
    "Complete guide to skiing in Gulmarg: Gulmarg Gondola Phase 1 & 2, Apharwat Peak 3,980m, deep Himalayan powder, backcountry avalanche safety, ski rentals, and certified ski guides.",
  alternates: { canonical: "/gulmarg-ski-resort" },
  openGraph: {
    title: "Gulmarg Ski Resort | Powder Skiing & Gondola Guide",
    description:
      "Ski 1,300 vertical metres of Himalayan powder from the world's highest gondola-served ski terrain on Apharwat Peak.",
    url: "/gulmarg-ski-resort",
  },
};

const resortHighlights = [
  {
    title: "1,300 Vertical Metres",
    desc: "From Apharwat shoulder at 3,980 m down to Gulmarg bowl at 2,650 m on a single run.",
  },
  {
    title: "13+ Metres Snowfall",
    desc: "Maritime-dry Himalayan powder delivered by consistent winter western disturbances.",
  },
  {
    title: "Phase 1 & Phase 2 Gondola",
    desc: "The world's highest operational ski lift, ascending through pine glades to alpine ridges.",
  },
  {
    title: "Zero Lift Queues",
    desc: "Vast open alpine bowls and uncrowded tree runs unmatched anywhere in Europe or America.",
  },
];

export default function GulmargSkiResortPage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Alpine Club India! I'd like to ask about skiing in Gulmarg, gondola passes, and hiring a certified ski guide."
  )}`;

  return (
    <>
      <PageHeader
        title="Gulmarg Ski Resort"
        subtitle="Asia’s legendary powder capital on Mount Apharwat (3,980 m), where 13+ metres of dry snow meets the world's highest lift-served terrain."
        image="/images/hero/gulmarg-hero.jpg"
        imageAlt="Red Gulmarg Gondola rising through snow-covered pine forests toward Mount Apharwat"
        crumbs={[{ label: "Home", href: "/" }, { label: "Gulmarg Ski Resort" }]}
      />

      {/* Overview Stat Strip */}
      <section className="border-b border-neutral-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {resortHighlights.map((stat) => (
              <div key={stat.title} className="text-center sm:text-left">
                <div className="font-heading text-xl sm:text-2xl font-extrabold text-brand">
                  {stat.title}
                </div>
                <p className="mt-1 font-poppins text-xs text-neutral-600 leading-snug">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: The Mountain & Gondola */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white" id="gondola">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
                The Lifeline of Mount Apharwat
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-neutral-950 sm:text-4xl">
                The Gulmarg Gondola Experience
              </h2>
              <div className="mt-6 space-y-4 text-base text-neutral-600 leading-relaxed font-poppins">
                <p>
                  Operating since 1998, the French-built Pomagalski Gulmarg Gondola is one of the highest cable cars in the world, carrying skiers from the town meadow at 2,650 m to the high alpine shoulder of Apharwat Peak at 3,980 m.
                </p>
                <p>
                  <strong className="text-neutral-950 font-bold">Phase 1 (Gulmarg to Kongdoori, 3,050 m):</strong> Climbs 400 vertical metres through sheltered Himalayan pine glades. Kongdoori features groomed beginner runs, chairlifts, cozy mountain huts, and warming cafes serving hot Kashmiri kahwa.
                </p>
                <p>
                  <strong className="text-neutral-950 font-bold">Phase 2 (Kongdoori to Apharwat Shoulder, 3,980 m):</strong> Sweeps past the tree line into raw, windswept high-alpine territory. From the top station, expert skiers and snowboarders drop into sprawling backcountry bowls, natural half-pipes, and deep powder lines descending 1,300 vertical metres back to the valley.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="rounded-xl bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep"
                >
                  <Link href="/gulmarg-ski-resort/about-gulmarg">
                    About Gulmarg Resort
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-neutral-300 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:bg-neutral-100"
                >
                  <Link href="/ski-guides">Hire a Certified Guide</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/tours/gulmarg-ski-adventure/gondola.jpg"
                alt="Gulmarg Gondola red cabin against snow-covered slopes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Terrain & Slopes Breakdown */}
      <section className="bg-sand py-16 sm:py-20 lg:py-24" id="slopes">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            title="Terrain, Slopes &amp; Backcountry Bowls"
            description="From gentle nursery runs at Kongdoori to steep ridgeline descents and tree runs in the pine forest."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-xs">
              <div className="inline-flex rounded-lg bg-green-100 px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-green-800">
                Beginners &amp; First Timers
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-neutral-950">
                Baby Slopes &amp; Highland Park
              </h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-poppins">
                Gentle 10–15° slopes equipped with drag lifts and magic carpets. Perfect for first-time skiers, children, and snow-lovers taking certified ski lessons with our patient instructors.
              </p>
              <ul className="mt-5 space-y-2 text-xs font-poppins text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> Soft groomed snow
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> Certified instructor coaching
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> Easy ski-in / ski-out access
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-xs">
              <div className="inline-flex rounded-lg bg-blue-100 px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-blue-800">
                Intermediates
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-neutral-950">
                Phase 1 Kongdoori &amp; Chairlift
              </h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-poppins">
                Cruising trails and open meadows served by the Kongdoori chairlift. Ideal for building carving confidence before venturing up to Mount Apharwat’s high alpine ridges.
              </p>
              <ul className="mt-5 space-y-2 text-xs font-poppins text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> Wide tree-lined groomers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> 400 m vertical drop
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> Sheltered on storm days
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-xs">
              <div className="inline-flex rounded-lg bg-red-100 px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-red-800">
                Advanced &amp; Experts
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-neutral-950">
                Phase 2 Apharwat &amp; Backcountry
              </h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-poppins">
                South Bowl, North Bowl, Mary’s Shoulder, and Shark Fin. Steep alpine pitches, untracked chutes, and deep powder lines dropping into the Drung Valley. Requires certified guide &amp; beacon.
              </p>
              <ul className="mt-5 space-y-2 text-xs font-poppins text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> 3,980 m summit ridge
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> 1,300 m continuous vertical
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> Guided off-piste safety
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ski Rental & Gear */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white" id="rental">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/ski/powder-skiing.jpg"
                alt="Ski equipment and powder skiing in Gulmarg"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
                Equipment &amp; Rental Shop
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-neutral-950 sm:text-4xl">
                Fat Powder Skis &amp; Safety Gear
              </h2>
              <p className="mt-4 text-base text-neutral-600 leading-relaxed font-poppins">
                You don’t need to haul heavy ski bags across airports. Alpine Club India maintains a modern, curated fleet of wide powder skis (105 mm to 118 mm underfoot), freeride snowboards, warm boots, and certified safety gear directly at our Gulmarg base.
              </p>

              <div className="mt-6 space-y-3 font-poppins text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-neutral-950">Avalanche Safety Kit:</strong> Mammut Barryvox digital transceivers, telescopic probes, alloy shovels, and optional Mammut ABS airbag backpacks.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mountain className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-neutral-950">Powder Skis &amp; Snowboards:</strong> K2, Armada, Salomon, and Burton rocker-camber boards tuned and waxed daily for Himalayan snow temperatures.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-neutral-950">Touring &amp; Splitboards:</strong> Pin bindings and pre-cut skins for exploring beyond the gondola boundaries.
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep"
                >
                  Reserve Ski &amp; Snowboard Rental
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Ski Guiding Callout */}
      <section className="bg-neutral-950 py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 text-center">
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-light">
            Certified Powder Guiding
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Ready to Ski Mount Apharwat?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-neutral-300 font-poppins">
            Direct guiding with our local mountain guides. Daily snowpack analysis, certified avalanche safety gear, backcountry bowls, and private transport.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="rounded-xl bg-brand px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep h-12"
            >
              <Link href="/ski-guides">
                Meet Our Ski Guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-800 h-12"
            >
              Inquire Over WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
