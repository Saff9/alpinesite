"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Hero() {
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setElevated(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-0 pt-0 sm:px-6 sm:pt-5">
      <div className="relative min-h-[36rem] overflow-hidden rounded-none sm:min-h-[38rem] md:min-h-[40rem] lg:min-h-[42rem] sm:rounded-3xl">
        <Image
          src={site.hero.image}
          alt={site.hero.alt}
          fill
          priority
          fetchPriority="high"
          quality={90}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className={cn(
            "object-cover object-[center_35%] sm:object-[center_30%] transition-transform duration-700 ease-out will-change-transform",
            elevated ? "scale-105 sm:scale-105 lg:scale-100" : "scale-100"
          )}
        />

        {/* Scrim gradient: 100% transparent at top on mobile/tablet (clean mountain view), with dark opacity concentrated strictly at the bottom */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent lg:from-black/90 lg:via-black/45 lg:to-black/20"
          aria-hidden="true"
        />

        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-6 text-center sm:p-8 md:p-10 lg:items-start lg:p-12 lg:text-left">
          <h1 className="max-w-2xl font-heading text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-[3.6rem]">
            Gulmarg&rsquo;s own mountain guides.
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-200 drop-shadow-sm sm:mt-4 sm:text-base md:text-lg">
            We grew up on these slopes, with powder laps off Apharwat, gondola
            mornings, houseboat evenings on Dal Lake, and high passes in Ladakh.
            Experience the Himalayas guided by locals who know every trail and descent.
          </p>

          <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:w-auto lg:justify-start">
            {/* Primary Action Button */}
            <Button
              asChild
              size="lg"
              className="w-[80%] max-w-sm rounded-xl border border-brand bg-brand px-7 py-3.5 text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-12 sm:w-auto"
            >
              <Link href="/tours">
                Explore Packages
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>

            {/* Secondary Action Button */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-[80%] max-w-sm rounded-xl border border-white/60 bg-black/40 px-7 py-3.5 backdrop-blur-xs text-white shadow-md transition-colors hover:border-white hover:bg-white hover:text-black font-heading text-xs font-bold uppercase tracking-wider h-12 sm:w-auto"
            >
              <a href={site.phoneHref}>
                <Phone className="h-4 w-4 mr-1.5 text-brand-light" aria-hidden="true" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
