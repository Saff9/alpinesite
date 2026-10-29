import Link from "next/link";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { SiteLogo } from "./site-logo";
import { site, quickLinksNav, skiAndHimalayasNav, activitiesNav } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full overflow-hidden rounded-none border-t border-[#182c3a] bg-[#0c1821] text-neutral-300 shadow-2xl">
      <div className="mx-auto w-full max-w-7xl px-6 pt-12 pb-[max(7.5rem,env(safe-area-inset-bottom))] sm:px-8 sm:py-16 md:py-20 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 text-left">
          {/* Brand */}
          <div className="flex flex-col items-start lg:col-span-1">
            <SiteLogo variant="dark" hideTagline />
            <p className="mt-4 max-w-sm font-poppins font-normal text-sm leading-relaxed text-neutral-300 text-left">
              {site.tagline}. Operating from Gulmarg since {site.established} with local mountain guides, drivers, and families.
            </p>
            <div className="mt-6 flex justify-start">
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alpine Club India on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1877F2] text-white shadow-sm transition-all duration-200 hover:scale-110 hover:brightness-110"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links (Includes Destinations link & key routes) */}
          <nav aria-label="Quick Links" className="flex flex-col items-start">
            <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2 inline-block">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5 font-poppins font-normal text-sm flex flex-col items-start text-left">
              {quickLinksNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-poppins font-normal text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Ski & Himalayas Column */}
          <nav aria-label="Ski Resorts and Himalayas Navigation" className="flex flex-col items-start">
            <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2 inline-block">
              Ski &amp; Himalayas
            </h2>
            <ul className="mt-4 space-y-2.5 font-poppins font-normal text-sm flex flex-col items-start text-left">
              {skiAndHimalayasNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-poppins font-normal text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Activities Column */}
          <nav aria-label="Activities Navigation" className="flex flex-col items-start">
            <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2 inline-block">
              Activities
            </h2>
            <ul className="mt-4 space-y-2.5 font-poppins font-normal text-sm flex flex-col items-start text-left">
              {activitiesNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-poppins font-normal text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="flex flex-col items-start">
            <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2 inline-block">
              Get in Touch
            </h2>
            <ul className="mt-4 space-y-3 font-poppins font-normal text-sm flex flex-col items-start text-left">
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
            </ul>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center gap-4 border-t border-[#182c3a] pt-6 sm:pt-8 font-poppins font-normal text-sm text-center text-neutral-300 lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 font-poppins font-normal text-xs sm:text-sm text-neutral-300">
            <span>© {year} {site.name}. All rights reserved.</span>
            <span className="hidden sm:inline text-neutral-500">·</span>
            <Link
              href="/privacy-policy"
              className="text-neutral-300 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-neutral-500">·</span>
            <Link
              href="/terms-and-conditions"
              className="text-neutral-300 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="flex flex-wrap items-center justify-center gap-1.5 font-poppins font-normal text-sm text-neutral-300 lg:justify-end">
            <span>Designed by</span>
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
