"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { mainNav, site, type NavItem } from "@/data/site";
import { cn } from "@/lib/utils";
import { ChevronDown, Calendar, Facebook } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useSyncExternalStore } from "react";
import { SiteLogo } from "./site-logo";
import { getItineraryContextByPath, openItineraryModal } from "@/data/itinerary-context";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const itineraryCtx = getItineraryContextByPath(pathname);

  useEffect(() => {
    document.documentElement.dataset.mobileMenuOpen = open ? "true" : "false";
    window.dispatchEvent(new CustomEvent("mobile-menu-change", { detail: open }));
  }, [open]);

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
          <nav aria-label="Primary" className="hidden h-full items-center gap-1 lg:flex xl:gap-1.5">
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
                      "font-heading relative whitespace-nowrap rounded-lg px-3 py-2 text-[13.5px] font-bold uppercase tracking-wider transition-all duration-200 xl:px-4 xl:text-[14.5px]",
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
                  className="relative flex h-full items-center"
                  onMouseEnter={() => handleDropdownOpen(item.label)}
                  onMouseLeave={handleDropdownClose}
                >
                  <Link
                    href={item.href}
                    aria-expanded={isDropdownOpen}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "font-heading inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-[13.5px] font-bold uppercase tracking-wider transition-all duration-200 outline-none xl:px-4 xl:text-[14.5px]",
                      isDropdownOpen || active
                        ? "bg-neutral-100 text-brand"
                        : "text-neutral-800 hover:bg-neutral-100 hover:text-brand",
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform duration-200",
                        isDropdownOpen ? "rotate-180 text-brand" : "text-neutral-400 group-hover:text-brand",
                      )}
                    />
                  </Link>

                  {/* Animated Dropdown Menu with Auto-Close */}
                  <div
                    className={cn(
                      "absolute top-full pt-2 max-w-[94vw] transition-all duration-200 ease-out",
                      item.dropdown?.length === 1
                        ? "left-0 w-[240px] origin-top-left"
                        : item.dropdown?.length === 2
                          ? "left-0 w-[440px] origin-top-left"
                          : "left-0 xl:-left-6 w-[780px] xl:w-[860px] origin-top-left",
                      isDropdownOpen
                        ? "opacity-100 translate-y-0 scale-100 visible pointer-events-auto"
                        : "opacity-0 translate-y-2 scale-[0.98] invisible pointer-events-none"
                    )}
                  >
                    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-2xl ring-1 ring-black/5">
                      <div
                        className={cn(
                          "grid gap-6",
                          item.dropdown?.length === 1
                            ? "grid-cols-1"
                            : item.dropdown?.length === 2
                              ? "grid-cols-2"
                              : "grid-cols-3",
                        )}
                      >
                        {item.dropdown?.map((col, idx) => (
                          <div key={col.title || idx} className="space-y-2">
                            {col.title && (
                              <h4 className="font-heading text-[0.7rem] font-bold uppercase tracking-widest text-brand border-b border-neutral-100 pb-2 mb-2">
                                {col.title}
                              </h4>
                            )}
                            <ul className="space-y-1">
                              {col.items.map((sub) => (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="block rounded-lg py-1.5 px-2.5 font-poppins font-medium text-[13px] text-neutral-800 transition-colors hover:bg-neutral-100 hover:text-brand leading-snug"
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

          {/* Desktop Right Action CTA + Itinerary Calendar Button */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <button
              type="button"
              onClick={() => openItineraryModal()}
              aria-label={`Customize Itinerary: ${itineraryCtx.title}`}
              title={itineraryCtx.title}
              className="group relative flex h-10 items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 text-neutral-800 transition-all duration-200 hover:border-brand hover:bg-neutral-100 hover:text-brand"
            >
              <Calendar className="h-4 w-4 text-brand transition-transform duration-200 group-hover:scale-110" />
              <span className="font-heading text-xs font-bold uppercase tracking-wider">
                Itinerary
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            </button>

            <Button
              asChild
              className="bg-brand text-white hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-10 px-5 shadow-xs"
            >
              <Link href="/contact">Plan Your Trip</Link>
            </Button>
          </div>

          {/* Mobile & Tablet Hamburger Trigger (Facebook icon hidden here, placed inside menu) */}
          <div className="flex items-center lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="group relative flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-xl border border-neutral-200 text-neutral-900 transition-all duration-300 hover:border-brand hover:bg-neutral-100 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand active:scale-95"
                  aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out",
                      open ? "translate-y-1.5 rotate-45" : ""
                    )}
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      "h-0.5 w-5 rounded-full bg-current transition-all duration-200 ease-in-out",
                      open ? "opacity-0 scale-0" : "opacity-100"
                    )}
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      "h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out",
                      open ? "-translate-y-1.5 -rotate-45" : ""
                    )}
                  />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[86vw] max-w-80 sm:max-w-88 p-0 bg-white">
                <div className="flex h-full max-h-full min-h-0 flex-col overflow-hidden bg-white">
                  <div className="shrink-0 border-b border-neutral-200 px-4 py-3.5 pr-12 sm:p-5 sm:pr-12 bg-white">
                    <SheetTitle asChild>
                      <div>
                        <SiteLogo />
                      </div>
                    </SheetTitle>
                  </div>

                  <nav
                    aria-label="Mobile Navigation"
                    className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-3.5 sm:p-5 space-y-2"
                  >
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
                              "font-heading block rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-[14px] font-bold uppercase tracking-wider transition-colors",
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
                              "font-heading flex w-full items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 text-[14px] font-bold uppercase tracking-wider text-left transition-colors",
                              isExpanded ? "bg-neutral-100 text-brand" : "bg-white text-neutral-900 hover:bg-neutral-50",
                            )}
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 shrink-0 transition-transform duration-200 text-neutral-400",
                                isExpanded && "rotate-180 text-brand",
                              )}
                            />
                          </button>

                          <div
                            className={cn(
                              "transition-all duration-300 ease-in-out overflow-hidden bg-neutral-50",
                              isExpanded ? "max-h-[1600px] opacity-100 p-3 space-y-3 border-t border-neutral-200" : "max-h-0 opacity-0 p-0 border-t-0"
                            )}
                          >
                            {item.dropdown?.map((col, idx) => (
                              <div key={col.title || idx} className="space-y-1">
                                {col.title && (
                                  <span className="font-heading text-[0.65rem] font-bold uppercase tracking-wider text-brand">
                                    {col.title}
                                  </span>
                                )}
                                <ul className="space-y-0.5 pl-1">
                                  {col.items.map((sub) => (
                                    <li key={sub.href}>
                                      <Link
                                        href={sub.href}
                                        onClick={() => setOpen(false)}
                                        className="block rounded-lg py-2 px-2.5 font-poppins font-medium text-[13px] text-neutral-900 hover:bg-neutral-200/70 hover:text-brand transition-colors"
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

                  <div className="shrink-0 space-y-3 border-t border-neutral-200 bg-white px-4 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:p-5">
                    <Button
                      asChild
                      className="flex h-11 sm:h-12 w-full items-center justify-center rounded-xl bg-brand px-4 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep transition-all"
                    >
                      <Link href="/contact" onClick={() => setOpen(false)}>
                        Plan Your Trip
                      </Link>
                    </Button>
                    <a
                      href={site.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-full items-center justify-center gap-2.5 rounded-xl border border-neutral-200 bg-neutral-50 px-4 font-heading text-xs font-bold uppercase tracking-wider text-neutral-800 transition-colors hover:border-[#1877F2] hover:bg-[#1877F2]/5 hover:text-[#1877F2]"
                    >
                      <Facebook className="h-4 w-4 text-[#1877F2]" />
                      <span>Follow on Facebook</span>
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
