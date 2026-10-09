import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { ArrowRight, ShieldCheck, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 sm:pt-5">
      <div className="relative min-h-[38rem] overflow-hidden rounded-2xl sm:min-h-[38rem] md:min-h-[40rem] lg:min-h-[42rem] sm:rounded-3xl">
        <Image
          src={site.hero.image}
          alt={site.hero.alt}
          fill
          priority
          fetchPriority="high"
          quality={90}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-[center_35%] sm:object-[center_30%]"
        />
        {/* Subtle dual gradient scrim: keeps top gondola and mountains visible while ensuring text is readable */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 md:p-10 lg:p-12">
          <h1 className="max-w-2xl font-heading text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-[3.6rem]">
            Gulmarg&rsquo;s own mountain guides.
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-200 drop-shadow-sm sm:mt-4 sm:text-base md:text-lg">
            We grew up on these slopes, with powder laps off Apharwat, gondola
            mornings, houseboat evenings on Dal Lake, and high passes in Ladakh.
            Experience the Himalayas guided by locals who know every trail and descent.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
            <Button
              asChild
              size="lg"
              className="bg-brand text-white hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-11 px-5 sm:px-6 shadow-md"
            >
              <Link href="/tours">
                Explore Packages
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/80 bg-black/40 backdrop-blur-xs text-white hover:bg-white hover:text-black font-heading text-xs font-bold uppercase tracking-wider h-11 px-5 sm:px-6 transition-colors"
            >
              <Link href="/contact">Call Now</Link>
            </Button>
          </div>

          {/* trust strip — serif figures, hairline dividers (sm+) */}
          <dl className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-primary-foreground/90 sm:gap-x-0 sm:divide-x sm:divide-white/15">
            <div className="flex items-center gap-2.5 sm:pr-6">
              <ShieldCheck className="h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
              <dt className="sr-only">Years of experience</dt>
              <dd className="text-sm">
                <span className="font-heading text-base font-semibold text-white">
                  {site.stats.yearsExperience}+ seasons
                </span>{" "}
                <span className="text-primary-foreground/75">guiding these mountains</span>
              </dd>
            </div>
            <div className="flex items-center gap-2.5 sm:px-6">
              <Users className="h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
              <dt className="sr-only">Travellers served</dt>
              <dd className="text-sm">
                <span className="font-heading text-base font-semibold text-white">
                  {site.stats.travellersServed}
                </span>{" "}
                <span className="text-primary-foreground/75">travellers guided</span>
              </dd>
            </div>
            <div className="flex items-center gap-2.5 sm:pl-6">
              <Star className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400" aria-hidden="true" />
              <dt className="sr-only">Average rating</dt>
              <dd className="text-sm">
                <span className="font-heading text-base font-semibold text-white">
                  {site.stats.rating.toFixed(1)}/5
                </span>{" "}
                <span className="text-primary-foreground/75">
                  on Google every review earned
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
