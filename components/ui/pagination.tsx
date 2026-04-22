"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  className,
  ...props
}: PaginationProps) {
  const canPrev = page > 1;
  const canNext = page < totalPages;
  return (
    <nav
      aria-label="Pagination"
      data-ui="pagination"
      className={cn("flex flex-wrap items-center gap-2", className)}
      {...props}
    >
      <Button
        type="button"
        variant="secondary"
        size="sm"
        disabled={!canPrev}
        onClick={() => onPageChange(page - 1)}
      >
        Précédent
      </Button>
      <span className="font-mono text-xs text-muted">
        {page} / {Math.max(1, totalPages)}
      </span>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        disabled={!canNext}
        onClick={() => onPageChange(page + 1)}
      >
        Suivant
      </Button>
    </nav>
  );
}
