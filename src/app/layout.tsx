import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingButtons } from "@/components/layout/floating-buttons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Alpine Club India | Certified Mountain Guides, Gulmarg Skiing & Himalayan Expeditions",
    template: "%s | Alpine Club India",
  },
  description:
    "Official website of Alpine Club India. Certified mountain guides leading backcountry skiing in Gulmarg, curated Kashmir & Ladakh tours, and Himalayan trekking expeditions.",
  keywords: [
    "Alpine Club India",
    "alpineclubindia.com",
    "Gulmarg ski guides",
    "Gulmarg ski resort",
    "skiing in Gulmarg",
    "Gulmarg Gondola",
    "Kashmir tour packages",
    "Kashmir travel agency",
    "Ladakh tour",
    "Ski resorts in India",
    "Himalayas of India",
    "Tiger ski guide Gulmarg",
    "Imtiyaz Kumar",
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: { telephone: true, address: true, email: true },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Alpine Club India | Certified Mountain Guides & Himalayan Tours",
    description:
      "Official website of Alpine Club India. Handcrafted ski expeditions in Gulmarg, classic Kashmir journeys, and high-altitude Himalayan treks with local certified guides.",
    images: [
      {
        url: `${site.url}${site.ogImage.url}`,
        width: 1200,
        height: 630,
        alt: "Alpine Club India - Mountain Guides and Himalayan Expeditions in Gulmarg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpine Club India | Certified Mountain Guides & Himalayan Tours",
    description:
      "Handcrafted ski expeditions in Gulmarg, classic Kashmir journeys, and high-altitude Himalayan treks with local certified guides.",
    images: [`${site.url}${site.ogImage.url}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Google / Bing webmaster verification IDs
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "FPbZsQmUdvmjQzPFNSyT3-Z-GiLPu2o_RMH1T2fqcPo",
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon1.png", sizes: "96x96", type: "image/png" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: `${site.url}/`,
  name: "Alpine Club India",
  description: site.description,
  publisher: {
    "@id": `${site.url}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${site.url}/packages?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const siteNavigationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "Contact Us",
      description: "Direct contact with our Gulmarg mountain office and local certified guides.",
      url: `${site.url}/contact`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Deals & Packages",
      description: "Fully guided Gulmarg ski packages, Kashmir valley tours, and Himalayan trekking.",
      url: `${site.url}/packages`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Gulmarg Ski Resort",
      description: "Complete guide to Mount Apharwat backcountry powder lines, gondola phases, and ski touring.",
      url: `${site.url}/gulmarg-ski-resort`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Ski Resorts in India",
      description: "Comprehensive guide to all major ski destinations in India.",
      url: `${site.url}/ski-resorts-in-india`,
    },
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${site.url}/#organization`,
  name: site.legalName,
  description: site.description,
  url: `${site.url}/`,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}${site.ogImage.url}`,
  logo: `${site.url}/web-app-manifest-512x512.png`,
  foundingDate: String(site.established),
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "19:00",
  },
  sameAs: [
    site.googleReviewsUrl,
    site.socials.facebook,
  ].filter((url: string) => Boolean(url) && url !== "#"),
  areaServed: ["Gulmarg", "Kashmir", "Ladakh", "Himalayas"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.stats.rating,
    reviewCount: site.stats.reviewsCount,
    bestRating: 5,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Himalayan Ski & Trekking Packages",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Gulmarg Ski Packages",
        url: `${site.url}/packages`,
      },
      {
        "@type": "OfferCatalog",
        name: "Himalayan Trekking Expeditions",
        url: `${site.url}/packages`,
      },
      {
        "@type": "OfferCatalog",
        name: "Private Mountain Guiding",
        url: `${site.url}/ski-guides`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="FPbZsQmUdvmjQzPFNSyT3-Z-GiLPu2o_RMH1T2fqcPo" />
        <meta name="geo.region" content="IN-JK" />
        <meta name="geo.placename" content="Gulmarg, Jammu and Kashmir" />
        <meta name="geo.position" content="34.0484;74.3805" />
        <meta name="ICBM" content="34.0484, 74.3805" />
        <meta name="author" content="Alpine Club India" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="3 days" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Open+Sans:wght@400;600&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined') {
                  window.addEventListener('error', function(e) {
                    var msg = e && (e.message || (e.error && e.error.message));
                    if (msg && (msg.indexOf('ChunkLoadError') !== -1 || msg.indexOf('Failed to load chunk') !== -1)) {
                      window.location.reload();
                    }
                  });
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
