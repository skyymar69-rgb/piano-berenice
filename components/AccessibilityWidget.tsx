"use client";

import { useEffect, useRef, useState } from "react";

type Prefs = {
  fontSize: number;
  contrast: "normal" | "high";
  dyslexia: boolean;
  motion: "normal" | "reduced";
  underlineLinks: boolean;
  letterSpacing: number;
};

const DEFAULTS: Prefs = {
  fontSize: 1,
  contrast: "normal",
  dyslexia: false,
  motion: "normal",
  underlineLinks: false,
  letterSpacing: 0,
};

const STORAGE_KEY = "apb-a11y";

function apply(p: Prefs) {
  const d = document.documentElement;
  d.style.setProperty("--a11y-font-scale", String(p.fontSize));
  d.style.setProperty("--a11y-letter-spacing", `${p.letterSpacing}em`);
  if (p.contrast === "high") d.dataset.contrast = "high";
  else delete d.dataset.contrast;
  if (p.dyslexia) d.dataset.dyslexia = "on";
  else delete d.dataset.dyslexia;
  if (p.motion === "reduced") d.dataset.motion = "reduced";
  else delete d.dataset.motion;
  if (p.underlineLinks) d.dataset.underlineLinks = "on";
  else delete d.dataset.underlineLinks;
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULTS);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const p = { ...DEFAULTS, ...JSON.parse(raw) };
        setPrefs(p);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const update = (patch: Partial<Prefs>) => {
    const next = { ...prefs, ...patch };
    setPrefs(next);
    apply(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  const reset = () => {
    setPrefs(DEFAULTS);
    apply(DEFAULTS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  // Close on Esc
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="Ouvrir les options d'accessibilité"
        title="Accessibilité"
        className="fixed bottom-4 left-4 z-40 inline-flex size-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--primary)] shadow-lg transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        <svg
          aria-hidden
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="4" r="2" />
          <path d="M5 9l7 2 7-2" />
          <path d="M12 11v4" />
          <path d="M9 21l3-6 3 6" />
        </svg>
      </button>

      {open && (
        <div
          ref={panelRef}
          id="a11y-panel"
          role="dialog"
          aria-label="Options d'accessibilité"
          className="fixed bottom-20 left-4 right-4 z-40 max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl sm:right-auto sm:w-96"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-serif text-lg text-[var(--primary)]">
              Accessibilité
            </h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="size-8 rounded-full text-[var(--muted)] hover:text-[var(--primary)]"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            <Row label="Taille du texte">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    update({
                      fontSize: Math.max(0.875, prefs.fontSize - 0.125),
                    })
                  }
                  aria-label="Diminuer la taille du texte"
                  className="size-8 rounded-full border border-[var(--border)] text-[var(--primary)]"
                >
                  A-
                </button>
                <span
                  className="min-w-[3ch] text-center text-sm tabular-nums"
                  aria-live="polite"
                >
                  {Math.round(prefs.fontSize * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() =>
                    update({
                      fontSize: Math.min(1.5, prefs.fontSize + 0.125),
                    })
                  }
                  aria-label="Augmenter la taille du texte"
                  className="size-8 rounded-full border border-[var(--border)] text-[var(--primary)]"
                >
                  A+
                </button>
              </div>
            </Row>

            <Row label="Espacement des lettres">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    update({
                      letterSpacing: Math.max(0, prefs.letterSpacing - 0.02),
                    })
                  }
                  aria-label="Diminuer l'espacement"
                  className="size-8 rounded-full border border-[var(--border)]"
                >
                  −
                </button>
                <span className="min-w-[4ch] text-center text-sm tabular-nums">
                  {prefs.letterSpacing.toFixed(2)}em
                </span>
                <button
                  type="button"
                  onClick={() =>
                    update({
                      letterSpacing: Math.min(0.15, prefs.letterSpacing + 0.02),
                    })
                  }
                  aria-label="Augmenter l'espacement"
                  className="size-8 rounded-full border border-[var(--border)]"
                >
                  +
                </button>
              </div>
            </Row>

            <Toggle
              label="Contraste renforcé"
              checked={prefs.contrast === "high"}
              onChange={(v) =>
                update({ contrast: v ? "high" : "normal" })
              }
            />
            <Toggle
              label="Police adaptée dyslexie"
              checked={prefs.dyslexia}
              onChange={(v) => update({ dyslexia: v })}
            />
            <Toggle
              label="Souligner les liens"
              checked={prefs.underlineLinks}
              onChange={(v) => update({ underlineLinks: v })}
            />
            <Toggle
              label="Réduire les animations"
              checked={prefs.motion === "reduced"}
              onChange={(v) =>
                update({ motion: v ? "reduced" : "normal" })
              }
            />

            <button
              type="button"
              onClick={reset}
              className="mt-2 w-full rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
            >
              Réinitialiser les préférences
            </button>
          </div>

          <p className="mt-5 text-xs text-[var(--muted)]">
            Site conçu selon les référentiels RGAA 4.1, WCAG 2.1 AA et
            l'European Accessibility Act.
          </p>
        </div>
      )}
    </>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm text-[var(--foreground)]">{label}</span>
      {children}
    </div>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3">
      <span className="text-sm text-[var(--foreground)]">{label}</span>
      <span
        role="switch"
        aria-checked={checked}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            onChange(!checked);
          }
        }}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition ${
          checked ? "bg-[var(--primary)]" : "bg-[var(--muted-bg)] border border-[var(--border)]"
        }`}
      >
        <span
          className={`inline-block size-5 rounded-full bg-[var(--surface)] shadow transition ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </span>
    </label>
  );
}
