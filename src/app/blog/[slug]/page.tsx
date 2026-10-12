import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { ShareButtons } from "@/components/blog/share-buttons";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { getDestinationBySlug } from "@/data/destinations";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Travel Guide" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: post.tags,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author.name],
      // og:image comes from the per-slug opengraph-image.tsx file convention.
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

/** Formats "2025-09-14" as "14 Sep 2025", deterministic across runtimes. */
const formatPublishedDate = (iso: string) => {
  const date = new Date(iso);
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const primaryDestination = getDestinationBySlug(post.relatedDestinationSlugs[0]);
  const destinationName = primaryDestination?.name ?? "the Himalayas";
  const publishedDate = formatPublishedDate(post.publishedAt);

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hi Alpine Club India! I just read your guide on ${destinationName} and want help planning a trip.`,
  )}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [`${site.url}${post.coverImage}`],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Travel Guides", item: `${site.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title },
    ],
  };

  return (
    <>
      <ReadingProgress />
      <PageHeader
        title={post.title}
        image={post.coverImage}
        imageAlt={post.coverImageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Travel Guides", href: "/blog" },
          { label: post.category },
          { label: post.title },
        ]}
      />

      {/* Article */}
      <section className="py-12 sm:py-16" aria-label={post.title}>
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <article className="mx-auto max-w-3xl">
            {/* Article header, the h1 lives in the PageHeader above */}
            <header className="border-b border-border pb-6">
              <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-pine">
                {post.category}
              </span>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
                <time dateTime={post.publishedAt}>{publishedDate}</time>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.readTime} min read
                </span>
              </div>
              {post.tags.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
                  {post.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      #{tag}
                    </li>
                  ))}
                </ul>
              )}

              {/* Share row */}
              <div className="mt-6">
                <ShareButtons title={post.title} path={`/blog/${post.slug}`} />
              </div>
            </header>

            {/* Body */}
            <div className="max-w-none">
              {post.sections.map((section, index) => (
                <section
                  key={section.heading ?? `section-${index}`}
                  className={cn(index > 0 && !section.heading && "mt-10")}
                >
                  {section.heading && (
                    <h2 className="mt-10 font-heading text-xl font-semibold sm:text-2xl">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs?.map((paragraph, pIndex) => (
                    <p
                      key={`p-${pIndex}`}
                      className={cn(
                        "mt-4 leading-relaxed text-foreground/85",
                        // Editorial drop cap on the article's very first paragraph.
                        index === 0 &&
                          pIndex === 0 &&
                          "first-letter:mr-2.5 first-letter:mt-1 first-letter:float-left first-letter:font-heading first-letter:text-[3.4rem] first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-terracotta",
                      )}
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-5 space-y-2.5">
                      {section.list.map((item, lIndex) => (
                        <li
                          key={`li-${lIndex}`}
                          className="flex gap-2.5 leading-relaxed text-foreground/85"
                        >
                          <CheckCircle2
                            className="mt-1 h-4 w-4 shrink-0 text-terracotta"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* CTA card */}
            <aside className="mt-12 rounded-2xl bg-sand p-6 sm:p-8" aria-label="Plan a trip">
              <h2 className="font-heading text-xl font-semibold sm:text-2xl">
                Planning a trip to {destinationName}?
              </h2>
              <p className="mt-3 leading-relaxed text-foreground/80">
                Our team runs private, customisable trips across{" "}
                {destinationName} and every destination in this guide, planned
                in Gulmarg, priced honestly, and supported from landing to
                take-off.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-terracotta text-white hover:bg-terracotta-deep"
                >
                  <Link href="/tours">
                    See our tours
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-pine/30 text-pine hover:bg-secondary hover:text-pine"
                >
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp us
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </Button>
              </div>
            </aside>
          </article>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
