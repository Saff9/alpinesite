import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  showValue?: boolean;
  reviewsCount?: number;
}

const dims = { sm: "h-3.5 w-3.5", md: "h-4 w-4", lg: "h-5 w-5" } as const;

export function RatingStars({
  rating,
  size = "md",
  className,
  showValue = false,
  reviewsCount,
}: RatingStarsProps) {
  const valid = Math.min(Math.max(rating, 0), 5);
  const full = Math.floor(valid);
  const fraction = valid - full;
  const half = fraction >= 0.25 && fraction < 0.75;
  const roundedUp = fraction >= 0.75;

  const label = `Rated ${valid.toFixed(1)} out of 5${
    reviewsCount ? ` from ${reviewsCount.toLocaleString("en-IN")} reviews` : ""
  }`;

  return (
    <span
      className={cn("inline-flex items-center gap-1.5", className)}
      role="img"
      aria-label={label}
    >
      <span className="inline-flex items-center gap-0.5 text-amber-500" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => {
          if (i < full || (roundedUp && i === full))
            return <Star key={i} className={cn(dims[size], "fill-current")} />;
          if (i === full && half)
            return (
              <span key={i} className="relative inline-flex">
                <Star className={cn(dims[size], "text-muted-foreground/30")} />
                <StarHalf className={cn(dims[size], "absolute inset-0 fill-current")} />
              </span>
            );
          return <Star key={i} className={cn(dims[size], "text-muted-foreground/30")} />;
        })}
      </span>
      {showValue && (
        <span className="text-sm font-semibold text-foreground">
          {valid.toFixed(1)}
          {reviewsCount !== undefined && (
            <span className="ml-1 font-normal text-muted-foreground">
              ({reviewsCount.toLocaleString("en-IN")})
            </span>
          )}
        </span>
      )}
      <span className="sr-only">{label}</span>
    </span>
  );
}
