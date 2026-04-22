import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
}

export function AvatarGroup({
  className,
  children,
  max = 4,
  ...props
}: AvatarGroupProps) {
  const items = React.Children.toArray(children).filter(Boolean);
  const shown = items.slice(0, max);
  const extra = items.length - shown.length;

  return (
    <div
      data-ui="avatargroup"
      className={cn("flex items-center", className)}
      {...props}
    >
      {shown.map((child, i) => (
        <div key={i} className={cn("-ml-2 first:ml-0", "ring-2 ring-background")}>
          {child}
        </div>
      ))}
      {extra > 0 && (
        <div className="-ml-2 flex h-10 w-10 items-center justify-center border border-line bg-background font-mono text-xs ring-2 ring-background">
          +{extra}
        </div>
      )}
    </div>
  );
}
