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
            "object-cover object-[center_35%] sm:object-[center_30%] brightness-[1.04] contrast-[1.02] transition-transform duration-700 ease-out will-change-transform",
            elevated ? "scale-105 sm:scale-105 lg:scale-100" : "scale-100"
          )}
        />

        {/* Refined gradient: lighter and cleaner to maximize mountain, snow & gondola image clarity */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent lg:from-black/75 lg:via-black/25 lg:to-transparent"
          aria-hidden="true"
        />

        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-6 text-center sm:p-8 md:p-10 lg:items-start lg:p-12 lg:text-left">
          <h1 className="max-w-3xl font-heading text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            Experience The Himalayas Of India.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-100 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)] sm:mt-4 font-poppins">
            AlpineClubIndia.com is created for travellers from all over the world who see the mountains as a place of inner peace , challenge, reconnect with nature and experience the Himalayas of India .
          </p>

          <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:w-auto lg:justify-start">
            {/* Primary Action Button */}
            <Button
              asChild
              size="lg"
              className="w-[80%] max-w-sm rounded-xl border border-brand bg-brand px-7 py-3.5 text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-12 sm:w-auto"
            >
              <Link href="/packages">
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
