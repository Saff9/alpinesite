"use client";

import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { mainNav, site, type NavItem } from "@/data/site";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { SiteLogo } from "./site-logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <SiteLogo />

          {/* Desktop Navigation with compact clean dropdowns */}
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex h-full">
            {mainNav.map((item: NavItem) => {
              const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
              const active = isActive(item.href);

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "font-heading relative px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors",
                      active
                        ? "text-brand"
                        : "text-neutral-900 hover:text-brand",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3.5 -bottom-2.5 h-0.5 bg-brand transition-opacity",
                        active ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </Link>
                );
              }

              return (
                <div key={item.label} className="group relative h-full flex items-center">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "font-heading inline-flex items-center gap-1 px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors outline-none",
                      active
                        ? "text-brand"
                        : "text-neutral-900 group-hover:text-brand",
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 text-neutral-400 group-hover:text-brand" />
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3.5 -bottom-2.5 h-0.5 bg-brand transition-opacity",
                        active ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                      )}
                    />
                  </Link>

                  {/* Compact, Clean Dropdown */}
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 ease-out absolute left-0 top-full pt-1.5 w-[620px] max-w-[90vw]">
                    <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-xl ring-1 ring-black/5">
                      <div className="grid grid-cols-3 gap-6">
                        {item.dropdown?.map((col) => (
                          <div key={col.title} className="space-y-2.5">
                            <h4 className="font-heading text-[0.7rem] font-bold uppercase tracking-widest text-brand border-b border-neutral-100 pb-1.5">
                              {col.title}
                            </h4>
                            <ul className="space-y-1.5">
                              {col.items.map((sub) => (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    className="block rounded py-1 px-1.5 text-xs font-bold text-neutral-900 transition-colors hover:bg-neutral-50 hover:text-brand"
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
              className="flex items-center gap-2 rounded-md border border-neutral-200 px-3 py-2 text-xs font-bold text-neutral-900 hover:border-brand hover:text-brand transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              <span>{site.phone}</span>
            </a>
            <Button
              asChild
              className="bg-brand text-white hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-9 px-4 shadow-xs"
            >
              <Link href="/contact">Plan Your Trip</Link>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="h-9 w-9 border-neutral-200 text-neutral-900 hover:border-brand hover:text-brand"
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
                  className="h-9 w-9 border-neutral-200 text-neutral-900 hover:border-brand hover:text-brand"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-4 w-4" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0 bg-white">
                <div className="flex h-full flex-col">
                  <div className="border-b border-neutral-200 p-4 bg-white">
                    <SheetTitle asChild>
                      <div>
                        <SiteLogo />
                      </div>
                    </SheetTitle>
                  </div>

                  <nav aria-label="Mobile Navigation" className="flex-1 overflow-y-auto p-4 space-y-1">
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
                              "font-heading block rounded-md px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors",
                              isActive(item.href)
                                ? "bg-brand-light text-brand"
                                : "text-neutral-900 hover:bg-neutral-50",
                            )}
                          >
                            {item.label}
                          </Link>
                        );
                      }

                      return (
                        <div key={item.label} className="rounded-md border border-neutral-200 overflow-hidden">
                          <button
                            type="button"
                            onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                            className={cn(
                              "font-heading flex w-full items-center justify-between px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-left transition-colors",
                              isExpanded ? "bg-neutral-50 text-neutral-900" : "bg-white text-neutral-900",
                            )}
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              className={cn(
                                "h-3.5 w-3.5 transition-transform duration-200 text-neutral-400",
                                isExpanded && "rotate-180 text-brand",
                              )}
                            />
                          </button>

                          {isExpanded && (
                            <div className="bg-neutral-50 p-3 space-y-3 border-t border-neutral-200">
                              {item.dropdown?.map((col) => (
                                <div key={col.title} className="space-y-1">
                                  <span className="font-heading text-[0.65rem] font-bold uppercase tracking-wider text-brand">
                                    {col.title}
                                  </span>
                                  <ul className="space-y-1 pl-1">
                                    {col.items.map((sub) => (
                                      <li key={sub.href}>
                                        <Link
                                          href={sub.href}
                                          onClick={() => setOpen(false)}
                                          className="block py-1 text-xs font-bold text-neutral-900 hover:text-brand transition-colors"
                                        >
                                          {sub.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </nav>

                  <div className="mt-auto space-y-2 border-t border-neutral-200 p-4 bg-white">
                    <Button
                      asChild
                      className="w-full bg-brand text-white hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-10"
                    >
                      <Link href="/contact" onClick={() => setOpen(false)}>
                        Plan Your Trip
                      </Link>
                    </Button>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-3 py-2 text-xs font-bold text-white hover:bg-[#20ba59] transition-colors"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <a
                      href={site.phoneHref}
                      className="flex items-center justify-center gap-2 rounded-md border border-neutral-200 px-3 py-2 text-xs font-bold text-neutral-900 hover:border-brand"
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
