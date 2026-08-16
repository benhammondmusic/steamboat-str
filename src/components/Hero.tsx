import Image from "next/image";
import { distances, heroImage, property } from "@/data/property";
import { Todo, isTodo } from "./Todo";

export function Hero() {
  const { specs, address } = property;
  const denver = distances.find((d) => d.from === "Denver");
  const fortCollins = distances.find((d) => d.from === "Fort Collins");

  return (
    <div id="top" className="relative isolate overflow-hidden bg-pine-900 text-snow-50">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <p className="text-sm font-semibold tracking-widest text-aspen-400 uppercase">
          {address.city}, {address.state}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight font-semibold text-balance sm:text-6xl">
          Champagne powder days, hot tub nights, and a drive you can do after work.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-snow-200 sm:text-xl">
          {property.name} is a {specs.propertyType.toLowerCase()} on Cattle Kate Circle, built for
          groups chasing a real Steamboat ski trip and for Front Range families who only have three
          days.
        </p>

        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm">
          <div>
            <dt className="text-snow-200/70">Sleeps</dt>
            <dd className="mt-1 text-lg font-semibold">
              {isTodo(specs.sleeps) ? <Todo label="sleeps" /> : specs.sleeps}
            </dd>
          </div>
          <div>
            <dt className="text-snow-200/70">Bedrooms</dt>
            <dd className="mt-1 text-lg font-semibold">
              {isTodo(specs.bedrooms) ? <Todo label="bedrooms" /> : specs.bedrooms}
            </dd>
          </div>
          <div>
            <dt className="text-snow-200/70">Baths</dt>
            <dd className="mt-1 text-lg font-semibold">
              {isTodo(specs.bathrooms) ? <Todo label="baths" /> : specs.bathrooms}
            </dd>
          </div>
          {denver ? (
            <div>
              <dt className="text-snow-200/70">From Denver</dt>
              <dd className="mt-1 text-lg font-semibold">{denver.driveTime}</dd>
            </div>
          ) : null}
          {fortCollins ? (
            <div>
              <dt className="text-snow-200/70">From Fort Collins</dt>
              <dd className="mt-1 text-lg font-semibold">{fortCollins.driveTime}</dd>
            </div>
          ) : null}
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
