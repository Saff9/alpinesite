import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Zap, Phone, ShieldCheck, CheckCircle2, MessageCircle, AlertCircle, Mountain } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Last Minute Himalayan Trips & Powder Chasers | Alpine Club India",
  description:
    "Planning a sudden trip to Gulmarg, Kashmir, or Ladakh? We organize fast-track airport pickups, slope-side hotels, ski passes, and local mountain guides on short notice.",
  alternates: { canonical: "/last-minute-trip" },
  openGraph: {
    title: "Last Minute Trips | Alpine Club India",
    description:
      "Spontaneous departures for Gulmarg powder dumps and Kashmir getaways with 24/7 on-ground mountain assistance.",
    url: "/last-minute-trip",
  },
};

const quickPackages = [
  {
    title: "Gulmarg 4-Day Powder Blitz",
    tagline: "Chase the storm cycle with zero downtime",
    duration: "4 Days / 3 Nights",
    idealFor: "Skiers & snowboarders targeting fresh snowfall",
    includes: [
      "Airport pickup at Srinagar & heated 4x4 snow-chain transfer to Gulmarg",
      "Heated slope-side lodge accommodation with breakfast & dinner",
      "Priority ski gear rental fitting upon arrival",
      "Certified local ski guide for 3 full powder days",
    ],
    price: "₹34,999",
  },
  {
    title: "Kashmir 5-Day Quick Escape",
    tagline: "Houseboat tranquility and alpine meadows",
    duration: "5 Days / 4 Nights",
    idealFor: "Couples and families looking for a spontaneous getaway",
    includes: [
      "1 night heritage cedarwood Dal Lake houseboat with sunrise shikara",
      "2 nights in Gulmarg with Gondola cable car excursion",
      "1 night in Pahalgam Lidder riverside resort",
      "Dedicated private vehicle and valley driver throughout",
    ],
    price: "₹26,999",
  },
  {
    title: "Weekend Ski / Snow Play (2–3 Days)",
    tagline: "Fast mountain recharge from Delhi, Mumbai, or Bangalore",
    duration: "3 Days / 2 Nights",
    idealFor: "Busy professionals needing a fast mountain fix",
    includes: [
      "Immediate airport connection to Gulmarg meadow (90 mins)",
      "Kongdoori Phase 1 snow experience & Gondola passes",
      "Heated hotel room with mountain views",
      "Local guide assistance for sledding, skiing, or snowshoeing",
    ],
    price: "₹18,999",
  },
];

export default function LastMinuteTripPage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Alpine Club India! I want to book a LAST MINUTE trip. My travel dates are approaching soon and I need immediate assistance."
  )}`;

  return (
    <>
      <PageHeader
        title="Last Minute Trip"
        subtitle="Spontaneous departures, storm-chasing powder alerts, and same-week bookings handled directly by our on-ground team in Gulmarg."
        image="/images/hero/gulmarg-hero.jpg"
        imageAlt="Snow covered peaks under dramatic skies"
        crumbs={[{ label: "Home", href: "/" }, { label: "Last Minute Trip" }]}
      />

      {/* Urgent Dispatch Banner */}
      <section className="bg-amber-500 py-4 text-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">
          <div className="flex items-center gap-3">
            <Zap className="h-5 w-5 shrink-0 text-black fill-black" />
            <span className="font-heading text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              Need to travel within 24–72 hours? Call our 24/7 mountain desk directly.
            </span>
          </div>
          <a
            href={`tel:${site.phone}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-black px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-neutral-900"
          >
            <Phone className="h-3.5 w-3.5" />
            {site.phone}
          </a>
        </div>
      </section>

      {/* Why Last Minute with Us */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
                Zero Middlemen · Ground Operators
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-neutral-950 sm:text-4xl">
                How We Make Last-Minute Bookings Effortless
              </h2>
              <p className="mt-4 text-base text-neutral-600 leading-relaxed font-poppins">
                Most agencies fail on last-minute mountain trips because they rely on third-party brokers. We are located right here in Gulmarg and Srinagar.
              </p>

              <div className="mt-6 space-y-4 font-poppins text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-neutral-950">Immediate Room Allocations:</strong> We hold direct relationships and reserved winter inventory with top slope-side hotels and heritage houseboats.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-neutral-950">Dedicated 4x4 Winter Fleet:</strong> Equipped with chains and snow-tested drivers waiting at Srinagar airport to safely climb Tangmarg road even during blizzards.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-neutral-950">Instant Permit &amp; Pass Support:</strong> Fast-track advice for Gondola tickets, Ladakh travel permits, or Sikkim inner-line permits without bureaucratic delays.
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp Now
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-xs hover:bg-neutral-50"
                >
                  <Phone className="h-4 w-4 text-brand" />
                  Direct Hotline
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-sand p-7 sm:p-9 shadow-sm">
              <h3 className="font-heading text-xl font-extrabold text-neutral-950">
                Request Instant Availability
              </h3>
              <p className="mt-1 text-xs text-neutral-600 font-poppins">
                Leave your details below and our senior guide will message or call you back within 15 minutes.
              </p>

              <form
                action="https://formsubmit.co/imtiyazahmadkumar36@gmail.com"
                method="POST"
                className="mt-6 space-y-4 text-left"
              >
                <input type="hidden" name="_subject" value="URGENT: Last Minute Trip Inquiry" />
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-heading mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-brand focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-heading mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-brand focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-heading mb-1">
                      Expected Arrival
                    </label>
                    <input
                      type="text"
                      name="travel_date"
                      required
                      placeholder="e.g. Tomorrow / 25 Oct"
                      className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-brand focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-heading mb-1">
                    Trip Interest
                  </label>
                  <select
                    name="package_interest"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-brand focus:outline-none"
                  >
                    <option value="Gulmarg Ski / Snowboard">Gulmarg Skiing &amp; Snow Powder</option>
                    <option value="Kashmir Valley Tour">Kashmir Valley (Srinagar, Gulmarg, Pahalgam)</option>
                    <option value="Ladakh Mountain Trip">Ladakh &amp; Leh Short Circuit</option>
                    <option value="Custom Urgent Trip">Other / Custom Quick Trip</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-xl bg-brand py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-deep h-11"
                >
                  Send Urgent Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Ready-to-Go Packages */}
      <section className="bg-sand py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            title="Fast-Track Last-Minute Packages"
            description="Pre-arranged logistics ready to roll within hours of your confirmation."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {quickPackages.map((pkg) => (
              <div
                key={pkg.title}
                className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex rounded-lg bg-amber-100 px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-amber-900">
                    {pkg.duration}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold text-neutral-950">
                    {pkg.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500 italic font-poppins">
                    {pkg.tagline}
                  </p>
                  <div className="mt-4 font-poppins text-xs font-semibold text-brand">
                    Ideal for: {pkg.idealFor}
                  </div>
                  <ul className="mt-5 space-y-2.5 text-xs font-poppins text-neutral-700">
                    {pkg.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                      Starting From
                    </span>
                    <span className="font-heading text-lg font-extrabold text-neutral-950">
                      {pkg.price}
                    </span>
                  </div>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-brand px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-deep"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
