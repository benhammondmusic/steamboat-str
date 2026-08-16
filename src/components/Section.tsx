import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "light" | "pine";
}

export function Section({ id, title, intro, children, tone = "light" }: SectionProps) {
  const isPine = tone === "pine";
  return (
    <section
      id={id}
      className={isPine ? "scroll-mt-20 bg-pine-900 text-snow-50" : "scroll-mt-20 bg-snow-50"}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-semibold text-balance sm:text-4xl">{title}</h2>
        {intro ? (
          <p className={isPine ? "mt-3 max-w-2xl text-snow-200" : "mt-3 max-w-2xl text-ink/70"}>
            {intro}
          </p>
        ) : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
