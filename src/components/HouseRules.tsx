import { houseRules, property } from "@/data/property";

export function HouseRules() {
  return (
    <section id="rules" className="scroll-mt-20 border-t border-snow-200 bg-snow-100">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-2xl font-semibold">Good to know before you book</h2>
        <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {houseRules.map((entry) => (
            <div key={entry.rule}>
              <dt className="text-sm font-semibold text-pine-700">{entry.rule}</dt>
              <dd className="mt-1 text-ink/70">{entry.detail}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm text-ink/50">
          Colorado short term rental license {property.licenseNumber}
        </p>
      </div>
    </section>
  );
}
