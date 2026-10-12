import { notFound } from "next/navigation";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { formatINR } from "@/data/site";
import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

/**
 * Per-destination Open-Graph card, destination name, tagline and the
 * from-price render directly into the WhatsApp/Facebook link preview.
 */

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export default async function DestinationOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  return ogImageResponse({
    eyebrow: `Destination · ${destination.country}`,
    title: destination.name,
    subtitle: destination.tagline,
    chip: `From ${formatINR(destination.startingPrice)}`,
  });
}
