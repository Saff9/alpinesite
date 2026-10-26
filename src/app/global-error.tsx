"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Layout Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 flex items-center justify-center p-5 font-sans">
        <div className="mx-auto max-w-xl text-center bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200 shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
            <AlertTriangle className="h-8 w-8" />
          </div>

          <span className="mt-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
            Critical Root Error
          </span>

          <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold uppercase text-neutral-950">
            Application Interruption
          </h1>

          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            A critical system exception was caught at the root level. You can refresh the application or report this bug to the development team.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={() => reset()}
              className="rounded-xl bg-[#2b7a78] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#205e5c]"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset App
            </Button>
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
              className="rounded-xl border-neutral-300 px-5 py-2.5 text-xs font-bold uppercase tracking-wider"
            >
              Reload Page
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-100 text-left">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="h-4 w-4 text-[#2b7a78]" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Contact Developers to Fix
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href="https://imtiyazkumar.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-xs font-semibold text-neutral-900 hover:border-[#2b7a78]"
              >
                <span>Imtiyaz Kumar</span>
                <ExternalLink className="h-3.5 w-3.5 text-neutral-400" />
              </a>
              <a
                href="https://owaisdar.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-xs font-semibold text-neutral-900 hover:border-[#2b7a78]"
              >
                <span>Owais Dar</span>
                <ExternalLink className="h-3.5 w-3.5 text-neutral-400" />
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}