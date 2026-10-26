export const site = {
  name: "Alpine Club India",
  legalName: "Alpine Club India",
  shortName: "Alpine Club",
  logo: "/Alpine_logo_20261015_181802_0000.svg",
  tagline: "Mountain Guides & Himalayan Tours",
  description:
    "Handcrafted ski expeditions in Gulmarg, classic Kashmir journeys, and high-altitude Himalayan treks, guided by local mountain experts who call these peaks home.",
  url: "https://www.alpineclubindia.com",
  phone: "+91 8082111967",
  phoneHref: "tel:+918082111967",
  email: "info@alpineclubindia.com",
  whatsapp: "918082111967",
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
    instagram: "#",
    facebook: "#",
    youtube: "#",
    twitter: "#",
  },
  googleReviewsUrl: "https://share.google/64IbJkTNczkNhRyuT",
  stats: {
    yearsExperience: 13,
    travellersServed: "3,500+",
    destinations: 3,
    rating: 5.0,
    reviewsCount: 10,
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
  title?: string;
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
 * 1. Deals & Packages, 2. Gulmarg Ski Resort, 3. Destinations, 4. About Us, 5. Contact Us.
 * (Activities and More are moved exclusively to the Footer as requested)
 */
export const mainNav: NavItem[] = [
  {
    label: "Deals & Packages",
    href: "/packages",
    dropdown: [
      {
        title: "Ski Packages",
        items: [
          {
            title: "10 Days Guided Ski",
            href: "/packages/fully-guided-10-days-ski-package",
          },
          {
            title: "1 Week Guided Ski",
            href: "/packages/fully-guided-1-week-ski-package",
          },
          {
            title: "2 Weeks Guided Ski",
            href: "/packages/2-weeks-fully-guided-ski-package",
          },
        ],
      },
      {
        title: "Summer Packages",
        items: [
          {
            title: "Rumtse to Tso Moriri",
            href: "/packages/rumtse-to-tso-moriri-trek",
          },
          {
            title: "Chadar Frozen River",
            href: "/packages/chadar-frozen-river-trek",
          },
          {
            title: "Markha Valley Trek",
            href: "/packages/markha-valley-trek",
          },
          {
            title: "Lamayuru to Zanskar",
            href: "/packages/lamayuru-to-zanskar-trek",
          },
          {
            title: "Warwan Valley Trek",
            href: "/packages/warwan-valley-trek",
          },
          {
            title: "Gurez Valley Trek",
            href: "/packages/gurez-valley-trek",
          },
          {
            title: "Mount Harmukh Trek",
            href: "/packages/mount-harmukh-trek",
          },
        ],
      },
      {
        title: "Trekking",
        items: [
          {
            title: "Kashmir Great Lakes",
            href: "/packages/kashmir-great-lakes-trek",
          },
          {
            title: "Tosamaidan Pir Panjal",
            href: "/packages/tosamaidan-pir-panjal-trek",
          },
          {
            title: "Goecha La Trek",
            href: "/packages/goecha-la-trek",
          },
          {
            title: "Dzongri Trek",
            href: "/packages/dzongri-trek",
          },
        ],
      },
    ],
  },
  {
    label: "Gulmarg Ski Resort",
    href: "/gulmarg-ski-resort",
    dropdown: [
      {
        items: [
          { title: "About Gulmarg", href: "/gulmarg-ski-resort/about-gulmarg" },
          { title: "Backcountry Skiing", href: "/gulmarg-ski-resort/backcountry-skiing" },
          { title: "Ski Touring", href: "/gulmarg-ski-resort/ski-touring" },
          { title: "Ski Classes", href: "/gulmarg-ski-resort/ski-classes" },
        ],
      },
    ],
  },
  {
    label: "Destinations",
    href: "/destinations",
    dropdown: [
      {
        items: [
          { title: "Kashmir", href: "/destinations/kashmir" },
          { title: "Ladakh", href: "/destinations/ladakh" },
          { title: "Sikkim", href: "/destinations/sikkim" },
        ],
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

/**
 * Footer Quick Links — Main navigation root links that are missing from the top navbar,
 * now including Packages and Destinations.
 */
export const quickLinksNav = [
  { title: "About Us", href: "/about" },
  { title: "Deals & Packages", href: "/packages" },
  { title: "Destinations", href: "/destinations" },
  { title: "Our Ski Guides", href: "/ski-guides" },
  { title: "Last Minute Trip", href: "/last-minute-trip" },
  { title: "Our Promise", href: "/our-promise" },
  { title: "Contact Us", href: "/contact" },
];

/**
 * Footer Ski & Himalayas column links with Gulmarg quick navigation.
 */
export const skiAndHimalayasNav = [
  { title: "Ski Resorts in India", href: "/ski-resorts-in-india" },
  { title: "Himalayas of India", href: "/himalayas-of-india" },
  { title: "Gulmarg Ski Resort", href: "/gulmarg-ski-resort" },
  { title: "About Gulmarg", href: "/gulmarg-ski-resort/about-gulmarg" },
  { title: "Backcountry Skiing", href: "/gulmarg-ski-resort/backcountry-skiing" },
  { title: "Ski Touring", href: "/gulmarg-ski-resort/ski-touring" },
  { title: "Ski Classes", href: "/gulmarg-ski-resort/ski-classes" },
];

/**
 * Footer Activities navigation links.
 */
export const activitiesNav = [
  { title: "High-Altitude Trekking", href: "/activities/trekking" },
  { title: "Himalayan Day Hikes", href: "/activities/hiking" },
  { title: "Winter Snow Hiking", href: "/activities/winter-hiking" },
  { title: "Himalayan Expeditions", href: "/activities/expeditions" },
];

export const formatINR = (value: number): string =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
