"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Stepper } from "@/components/ui/stepper";
import { cn } from "@/lib/utils/cn";

export interface WizardProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: string[];
  children: React.ReactNode;
  onFinish?: () => void;
}

export function Wizard({
  steps,
  children,
  onFinish,
  className,
  ...props
}: WizardProps) {
  const [i, setI] = React.useState(0);
  const last = i >= React.Children.count(children) - 1;

  return (
    <div data-ui="wizard" className={cn("space-y-8", className)} {...props}>
      <Stepper steps={steps} current={i} />
      <div className="border border-line p-6">{React.Children.toArray(children)[i]}</div>
      <div className="flex justify-between gap-2">
        <Button
          type="button"
          variant="secondary"
          disabled={i === 0}
          onClick={() => setI((x) => Math.max(0, x - 1))}
        >
          Retour
        </Button>
        <Button
          type="button"
          variant="primary"
          onClick={() => {
            if (last) onFinish?.();
            else setI((x) => x + 1);
          }}
        >
          {last ? "Terminer" : "Suivant"}
        </Button>
      </div>
    </div>
  );
}
