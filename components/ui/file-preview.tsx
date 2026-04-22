import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface FilePreviewProps extends React.HTMLAttributes<HTMLUListElement> {
  names: string[];
}

export function FilePreview({ names, className, ...props }: FilePreviewProps) {
  if (names.length === 0) return null;
  return (
    <ul
      data-ui="filepreview"
      className={cn("list-none space-y-1 border border-line p-3 text-sm text-muted", className)}
      {...props}
    >
      {names.map((n) => (
        <li key={n} className="font-mono text-xs">
          {n}
        </li>
      ))}
    </ul>
  );
}
