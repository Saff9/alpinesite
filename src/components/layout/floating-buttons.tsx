"use client";

import { useSyncExternalStore, useState } from "react";
import { ArrowUp, Phone, Calendar } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { DynamicItineraryModal } from "@/components/forms/dynamic-itinerary-modal";
import { getItineraryContextByPath, openItineraryModal } from "@/data/itinerary-context";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  );
}

export function FloatingButtons() {
  const pathname = usePathname();
  const itineraryCtx = getItineraryContextByPath(pathname);

  const showTop = useSyncExternalStore(
    (onChange) => {
      window.addEventListener("scroll", onChange, { passive: true });
      return () => window.removeEventListener("scroll", onChange);
    },
    () => window.scrollY > 480,
    () => false,
  );

  const menuOpen = useSyncExternalStore(
    (onChange) => {
      window.addEventListener("mobile-menu-change", onChange);
      return () => window.removeEventListener("mobile-menu-change", onChange);
    },
    () => document.documentElement.dataset.mobileMenuOpen === "true",
    () => false,
  );

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    site.whatsappMessage,
  )}`;

  return (
    <>
      {/* 1. Left Bottom: Quick Call Button */}
      <div
        data-print-hidden
        className={cn(
          "fixed bottom-5 left-5 z-50 flex flex-col items-center gap-3 transition-all duration-200 sm:bottom-6 sm:left-6",
          menuOpen && "invisible opacity-0 pointer-events-none lg:visible lg:opacity-100 lg:pointer-events-auto",
        )}
      >
        <a
          href={site.phoneHref}
          aria-label={`Call us at ${site.phone}`}
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-xl shadow-black/25 transition-all duration-300 hover:bg-brand-deep hover:shadow-2xl hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 sm:h-13 sm:w-13"
        >
          <Phone className="h-5 w-5 shrink-0 fill-current text-white sm:h-6 sm:w-6" aria-hidden="true" />
        </a>
      </div>

      {/* 2. Right Bottom: 
          On Mobile & Tablet: Itinerary Calendar Button replaces Facebook above WhatsApp.
          On Desktop: Facebook stays above WhatsApp, while Itinerary Calendar is in the Navbar.
      */}
      <div
        data-print-hidden
        className={cn(
          "fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 transition-all duration-200 sm:bottom-6 sm:right-6",
          menuOpen && "invisible opacity-0 pointer-events-none lg:visible lg:opacity-100 lg:pointer-events-auto",
        )}
      >
        {/* Back to top arrow button */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900/90 text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 sm:h-11 sm:w-11",
            showTop
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-3 opacity-0",
          )}
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </button>

        {/* Mobile & Tablet: Itinerary Calendar Floating Button (replaces Facebook here) */}
        <button
          type="button"
          onClick={() => openItineraryModal()}
          aria-label={`Customize Itinerary: ${itineraryCtx.title}`}
          title={itineraryCtx.title}
          className="flex lg:hidden group relative h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-xl shadow-black/25 transition-all duration-300 hover:bg-brand-deep hover:shadow-2xl hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 sm:h-13 sm:w-13"
        >
          <Calendar className="h-5 w-5 text-white sm:h-6 sm:w-6" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
        </button>

        {/* Desktop & Laptop: Facebook floating button */}
        <a
          href={site.socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Alpine Club India on Facebook (opens in a new tab)"
          className="hidden lg:flex group h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-xl shadow-black/25 transition-all duration-300 hover:brightness-110 hover:shadow-2xl hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 sm:h-13 sm:w-13"
        >
          <FacebookIcon className="h-5 w-5 text-white sm:h-5.5 sm:w-5.5" />
        </a>

        {/* WhatsApp chat button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 transition-all duration-300 hover:bg-[#20ba59] hover:shadow-2xl hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 sm:h-13 sm:w-13"
        >
          <WhatsAppIcon className="h-6 w-6 shrink-0 fill-white text-white sm:h-7 sm:w-7" />
        </a>
      </div>

      {/* Global Dynamic Itinerary Modal */}
      <DynamicItineraryModal pathname={pathname} />
    </>
  );
}
