import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Brand logo component that renders the official Alpine Club India logo
 * seamlessly on both light (navbar) and dark (footer) backgrounds, fully responsive.
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
      className={cn(
        "group inline-flex items-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        className,
      )}
    >
      <span className="sr-only">{site.name}</span>
      {onDark ? (
        /* Dark footer mode: clean white card badge for crisp contrast against dark background */
        <span
          className="inline-flex items-center justify-center rounded-2xl bg-white p-2 sm:p-2.5 shadow-md ring-1 ring-white/20 transition-transform duration-200 group-hover:scale-[1.03]"
          aria-hidden="true"
        >
          <Image
            src={site.logo}
            alt={site.name}
            width={180}
            height={90}
            className="h-11 w-auto sm:h-13 max-w-[160px] sm:max-w-[190px] object-contain"
          />
        </span>
      ) : (
        /* Light navbar mode: native seamless display matching the white navbar background */
        <span className="inline-flex items-center" aria-hidden="true">
          <Image
            src={site.logo}
            alt={site.name}
            width={190}
            height={95}
            className="h-10 w-auto sm:h-12 md:h-13 max-w-[140px] sm:max-w-[180px] md:max-w-[210px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            priority
          />
        </span>
      )}
    </Link>
  );
}
