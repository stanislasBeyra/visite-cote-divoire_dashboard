"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface InfiniteScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  hasMore: boolean;
  onLoadMore: () => void;
  loading?: boolean;
}

export function InfiniteScroll({
  hasMore,
  onLoadMore,
  loading,
  className,
  children,
  ...props
}: InfiniteScrollProps) {
  const sentinel = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = sentinel.current;
    if (!el || !hasMore || loading) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) onLoadMore();
      },
      { rootMargin: "120px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hasMore, loading, onLoadMore]);

  return (
    <div data-ui="infinitescroll" className={cn(className)} {...props}>
      {children}
      {hasMore && <div ref={sentinel} className="h-8 w-full" aria-hidden />}
    </div>
  );
}
