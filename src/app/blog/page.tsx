import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { BlogList } from "@/components/blog/blog-list";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, mountain field notes, and insights from the Alpine Club India team across Gulmarg, Kashmir, and Ladakh.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Field notes and mountain stories from the people who drive and ski these roads."
        image="/images/blog/himalaya-packing-list.jpg"
        imageAlt="Backpacks and boots packed and ready for a Himalayan trek"
      />

      <section className="py-16 sm:py-24" aria-labelledby="all-guides">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 id="all-guides" className="sr-only">
            All blog posts
          </h2>
          <BlogList posts={sortedPosts} />
        </div>
      </section>
    </>
  );
}
