"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    const onMenuChange = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      setMenuOpen(Boolean(customEvent.detail));
    };
    onScroll();
    setMenuOpen(document.documentElement.dataset.mobileMenuOpen === "true");
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mobile-menu-change", onMenuChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mobile-menu-change", onMenuChange);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    site.whatsappMessage,
  )}`;

  return (
    <div
      data-print-hidden
      className={cn(
        "fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 transition-all duration-200 sm:bottom-6 sm:right-6",
        menuOpen && "invisible opacity-0 pointer-events-none lg:visible lg:opacity-100 lg:pointer-events-auto",
      )}
    >
      {/* Contact / Call button floating directly above WhatsApp button */}
      <a
        href={site.phoneHref}
        aria-label={`Call us at ${site.phone}`}
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-black/25 transition-all duration-300 hover:bg-brand-deep hover:shadow-xl hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 sm:h-13 sm:w-13"
      >
        <Phone className="h-5 w-5 shrink-0 fill-current text-white sm:h-6 sm:w-6" aria-hidden="true" />
      </a>

      {/* WhatsApp chat, floating directly above back-to-top button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-all duration-300 hover:bg-[#20ba59] hover:shadow-xl hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 sm:h-13 sm:w-13"
      >
        <WhatsAppIcon className="h-6 w-6 shrink-0 fill-white text-white sm:h-7 sm:w-7" />
      </a>

      {/* Back to top arrow button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg shadow-black/25 transition-all duration-300 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 sm:h-12 sm:w-12",
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
