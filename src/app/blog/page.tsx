import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { BlogList } from "@/components/blog/blog-list";
import { blogPosts, blogCategories } from "@/data/blog";

export const metadata: Metadata = {
  title: "Travel Guides & Stories",
  description:
    "Honest travel guides from the Alpine Club India team — seasons, permits, packing lists, ski weeks and food crawls, written by the people who drive and ski these mountains.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );

  return (
    <>
      <PageHeader
        title="Travel guides, written by the people who drive these roads"
        subtitle="Field notes from our team — honest guides on seasons, packing, permits and the places that deserve more ink. No SEO filler, we promise."
        image="/images/blog/himalaya-packing-list.jpg"
        imageAlt="Backpacks and boots packed and ready for a Himalayan trek"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Travel Guides" },
        ]}
      />

      <section className="py-12 sm:py-16" aria-labelledby="all-guides">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <h2 id="all-guides" className="sr-only">
            All travel guides
          </h2>
          <BlogList posts={sortedPosts} categories={blogCategories} />
        </div>
      </section>
    </>
  );
}
