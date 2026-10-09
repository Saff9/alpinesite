import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Mountain, Radio, TramFront, Snowflake } from "lucide-react";

const services = [
  {
    icon: Mountain,
    title: "Private ski & snowboard guides",
    description:
      "Apharwat's bowls, the tree runs off Kongdoori, the burns nobody else times right — our guides grew up turning on this mountain and read its weather by instinct.",
  },
  {
    icon: Radio,
    title: "Safety-first backcountry",
    description:
      "Every powder day starts with a terrain briefing and a pack check — transceivers, probes, shovels — and routes that respect what the snowpack is actually doing.",
  },
  {
    icon: TramFront,
    title: "Gondola logistics, handled",
    description:
      "We queue for the first batch, track the wind holds, and when the top station closes we already have the day re-planned around the lower slopes.",
  },
  {
    icon: Snowflake,
    title: "Gear, lessons & first-timers",
    description:
      "Rental fitting the evening before, patient instructors on the beginner slopes, and dry socks waiting in the car — skiing should be the hard part.",
  },
] as const;

const gondolaFacts = [
  { figure: "2,650", unit: "m", label: "Gulmarg base altitude" },
  { figure: "3,980", unit: "m", label: "Apharwat top station" },
  { figure: "Dec–Apr", unit: "", label: "Ski & powder season" },
] as const;

export function SkiGulmarg() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="ski-gulmarg-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="The home mountain"
          title="Ski Gulmarg with the guides who live here"
          description="Gulmarg is the reason the agency exists — a 13-season guiding operation on one of the highest lift-served mountains on earth. Everything below the gondola is our office."
          linkHref="/tours/gulmarg-ski-adventure"
          linkLabel="Ski week packages"
        />

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[1.05fr_1fr]">
          {/* Photo column — action over the piste, peaks behind */}
          <figure className="relative min-h-[22rem] overflow-hidden rounded-2xl sm:min-h-[26rem]">
            <Image
              src="/images/ski/powder-skiing.jpg"
              alt="A skier in dark outerwear laying fresh tracks through deep powder under a blue Himalayan sky"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              quality={90}
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-pine-deep/80 via-transparent to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center p-5 sm:p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  Powder day, Apharwat face
                </p>
                <p className="mt-1 max-w-sm text-pretty text-sm leading-relaxed text-white/90">
                  A guide&rsquo;s line down — the mountain has a hundred of
                  them and we know which one today wants.
                </p>
              </div>
            </figcaption>
          </figure>

          {/* Services column */}
          <div
            id="ski-gulmarg-heading"
            className="grid content-start gap-4 sm:grid-cols-2"
          >
            {services.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="flex flex-col items-center text-center rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md"
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-extrabold uppercase leading-snug text-black">
                  {title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-neutral-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Gondola fact band */}
        <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-2xl bg-neutral-50 border border-neutral-200 p-6 sm:p-8 md:flex-row">
          <figure className="relative hidden h-24 w-40 shrink-0 overflow-hidden rounded-xl sm:block lg:h-28 lg:w-48">
            <Image
              src="/images/ski/apharwat-peaks.jpg"
              alt="Snow-covered ridgelines of the Apharwat range under a clear sky"
              fill
              sizes="12rem"
              quality={90}
              className="object-cover"
            />
          </figure>
          <dl className="grid w-full max-w-md grid-cols-3 divide-x divide-neutral-200">
            {gondolaFacts.map(({ figure, unit, label }) => (
              <div key={label} className="px-2 text-center sm:px-4">
                <dd className="font-heading text-xl font-extrabold tracking-tight text-black tabular-nums sm:text-3xl">
                  {figure}
                  {unit ? <span className="text-xs sm:text-base font-semibold text-neutral-500"> {unit}</span> : null}
                </dd>
                <dt className="mt-1 text-[0.72rem] sm:text-sm font-medium leading-tight sm:leading-snug text-neutral-600">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
          <Button
            asChild
            className="w-[80%] max-w-sm rounded-xl border border-brand bg-brand px-6 py-3 text-white shadow-sm hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-11 md:w-auto"
          >
            <Link href="/tours/gulmarg-ski-adventure">
              Plan your ski week
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
