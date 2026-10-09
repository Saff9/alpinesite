import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
      <span
        aria-hidden="true"
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-pine"
      >
        <Compass className="h-8 w-8" />
      </span>
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
        404 — off the map
      </p>
      <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">
        This trail doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for moved, or never was. Even our best guides
        take a wrong turn in the fog sometimes — let&apos;s get you back to
        somewhere beautiful.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild className="bg-pine text-primary-foreground hover:bg-pine-deep">
          <Link href="/">
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-terracotta/40 text-terracotta hover:bg-accent hover:text-accent-foreground">
          <Link href="/tours">Browse tours instead</Link>
        </Button>
      </div>
    </section>
  );
}
