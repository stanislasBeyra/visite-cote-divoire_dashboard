"use client";

import * as React from "react";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
export type CommandItem = { id: string; label: string; onSelect: () => void };

export interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CommandItem[];
  placeholder?: string;
}

export function CommandMenu({
  open,
  onOpenChange,
  items,
  placeholder = "Commande…",
}: CommandMenuProps) {
  const [q, setQ] = React.useState("");
  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div className="w-full max-w-lg border border-line bg-background p-4">
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={placeholder}
          autoFocus
          aria-label="Recherche de commande"
        />
        <ul className="mt-2 max-h-64 overflow-auto text-sm" data-ui="commandmenu">
          {filtered.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="w-full px-2 py-2 text-left hover:bg-foreground/[0.04]"
                onClick={() => {
                  item.onSelect();
                  onOpenChange(false);
                  setQ("");
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Dialog>
  );
}
