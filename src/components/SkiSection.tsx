import { skiHighlights } from "@/data/property";
import { Section } from "./Section";

export function SkiSection() {
  return (
    <Section
      id="ski"
      tone="pine"
      eyebrow="Why Steamboat"
      title="The ski trip people fly in for"
      intro="Steamboat rewards the group that wants to actually ski. Six peaks, tree runs worth the hype, and a town that still feels like a town instead of a shopping mall at the base of a lift."
    >
      <ul className="grid gap-6 sm:grid-cols-2">
        {skiHighlights.map((item) => (
          <li key={item.title} className="rounded-xl bg-pine-700/40 p-6 ring-1 ring-snow-50/10">
            <h3 className="font-display text-xl font-semibold text-aspen-400">{item.title}</h3>
            <p className="mt-3 text-snow-200">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
