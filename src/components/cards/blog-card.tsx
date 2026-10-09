import Image from "next/image";
import Link from "next/link";
import { Clock, CalendarDays } from "lucide-react";
import type { BlogPost } from "@/types";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  priority?: boolean;
}

export function BlogCard({ post, className, priority = false }: BlogCardProps) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pine/40 hover:shadow-lg focus-within:ring-2 focus-within:ring-inset focus-within:ring-terracotta",
        className,
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[16/10] overflow-hidden"
        aria-label={`Read: ${post.title}`}
      >
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-md bg-neutral-900/90 backdrop-blur-xs px-2.5 py-1 font-heading text-[0.68rem] font-bold uppercase tracking-wider text-white shadow-xs">
          {post.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-base font-extrabold uppercase leading-snug text-black">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-brand focus-visible:underline focus-visible:decoration-brand focus-visible:decoration-2 focus-visible:underline-offset-4"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-600">
          {post.excerpt}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">{post.author.name}</span>
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {post.readTime} min read
          </span>
        </div>
      </div>
    </article>
  );
}
