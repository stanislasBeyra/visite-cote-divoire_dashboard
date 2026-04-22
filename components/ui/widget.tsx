import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";

export interface WidgetProps extends React.ComponentProps<typeof Card> {
  title?: string;
}

export function Widget({ title, className, children, ...props }: WidgetProps) {
  return (
    <Card data-ui="widget" className={cn("p-4", className)} {...props}>
      {title && (
        <p className="mb-3 font-mono text-xs uppercase tracking-wide text-muted">{title}</p>
      )}
      {children}
    </Card>
  );
}
