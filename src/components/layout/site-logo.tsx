import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Brand wordmark, reads the name and micro-copy from `src/data/site.ts`,
 * so a rebrand never touches this file.
 */
export function SiteLogo({
  className,
  variant = "light",
  hideTagline = false,
}: {
  className?: string;
  variant?: "light" | "dark";
  hideTagline?: boolean;
}) {
  const onDark = variant === "dark";
  return (
    <Link
      href="/"
      aria-label={`${site.name}, home`}
      className={cn("group flex items-center gap-2.5", className)}
    >
      {/* Peak-and-piste mark: twin ridgelines with a snow cap and a fall
          line (the ski line) cutting through, a guide's mountain, drawn
          with the same stroke weight as the wordmark. */}
      <span
        aria-hidden="true"
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-200 group-hover:-translate-y-0.5",
          onDark ? "bg-brand text-white" : "bg-brand text-white shadow-xs",
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          {/* far ridge */}
          <path
            d="M2.8 19.2 8.4 8.9l2.5 4.5L13.9 10l7.3 9.2"
            className="opacity-60"
          />
          {/* snow-capped peak */}
          <path d="M8.4 8.9l1.9-3.4 1.2 2 1-1 1.4 3.5" />
          {/* the fall line, a guide's line down the face */}
          <path d="M13.9 15.6c-1.1-.9-1.6-2.4-1.2-3.9" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[1.1rem] font-extrabold uppercase tracking-tight",
            onDark ? "text-white" : "text-neutral-950",
          )}
        >
          {site.shortName}&nbsp;India
        </span>
        {!hideTagline && (
          <span
            className={cn(
              "mt-0.5 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-brand",
            )}
          >
            {site.logoTagline}
          </span>
        )}
      </span>
    </Link>
  );
}
