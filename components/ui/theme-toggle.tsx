"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export interface ThemeToggleProps {
  className?: string;
}

/** Bascule `data-theme` (+ classe `dark`) sur `<html>`. */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    root.classList.toggle("dark", next === "dark");
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      data-ui="themetoggle"
      className={className}
      onClick={toggle}
      aria-label="Basculer le thème clair ou sombre"
    >
      Thème
    </Button>
  );
}
