import { seasons } from "@/data/property";
import { Section } from "./Section";

const tagLabels: Record<string, string> = {
  offbeat: "Only in Steamboat",
  kids: "Good with kids",
};

export function Seasons() {
  return (
    <Section
      id="seasons"
      eyebrow="Year round"
      title="Worth doing, whenever you come"
      intro="Steamboat is a ski town first, but the valley earns a visit in all four seasons."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {seasons.map((entry) => (
          <div key={entry.season} className="rounded-xl bg-white p-6 ring-1 ring-snow-200">
            <h3 className="font-display text-xl font-semibold text-pine-700">{entry.season}</h3>
            <p className="mt-1 text-sm text-ink/50">{entry.window}</p>
            <ul className="mt-5 space-y-4">
              {entry.picks.map((pick) => (
                <li key={pick.text} className="text-sm text-ink/80">
                  {pick.text}
                  {"tag" in pick && pick.tag ? (
                    <span className="mt-1.5 block text-xs font-semibold text-aspen-600">
                      {tagLabels[pick.tag]}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
