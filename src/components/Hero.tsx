import Image from "next/image";
import { distances, heroImage, property, reviews } from "@/data/property";

export function Hero() {
  const { specs, address } = property;
  const denver = distances.find((d) => d.from === "Denver");
  const fortCollins = distances.find((d) => d.from === "Fort Collins");

  const facts = [
    { label: "Sleeps", value: specs.sleeps },
    { label: "Bedrooms", value: specs.bedrooms },
    { label: "Baths", value: specs.bathrooms },
    { label: "Square feet", value: specs.squareFeet },
    ...(denver ? [{ label: "From Denver", value: denver.driveTime }] : []),
    ...(fortCollins ? [{ label: "From Fort Collins", value: fortCollins.driveTime }] : []),
  ];

  return (
    <div id="top" className="relative isolate overflow-hidden bg-pine-900 text-snow-50">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-pine-900 via-pine-900/40 to-transparent"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <p className="text-sm font-semibold tracking-widest text-aspen-400 uppercase">
          {address.subdivision}, {address.city} {address.state}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight font-semibold text-balance sm:text-6xl">
          The gondola is across the street. So is the pool.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-snow-200 sm:text-xl">
          {property.name} is a top-floor two bedroom at Wildhorse Meadows with air conditioning,
          a washer and dryer in the unit, and a private deck. Built for real ski trips, and close
          enough that Denver and Fort Collins families can come up for three days.
        </p>

        <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-snow-200">
          <span aria-hidden="true" className="text-aspen-400">
            ★
          </span>
          <span>
            <strong className="font-semibold">{reviews.airbnb.rating}</strong> out of 5 from{" "}
            {reviews.airbnb.count} reviews on Airbnb, plus {reviews.itrip.count} on iTrip
          </span>
        </p>

        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-snow-200/70">{fact.label}</dt>
              <dd className="mt-1 text-lg font-semibold">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#book"
            className="rounded-full bg-aspen-400 px-6 py-3 font-semibold text-pine-900 transition hover:bg-aspen-100"
          >
            Check availability
          </a>
          <a
            href="#gallery"
            className="rounded-full px-6 py-3 font-semibold ring-1 ring-snow-50/40 transition hover:bg-snow-50/10"
          >
            See the place
          </a>
        </div>
      </div>
    </div>
  );
}
