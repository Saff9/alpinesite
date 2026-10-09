import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  crumbs?: Crumb[];
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  image,
  imageAlt,
  crumbs = [],
  className,
}: PageHeaderProps) {
  return (
    <section className={cn("relative overflow-hidden bg-black", className)}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover opacity-50"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex justify-center">
            <ol className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/70">
              {crumbs.map((crumb, i) => (
                <li key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3 w-3 text-brand" aria-hidden="true" />}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-white"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white font-bold">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/90">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
