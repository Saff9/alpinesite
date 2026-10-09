"use client";

import { useMemo, useState } from "react";
import { RotateCcw, Search, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlogCard } from "@/components/cards/blog-card";
import type { BlogPost } from "@/types";
import { cn } from "@/lib/utils";

interface BlogListProps {
  posts: BlogPost[];
  categories: string[];
}

export function BlogList({ posts, categories }: BlogListProps) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const trimmedQuery = query.trim().toLowerCase();

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (category !== "All" && post.category !== category) return false;
      if (!trimmedQuery) return true;
      return (
        post.title.toLowerCase().includes(trimmedQuery) ||
        post.excerpt.toLowerCase().includes(trimmedQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(trimmedQuery))
      );
    });
  }, [posts, category, trimmedQuery]);

  const chips = useMemo(
    () => [
      { label: "All", count: posts.length },
      ...categories.map((name) => ({
        label: name,
        count: posts.filter((post) => post.category === name).length,
      })),
    ],
    [posts, categories],
  );

  const reset = () => {
    setCategory("All");
    setQuery("");
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div
          className="flex gap-2 overflow-x-auto pb-1 scroll-thin sm:flex-wrap sm:overflow-visible sm:pb-0"
          role="group"
          aria-label="Filter guides by category"
        >
          {chips.map((chip) => {
            const active = chip.label === category;
            return (
              <button
                key={chip.label}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(chip.label)}
                className={cn(
                  "min-h-9 shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  active
                    ? "border-pine bg-pine text-primary-foreground"
                    : "border-border bg-card text-foreground/80 hover:border-pine/40 hover:bg-secondary hover:text-pine",
                )}
              >
                {chip.label}{" "}
                <span
                  className={cn(
                    "text-xs",
                    active
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground",
                  )}
                >
                  ({chip.count})
                </span>
              </button>
            );
          })}
        </div>
        <div className="relative w-full lg:max-w-xs">
          <label htmlFor="blog-search" className="sr-only">
            Search travel guides
          </label>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, e.g. packing"
            className="h-10 rounded-full pl-9"
          />
        </div>
      </div>

      {/* Count */}
      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        Showing{" "}
        <span className="font-semibold text-foreground">{filteredPosts.length}</span>{" "}
        of {posts.length} guides
        {category !== "All" ? ` in ${category}` : ""}
        {trimmedQuery ? ` matching "${query.trim()}"` : ""}
      </p>

      {/* Grid */}
      {filteredPosts.length > 0 ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} priority={index < 3} />
          ))}
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
          <span
            aria-hidden="true"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-pine"
          >
            <SearchX className="h-6 w-6" />
          </span>
          <h3 className="mt-5 font-heading text-lg font-semibold">
            No guides match that search
          </h3>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Try a different word, or clear the filters — our writers cover
            seasons, permits, packing lists and where-not-to-stay.
          </p>
          <Button
            type="button"
            variant="outline"
            className="mt-6 border-pine/30 text-pine hover:bg-secondary hover:text-pine"
            onClick={reset}
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Reset filters
          </Button>
        </div>
      )}
    </div>
  );
}
