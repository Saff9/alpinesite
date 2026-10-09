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
  align = "center",
  linkHref,
  linkLabel,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col items-center text-center sm:mb-10",
        align === "left" && "sm:items-start sm:text-left",
        className,
      )}
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {eyebrow && (
          <p className="mb-2.5 inline-flex items-center justify-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.2em] text-brand">
            <span aria-hidden="true" className="h-0.5 w-4 bg-brand" />
            {eyebrow}
            <span aria-hidden="true" className="h-0.5 w-4 bg-brand" />
          </p>
        )}
        <h2 className="font-heading text-2xl font-extrabold uppercase tracking-tight text-black sm:text-3xl lg:text-[2.2rem]">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-base leading-relaxed text-neutral-700 max-w-xl mx-auto">
            {description}
          </p>
        )}
      </div>
      {linkHref && linkLabel && (
        <div className="mt-4 flex justify-center">
          <Link
            href={linkHref}
            className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-brand transition-colors hover:bg-neutral-100 hover:text-brand-deep"
          >
            {linkLabel}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      )}
    </div>
  );
}
