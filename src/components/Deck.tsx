import Image from "next/image";
import { deck } from "@/data/property";

export function Deck() {
  return (
    <section id="deck" className="scroll-mt-20 bg-snow-100">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-widest text-pine-500 uppercase">
            Outdoor space
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-balance sm:text-4xl">
            {deck.heading}
          </h2>
          <p className="mt-4 text-lg text-ink/70">{deck.body}</p>
          <ul className="mt-6 space-y-3">
            {deck.points.map((point) => (
              <li key={point} className="flex gap-3 text-ink/80">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-aspen-400"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-4/3 overflow-hidden rounded-xl ring-1 ring-snow-200">
          <Image
            src={deck.image.src}
            alt={deck.image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
