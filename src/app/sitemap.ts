import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { destinations } from "@/data/destinations";
import { tours } from "@/data/tours";
import { blogPosts } from "@/data/blog";
import { advisories } from "@/data/advisories";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/destinations`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/tours`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/advisories`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const destinationPages: MetadataRoute.Sitemap = destinations.map((d) => ({
    url: `${site.url}/destinations/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: d.popular ? 0.8 : 0.7,
  }));

  const tourPages: MetadataRoute.Sitemap = tours.map((t) => ({
    url: `${site.url}/tours/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: t.featured ? 0.8 : 0.75,
  }));

  const advisoryPages: MetadataRoute.Sitemap = advisories.map((a) => ({
    url: `${site.url}/advisories/${a.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...destinationPages, ...tourPages, ...advisoryPages, ...blogPages];
}
