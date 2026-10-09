import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Home,
  MapPinned,
  PhoneCall,
  ShieldCheck,
  Star,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { site } from "@/data/site";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Alpine Club India — a ten-person team of mountain guides based in Gulmarg, Kashmir, running ski weeks and private Himalayan journeys since 2012. Local guides, honest pricing, one phone that always answers.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: MapPinned,
    title: "Guides, not resellers",
    text: "The people who plan your trip are the ones who run it. Our guides work with us year-round — neighbours we grew up on the mountain with, not contractors from a portal.",
  },
  {
    icon: ShieldCheck,
    title: "Honest pricing",
    text: "Every quote lists what's in and what isn't. No day-three 'permit fees', no shopping stops quietly funding the itinerary.",
  },
  {
    icon: Home,
    title: "Stays we've slept in",
    text: "Houseboats, camps and homestays are audited by us every season. If the hot water fails or the view is a wall, it doesn't make the list.",
  },
  {
    icon: PhoneCall,
    title: "On-trip support",
    text: "A real person checks in daily while you travel, and answers within minutes when plans change — because in the mountains, plans change.",
  },
];

const team = [
  {
    name: "Bashir Ahmad",
    role: "Founder & Lead Mountain Guide",
    line: "Tangmarg-born. Carried his first pair of tourist skis up Apharwat on a shoulder before Phase 2 existed; now chooses every route we sell himself.",
    image: "/images/about/founder.jpg",
    imageAlt: "Bashir Ahmad — Founder & Lead Mountain Guide",
  },
];

const stats = [
  { value: `${site.stats.yearsExperience}`, label: "Seasons on the mountain" },
  { value: site.stats.travellersServed, label: "Travellers guided" },
  { value: `${site.stats.destinations}`, label: "Destinations covered" },
  { value: site.stats.rating.toFixed(1), label: "Google rating", isRating: true },
];

