import type { Tour } from "@/types";

export const tours: Tour[] = [
  {
    slug: "kashmir-7-day-tour",
    title: "Kashmir Valley Explorer",
    destinationSlug: "kashmir",
    destinationName: "Kashmir",
    durationDays: 7,
    durationNights: 6,
    price: 32999,
    originalPrice: 38999,
    rating: 4.8,
    reviewsCount: 412,
    shortDescription:
      "Srinagar's lake life, Gulmarg's meadows, Pahalgam's valleys and Sonamarg's glaciers — the classic Kashmir loop, done properly.",
    overview: [
      "This is the Kashmir trip we'd design for our own families. You spend two nights on a cedar-wood houseboat on Dal Lake — not a floating hotel, but one with a history, a boatman named after a Mughal emperor, and morning chai served as the mist lifts off the water.",
      "From Srinagar you rise into the hills: Gulmarg for the gondola and meadow walks, Pahalgam for Betaab Valley and trout rivers, and Sonamarg for the Thajiwas glacier trek. Between them: saffron fields, Awantipora ruins, and a home-cooked wazwan dinner in a Srinagar family home.",
      "Private cab throughout, hand-picked stays with valley views, and a driver-guide who knows which viewpoint has the washroom and which one has the view. Most travellers book this as their first Kashmir trip — many come back for the ski version.",
    ],
    highlights: [
      "Two nights on a heritage Dal Lake houseboat",
      "Sunrise shikara ride with floating market stop",
      "Gulmarg Gondola to Phase 2 — 3,980 m",
      "Betaab & Aru Valley day trip from Pahalgam",
      "Thajiwas glacier walk in Sonamarg",
      "Wazwan dinner with a Srinagar family",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Srinagar · houseboat welcome",
        description:
          "We pick you up from Srinagar airport and drive straight to the boulevard. Check into your Dal Lake houseboat, take an evening shikara ride past Nehru Park and the char chinar, and end with kahwa on the deck as the mountains go pink.",
        meals: "Dinner",
        stay: "Dal Lake heritage houseboat",
      },
      {
        day: 2,
        title: "Srinagar — Mughal gardens & old city",
        description:
          "Morning at Nishat and Shalimar Bagh while the fountains are still on, the Tulip Garden in season (late March–April), and a walk through the walnut-wood lanes of the old city. Evening: wazwan dinner at a family home — rista, gushtaba and all seventeen courses if you can keep up.",
        meals: "Breakfast, dinner",
        stay: "Dal Lake heritage houseboat",
      },
      {
        day: 3,
        title: "Srinagar → Gulmarg",
        description:
          "A 2-hour drive with a stop at Tangmarg's apple orchards. In Gulmarg, ride the Gondola to Kongdoori and Apharwat — carry snow jackets even in June. Sled rides, meadow photo stops, and hot maggi at 12,000 ft that inexplicably tastes better than any maggi at sea level.",
        meals: "Breakfast, dinner",
        stay: "Gulmarg valley-view hotel",
      },
      {
        day: 4,
        title: "Gulmarg → Pahalgam",
        description:
          "Descend to the Lidder valley. En route: the ruins of Avantipora and a saffron field stop at Pampore if the season's right. Reach Pahalgam by afternoon for a riverside walk and optional trout-farm visit.",
        meals: "Breakfast, dinner",
        stay: "Pahalgam riverside resort",
      },
      {
        day: 5,
        title: "Betaab & Aru Valleys",
        description:
          "Local-pony permits and gypsy rides to Betaab Valley — where a 90s Bollywood movie crew decided heaven needed a set — and Aru's pine meadows. Optional rafting on the Lidder for the brave.",
        meals: "Breakfast, dinner",
        stay: "Pahalgam riverside resort",
      },
      {
        day: 6,
        title: "Pahalgam → Sonamarg → Srinagar",
        description:
          "Drive the Sindh valley to Sonamarg, the 'meadow of gold'. Walk or pony up to Thajiwas glacier through hamlets and wildflower slopes. Return to Srinagar by evening for last-minute pashmina shopping with our trusted dealer — no-pressure guarantee.",
        meals: "Breakfast, dinner",
        stay: "Srinagar boutique hotel",
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Breakfast and airport transfer with a stop for lavasa bread and bakery bun if your flight is late enough. Leave with your camera roll full and a promise to come back for Gulmarg's ski season.",
        meals: "Breakfast",
      },
    ],
    included: [
      "6 nights in hand-picked stays (2 nights houseboat)",
      "Daily breakfast and dinner",
      "Private air-conditioned cab with driver-guide",
      "Shikara ride on Dal Lake",
      "Gulmarg Gondola Phase 1 & 2 tickets",
      "All permits, tolls, parking and taxes",
      "Wazwan family-dinner experience",
      "Airport pickups and drops",
    ],
    excluded: [
      "Airfare / train to Srinagar",
      "Lunches and personal snacks",
      "Pony rides and sledging charges",
      "River rafting and other optional activities",
      "Travel insurance",
      "Anything not listed under inclusions",
    ],
    coverImage: "/images/tours/kashmir-7-day-tour/cover.jpg",
    coverImageAlt: "Shikara boats on Dal Lake at golden hour, Srinagar",
    gallery: [
      {
        src: "/images/tours/kashmir-7-day-tour/sonamarg.jpg",
        alt: "Thajiwas glacier above the Sonamarg meadows",
      },
      {
        src: "/images/tours/kashmir-7-day-tour/gardens.jpg",
        alt: "Tulips blooming in Srinagar's famous tulip garden",
      },
      {
        src: "/images/tours/kashmir-7-day-tour/pahalgam.jpg",
        alt: "The Lidder river rushing through Pahalgam valley",
      },
    ],
    travelStyles: ["family", "honeymoon", "leisure"],
    groupSize: "Private — 2 to 12 travellers",
    featured: true,
    badge: "Best Seller",
    faqs: [
      {
        question: "Is Kashmir safe for tourists?",
        answer:
          "Yes. The tourist circuit — Srinagar, Gulmarg, Pahalgam, Sonamarg — has been running normally for years, and we've hosted families, solo women travellers and senior citizens without incident. Our team on the ground monitors local conditions daily and adjusts plans if ever needed.",
      },
      {
        question: "When do the tulips bloom?",
        answer:
          "The Indira Gandhi Tulip Garden typically blooms between late March and mid-April — a window of about three weeks. Book March departures if the tulips are your priority, and we'll time your garden visit for the best week.",
      },
      {
        question: "Will there be snow in Gulmarg in summer?",
        answer:
          "At Apharwat's Phase 2 (3,980 m), yes — snow patches usually survive through June, and full snow from November. Carry a light jacket even in summer; the gondola top is easily 15°C colder than Srinagar.",
      },
      {
        question: "Can you customise this for a honeymoon?",
        answer:
          "Absolutely — we regularly run a honeymoon version with candle-lit shikara dinners, suite upgrades and a night in a Gulmarg chalet. Tell us in the booking form and we'll rework the itinerary at the same price where possible.",
      },
    ],
  },
  {
    slug: "gulmarg-ski-adventure",
    title: "Gulmarg Ski & Snow Adventure",
    destinationSlug: "gulmarg",
    destinationName: "Gulmarg, Kashmir",
    durationDays: 5,
    durationNights: 4,
    price: 45999,
    originalPrice: 52999,
    rating: 4.9,
    reviewsCount: 186,
    shortDescription:
      "Five days of powder on the Apharwat bowl with certified instructors, the world's highest gondola-served skiing, and snowshoe sundowners.",
    overview: [
      "Gulmarg gets 13+ metres of Himalayan powder a season, and the Gondola drops you at 3,980 m — the highest lift-served ski terrain in the world. Days 1–2 build your legs on the groomed slopes with SIF-certified instructors; Days 3–5 go further: the Apharwat bowl, tree runs in the pine forest, and (conditions and skill permitting) a guided line off Kongdoori.",
      "This trip works for complete beginners and intermediate skiers alike — lessons are grouped by ability, and boarders are welcome. Off-snow, there's snowshoeing to frozen waterfalls, Kashmiri barbecue evenings, and the particular silence of a pine forest after fresh snowfall.",
      "Stays are slope-side with boot dryers and unlimited kahwa. If you've only ever skied in Europe or never skied at all, this is the most affordable week of real powder you'll find anywhere.",
    ],
    highlights: [
      "5-day lift pass including the Gulmarg Gondola",
      "3-hour daily lessons with certified instructors",
      "Off-piste coaching for intermediates",
      "Snowshoe trek to a frozen waterfall",
      "Bonfire and wazwan-style barbecue night",
      "Slope-side hotel with heated rooms",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Srinagar → Gulmarg",
        description:
          "Airport pickup and the winding 55 km drive up to Gulmarg (2,650 m). Get fitted for rental gear — skis, boots, outerwear — take a walk around the frozen circle, and sleep early. Altitude rest tonight pays off tomorrow.",
        meals: "Dinner",
        stay: "Gulmarg slope-side hotel",
      },
      {
        day: 2,
        title: "First turns on the baby slope",
        description:
          "Morning session on the beginners' slope: stance, pizza-fry, and your first linked turns. Afternoon: gondola ride to Phase 1 for the view (and a snowball fight), then hot chocolate at the hotel. Evening video review with your instructor.",
        meals: "Breakfast, dinner",
        stay: "Gulmarg slope-side hotel",
      },
      {
        day: 3,
        title: "Phase 1 & the pine glades",
        description:
          "Ski or ride the lower mountain — groomed cruisers and, for quick learners, the pine glades. Beginners keep practising turns; intermediates start sampling the powder with a guide.",
        meals: "Breakfast, dinner",
        stay: "Gulmarg slope-side hotel",
      },
      {
        day: 4,
        title: "Apharwat bowl",
        description:
          "Conditions permitting, the full gondola to Phase 2 and the Apharwat bowl — 1,200 vertical metres of open powder face. Non-skiers ride up for the summit views and descend by sled. Bonfire and barbecue in the evening.",
        meals: "Breakfast, dinner",
        stay: "Gulmarg slope-side hotel",
      },
      {
        day: 5,
        title: "Last laps & transfer to Srinagar",
        description:
          "One final morning session while the snow is groomed, lunch, then descend to Srinagar for airport transfer — or add a houseboat night in Srinagar if your flight leaves the next morning (recommended).",
        meals: "Breakfast",
      },
    ],
    included: [
      "4 nights slope-side accommodation",
      "All meals from day-1 dinner to day-5 breakfast",
      "5-day lift pass incl. Gondola Phase 1 & 2",
      "Daily 3-hour lessons (groups by ability)",
      "Full ski/snowboard equipment rental",
      "Snowshoe trek with guide",
      "Srinagar airport transfers",
      "Bonfire & barbecue evening",
    ],
    excluded: [
      "Airfare to Srinagar",
      "Avalanche safety gear rental (off-piste days, ~₹1,500/day)",
      "Sled rides and Gondola Phase 2 non-ski tickets for spectators",
      "Personal expenses, tips, insurance",
      "Anything not listed under inclusions",
    ],
    coverImage: "/images/tours/gulmarg-ski-adventure/cover.jpg",
    coverImageAlt: "Skiers carving fresh powder on the Gulmarg slopes",
    gallery: [
      {
        src: "/images/tours/gulmarg-ski-adventure/slopes.jpg",
        alt: "Snowboarder laying a turn on a Gulmarg slope",
      },
      {
        src: "/images/tours/gulmarg-ski-adventure/gondola.jpg",
        alt: "The Gulmarg Gondola climbing towards Apharwat's peak",
      },
    ],
    travelStyles: ["ski", "adventure"],
    groupSize: "Small groups — max 8 per instructor",
    featured: true,
    badge: "Powder Alert",
    faqs: [
      {
        question: "I've never skied before — is this for me?",
        answer:
          "Yes. Around half our guests are first-timers. Lessons start on a dedicated beginner slope, rental gear is included, and by Day 3 most beginners are comfortably linking turns. You don't need to be athletic — just okay with falling and laughing about it.",
      },
      {
        question: "How cold does it get?",
        answer:
          "January days sit around −2°C to −8°C on the slopes; sunny January days are common. We include a packing list, and the hotel rooms are heated with boot dryers. Proper layers make it genuinely comfortable.",
      },
      {
        question: "Is avalanche gear needed?",
        answer:
          "For lift-served groomed terrain, no. For guided off-piste days we strongly recommend (and can arrange) transceiver, shovel and probe rental, and our guides carry safety equipment always. Off-piste is never compulsory.",
      },
      {
        question: "What about kids?",
        answer:
          "Children 8+ usually love it — kids' ski school add-ons are available. Under 8, we recommend the sled-and-snowshoe version of the trip instead of ski lessons.",
      },
      {
        question: "What should I pack, and what can I rent?",
        answer:
          "Rent here: skis/snowboard, boots, poles, helmets and padded outerwear — all included in the price, fitted on Day 1. Bring personal: base and mid layers, wool socks (3–4 pairs), waterproof gloves or mittens, goggles with low-light lenses, sunscreen lip balm, and sunglasses. Good gloves and goggles are the two things we insist you own — rental pairs fog up and ruin days.",
      },
      {
        question: "What happens if wind closes the Gondola?",
        answer:
          "Phase 2 (3,980 m) shuts on high-wind days — it's a fact of Gulmarg, not a fault. We re-plan the day around Phase 1 and the lower mountain, move lessons or the snowshoe trek forward, and refund the unused Phase 2 ticket portion. In January wind holds average a day or two per week, so we build the itinerary flexibly. If the whole mountain closes, we'll offer a rebooked day or a pro-rated refund — your call.",
      },
      {
        question: "Is the altitude a problem for beginners?",
        answer:
          "Gulmarg town sits at 2,650 m and the gondola tops out at 3,980 m. Day 1 is deliberately restful for exactly this reason. Most guests feel mild breathlessness on the first morning and adapt within 24–48 hours. Hydrate more than usual, skip alcohol on the first night, and tell your instructor if you have a headache — we take summit days slowly, with plenty of stops.",
      },
    ],
  },
  {
    slug: "kashmir-honeymoon-6-day",
    title: "Kashmir Honeymoon Retreat",
    destinationSlug: "kashmir",
    destinationName: "Kashmir",
    durationDays: 6,
    durationNights: 5,
    price: 35999,
    rating: 4.9,
    reviewsCount: 328,
    shortDescription:
      "A slow, private week of houseboats, meadow walks and candle-lit dinners — Kashmir, redesigned for two.",
    overview: [
      "Honeymoons shouldn't be checklists. We built this one around space and quiet: a boutique Dal Lake houseboat with a private deck, a Gulmarg chalet with a fireplace, and Pahalgam's riverside where the only agenda is each other.",
      "Along the way: a private candle-lit shikara dinner, a couple's photo session at Betaab Valley, flower-bedecked room setups on arrival, and breakfasts slow enough to miss. Faster pace available if you'd rather pack in Gulmarg and Sonamarg both — your call.",
      "Every detail — room decorations, cake, dietary needs, surprises you're planning behind your partner's back — is arranged before you land.",
    ],
    highlights: [
      "Private candle-lit shikara dinner on Dal Lake",
      "Flower & candle room setup on arrival",
      "Couple's photoshoot at Betaab Valley",
      "Gulmarg chalet with fireplace",
      "Riverside candle-lit dinner in Pahalgam",
      "Kahwa-making session with your houseboat host",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Srinagar · welcome setup",
        description:
          "Airport pickup with a flower bouquet. Check into your Dal Lake houseboat where the room is set with petals and candles. Evening shikara ride to the char chinar island as the sun sets behind the Zabarwan range.",
        meals: "Dinner",
        stay: "Boutique Dal Lake houseboat",
      },
      {
        day: 2,
        title: "Mughal gardens & old Srinagar",
        description:
          "Morning at Nishat Bagh's terraces and Pari Mahal's viewpoint, then a slow walk through the old city's wood-carving lanes. Evening: private candle-lit shikara dinner with a live musician if you'd like.",
        meals: "Breakfast, dinner",
        stay: "Boutique Dal Lake houseboat",
      },
      {
        day: 3,
        title: "Gulmarg — the meadow of flowers",
        description:
          "Drive to Gulmarg and into your chalet. Gondola ride to Phase 1 (Phase 2 in winter), meadow walk hand-in-hand, and an evening by the fireplace with kahwa and dry fruits.",
        meals: "Breakfast, dinner",
        stay: "Gulmarg chalet",
      },
      {
        day: 4,
        title: "Gulmarg → Pahalgam",
        description:
          "Descend through apple orchards to Pahalgam. Check into your riverside resort, walk the Lidder banks, and end with a private dinner on the riverside lawn.",
        meals: "Breakfast, dinner",
        stay: "Pahalgam riverside resort",
      },
      {
        day: 5,
        title: "Betaab Valley couple's shoot",
        description:
          "Gypsy ride into Betaab and Aru valleys, where our photographer captures the two of you against scenery no studio can fake. Afternoon free — couples usually choose a riverside café and doing precisely nothing.",
        meals: "Breakfast, dinner",
        stay: "Pahalgam riverside resort",
      },
      {
        day: 6,
        title: "Return to Srinagar & depart",
        description:
          "Drive back to Srinagar (2.5 hrs) with a saffron field stop en route, then airport transfer. The album arrives by email within a week.",
        meals: "Breakfast",
      },
    ],
    included: [
      "5 nights in hand-picked romantic stays",
      "Daily breakfast & dinner",
      "Private cab with chauffeur throughout",
      "Shikara rides incl. private candle-lit dinner",
      "Arrival flower & candle setup",
      "Couple's photo session (50+ edited photos)",
      "Gondola tickets",
      "All tolls, permits, parking and taxes",
    ],
    excluded: [
      "Airfare to Srinagar",
      "Lunches and personal shopping",
      "Pony rides and optional activities",
      "Travel insurance",
      "Anything not listed under inclusions",
    ],
    coverImage: "/images/tours/kashmir-honeymoon/cover.jpg",
    coverImageAlt: "A quiet riverside spot in Pahalgam, perfect for couples",
    gallery: [
      {
        src: "/images/tours/kashmir-honeymoon/dal-lake.jpg",
        alt: "Evening calm on Dal Lake with mountains behind",
      },
      {
        src: "/images/tours/kashmir-honeymoon/gardens.jpg",
        alt: "Blooming flower beds of a Mughal garden",
      },
      {
        src: "/images/tours/kashmir-honeymoon/sonamarg.jpg",
        alt: "Golden meadows of Sonamarg under an evening sky",
      },
    ],
    travelStyles: ["honeymoon"],
    groupSize: "Private — just the two of you",
    featured: false,
    badge: "Honeymoon Special",
    faqs: [
      {
        question: "Can we customise the itinerary?",
        answer:
          "Yes — this is a private trip, so everything from pace to hotel category is adjustable. Tell us what you'd like to add (Sonamarg, Doodhpathri, a spa day) in the booking form and we'll rework it before payment.",
      },
      {
        question: "Which months are best for a snow honeymoon?",
        answer:
          "Late December to February: houseboats are heated, Gulmarg is fully white, and you get the fireplace-and-blankets version of Kashmir. Book at least 6 weeks ahead for Christmas week.",
      },
      {
        question: "Is the photoshoot included in the price?",
        answer:
          "Yes — a 90-minute session with a local professional photographer and 50+ edited photos delivered online. It's our wedding gift to you.",
      },
    ],
  },
  {
    slug: "ladakh-8-day-tour",
    title: "Ladakh Monasteries & Lakes",
    destinationSlug: "ladakh",
    destinationName: "Ladakh",
    durationDays: 8,
    durationNights: 7,
    price: 52999,
    originalPrice: 58999,
    rating: 4.8,
    reviewsCount: 264,
    shortDescription:
      "Leh's old town, Sham Valley villages, Nubra's dunes, and two mornings at Pangong — an acclimatised circuit of Ladakh's greatest hits.",
    overview: [
      "Ladakh rewards patience, so this itinerary starts slow: two nights in Leh (11,500 ft) with gentle walks and oxygen on standby, before crossing Khardung La into the Nubra Valley's sand dunes and hot springs, and then over Chang La to Pangong Tso.",
      "You'll pray with monks at Diskit's 32-metre Maitreya, ride a double-humped camel at Hunder, sleep in a lakeside camp where stars outnumber sheep, and eat momos in a Leh kitchen that our guides actually eat at.",
      "Private SUV with an oxygen cylinder, real acclimatisation days (not fake ones), and camps we audit every season. Ladakh isn't cheap to do right — this is.",
    ],
    highlights: [
      "Two nights in Leh for proper acclimatisation",
      "Khardung La — 17,582 ft",
      "Diskit Monastery & Maitreya Buddha",
      "Camel ride on Hunder's sand dunes",
      "Overnight lakeside camp at Pangong",
      "Thiksey morning prayers & Sham Valley homestay",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Leh · rest & acclimatise",
        description:
          "Airport pickup and transfer to your Leh hotel. Today is deliberately slow: water, sleep, and an evening walk to Leh Market and Shanti Stupa for sunset. No sightseeing agenda — your blood needs to catch up with 11,500 ft.",
        meals: "Dinner",
        stay: "Leh boutique hotel",
      },
      {
        day: 2,
        title: "Leh palaces & monasteries",
        description:
          "Visit Leh Palace, the hilltop Namgyal Tsemo monastery, and Hall of Fame. Afternoon at Thiksey for evening prayers — the butter tea is an acquired taste; the chanting isn't. Back to the hotel early.",
        meals: "Breakfast, dinner",
        stay: "Leh boutique hotel",
      },
      {
        day: 3,
        title: "Sham Valley — the apricot belt",
        description:
          "A gentler day through Likir and Alchi monasteries, the Indus–Zanskar confluence at Sangam, and the Magnetic Hill stretch. Overnight at a village homestay in the apricot orchards of Sham.",
        meals: "Breakfast, dinner",
        stay: "Sham Valley homestay",
      },
      {
        day: 4,
        title: "Khardung La → Nubra Valley",
        description:
          "The big crossing. Snow-flagged Khardung La, then the long descent into the Shyok valley. Reach Hunder's dunes by afternoon for the Bactrian camel ride, and Diskit monastery before dinner.",
        meals: "Breakfast, dinner",
        stay: "Nubra premium camp/hotel",
      },
      {
        day: 5,
        title: "Turtuk village & hot springs",
        description:
          "Drive north to Turtuk — a Balti village of apricot orchards that was Pakistani territory until 1971, and the last village before the LoC. Return via Panamik's hot springs. The most memorable day of the trip for many.",
        meals: "Breakfast, dinner",
        stay: "Nubra premium camp/hotel",
      },
      {
        day: 6,
        title: "Shyok route → Pangong Tso",
        description:
          "The dramatic Shyok road to Pangong — river crossings, cliff-hung track and one unreasonably beautiful lake. Check into your lakeside camp; sunset and stars need no itinerary.",
        meals: "Breakfast, dinner",
        stay: "Pangong lakeside camp",
      },
      {
        day: 7,
        title: "Sunrise at Pangong → Chang La → Leh",
        description:
          "Wake before the sun (or don't — the light show starts at 6). Drive back via Chang La pass and Durbuk, with Thiksey's morning prayers if the group's up for it. Last evening in Leh for café-hopping and souvenir bargaining.",
        meals: "Breakfast, dinner",
        stay: "Leh boutique hotel",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Airport transfer after breakfast, with a stop at the Hall of Fame if you missed it. Changspa's cafés will be waiting when you come back for Markha Valley.",
        meals: "Breakfast",
      },
    ],
    included: [
      "7 nights (2 Leh, 1 homestay, 2 Nubra, 1 Pangong camp, 1 Leh)",
      "Daily breakfast & dinner",
      "Private SUV with experienced Ladakhi driver",
      "In-car oxygen cylinder & first-aid",
      "All inner-line permits for Nubra & Pangong",
      "Environmental fees and taxes",
      "Camel ride at Hunder",
      "Airport transfers",
    ],
    excluded: [
      "Airfare to Leh",
      "Lunches & Leh café money",
      "River rafting and optional activities",
      "Tips for drivers and camp staff",
      "Travel insurance",
      "Anything not listed under inclusions",
    ],
    coverImage: "/images/tours/ladakh-8-day-tour/cover.jpg",
    coverImageAlt: "Pangong Lake's blue water with mountains reflected",
    gallery: [
      {
        src: "/images/tours/ladakh-8-day-tour/monastery.jpg",
        alt: "Prayer flags and monastery walls in Ladakh",
      },
      {
        src: "/images/tours/ladakh-8-day-tour/pangong.jpg",
        alt: "Pangong Tso shoreline in changing light",
      },
      {
        src: "/images/tours/ladakh-8-day-tour/nubra.jpg",
        alt: "Sand dunes of Hunder in Nubra Valley",
      },
    ],
    travelStyles: ["family", "culture", "adventure"],
    groupSize: "Private — 2 to 8 travellers",
    featured: true,
    badge: "Most Complete",
    faqs: [
      {
        question: "How worried should I be about altitude sickness?",
        answer:
          "Respect it, don't fear it. Our itinerary spends two full nights in Leh before any pass, keeps day 1 genuinely restful, and carries oxygen in the vehicle. Most guests feel mild symptoms day one and are fine by day two. If you have heart or respiratory conditions, consult your doctor first.",
      },
      {
        question: "What are the camps like?",
        answer:
          "Nubra and Pangong camps are premium fixed camps with attached bathrooms, heated beds and real duvets — not basic tents. We audit them every May before the season starts.",
      },
      {
        question: "Can we do this with kids?",
        answer:
          "Yes, from about 8 years up. The pacing works, and kids love the camels and the lake. For younger children we'd shorten to a Leh–Nubra version and skip the second high-pass day.",
      },
      {
        question: "Why is there no fixed-departure group option?",
        answer:
          "Ladakh is genuinely better private — the itinerary flexes around acclimatisation, weather and road conditions, which is hard with 20 strangers in a coach. If you're a group of 4+, we can price a private coach version.",
      },
    ],
  },
  {
    slug: "ladakh-bike-expedition",
    title: "Ladakh Bike Expedition",
    destinationSlug: "ladakh",
    destinationName: "Ladakh",
    durationDays: 9,
    durationNights: 8,
    price: 64999,
    rating: 4.9,
    reviewsCount: 148,
    shortDescription:
      "Nine days of Royal Enfields, five high passes, Pangong and Nubra — the motorcycle trip every rider in India has on their list.",
    overview: [
      "Khardung La. Chang La. Lachulung La. Tanglang La. Baralacha La. If those names do something to you, this is your trip. Nine days on a Himalayan or Classic 350, riding the highest motorable roads on the planet with a mechanic in the backup vehicle and a lead rider who's done this circuit 60+ times.",
      "The route: Leh's back roads, Sham's apricot belt, the double pass day into Nubra, the cliff-hung Shyok track to Pangong, and a grand finale over Tanglang La towards Tso Moriri's end-of-the-world shoreline.",
      "This isn't a parade of bikes — group sizes stay small (max 10 riders) so the ride stays a ride, not a traffic jam. Solo riders welcome; pillion option available.",
    ],
    highlights: [
      "5 high passes including Khardung La & Tanglang La",
      "Royal Enfield Himalayan/Classic 350 rental",
      "Backup vehicle with mechanic & spare parts",
      "Pangong & Tso Moriri lakeside camps",
      "Turtuk — the last village before the LoC",
      "Riding jacket, knee guards & ISI helmet included",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Leh · acclimatise",
        description:
          "Pickup and rest. Evening: riding gear fitting, bike allocation, route briefing and an early night. No riding today — you'll thank us at Khardung La.",
        meals: "Dinner",
        stay: "Leh hotel",
      },
      {
        day: 2,
        title: "Sham Valley shake-down ride",
        description:
          "A gentle 100 km loop to Likir, Alchi and Sangam to meet your bike and find your rhythm. You'll know your machine by dinner.",
        meals: "Breakfast, dinner",
        stay: "Leh hotel",
      },
      {
        day: 3,
        title: "Leh → Khardung La → Nubra",
        description:
          "The big one. 39 km of switchbacks to the top of Khardung La (17,582 ft), tea at the army canteen, then the descent to Khalsar and Hunder's dunes. Camel ride and campfire at Nubra.",
        meals: "Breakfast, dinner",
        stay: "Nubra camp",
      },
      {
        day: 4,
        title: "Turtuk loop",
        description:
          "Ride north along the Shyok to Balti Turtuk's apricot orchards. Water crossings, military convoys and landscapes that make you stop mid-corner. Return to camp by evening.",
        meals: "Breakfast, dinner",
        stay: "Nubra camp",
      },
      {
        day: 5,
        title: "Nubra → Shyok → Pangong",
        description:
          "The rider's favourite road — the Shyok track, carved into cliffs above the river, emerging at Pangong Tso by afternoon. Camp by the lake; the stars are unreasonable here.",
        meals: "Breakfast, dinner",
        stay: "Pangong lakeside camp",
      },
      {
        day: 6,
        title: "Pangong → Chang La → Leh",
        description:
          "Sunrise by the lake, then over Chang La (17,586 ft) and down past Durbuk and Thiksey. Afternoon free in Leh — the German bakery on Fort Road has earned its queue.",
        meals: "Breakfast, dinner",
        stay: "Leh hotel",
      },
      {
        day: 7,
        title: "Leh → Rumtse → Tso Kar",
        description:
          "Cross the painted hills of the Morey plains, keep an eye out for kiang (wild asses) and nomad camps, and sleep at the small salt lake of Tso Kar. Feels like the edge of the map.",
        meals: "Breakfast, dinner",
        stay: "Tso Kar camp",
      },
      {
        day: 8,
        title: "Tso Kar → Tso Moriri → Leh",
        description:
          "Morning ride to Tso Moriri's shoreline at Korzok — the quiet, more beautiful sibling of Pangong. Then via Tanglang La (17,480 ft) back to Leh for the farewell dinner.",
        meals: "Breakfast, dinner",
        stay: "Leh hotel",
      },
      {
        day: 9,
        title: "Bike handover & departure",
        description:
          "Hand over the bikes after breakfast, pick up your riding certificates, and transfer to the airport — already planning the Spiti edition.",
        meals: "Breakfast",
      },
    ],
    included: [
      "8 nights hotels & premium camps",
      "Royal Enfield rental with fuel",
      "Backup vehicle with mechanic, spares & luggage",
      "Riding jacket, gloves, knee guards, ISI helmet",
      "All permits, environmental fees & taxes",
      "Daily breakfast & dinner",
      "Experienced lead rider & sweep",
      "Leh airport transfers",
    ],
    excluded: [
      "Airfare to Leh",
      "Lunches, snacks & Leh café money",
      "Damage to bike beyond normal wear",
      "Refundable bike security deposit (₹5,000)",
      "Personal riding gear if you prefer your own",
      "Travel & medical insurance (mandatory)",
    ],
    coverImage: "/images/tours/ladakh-bike-expedition/cover.jpg",
    coverImageAlt: "A Royal Enfield parked above the Nubra valley",
    gallery: [
      {
        src: "/images/destinations/ladakh/hero.jpg",
        alt: "Pangong Lake stretch along the riding route",
      },
      {
        src: "/images/destinations/ladakh/monastery.jpg",
        alt: "Thiksey monastery above the ride route",
      },
      {
        src: "/images/destinations/ladakh/nubra.jpg",
        alt: "The dunes of Hunder, campsite for two nights",
      },
    ],
    travelStyles: ["bike", "adventure"],
    groupSize: "Max 10 riders + crew",
    featured: true,
    badge: "Rider Favourite",
    faqs: [
      {
        question: "How much riding experience do I need?",
        answer:
          "Comfortable with 150–200 km days on Himalayan roads, including some off-camber gravel. If you've done a Spiti or Uttarakhand ride, you're ready. First-time Himalayan riders should start with our Spiti edition, which is gentler.",
      },
      {
        question: "What if my bike breaks down?",
        answer:
          "The backup vehicle carries a mechanic, common spares (clutch cables, tubes, levers, bulbs) and a spare bike on most departures. Larger failures get swapped, not repaired roadside.",
      },
      {
        question: "Is a pillion possible?",
        answer:
          "Yes — pillion pricing is lower and the Himalayan 411 handles two-up comfortably. The pillion needs the same riding gear, which we provide.",
      },
    ],
  },
];

export const getTourBySlug = (slug: string): Tour | undefined =>
  tours.find((t) => t.slug === slug);

export const getToursByDestination = (destinationSlug: string): Tour[] =>
  tours.filter((t) => t.destinationSlug === destinationSlug);

export const featuredTours = tours.filter((t) => t.featured);

export const minTourPriceForDestination = (destinationSlug: string): number => {
  const prices = tours
    .filter((t) => t.destinationSlug === destinationSlug)
    .map((t) => t.price);
  return prices.length ? Math.min(...prices) : 0;
};
