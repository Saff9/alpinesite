import type { Metadata } from "next";
import { Zap, Phone, CheckCircle2, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Last Minute Tours | Ready. Set. Explore! | Alpine Club India",
  description:
    "We know these days it is not always possible to book your next adventure months in advance. Spontaneous last-minute departures with certified local mountain guides.",
  alternates: { canonical: "/last-minute-trip" },
  openGraph: {
    title: "Last Minute Tours | Alpine Club India",
    description:
      "Ready. Set. Explore! Grab your gear and chase the extraordinary with certified local Himalayan mountain guides.",
    url: "/last-minute-trip",
  },
};

export default function LastMinuteTripPage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Alpine Club India! I want to book a LAST MINUTE trip. My travel dates are approaching soon and I need immediate assistance."
  )}`;

  return (
    <>
      <PageHeader
        title="Last Minute Tours"
        subtitle="“Ready. Set. Explore!” Grab your gear and chase the extraordinary."
        image="/images/hero/gulmarg-hero.jpg"
        imageAlt="Snow covered peaks under dramatic skies"
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

      {/* Main Content Area */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
                “Ready. Set. Explore!”
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-neutral-950 sm:text-4xl">
                Grab your gear and chase the extraordinary.
              </h2>
              
              <div className="mt-5 space-y-3.5 text-base text-neutral-600 leading-relaxed font-poppins">
                <p>
                  We know these days it is not always possible to book your next adventure months in advance. So for the spontaneous traveler who prefers – or needs – to travel at the last minute: pack your bags, leave your worries behind, and let the road lead you to extraordinary destinations.
                </p>
                <p>
                  Join our best local guides on one of our trips. We’ve created a selection of late getaways to inspire you.
                </p>
              </div>

              <div className="mt-6 space-y-4 font-poppins text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-neutral-950">Immediate Room Allocations:</strong> Direct reserved inventory with top slope-side alpine hotels and heritage houseboats.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-neutral-950">Dedicated 4x4 Winter Fleet:</strong> Equipped with snow chains and tested local drivers waiting at Srinagar airport.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-neutral-950">Instant Permit &amp; Gondola Pass Support:</strong> Direct on-ground facilitation without middleman delays.
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

            {/* Existing Contact / Instant Availability Form */}
            <div className="rounded-3xl border border-neutral-200 bg-sand p-7 sm:p-9 shadow-sm">
              <h3 className="font-heading text-xl font-extrabold text-neutral-950">
                Request Instant Availability
              </h3>
              <p className="mt-1 text-xs text-neutral-600 font-poppins">
                Leave your details below and our senior guide will message or call you back within 15 minutes.
              </p>

              <form
                action={`https://formsubmit.co/${site.email}`}
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
    </>
  );
}