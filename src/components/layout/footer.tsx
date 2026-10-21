import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { SiteLogo } from "./site-logo";
import { mainNav, site } from "@/data/site";
import { destinations, popularDestinations } from "@/data/destinations";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full overflow-hidden rounded-none border-t border-[#182c3a] bg-[#0c1821] text-neutral-300 shadow-2xl">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 sm:py-16 md:py-20 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-14 lg:grid-cols-[1.5fr_1fr_1.1fr_1.4fr] lg:gap-14 text-left">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <SiteLogo variant="dark" hideTagline />
            <p className="mt-4 max-w-sm font-poppins font-normal text-sm leading-relaxed text-neutral-300 text-left">
              {site.tagline}. Operating from Gulmarg since {site.established} with local mountain guides, drivers, and families.
            </p>
            <div className="mt-6 flex justify-start gap-3">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alpine Club India on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-sm transition-all duration-200 hover:scale-110 hover:brightness-110"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alpine Club India on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1877F2] text-white shadow-sm transition-all duration-200 hover:scale-110 hover:brightness-110"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alpine Club India on YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF0000] text-white shadow-sm transition-all duration-200 hover:scale-110 hover:brightness-110"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alpine Club India on Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1DA1F2] text-white shadow-sm transition-all duration-200 hover:scale-110 hover:brightness-110"
              >
                <Twitter className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer Navigation" className="flex flex-col items-start">
            <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2 inline-block">
              Navigation
            </h2>
            <ul className="mt-4 space-y-3 font-poppins font-normal text-base sm:text-sm flex flex-col items-start text-left">
              {mainNav.map((item) => {
                if (item.label === "More" && item.dropdown) {
                  return (
                    <li key={item.label}>
                      <Link
                        href="/ski-guides"
                        className="font-poppins font-normal text-neutral-300 transition-colors hover:text-white"
                      >
                        Our Ski Guides
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-poppins font-normal text-neutral-300 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Popular destinations */}
          <nav aria-label="Destinations" className="flex flex-col items-start">
            <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2 inline-block">
              Destinations
            </h2>
            <ul className="mt-4 space-y-3 font-poppins font-normal text-base sm:text-sm flex flex-col items-start text-left">
              {popularDestinations.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/destinations/${d.slug}`}
                    className="font-poppins font-normal text-neutral-300 transition-colors hover:text-white"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/destinations"
                  className="font-poppins font-medium text-brand-light/90 transition-colors hover:text-white"
                >
                  View all {destinations.length} destinations
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="flex flex-col items-start">
            <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2 inline-block">
              Get in Touch
            </h2>
            <ul className="mt-4 space-y-3.5 font-poppins font-normal text-base sm:text-sm flex flex-col items-start text-left">
              <li className="flex justify-start">
                <a
                  href={site.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 font-poppins font-normal text-neutral-300 transition-colors hover:text-white text-left max-w-xs"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-brand-light mt-0.5" aria-hidden="true" />
                  <span>{site.address.full}</span>
                </a>
              </li>
              <li className="flex justify-start">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 font-poppins font-normal text-neutral-300 transition-colors hover:text-white text-left"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-light" aria-hidden="true" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li className="flex justify-start">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 font-poppins font-normal text-neutral-300 transition-colors hover:text-white text-left"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-light" aria-hidden="true" />
                  <span>{site.email}</span>
                </a>
              </li>
              <li className="flex items-center justify-start gap-2.5 font-poppins font-normal text-neutral-300 text-left">
                <Clock className="h-4 w-4 shrink-0 text-brand-light" aria-hidden="true" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center gap-3 border-t border-[#182c3a] pt-6 sm:pt-8 font-poppins font-normal text-sm text-center text-neutral-300 lg:flex-row lg:justify-between lg:text-left">
          <p className="font-poppins font-normal text-sm text-neutral-300">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-1.5 font-poppins font-normal text-sm text-neutral-300 lg:justify-end">
            <span>Designed &amp; Powered by</span>
            <a
              href="https://imtiyazkumar.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-poppins font-normal text-neutral-200 underline decoration-neutral-500 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              Imtiyaz
            </a>
            <span className="text-neutral-400">&amp;</span>
            <a
              href="https://owaisdar.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-poppins font-normal text-neutral-200 underline decoration-neutral-500 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              Owais
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
