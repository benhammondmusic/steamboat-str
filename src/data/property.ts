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
    airbnb: TODO,
    vrbo: TODO,
    email: TODO,
    phone: TODO,
  },
  rates: {
    note: "Rates move with the season and the snow. Check live availability and pricing on the booking page.",
    winterNightlyFrom: TODO,
    summerNightlyFrom: TODO,
    minimumStayNights: TODO,
  },
} as const;

/** Sleeps 6 by permit, though there are more beds than that. */
export const sleeping = [
  {
    room: "Primary bedroom",
    beds: "King bed",
    note: "En suite full bathroom with tub and shower. Portable AC unit.",
  },
  {
    room: "Second bedroom",
    beds: "Twin XL over queen bunk, plus a twin XL bunk",
    note: "Second full bathroom directly across the hall. Portable AC unit.",
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
      "Full kitchen with stainless appliances and quartz counters",
      "Washer and dryer in unit",
      "Portable AC units in both bedrooms",
      "High-speed WiFi and streaming on a flat-screen TV",
      "Desk and remote work station",
      "Private deck off the living room",
      "Two full bathrooms, one en suite and one off the hall",
      "Hardwood floors, fully furnished, turnkey",
    ],
  },
  {
    category: "Across the street at Trailhead Lodge",
    items: [
      "Large heated pool, open year round",
      "Three rocky-mountain-style hot tubs",
      "Fitness center",
      "Game room with pool table and foosball",
      "Community grills and fire pit",
    ],
  },
  {
    category: "Getting to the mountain",
    items: [
      "Private Wildhorse gondola across the street, winter season only",
      "Free neighborhood shuttle, winter season only",
      "One assigned parking space",
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
    title: "The gondola is across the street",
    body: "Wildhorse Meadows has its own private gondola running through ski season, and it drops you at the Steamboat base area. No shuttle roulette, no parking lot hike in ski boots.",
  },
  {
    title: "Champagne Powder",
    body: "Steamboat trademarked the term for a reason. The dry, light snow that falls here skis differently than anywhere else in Colorado.",
  },
  {
    title: "Terrain for every level",
    body: "Roughly 3,000 acres across six peaks, from wide beginner greens off the gondola to the aspen glades locals guard closely.",
  },
  {
    title: "Three hot tubs and a heated pool",
    body: "Trailhead Lodge is directly across the street. Soak with mountain views, then let the kids burn off whatever is left in the game room.",
  },
] as const;

export const frontRangeWeekend = {
  heading: "Close enough for a long weekend",
  body: "Steamboat is the rare mountain town that is genuinely doable Friday to Sunday from the Front Range. No red-eye, no connecting flight, no full vacation day burned in transit.",
  itinerary: [
    {
      when: "Friday evening",
      what: "Leave after school or after work, check in any time after 4pm, unpack once.",
    },
    {
      when: "Saturday",
      what: "Gondola across the street to first chair, lunch on the mountain, then the hot tubs at Trailhead while the kids take over the game room.",
    },
    {
      when: "Sunday",
      what: "Half day on the hill, lunch downtown on Lincoln Avenue, home before bedtime.",
    },
  ],
  familyNotes: [
    "A real bunk room: twin XL over queen plus a twin XL bunk, so the kids get their own space.",
    "Full kitchen means breakfast happens here instead of a $90 restaurant stop.",
    "Washer and dryer in the unit, so one set of ski clothes is enough.",
    "Top floor with no one stomping overhead at 6am.",
    "Summer works too, and the pool is heated year round.",
  ],
} as const;

export const summerHighlights = [
  "Tubing and fly fishing on the Yampa River",
  "Lift-served mountain biking at the bike park",
  "The hike to Fish Creek Falls",
  "Saturday farmers market on Lincoln Avenue",
  "Steamboat Pro Rodeo on summer weekends",
  "Strawberry Park Hot Springs up the valley",
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
  { src: "/images/placeholder-gondola.svg", alt: "Private Wildhorse gondola across the street" },
  { src: "/images/placeholder-exterior.svg", alt: "First Tracks building exterior in winter" },
] as const;

export const heroImage = {
  src: "/images/placeholder-hero.svg",
  alt: "Steamboat Springs in winter",
} as const;
