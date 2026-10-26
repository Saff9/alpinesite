"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // If it's a chunk loading error caused by HMR or cached chunk, automatically reload
    if (
      error.message?.includes("Failed to load chunk") ||
      error.message?.includes("ChunkLoadError")
    ) {
      window.location.reload();
    }
  }, [error]);

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-neutral-50/50 py-16 sm:py-24 px-5 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        {/* Warning Icon Badge */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-500/10 text-amber-600 shadow-xs">
          <AlertTriangle className="h-10 w-10 animate-pulse" aria-hidden="true" />
        </div>

        {/* Status Pill */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3.5 py-1 text-xs font-heading font-bold uppercase tracking-wider text-amber-700">
          <span>Error 500 · Technical Blizzard</span>
        </div>

        {/* Main Title */}
        <h1 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-neutral-950">
          Something Went Wrong on This Slope
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600 font-poppins">
          Our mountain servers encountered an unexpected condition while loading this route. Don&apos;t worry, your data and booking security are safe. Try reloading or heading back to base camp.
        </p>

        {error.digest && (
          <p className="mt-2 text-xs font-mono text-neutral-400">
            Error Digest ID: {error.digest}
          </p>
        )}

        {/* Recovery Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            onClick={() => window.location.reload()}
            className="rounded-xl bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-brand-deep h-12"
          >
            <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
            Reload Page
          </Button>

          <Button
            variant="outline"
            onClick={() => reset()}
            className="rounded-xl border-neutral-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-xs hover:bg-neutral-50 h-12"
          >
            Try Again
          </Button>

          <Button
            asChild
            variant="ghost"
            className="rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-neutral-950 h-12"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" aria-hidden="true" />
              Base Camp Home
            </Link>
          </Button>
        </div>

        {/* Developer Bug Report Box */}
        <div className="mt-12 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 text-left shadow-sm">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-brand">
              <Code2 className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-neutral-950">
                Contact Website Developers to Fix
              </h2>
              <p className="text-xs text-neutral-500 font-poppins mt-0.5">
                If this crash persists, reach out directly to the engineers so we can patch the bug immediately:
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="https://imtiyazkumar.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50/70 p-3.5 transition-all duration-200 hover:border-brand hover:bg-white hover:shadow-xs"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white font-heading text-xs font-bold">
                  IK
                </span>
                <div>
                  <span className="block font-heading text-xs font-bold text-neutral-900 group-hover:text-brand transition-colors">
                    Imtiyaz Kumar
                  </span>
                  <span className="text-[11px] text-neutral-500 font-poppins">Report to Developer</span>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400 group-hover:text-brand transition-colors" />
            </a>

            <a
              href="https://owaisdar.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50/70 p-3.5 transition-all duration-200 hover:border-brand hover:bg-white hover:shadow-xs"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white font-heading text-xs font-bold">
                  OD
                </span>
                <div>
                  <span className="block font-heading text-xs font-bold text-neutral-900 group-hover:text-brand transition-colors">
                    Owais Dar
                  </span>
                  <span className="text-[11px] text-neutral-500 font-poppins">Report to Developer</span>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400 group-hover:text-brand transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}