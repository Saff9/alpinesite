import Image from "next/image";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  crumbs?: Crumb[];
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  image,
  imageAlt,
  className,
}: PageHeaderProps) {
  return (
    <section className={cn("relative overflow-hidden bg-neutral-950", className)}>
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            priority
            quality={95}
            className="object-cover brightness-[1.04] contrast-[1.02]"
            sizes="100vw"
          />
          {/* Subtle gradient overlay ensuring high image clarity while maintaining text readability */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/15"
            aria-hidden="true"
          />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-5 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
        <h1 className="mx-auto max-w-3xl font-heading text-3xl font-extrabold uppercase tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-4xl lg:text-[2.85rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] font-poppins">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
