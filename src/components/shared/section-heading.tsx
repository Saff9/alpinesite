import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  linkHref?: string;
  linkLabel?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  linkHref,
  linkLabel,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-wrap items-end gap-x-6 gap-y-4 sm:mb-10",
        align === "center" && "flex-col items-center text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <p className="mb-2 flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.2em] text-brand">
            <span aria-hidden="true" className="h-0.5 w-4 bg-brand" />
            {eyebrow}
          </p>
        )}
        <h2 className="font-heading text-2xl font-extrabold uppercase tracking-tight text-black sm:text-3xl lg:text-[2.1rem]">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-base leading-relaxed text-neutral-700">{description}</p>
        )}
      </div>
      {linkHref && linkLabel && (
        <Link
          href={linkHref}
          className="ml-auto inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-heading text-xs font-bold uppercase tracking-wider text-brand transition-colors hover:bg-neutral-100 hover:text-brand-deep sm:ml-0"
        >
          {linkLabel}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
