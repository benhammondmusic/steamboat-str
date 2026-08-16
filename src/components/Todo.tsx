import { TODO } from "@/data/property";

export function isTodo(value: string): boolean {
  return value === TODO;
}

/** Loud amber badge so unfilled listing facts are impossible to miss in review. */
export function Todo({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded bg-aspen-100 px-2 py-0.5 text-xs font-semibold text-aspen-600 ring-1 ring-aspen-400/40">
      TODO: {label}
    </span>
  );
}
