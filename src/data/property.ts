/**
 * Every listing fact the site renders lives here.
 *
 * Sourced from the iTrip listing and the MLS/Zillow record for unit 4306.
 * Anything still set to TODO renders as an amber badge on the page.
 */

export const TODO = "TODO" as const;

export const property = {
  name: "First Tracks 4306",
  tagline: "Top-floor 2 bedroom at Wildhorse Meadows, Steamboat Springs",
  address: {
    street: "2525 Cattle Kate Circle",
    unit: "Unit 4306",
    city: "Steamboat Springs",
    state: "CO",
    zip: "80487",
    subdivision: "Wildhorse Meadows / First Tracks",
  },
  specs: {
    bedrooms: "2",
    bathrooms: "2",
    sleeps: "6",
    squareFeet: "1,022",
    propertyType: "Condominium",
    floor: "Top floor",
    yearBuilt: "2009",
    furnished: "Fully furnished",
  },
  /** Colorado STR permit. Required on advertising in most Routt County jurisdictions. */
  licenseNumber: "LCSTR20232545",
  booking: {
    itrip:
      "https://www.itrip.net/steamboat-springs-vacation-rental/first-tracks-4306-at-wildhorse-meadows",
    airbnb: "https://www.airbnb.com/rooms/937781387600503303",
    vrbo: TODO,
    email: "benjamin.hammond@gmail.com",
  },
  rates: {
    note: "Rates and minimum stays change by season. Live availability and pricing are on iTrip.",
  },
} as const;

/** Sleeps 6 by permit, though there are more beds than that. */
export const sleeping = [
  {
    room: "Primary bedroom",
    beds: "King bed",
    note: "En suite full bathroom with a tub and shower combo. Its own flat screen TV, a dresser and two closets. Portable AC unit and a ceiling fan.",
  },
  {
    room: "Second bedroom",
    beds: "Twin XL over queen bunk, plus a twin XL bunk",
    note: "One queen and three twin XL beds, with two closets. Second full bathroom directly across the hall, also a tub and shower combo. Portable AC unit and a ceiling fan.",
  },
  {
    room: "Living area",
    beds: "Queen sleeper sofa",
    note: "In the main living space, with the deck just off it.",
  },
] as const;

export const amenities = [
  {
    category: "In the condo",
    items: [
      "Full kitchen with stainless appliances, quartz counters and bar seating",
      "Washer and dryer in unit",
      "Portable AC units in both bedrooms, rare in Steamboat, plus ceiling fans throughout",
      "High-speed WiFi and streaming on a large flat-screen TV",
      "Desk and remote work station in the hallway nook",
      "Entry drop zone with cubbies, hooks and a bench",
      "Private deck off the living room, with partial views toward the Flat Tops and the Yampa Valley",
      "Two full bathrooms, one en suite and one off the hall, both tub and shower combos",
      "Hardwood floors, fully furnished, turnkey",
    ],
  },
  {
    category: "Traveling with a baby",
    items: [
      "Pack n Play with a mattress",
      "Toys for the little ones",
      "Plastic dishes, mixing bowls and a mixing spoon",
    ],
  },
  {
    category: "Across the street at Trailhead Lodge",
    items: [
      "Large heated pool, open year round",
      "Three rocky-mountain-style hot tubs, all with mountain views",
      "State of the art fitness center",
      "Game room with pool table and foosball",
      "Community grilling area with two large gas grills and a fire pit",
    ],
  },
  {
    category: "Getting around",
    items: [
      "Wildhorse gondola across the street to the mountain base, ski season plus the occasional summer and fall event, with a separate owner and guest line when it backs up",
      "Free neighborhood shuttle, winter season only",
      "One assigned parking space in the lot outside the unit",
      "Three miles from downtown Steamboat",
      "Two minute walk to the Steamboat Tennis and Pickleball Center",
    ],
  },
] as const;

