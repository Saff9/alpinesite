import { notFound } from "next/navigation";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

/**
 * Per-post Open-Graph card — guide title, author and reading time render
 * directly into the WhatsApp/Facebook link preview.
 */

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return ogImageResponse({
    eyebrow: `Travel guide · ${post.category}`,
    title: post.title,
    subtitle: `By ${post.author.name}, ${post.author.role}.`,
    chip: `${post.readTime} min read`,
  });
}
