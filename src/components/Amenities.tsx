import { amenities, summerHighlights } from "@/data/property";
import { Section } from "./Section";

export function Amenities() {
  return (
    <Section
      id="amenities"
      eyebrow="What is here"
      title="Turnkey in the unit, resort amenities across the street"
      intro="The pool, hot tubs, gym, and game room belong to Trailhead Lodge directly across the street, and guests here have access."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {amenities.map((group) => (
          <div key={group.category} className="rounded-xl bg-white p-6 ring-1 ring-snow-200">
            <h3 className="font-display text-lg font-semibold text-pine-700">{group.category}</h3>
            <ul className="mt-4 space-y-2 text-ink/80">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-aspen-400"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-xl bg-pine-50 p-6 ring-1 ring-pine-200">
        <h3 className="font-display text-xl font-semibold text-pine-700">Not just a winter town</h3>
        <p className="mt-2 text-ink/70">
          Summer rates run lower and the pool is heated year round. Note that the gondola and the
          neighborhood shuttle run in ski season only.
        </p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {summerHighlights.map((item) => (
            <li key={item} className="flex gap-3 text-ink/80">
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-pine-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
