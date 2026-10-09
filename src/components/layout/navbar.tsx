"use client";

import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { mainNav, site, type NavItem } from "@/data/site";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useSyncExternalStore } from "react";
import { SiteLogo } from "./site-logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Subscribe to scroll position for sticky header state
  const scrolled = useSyncExternalStore(
    (onChange) => {
      window.addEventListener("scroll", onChange, { passive: true });
      return () => window.removeEventListener("scroll", onChange);
    },
    () => window.scrollY > 10,
    () => false,
  );

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    site.whatsappMessage,
  )}`;

  const handleDropdownOpen = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    // Closes any previously opened dropdown and opens the current one
    setActiveDropdown(label);
  };

  const handleDropdownClose = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleLinkHoverNoDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    // When hovering a link without dropdown, immediately close any active dropdown
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Main Header Bar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-white transition-all duration-200",
          scrolled
            ? "border-neutral-200 shadow-sm"
            : "border-neutral-200",
        )}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">
          <SiteLogo />

          {/* Desktop Navigation with animated auto-closing dropdowns and light grey hover states */}
          <nav aria-label="Primary" className="hidden items-center gap-1.5 lg:flex h-full">
            {mainNav.map((item: NavItem) => {
              const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
              const active = isActive(item.href);
              const isDropdownOpen = activeDropdown === item.label;

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={handleLinkHoverNoDropdown}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "font-heading relative rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200",
                      active
                        ? "bg-neutral-100 text-brand"
                        : "text-neutral-800 hover:bg-neutral-100 hover:text-brand",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => handleDropdownOpen(item.label)}
                  onMouseLeave={handleDropdownClose}
                >
                  <Link
                    href={item.href}
                    aria-expanded={isDropdownOpen}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "font-heading inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 outline-none",
                      isDropdownOpen || active
                        ? "bg-neutral-100 text-brand"
                        : "text-neutral-800 hover:bg-neutral-100 hover:text-brand",
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        isDropdownOpen ? "rotate-180 text-brand" : "text-neutral-400 group-hover:text-brand",
                      )}
                    />
                  </Link>

                  {/* Animated Dropdown Menu with Auto-Close */}
                  <div
                    className={cn(
                      "absolute left-0 top-full pt-2 w-[620px] max-w-[90vw] transition-all duration-200 ease-out origin-top-left",
                      isDropdownOpen
                        ? "opacity-100 translate-y-0 scale-100 visible pointer-events-auto"
                        : "opacity-0 translate-y-2 scale-[0.98] invisible pointer-events-none"
                    )}
                  >
                    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl ring-1 ring-black/5">
                      <div className="grid grid-cols-3 gap-6">
                        {item.dropdown?.map((col) => (
                          <div key={col.title} className="space-y-3">
                            <h4 className="font-heading text-[0.7rem] font-bold uppercase tracking-widest text-brand border-b border-neutral-100 pb-2">
                              {col.title}
                            </h4>
                            <ul className="space-y-1">
                              {col.items.map((sub) => (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="block rounded-lg py-1.5 px-2 text-xs font-bold text-neutral-800 transition-colors hover:bg-neutral-100 hover:text-brand"
                                  >
                                    {sub.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Desktop Right Action CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 rounded-xl border border-neutral-200 px-3.5 py-2 text-xs font-bold text-neutral-800 hover:bg-neutral-100 hover:border-brand hover:text-brand transition-all duration-200"
            >
              <Phone className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              <span>{site.phone}</span>
            </a>
            <Button
              asChild
              className="bg-brand text-white hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-10 px-5 shadow-xs"
            >
              <Link href="/contact">Plan Your Trip</Link>
            </Button>
          </div>

          {/* Mobile & Tablet Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-xl border-neutral-200 text-neutral-900 hover:bg-neutral-100 hover:border-brand hover:text-brand transition-colors"
              aria-label={`Call ${site.name} at ${site.phone}`}
            >
              <a href={site.phoneHref}>
                <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              </a>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-xl border-neutral-200 text-neutral-900 hover:bg-neutral-100 hover:border-brand hover:text-brand transition-colors"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-88 p-0 bg-white">
                <div className="flex h-full flex-col">
                  <div className="border-b border-neutral-200 p-5 bg-white">
                    <SheetTitle asChild>
                      <div>
                        <SiteLogo />
                      </div>
                    </SheetTitle>
                  </div>

                  <nav aria-label="Mobile Navigation" className="flex-1 overflow-y-auto p-4 space-y-1.5">
                    {mainNav.map((item: NavItem) => {
                      const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
                      const isExpanded = mobileExpanded === item.label;

                      if (!hasDropdown) {
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            aria-current={isActive(item.href) ? "page" : undefined}
                            className={cn(
                              "font-heading block rounded-xl px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors",
                              isActive(item.href)
                                ? "bg-brand text-white"
                                : "text-neutral-900 hover:bg-neutral-100 hover:text-brand",
                            )}
                          >
                            {item.label}
                          </Link>
                        );
                      }

                      return (
                        <div key={item.label} className="rounded-xl border border-neutral-200 overflow-hidden transition-all duration-200">
                          <button
                            type="button"
                            onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                            className={cn(
                              "font-heading flex w-full items-center justify-between px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-left transition-colors",
                              isExpanded ? "bg-neutral-100 text-brand" : "bg-white text-neutral-900 hover:bg-neutral-50",
                            )}
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform duration-200 text-neutral-400",
                                isExpanded && "rotate-180 text-brand",
                              )}
                            />
                          </button>

                          <div
                            className={cn(
                              "transition-all duration-300 ease-in-out overflow-hidden bg-neutral-50",
                              isExpanded ? "max-h-[600px] opacity-100 p-3 space-y-3 border-t border-neutral-200" : "max-h-0 opacity-0 p-0 border-t-0"
                            )}
                          >
                            {item.dropdown?.map((col) => (
                              <div key={col.title} className="space-y-1.5">
                                <span className="font-heading text-[0.65rem] font-bold uppercase tracking-wider text-brand">
                                  {col.title}
                                </span>
                                <ul className="space-y-1 pl-1">
                                  {col.items.map((sub) => (
                                    <li key={sub.href}>
                                      <Link
                                        href={sub.href}
                                        onClick={() => setOpen(false)}
                                        className="block rounded-lg py-1.5 px-2 text-xs font-bold text-neutral-900 hover:bg-neutral-200/70 hover:text-brand transition-colors"
                                      >
                                        {sub.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </nav>

                  <div className="mt-auto space-y-2.5 border-t border-neutral-200 p-5 bg-white">
                    <Button
                      asChild
                      className="w-full rounded-xl bg-brand text-white hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-11"
                    >
                      <Link href="/contact" onClick={() => setOpen(false)}>
                        Plan Your Trip
                      </Link>
                    </Button>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3.5 py-2.5 text-xs font-bold text-white hover:bg-[#20ba59] transition-colors"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <a
                      href={site.phoneHref}
                      className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 px-3.5 py-2.5 text-xs font-bold text-neutral-900 hover:bg-neutral-100 hover:border-brand"
                    >
                      <Phone className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                      {site.phone}
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
