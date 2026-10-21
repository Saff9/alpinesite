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
  title: "About Us | Local Mountain Guides Born in Gulmarg",
  description:
    "Meet Alpine Club India, a ten-person team of mountain guides based in Gulmarg, Kashmir, running ski weeks and private Himalayan journeys since 2012. Local guides, honest pricing, one phone that always answers.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: MapPinned,
    title: "Guides, not resellers",
    text: "Local guides who plan your trip lead it on the mountain, no outsourced scripts or brokers.",
  },
  {
    icon: ShieldCheck,
    title: "Honest pricing",
    text: "Clear, all-in quotes with zero surprise permit fees or sponsored shopping stops.",
  },
  {
    icon: Home,
    title: "Audited stays",
    text: "Personally vetted houseboats and lodges with guaranteed heating and hot water.",
  },
  {
    icon: PhoneCall,
    title: "On-trip support",
    text: "A real local guide on WhatsApp daily for immediate answers when mountain plans shift.",
  },
];

const team = [
  {
    name: "Sajad Ahmad",
    role: "Founder & Lead Mountain Guide",
    line: "Tangmarg-born. Carried his first pair of tourist skis up Apharwat on a shoulder before Phase 2 existed; now chooses every route we sell himself.",
    image: "/images/about/founder.jpg",
    imageAlt: "Sajad Ahmad, Founder & Lead Mountain Guide",
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
        title="About Alpine Club India"
        subtitle="Ten people, one office under the Gondola line in Gulmarg, and thirteen years of travellers who trusted us with their holidays."
        image="/images/about/group-trek.jpg"
        imageAlt="A small group of travellers walking a Himalayan trail together with their guide"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Our story */}
      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="our-story">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
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
                <p className="font-poppins font-normal text-sm leading-relaxed text-foreground">
                  &ldquo;The mountain decides the plan. Our job is knowing
                  which plan to hand it.&rdquo;
                </p>
                <p className="mt-2 font-poppins font-normal text-xs text-muted-foreground">
                  Sajad Ahmad, Founder, born in Tangmarg
                </p>
              </div>
            </div>
            <div className="order-1 flex flex-col items-center text-center lg:items-start lg:text-left lg:order-2">
              <p className="mb-2.5 inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.2em] text-brand">
                <span aria-hidden="true" className="h-0.5 w-4 bg-brand" />
                Our story
                <span aria-hidden="true" className="h-0.5 w-4 bg-brand" />
              </p>
              <h2
                id="our-story"
                className="font-heading text-2xl font-extrabold uppercase tracking-tight text-black sm:text-3xl lg:text-[2.2rem]"
              >
                It started with a sledge, a shoulder, and one perfect line.
              </h2>
              <div className="mt-6 space-y-5 text-foreground/85 leading-relaxed text-left">
                <p>
                  Sajad Ahmad grew up in Tangmarg below Gulmarg, learning Apharwat&apos;s terrain long before modern gondolas reached the summit. Hauling gear and skiing remote powder bowls gave him an intimate understanding of mountain safety, seasonal weather shifts, and Himalayan terrain.
                </p>
                <p>
                  In 2012, Alpine Club India was founded on Gulmarg Road with one enduring principle: <em>if we wouldn&apos;t put our own family on the trip, we don&apos;t sell it.</em> Today, our dedicated local guides and mountain crews craft private, authentic journeys across Kashmir, Gulmarg, and Ladakh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-sand py-16 sm:py-20" aria-labelledby="mission-vision">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="What we're after"
            title="Two things we check every decision against"
            align="center"
          />
          <div id="mission-vision" className="grid gap-6 md:grid-cols-2">
            <article className="flex flex-col items-center text-center rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-brand"
              >
                <Target className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold uppercase text-black">Our mission</h3>
              <p className="mt-3 font-poppins font-normal leading-relaxed text-muted-foreground">
                To make the Himalayas feel like home, planned by people who
                live there, priced without games, and run with the care
                we&rsquo;d want for our own families travelling. If a traveller
                leaves as a friend who&rsquo;ll come back, we&rsquo;ve done our
                job.
              </p>
            </article>
            <article className="flex flex-col items-center text-center rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-brand"
              >
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold uppercase text-black">Our vision</h3>
              <p className="mt-3 font-poppins font-normal leading-relaxed text-muted-foreground">
                To be the most trusted name in Himalayan travel by 2030, the
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
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
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
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="Why travel with us"
            title="The boring things we refuse to compromise on"
            description="Most agencies sell you an itinerary and disappear. These four promises are the whole reason travellers keep forwarding our number."
          />
          <div id="why-us" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <article
                key={item.title}
                className="flex flex-col items-center text-center rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-brand"
                >
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold uppercase text-black">{item.title}</h3>
                <p className="mt-2 font-poppins font-normal text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-sand py-16 sm:py-20" aria-labelledby="team-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
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
                className="flex flex-col items-center rounded-3xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg sm:p-10"
              >
                <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full border-4 border-brand/20 shadow-md sm:h-52 sm:w-52">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width: 640px) 176px, 208px"
                    className="rounded-full object-cover object-top"
                    priority
                  />
                </div>
                <div className="mt-6">
                  <h3 className="font-heading text-2xl font-extrabold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1.5 font-heading text-xs font-bold uppercase tracking-wider text-brand">
                    {member.role}
                  </p>
                  <p className="mt-4 font-poppins font-normal text-sm leading-relaxed text-foreground/85 sm:text-base">
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
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
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
                  <p className="font-heading text-3xl font-semibold text-brand">
                    {stat.figure}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Masonry wall, every review we publish, unedited */}
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
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-14 text-center sm:px-12 sm:py-16">
            <h2
              id="about-cta"
              className="mx-auto max-w-2xl font-heading text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl"
            >
              Come say hello in Gulmarg
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
              Our office on Gulmarg Road has a kettle that&rsquo;s always on and
              skis leaning by the door. Can&rsquo;t make it up the hill? We
              plan just as well over phone, email and WhatsApp.
            </p>
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-[80%] max-w-sm rounded-xl border border-white bg-white px-7 py-3.5 text-black shadow-md hover:bg-neutral-100 font-heading text-xs font-bold uppercase tracking-wider h-12 sm:w-auto"
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
                className="w-[80%] max-w-sm rounded-xl border-white/60 bg-transparent px-7 py-3.5 text-white hover:bg-white/10 hover:text-white font-heading text-xs font-bold uppercase tracking-wider h-12 sm:w-auto"
              >
                <Link href="/activities">Our Activities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
