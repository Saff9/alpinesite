import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingButtons } from "@/components/layout/floating-buttons";
import { site } from "@/data/site";

// Montserrat for bold headlines, brand marks, and display typography
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["600", "700", "800"],
});

// Open Sans for clean, highly legible body copy and details
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["400", "600"],
});

// Poppins for card descriptions, footer links, and dropdown menu links
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "AlpineClubIndia | Certified Mountain Guides, Gulmarg Skiing & Himalayan Expeditions",
    template: "%s | AlpineClubIndia",
  },
  description: site.description,
  keywords: [
    "Alpine Club India",
    "Gulmarg ski guides",
    "Gulmarg tour packages",
    "skiing in Gulmarg",
    "Gulmarg Gondola",
    "Kashmir tour packages",
    "Kashmir travel agency",
    "Ladakh tour",
    "Srinagar houseboat",
    "honeymoon packages Kashmir",
    "India tour operator",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: { telephone: true, address: true, email: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Alpine Club India: Mountain Guides & Himalayan Tours",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpine Club India: Mountain Guides & Himalayan Tours",
    description: site.description,
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
  // Google / Bing webmaster verification IDs can be supplied via env without code changes:
  // GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION (msvalidate.01)
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon1.png", sizes: "96x96", type: "image/png" },
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

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${site.url}/#organization`,
  name: site.legalName,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}${site.ogImage.url}`,
  logo: `${site.url}${site.logo}`,
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
    site.socials.instagram,
    site.socials.facebook,
    site.socials.youtube,
    site.socials.twitter,
  ],
  areaServed: ["Gulmarg", "Kashmir", "Ladakh"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.stats.rating,
    reviewCount: site.stats.reviewsCount,
    bestRating: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${openSans.variable} ${poppins.variable} flex min-h-screen flex-col bg-background font-sans text-foreground antialiased`}
      >
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
                  window.addEventListener('unhandledrejection', function(e) {
                    var r = e && e.reason;
                    var msg = r && (r.message || (typeof r === 'string' ? r : ''));
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
