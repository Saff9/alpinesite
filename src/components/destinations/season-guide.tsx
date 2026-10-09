import type { Destination, DestinationSeason } from "@/types";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

const MONTHS = [
  { short: "Jan", letter: "J", full: "January" },
  { short: "Feb", letter: "F", full: "February" },
  { short: "Mar", letter: "M", full: "March" },
  { short: "Apr", letter: "A", full: "April" },
  { short: "May", letter: "M", full: "May" },
  { short: "Jun", letter: "J", full: "June" },
  { short: "Jul", letter: "J", full: "July" },
  { short: "Aug", letter: "A", full: "August" },
  { short: "Sep", letter: "S", full: "September" },
  { short: "Oct", letter: "O", full: "October" },
  { short: "Nov", letter: "N", full: "November" },
  { short: "Dec", letter: "D", full: "December" },
] as const;

/** Cell shading per month score (0 = closed/avoid … 3 = prime). */
const CELL_STYLES: Record<number, string> = {
  3: "bg-pine text-white",
  2: "bg-pine/15 text-pine-deep",
  1: "bg-sand-deep/60 text-muted-foreground",
  0: "bg-muted text-muted-foreground/60",
};

const SCORE_PHRASES: Record<number, string> = {
  3: "prime time",
  2: "good time",
  1: "possible, with caveats",
  0: "avoid or closed",
};

const LEGEND = [
  { label: "Prime", swatch: "bg-pine" },
  { label: "Good", swatch: "bg-pine/15" },
  { label: "Possible", swatch: "bg-sand-deep/60" },
  { label: "Avoid", swatch: "bg-muted" },
] as const;

const VERDICT_STYLES: Record<DestinationSeason["verdict"], string> = {
  Excellent: "bg-pine text-white",
  Good: "border border-pine/50 text-pine",
  Shoulder: "bg-sand-deep text-foreground",
  Quiet: "border border-border text-muted-foreground",
};

function formatMonthList(indices: number[]): string {
  const names = indices.map((i) => MONTHS[i].full);
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

interface SeasonGuideProps {
  destination: Destination;
}

export function SeasonGuide({ destination }: SeasonGuideProps) {
  const seasons = destination.seasons ?? [];
  const rawScores = destination.monthScores;
  const scores =
    rawScores && rawScores.length === 12 ? rawScores : null;

  if (seasons.length === 0 && !scores) return null;

  // Screen-reader summary: the quick takeaway before the decorative strip.
  const bestMonths = scores
    ? scores.map((s, i) => (s === 3 ? i : -1)).filter((i) => i >= 0)
    : [];
  const goodMonths = scores
    ? scores.map((s, i) => (s === 2 ? i : -1)).filter((i) => i >= 0)
    : [];
  const srSummary = bestMonths.length
    ? `Best months for ${destination.name}: ${formatMonthList(bestMonths)}.`
    : goodMonths.length
      ? `Good months for ${destination.name}: ${formatMonthList(goodMonths)}.`
      : `${destination.name} has no standout months — read the season notes below.`;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <SectionHeading
        eyebrow="When to visit"
        title={`Seasons in ${destination.name}, honestly told`}
        description="Month by month, without the brochure optimism — what each season actually delivers, and when to spend your leave."
      />

      {scores && (
        <div>
          <p className="sr-only">{srSummary}</p>
          <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            The year at a glance
          </p>
          <div className="grid grid-cols-12 gap-1 sm:gap-1.5">
            {MONTHS.map((month, i) => {
              const score = Math.max(0, Math.min(3, scores[i] ?? 0));
              return (
                <div
                  key={month.full}
                  title={`${month.full}: ${SCORE_PHRASES[score]}`}
                  className={cn(
                    "relative flex h-8 items-center justify-center rounded-lg text-[11px] font-semibold sm:h-9 sm:text-xs",
                    CELL_STYLES[score],
                  )}
                >
                  <span aria-hidden="true" className="sm:hidden">
                    {month.letter}
                  </span>
                  <span aria-hidden="true" className="hidden sm:inline">
                    {month.short}
                  </span>
                  <span className="sr-only">: {SCORE_PHRASES[score]}</span>
                  {score === 0 && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 flex items-center justify-center"
                    >
                      <span className="h-px w-4 -rotate-45 bg-muted-foreground/50" />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <ul className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
            {LEGEND.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-1.5 text-xs text-muted-foreground"
              >
                <span
                  aria-hidden="true"
                  className={cn("h-3 w-3 rounded-[4px]", item.swatch)}
                />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {seasons.length > 0 && (
        <div className="mt-8 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,17rem),1fr))]">
          {seasons.map((season) => (
            <article
              key={`${season.months}-${season.label}`}
              className="rounded-xl border border-border/70 bg-background p-5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                {season.months}
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <h3 className="text-base font-semibold">{season.label}</h3>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
                    VERDICT_STYLES[season.verdict],
                  )}
                >
                  {season.verdict}
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {season.summary}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
