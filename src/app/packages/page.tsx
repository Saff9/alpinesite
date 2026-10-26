import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { PackagesExplorer } from "@/components/packages/packages-explorer";
import { ItineraryButton } from "@/components/forms/itinerary-button";
import { Shield, Users, Compass, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Deals & Packages | Guided Himalayan Skiing & Trekking",
  description:
    "Explore fully guided Gulmarg ski packages, epic Ladakh summer traverses, and iconic Kashmir & Sikkim trekking expeditions with Alpine Club India.",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Deals & Packages | Alpine Club India",
    description:
      "Handcrafted ski packages, summer high-altitude traverses, and classic Himalayan treks with certified mountain guides.",
    url: "/packages",
  },
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-neutral-50/50">
      {/* Page Header */}
      <PageHeader
        title="Deals & Packages"
        subtitle="Fully guided ski adventures, pristine summer traverses, and iconic Himalayan treks across Kashmir, Ladakh, and Sikkim."
        image="/images/hero/gulmarg-hero.jpg"
        imageAlt="Himalayan mountain peaks and guided expeditions"
      />

      {/* Main Content Area */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <PackagesExplorer />

        {/* Value Proposition Highlights */}
        <div className="mt-20 rounded-3xl border border-neutral-200 bg-white p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900 uppercase tracking-tight">
              Why Book With Alpine Club India
            </h2>
            <p className="mt-2 font-poppins text-[13px] sm:text-[14px] text-neutral-600">
              We connect travellers from all over the world with certified local guides, authentic homestays, and uncompromising mountain safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 text-center sm:text-left">
              <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mx-auto sm:mx-0">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-base font-bold uppercase tracking-wider text-neutral-900">
                Safety First Protocol
              </h3>
              <p className="font-poppins text-[13px] text-neutral-600 leading-relaxed">
                Certified avalanche professionals, wilderness first-aid kits, satellite tracking, and daily snowpack and weather evaluations.
              </p>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mx-auto sm:mx-0">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-base font-bold uppercase tracking-wider text-neutral-900">
                Direct Local Community
              </h3>
              <p className="font-poppins text-[13px] text-neutral-600 leading-relaxed">
                We work directly with native Kashmiri, Ladakhi, and Sikkimese guides, local drivers, and homestay owners to keep adventures sustainable.
              </p>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mx-auto sm:mx-0">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-base font-bold uppercase tracking-wider text-neutral-900">
                Custom Tailor-Made Options
              </h3>
              <p className="font-poppins text-[13px] text-neutral-600 leading-relaxed">
                Need customized dates, private group transfers, equipment rentals, or combined routes? Our team builds tailor-made itineraries on request.
              </p>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6 bg-neutral-50 rounded-2xl p-6 sm:p-8">
            <div>
              <h4 className="font-heading text-lg font-bold text-neutral-900 uppercase">
                Looking for a custom package or private group dates?
              </h4>
              <p className="font-poppins text-[13px] text-neutral-600 mt-1">
                Tell us your timeline, group size, and preferred Himalayan region — we will configure the optimal route.
              </p>
            </div>

            <ItineraryButton
              destination="custom"
              activity="custom"
              title="Request Custom Himalayan Package"
              className="shrink-0 font-heading text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl bg-brand text-white hover:bg-brand-deep transition-colors shadow-md"
            >
              Plan Custom Package
            </ItineraryButton>
          </div>
        </div>
      </section>
    </main>
  );
}
