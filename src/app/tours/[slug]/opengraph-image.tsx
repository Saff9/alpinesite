import { notFound } from "next/navigation";
import { getTourBySlug, tours } from "@/data/tours";
import { formatINR } from "@/data/site";
import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

/**
 * Per-tour Open-Graph card — trip name, duration and the from-price render
 * directly into the WhatsApp/Facebook link preview.
 */

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export default async function TourOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  return ogImageResponse({
    eyebrow: `Tour · ${tour.destinationName}`,
    title: tour.title,
    subtitle: `${tour.durationDays} days / ${tour.durationNights} nights · from ${formatINR(
      tour.price,
    )} per person`,
    chip: `${tour.durationDays}-day tour`,
  });
}
