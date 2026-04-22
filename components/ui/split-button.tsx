import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface SplitButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Action principale (ex. [Button]) */
  primary: React.ReactNode;
  /** Menu secondaire (ex. [DropdownMenu]) */
  secondary?: React.ReactNode;
}

export function SplitButton({ primary, secondary, className, ...props }: SplitButtonProps) {
  return (
    <div
      role="group"
      data-ui="splitbutton"
      className={cn("inline-flex items-stretch border border-line", className)}
      {...props}
    >
      <div className="flex-1 [&_button]:h-full [&_button]:rounded-none [&_button]:border-0">
        {primary}
      </div>
      {secondary && (
        <div className="border-l border-line [&_button]:h-full [&_button]:rounded-none [&_button]:border-0">
          {secondary}
        </div>
      )}
    </div>
  );
}