/** Approximate driving distances. */
export const distances = [
  {
    from: "Denver",
    miles: 157,
    driveTime: "about 3 hours",
    note: "I-70 to US-40 over Rabbit Ears Pass. Give yourself extra in a storm.",
  },
  {
    from: "Fort Collins",
    miles: 135,
    driveTime: "about 2 hours 45 minutes",
    note: "CO-14 through Poudre Canyon, one of the prettiest drives in the state.",
  },
  {
    from: "Yampa Valley Regional Airport (HDN)",
    miles: 25,
    driveTime: "about 30 minutes",
    note: "Direct winter flights from most major US hubs.",
  },
] as const;

export const skiHighlights = [
  {
    title: "Gondola across the street",
    body: "The Wildhorse gondola is a small one that connects the neighborhood to the Steamboat base area, where you pick up the mountain gondola or a chair. It is open to the public, but owners and guests get their own line when it backs up.",
  },
  {
    title: "Champagne Powder",
    body: "Steamboat holds the trademark on the term. The snow here falls dry and light.",
  },
  {
    title: "Six peaks, about 3,000 acres",
    body: "Beginner greens come off the gondola, and there is tree skiing across the mountain.",
  },
  {
    title: "Two ski areas in town",
    body: "Steamboat Resort, plus Howelsen Hill downtown, the oldest continuously operating ski area in Colorado.",
  },
] as const;

export const frontRangeWeekend = {
  heading: "Friday to Sunday from the Front Range",
  familyNotes: [
    "A bunk room with a queen and three twin XLs, so the kids get their own space.",
    "Full kitchen, so breakfast happens here.",
    "Washer and dryer in the unit, so one set of ski clothes is enough.",
    "Pack n Play, toys and plastic dishes already here.",
    "Top floor, so nobody is stomping overhead at 6am.",
    "The pool across the street is heated year round.",
  ],
} as const;

/** Open in every season, so they sit outside the seasonal cards. */
export const yearRound = [
  { text: "Old Town Hot Springs downtown, with waterslides", tag: "kids" },
  {
    text: "Strawberry Park Hot Springs, natural stone pools up a dirt road. Family friendly by day, clothing optional after dark.",
    tag: "offbeat",
  },
  { text: "Arcade games at Steamboat Fun and Games", tag: "kids" },
  { text: "Live music at Schmiggity's downtown" },
  { text: "Live music on the big stage at the mountain base" },
] as const;

/** Counts stay split because the two channels do not pool their reviews. */
export const reviews = {
  airbnb: { rating: "4.81", count: "31" },
  itrip: { count: "8" },
} as const;

/**
 * Steamboat bills itself as Bike Town USA. The trail mileage comes from the listing;
 * everything else is deliberately kept general.
 */
export const biking = {
  heading: "Biking",
  note: "Steamboat calls itself Bike Town USA.",
  items: [
    "Hundreds of miles of single track around the valley",
    "More than 50 miles of downhill and freeride terrain",
    "Lift-served laps at the resort bike park, limited access on the Ikon pass",
    "The paved Yampa path downtown, flat enough for kids",
    "SBT GRVL, the gravel race, in August",
  ],
} as const;

/** Riding the resort gondola up the mountain, which is separate from the neighborhood one. */
export const gondolaActivities = {
  heading: "Up the resort gondola",
  note: "Each of these needs a lift ticket or a season pass.",
  items: [
    "Summer sunset happy hour up top, with live music, food and drinks",
    "Hiking, snowshoe and cross-country trails",
    "Lift-served mountain biking",
  ],
} as const;

/**
 * Five picks per season, deliberately mixing the obvious with the offbeat.
 * Verify event names and timing against the current year before publishing.
 */
