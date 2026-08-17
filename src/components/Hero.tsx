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
        className="object-cover"
      />
      {/* Scrims keep the headline legible while the right side of the photo stays visible. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-pine-900 via-pine-900/80 to-pine-900/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-pine-900 via-transparent to-pine-900/50"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <p className="text-sm text-snow-200">
          {address.subdivision}, {address.city} {address.state}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight font-semibold text-balance sm:text-6xl">
          Year-round heated pool and hot tubs plus priority gondola access, just across the street.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-snow-200">
          Top-floor two bedroom with two full baths, a washer and dryer in the unit, AC in both
          bedrooms, and a deck off the living room.
        </p>

        <p className="mt-5 text-sm text-snow-200">
          <span aria-hidden="true" className="text-aspen-400">
            ★
          </span>{" "}
          <strong className="font-semibold">{reviews.airbnb.rating}</strong> out of 5 from{" "}
          {reviews.airbnb.count} reviews on Airbnb, plus {reviews.itrip.count} on iTrip
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
            className="rounded-md bg-aspen-400 px-5 py-3 font-semibold text-pine-900 transition hover:bg-aspen-100"
          >
            Check availability
          </a>
          <a
            href="#gallery"
            className="rounded-md px-5 py-3 font-semibold ring-1 ring-snow-50/40 transition hover:bg-snow-50/10"
          >
            See the place
          </a>
        </div>
      </div>
    </div>
  );
}
