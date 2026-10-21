import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Award, CheckCircle2, Phone, Mountain, Radio, HeartHandshake, Compass } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { ItineraryButton } from "@/components/forms/itinerary-button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Certified Ski Guides | Gulmarg Mountain Professionals",
  description:
    "Meet our team of licensed mountain and ski guides in Gulmarg. IFMGA-aligned, avalanche safety certified, and born on the slopes of Mount Apharwat.",
  alternates: { canonical: "/ski-guides" },
  openGraph: {
    title: "Our Certified Ski Guides | Gulmarg Mountain Professionals",
    description:
      "Ski Gulmarg's legendary backcountry with local certified guides who have skied Mount Apharwat their entire lives.",
    url: "/ski-guides",
  },
};

const guideTeam = [
  {
    name: "Imtiyaz Ahmad Kumar",
    role: "Lead Mountain & Ski Guide / Founder",
    experience: "15+ Years on Apharwat",
    certifications: "JIM&WS Advanced Mountaineering & Avalanche Level 2",
    bio: "Born and raised in the shadow of Mount Apharwat, Imtiyaz has guided over 1,200 international skiers through Gulmarg's bowls, tree runs, and Drung Valley chutes.",
    specialties: "Backcountry powder lines, snowpack analysis, route finding",
  },
  {
    name: "Tariq Ahmad",
    role: "Senior Backcountry Freeride Guide",
    experience: "12+ Years Guiding",
    certifications: "HMI Darjeeling Certified & Wilderness First Responder",
    bio: "A master of Apharwat's North Bowl and high-alpine ridges. Tariq is renowned for finding untracked powder stashes days after the last storm.",
    specialties: "Steep chute navigation, splitboard touring, avalanche safety",
  },
  {
    name: "Bilal Dar",
    role: "Head Ski Instructor & Mountain Leader",
    experience: "10+ Years Instruction",
    certifications: "National Ski Federation Certified Level 3",
    bio: "Specializing in transition coaching: turning intermediate piste skiers into confident, smooth powder riders through structured Kongdoori clinics.",
    specialties: "Powder technique, carving clinics, beginner instruction",
  },
];

const safetyProtocols = [
  {
    icon: Radio,
    title: "Daily Snowpack & Avalanche Briefings",
    desc: "Every morning before Phase 2 gondola opens, our guides dig pit profiles and review Gulmarg Avalanche Advisory forecasts to establish safe aspect lines.",
  },
  {
    icon: Shield,
    title: "Mandatory Safety Equipment",
    desc: "Every guest is equipped with a digital Mammut 3-antenna transceiver, 280 cm probe, metal shovel, and two-way VHF radios synced with ski patrol.",
  },
  {
    icon: Compass,
    title: "Small Guide-to-Client Ratios",
    desc: "We strictly limit groups to a maximum of 4–5 skiers per certified guide. No crowded packs, no rushing, and personalized line selection.",
  },
  {
    icon: HeartHandshake,
    title: "Medical & Evacuation Preparedness",
    desc: "Trained Wilderness First Responders carrying emergency trauma kits, heat packs, pulse oximeters, and direct priority links to Gulmarg Ski Patrol.",
  },
];

