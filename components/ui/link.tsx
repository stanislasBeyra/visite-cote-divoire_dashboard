import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface LinkProps extends NextLinkProps {
  className?: string;
  children?: React.ReactNode;
}

export function Link({ className, ...props }: LinkProps) {
  return (
    <NextLink
      data-ui="link"
      className={cn(
        "text-foreground underline-offset-4 transition-opacity hover:opacity-80 hover:underline",
        className,
      )}
      {...props}
    />
  );
}
