import type { TravelStyleInfo } from "@/types";

/**
 * Travel style categories used across the site (home categories section,
 * tour filters, destination chips). Icons map to lucide-react icon names
 * used by the CategoryIcon component.
 */
export const travelStyles: TravelStyleInfo[] = [
  {
    id: "adventure",
    label: "Adventure",
    description: "High passes, road trips and adrenaline with a safety net",
    icon: "Mountain",
  },
  {
    id: "honeymoon",
    label: "Honeymoon",
    description: "Private dinners, quiet decks and room setups for two",
    icon: "Heart",
  },
  {
    id: "family",
    label: "Family",
    description: "Pace and stays that work from kids to grandparents",
    icon: "Users",
  },
  {
    id: "ski",
    label: "Ski & Snow",
    description: "Gulmarg powder weeks with certified instructors",
    icon: "Snowflake",
  },
  {
    id: "trekking",
    label: "Trekking",
    description: "Markha, Hampta and glacier day walks in good company",
    icon: "Footprints",
  },
  {
    id: "culture",
    label: "Culture",
    description: "Monasteries, forts, food trails and living traditions",
    icon: "Landmark",
  },
  {
    id: "leisure",
    label: "Leisure",
    description: "Slow mornings, houseboats and doing gloriously little",
    icon: "Coffee",
  },
  {
    id: "bike",
    label: "Bike Trips",
    description: "Enfield expeditions over the world's highest roads",
    icon: "Bike",
  },
];
