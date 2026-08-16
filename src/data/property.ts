/**
 * Every listing fact the site renders lives here.
 *
 * Values marked TODO are placeholders. Zillow blocks automated fetching, so the
 * unit specifics could not be pulled from the listing and must be filled in by hand.
 */

export const TODO = "TODO" as const;

export const property = {
  name: "Cattle Kate Retreat",
  tagline: "Steamboat Springs slopeside condo",
  address: {
    street: "2525 Cattle Kate Circle",
    unit: "Unit 4306",
    city: "Steamboat Springs",
    state: "CO",
    zip: "80487",
  },
  // TODO: confirm all specs against the deed / listing before publishing
  specs: {
    bedrooms: TODO,
    bathrooms: TODO,
    sleeps: TODO,
    squareFeet: TODO,
    propertyType: "Condominium",
    floor: TODO,
  },
  booking: {
    // TODO: swap in real booking URLs, or delete the ones you do not use
    airbnb: TODO,
    vrbo: TODO,
    direct: TODO,
    email: TODO,
    phone: TODO,
  },
  rates: {
    // TODO: confirm rates and minimum stays
    note: "Rates vary by season. Reach out for an exact quote on your dates.",
    winterNightlyFrom: TODO,
    summerNightlyFrom: TODO,
    minimumStayNights: TODO,
  },
} as const;

export const amenities = [
  {
    category: "After the mountain",
    items: [
      "Private hot tub access",
      "Gas fireplace in the living room",
      "Heated ski and boot storage",
      "In-unit washer and dryer",
    ],
  },
  {
    category: "Kitchen and dining",
    items: [
      "Full kitchen with full-size appliances",
      "Coffee maker and grinder",
      "Dishwasher",
      "Seating for the whole group",
    ],
  },
  {
    category: "Working and unwinding",
    items: [
      "Fast Wi-Fi",
      "Smart TV with streaming",
      "Dedicated workspace",
      "Board games and books",
    ],
  },
  {
    category: "Logistics",
    items: [
      "Free on-site parking",
      "Elevator access",
      "Self check-in with keypad",
      "Pack-n-play and high chair on request",
    ],
  },
] as const;

/** Approximate driving distances. Confirm before publishing. */
export const distances = [
  {
    from: "Denver",
    miles: 157,
    driveTime: "about 3 hours",
    note: "Straight up I-70 and US-40 over Rabbit Ears Pass.",
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
    title: "Champagne Powder",
    body: "Steamboat trademarked the term for a reason. The dry, light snow that falls here skis differently than anywhere else in Colorado.",
  },
  {
    title: "Terrain for every level",
    body: "Roughly 3,000 acres across six peaks, from wide beginner greens off the gondola to the aspen glades locals guard closely.",
  },
  {
    title: "Ski days that start easy",
    body: "Boots dry overnight in heated storage, gear stays downstairs, and you are moving toward the lift while other groups are still loading the car.",
  },
  {
    title: "Soak it off after",
    body: "Old Town Hot Springs sits in the middle of downtown, and Strawberry Park Hot Springs is a short drive up the valley for the full soak-under-the-stars version.",
  },
] as const;

export const frontRangeWeekend = {
  heading: "Close enough for a long weekend",
  body: "Steamboat is the rare mountain town that is genuinely doable Friday to Sunday from the Front Range. No red-eye, no connecting flight, no full vacation day burned in transit.",
  itinerary: [
    {
      when: "Friday evening",
      what: "Leave after school or after work, roll in for a late dinner, unpack once.",
    },
    {
      when: "Saturday",
      what: "First chair, lunch on the mountain, then the hot tub while the kids keep lapping the terrain park.",
    },
    {
      when: "Sunday",
      what: "Half day on the hill, lunch downtown on Lincoln Avenue, home before bedtime.",
    },
  ],
  familyNotes: [
    "Kids' gear rental and ski school are minutes away, not a shuttle ride away.",
    "Full kitchen means breakfast happens at the condo instead of a $90 restaurant stop.",
    "Bunk-friendly sleeping setup so cousins and friends can pile in.",
    "Summer works too: Yampa River tubing, the bike park, and Fish Creek Falls.",
  ],
} as const;

export const summerHighlights = [
  "Tubing and fly fishing on the Yampa River",
  "Lift-served mountain biking at the bike park",
  "The hike to Fish Creek Falls",
  "Saturday farmers market on Lincoln Avenue",
  "Steamboat Pro Rodeo on summer weekends",
  "Alpine slide and gondola scenic rides",
] as const;

/**
 * Placeholder gallery. Drop real photos into /public/images with these filenames
 * and the site picks them up with no code changes.
 */
export const gallery = [
  { src: "/images/placeholder-exterior.svg", alt: "Exterior of the building in winter" },
  { src: "/images/placeholder-living.svg", alt: "Living room with fireplace" },
  { src: "/images/placeholder-kitchen.svg", alt: "Full kitchen and dining area" },
  { src: "/images/placeholder-bedroom.svg", alt: "Primary bedroom" },
  { src: "/images/placeholder-bunks.svg", alt: "Bunk room for kids" },
  { src: "/images/placeholder-hottub.svg", alt: "Hot tub at dusk" },
  { src: "/images/placeholder-slopes.svg", alt: "Steamboat ski runs on a bluebird day" },
  { src: "/images/placeholder-downtown.svg", alt: "Downtown Steamboat Springs on Lincoln Avenue" },
] as const;

export const heroImage = {
  src: "/images/placeholder-hero.svg",
  alt: "Snowy view of Steamboat Springs from the condo",
} as const;