const reviewStats = [
  { figure: `${site.stats.rating.toFixed(1)}/5`, label: "Google rating" },
  { figure: `${site.stats.reviewsCount}`, label: "Post-trip reviews" },
  { figure: site.stats.travellersServed, label: "Travellers guided" },
  { figure: `${site.stats.yearsExperience}+`, label: "Years on the mountain" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="A small team, obsessed with getting your trip right"
        subtitle="Ten people, one office under the Gondola line in Gulmarg, and thirteen years of travellers who trusted us with their holidays."
        image="/images/about/group-trek.jpg"
        imageAlt="A small group of travellers walking a Himalayan trail together with their guide"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Our story */}
      <section className="py-12 sm:py-16 lg:py-20" aria-labelledby="our-story">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/ski/powder-skiing.jpg"
                  alt="A guide laying first tracks down an Apharwat powder face above Gulmarg"
                  width={1600}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="mt-5 rounded-2xl border border-border bg-card p-5 shadow-sm lg:absolute lg:-bottom-6 lg:mt-0 lg:max-w-64">
                <p className="text-sm font-medium leading-relaxed text-foreground">
                  &ldquo;The mountain decides the plan. Our job is knowing
                  which plan to hand it.&rdquo;
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Bashir Ahmad — Founder, born in Tangmarg
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                Our story
              </p>
              <h2
                id="our-story"
                className="font-heading text-2xl font-semibold sm:text-3xl lg:text-[2.1rem]"
              >
                It started with a sledge, a shoulder, and one perfect line.
              </h2>
              <div className="mt-4 space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  Bashir Ahmad grew up in Tangmarg, in the pine belt below
                  Gulmarg, in a family that hauled sledges and carried
                  tourists&rsquo; skis up the mountain for a living — this was
                  before the gondola went all the way up, when &ldquo;the
                  top&rdquo; meant six hours on foot. He learned the mountain
                  the slow way: which slopes held powder after a storm, which
                  gullies the sun ruined by ten, and which line down was safe
                  on a Tuesday in February.
                </p>
                <p>
                  In 2012 he and two guide friends registered Alpine Club India
                  Agency out of a single room on Gulmarg Road, with one rule
                  that hasn&rsquo;t changed: <em>if we wouldn&rsquo;t put our own
                  family on the trip, we don&rsquo;t sell it.</em> Skiers came
                  for the powder weeks and stayed friends. They sent their
                  cousins. The cousins wanted Pahalgam, then Ladakh, then
                  Kerala — and the guides who&rsquo;d walked them down Apharwat
                  were exactly the people to plan it.
                </p>
                <p>
                  Today we&rsquo;re ten people full-time — guides, operations,
                  guest experience — plus the forty-odd drivers, boatmen and
                  mountain folk we&rsquo;ve worked with for over a decade. The
                  office is still on Gulmarg Road, Forest Block, a short walk
                  from the Gondola base. Walk in without an appointment.
                  That&rsquo;s honestly how most of our best trips have started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-sand py-16 sm:py-20" aria-labelledby="mission-vision">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="What we're after"
            title="Two things we check every decision against"
            align="center"
          />
          <div id="mission-vision" className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-pine"
              >
                <Target className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold">Our mission</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To make the Himalayas feel like home — planned by people who
                live there, priced without games, and run with the care
                we&rsquo;d want for our own families travelling. If a traveller
                leaves as a friend who&rsquo;ll come back, we&rsquo;ve done our
                job.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-pine"
              >
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold">Our vision</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To be the most trusted name in Himalayan travel by 2030 — the
                team you call before you book anywhere, because you know
                you&rsquo;ll get a straight answer. Even when the straight answer
                is &ldquo;don&rsquo;t come this week, the passes are
                closed.&rdquo;
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-16 sm:py-20" aria-label="Alpine Club India in numbers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl bg-pine-deep px-6 py-12 sm:px-12 sm:py-16">
            <div className="grid grid-cols-2 gap-8 text-center sm:gap-10 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-4xl font-semibold text-primary-foreground sm:text-5xl">
                    {stat.isRating ? (
                      <span className="inline-flex items-center justify-center gap-2">
                        {stat.value}
                        <Star
                          className="h-6 w-6 fill-current text-amber-400 sm:h-7 sm:w-7"
                          aria-hidden="true"
                        />
                      </span>
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className="mt-2 text-sm text-primary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why travel with us */}
      <section className="py-16 sm:py-20" aria-labelledby="why-us">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why travel with us"
            title="The boring things we refuse to compromise on"
            description="Most agencies sell you an itinerary and disappear. These four promises are the whole reason travellers keep forwarding our number."
          />
          <div id="why-us" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-pine"
                >
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-sand py-16 sm:py-20" aria-labelledby="team-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Leadership"
            title="Our Founder & Lead Mountain Guide"
            description="Local mountain expertise leading every journey we craft across Kashmir and the Himalayas."
            align="center"
          />
          <div id="team-heading" className="mx-auto max-w-md">
            {team.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-80 w-full sm:h-96">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 448px"
                    className="object-cover"
                    priority
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <h3 className="font-heading text-2xl font-bold">{member.name}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-sand">
                      {member.role}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {member.line}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Supported by our dedicated team of local drivers, guides, and mountain experts.
          </p>
        </div>
      </section>

      {/* Testimonials wall */}
      <section className="py-16 sm:py-20" aria-labelledby="about-testimonials">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Traveller stories"
            title="What they say when they're home"
            description="Real stories and reviews from travellers who explored Kashmir and the Himalayas with us."
          />
          <div id="about-testimonials">
            {/* Review stats band */}
            <div
              className="grid grid-cols-2 gap-x-6 gap-y-8 rounded-2xl bg-sand px-4 py-8 sm:grid-cols-4 sm:divide-x sm:divide-border sm:px-6 sm:py-9"
              aria-label="Reviews in numbers"
            >
              {reviewStats.map((stat) => (
                <div key={stat.label} className="text-center sm:px-4">
                  <p className="font-heading text-3xl font-semibold text-pine">
                    {stat.figure}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Masonry wall — every review we publish, unedited */}
            <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={`${testimonial.name}-${testimonial.tour}`}
                  testimonial={testimonial}
                  className="mb-5 break-inside-avoid"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-20" aria-labelledby="about-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-pine px-6 py-14 text-center sm:px-12 sm:py-16">
            <h2
              id="about-cta"
              className="mx-auto max-w-2xl font-heading text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl"
            >
              Come say hello in Gulmarg
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Our office on Gulmarg Road has a kettle that&rsquo;s always on and
              skis leaning by the door. Can&rsquo;t make it up the hill? We
              plan just as well over phone, email and WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-terracotta text-white hover:bg-terracotta-deep"
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/tours">Our tours</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
