import type { Metadata } from "next";
import {
  Clock,
  ExternalLink,
  Facebook,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { ItineraryButton } from "@/components/forms/itinerary-button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us | Gulmarg Mountain Office & Certified Guides | Alpine Club India",
  description:
    "Direct contact with Alpine Club India mountain office on Gulmarg Road. Call +91 8082111967 or email info@alpineclubindia.com for custom Gulmarg ski and Himalayan trekking itineraries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Alpine Club India",
    description:
      "Direct contact with our Gulmarg mountain office on Gulmarg Road. Certified guides ready to plan your ski or trekking adventure.",
    url: "/contact",
  },
};

const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Alpine Club India",
  url: `${site.url}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    sameAs: [site.googleReviewsUrl],
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Urdu", "Kashmiri"],
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Let's plan your next trip"
        subtitle="Call, WhatsApp or write to us, a real guide from the Gulmarg office replies, usually the same day."
        image="/images/ski/apharwat-peaks.jpg"
        imageAlt="Snow-covered ridgelines of the Apharwat range above Gulmarg under a clear sky"
      />

      {/* Contact details + form */}
      <section className="py-12 sm:py-16 lg:py-20" aria-labelledby="contact-details">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 id="contact-details" className="sr-only">
            Contact details and enquiry form
          </h2>
          <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            {/* Left: info cards */}
            <div className="min-w-0 space-y-3.5">
              <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-card p-4 shadow-sm sm:gap-4 sm:p-5">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand"
                >
                  <PhoneCall className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-foreground">Phone</h3>
                  <a
                    href={site.phoneHref}
                    className="mt-1 block font-heading text-base font-semibold text-brand transition-colors hover:text-brand-deep hover:underline sm:text-lg"
                  >
                    {site.phone}
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">
                    A human picks up, 9 AM – 7 PM IST, all days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-card p-4 shadow-sm sm:gap-4 sm:p-5">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-xs"
                >
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-foreground">WhatsApp</h3>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-heading text-base font-semibold text-brand transition-colors hover:text-brand-deep hover:underline sm:text-lg"
                  >
                    Chat with us
                    <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Fastest for quick questions, we usually reply in minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-card p-4 shadow-sm sm:gap-4 sm:p-5">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand"
                >
                  <Mail className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-foreground">Email</h3>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block font-heading text-sm font-semibold break-all text-brand transition-colors hover:text-brand-deep hover:underline sm:text-base lg:text-lg sm:break-words"
                  >
                    {site.email}
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Best for detailed itineraries and group quotes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-card p-4 shadow-sm sm:gap-4 sm:p-5">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand"
                >
                  <MapPin className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-foreground">Office</h3>
                  <address className="mt-1 text-sm not-italic leading-relaxed text-foreground/90">
                    {site.address.full}
                  </address>
                  <a
                    href={site.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand underline-offset-4 transition-colors hover:underline"
                  >
                    View Google Business Profile
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-card p-4 shadow-sm sm:gap-4 sm:p-5">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1877F2] text-white shadow-xs"
                >
                  <Facebook className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-foreground">Facebook</h3>
                  <a
                    href="#"
                    aria-label="Alpine Club India on Facebook"
                    className="mt-1 block font-heading text-base font-semibold text-brand transition-colors hover:text-brand-deep hover:underline sm:text-lg cursor-default"
                  >
                    Alpine Club India
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Connect with our mountain community on Facebook.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-card p-4 shadow-sm sm:gap-4 sm:p-5">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand"
                >
                  <Clock className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-foreground">Hours</h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                    {site.hours}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    On-trip travellers get 24×7 emergency support.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="min-w-0 w-full space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-neutral-200 bg-neutral-50 p-4 sm:p-5 rounded-none">
                <div>
                  <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-900">
                    Looking for a Custom Mountain Itinerary?
                  </h3>
                  <p className="mt-0.5 text-xs text-neutral-600 font-poppins">
                    Select your preferred destinations, activities, group size, and dates.
                  </p>
                </div>
                <ItineraryButton className="shrink-0 rounded-xl bg-brand px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-deep cursor-pointer transition-colors">
                  Open Itinerary Planner
                </ItineraryButton>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Preview Window */}
      <section className="py-14 sm:py-20" aria-labelledby="map-location">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Office Location"
            title="Find Us in Gulmarg"
            description="Located on Gulmarg Road in the heart of Forest Block, Jammu & Kashmir."
            align="center"
          />
          <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-md">
            <div className="relative h-[380px] sm:h-[450px] w-full">
              <iframe
                title="Gulmarg Guides Agency - Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.3984517593285!2d74.3854698!3d34.0540562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4e23407ba32426ab%3A0x9b6371e0793cac9!2sGulmarg%20guides%20agency!5e1!3m2!1sen!2sin!4v1793016487086!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full"
              />
            </div>
            
            <div className="flex flex-col items-center justify-between gap-4 border-t border-border bg-neutral-50/70 p-4 sm:flex-row sm:px-6">
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-600">
                <MapPin className="h-4 w-4 text-brand shrink-0" aria-hidden="true" />
                <span>{site.address.full}</span>
              </div>
              <a
                href={site.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-wider text-brand hover:text-brand-deep hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
    </>
  );
}
