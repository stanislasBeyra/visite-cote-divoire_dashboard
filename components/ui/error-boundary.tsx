"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error, info: React.ErrorInfo) => void;
}

type State = { error: Error | null };

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.props.onError?.(error, info);
  }

  render() {
    if (this.state.error) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div
          role="alert"
          data-ui="errorboundary"
          className={cn(
            "border border-line bg-background p-6 text-sm text-foreground",
          )}
        >
          <p className="font-medium">Une erreur s&apos;est produite.</p>
          <p className="mt-2 text-muted">{this.state.error.message}</p>
          <button
            type="button"
            className="mt-4 border border-line px-4 py-2 text-xs font-medium uppercase tracking-wide hover:bg-foreground/[0.04]"
            onClick={() => this.setState({ error: null })}
          >
            Réessayer
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
