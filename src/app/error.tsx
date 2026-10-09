"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // If it's a chunk loading error caused by Turbopack HMR skew or cached chunk, automatically reload
    if (
      error.message?.includes("Failed to load chunk") ||
      error.message?.includes("ChunkLoadError")
    ) {
      window.location.reload();
    }
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-neutral-900 sm:text-3xl">
        Something went wrong
      </h2>
      <p className="mt-3 max-w-md text-sm text-neutral-600">
        A temporary loading issue occurred. Please refresh the page to continue.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button
          onClick={() => window.location.reload()}
          className="bg-brand text-white hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider"
        >
          Refresh Page
        </Button>
        <Button
          variant="outline"
          onClick={() => reset()}
          className="font-heading text-xs font-bold uppercase tracking-wider"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
