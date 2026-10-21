import type { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    slug: "kashmir",
    name: "Kashmir",
    country: "India",
    tagline: "The valley that poets couldn't stop writing about",
    shortDescription:
      "Shikara rides on Dal Lake, wildflower meadows in Gulmarg, and Mughal gardens that have kept travellers speechless for four centuries.",
    description: [
      "Kashmir is the kind of place that ruins other destinations for you. Dal Lake mirrors the Zabarwan mountains so perfectly that shikara boats seem to drift through the sky. Mornings begin with floating vegetable vendors; evenings end with saffron tea on a houseboat deck.",
      "In winter, Gulmarg turns into one of Asia's finest ski resorts, powdery bowls, pine forests, and the Gulmarg Gondola hauling you to 3,980 metres. Come spring, the valley erupts into tulips and almond blossoms, and the meadows of Pahalgam and Sonamarg turn a green so vivid it looks colour-graded.",
      "We grew up here. We know which houseboat owner makes the best noon-chai, which orchard lets you pick cherries in June, and which patch of Betaab Valley still has zero crowds at sunset. That's the version of Kashmir we'll show you.",
    ],
    image: "/images/destinations/kashmir/hero.jpg",
    imageAlt: "Wooden shikara boats resting on Dal Lake at golden hour, Srinagar, Kashmir",
    gallery: [
      {
        src: "/images/destinations/kashmir/gulmarg.jpg",
        alt: "Snow-covered pine slopes of Gulmarg under a clear winter sky",
        caption:
          "Gulmarg in January, the pine slopes above town under a fresh dump. By noon the same lane is full of kids on sleds and the smell of kahwa from every kitchen.",
      },
      {
        src: "/images/destinations/kashmir/pahalgam.jpg",
        alt: "The Lidder river flowing through green meadows in Pahalgam",
        caption:
          "The Lidder river cutting through the Pahalgam meadows in June. Shepherds move their flocks along this water all summer; our drivers know which bend has the best light, by month.",
      },
      {
        src: "/images/destinations/kashmir/gardens.jpg",
        alt: "Tulips in full bloom at the Indira Gandhi Tulip Garden, Srinagar",
        caption:
          "Late March at the Indira Gandhi Tulip Garden, Srinagar, Asia's largest tulip garden opens for roughly a month, and the whole city plans around the bloom.",
      },
      {
        src: "/images/destinations/kashmir/sonamarg.jpg",
        alt: "Wide meadows and snow ridges of Sonamarg, the meadow of gold",
        caption:
          "Sonamarg in high summer, 'the meadow of gold', and the trailhead for the great-lakes treks. Most visitors day-trip it; we think it deserves a night.",
      },
    ],
    story: {
      title: "Four postcards, one valley",
      intro:
        "Kashmir is small enough to cross in a morning and deep enough to fill a week. These are the four frames our travellers send home most often.",
      outro:
        "One valley, four seasons, endless variations. Tell us when you're coming and we'll tell you what it looks like that week.",
    },
    startingPrice: 32999,
    bestTime: "March – October (ski season: December – March)",
    idealDuration: "5 – 7 days",
    travelStyles: ["honeymoon", "family", "ski", "adventure", "leisure", "culture"],
    highlights: [
      "Overnight stay on a cedar-wood Dal Lake houseboat",
      "Shikara ride at sunrise with floating-market stop",
      "Gulmarg Gondola, one of the highest cable cars in the world",
      "Tulip Garden and Mughal Gardens in full spring bloom",
      "Betaab Valley and Aru meadows around Pahalgam",
      "Home-cooked Kashmiri wazwan dinner with a local family",
    ],
    popular: true,
    seasons: [
      {
        months: "March – June",
        label: "Spring & early summer",
        verdict: "Excellent",
        summary:
          "The valley's best stretch: almond blossoms in late March, the Tulip Garden's fortnight of colour in early April, and meadows at their greenest in May and June. Days run 15–30°C, and Gulmarg still holds snow for gondola rides into April.",
      },
      {
        months: "July – August",
        label: "Monsoon edge & yatra season",
        verdict: "Good",
        summary:
          "Kashmir sits at the monsoon's edge, so rain arrives in short bursts rather than week-long dumps and the meadows stay lush. July and August also mean Amarnath yatra traffic through Pahalgam and Sonamarg, book hotels early.",
      },
      {
        months: "September – November",
        label: "Autumn",
        verdict: "Excellent",
        summary:
          "The connoisseur's season: settled skies, chinar trees turning crimson around Dal Lake and Pahalgam, and the saffron harvest in Pampore from late October. Days stay a mild 15–22°C and crowds thin out after Diwali.",
      },
      {
        months: "December – February",
        label: "Winter & ski season",
        verdict: "Good",
        summary:
          "Gulmarg takes over, deep January powder and the Apharwat bowl make it one of Asia's best ski weeks. The valley itself goes quiet: Srinagar hovers around freezing, the edges of Dal Lake ice over, and the Sonamarg road stays shut.",
      },
    ],
    monthScores: [2, 2, 2, 3, 3, 3, 2, 2, 3, 3, 2, 2],
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    country: "India",
    tagline: "Geographical Location, Altitude and Major Peaks",
    shortDescription:
      "Ladakh lies in the northern part of the Indian subcontinent, within the Trans-Himalayan region. Renowned for rugged mountain ranges, 7,000 m peaks, glacial lakes, and cold-desert landscapes.",
    description: [
      "Ladakh lies in the northern part of the Indian subcontinent, within the Trans-Himalayan region. It is renowned for its rugged mountain ranges, vast high-altitude plateaus, remote valleys, glacial lakes, and dramatic cold-desert landscapes. The region is home to numerous peaks exceeding 7,000 metres, making it a significant destination for high-altitude mountaineering and Himalayan expeditions.",
      "Altitude and Topography: Ladakh's terrain ranges from approximately 2,500 metres to over 7,000 metres above sea level. Leh, the principal town, lies at an elevation of approximately 3,500 metres. The region's extreme altitude, arid climate, sparse vegetation, and rugged topography create challenging conditions for mountaineering, trekking, hiking, and expedition climbing.",
      "Major Mountain Ranges and Peaks: Ladakh encompasses several prominent mountain systems, including the Karakoram, Ladakh Range, Zanskar Range, and parts of the Greater Himalaya. Major peaks include Saltoro Kangri (7,742 m) in the Saltoro Range, Saser Kangri I (7,672 m) in the eastern Karakoram, Nun (7,135 m) and Kun (7,077 m) of the Nun–Kun massif in the Suru Valley, Kang Yatse II (approx. 6,250 m) in the Markha Valley, and Stok Kangri (6,153 m) in the Stok Range near Leh.",
      "Rivers, Valleys and High-Altitude Lakes: The Indus River flows through Ladakh, shaping its principal valleys and settlements. Other notable geographical features include the Zanskar Valley, Nubra Valley, Markha Valley, and the Changthang Plateau. High-altitude lakes such as Pangong Tso and Tso Moriri add to the region's distinctive mountain environment.",
      "Mountaineering and Adventure Significance: With its concentration of high mountain summits exceeding 7,000 metres, Ladakh offers exceptional terrain for mountaineering, technical climbing, high-altitude trekking, and remote Himalayan expeditions. The region's high elevations require careful acclimatisation, appropriate expedition planning, and awareness of altitude-related risks.",
    ],
    image: "/images/destinations/ladakh/hero.jpg",
    imageAlt: "Pangong Lake in Ladakh with brilliant blue water and barren mountains behind",
    gallery: [
      {
        src: "/images/destinations/ladakh/monastery.jpg",
        alt: "Thiksey Monastery stacked on a rocky hillside above the Indus Valley",
        caption:
          "07:00 prayers at Thiksey, stacked on its hillside above the Indus. The morning room smells of butter lamps, and the abbot pours tea for whoever is up early enough.",
      },
      {
        src: "/images/destinations/ladakh/nubra.jpg",
        alt: "Sand dunes of Hunder in Nubra Valley, Ladakh",
        caption:
          "The sand dunes of Hunder, on the far side of Khardung La, double-humped camels on a cold desert 3,000 m above the sea. Nobody believes the photos until they take their own.",
      },
      {
        src: "/images/destinations/ladakh/hero.jpg",
        alt: "The shoreline of Pangong Lake at midday",
        caption:
          "Pangong Tso at midday, 134 km long, brackish enough to freeze each winter, and a different colour every hour. Our drivers still argue about which hour is best.",
      },
    ],
    story: {
      title: "Trans-Himalayan summits and high passes",
      intro:
        "From Saltoro Kangri (7,742 m) to Pangong Tso and the Indus Valley, Ladakh offers terrain unmatched anywhere on the subcontinent.",
      outro:
        "Every expedition starts with careful acclimatisation in Leh at 3,500 m. Let our high-altitude mountain leaders plan your climb.",
    },
    startingPrice: 52999,
    bestTime: "May – September",
    idealDuration: "6 – 9 days",
    travelStyles: ["adventure", "bike", "culture", "family", "trekking"],
    highlights: [
      "Saltoro Kangri (7,742 m) & Saser Kangri I (7,672 m) Karakoram peaks",
      "Nun (7,135 m) and Kun (7,077 m) Himalayan massifs in Suru Valley",
      "Pangong Tso (134 km) and Tso Moriri high-altitude lakes",
      "Khardung La Pass (17,582 ft) gateway to Nubra Valley",
      "Markha Valley & Kang Yatse II (6,250 m) mountaineering route",
      "Zanskar Valley, Changthang Plateau & Indus River circuits",
    ],
    popular: true,
    seasons: [
      {
        months: "April – June",
        label: "Opening season",
        verdict: "Shoulder",
        summary:
          "The roads wake up in stages, Srinagar–Leh first, Manali–Leh by late May, and Pangong usually reachable from mid-April once Chang La is cleared. Nights still fall below freezing and the passes carry leftover ice, but you'll have the lakes almost to yourself.",
      },
      {
        months: "July – August",
        label: "Peak summer",
        verdict: "Excellent",
        summary:
          "Ladakh's short, glorious prime: 20–25°C days, every pass and lake open, Tso Moriri, the Wari La route, the full Manali circuit, and festival season begins. Also the busiest two months; Pangong camps and Leh hotels book out weeks ahead.",
      },
      {
        months: "September – October",
        label: "Autumn",
        verdict: "Good",
        summary:
          "Sharp golden light, empty roads and stable weather through mid-September. By October, nights plunge past -10°C, homestays start shutting and the first snow closes the higher passes, go in the first half of the window.",
      },
      {
        months: "November – March",
        label: "Deep winter",
        verdict: "Quiet",
        summary:
          "Leh is reachable by flight and the frozen-Zanskar Chadar trek runs in January and February, but the roads to Nubra and Pangong close and temperatures sit between -15 and -25°C. Strictly for the hardened few.",
      },
    ],
    monthScores: [0, 0, 0, 1, 2, 3, 3, 3, 3, 1, 1, 0],
  },
  {
    slug: "sikkim",
    name: "Sikkim",
    country: "India",
    tagline: "The Home of Kangchenjunga, the World's Third-Highest Mountain",
    shortDescription:
      "Located in the Eastern Himalayas, Sikkim is a spectacular destination for Himalayan trekking, mountaineering, and high-altitude hiking beneath the magnificent Kangchenjunga massif.",
    description: [
      "Located in the Eastern Himalayas of northeastern India, Sikkim is a spectacular destination for Himalayan trekking, mountaineering, high-altitude hiking, and mountain exploration. Home to the magnificent Kangchenjunga massif (8,586 m), the world's third-highest mountain, the region features snow-covered peaks, glaciers, alpine lakes, rugged mountain ranges, and breathtaking valleys. Sikkim shares international borders with Nepal, Bhutan, and Tibet (China), while West Bengal lies to its south.",
      "Key adventure regions include Yuksom, Dzongri, Goechala, Lachen, Lachung, and Yumthang Valley, offering remarkable mountain landscapes and trekking opportunities. The region's high-altitude terrain, seasonal snowfall, and rich biodiversity make it a premier Himalayan adventure destination.",
      "From the historic first capital of Yuksom to the high-altitude vantage points of Dzongri (4,030 m) and Goechala Pass (4,940 m), trekkers get up-close views of Kangchenjunga's southeast face. North Sikkim reveals the raw, pristine beauty of Lachen and Lachung, leading to the Valley of Flowers at Yumthang, Zero Point, and the sacred sacred glacial waters of Gurudongmar Lake.",
      "Alpine Club India provides certified high-altitude mountain leaders, comprehensive trekking logistics, inner-line permit assistance, and eco-conscious expedition support across Sikkim's iconic trails.",
    ],
    image: "/images/destinations/sikkim/hero.jpg",
    imageAlt: "Kangchenjunga peak rising above cloud-filled valleys in Sikkim",
    gallery: [
      {
        src: "/images/destinations/sikkim/hero.jpg",
        alt: "Snow-capped summit of Kangchenjunga massif in morning alpine glow",
        caption:
          "Kangchenjunga (8,586 m) glowing gold at sunrise. Revered as a sacred peak by locals, it commands the entire skyline of western Sikkim.",
      },
      {
        src: "/images/destinations/sikkim/kangchenjunga.jpg",
        alt: "Alpine ridge trail leading towards Dzongri and Goechala",
        caption:
          "The Goechala trail winds through ancient rhododendron forests and sub-alpine meadows before reaching rocky glacial moraines at 4,940 m.",
      },
      {
        src: "/images/destinations/sikkim/valley.jpg",
        alt: "Yumthang Valley of Flowers with mountain streams and peaks",
        caption:
          "Yumthang Valley in northern Sikkim, where alpine streams cut through pine forests beneath jagged peaks near Lachung.",
      },
    ],
    story: {
      title: "Footsteps toward Kangchenjunga",
      intro:
        "Starting from Yuksom, the trail ascends through dense mossy forests to the ridge at Dzongri and the high pass at Goechala.",
      outro:
        "Trek with licensed mountain guides who respect local sacred mountain traditions and high-altitude safety.",
    },
    startingPrice: 38999,
    bestTime: "March – May & October – December",
    idealDuration: "6 – 8 days",
    travelStyles: ["trekking", "adventure", "culture", "leisure"],
    highlights: [
      "Kangchenjunga massif (8,586 m) — the world's third-highest summit",
      "Goechala Pass trek (4,940 m) with front-row mountain views",
      "Yuksom historic trailhead and Dzongri ridge viewpoint (4,030 m)",
      "North Sikkim: Lachen, Lachung, and Yumthang Valley of Flowers",
      "High-altitude glacial lakes: Gurudongmar (5,150 m) and Tso Lhamo",
      "Ancient Buddhist monasteries: Pemayangtse, Rumtek, and Tashiding",
    ],
    popular: true,
    seasons: [
      {
        months: "March – May",
        label: "Spring Rhododendron Bloom",
        verdict: "Excellent",
        summary:
          "Rhododendrons and orchids carpet the lower trails in brilliant red and pink. Moderate daytime temperatures (12–18°C) make it ideal for the Goechala and Dzongri treks with crystal clear morning views of Kangchenjunga.",
      },
      {
        months: "June – August",
        label: "Monsoon Rains",
        verdict: "Quiet",
        summary:
          "Heavy Eastern Himalayan monsoon rains bring lush greenery and roaring waterfalls, but trails can be muddy and mountain passes slippery. Best suited for cultural visits and monastery tours.",
      },
      {
        months: "September – November",
        label: "Autumn Peak Season",
        verdict: "Excellent",
        summary:
          "Crisp alpine air, deep blue skies, and the sharpest panoramic views of Kangchenjunga all year. The premier window for high-altitude trekking and mountaineering expeditions.",
      },
      {
        months: "December – February",
        label: "Winter Snows",
        verdict: "Good",
        summary:
          "Sub-zero temperatures and heavy snowfall in North Sikkim and high passes. Yumthang and Dzongri turn into winter wonderlands. Bring insulated alpine layers.",
      },
    ],
    monthScores: [1, 2, 3, 3, 3, 1, 0, 1, 3, 3, 2, 2],
  },
];

export const getDestinationBySlug = (slug: string): Destination | undefined =>
  destinations.find((d) => d.slug === slug);

export const popularDestinations = destinations.filter((d) => d.popular);
