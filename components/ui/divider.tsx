import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type DividerProps = React.HTMLAttributes<HTMLHRElement>;

/** Séparateur sémantique horizontal (équivalent visuel à [Separator]). */
export function Divider({ className, ...props }: DividerProps) {
  return (
    <hr
      data-ui="divider"
      className={cn("my-4 h-px w-full border-0 bg-line", className)}
      {...props}
    />
  );
}
