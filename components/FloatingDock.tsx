"use client";

import { useEffect, useState } from "react";

/**
 * Conteneur "dock" unique pour les FAB du coin bas-droit.
 * L'AccessibilityWidget reste à gauche.
 */
export function FloatingDock({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-label="Outils flottants"
      className="pointer-events-none fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3"
    >
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        {children}
      </div>
    </div>
  );
}

export function BackToTopDock() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const on = () => setVisible(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        })
      }
      aria-label="Remonter en haut de la page"
      title="Haut de page"
      data-tooltip="Haut de page"
      className={`fab-tooltip group inline-flex size-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--primary)] shadow-lg transition hover:border-[var(--accent)] hover:text-[var(--accent)] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <svg
        aria-hidden
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
