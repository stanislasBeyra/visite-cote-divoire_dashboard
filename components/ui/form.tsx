import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  function Form({ className, ...props }, ref) {
    return (
      <form
        ref={ref}
        data-ui="form"
        className={cn("flex flex-col gap-4", className)}
        {...props}
      />
    );
  },
);
