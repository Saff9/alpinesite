"use client";

import { useSyncExternalStore } from "react";

/**
 * Slim terracotta progress bar pinned to the very top of the viewport while
 * reading a travel guide. Scroll is read via useSyncExternalStore (no
 * state churn); the scaleX transform keeps it off the layout thread.
 */
export function ReadingProgress() {
  const progress = useSyncExternalStore(
    subscribeScroll,
    getScrollProgress,
    () => 0,
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]"
    >
      <div
        className="h-full origin-left bg-terracotta motion-reduce:transition-none"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

function subscribeScroll(onChange: () => void): () => void {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange, { passive: true });
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

/** 0 → 1 as the article scrolls out of view. Numbers are value-stable. */
function getScrollProgress(): number {
  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - window.innerHeight;
  if (scrollable <= 0) return 0;
  const raw = window.scrollY / scrollable;
  return Math.min(1, Math.max(0, raw));
}
