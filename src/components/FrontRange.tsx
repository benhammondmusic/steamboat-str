import { frontRangeWeekend } from "@/data/property";
import { Section } from "./Section";

export function FrontRange() {
  return (
    <Section
      id="weekend"
      eyebrow="Denver and Fort Collins families"
      title={frontRangeWeekend.heading}
      intro={frontRangeWeekend.body}
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <ol className="lg:col-span-3 space-y-4">
          {frontRangeWeekend.itinerary.map((entry) => (
            <li
              key={entry.when}
              className="flex flex-col gap-2 rounded-xl bg-white p-5 ring-1 ring-snow-200 sm:flex-row sm:gap-5"
            >
              <span className="text-sm font-semibold text-pine-500 sm:w-32 sm:shrink-0">
                {entry.when}
              </span>
              <span className="text-ink/80">{entry.what}</span>
            </li>
          ))}
        </ol>

        <div className="lg:col-span-2 rounded-xl bg-pine-50 p-6 ring-1 ring-pine-200">
          <h3 className="font-display text-xl font-semibold text-pine-700">
            What makes it work with kids
          </h3>
          <ul className="mt-4 space-y-3">
            {frontRangeWeekend.familyNotes.map((note) => (
              <li key={note} className="flex gap-3 text-ink/80">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-aspen-400" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