export const seasons = [
  {
    season: "Winter",
    window: "Late November through early April",
    picks: [
      {
        text: "Ski Steamboat, with the neighborhood gondola across the street, plus limited night skiing on select evenings",
      },
      {
        text: "Winter Carnival in February, when they close Lincoln Avenue for the street events, including skiers pulled along behind horses",
        tag: "offbeat",
      },
      {
        text: "Snow tubing and skiing at Howelsen Hill, Colorado's oldest continuously operating ski area, with free skiing on Sundays",
        tag: "kids",
      },
      { text: "Skating rink at the mountain base", tag: "kids" },
      { text: "Snowshoe or nordic ski the trails up on Rabbit Ears Pass" },
    ],
  },
  {
    season: "Spring",
    window: "April and May",
    picks: [
      { text: "Slushy spring laps and closing weekend on the mountain" },
      {
        text: "The Cardboard Classic, where people race homemade cardboard sleds down the hill",
        tag: "offbeat",
      },
      { text: "Fish Creek Falls running hard on snowmelt" },
      { text: "The Yampa comes up and the kayakers take over the river park" },
      { text: "Mud season quiet, with lower rates and shorter lift lines" },
    ],
  },
  {
    season: "Summer",
    window: "June through August",
    picks: [
      {
        text: "The big ones: SBT GRVL, the gravel race that takes over town, and the Steamboat Food and Wine Festival",
      },
      { text: "The Hot Air Balloon Rodeo, best watched early with coffee", tag: "offbeat" },
      { text: "Steamboat Pro Rodeo on weekend nights" },
      {
        text: "The base area beach and rocky stream for dipping your feet, plus a bounce house and yard games",
        tag: "kids",
      },
      {
        text: "Float the Yampa on a tube, then ice cream and a stroll along the downtown river path",
        tag: "kids",
      },
    ],
  },
  {
    season: "Fall",
    window: "September and October",
    picks: [
      { text: "Aspens turning on Rabbit Ears Pass, worth the drive up and back" },
      { text: "Elk bugling at dusk in the valley", tag: "offbeat" },
      { text: "Fish Creek Falls and the easy paved overlook stroll, minus the crowds" },
      { text: "Hike or bike Emerald Mountain right above downtown" },
      { text: "Little Toots Park and the downtown playgrounds on a warm afternoon", tag: "kids" },
    ],
  },
] as const;

export const houseRules = [
  { rule: "Check in", detail: "After 4:00 PM" },
  { rule: "Check out", detail: "Before 10:00 AM" },
  { rule: "Pets", detail: "Not allowed" },
  { rule: "Smoking", detail: "Not allowed anywhere in the unit" },
  { rule: "Parties", detail: "No parties or loud noise" },
  { rule: "Open flames", detail: "No candles in the unit or on the balcony" },
  { rule: "Minimum age", detail: "One member of the party must be 25 or older" },
  { rule: "Housekeeping", detail: "No daily maid service, available for a fee" },
] as const;

/**
 * Placeholder gallery. Drop real photos into /public/images with these filenames
 * and the site picks them up with no code changes.
 */
export const gallery = [
  { src: "/images/placeholder-living.svg", alt: "Living area with sofa and club chairs" },
  { src: "/images/placeholder-kitchen.svg", alt: "Modern kitchen with quartz counters" },
  { src: "/images/placeholder-bedroom.svg", alt: "Primary bedroom with king bed" },
  { src: "/images/placeholder-bunks.svg", alt: "Second bedroom with bunk beds" },
  { src: "/images/placeholder-deck.svg", alt: "Private deck off the living room" },
  { src: "/images/placeholder-pool.svg", alt: "Heated pool and hot tubs at Trailhead Lodge" },
  { src: "/images/placeholder-gondola.svg", alt: "Wildhorse gondola across the street" },
  { src: "/images/placeholder-exterior.svg", alt: "First Tracks building exterior in winter" },
] as const;

export const heroImage = {
  src: "/images/placeholder-hero.svg",
  alt: "Steamboat Springs in winter",
} as const;
