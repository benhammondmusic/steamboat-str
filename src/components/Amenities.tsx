import { amenities } from "@/data/property";
import { Section } from "./Section";

export function Amenities() {
  return (
    <Section
      id="amenities"
      eyebrow="What is here"
      title="Turnkey in the unit, resort amenities across the street"
      intro="The pool, hot tubs, gym, and game room belong to Trailhead Lodge directly across the street, and guests here have access."
    >
      <div className="grid gap-8 sm:grid-cols-2">
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

      <p className="mt-10 rounded-xl bg-pine-50 p-6 text-ink/70 ring-1 ring-pine-200">
        The pool is heated year round. The gondola and the neighborhood shuttle run in ski season
        only.
      </p>
    </Section>
  );
}
