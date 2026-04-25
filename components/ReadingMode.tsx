"use client";

import { useEffect, useState } from "react";

/**
 * Bouton "Mode lecture confortable" :
 * agrandit la typo, masque les éléments non essentiels,
 * augmente l'interlignage. Toggle sticky en haut à droite de l'article.
 */
export function ReadingMode() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (active) {
      document.documentElement.dataset.readingMode = "on";
    } else {
      delete document.documentElement.dataset.readingMode;
    }
  }, [active]);

  return (
    <button
      type="button"
      onClick={() => setActive((v) => !v)}
      aria-pressed={active}
      className="fixed right-4 top-24 z-30 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--primary)] shadow-sm transition hover:border-[var(--accent)]"
    >
      <svg
        aria-hidden
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
      {active ? "Quitter la lecture" : "Mode lecture"}
    </button>
  );
}
