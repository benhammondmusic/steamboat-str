import { property, sleeping } from "@/data/property";
import { Section } from "./Section";

export function Sleeping() {
  return (
    <Section
      id="sleeping"
      eyebrow="Where everyone sleeps"
      title={`Two bedrooms, sleeps ${property.specs.sleeps}`}
    >
      <ul className="grid gap-4 sm:grid-cols-3">
        {sleeping.map((room) => (
          <li key={room.room} className="rounded-xl bg-white p-6 ring-1 ring-snow-200">
            <h3 className="font-display text-lg font-semibold text-pine-700">{room.room}</h3>
            <p className="mt-2 text-xl font-semibold">{room.beds}</p>
            <p className="mt-3 text-sm text-ink/70">{room.note}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
