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
  { src: "/images/placeholder-gondola.svg", alt: "Private Wildhorse gondola across the street" },
  { src: "/images/placeholder-exterior.svg", alt: "First Tracks building exterior in winter" },
] as const;

export const heroImage = {
  src: "/images/placeholder-hero.svg",
  alt: "Steamboat Springs in winter",
} as const;
