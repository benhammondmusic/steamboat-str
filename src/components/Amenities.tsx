import { amenities } from "@/data/property";
import { Section } from "./Section";

export function Amenities() {
  return (
    <Section
      id="amenities"
      title="Amenities"
      intro="The pool, hot tubs, gym and game room belong to Trailhead Lodge across the street. Guests here have access."
    >
      <div className="grid gap-10 sm:grid-cols-2">
        {amenities.map((group) => (
          <div key={group.category} className="border-t border-snow-200 pt-4">
            <h3 className="font-display text-lg font-semibold text-pine-700">{group.category}</h3>
            <ul className="mt-3 space-y-2 text-ink/80">
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

      <p className="mt-10 text-sm text-ink/60">
        The pool is heated year round. The gondola and the neighborhood shuttle run in ski season
        only.
      </p>
    </Section>
  );
}
