import { property, sleeping } from "@/data/property";
import { Section } from "./Section";

export function Sleeping() {
  return (
    <Section id="sleeping" title={`Two bedrooms, sleeps ${property.specs.sleeps}`}>
      <ul className="grid gap-8 sm:grid-cols-3">
        {sleeping.map((room) => (
          <li key={room.room} className="border-t border-snow-200 pt-4">
            <h3 className="text-sm font-semibold text-pine-700">{room.room}</h3>
            <p className="mt-1 font-display text-xl font-semibold">{room.beds}</p>
            <p className="mt-2 text-sm text-ink/70">{room.note}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
