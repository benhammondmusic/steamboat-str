import { property } from "@/data/property";

export function Footer() {
  const { address } = property;
  return (
    <footer className="border-t border-snow-200 bg-snow-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {property.name}, {address.city}, {address.state}
        </p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
