export const site = {
  name: "Alpine Club India",
  legalName: "Alpine Club India",
  shortName: "Alpine Club",
  tagline: "Mountain Guides & Himalayan Tours",
  description:
    "Handcrafted ski expeditions in Gulmarg, classic Kashmir journeys, and high-altitude Himalayan treks, guided by local mountain experts who call these peaks home.",
  url: "https://alpineclubindia.com",
  phone: "+91 9682163030",
  phoneHref: "tel:+919682163030",
  email: "imtiyazahmadkumar36@gmail.com",
  whatsapp: "919682163030",
  whatsappMessage:
    "Hello Alpine Club India! I'd like to plan a trip with your mountain guides.",
  established: 2012,
  address: {
    street: "Gulmarg Road",
    locality: "Gulmarg, Forest Block",
    region: "Jammu and Kashmir",
    postalCode: "193403",
    country: "IN",
    full: "Gulmarg Road, Gulmarg, Forest Block, Jammu and Kashmir 193403",
  },
  geo: { lat: 34.0484, lng: 74.3805 },
  hours: "Mon – Sun · 8:00 AM – 7:00 PM IST (ski season: dawn patrol)",
  socials: {
    instagram: "https://instagram.com/alpineclubindia",
    facebook: "https://facebook.com/alpineclubindia",
    youtube: "https://youtube.com/@alpineclubindia",
    twitter: "https://x.com/alpineclubindia",
  },
  googleReviewsUrl: "https://www.google.com/search?q=gulmarg+guids+agency",
  stats: {
    yearsExperience: 13,
    travellersServed: "3,500+",
    destinations: 3,
    rating: 5.0,
    reviewsCount: 11,
  },
  /** Logo micro-copy rendered under the wordmark. */
  logoTagline: "Tours · Treks · Ski",
  /** Home hero banner (image + alt text). */
  hero: {
    image: "/images/hero/gulmarg-hero.jpg",
    alt: "Red Gulmarg Gondola cabins crossing above snowy pine forests and skiers below Apharwat peak, Gulmarg, Kashmir",
  },
  /** Image used by the TravelAgency JSON-LD schema (image/logo fields).
   *  Social-share cards are generated separately, see src/lib/og.tsx. */
  ogImage: {
    url: "/images/hero/gulmarg-hero.jpg",
    width: 2000,
    height: 2000,
    alt: "Red Gulmarg Gondola cabins crossing above snowy pine forests and skiers, Gulmarg, Kashmir",
  },
} as const;

export interface SubNavItem {
  title: string;
  href: string;
}

export interface NavSection {
  title: string;
  items: SubNavItem[];
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavSection[];
}

/**
 * Primary navigation, compact, readable, human-developer structure.
 * Clean titles only without verbose sub-info paragraphs.
 */
export const mainNav: NavItem[] = [
  {
    label: "Tours",
    href: "/tours",
    dropdown: [
      {
        title: "Powder & Ski",
        items: [
          { title: "Gulmarg Ski Adventure (6D)", href: "/tours/gulmarg-ski-adventure" },
          { title: "All Ski Packages", href: "/tours?style=ski" },
        ],
      },
      {
        title: "Himalayan Circuits",
        items: [
          { title: "Kashmir Valley Explorer (7D)", href: "/tours/kashmir-7-day-tour" },
          { title: "Kashmir Honeymoon (6D)", href: "/tours/kashmir-honeymoon-6-day" },
          { title: "Ladakh Highlights (8D)", href: "/tours/ladakh-8-day-tour" },
          { title: "Ladakh Bike Expedition (9D)", href: "/tours/ladakh-bike-expedition" },
        ],
      },
    ],
  },
  {
    label: "Destinations",
    href: "/destinations",
    dropdown: [
      {
        title: "Kashmir & Gulmarg",
        items: [
          { title: "Gulmarg", href: "/destinations/gulmarg" },
          { title: "Kashmir Valley", href: "/destinations/kashmir" },
        ],
      },
      {
        title: "High Passes",
        items: [
          { title: "Ladakh & Leh", href: "/destinations/ladakh" },
          { title: "Pangong & Nubra", href: "/tours/ladakh-8-day-tour" },
        ],
      },
    ],
  },
  {
    label: "Tour Guides & Advisories",
    href: "/advisories",
    dropdown: [
      {
        title: "Travel Advisories",
        items: [
          { title: "High Altitude & Acclimatisation", href: "/advisories/high-altitude-safety" },
          { title: "Permits & Travel Guidelines", href: "/advisories/permits-and-guidelines" },
          { title: "Mountain Road & Pass Advisory", href: "/advisories/mountain-road-advisory" },
        ],
      },
      {
        title: "Weather Update",
        items: [
          { title: "Gulmarg Snow & Wind Forecast", href: "/advisories/gulmarg-snow-forecast" },
          { title: "Kashmir Valley Weather Update", href: "/advisories/kashmir-valley-weather" },
          { title: "Ladakh High Pass Weather", href: "/advisories/ladakh-pass-weather" },
        ],
      },
      {
        title: "When to Visit Gulmarg",
        items: [
          { title: "Winter Powder Season (Dec to Mar)", href: "/advisories/gulmarg-winter-powder" },
          { title: "Spring & Summer Meadows (Apr to Aug)", href: "/advisories/gulmarg-spring-summer" },
          { title: "Autumn Chinar Season (Sep to Nov)", href: "/advisories/gulmarg-autumn-gold" },
        ],
      },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const formatINR = (value: number): string =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
