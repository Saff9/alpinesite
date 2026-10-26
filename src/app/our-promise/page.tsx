import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Promise | Adventure Without Limits, Safety Without Compromise | Alpine Club India",
  description:
    "We believe the greatest adventures begin with confidence. Responsible mountain practices, certified guiding, and an uncompromised commitment to your safety across the Himalayas.",
  alternates: { canonical: "/our-promise" },
  openGraph: {
    title: "Our Promise | Alpine Club India",
    description: "Adventure Without Limits. Safety Without Compromise. Alpine Club India mountain standards.",
    url: "/our-promise",
  },
};

export default function OurPromisePage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Alpine Club India! I read your promise and would love to discuss planning an authentic Himalayan trip."
  )}`;

  return (
    <main className="min-h-screen bg-neutral-50/50">
      {/* Page Header */}
      <PageHeader
        title="Our Promise"
        subtitle="Adventure Without Limits. Safety Without Compromise."
        image="/images/hero/gulmarg-hero.jpg"
        imageAlt="Snow covered peaks under clear blue sky"
      />

      {/* Main Promise Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
                Alpine Club India
              </span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950">
                Our Promise
              </h2>

              <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50/80 p-5">
                <p className="font-heading text-lg sm:text-xl font-bold text-brand leading-snug">
                  Adventure Without Limits. Safety Without Compromise.
                </p>
              </div>

              <div className="mt-6 text-base sm:text-lg leading-relaxed text-neutral-600 font-poppins">
                <p>
                  We believe the greatest adventures begin with confidence. From thrilling experiences to breathtaking destinations, your safety is our highest priority. With careful planning, responsible practices, and a passion for exploration, we ensure every journey is as safe as it is unforgettable. Because for us, the best adventure isn&apos;t just about reaching the destination—it&apos;s about returning with memories that last a lifetime.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="rounded-xl bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep"
                >
                  <Link href="/contact">
                    Plan Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-xs hover:bg-neutral-50"
                >
                  Message Us on WhatsApp
                </a>
              </div>
            </div>

            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/destinations/sikkim/kangchenjunga.jpg"
                alt="Majestic Himalayan snow peaks"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}