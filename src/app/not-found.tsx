import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-5 py-24 text-center sm:px-6 sm:py-32">
      <span
        aria-hidden="true"
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-brand"
      >
        <Compass className="h-8 w-8" />
      </span>
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-brand">
        404, off the map
      </p>
      <h1 className="mt-3 font-heading text-3xl font-extrabold uppercase sm:text-4xl">
        This trail doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for moved, or never was. Even our best guides
        take a wrong turn in the fog sometimes, let&apos;s get you back to
        somewhere beautiful.
      </p>
      <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:w-auto">
        <Button asChild className="w-[80%] max-w-sm rounded-xl border border-brand bg-brand px-6 py-3.5 text-white hover:bg-brand-deep font-heading text-xs font-bold uppercase tracking-wider h-12 sm:w-auto">
          <Link href="/">
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-[80%] max-w-sm rounded-xl border-neutral-300 text-black hover:border-brand hover:text-brand font-heading text-xs font-bold uppercase tracking-wider h-12 sm:w-auto">
          <Link href="/destinations">Explore destinations</Link>
        </Button>
      </div>
    </section>
  );
}
