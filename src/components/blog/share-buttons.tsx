"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { Check, Facebook, Link2, MessageCircle, Share2, Twitter } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

interface ShareButtonsProps {
  title: string;
  path: string;
  /** Label above the buttons, "Share this guide" for blog, "Share this trip" for tours. */
  label?: string;
  className?: string;
}

const ICON_LINK_CLASS =
  "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-pine hover:text-primary-foreground hover:border-pine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function ShareButtons({ title, path, label = "Share this guide", className }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);

  const url = `${site.url}${path}`;

  /** Native share sheet (navigator.share), available on most mobile
   *  browsers. Read via useSyncExternalStore with a server snapshot of false
   *  so SSR and hydration stay identical (same pattern as the navbar's
   *  scroll flag); the capability never changes, so subscribe is a no-op. */
  const canNativeShare = useSyncExternalStore(
    () => () => {},
    () =>
      typeof navigator.share === "function" &&
      navigator.canShare?.({ title, url }) !== false,
    () => false,
  );

  const nativeShare = async () => {
    try {
      await navigator.share({ title, url });
    } catch {
      // User dismissed the sheet or the browser refused, either way, no-op.
    }
  };

  const copyLink = async () => {
    let succeeded = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        succeeded = true;
      }
    } catch {
      succeeded = false;
    }

    if (!succeeded) {
      // Legacy fallback for older browsers / non-secure contexts.
      try {
        const textarea = document.createElement("textarea");
        textarea.value = url;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        succeeded = document.execCommand("copy");
        document.body.removeChild(textarea);
      } catch {
        succeeded = false;
      }
    }

    if (succeeded) {
      setCopied(true);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      data-print-hidden
      className={cn("flex flex-wrap items-center gap-2", className)}
    >
      <p className="self-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>

      <button
        type="button"
        onClick={copyLink}
        aria-live="polite"
        className={cn(
          "inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          copied
            ? "border-pine bg-pine/10 text-pine"
            : "border-border bg-card hover:border-pine hover:bg-pine hover:text-primary-foreground",
        )}
      >
        {copied ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Link2 className="h-4 w-4" aria-hidden="true" />
        )}
        {copied ? "Link copied" : "Copy link"}
      </button>

      {canNativeShare && (
        <button
          type="button"
          onClick={nativeShare}
          aria-label={`Open the share sheet for ${title}`}
          className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-semibold transition-colors hover:border-terracotta hover:bg-terracotta hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Share2 className="h-4 w-4" aria-hidden="true" />
          Share
        </button>
      )}

      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${title}, ${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className={ICON_LINK_CLASS}
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className={ICON_LINK_CLASS}
      >
        <Facebook className="h-4 w-4" aria-hidden="true" />
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X (Twitter)"
        className={ICON_LINK_CLASS}
      >
        <Twitter className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}
