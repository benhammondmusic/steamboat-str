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

function Block({
  heading,
  note,
  children,
}: {
  heading: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-snow-200 pt-4">
      <h3 className="font-display text-lg font-semibold text-pine-700">{heading}</h3>
      {note ? <p className="mt-1 text-sm text-ink/50">{note}</p> : null}
      {children}
    </div>
  );
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 grid gap-x-10 gap-y-2 text-sm text-ink/80 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-aspen-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Seasons() {
  return (
    <Section id="seasons" title="Things to do">
      <div className="space-y-10">
        <Block heading="Open any time of year">
          <ul className="mt-3 grid gap-x-10 gap-y-3 text-sm text-ink/80 sm:grid-cols-2 lg:grid-cols-3">
            {yearRound.map((pick) => (
              <li key={pick.text} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-aspen-400"
                />
                <span>
                  {pick.text}
                  <Tag tag={"tag" in pick ? pick.tag : undefined} />
                </span>
              </li>
            ))}
          </ul>
        </Block>

        <Block heading={biking.heading} note={biking.note}>
          <Bullets items={biking.items} />
        </Block>

        <Block heading={gondolaActivities.heading} note={gondolaActivities.note}>
          <Bullets items={gondolaActivities.items} />
        </Block>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {seasons.map((entry) => (
          <div key={entry.season} className="border-t border-snow-200 pt-4">
            <h3 className="font-display text-lg font-semibold text-pine-700">{entry.season}</h3>
            <p className="mt-1 text-sm text-ink/50">{entry.window}</p>
            <ul className="mt-4 space-y-3">
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
