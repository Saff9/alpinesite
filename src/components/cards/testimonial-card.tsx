import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";
import { RatingStars } from "@/components/shared/rating-stars";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

const initials = (name: string) =>
  name
    .replace(/[()]/g, "")
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        // min-w-0: the truncating caption must never force this card (and any
        // grid it lives in) wider than its track, nowrap text otherwise
        // inflates the intrinsic min-content width on mobile.
        "flex h-full min-w-0 flex-col rounded-2xl border border-border bg-card p-6 shadow-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <RatingStars rating={testimonial.rating} size="sm" />
        <Quote className="h-5 w-5 text-terracotta/30" aria-hidden="true" />
      </div>
      <blockquote className="mt-4 flex-1 font-poppins font-normal text-sm leading-relaxed text-foreground/90">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground"
        >
          {initials(testimonial.name)}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{testimonial.name}</p>
          <p className="truncate text-xs text-muted-foreground">
            {testimonial.location} · {testimonial.tour}, {testimonial.date}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
