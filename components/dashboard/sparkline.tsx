/** Mini courbe monochrome (réf. Dashboard.html — stroke 1.3). */

export function buildSparkPath(
  values: number[],
  width = 90,
  height = 32,
): string {
  if (values.length === 0) return "";
  const max = Math.max(...values);
  const min = Math.min(...values);
  const span = max - min || 1;
  return values
    .map((v, i) => {
      const x = (i / (values.length - 1 || 1)) * width;
      const y = height - 4 - ((v - min) / span) * (height - 8);
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
}

export function Sparkline({ values }: { values: number[] }) {
  const d = buildSparkPath(values, 100, 32);
  return (
    <svg
      width="90"
      height="32"
      viewBox="0 0 100 32"
      className="shrink-0 text-foreground"
      aria-hidden
    >
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
