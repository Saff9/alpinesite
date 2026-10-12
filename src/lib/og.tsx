import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRANDED OPEN-GRAPH CARDS, shared design system for social link previews.
 * ─────────────────────────────────────────────────────────────────────────────
 * Every route that matters (home, tours, destinations, blog posts) renders a
 * 1200×630 card via Next.js file conventions (`opengraph-image.tsx`). This
 * module is the single place to restyle ALL of them.
 *
 * Why cards instead of cover photos? Links to this site are shared mostly in
 * WhatsApp groups, a card that shows the trip name, duration and price sells
 * the click far better than an unlabelled photo.
 *
 * Satori notes: flexbox only, inline styles only, no CSS variables, the hex
 * values below mirror the oklch tokens in globals.css (pine/terracotta/sand).
 * DejaVu Sans (bundled in src/assets/fonts, incl. the ₹ glyph, which the
 * default Noto Sans lacks) is loaded once and cached for every card.
 */

/** Load both DejaVu weights once, module-level cache shared by all cards. */
const fontsPromise = Promise.all([
  readFile(path.join(process.cwd(), "src/assets/fonts/DejaVuSans.ttf")),
  readFile(path.join(process.cwd(), "src/assets/fonts/DejaVuSans-Bold.ttf")),
]).then(([regular, bold]) => [
  { name: "DejaVu Sans", data: regular, weight: 400 as const, style: "normal" as const },
  { name: "DejaVu Sans", data: bold, weight: 700 as const, style: "normal" as const },
]);

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

/** Hex twins of the CSS palette tokens (see globals.css). */
export const OG_COLORS = {
  sand: "#f8f9fa",
  pine: "#111827",
  pineDeep: "#0a0a0a",
  pineInk: "#000000",
  terracotta: "#2b6880",
  terracottaDeep: "#225366",
} as const;

const DOMAIN = site.url.replace(/^https?:\/\//, "");

/** Long tour titles must still fit, step the type down as text grows. */
function titleSizeFor(title: string): number {
  if (title.length <= 26) return 74;
  if (title.length <= 38) return 62;
  if (title.length <= 52) return 52;
  return 44;
}

export interface OgCardProps {
  /** Small terracotta kicker above the title, e.g. "TOUR · GULMARG, KASHMIR". */
  eyebrow: string;
  title: string;
  /** Supporting line under the title, price, tagline or byline. */
  subtitle: string;
  /** Pill at the top-right, "5-DAY TOUR", "7 MIN READ", "SINCE 2012". */
  chip?: string;
}

/**
 * The card layout: brand row (logo mark + wordmark) → eyebrow/title/subtitle →
 * domain footer → layered mountain silhouettes along the bottom edge.
 */
export function OgCard({ eyebrow, title, subtitle, chip }: OgCardProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "56px 64px 44px",
        backgroundImage: `linear-gradient(155deg, ${OG_COLORS.pine} 0%, ${OG_COLORS.pineDeep} 52%, ${OG_COLORS.pineInk} 100%)`,
        color: OG_COLORS.sand,
        fontFamily: "sans-serif",
      }}
    >
      {/* Brand row */}
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 58,
            height: 58,
            borderRadius: 16,
            backgroundColor: OG_COLORS.terracotta,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Mountain glyph, mirrors the site logo mark */}
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 19 L9.5 7 L13 13.5 L15.5 9.5 L21 19 Z"
              fill={OG_COLORS.sand}
            />
            <path
              d="M9.5 7 L11.6 10.8 L10 12.2 L8.6 10.9 Z"
              fill={OG_COLORS.terracotta}
            />
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div
            style={{
              fontSize: 25,
              fontWeight: 700,
              letterSpacing: 5,
              color: OG_COLORS.sand,
            }}
          >
            {site.name.toUpperCase()}
          </div>
          <div
            style={{
              fontSize: 15,
              letterSpacing: 4,
              color: "rgba(244,240,231,0.62)",
            }}
          >
            {site.logoTagline.toUpperCase()}
          </div>
        </div>
        {chip ? (
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              padding: "10px 22px",
              borderRadius: 999,
              border: `2px solid rgba(195,107,66,0.55)`,
              backgroundColor: "rgba(195,107,66,0.14)",
              fontSize: 19,
              fontWeight: 700,
              letterSpacing: 3,
              color: OG_COLORS.terracotta,
            }}
          >
            {chip.toUpperCase()}
          </div>
        ) : null}
      </div>

      {/* Main block, padded clear of the mountain silhouettes below */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingBottom: 90,
          maxWidth: 960,
        }}
      >
        <div
          style={{
            fontSize: 21,
            fontWeight: 700,
            letterSpacing: 5,
            color: OG_COLORS.terracotta,
          }}
        >
          {eyebrow.toUpperCase()}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: titleSizeFor(title),
            fontWeight: 700,
            lineHeight: 1.1,
            color: OG_COLORS.sand,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 27,
            lineHeight: 1.35,
            color: "rgba(244,240,231,0.78)",
          }}
        >
          {subtitle}
        </div>
      </div>

      {/* Domain footer */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 44,
            height: 3,
            borderRadius: 2,
            backgroundColor: OG_COLORS.terracotta,
          }}
        />
        <div
          style={{
            fontSize: 20,
            letterSpacing: 3,
            color: "rgba(244,240,231,0.66)",
          }}
        >
          {DOMAIN}
        </div>
      </div>

      {/* Mountain silhouettes, dawn glow behind, two ridge layers in front */}
      <svg
        width={1200}
        height={220}
        viewBox="0 0 1200 220"
        style={{ position: "absolute", bottom: 0, left: 0 }}
      >
        {/* Low sun glow on the horizon */}
        <circle cx={930} cy={185} r={105} fill="rgba(195,107,66,0.20)" />
        <circle cx={930} cy={185} r={58} fill="rgba(195,107,66,0.28)" />
        {/* Back ridge, catches the light */}
        <polygon
          points="0,220 0,150 130,74 235,132 375,35 505,130 640,58 760,134 905,63 1035,132 1200,84 1200,220"
          fill={OG_COLORS.pine}
        />
        {/* Front ridge, darkest, anchors the composition */}
        <polygon
          points="0,220 0,172 190,103 330,160 480,91 640,163 800,106 960,165 1080,123 1200,158 1200,220"
          fill={OG_COLORS.pineInk}
        />
        {/* Snow caps on the back ridge */}
        <polygon points="348,52 375,35 402,52 388,57 375,50 362,57" fill="rgba(244,240,231,0.85)" />
        <polygon points="614,76 640,58 666,76 652,81 640,74 628,81" fill="rgba(244,240,231,0.85)" />
        <polygon points="879,81 905,63 931,81 917,86 905,79 893,86" fill="rgba(244,240,231,0.85)" />
      </svg>
    </div>
  );
}

/** Convenience wrapper, every route file calls this with its OgCardProps. */
export async function ogImageResponse(props: OgCardProps): Promise<ImageResponse> {
  const fonts = await fontsPromise;
  return new ImageResponse(<OgCard {...props} />, {
    ...OG_SIZE,
    fonts,
  });
}