export default function SkiGuidesPage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Alpine Club India! I'd like to book a certified ski guide in Gulmarg for my upcoming ski trip."
  )}`;

  return (
    <>
      <PageHeader
        title="Our Ski Guides"
        subtitle="Licensed mountain leaders, avalanche professionals, and Gulmarg locals who have spent their lives skiing Mount Apharwat."
        image="/images/ski/apharwat-peaks.jpg"
        imageAlt="Guide overlooking snow-covered ridges of Apharwat"
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Ski Guides" }]}
      />

      {/* Philosophy Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white" id="local-experts">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
                Local Mountain Stewardship
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-neutral-950 sm:text-4xl">
                Born on These Peaks, Trained to International Standards
              </h2>
              <div className="mt-6 space-y-4 text-base text-neutral-600 leading-relaxed font-poppins">
                <p>
                  At 3,980 metres, Mount Apharwat is a serious high-Himalayan mountain. The snow is light, the bowls are colossal, but changing winds and wind-slab formations demand respect and intimate terrain knowledge.
                </p>
                <p>
                  Our guides are not seasonal visitors. We grew up skiing these slopes, we know how the snow behaves on north-facing glades versus south-facing bowls, and we know which tree runs hold untouched powder when the top gondola is on wind-hold.
                </p>
                <p>
                  Every Alpine Club India guide holds formal certifications from India’s premier mountaineering institutes (JIM&amp;WS, HMI) alongside recognized international avalanche safety training.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep"
                >
                  Book Private Guide
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-neutral-300 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:bg-neutral-100"
                >
                  <Link href="/gulmarg-ski-resort">Resort &amp; Slopes Guide</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/about/founder.jpg"
                alt="Alpine Club India mountain guide in winter gear"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guide Profiles */}
      <section className="bg-sand py-16 sm:py-20 lg:py-24" id="team">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            title="Meet Our Senior Mountain Guides"
            description="Years of snow experience, recognized certifications, and a warm local smile."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {guideTeam.map((guide) => (
              <div
                key={guide.name}
                className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-brand">
                      {guide.experience}
                    </span>
                    <Award className="h-5 w-5 text-amber-600" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 font-heading text-xl font-bold text-neutral-950">
                    {guide.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {guide.role}
                  </p>
                  <div className="mt-4 rounded-xl bg-neutral-50 p-3 text-xs font-poppins text-neutral-700 border border-neutral-100">
                    <strong className="block text-neutral-900 mb-0.5">Credentials:</strong>
                    {guide.certifications}
                  </div>
                  <p className="mt-4 text-sm text-neutral-600 font-poppins leading-relaxed">
                    {guide.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                    Focus Areas:
                  </span>
                  <span className="text-xs text-neutral-800 font-poppins">
                    {guide.specialties}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avalanche & Safety Protocol */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white" id="avalanche-safety">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            title="Our Mountain Safety Protocols"
            description="Safety is not a feature of our trips — it is the bedrock of every run we choose."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {safetyProtocols.map((protocol) => {
              const Icon = protocol.icon;
              return (
                <div key={protocol.title} className="rounded-2xl border border-neutral-200/90 bg-neutral-50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-xs">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h4 className="mt-5 font-heading text-base font-bold text-neutral-950">
                    {protocol.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600 font-poppins">
                    {protocol.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guide Booking Options */}
      <section className="bg-neutral-950 py-16 sm:py-20 text-white" id="book">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 text-center">
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-light">
            Guiding Packages
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Hire a Private Ski Guide in Gulmarg
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-neutral-300 font-poppins">
            Whether you need a daily mountain leader to unlock secret powder lines or a full 6-day package with slope-side lodging and airport transfers, we make it seamless.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 text-left">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6">
              <h4 className="font-heading text-lg font-bold text-white">Daily Private Guiding</h4>
              <p className="mt-2 text-xs text-neutral-400 font-poppins">
                Full-day guiding across Apharwat Phase 1 &amp; Phase 2 with safety briefing, radio communication, and line selection.
              </p>
              <div className="mt-6">
                <ItineraryButton
                  destination="kashmir"
                  activity="skiing-snowboarding"
                  className="inline-flex items-center gap-2 rounded-none bg-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-deep font-heading cursor-pointer"
                >
                  Inquire Daily Rates
                  <ArrowRight className="h-4 w-4" />
                </ItineraryButton>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6">
              <h4 className="font-heading text-lg font-bold text-white">Backcountry Guiding</h4>
              <p className="mt-2 text-xs text-neutral-400 font-poppins">
                Direct private guiding: Apharwat bowls, Mary's Shoulder, Shark Fin, snowpack analysis, and certified safety equipment.
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  className="rounded-xl bg-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-deep"
                >
                  <Link href="/gulmarg-ski-resort/backcountry-skiing">
                    Explore Backcountry
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
