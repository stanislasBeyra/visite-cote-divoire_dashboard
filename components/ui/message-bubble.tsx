import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type MessageBubbleVariant = "sent" | "received";

export interface MessageBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: MessageBubbleVariant;
}

export function MessageBubble({
  className,
  variant = "received",
  ...props
}: MessageBubbleProps) {
  return (
    <div
      data-ui="messagebubble"
      data-variant={variant}
      className={cn(
        "max-w-[85%] border px-3 py-2 text-sm",
        variant === "received" && "mr-auto border-line bg-background text-foreground",
        variant === "sent" && "ml-auto border-foreground bg-foreground text-background",
        className,
      )}
      {...props}
    />
  );
}
