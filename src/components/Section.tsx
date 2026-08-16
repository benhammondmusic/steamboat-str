import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "light" | "pine";
}

export function Section({ id, eyebrow, title, intro, children, tone = "light" }: SectionProps) {
  const isPine = tone === "pine";
  return (
    <section
      id={id}
      className={isPine ? "scroll-mt-20 bg-pine-900 text-snow-50" : "scroll-mt-20 bg-snow-50"}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        {eyebrow ? (
          <p
            className={
              isPine
                ? "text-sm font-semibold tracking-widest text-aspen-400 uppercase"
                : "text-sm font-semibold tracking-widest text-pine-500 uppercase"
            }
          >
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 font-display text-3xl font-semibold text-balance sm:text-4xl">
          {title}
        </h2>
        {intro ? (
          <p
            className={
              isPine
                ? "mt-4 max-w-2xl text-lg text-snow-200"
                : "mt-4 max-w-2xl text-lg text-ink/70"
            }
          >
            {intro}
          </p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
