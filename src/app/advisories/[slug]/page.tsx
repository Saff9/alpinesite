import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, MessageCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { advisories, getAdvisoryBySlug } from "@/data/advisories";
import { site } from "@/data/site";

interface AdvisoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return advisories.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: AdvisoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getAdvisoryBySlug(slug);
  if (!item) return {};

  return {
    title: `${item.title} · ${item.category}`,
    description: item.summary,
    alternates: { canonical: `/advisories/${item.slug}` },
  };
}

export default async function AdvisoryDetailPage({ params }: AdvisoryPageProps) {
  const { slug } = await params;
  const item = getAdvisoryBySlug(slug);
  if (!item) notFound();

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hi Alpine Club India! I have a question regarding "${item.title}".`,
  )}`;

  const siblingItems = advisories.filter(
    (a) => a.category === item.category && a.slug !== item.slug,
  );

  return (
    <>
      <PageHeader
        title={item.title}
        subtitle={item.subtitle}
        image={item.coverImage}
        imageAlt={item.coverImageAlt}
      />

      <section className="py-14 sm:py-20" aria-labelledby="advisory-heading">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
              <span className="inline-flex items-center rounded-full bg-brand/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                {item.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                <Clock className="h-3.5 w-3.5 text-pine" aria-hidden="true" />
                {item.updatedAt}
              </span>
            </div>

            {/* Key Data Snapshot */}
            <dl className="mt-6 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
              {item.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-border bg-sand/60 p-4 text-center"
                >
                  <dt className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                    {metric.label}
                  </dt>
                  <dd className="mt-1.5 font-heading text-sm font-extrabold text-foreground sm:text-base">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Concise Overview */}
            <div className="mt-8">
              <h2 id="advisory-heading" className="font-heading text-xl font-bold text-foreground">
                Quick Summary
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground sm:text-base">
                {item.summary}
              </p>
            </div>

            {/* Key Notes */}
            <div className="mt-7">
              <h3 className="font-heading text-base font-bold uppercase tracking-wider text-foreground">
                Key Field Notes
              </h3>
              <ul className="mt-3.5 space-y-2.5">
                {item.bulletPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact Strip */}
            <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-deep"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Ask Our Mountain Desk
              </a>
              <a
                href={site.phoneHref}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-accent"
              >
                <Phone className="h-4 w-4 text-pine" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </div>

          {siblingItems.length > 0 && (
            <div className="mt-10 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                More in {item.category}
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {siblingItems.map((sibling) => (
                  <Link
                    key={sibling.slug}
                    href={`/advisories/${sibling.slug}`}
                    className="rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-bold text-foreground shadow-2xs transition-colors hover:border-brand hover:text-brand"
                  >
                    {sibling.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
