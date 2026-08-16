import { frontRangeWeekend } from "@/data/property";
import { Section } from "./Section";

export function FrontRange() {
  return (
    <Section id="weekend" title={frontRangeWeekend.heading}>
      <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
        {frontRangeWeekend.familyNotes.map((note) => (
          <li key={note} className="flex gap-3 text-ink/80">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-aspen-400" />
            {note}
          </li>
        ))}
      </ul>
    </Section>
  );
}
