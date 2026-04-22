import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type TagProps = React.HTMLAttributes<HTMLSpanElement>;

export function Tag({ className, ...props }: TagProps) {
  return (
    <span
      data-ui="tag"
      className={cn(
        "inline-flex items-center border border-line px-2 py-0.5 text-xs text-muted",
        className,
      )}
      {...props}
    />
  );
}
