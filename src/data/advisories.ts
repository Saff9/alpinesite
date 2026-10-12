export interface AdvisoryItem {
  slug: string;
  title: string;
  category: "Travel Advisories" | "Weather Update" | "When to Visit Gulmarg";
  subtitle: string;
  updatedAt: string;
  coverImage: string;
  coverImageAlt: string;
  summary: string;
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
}

export const advisories: AdvisoryItem[] = [
  // 1. Travel Advisories
  {
    slug: "high-altitude-safety",
    title: "High Altitude & Acclimatisation",
    category: "Travel Advisories",
    subtitle: "Essential elevation guidelines for Gulmarg Phase 2 and Ladakh passes",
    updatedAt: "Updated Weekly",
    coverImage: "/images/ski/apharwat-peaks.jpg",
    coverImageAlt: "High altitude snowy peaks of Apharwat above Gulmarg",
    summary:
      "Travellers ascending above 3,000 metres in Gulmarg (Apharwat 3,980 m) or Ladakh (Leh 3,500 m) should allow 24 to 48 hours of light activity upon arrival. Hydrate consistently, avoid rapid ascents on Day 1, and inform your guide immediately if you experience headache or dizziness.",
    metrics: [
      { label: "Gulmarg Base", value: "2,650 m" },
      { label: "Gondola Phase 2", value: "3,980 m" },
      { label: "Leh Town", value: "3,500 m" },
      { label: "Rest Window", value: "24 to 48 hrs" },
    ],
    bulletPoints: [
      "Drink 3 to 4 litres of water and warm kahwa daily at altitude.",
      "Avoid alcohol and heavy exertion during your first 24 hours.",
      "All Alpine Club Ladakh SUVs carry emergency bottled oxygen.",
    ],
  },
  {
    slug: "permits-and-guidelines",
    title: "Permits & Travel Guidelines",
    category: "Travel Advisories",
    subtitle: "Inner Line Permits, SIM card rules, and local documentation",
    updatedAt: "Current Season",
    coverImage: "/images/tours/ladakh-8-day-tour/monastery.jpg",
    coverImageAlt: "Prayer flags and monastery overlooking the Ladakh valley",
    summary:
      "Only Indian postpaid SIM cards (Airtel, Jio, and BSNL) function in Jammu, Kashmir, and Ladakh. Inner Line Permits are mandatory for Nubra Valley, Pangong Tso, Turtuk, and Tso Moriri, and are arranged in advance by our operations desk.",
    metrics: [
      { label: "SIM Support", value: "Postpaid Only" },
      { label: "Networks", value: "Jio / Airtel" },
      { label: "Ladakh Permits", value: "Included" },
      { label: "ID Required", value: "Aadhaar / Passport" },
    ],
    bulletPoints: [
      "Carry 3 physical copies of your government photo ID.",
      "Prepaid SIM cards from outside J&K and Ladakh do not connect.",
      "Gondola tickets should be booked 2 to 3 weeks ahead in peak months.",
    ],
  },
  {
    slug: "mountain-road-advisory",
    title: "Mountain Road & Pass Advisory",
    category: "Travel Advisories",
    subtitle: "Seasonal road status for Tangmarg, Sonamarg, Zojila, and Khardung La",
    updatedAt: "Daily Morning Check",
    coverImage: "/images/tours/ladakh-8-day-tour/nubra.jpg",
    coverImageAlt: "Mountain highway winding through high Himalayan passes",
    summary:
      "During winter snowfalls (December to March), only 4x4 or chained vehicles are permitted between Tangmarg and Gulmarg. High passes in Ladakh operate on scheduled morning convoys depending on overnight snowfall and road clearance.",
    metrics: [
      { label: "Tangmarg to Gulmarg", value: "Chained 4x4 in Snow" },
      { label: "Srinagar to Leh", value: "May to November" },
      { label: "Khardung La", value: "Open Year-Round*" },
      { label: "Check-in Window", value: "Before 9:00 AM" },
    ],
    bulletPoints: [
      "We automatically switch to snow-chained vehicles during winter alerts.",
      "Morning departures before 8:30 AM avoid afternoon snowmelt slush.",
      "Buffer days are recommended for winter flights out of Srinagar and Leh.",
    ],
  },

  // 2. Weather Updates (3 random weather-related pages with concise weather data)
  {
    slug: "gulmarg-snow-forecast",
    title: "Gulmarg Snow & Wind Forecast",
    category: "Weather Update",
    subtitle: "Live snow base, summit wind speeds, and Gondola conditions",
    updatedAt: "Today · 08:00 AM IST",
    coverImage: "/images/tours/gulmarg-ski-adventure/cover.jpg",
    coverImageAlt: "Fresh snow across Gulmarg ski slopes and pine trees",
    summary:
      "Fresh western disturbance snowfall has refreshed the upper Apharwat bowl with dry powder. Winds remain calm to moderate in the morning hours, providing clear visibility for both Phase 1 and Phase 2 Gondola operations.",
    metrics: [
      { label: "Base Temp (2,650 m)", value: "-3°C / 27°F" },
      { label: "Summit Temp (3,980 m)", value: "-11°C / 12°F" },
      { label: "Wind Speed", value: "14 km/h NW" },
      { label: "Fresh Snow (24h)", value: "18 cm Powder" },
    ],
    bulletPoints: [
      "Morning visibility: Clear skies until 1:30 PM.",
      "Gondola status: Phase 1 & Phase 2 operating on schedule.",
      "Recommended gear: Mid-weight thermal layer and windproof shell.",
    ],
  },
  {
    slug: "kashmir-valley-weather",
    title: "Kashmir Valley Weather Update",
    category: "Weather Update",
    subtitle: "Current temperatures and sky conditions for Srinagar, Pahalgam, and Sonamarg",
    updatedAt: "Today · 08:30 AM IST",
    coverImage: "/images/tours/kashmir-7-day-tour/cover.jpg",
    coverImageAlt: "Calm waters of Dal Lake in Srinagar under morning light",
    summary:
      "Crisp mountain mornings across Srinagar and Pahalgam with bright afternoon sunshine. Dal Lake shikara rides have calm water conditions, while Sonamarg remains cool with light evening breezes.",
    metrics: [
      { label: "Srinagar", value: "14°C Day / 4°C Night" },
      { label: "Pahalgam", value: "11°C Day / 1°C Night" },
      { label: "Sonamarg", value: "8°C Day / -2°C Night" },
      { label: "Precipitation", value: "10% Chance" },
    ],
    bulletPoints: [
      "Golden hour on Dal Lake: 5:45 PM to 6:30 PM.",
      "Highway status: Srinagar to Pahalgam and Tangmarg fully clear.",
      "Pack a warm fleece or down jacket for evening houseboat stays.",
    ],
  },
  {
    slug: "ladakh-pass-weather",
    title: "Ladakh High Pass Weather",
    category: "Weather Update",
    subtitle: "Temperature, UV index, and wind conditions across Leh, Nubra, and Pangong",
    updatedAt: "Today · 09:00 AM IST",
    coverImage: "/images/tours/ladakh-8-day-tour/cover.jpg",
    coverImageAlt: "Clear blue skies above Pangong Lake in Ladakh",
    summary:
      "High-altitude sunshine dominates Leh and Nubra Valley with low humidity and strong afternoon UV levels. Night temperatures drop sharply along the Pangong shoreline, requiring full thermal layers after sunset.",
    metrics: [
      { label: "Leh Town", value: "12°C Day / -1°C Night" },
      { label: "Khardung La Top", value: "-8°C / Brisk Wind" },
      { label: "Pangong Tso", value: "7°C Day / -5°C Night" },
      { label: "UV Index", value: "High (SPF 50+)" },
    ],
    bulletPoints: [
      "Skies are clear for stargazing at Nubra and Pangong camps.",
      "Cross Khardung La and Chang La before noon for calmest winds.",
      "Polarised sunglasses and lip balm are essential at high passes.",
    ],
  },

  // 3. When to Visit Gulmarg (3 seasonal pages with concise data)
  {
    slug: "gulmarg-winter-powder",
    title: "Winter Powder Season (Dec to Mar)",
    category: "When to Visit Gulmarg",
    subtitle: "Deep Himalayan snow for skiing, snowboarding, and winter wonderland stays",
    updatedAt: "Seasonal Guide",
    coverImage: "/images/tours/gulmarg-ski-adventure/slopes.jpg",
    coverImageAlt: "Skiers descending deep winter powder in Gulmarg",
    summary:
      "Mid-December through March is Gulmarg's signature snow season. Heavy western disturbances blanket the meadow and Apharwat peak in metres of dry powder, making it the premier window for ski expeditions, Gondola snow views, and cosy heated chalet stays.",
    metrics: [
      { label: "Best Months", value: "Jan & Feb (Peak Snow)" },
      { label: "Avg Temperature", value: "-2°C to -10°C" },
      { label: "Snow Depth", value: "2 m to 5 m" },
      { label: "Best For", value: "Skiing & Snow Play" },
    ],
    bulletPoints: [
      "January and February deliver the deepest off-piste powder bowls.",
      "March offers sunnier spring skiing and longer daylight hours.",
      "Book slope-side hotels at least 4 to 6 weeks in advance.",
    ],
  },
  {
    slug: "gulmarg-spring-summer",
    title: "Spring & Summer Meadows (Apr to Aug)",
    category: "When to Visit Gulmarg",
    subtitle: "Wildflower meadows, cool pine forests, and pleasant family sightseeing",
    updatedAt: "Seasonal Guide",
    coverImage: "/images/tours/kashmir-7-day-tour/gardens.jpg",
    coverImageAlt: "Green alpine meadows and blooming flowers in spring and summer",
    summary:
      "From April to August, Gulmarg transforms into the 'Meadow of Flowers'. While the Indian plains experience summer heat, Gulmarg stays refreshingly cool with green golf courses, alpine lupines, forest trails, and lingering snow patches at Gondola Phase 2.",
    metrics: [
      { label: "Best Months", value: "April to July" },
      { label: "Avg Temperature", value: "12°C to 22°C" },
      { label: "Phase 2 Snow", value: "Until Late June" },
      { label: "Best For", value: "Families & Couples" },
    ],
    bulletPoints: [
      "Combine April visits with Srinagar's blooming Tulip Garden.",
      "Ideal weather for pony rides, meadow walks, and golfing at 2,650 m.",
      "Light woollens are sufficient for daytime; carry a jacket for Phase 2.",
    ],
  },
  {
    slug: "gulmarg-autumn-gold",
    title: "Autumn Chinar Season (Sep to Nov)",
    category: "When to Visit Gulmarg",
    subtitle: "Crisp skies, golden valleys, and peaceful uncrowded mountain trails",
    updatedAt: "Seasonal Guide",
    coverImage: "/images/tours/kashmir-honeymoon/sonamarg.jpg",
    coverImageAlt: "Golden autumn foliage in the Kashmir mountains",
    summary:
      "September through November brings crystal-clear mountain visibility, calm winds, and golden Chinar foliage across the valley approaches. It is the quietest and most photogenic window for couples, photographers, and slow travellers before winter snow arrives.",
    metrics: [
      { label: "Best Months", value: "Oct & Early Nov" },
      { label: "Avg Temperature", value: "4°C to 15°C" },
      { label: "Crowd Level", value: "Low & Peaceful" },
      { label: "Best For", value: "Photography & Quiet" },
    ],
    bulletPoints: [
      "October offers the sharpest panoramic views of Nanga Parbat.",
      "Saffron harvest in Pampore peaks between late October and early November.",
      "First light dustings of snow often appear on Apharwat by mid-November.",
    ],
  },
];

export function getAdvisoryBySlug(slug: string): AdvisoryItem | undefined {
  return advisories.find((item) => item.slug === slug);
}
