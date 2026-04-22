import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface QrCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
}

/** Placeholder — intégrer `qrcode.react` ou API serveur pour le rendu matriciel. */
export function QrCode({ value = "", className, ...props }: QrCodeProps) {
  return (
    <div
      role="img"
      aria-label={value ? `QR code pour ${value}` : "QR code"}
      data-ui="qrcode"
      className={cn(
        "flex aspect-square w-40 items-center justify-center border border-line bg-foreground/[0.03] font-mono text-xs text-muted",
        className,
      )}
      {...props}
    >
      QR
    </div>
  );
}
