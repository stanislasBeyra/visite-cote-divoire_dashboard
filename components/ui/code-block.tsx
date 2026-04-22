import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string;
}

export function CodeBlock({ code, className, ...props }: CodeBlockProps) {
  return (
    <pre
      data-ui="codeblock"
      className={cn(
        "overflow-x-auto border border-line bg-foreground/[0.03] p-4 font-mono text-xs leading-relaxed text-foreground",
        className,
      )}
      {...props}
    >
      <code>{code}</code>
    </pre>
  );
}
