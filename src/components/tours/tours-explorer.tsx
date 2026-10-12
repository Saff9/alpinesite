import { TourCard } from "@/components/cards/tour-card";
import type { Tour } from "@/types";

interface ToursExplorerProps {
  tours: Tour[];
}

export function ToursExplorer({ tours }: ToursExplorerProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tours.map((tour, i) => (
        <TourCard key={tour.slug} tour={tour} priority={i < 3} />
      ))}
    </div>
  );
}
