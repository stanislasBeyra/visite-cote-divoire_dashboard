"use client";

import * as React from "react";

export type HeroSlide = {
  src: string;
  alt: string;
  caption: string;
  badge: string;
};

export function HeroCarousel({
  slides,
  intervalMs = 5800,
}: {
  slides: readonly HeroSlide[];
  intervalMs?: number;
}) {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (slides.length <= 1 || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [slides.length, intervalMs, paused]);

  if (slides.length === 0) return null;

  return (
    <div
      className="relative aspect-[5/4] w-full overflow-hidden border border-line"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="Carrousel d'images"
      aria-label="Découverte de la Côte d'Ivoire"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.src}
            alt={slide.alt}
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent"
            aria-hidden
          />
        </div>
      ))}

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-background">
        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] opacity-80">
            En ce moment
          </p>
          <p className="truncate font-serif text-xl italic">
            {slides[index].caption}
          </p>
        </div>
        <span className="mono inline-flex shrink-0 border border-background/40 bg-background/10 px-2 py-1 text-[10px] uppercase tracking-wide backdrop-blur">
          {slides[index].badge}
        </span>
      </div>

      
    </div>
  );
}
