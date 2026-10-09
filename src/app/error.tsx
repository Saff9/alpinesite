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
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-16 text-center">
      <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-neutral-900 sm:text-3xl">
        Something went wrong
      </h2>
      <p className="mt-3 max-w-md text-sm text-neutral-600">
        A temporary loading issue occurred. Please refresh the page to continue.
      </p>
      <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:w-auto">
        <Button
          onClick={() => window.location.reload()}
          className="w-[80%] max-w-sm rounded-xl border border-brand bg-brand px-6 py-3.5 text-white hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-12 sm:w-auto"
        >
          Refresh Page
        </Button>
        <Button
          variant="outline"
          onClick={() => reset()}
          className="w-[80%] max-w-sm rounded-xl border-neutral-300 text-black hover:border-brand hover:text-brand font-heading text-xs font-bold uppercase tracking-wider h-12 sm:w-auto"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
