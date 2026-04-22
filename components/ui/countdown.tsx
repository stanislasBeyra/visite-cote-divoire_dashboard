"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export interface CountdownProps extends React.HTMLAttributes<HTMLDivElement> {
  target: Date;
  onComplete?: () => void;
}

export function Countdown({ target, onComplete, className, ...props }: CountdownProps) {
  const [now, setNow] = React.useState(() => Date.now());

  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target.getTime() - now);
  const s = Math.floor(diff / 1000) % 60;
  const m = Math.floor(diff / 60000) % 60;
  const h = Math.floor(diff / 3600000) % 24;
  const d = Math.floor(diff / 86400000);

  React.useEffect(() => {
    if (diff === 0) onComplete?.();
  }, [diff, onComplete]);

  return (
    <div
      data-ui="countdown"
      className={cn("font-mono text-sm tabular-nums text-foreground", className)}
      {...props}
    >
      {d > 0 && `${d}j `}
      {pad(h)}:{pad(m)}:{pad(s)}
    </div>
  );
}
