# Image Licensing & Copyright Compliance

All images used across the **Alpine Club India** web platform are certified **royalty-free, copyright-free, and legally cleared for commercial web and promotional use**.

---

## 1. Licensing Sources

The photography across destinations, tours, activities, and mountain guides is sourced from:
1. **Unsplash License**: Free to use for commercial and non-commercial purposes; no permission needed, no copyright infringement.
2. **Pexels & Pixabay CC0 / Free License**: Public domain & free commercial use without attribution requirements.
3. **Wikimedia Commons (Creative Commons Zero / Public Domain)**: Public domain geographic, historical, and geological mountain photography.
4. **Alpine Club India Proprietary Founder Photography**: Original photography by Imtiyaz Ahmad Kumar and local Gulmarg mountain guides, licensed exclusively for this project.

---

## 2. Advanced Formats (AVIF & WebP) & Performance

All imagery is processed through **Next.js Image Optimization Pipeline**:
- **AVIF First**: Cutting-edge AVIF compression delivered automatically to supported modern browsers (providing ~50% better compression than traditional JPEG at identical visual quality).
- **WebP Fallback**: Modern WebP format delivered to browsers that support WebP.
- **Smart Responsive Sizing**: Downsampled to exact client screen breakpoints (`640w`, `750w`, `828w`, `1080w`, `1200w`, `1920w`).
- **Native Lazy Loading**: Non-hero images are asynchronously decoded and lazily loaded on scroll (`loading="lazy"`), preventing bandwidth waste on mobile devices.
- **30-Day Edge Cache**: Configured via `minimumCacheTTL: 2592000` in `next.config.ts`.

---

## 3. Directory Breakdown & Visual Clearance

| Directory | Theme | Copyright Status |
|---|---|---|
| `/public/images/hero/` | Gulmarg Apharwat & Dal Lake Heroes | CC0 / Royalty-Free Commercial |
| `/public/images/ski/` | Deep powder, backcountry bowls, Apharwat peaks | Royalty-Free / Founder Archive |
| `/public/images/destinations/kashmir/` | Dal Lake, Betaab Valley, Sonamarg, Gulmarg | CC0 / Public Domain / Unsplash |
| `/public/images/destinations/ladakh/` | Pangong Tso, Nubra dunes, Thiksey monastery | Royalty-Free / Public Domain |
| `/public/images/destinations/sikkim/` | Kangchenjunga massif, Goechala trails, Yumthang | Royalty-Free Public Domain |
| `/public/images/tours/` | Day-by-day tour cover and gallery photos | Commercial Royalty-Free |
| `/public/images/about/` | Mountain guides and founder portrait | Alpine Club India Archive |
