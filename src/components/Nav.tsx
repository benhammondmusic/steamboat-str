import { property } from "@/data/property";

const links = [
  { href: "#gallery", label: "Photos" },
  { href: "#ski", label: "Ski trips" },
  { href: "#weekend", label: "Long weekends" },
  { href: "#amenities", label: "Amenities" },
  { href: "#location", label: "Getting here" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-snow-200 bg-snow-50/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3"
      >
        <a href="#top" className="font-display text-lg font-semibold text-pine-700">
          {property.name}
        </a>
        <ul className="hidden items-center gap-6 text-sm text-ink/70 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a className="transition hover:text-pine-700" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#book"
          className="rounded-full bg-pine-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-pine-900"
        >
          Check dates
        </a>
      </nav>
    </header>
  );
}
