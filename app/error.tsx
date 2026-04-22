"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SolClefLogo } from "@/components/SolClefLogo";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Envoi optionnel vers un service d'erreur (à brancher à Sentry plus tard)
    console.error("[boundary]", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <SolClefLogo size={96} className="mx-auto" />
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
        Une fausse note s'est glissée
      </p>
      <h1 className="mt-3 font-serif text-3xl text-[var(--primary)] sm:text-4xl">
        Une erreur inattendue est survenue
      </h1>
      <p className="mt-4 text-[var(--ink)]/80">
        Nous sommes sincèrement désolés. Essayez de recharger la page — si le
        problème persiste, contactez-nous pour que nous puissions vous aider.
      </p>
      {error.digest && (
        <p className="mt-2 text-xs text-[var(--muted)]">
          Référence : <code>{error.digest}</code>
        </p>
      )}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)]"
        >
          Réessayer
        </button>
        <Link
          href="/"
          className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
