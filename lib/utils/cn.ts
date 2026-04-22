export type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[];

function flatten(values: ClassValue[]): string[] {
  const out: string[] = [];
  for (const v of values) {
    if (v == null || v === false) continue;
    if (typeof v === "string" && v.trim()) out.push(v);
    else if (typeof v === "number") out.push(String(v));
    else if (Array.isArray(v)) out.push(...flatten(v));
  }
  return out;
}

/** Concatène des classes sans dépendance externe (compatible Tailwind). */
export function cn(...inputs: ClassValue[]): string {
  return flatten(inputs).join(" ");
}
