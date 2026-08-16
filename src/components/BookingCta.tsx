import { property } from "@/data/property";
import { Todo, isTodo } from "./Todo";

const channels = [
  { key: "itrip", label: "Check dates and book" },
  { key: "airbnb", label: "Book on Airbnb" },
  { key: "vrbo", label: "Book on Vrbo" },
] as const;

export function BookingCta() {
  const { booking, rates } = property;
  const live = channels.filter((channel) => !isTodo(booking[channel.key]));

  return (
    <section id="book" className="scroll-mt-20 bg-pine-900 text-snow-50">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-semibold text-balance sm:text-4xl">
          Tell us your dates
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-snow-200">{rates.note}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {live.map((channel, index) => (
            <a
              key={channel.key}
              href={booking[channel.key]}
              target="_blank"
              rel="noreferrer"
              className={
                index === 0
                  ? "rounded-full bg-aspen-400 px-6 py-3 font-semibold text-pine-900 transition hover:bg-aspen-100"
                  : "rounded-full px-6 py-3 font-semibold ring-1 ring-snow-50/40 transition hover:bg-snow-50/10"
              }
            >
              {channel.label}
            </a>
          ))}
        </div>

        <div className="mt-8 space-y-2 text-snow-200">
          <p>
            Email:{" "}
            {isTodo(booking.email) ? (
              <Todo label="contact email" />
            ) : (
              <a className="underline underline-offset-4" href={`mailto:${booking.email}`}>
                {booking.email}
              </a>
            )}
          </p>
          <p>
            Phone:{" "}
            {isTodo(booking.phone) ? (
              <Todo label="contact phone" />
            ) : (
              <a className="underline underline-offset-4" href={`tel:${booking.phone}`}>
                {booking.phone}
              </a>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
