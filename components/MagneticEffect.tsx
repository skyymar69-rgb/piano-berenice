"use client";

import { useEffect } from "react";

/**
 * Active l'effet "magnetic" sur tous les boutons portant la classe
 * `.magnetic-cta` : le bouton suit légèrement le curseur sur desktop.
 * Désactivé si prefers-reduced-motion ou pointer ≠ fine.
 */
export function MagneticEffect() {
  useEffect(() => {
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine =
      window.matchMedia &&
      window.matchMedia("(pointer: fine)").matches;
    if (reduced || !fine) return;

    const STRENGTH = 0.18;
    const targets = document.querySelectorAll<HTMLElement>(".magnetic-cta");

    const handlers: Array<() => void> = [];
    targets.forEach((el) => {
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * STRENGTH}px, ${y * STRENGTH}px)`;
      };
      const onLeave = () => {
        el.style.transform = "";
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      handlers.push(() => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => handlers.forEach((h) => h());
  }, []);

  return null;
}
