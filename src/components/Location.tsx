import { distances, property } from "@/data/property";
import { Section } from "./Section";

export function Location() {
  const { address } = property;
  const fullAddress = `${address.street} ${address.unit}, ${address.city}, ${address.state} ${address.zip}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  return (
    <Section
      id="location"
      title="Getting here"
      intro="Drive times are approximate. Give yourself extra over Rabbit Ears in a storm."
    >
      <ul className="grid gap-8 sm:grid-cols-3">
        {distances.map((entry) => (
          <li key={entry.from} className="border-t border-snow-200 pt-4">
            <p className="text-sm font-semibold text-pine-700">{entry.from}</p>
            <p className="mt-1 font-display text-2xl font-semibold">{entry.driveTime}</p>
            <p className="text-sm text-ink/60">{entry.miles} miles</p>
            <p className="mt-2 text-sm text-ink/70">{entry.note}</p>
          </li>
        ))}
      </ul>

      <div className="mt-12 border-t border-snow-200 pt-4">
        <h3 className="text-sm font-semibold text-pine-700">Address</h3>
        <address className="mt-1 not-italic text-ink/80">
          {address.street} {address.unit}
          <br />
          {address.city}, {address.state} {address.zip}
        </address>
        <a
          className="mt-4 inline-block font-semibold text-pine-700 underline underline-offset-4 transition hover:text-pine-900"
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open in Google Maps
        </a>
      </div>
    </Section>
  );
}
