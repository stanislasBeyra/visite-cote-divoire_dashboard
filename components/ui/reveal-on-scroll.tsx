"use client";

import * as React from "react";

/**
 * Scanne les elements `.ds-reveal` et ajoute la classe `is-visible`
 * quand ils entrent dans le viewport. Permet d avoir des animations
 * d apparition au scroll en conservant un rendu SSR statique.
 */
export function RevealOnScroll() {
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>(".ds-reveal"));
    if (targets.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add("is-visible");
        return;
      }
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
