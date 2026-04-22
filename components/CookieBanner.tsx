"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "apb-cookie-consent-v2";

type Consent = {
  essential: true; // toujours vrai (non refusable, cf. art. 82 LIL)
  analytics: boolean;
  timestamp: string;
};

type Decision = "accepted" | "refused" | "custom";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [panel, setPanel] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) setVisible(true);
    } catch {
      // storage disabled — don't show
    }
  }, []);

  const save = (decision: Decision, analyticsValue: boolean) => {
    const consent: Consent = {
      essential: true,
      analytics: analyticsValue,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
      localStorage.setItem(`${STORAGE_KEY}:decision`, decision);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  const acceptAll = () => save("accepted", true);
  const refuseAll = () => save("refused", false);
  const savePreferences = () => save("custom", analytics);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      aria-modal="false"
      className="fixed inset-x-3 bottom-3 z-50 max-h-[85dvh] overflow-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)]/98 p-5 shadow-2xl backdrop-blur sm:inset-x-auto sm:bottom-4 sm:left-4 sm:right-4 sm:max-w-2xl sm:p-6"
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className="hidden size-11 shrink-0 items-center justify-center rounded-full bg-[var(--muted-bg)] text-[var(--accent)] sm:inline-flex"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.5 12a9.5 9.5 0 1 1-9.5-9.5 3.5 3.5 0 0 0 5 5 3.5 3.5 0 0 0 4.5 4.5" />
            <circle cx="9" cy="10" r="0.8" fill="currentColor" />
            <circle cx="14" cy="15" r="0.8" fill="currentColor" />
            <circle cx="9" cy="16" r="0.8" fill="currentColor" />
            <circle cx="15" cy="9" r="0.8" fill="currentColor" />
          </svg>
        </span>
        <div className="min-w-0 flex-1">
          <h2
            id="cookie-title"
            className="font-serif text-lg text-[var(--primary)] sm:text-xl"
          >
            Respect de votre vie privée
          </h2>
          <p
            id="cookie-desc"
            className="mt-2 text-sm leading-relaxed text-[var(--ink)]/80"
          >
            Nous utilisons uniquement des cookies strictement nécessaires au
            bon fonctionnement du site. Aucun cookie publicitaire, aucun
            traceur tiers. Avec votre consentement, nous pourrions activer des
            mesures d'audience anonymisées pour améliorer nos contenus. Vous
            gardez le contrôle à tout moment.
          </p>

          {panel && (
            <div className="mt-4 space-y-3 rounded-xl border border-[var(--border)] bg-[var(--muted-bg)]/60 p-4">
              <label className="flex cursor-not-allowed items-start gap-3 opacity-80">
                <input
                  type="checkbox"
                  checked
                  disabled
                  aria-describedby="c-essential-desc"
                  className="mt-1 size-4 rounded border-[var(--border)] accent-[var(--primary)]"
                />
                <span className="text-sm">
                  <span className="font-medium text-[var(--primary)]">
                    Cookies essentiels
                  </span>
                  <span
                    id="c-essential-desc"
                    className="block text-xs text-[var(--muted)]"
                  >
                    Sécurité des formulaires, préférences d'affichage.
                    Indispensables, exemptés de consentement (art. 82 LIL).
                  </span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 size-4 rounded border-[var(--border)] accent-[var(--primary)]"
                />
                <span className="text-sm">
                  <span className="font-medium text-[var(--primary)]">
                    Mesure d'audience anonymisée
                  </span>
                  <span className="block text-xs text-[var(--muted)]">
                    Statistiques agrégées sur les pages consultées, sans
                    identification personnelle. Désactivé par défaut.
                  </span>
                </span>
              </label>
            </div>
          )}

          {/* Boutons équi-valents en poids visuel — exigence CNIL */}
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            <button
              type="button"
              onClick={acceptAll}
              className="rounded-full bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-[var(--primary-contrast)] transition hover:bg-[var(--primary-hover)]"
            >
              Tout accepter
            </button>
            <button
              type="button"
              onClick={refuseAll}
              className="rounded-full border border-[var(--primary)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--primary)] transition hover:bg-[var(--muted-bg)]"
            >
              Tout refuser
            </button>
            {panel ? (
              <button
                type="button"
                onClick={savePreferences}
                className="rounded-full border border-[var(--accent)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--accent)] transition hover:bg-[var(--muted-bg)]"
              >
                Enregistrer mes choix
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setPanel(true)}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
              >
                Personnaliser
              </button>
            )}
          </div>
          <p className="mt-3 text-xs text-[var(--muted)]">
            Vous pouvez changer d'avis à tout moment depuis la{" "}
            <Link
              href="/cookies"
              className="font-medium text-[var(--primary)] underline underline-offset-2"
            >
              politique cookies
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
