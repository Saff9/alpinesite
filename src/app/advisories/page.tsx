import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CloudSun, Compass, ShieldAlert } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { advisories } from "@/data/advisories";

export const metadata: Metadata = {
  title: "Tour Guides & Advisories",
  description:
    "Travel advisories, live mountain weather updates, and seasonal guides on when to visit Gulmarg, Kashmir, and Ladakh.",
  alternates: { canonical: "/advisories" },
};

const categories = [
  {
    title: "Travel Advisories",
    icon: ShieldAlert,
    description: "Altitude safety, Inner Line Permits, and seasonal highway updates.",
  },
  {
    title: "Weather Update",
    icon: CloudSun,
    description: "Current snow, wind, and temperature snapshots across Gulmarg, Kashmir, and Ladakh.",
  },
  {
    title: "When to Visit Gulmarg",
    icon: Compass,
    description: "Season-by-season breakdown for powder skiing, summer meadows, and autumn views.",
  },
] as const;

export default function AdvisoriesIndexPage() {
  return (
    <>
      <PageHeader
        title="Tour Guides & Advisories"
        subtitle="Concise mountain advisories, weather snapshots, and seasonal timing guides from our Gulmarg operations desk."
        image="/images/ski/apharwat-peaks.jpg"
        imageAlt="Snowy peaks of Apharwat above Gulmarg"
      />

      <section className="py-14 sm:py-20" aria-label="Tour guides and advisories">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {categories.map((cat) => {
              const items = advisories.filter((a) => a.category === cat.title);
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h2 className="font-heading text-lg font-extrabold uppercase text-foreground">
                      {cat.title}
                    </h2>
                  </div>
                  <p className="mt-3 font-poppins font-normal text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {items.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/advisories/${item.slug}`}
                          className="group flex items-center justify-between rounded-2xl border border-border bg-sand/50 px-4 py-3.5 text-sm font-bold text-foreground transition-all hover:border-brand hover:bg-brand/5 hover:text-brand"
                        >
                          <span>{item.title}</span>
                          <ArrowRight
                            className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
