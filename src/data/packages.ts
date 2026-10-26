export interface PackageItem {
  slug: string;
  title: string;
  category: "ski-packages" | "summer-packages" | "trekking";
  categoryName: string;
  duration: string;
  price?: string;
  region?: string;
  bestSeason?: string;
  distance?: string;
  maxAltitude?: string;
  startingPoint?: string;
  endingPoint?: string;
  difficulty?: "Easy" | "Moderate" | "Moderate to Difficult" | "Difficult";
  route?: string;
  description: string;
  inclusions?: string[];
  exclusions?: string[];
  image: string;
}

export const packagesData: PackageItem[] = [
  // ==========================================
  // SKI PACKAGES
  // ==========================================
  {
    slug: "fully-guided-10-days-ski-package",
    title: "Fully Guided 10 Days Ski Package",
    category: "ski-packages",
    categoryName: "Ski Packages",
    duration: "10 Days",
    price: "$2,000 per person",
    region: "Gulmarg, Kashmir",
    bestSeason: "December to April",
    difficulty: "Moderate to Difficult",
    description:
      "Fully Guided package that includes breakfasts at the hotel. This is a great option. You get a great room, lovely food, a jacuzzi in your private bathroom and a nice ski vibe. You discover Gulmarg fast and in a safe way with your guide and just live life. Enjoy.",
    inclusions: [
      "10 Days Fully Guided Skiing with certified mountain ski guide",
      "Premium hotel accommodation with private jacuzzi bathroom",
      "Daily breakfast included at hotel",
      "Complete safety orientation and backcountry snowpack guidance",
      "Local ski culture experience & après-ski vibe",
    ],
    image: "/images/ski/apharwat-peaks.jpg",
  },
  {
    slug: "fully-guided-1-week-ski-package",
    title: "Fully Guided 1 Week Ski Package",
    category: "ski-packages",
    categoryName: "Ski Packages",
    duration: "7 Days",
    price: "$1,500 per person",
    region: "Gulmarg & Srinagar, Kashmir",
    bestSeason: "December to April",
    difficulty: "Moderate to Difficult",
    description:
      "A ski-in ski-out and the Hotel offers a great lounge to relax, sit with friends or meet new people. This is a fully guided package that includes only your breakfasts at the hotel.",
    inclusions: [
      "5 days skiing",
      "Airport Transfers",
      "Accommodation with meals (breakfasts at hotel)",
      "Ski guide for the whole trip",
      "Lift passes for the whole trip",
      "2 days houseboat and local sightseeing",
    ],
    image: "/images/ski/powder-skiing.jpg",
  },
  {
    slug: "2-weeks-fully-guided-ski-package",
    title: "2 Weeks Fully Guided Ski Package",
    category: "ski-packages",
    categoryName: "Ski Packages",
    duration: "14 Days",
    price: "$3,000 per person",
    region: "Gulmarg & Srinagar, Kashmir",
    bestSeason: "December to April",
    difficulty: "Moderate to Difficult",
    description:
      "This is the best package we offer. Everything you need. A fully guided package, a great hotel with a nice vibe, great food and no stress. Book this package, you won't regret it.",
    inclusions: [
      "Airport Transfers",
      "Accommodation with meals",
      "Ski guide for the whole trip",
      "Lift passes for the whole trip",
      "12 days skiing",
      "2 days houseboat and local sightseeing",
    ],
    image: "/images/hero/gulmarg-hero.jpg",
  },

  // ==========================================
  // SUMMER PACKAGES
  // ==========================================
  {
    slug: "rumtse-to-tso-moriri-trek",
    title: "Rumtse to Tso Moriri Trek — Ladakh",
    category: "summer-packages",
    categoryName: "Summer Packages",
    duration: "10 nights / 11 days",
    region: "Changthang / Rupshu Valley, Ladakh",
    bestSeason: "June to mid-October",
    distance: "Approximately 90–100 km",
    startingPoint: "Leh (Trailhead: Rumtse, ~79–85 km from Leh)",
    endingPoint: "Korzok / Tso Moriri (drive back to Leh)",
    maxAltitude: "Yalung Nyau La at about 5,425–5,438 m / 17,800–17,847 ft",
    difficulty: "Difficult",
    description:
      "The Rumtse to Tso Moriri Trek is a remote high-altitude crossing of the Changthang plateau, known for vast open landscapes, six high passes, nomadic Changpa settlements, and the spectacular Tso Moriri Lake. It is best suited to experienced trekkers who are already comfortable at altitude.",
    inclusions: [
      "Expert high-altitude mountain guide & support staff",
      "Full camping gear: high-grade alpine tents, sleeping bags & mattress",
      "Nutritious cooked meals (breakfast, lunch, tea & dinner) during trek",
      "Transport from Leh to Rumtse and Korzok back to Leh",
      "All wildlife, environmental & restricted area permits",
    ],
    image: "/images/tours/ladakh-8-day-tour/pangong.jpg",
  },
  {
    slug: "chadar-frozen-river-trek",
    title: "Chadar Frozen River Trek — Ladakh",
    category: "summer-packages",
    categoryName: "Summer Packages",
    duration: "8 nights / 9 days",
    region: "Leh, Ladakh, India",
    bestSeason: "January to February",
    distance: "Approximately 60–70 km round trip",
    startingPoint: "Leh",
    endingPoint: "Leh",
    maxAltitude: "About 3,400–3,850 m / 11,155–12,630 ft",
    difficulty: "Difficult",
    description:
      "Walk on the frozen Zanskar River through dramatic Himalayan gorges, frozen waterfalls, and remote winter camps. This 9-day expedition is suitable for fit trekkers who can handle extreme cold, icy terrain, and high-altitude conditions.",
    inclusions: [
      "Experienced Zanskari ice guides and support porters with sledges",
      "Sub-zero extreme winter expedition tents & insulated gear",
      "Nutritious hot meals designed for sub-zero alpine endurance",
      "Mandatory medical checkups & wildlife/environmental permits",
      "Airport and trailhead transfers to and from Leh",
    ],
    image: "/images/tours/gulmarg-ski-adventure/slopes.jpg",
  },
  {
    slug: "markha-valley-trek",
    title: "Markha Valley Trek — Ladakh",
    category: "summer-packages",
    categoryName: "Summer Packages",
    duration: "8 nights / 9 days",
    region: "Hemis National Park and Markha Valley, Ladakh",
    bestSeason: "June to September",
    distance: "Approximately 65–80 km",
    startingPoint: "Leh",
    endingPoint: "Leh",
    maxAltitude: "5,150–5,260 m / 16,900–17,257 ft at Kongmaru La",
    difficulty: "Moderate to Difficult",
    description:
      "The Markha Valley Trek is Ladakh’s most popular classic trek, combining river valleys, high-altitude pastures, remote villages, Buddhist monasteries, wildlife, and the dramatic Kongmaru La pass. It is ideal for trekkers seeking a challenging but non-technical Himalayan adventure.",
    inclusions: [
      "Certified wilderness trek leader & local horse team/cook",
      "Twin sharing dome tents and hygienic kitchen dining tent",
      "Freshly prepared meals on all trekking days",
      "Hemis National Park permits & entry passes",
      "Leh trailhead roundtrip pickup and drop-off",
    ],
    image: "/images/destinations/ladakh/monastery.jpg",
  },
  {
    slug: "lamayuru-to-zanskar-trek",
    title: "Lamayuru to Zanskar Trek",
    category: "summer-packages",
    categoryName: "Summer Packages",
    duration: "10–11 days trekking; 12–14 days including Leh arrival and transfers",
    region: "Zanskar & Ladakh",
    bestSeason: "June to mid-September",
    distance: "Approximately 110–130 km",
    startingPoint: "Leh",
    endingPoint: "Padum, followed by road transfer to Kargil and Leh",
    maxAltitude: "Sngge La (Lion Pass), about 5,000–5,230 m / 16,400–17,160 ft",
    difficulty: "Moderate to Difficult",
    route: "Lamayuru → Wanla → Photoksar → Sngge La → Lingshed → Snertse → Hanumil → Pishu → Karsha → Padum",
    description:
      "The Lamayuru to Zanskar Trek, also called the Lamayuru–Padum Trek or Grand Zanskar Traverse, is one of Ladakh’s most beautiful long treks. It crosses remote villages, deep gorges, high passes, and ancient monasteries before reaching Padum, the main town of Zanskar.",
    inclusions: [
      "Professional trek guide with extensive trans-Himalayan route mastery",
      "Pack horses for expedition gear, dining and sleeping camp setup",
      "Full board meals along the complete traverse route",
      "Scenic overland transfer from Padum via Kargil back to Leh",
      "Monastery visits and village heritage encounters",
    ],
    image: "/images/destinations/ladakh/hero.jpg",
  },
  {
    slug: "warwan-valley-trek",
    title: "Warwan Valley Trek — 9 Days",
    category: "summer-packages",
    categoryName: "Summer Packages",
    duration: "8 Nights / 9 Days",
    region: "Warwan Valley & Kishtwar / Kashmir",
    bestSeason: "July to September",
    distance: "Approx. 80–90 km",
    startingPoint: "Srinagar",
    endingPoint: "Srinagar",
    maxAltitude: "Around 14,500 ft at Lomvilad Pass",
    difficulty: "Moderate to Difficult",
    route: "Srinagar → Panikhar → Denora → Kalapari → Kaintal → Humpet → Sukhnai → Basmina → Srinagar",
    description:
      "The Warwan Valley Trek is one of Kashmir’s most remote and adventurous high-altitude treks. Over 9 days, trekkers cross high mountain passes, glacial rivers, alpine meadows, and traditional villages of the hidden Warwan Valley. With dramatic snow peaks, wild landscapes, and untouched natural beauty, this trek is ideal for experienced trekkers looking for a true Himalayan wilderness experience.",
    inclusions: [
      "Experienced Kashmiri mountain trek leader & support team",
      "High alpine waterproof tents, insulated mats & sub-zero sleeping bags",
      "Wholesome expedition meals crafted for high-altitude trekking",
      "Forest department clearances & inner-line valley permits",
      "Private vehicle transportation from Srinagar to Panikhar and return from Basmina",
    ],
    image: "/images/about/group-trek.jpg",
  },
  {
    slug: "gurez-valley-trek",
    title: "Gurez Valley Trek — 7 Days",
    category: "summer-packages",
    categoryName: "Summer Packages",
    duration: "6 Nights / 7 Days",
    region: "Gurez Valley, Kashmir",
    bestSeason: "June to September",
    distance: "Approx. 45–55 km",
    startingPoint: "Srinagar",
    endingPoint: "Srinagar",
    maxAltitude: "Around 11,500–12,000 ft",
    difficulty: "Moderate",
    route: "Srinagar → Bandipora → Razdan Pass → Dawar (Gurez) → Habba Khatoon Peak / Valley Trails → Pukhta Lake / Tulail Valley → Srinagar",
    description:
      "The Gurez Valley Trek is a scenic Himalayan trek through one of Kashmir’s most beautiful and untouched valleys. Over 7 days, trekkers follow the Kishanganga River, walk through pine forests, alpine meadows, and traditional villages, with stunning views of snow-capped peaks and the famous Habba Khatoon Mountain. With peaceful landscapes, river-side camping, and rich local culture, this trek is perfect for nature lovers, photographers, and adventure seekers.",
    inclusions: [
      "Local Gurez guide with deep cultural and route knowledge",
      "Riverside and meadow camping equipment and homestay experiences",
      "All fresh meals, traditional tea & trail snacks",
      "Razdan Pass & border area tourist clearances",
      "Scenic private transport from Srinagar across Razdan Pass to Gurez and return",
    ],
    image: "/images/destinations/kashmir/pahalgam.jpg",
  },
  {
    slug: "mount-harmukh-trek",
    title: "Mount Harmukh Trek — 7 Days",
    category: "summer-packages",
    categoryName: "Summer Packages",
    duration: "6 Nights / 7 Days",
    region: "Ganderbal, Kashmir",
    bestSeason: "July to September",
    distance: "Approx. 40–50 km",
    startingPoint: "Srinagar",
    endingPoint: "Srinagar",
    maxAltitude: "Around 13,500 ft at Gangabal Lake / Harmukh Base Camp",
    difficulty: "Moderate to Difficult",
    route: "Srinagar → Naranag → Trunkhol → Gangabal & Nundkol Lakes → Harmukh Base Camp → Naranag → Srinagar",
    description:
      "The Mount Harmukh Trek is a stunning high-altitude trek that takes adventurers to the base of Mount Harmukh (16,870 ft) and the sacred twin lakes of Gangabal and Nundkol. Over 7 days, the trail passes through dense pine forests, lush meadows, and rugged moraines, offering dramatic views of Harmukh’s sheer rocky face and hanging glaciers. This trek is ideal for nature lovers, photographers, and trekkers looking for a true Himalayan alpine experience.",
    inclusions: [
      "Certified alpine guide with first-aid & high-altitude expertise",
      "All camping tents, warm sleeping bags, and mess tent",
      "3 wholesome hot meals per day prepared by our camp chef",
      "Forest entry fees and camping permits",
      "Roundtrip road transport between Srinagar and ancient Naranag temple trailhead",
    ],
    image: "/images/destinations/kashmir/sonamarg.jpg",
  },

  // ==========================================
  // TREKKING PACKAGES
  // ==========================================
  {
    slug: "kashmir-great-lakes-trek",
    title: "Kashmir Great Lakes Trek — 8 Days",
    category: "trekking",
    categoryName: "Trekking",
    duration: "7 Nights / 8 Days",
    region: "Sonamarg to Naranag, Kashmir",
    bestSeason: "July to September",
    distance: "Approx. 72 km",
    startingPoint: "Srinagar / Shitkadi (Sonamarg)",
    endingPoint: "Naranag / Srinagar",
    maxAltitude: "Around 13,800 ft at Gadsar Pass",
    difficulty: "Moderate to Difficult",
    route: "Srinagar → Shitkadi (Sonamarg) → Nichnai → Vishansar Lake → Gadsar → Satsar → Gangabal → Naranag → Srinagar",
    description:
      "The Kashmir Great Lakes Trek is widely regarded as one of India’s most beautiful treks. Over 8 days, the trail winds through alpine meadows, high mountain passes, and a chain of pristine glacial lakes, including Vishansar, Kishansar, Gadsar, Satsar, and Gangabal. With panoramic views of snow-capped peaks, blooming wildflowers, and clear turquoise waters, this trek is an unforgettable Himalayan journey.",
    inclusions: [
      "Certified trek leader, mountain guide & wilderness medical responder",
      "Twin sharing alpine tents, sub-zero sleeping bags & roll mats",
      "Breakfast, packed/hot trail lunch, evening high tea & hearty dinner daily",
      "Horses / porters to carry camp logistics and emergency equipment",
      "Transportation from Srinagar to Sonamarg, and Naranag back to Srinagar",
    ],
    image: "/images/destinations/kashmir/hero.jpg",
  },
  {
    slug: "tosamaidan-pir-panjal-trek",
    title: "Tosamaidan Pir Panjal Trek — 7 Days",
    category: "trekking",
    categoryName: "Trekking",
    duration: "6 Nights / 7 Days",
    region: "Pir Panjal Range, Kashmir",
    bestSeason: "June to September",
    distance: "Approx. 50–60 km",
    startingPoint: "Srinagar",
    endingPoint: "Srinagar",
    maxAltitude: "Around 13,000–13,500 ft at high ridges/passes",
    difficulty: "Moderate",
    route: "Srinagar → Sitharan → Tosamaidan → Pehjan → Tosa Maidan lakes/ridge trails → Drang / Tangmarg → Srinagar",
    description:
      "The Tosamaidan Pir Panjal Trek explores one of Kashmir’s largest and most pristine alpine pastures. Surrounded by the dense forests and rugged peaks of the Pir Panjal Range, Tosamaidan offers expansive meadows, gentle streams, and panoramic vistas. This 7-day trek is perfect for hikers who want an offbeat trail away from crowds, with great camping spots, rich shepherd culture, and untouched Himalayan wilderness.",
    inclusions: [
      "Experienced local Pir Panjal trekking guide",
      "High quality tents, dining equipment & sleeping arrangements",
      "All meals including mountain breakfasts, packed lunches, and hot dinners",
      "Permits, trail safety kits & emergency oxygen",
      "Pick-up and drop transfers from Srinagar",
    ],
    image: "/images/destinations/kashmir/gardens.jpg",
  },
  {
    slug: "goecha-la-trek",
    title: "Goecha La Trek — Sikkim",
    category: "trekking",
    categoryName: "Trekking",
    duration: "10 Nights / 11 Days",
    region: "West Sikkim, India (Khangchendzonga National Park)",
    bestSeason: "April to May (Spring) and September to November (Autumn)",
    distance: "Approximately 90 km round trip",
    startingPoint: "Yuksom",
    endingPoint: "Yuksom",
    maxAltitude: "Goecha La Viewpoint 1 at 4,600 m / 15,100 ft (and up to Pass at ~4,940 m / 16,207 ft)",
    difficulty: "Difficult",
    description:
      "The Goecha La Trek is Sikkim’s premier high-altitude Himalayan trek, renowned for unparalleled views of Mount Kanchenjunga (8,586 m), the world’s third highest peak. The trail leads through rhododendron forests, Dzongri ridge, high mountain passes, and the sacred Samiti Lake to the dramatic Goecha La viewpoints.",
    inclusions: [
      "Certified Sikkim mountain leader with high-altitude expertise",
      "High altitude trekking tents, sleeping bags, and camp dining setup",
      "All meals on trek prepared fresh by experienced camp cooks",
      "Khangchendzonga National Park entry permits & environmental passes",
      "Trailhead reception and logistics coordination in Yuksom",
    ],
    image: "/images/destinations/sikkim/kangchenjunga.jpg",
  },
  {
    slug: "dzongri-trek",
    title: "Dzongri Trek — Sikkim",
    category: "trekking",
    categoryName: "Trekking",
    duration: "7 Nights / 8 Days",
    region: "West Sikkim, India (Khangchendzonga National Park)",
    bestSeason: "March to May and mid-September to November",
    distance: "Approximately 50 km round trip",
    startingPoint: "Yuksom",
    endingPoint: "Yuksom",
    maxAltitude: "Dzongri Viewpoint (Dzongri Top) at 4,250 m / 13,940 ft",
    difficulty: "Moderate to Difficult",
    description:
      "The Dzongri Trek is the shorter, classic Sikkim high-altitude trail that takes trekkers to the Dzongri ridge for breathtaking sunrise panoramas of Mount Kanchenjunga, Mount Pandim, Kabru, and neighboring peaks. It is an ideal Himalayan expedition for trekkers who want the grand Kanchenjunga spectacle with a shorter timeline than the full Goecha La trek.",
    inclusions: [
      "Experienced local guide with deep Khangchendzonga territory knowledge",
      "Complete camping setup (tents, mats, sleeping bags, dining tent)",
      "Wholesome daily meals, tea & energy snacks",
      "National Park entry permits and local administration clearances",
      "Trailhead briefings and support from Yuksom",
    ],
    image: "/images/destinations/sikkim/hero.jpg",
  },
];

export function getPackageBySlug(slug: string): PackageItem | undefined {
  return packagesData.find((p) => p.slug === slug);
}

export function getPackagesByCategory(category: PackageItem["category"]): PackageItem[] {
  return packagesData.filter((p) => p.category === category);
}
