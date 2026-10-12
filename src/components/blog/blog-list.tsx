import { BlogCard } from "@/components/cards/blog-card";
import type { BlogPost } from "@/types";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
      {posts.map((post, index) => (
        <BlogCard key={post.slug} post={post} priority={index < 3} />
      ))}
    </div>
  );
}
