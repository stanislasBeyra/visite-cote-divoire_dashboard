"use client";

import * as React from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils/cn";

export interface RichTextEditorProps
  extends Omit<React.ComponentProps<typeof Textarea>, "children"> {
  /** Remplace par TipTap / Lexical / Slate selon le besoin. */
  hint?: string;
}

/** Éditeur minimal (textarea) — à remplacer par un vrai éditeur riche. */
export function RichTextEditor({ className, hint, ...props }: RichTextEditorProps) {
  return (
    <div data-ui="richtexteditor" className="space-y-2">
      <Textarea className={cn("min-h-[200px] font-mono text-xs", className)} {...props} />
      {hint && <p className="text-xs text-muted">{hint}</p>}
    </div>
  );
}
