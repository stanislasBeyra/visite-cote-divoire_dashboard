import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null;
  alt?: string;
  fallback?: string;
}

export function Avatar({
  className,
  src,
  alt = "",
  fallback = "?",
  ...props
}: AvatarProps) {
  const initial = (fallback || alt || "?").slice(0, 2).toUpperCase();
  return (
    <div
      data-ui="avatar"
      className={cn(
        "relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden border border-line bg-foreground/[0.04] font-mono text-xs",
        className,
      )}
      {...props}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <span aria-hidden>{initial}</span>
      )}
    </div>
  );
}
