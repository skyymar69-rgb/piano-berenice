"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "apb-cookie-consent-v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (!v) setVisible(true);
    } catch {
      // storage disabled — don't show
    }
  }, []);

  if (!visible) return null;

  const dismiss = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-5 shadow-2xl backdrop-blur sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-md"
    >
      <p id="cookie-title" className="font-serif text-lg text-[var(--primary)]">
        Respect de votre vie privée
      </p>
      <p
        id="cookie-desc"
        className="mt-2 text-sm leading-relaxed text-[var(--ink)]/80"
      >
        Ce site n'utilise aucun cookie publicitaire ni traceur tiers. Seuls des
        cookies strictement nécessaires au fonctionnement peuvent être déposés.
        Pour en savoir plus, consultez notre{" "}
        <Link
          href="/cookies"
          className="font-medium text-[var(--primary)] underline underline-offset-2"
        >
          politique cookies
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => dismiss("accepted")}
          className="rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)]"
        >
          J'ai compris
        </button>
        <Link
          href="/cookies"
          className="rounded-full border border-[var(--border)] px-5 py-2 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
        >
          En savoir plus
        </Link>
      </div>
    </div>
  );
}
