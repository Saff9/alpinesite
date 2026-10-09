import Image from "next/image";
import Link from "next/link";
import { PhoneCall, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/images/destinations/kashmir/sonamarg.jpg"
            alt="Golden evening light over the meadows of Sonamarg, Kashmir"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-2xs"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-center gap-6 px-6 py-14 text-center sm:px-12 sm:py-16 lg:py-20">
            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.24em] text-brand-light">
              Ready when you are
            </p>
            <h2 className="max-w-2xl font-heading text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
              Tell us where you dream of going. We&apos;ll handle the rest.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white/90">
              A 15-minute call with our mountain expert is all it takes to get a
              plan, a price, and a honest opinion on the right season.
            </p>
            <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-[80%] max-w-sm rounded-xl border border-brand bg-brand px-7 py-3.5 text-white shadow-lg transition-transform duration-200 hover:scale-[1.02] hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-12 sm:w-auto"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-[80%] max-w-sm rounded-xl border border-white/60 bg-black/50 px-7 py-3.5 backdrop-blur-xs text-white shadow-md transition-colors hover:border-white hover:bg-white hover:text-black font-heading text-xs font-bold uppercase tracking-wider h-12 sm:w-auto"
              >
                <a href={site.phoneHref}>
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  {site.phone}
                </a>
              </Button>
            </div>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/85 underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              or WhatsApp us directly — we usually reply in minutes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
