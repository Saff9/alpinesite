export type TravelStyle =
  | "adventure"
  | "honeymoon"
  | "family"
  | "spiritual"
  | "leisure"
  | "ski"
  | "trekking"
  | "bike"
  | "beach"
  | "culture"
  | "wildlife";

export interface GalleryImage {
  src: string;
  alt: string;
  /** Editorial caption — surfaced by the destination photo essay. Optional. */
  caption?: string;
}

/** Editorial photo essay attached to a destination page. Scenes are the
 *  destination's own gallery images that carry a `caption`. */
export interface DestinationStory {
  /** Serif display headline, e.g. "First cabin up Apharwat". */
  title: string;
  /** 1–2 sentences that set the scene. */
  intro: string;
  /** Closing line — ties the essay to the booking CTA. */
  outro: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals?: string;
  stay?: string;
}

export interface DestinationSeason {
  months: string; // e.g. "March – June"
  label: string; // e.g. "Spring & Summer"
  verdict: "Excellent" | "Good" | "Shoulder" | "Quiet";
  summary: string; // 1–2 sentences, specific and honest
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  region?: string;
  tagline: string;
  shortDescription: string;
  description: string[];
  image: string;
  imageAlt: string;
  gallery: GalleryImage[];
  startingPrice: number;
  bestTime: string;
  idealDuration: string;
  travelStyles: TravelStyle[];
  highlights: string[];
  popular: boolean;
  seasons?: DestinationSeason[];
  /** 12 entries, index 0 = January. 0 = closed/avoid, 1 = possible, 2 = good, 3 = prime. */
  monthScores?: number[];
  /** Photo essay — when present, the destination page renders the gallery as
   *  an editorial story instead of a plain grid. */
  story?: DestinationStory;
}

export interface Tour {
  slug: string;
  title: string;
  destinationSlug: string;
  destinationName: string;
  durationDays: number;
  durationNights: number;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  shortDescription: string;
  overview: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  coverImage: string;
  coverImageAlt: string;
  gallery: GalleryImage[];
  travelStyles: TravelStyle[];
  groupSize: string;
  featured: boolean;
  badge?: string;
  faqs: FAQ[];
}

export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  sections: BlogSection[];
  coverImage: string;
  coverImageAlt: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  relatedDestinationSlugs: string[];
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  tour: string;
  date: string;
}

export interface TravelStyleInfo {
  id: TravelStyle;
  label: string;
  description: string;
  icon: string;
}
