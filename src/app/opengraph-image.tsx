import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { site } from "@/data/site";

/**
 * Site-wide Open-Graph card (1200×630) — applies to every page that doesn't
 * define its own (home, listing pages, about, contact…). Tours, destinations
 * and blog posts override it with their own per-slug cards.
 */

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = `${site.name} — ${site.tagline}`;

export default async function OpengraphImage() {
  return ogImageResponse({
    eyebrow: `Gulmarg · ${site.address.region}`,
    title: site.name,
    subtitle: `${site.tagline} — since ${site.established}.`,
    chip: `Since ${site.established}`,
  });
}
