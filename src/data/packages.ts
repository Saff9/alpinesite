export interface ItineraryDay {
  day: number | string;
  title: string;
  description: string;
}

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
  itinerary?: ItineraryDay[];
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
    image: "/images/ski/apharwat-10-peaks.jpg",
    itinerary: [
          {
                "day": 1,
                "title": "Arrival in Srinagar & Transfer to Gulmarg",
                "description": "Airport reception and private transfer to Gulmarg. Hotel check-in, gear fitting, and evening briefing."
          },
          {
                "day": 2,
                "title": "Safety Briefing & Phase 1 Warm-Up",
                "description": "Transceiver safety clinic followed by warm-up powder runs through Kongdoori pine glades."
          },
          {
                "day": 3,
                "title": "Mount Apharwat Powder Bowls",
                "description": "Take Phase 2 gondola to ski vast untracked high-alpine bowls with your certified guide."
          },
          {
                "day": 4,
                "title": "Mary's Shoulder Descents",
                "description": "Ride steep pitches and long continuous vertical drops through powder bowls into pine glades."
          },
          {
                "day": 5,
                "title": "Baba Reshi Tree Skiing",
                "description": "Ski deep powder lines through old-growth forests, returning by private 4WD after local tea."
          },
          {
                "day": 6,
                "title": "Shark's Fin & High Chutes",
                "description": "Explore high alpine chutes around Shark's Fin with cold Himalayan powder."
          },
          {
                "day": 7,
                "title": "Drang Valley Long Descent",
                "description": "Scenic backcountry descent through alpine bowls and frozen waterfalls to Drang village."
          },
          {
                "day": 8,
                "title": "Sunshine Peak Powder Lines",
                "description": "Track fresh powder basins towards Sunshine Peak with views of Nanga Parbat."
          },
          {
                "day": 9,
                "title": "Final Mountain Descents & Dal Lake Houseboat",
                "description": "Morning ski on Apharwat, then transfer to Srinagar for a sunset luxury houseboat stay."
          },
          {
                "day": 10,
                "title": "Sunrise Shikara Ride & Airport Transfer",
                "description": "Morning Shikara cruise across Dal Lake followed by airport departure."
          }
    ],
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
    itinerary: [
          {
                "day": 1,
                "title": "Arrival in Srinagar & Drive to Gulmarg",
                "description": "Meet your team at Srinagar airport, transfer to Gulmarg, and fit your ski gear."
          },
          {
                "day": 2,
                "title": "Phase 1 Warm-Up & Safety Clinic",
                "description": "Avalanche transceiver training and warm-up powder runs around Kongdoori."
          },
          {
                "day": 3,
                "title": "Mount Apharwat High Bowls",
                "description": "Ascend Phase 2 to ski wide open powder bowls with sweeping Pir Panjal views."
          },
          {
                "day": 4,
                "title": "Mary's Shoulder Powder Traverse",
                "description": "Ski off-piste ridgelines and rolling powder bowls into sheltered tree glades."
          },
          {
                "day": 5,
                "title": "Baba Reshi Forest Tree Runs",
                "description": "Deep powder tree skiing through pine forests down to the historic Baba Reshi shrine."
          },
          {
                "day": 6,
                "title": "Morning Ski & Dal Lake Houseboat",
                "description": "Farewell powder turns on Apharwat, then drive to Srinagar for an evening on Dal Lake."
          },
          {
                "day": 7,
                "title": "Shikara Cruise & Departure",
                "description": "Peaceful sunrise cruise on Dal Lake and transfer to Srinagar Airport."
          }
    ],
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
    image: "/images/hero/2-weeks-ski.jpeg",
    itinerary: [
          {
                "day": 1,
                "title": "Arrival & Transfer to Gulmarg",
                "description": "Airport reception and transfer to Gulmarg for check-in and gear setup."
          },
          {
                "day": 2,
                "title": "Beacon Practice & Phase 1 Glades",
                "description": "Safety orientation and warm-up powder runs in the Kongdoori woods."
          },
          {
                "day": 3,
                "title": "Apharwat First Descents",
                "description": "High-altitude bowl skiing in light Himalayan powder from Phase 2."
          },
          {
                "day": 4,
                "title": "Mary's Shoulder Traverses",
                "description": "Guided off-piste descents from Mary's Shoulder through pristine tree-lines."
          },
          {
                "day": 5,
                "title": "Baba Reshi Valley Descent",
                "description": "Tree skiing descent to Baba Reshi with local tea and 4WD return."
          },
          {
                "day": 6,
                "title": "Shark's Fin Cirque",
                "description": "Technical gullies and open bowls around Shark's Fin formation."
          },
          {
                "day": 7,
                "title": "Backcountry Skinning Day",
                "description": "Earn your turns touring the remote western flanks of Mount Apharwat."
          },
          {
                "day": 8,
                "title": "North Face Couloirs",
                "description": "Steep, pristine fall-lines in sheltered cold-powder chutes."
          },
          {
                "day": 9,
                "title": "Drang Valley Descent",
                "description": "Epic 1,500m vertical descent from summits to frozen waterfalls."
          },
          {
                "day": 10,
                "title": "Sunshine Peak Basins",
                "description": "Fresh powder runs towards Sunshine Peak with stunning panoramic views."
          },
          {
                "day": 11,
                "title": "Steep Powder Clinic",
                "description": "Advanced line selection and secret powder stashes with local guides."
          },
          {
                "day": 12,
                "title": "Celebration Mountain Finale",
                "description": "Ski your favorite Apharwat lines and celebrate an epic two-week trip."
          },
          {
                "day": 13,
                "title": "Srinagar Heritage & Houseboat",
                "description": "Transfer to Srinagar for a luxury Dal Lake houseboat and Old City walk."
          },
          {
                "day": 14,
                "title": "Sunrise Shikara & Airport Drop",
                "description": "Morning Shikara ride on Dal Lake and airport departure."
          }
    ],
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
    itinerary: [
          {
                "day": 1,
                "title": "Arrival in Leh & Rest",
                "description": "Rest and acclimatize to high altitude in Leh."
          },
          {
                "day": 2,
                "title": "Leh Monastery Tour",
                "description": "Gentle walking tour of Thiksey and Shey monasteries to aid acclimatization."
          },
          {
                "day": 3,
                "title": "Drive to Rumtse & Trek to Kyamar",
                "description": "Drive along the Indus River and begin trek through scenic valleys to Kyamar."
          },
          {
                "day": 4,
                "title": "Kyamar to Tisaling via Dual Passes",
                "description": "Cross Kyamar La and Mandalchan La with grand Changthang vistas."
          },
          {
                "day": 5,
                "title": "Tisaling to Tsokar Lake",
                "description": "Cross Shibuk La to the white salt shores of Tsokar Lake, spotting wild Kiang."
          },
          {
                "day": 6,
                "title": "Tsokar Basin to Nuruchan",
                "description": "Trek across vast saline plains to the Changpa nomad camp at Nuruchan."
          },
          {
                "day": 7,
                "title": "Nuruchan to Rachungkaru",
                "description": "Gentle ascent over Horlam Kongka La to high nomadic pastures."
          },
          {
                "day": 8,
                "title": "Rachungkaru to Gyama",
                "description": "Cross high Kyamayuri La pass into the remote Gyama valley."
          },
          {
                "day": 9,
                "title": "Gyama to Tso Moriri Lake",
                "description": "Cross Yalung Nyau La for the first stunning view of deep-blue Tso Moriri."
          },
          {
                "day": 10,
                "title": "Tso Moriri & Korzok Monastery",
                "description": "Explore the sacred lake and visit the 300-year-old Korzok Monastery."
          },
          {
                "day": 11,
                "title": "Return Drive to Leh",
                "description": "Spectacular drive through Indus gorges back to Leh for a farewell dinner."
          }
    ],
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
    image: "/images/tours/gulmarg-ski-adventure/frozen-river.avif",
    itinerary: [
          {
                "day": 1,
                "title": "Arrival in Leh & Acclimatization",
                "description": "Arrive in Leh and rest in a heated room to adjust to winter conditions."
          },
          {
                "day": 2,
                "title": "Medical Fitness Check & Market Walk",
                "description": "Mandatory medical checkup at SNM Hospital and gear check in Leh bazaar."
          },
          {
                "day": 3,
                "title": "Drive to Chilling & Step on Ice to Shingra Koma",
                "description": "Drive along the Indus-Zanskar confluence and take your first steps on the frozen river."
          },
          {
                "day": 4,
                "title": "Trek through Gorges to Tibb Cave",
                "description": "Walk the canyon ice sheet between vertical cliffs to sheltered Tibb Cave."
          },
          {
                "day": 5,
                "title": "Tibb Cave to Naerak Frozen Waterfall",
                "description": "Trek past giant icicles to the famous 50-foot frozen blue waterfall of Naerak."
          },
          {
                "day": 6,
                "title": "Naerak Village & Heritage",
                "description": "Climb up to isolated Naerak village and visit its ancient juniper tree."
          },
          {
                "day": 7,
                "title": "Return Trek to Tibb Cave",
                "description": "Retrace steps on the shifting ice sheet, discovering new formations."
          },
          {
                "day": 8,
                "title": "Tibb Cave to Roadhead & Drive to Leh",
                "description": "Final river walk to Shingra Koma and warm vehicle transfer back to Leh."
          },
          {
                "day": 9,
                "title": "Airport Departure",
                "description": "Transfer to Leh airport with aerial views of the snow-covered Himalayas."
          }
    ],
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
    maxAltitude: "5,150–5,260 m / 16,900–17,257  t at Kongmaru La",
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
    itinerary: [
          {
                "day": 1,
                "title": "Arrival in Leh & Acclimatization",
                "description": "Full rest in Leh to adapt to Ladakh's high altitude."
          },
          {
                "day": 2,
                "title": "Leh Cultural Walk",
                "description": "Visit Leh Palace, Shanti Stupa, and local markets."
          },
          {
                "day": 3,
                "title": "Drive to Chilling & Trek to Skiu",
                "description": "Cross Zanskar river cable bridge and hike up the valley to Skiu village."
          },
          {
                "day": 4,
                "title": "Skiu to Markha Village",
                "description": "Walk through green oasis hamlets to Markha, the valley's largest settlement."
          },
          {
                "day": 5,
                "title": "Markha to Hankar",
                "description": "Trek past ancient ruined forts with views of snow-capped Kang Yatse."
          },
          {
                "day": 6,
                "title": "Hankar to Nimaling Plateau",
                "description": "Climb past alpine pastures to high Nimaling plateau under Kang Yatse glacier."
          },
          {
                "day": 7,
                "title": "Kang Yatse Ridge Excursion",
                "description": "Acclimatization day hike towards Kang Yatse base camp."
          },
          {
                "day": 8,
                "title": "Cross Kongmaru La to Chokdo & Drive to Leh",
                "description": "Ascend Kongmaru La for sweeping Karakoram views, then descend to drive to Leh."
          },
          {
                "day": 9,
                "title": "Leh Airport Departure",
                "description": "Transfer to airport for your onward flight."
          }
    ],
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
    image: "/images/destinations/ladakh/zanskar-trek.avif",
    itinerary: [
          {
                "day": 1,
                "title": "Arrival in Leh",
                "description": "Rest and acclimatization in Leh."
          },
          {
                "day": 2,
                "title": "Drive to Lamayuru Monastery",
                "description": "Scenic drive past the Indus confluence to 11th-century Lamayuru Monastery."
          },
          {
                "day": 3,
                "title": "Lamayuru to Wanla",
                "description": "Cross Prinkiti La pass through yellow canyon gorges to Wanla."
          },
          {
                "day": 4,
                "title": "Wanla to Hinju",
                "description": "Gentle walk through traditional farming villages and willow banks."
          },
          {
                "day": 5,
                "title": "Hinju to Sumda Chenmo",
                "description": "Challenging ascent over Konzke La pass with grand mountain panoramas."
          },
          {
                "day": 6,
                "title": "Sumda Chenmo to Base Camp",
                "description": "Trek through rugged river valleys over Dungdung Chan La."
          },
          {
                "day": 7,
                "title": "Base Camp to Photoksar",
                "description": "Arrive at cliff-side Photoksar perched above green terraced barley fields."
          },
          {
                "day": 8,
                "title": "Cross Sengge La Pass",
                "description": "Ascend the mighty Sengge La (Lion Pass) into the heart of wild Zanskar."
          },
          {
                "day": 9,
                "title": "Lingshed Ancient Monastery",
                "description": "Descend to Lingshed amphitheater valley and visit its 1,000-year-old gompa."
          },
          {
                "day": 10,
                "title": "Lingshed to Hanumil",
                "description": "Climb over Hanuma La pass and descend through deep rock-cut canyons."
          },
          {
                "day": 11,
                "title": "Hanumil to Karsha & Padum",
                "description": "Walk through Karsha monastery to Padum, capital of Zanskar."
          },
          {
                "day": 12,
                "title": "Overland Drive to Leh",
                "description": "Scenic drive across Pensi La pass and Suru Valley back to Leh."
          }
    ],
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
    itinerary: [
          {
                "day": 1,
                "title": "Srinagar to Suru Valley Drive",
                "description": "Drive across Zoji La and Kargil to Panikhar under the Nun-Kun peaks."
          },
          {
                "day": 2,
                "title": "Panikhar to Denora",
                "description": "Begin trekking alongside glacial streams through pristine willow pastures."
          },
          {
                "day": 3,
                "title": "Denora to Glacier Camp",
                "description": "Hike through moraine valleys with up-close views of hanging icefalls."
          },
          {
                "day": 4,
                "title": "Cross Lomvilad Pass to Kaintal",
                "description": "Traverse snow bridges and cross Lomvilad Pass into the secret Warwan valley."
          },
          {
                "day": 5,
                "title": "Kaintal to Humpet Meadows",
                "description": "Trek through expansive, untouched wildflower meadows along the river."
          },
          {
                "day": 6,
                "title": "Humpet to Sukhnai Village",
                "description": "Reach Sukhnai, an ancient wooden village with traditional timber houses."
          },
          {
                "day": 7,
                "title": "Sukhnai to Basmina",
                "description": "Walk through golden fields and riverside trails to Basmina settlement."
          },
          {
                "day": 8,
                "title": "Basmina across Margan Pass",
                "description": "Cross Margan Pass into Kashmir with sweeping views of the Pir Panjal range."
          },
          {
                "day": 9,
                "title": "Drive to Srinagar",
                "description": "Drive through apple orchards and saffron fields back to Srinagar."
          }
    ],
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
    itinerary: [
          {
                "day": 1,
                "title": "Srinagar to Dawar via Razdan Pass",
                "description": "Climb Razdan Pass with views of Mount Harmukh, descending into hidden Gurez."
          },
          {
                "day": 2,
                "title": "Habba Khatoon Peak Base",
                "description": "Hike to the foot of pyramid-shaped Habba Khatoon and its crystal spring."
          },
          {
                "day": 3,
                "title": "Tulail Valley Riverside Camp",
                "description": "Trek along the turquoise Kishanganga River into Tulail valley."
          },
          {
                "day": 4,
                "title": "High Meadows of Pukhta",
                "description": "Ascend past shepherd hamlets into remote alpine meadows and tarns."
          },
          {
                "day": 5,
                "title": "Chakwali Border Village",
                "description": "Visit the northernmost inhabited border village and meet local Dardic families."
          },
          {
                "day": 6,
                "title": "Return Walk to Dawar",
                "description": "Sunset walk across Kishanganga suspension bridge with riverside campfire."
          },
          {
                "day": 7,
                "title": "Return Drive to Srinagar",
                "description": "Scenic return journey across Razdan Pass back to Srinagar."
          }
    ],
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
    image: "/images/destinations/kashmir/harmukh.jpeg",
    itinerary: [
          {
                "day": 1,
                "title": "Naranag Temple to Trunkhol",
                "description": "Drive to ancient Naranag ruins and climb pine forests to Trunkhol meadow."
          },
          {
                "day": 2,
                "title": "Trunkhol to Gangabal & Nundkol Lakes",
                "description": "Trek across rolling pastures to camp beside Nundkol under Mount Harmukh."
          },
          {
                "day": 3,
                "title": "Gangabal Lake Exploration",
                "description": "Relax by Gangabal Lake, renowned for clear waters and trout fishing."
          },
          {
                "day": 4,
                "title": "Harmukh Base Camp Excursion",
                "description": "Scramble up the moraine ridge towards Harmukh glaciers and icefalls."
          },
          {
                "day": 5,
                "title": "Koleksar Glacial Tarn Hike",
                "description": "Discover hidden glacial tarns tucked in rock amphitheatres behind Harmukh."
          },
          {
                "day": 6,
                "title": "Trunkhol Meadow Sunset",
                "description": "Gentle walk to Trunkhol for golden hour views over the Kashmir valley."
          },
          {
                "day": 7,
                "title": "Descent to Naranag & Srinagar",
                "description": "Descend through pine woods to Naranag and drive back to Srinagar."
          }
    ],
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
    image: "/images/destinations/kashmir/treak-days.jpeg",
    itinerary: [
          {
                "day": 1,
                "title": "Srinagar to Sonamarg Basecamp",
                "description": "Drive along Sindh River to Shitkadi camp near Sonamarg for orientation."
          },
          {
                "day": 2,
                "title": "Sonamarg to Nichnai",
                "description": "Climb through Table Top meadows and birch forests to Nichnai valley."
          },
          {
                "day": 3,
                "title": "Nichnai Pass to Vishansar Lake",
                "description": "Cross Nichnai Pass and descend to camp near turquoise Vishansar Lake."
          },
          {
                "day": 4,
                "title": "Gadsar Pass to Gadsar Lake",
                "description": "Climb past Kishansar Lake to Gadsar Pass, descending into wildflower meadows."
          },
          {
                "day": 5,
                "title": "Gadsar to Satsar Lakes",
                "description": "Traverse boulder trails to the seven interconnected alpine lakes of Satsar."
          },
          {
                "day": 6,
                "title": "Zaj Pass to Gangabal & Nundkol",
                "description": "Cross Zaj Pass for views of twin lakes under Mount Harmukh."
          },
          {
                "day": 7,
                "title": "Rest Day at Gangabal Lake",
                "description": "Relax by Gangabal Lake and take photography walks around Mount Harmukh."
          },
          {
                "day": 8,
                "title": "Descent to Naranag & Srinagar",
                "description": "Descend through Trunkhol pine forests to ancient Naranag and drive to Srinagar."
          }
    ],
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
    image: "/images/destinations/kashmir/pir-panjal.avif",
    itinerary: [
          {
                "day": 1,
                "title": "Srinagar to Dumail Camp",
                "description": "Drive to Sitharan and hike through virgin pine woods to Dumail."
          },
          {
                "day": 2,
                "title": "Dumail to Tosamaidan Meadow",
                "description": "Ascend to the vast alpine pasture of Tosamaidan, ringed by fir trees."
          },
          {
                "day": 3,
                "title": "Tosamaidan to Pehjan Meadow",
                "description": "Trek across rolling green hills with expansive Pir Panjal panoramas."
          },
          {
                "day": 4,
                "title": "Durgin Alpine Tarns",
                "description": "Explore hidden glacial tarns and shepherd trails around Durgin meadow."
          },
          {
                "day": 5,
                "title": "Panoramic Ridge Walk",
                "description": "Walk scenic alpine ridges with views stretching across the Kashmir valley."
          },
          {
                "day": 6,
                "title": "Descent to Drang River",
                "description": "Descend through ancient pine forests to camp beside the rushing Drang stream."
          },
          {
                "day": 7,
                "title": "Return Drive to Srinagar",
                "description": "Morning nature walk and private transfer back to Srinagar."
          }
    ],
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
    itinerary: [
          {
                "day": 1,
                "title": "Drive to Yuksom",
                "description": "Scenic mountain drive through Teesta valley to historic Yuksom in Sikkim."
          },
          {
                "day": 2,
                "title": "Yuksom to Tshoka Rainforests",
                "description": "Trek across suspension bridges through dense subtropical rainforests to Tshoka."
          },
          {
                "day": 3,
                "title": "Tshoka to Dzongri Ridge",
                "description": "Climb through flowering rhododendron forests of Phedang to Dzongri ridge."
          },
          {
                "day": 4,
                "title": "Dzongri Top Sunrise",
                "description": "Dawn hike to Dzongri Top for a 360-degree panorama of Mount Kangchenjunga."
          },
          {
                "day": 5,
                "title": "Dzongri to Thansing",
                "description": "Descend to Kokchurang river gorge and climb into the alpine valley of Thansing."
          },
          {
                "day": 6,
                "title": "Thansing to Lamuney Basecamp",
                "description": "Gentle walk up the valley beside moraines to high camp at Lamuney."
          },
          {
                "day": 7,
                "title": "Goecha La Viewpoint Push",
                "description": "Early morning push past Samiti Lake to Goecha La for an eye-level view of Kangchenjunga."
          },
          {
                "day": 8,
                "title": "Kokchurang to Tshoka",
                "description": "Scenic return trek through rhododendron forests back to Tshoka."
          },
          {
                "day": 9,
                "title": "Descent to Yuksom",
                "description": "Descend through rainforest trails back to Yuksom for a celebration dinner."
          },
          {
                "day": 10,
                "title": "Contingency & Monastery Walk",
                "description": "Buffer day for weather flexibility and walk to historic Dubdi Monastery."
          },
          {
                "day": 11,
                "title": "Departure Drive",
                "description": "Drive down to Bagdogra Airport or NJP station for your journey home."
          }
    ],
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
    itinerary: [
          {
                "day": 1,
                "title": "Drive to Yuksom",
                "description": "Scenic drive through tea gardens and Sikkim hills to trailhead Yuksom."
          },
          {
                "day": 2,
                "title": "Yuksom to Sachen Gorges",
                "description": "Enter Khangchendzonga National Park, crossing suspension bridges to Sachen."
          },
          {
                "day": 3,
                "title": "Sachen to Tshoka Settlement",
                "description": "Climb past Bakhim to the mountain village of Tshoka facing Mount Pandim."
          },
          {
                "day": 4,
                "title": "Tshoka to Dzongri Meadow",
                "description": "Steep climb through red rhododendrons of Phedang to windswept Dzongri."
          },
          {
                "day": 5,
                "title": "Dzongri Top Sunrise Panorama",
                "description": "Witness golden sunrise light striking Kangchenjunga, Kabru, and Pandim peaks."
          },
          {
                "day": 6,
                "title": "Dzongri to Tshoka Descent",
                "description": "Descend along the mountain ridge back to Tshoka for a relaxed afternoon."
          },
          {
                "day": 7,
                "title": "Tshoka to Yuksom Return",
                "description": "Descend through lush green forests to Yuksom and enjoy a warm celebration."
          },
          {
                "day": 8,
                "title": "Departure to Bagdogra",
                "description": "Transfer from Yuksom to Bagdogra Airport or NJP station."
          }
    ],
  },
];

export function getPackageBySlug(slug: string): PackageItem | undefined {
  return packagesData.find((p) => p.slug === slug);
}

export function getPackagesByCategory(category: PackageItem["category"]): PackageItem[] {
  return packagesData.filter((p) => p.category === category);
}
