import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merci — votre demande a bien été reçue",
  description:
    "Merci pour votre demande d'inscription. Bérénice vous recontacte personnellement sous 48 heures ouvrées.",
  alternates: { canonical: "/merci" },
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-32">
      <span
        aria-hidden
        className="mx-auto mb-8 inline-flex size-20 items-center justify-center rounded-full bg-[var(--accent)]/15 text-[var(--accent)]"
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </span>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
        Demande reçue
      </p>
      <h1 className="mt-3 font-serif text-4xl text-[var(--primary)] sm:text-5xl">
        Merci pour votre confiance
      </h1>
      <p className="mt-5 text-lg text-[var(--ink)]/80">
        Votre demande d'inscription a bien été enregistrée.{" "}
        <strong>Bérénice vous recontacte personnellement sous 48 heures ouvrées</strong>{" "}
        au numéro que vous avez indiqué, pour convenir d'un premier rendez-vous
        à l'Académie au 59 boulevard de Cimiez.
      </p>
      <div className="mt-10 grid gap-5 text-left sm:grid-cols-3">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Prochaine étape
          </p>
          <p className="mt-2 font-serif text-base text-[var(--primary)]">
            Premier rendez-vous
          </p>
          <p className="mt-1 text-xs text-[var(--ink)]/75">
            Visite de l'Académie, présentation de la méthode, choix des créneaux.
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            En attendant
          </p>
          <p className="mt-2 font-serif text-base text-[var(--primary)]">
            Notre blog
          </p>
          <p className="mt-1 text-xs text-[var(--ink)]/75">
            15 articles pour vous préparer à la rentrée 2026 – 2027.
          </p>
          <Link
            href="/blog"
            prefetch
            className="mt-3 inline-block text-xs font-medium text-[var(--primary)] hover:text-[var(--accent)]"
          >
            Lire les articles →
          </Link>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Question urgente ?
          </p>
          <p className="mt-2 font-serif text-base text-[var(--primary)]">
            06 81 84 27 23
          </p>
          <p className="mt-1 text-xs text-[var(--ink)]/75">
            Appel direct possible aux heures de cours.
          </p>
        </div>
      </div>
      <Link
        href="/"
        className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)]"
      >
        ← Retour à l'accueil
      </Link>
    </div>
  );
}
