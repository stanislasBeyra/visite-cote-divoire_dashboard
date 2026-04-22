"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/cn";

export interface SearchBarProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  defaultValue?: string;
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export function SearchBar({
  className,
  defaultValue = "",
  onSearch,
  placeholder = "Rechercher…",
  ...props
}: SearchBarProps) {
  const [q, setQ] = React.useState(defaultValue);

  return (
    <form
      data-ui="searchbar"
      className={cn("flex w-full max-w-md gap-2", className)}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch?.(q);
      }}
      {...props}
    >
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={placeholder}
        aria-label="Recherche"
        className="flex-1"
      />
      <Button type="submit" variant="secondary">
        OK
      </Button>
    </form>
  );
}
