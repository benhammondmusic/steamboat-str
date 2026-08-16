import { biking, gondolaActivities, seasons, yearRound } from "@/data/property";
import { Section } from "./Section";

const tagLabels: Record<string, string> = {
  offbeat: "Only in Steamboat",
  kids: "Good with kids",
};

function Tag({ tag }: { tag?: string }) {
  if (!tag) return null;
  return (
    <span className="mt-1.5 block text-xs font-semibold text-aspen-600">{tagLabels[tag]}</span>
  );
}

function Band({
  heading,
  note,
  items,
}: {
  heading: string;
  note: string;
  items: readonly string[];
}) {
  return (
    <div className="mt-6 rounded-xl bg-white p-6 ring-1 ring-snow-200">
      <h3 className="font-display text-xl font-semibold text-pine-700">{heading}</h3>
      <p className="mt-1 text-sm text-ink/50">{note}</p>
      <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-ink/80">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-aspen-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Seasons() {
  return (
    <Section
      id="seasons"
      eyebrow="Things to do"
      title="Five things worth doing, whenever you come"
      intro="Steamboat is a ski town first, but the valley earns a visit in all four seasons."
    >
      <div className="rounded-xl bg-pine-50 p-6 ring-1 ring-pine-200">
        <h3 className="font-display text-xl font-semibold text-pine-700">
          Open any time of year
        </h3>
        <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {yearRound.map((pick) => (
            <li key={pick.text} className="flex gap-3 text-sm text-ink/80">
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-pine-500" />
              <span>
                {pick.text}
                <Tag tag={"tag" in pick ? pick.tag : undefined} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Band {...biking} />
      <Band {...gondolaActivities} />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {seasons.map((entry) => (
          <div key={entry.season} className="rounded-xl bg-white p-6 ring-1 ring-snow-200">
            <h3 className="font-display text-xl font-semibold text-pine-700">{entry.season}</h3>
            <p className="mt-1 text-sm text-ink/50">{entry.window}</p>
            <ul className="mt-5 space-y-4">
              {entry.picks.map((pick) => (
                <li key={pick.text} className="text-sm text-ink/80">
                  {pick.text}
                  <Tag tag={"tag" in pick ? pick.tag : undefined} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
