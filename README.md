# Alpine Club India

A fast, responsive, and maintainable boutique travel website for **Alpine Club India** — Gulmarg ski expeditions, Kashmir journeys, and Himalayan adventures.

Built specifically for high developer maintainability, zero bloated dependencies, and clean code hygiene.

---

## Developer Principles

1. **Clean & Ultra-Lean Stack**:
   - **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
   - **UI**: Pure [React 19](https://react.dev/) + [Tailwind CSS v4](https://tailwindcss.com/)
   - **Icons**: [Lucide React](https://lucide.dev/)
   - **Utilities**: `clsx` and `tailwind-merge` (`cn` helper)
   - **Zero bloat**: No Radix UI wrappers, no CVA, no Zod, no Embla carousel, and no database setup required to run or edit.

2. **Effortless to Maintain & Customise**:
   - Every tour, destination, blog post, and site configuration lives in plain TypeScript files in `src/data/`.
   - To add a new tour: simply append an object to [src/data/tours.ts](file:///c:/Users/owais/OneDrive/Desktop/alpinesite/src/data/tours.ts).
   - To add a destination: simply append to [src/data/destinations.ts](file:///c:/Users/owais/OneDrive/Desktop/alpinesite/src/data/destinations.ts).
   - To change contact details, phone, or WhatsApp: update [src/data/site.ts](file:///c:/Users/owais/OneDrive/Desktop/alpinesite/src/data/site.ts).
   - All forms (`contact`, `bookings`, `newsletter`) work right out of the box with zero database configuration.

3. **Human Developer Code Hygiene**:
   - Clear, predictable folder structure.
   - Fully responsive design tested across mobile, tablet, and desktop screens.
   - Clean, readable React components without over-engineered abstractions.
   - Focused Himalayan & J&K destinations (Gulmarg, Kashmir, Ladakh, Spiti/Himachal).

---

## Project Structure

```text
alpinesite/
├── public/
│   └── images/              # Static imagery and logos
├── src/
│   ├── app/                 # Next.js App Router pages and APIs
│   │   ├── about/           # About Us page
│   │   ├── api/             # Lightweight API endpoints (bookings, contact, newsletter)
│   │   ├── blog/            # Himalayan travel guides ([slug])
│   │   ├── contact/         # Contact & custom trip planning form
│   │   ├── destinations/    # Destination guides ([slug])
│   │   ├── tours/           # Handcrafted itineraries ([slug])
│   │   ├── globals.css      # Brand colors and typography tokens
│   │   ├── layout.tsx       # Root layout (Navbar, Footer, SEO JSON-LD)
│   │   ├── page.tsx         # Homepage
│   │   └── sitemap.ts       # Dynamic sitemap
│   ├── components/
│   │   ├── blog/            # Blog cards and reading progress
│   │   ├── cards/           # Tour cards, destination cards, testimonial cards
│   │   ├── destinations/    # Destinations explorer and season guide
│   │   ├── forms/           # Contact form and newsletter signup
│   │   ├── home/            # Homepage sections (Hero, Ski Gulmarg, Reviews, etc.)
│   │   ├── layout/          # Navbar, Footer, Mobile Drawer, Floating WhatsApp CTA
│   │   ├── shared/          # Page headers, Section headings, Rating stars
│   │   ├── tours/           # Tour gallery lightbox, booking form, sticky bar
│   │   └── ui/              # Clean, pure React + Tailwind UI primitives (Button, Input, Accordion, Dialog, etc.)
│   ├── data/                # Plain TypeScript data files (edit anytime!)
│   │   ├── blog.ts          # Authentic Himalayan travel guides
│   │   ├── destinations.ts  # Destinations (Gulmarg, Kashmir, Ladakh, Himachal)
│   │   ├── site.ts          # Business info, phone, WhatsApp, address, nav links
│   │   ├── testimonials.ts  # Customer reviews
│   │   ├── tours.ts         # Handcrafted itineraries and pricing
│   │   └── travel-styles.ts # Category tags
│   ├── lib/                 # Utilities (utils.ts, og.tsx)
│   └── types/               # TypeScript interfaces & domain models
├── package.json             # Minimal dependencies (React, Tailwind, Lucide, Next)
└── tsconfig.json            # Strict TypeScript configuration
```

---

## Getting Started

### 1. Prerequisites
- Node.js 18.17+ or 20+ installed
- npm

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## How to Customize for Your Client

### 1. Update Contact & Company Information
Open [src/data/site.ts](file:///c:/Users/owais/OneDrive/Desktop/alpinesite/src/data/site.ts) to update:
- Phone number & WhatsApp number
- Email address & physical office address
- Social media links & registration details

### 2. Manage Tours & Pricing
Open [src/data/tours.ts](file:///c:/Users/owais/OneDrive/Desktop/alpinesite/src/data/tours.ts):
- Add, update, or remove tour itineraries.
- Adjust base prices (`price` field).
- Edit highlights, inclusions, exclusions, and day-by-day itineraries.

### 3. Manage Destinations
Open [src/data/destinations.ts](file:///c:/Users/owais/OneDrive/Desktop/alpinesite/src/data/destinations.ts):
- Add or modify destination cards and descriptions.
- Update seasonal recommendations and top attractions.
