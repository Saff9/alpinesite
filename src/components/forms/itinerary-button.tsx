"use client";

import type { ReactNode } from "react";
import {
  openItineraryModal,
  type DestinationOption,
  type ActivityOption,
} from "@/data/itinerary-context";

interface ItineraryButtonProps {
  children: ReactNode;
  className?: string;
  destination?: DestinationOption;
  activity?: ActivityOption;
  title?: string;
  packageSlug?: string;
  onClick?: () => void;
}

export function ItineraryButton({
  children,
  className,
  destination,
  activity,
  title,
  packageSlug,
  onClick,
}: ItineraryButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        openItineraryModal({ destination, activity, title, packageSlug });
      }}
    >
      {children}
    </button>
  );
}
