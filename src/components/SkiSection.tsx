import { skiHighlights } from "@/data/property";
import { Section } from "./Section";

export function SkiSection() {
  return (
    <Section id="ski" tone="pine" title="Skiing">
      <ul className="grid gap-8 sm:grid-cols-2">
        {skiHighlights.map((item) => (
          <li key={item.title} className="border-t border-snow-50/20 pt-4">
            <h3 className="font-display text-lg font-semibold text-aspen-400">{item.title}</h3>
            <p className="mt-2 text-snow-200">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
