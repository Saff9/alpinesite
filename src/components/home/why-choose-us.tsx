import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, MapPinned, Home, PhoneCall, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const features = [
  {
    icon: MapPinned,
    title: "Local to the bone",
    text: "Our guides, drivers and boatmen are the neighbours we grew up with in Gulmarg and the valley. No outsourced scripts — just people who know which slope holds powder and which lane has the best baker.",
  },
  {
    icon: ShieldCheck,
    title: "Honest, all-in pricing",
    text: "Every quote lists what's included and what isn't. No surprise 'permit fees' on day three, no shopping-stop commissions baked into your itinerary.",
  },
  {
    icon: Home,
    title: "Stays we've slept in",
    text: "Houseboats, camps and homestays are audited by us every season. If the hot water fails or the view is a wall, it doesn't make our list.",
  },
  {
    icon: PhoneCall,
    title: "One WhatsApp away",
    text: "A real person from our team checks in daily on every trip, and answers within minutes when plans change — because plans change.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/about/group-trek.jpg"
                alt="A small group of trekkers walking a Himalayan trail together"
                width={1600}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-border bg-card p-5 shadow-lg shadow-black/10 sm:left-8 sm:right-auto sm:max-w-64">
              <Quote className="h-5 w-5 text-terracotta" aria-hidden="true" />
              <p className="mt-2 text-sm font-medium leading-relaxed text-foreground">
                &ldquo;We treat every trip like it's our own family travelling.&rdquo;
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Bashir Ahmad — Founder, born in Tangmarg
              </p>
            </div>
          </div>

          {/* Content side */}
          <div className="lg:pl-2">
            <p className="mb-2 font-heading text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
              Why travel with us
            </p>
            <h2 className="font-heading text-2xl font-extrabold uppercase tracking-tight text-black sm:text-3xl lg:text-[2.2rem]">
              A mountain company that actually travels with you.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-700">
              Most agencies sell you an itinerary and disappear. We ride along —
              a founder who still guides on Apharwat, one phone number that
              answers, and a team whose only job is your trip going right.
            </p>

            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand"
                  >
                    <feature.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-sm font-extrabold uppercase tracking-tight text-black">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                      {feature.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild className="bg-brand text-white hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-11 px-5 shadow-xs">
                <Link href="/about">
                  Our story
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-neutral-300 text-black hover:border-brand hover:text-brand font-heading text-xs font-bold uppercase tracking-wider h-11 px-5">
                <a href={site.phoneHref}>{site.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
