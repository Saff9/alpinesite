import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { destinations } from "@/data/destinations";
import { packagesData } from "@/data/packages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/packages`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${site.url}/gulmarg-ski-resort`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${site.url}/ski-resorts-in-india`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/himalayas-of-india`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/destinations`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/activities`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/activities/trekking`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${site.url}/activities/hiking`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${site.url}/activities/winter-hiking`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${site.url}/activities/expeditions`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${site.url}/gulmarg-ski-resort/about-gulmarg`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${site.url}/gulmarg-ski-resort/backcountry-skiing`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${site.url}/gulmarg-ski-resort/ski-touring`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${site.url}/gulmarg-ski-resort/ski-classes`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${site.url}/ski-guides`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${site.url}/last-minute-trip`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${site.url}/our-promise`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/privacy-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/terms-and-conditions`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  const destinationPages: MetadataRoute.Sitemap = destinations.map((d) => ({
    url: `${site.url}/destinations/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: d.popular ? 0.8 : 0.7,
  }));

  const packagePages: MetadataRoute.Sitemap = packagesData.map((p) => ({
    url: `${site.url}/packages/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticPages, ...destinationPages, ...packagePages];
}
