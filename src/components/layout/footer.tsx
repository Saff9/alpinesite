import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { SiteLogo } from "./site-logo";
import { mainNav, site } from "@/data/site";
import { destinations, popularDestinations } from "@/data/destinations";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto overflow-hidden rounded-t-[2.5rem] sm:rounded-t-[3.5rem] lg:rounded-t-[4rem] bg-black text-neutral-400 border-t border-neutral-900 shadow-2xl">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.1fr_1.4fr] lg:gap-14">
          {/* Brand */}
          <div>
            <SiteLogo variant="dark" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">
              {site.tagline}. Operating from Gulmarg since {site.established} with local mountain guides, drivers, and families.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alpine Club India on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alpine Club India on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alpine Club India on YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alpine Club India on Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
              >
                <Twitter className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer Navigation">
            <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Popular destinations */}
          <nav aria-label="Destinations">
            <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-white">
              Destinations
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {popularDestinations.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/destinations/${d.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/destinations"
                  className="font-semibold text-neutral-300 transition-colors hover:text-white"
                >
                  View all {destinations.length} destinations
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-white">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(site.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2.5 transition-colors hover:text-white"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" aria-hidden="true" />
                  <span>{site.address.full}</span>
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="flex gap-2.5 transition-colors hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex gap-2.5 transition-colors hover:text-white">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" aria-hidden="true" />
                {site.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 text-xs sm:flex-row">
          <p className="text-neutral-500">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="flex items-center gap-4 text-neutral-500">
            <span>Made in Gulmarg, Kashmir</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
