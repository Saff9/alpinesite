import type { Metadata } from "next";
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Star,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call, WhatsApp or email our Gulmarg office on Gulmarg Road, Forest Block. Local mountain guides ready to craft your Himalayan journey.",
  alternates: { canonical: "/contact" },
};

const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

const contactFaqs = [
  {
    question: "How does booking work, and what are the payment terms?",
    answer:
      "You send an enquiry, form, WhatsApp or call, and we reply with a draft itinerary and an honest quote within a day. To confirm, you pay a 25% advance; the balance is due any time before the trip starts. We accept bank transfer, UPI and international wire. You get written confirmations for every stay and transfer before you fly, not vouchers handed to you on arrival.",
  },
  {
    question: "Can I customise an itinerary?",
    answer:
      "Yes, every trip we run is private, so customisation is the norm, not an exception. Swap hotels, add a day in Pahalgam, skip a temple, bring your dog (we've done it). Tell us what you loved and hated on past trips; the first draft usually changes twice before you book, and that's a good thing.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Full refund if you cancel 21 or more days before departure. 50% refund between 14 and 20 days. Inside 14 days we recover what we can from hotels and transport, in thirteen years we've never kept a rupee that was recoverable. Peak-date houseboats and permits sometimes carry their own rules, and we tell you upfront, not after you cancel.",
  },
  {
    question: "Do I need travel insurance?",
    answer:
      "For high-altitude and winter trips, Ladakh, Apharwat backcountry, Gulmarg powder skiing, we recommend it strongly and help you arrange it within a day; we work with insurers who actually pay out in India. We will never pretend it's compulsory when it isn't.",
  },
  {
    question: "How are you different from other agencies?",
    answer:
      "We're the local team, not a reseller. Your driver, guide and boatman work with us year-round, and your money stays in the valley instead of a call-centre chain. If a hotel disappoints, we hear about it on the same evening's check-in call and move you the next morning, not after you're home writing a review.",
  },
];

const contactFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

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
            <div className="min-w-0 w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-sand py-14 sm:py-20" aria-labelledby="contact-faqs">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Before you write"
            title="Frequently asked questions"
            description="The five things almost everyone asks before booking. If yours isn't here, ask us directly, no question is too small."
            align="center"
          />
          <div id="contact-faqs" className="rounded-2xl border border-border bg-card px-4 py-2 shadow-sm sm:px-6">
            <Accordion type="single" collapsible className="w-full">
              {contactFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="py-4 text-left font-heading text-sm font-semibold hover:no-underline sm:py-5 sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Google Business Profile */}
      <section className="py-14 sm:py-20" aria-labelledby="google-business-profile">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Find us on Google"
            title="Our Google Business Profile"
            description="Check our verified traveller reviews, directions, and live operating hours on Google."
            align="center"
          />
          <div
            id="google-business-profile"
            className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-card p-6 text-center shadow-md sm:flex-row sm:p-8 sm:text-left"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800 border border-amber-200">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" aria-hidden="true" />
                <span>{site.stats.rating.toFixed(1)} ★ Rated on Google ({site.stats.reviewsCount} Reviews)</span>
              </div>
              <h3 className="font-heading text-xl font-extrabold uppercase text-foreground sm:text-2xl">
                {site.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {site.address.full}
              </p>
              <p className="text-xs text-muted-foreground">
                {site.hours} · {site.phone}
              </p>
            </div>
            <a
              href={site.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-brand px-6 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-brand-deep sm:w-auto"
            >
              <span>Open Google Profile</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqJsonLd) }}
      />
    </>
  );
}
