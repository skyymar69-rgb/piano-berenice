import type { Metadata } from "next";
import Link from "next/link";
import { SolClefLogo } from "@/components/SolClefLogo";
import { school } from "@/lib/school";

export const metadata: Metadata = {
  title: "Page introuvable (404)",
  description:
    "La page que vous cherchez n'existe pas ou a été déplacée. Retrouvez toutes les rubriques de l'Académie de piano Bérénice.",
  robots: { index: false, follow: false },
};

const sitemap: {
  title: string;
  links: { href: string; label: string; hint?: string }[];
}[] = [
  {
    title: "Nos cours",
    links: [
      { href: "/cours/piano", label: "Cours de piano", hint: "Enfants · ados · adultes" },
      { href: "/cours/solfege", label: "Cours de solfège", hint: "En groupe" },
      { href: "/cours/eveil-musical", label: "Éveil musical", hint: "Dès 5 ans" },
      { href: "/tarifs", label: "Tarifs & modalités" },
      { href: "/inscription", label: "S'inscrire — cours d'essai" },
    ],
  },
  {
    title: "L'Académie",
    links: [
      { href: "/professeur", label: "Le professeur", hint: "Bérénice Lecardeur" },
      { href: "/plan-acces", label: "Plan d'accès", hint: "59 bd de Cimiez" },
      { href: "/contact", label: "Nous contacter" },
      { href: "/carte-de-visite", label: "Carte de visite numérique" },
    ],
  },
  {
    title: "Informations légales",
    links: [
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/cgu", label: "CGU" },
      { href: "/cgv", label: "CGV" },
      { href: "/politique-confidentialite", label: "Confidentialité" },
      { href: "/cookies", label: "Cookies" },
    ],
  },
];

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      {/* HERO — clé de sol */}
      <section className="grid items-center gap-10 rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--muted-bg)] via-[var(--surface)] to-[var(--muted-bg)] p-8 shadow-[var(--shadow)] sm:p-12 lg:grid-cols-[auto,1fr] lg:gap-16">
        <div
          className="relative mx-auto flex size-48 items-center justify-center lg:size-64"
          aria-hidden
        >
          <div className="absolute inset-0 rounded-full bg-[var(--accent)]/10 blur-2xl" />
          <SolClefLogo size={176} className="relative drop-shadow-xl" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Erreur 404
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
            Cette page joue dans une autre tonalité.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[var(--ink)]/80">
            La page que vous cherchez n'existe pas, a été renommée ou bien est
            en cours d'écriture. Pas d'inquiétude : voici le plan du site pour
            retrouver votre partition.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-[var(--primary-contrast)] transition hover:bg-[var(--primary-hover)]"
            >
              <svg
                aria-hidden
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Retour à l'accueil
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-6 py-3 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
            >
              Signaler un lien cassé
            </Link>
          </div>
        </div>
      </section>

      {/* PLAN DU SITE */}
      <section className="mt-14">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--muted-bg)] text-[var(--accent)]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Plan du site
            </p>
            <h2 className="font-serif text-2xl text-[var(--primary)]">
              Retrouvez la page que vous cherchez
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {sitemap.map((col) => (
            <div
              key={col.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-6"
            >
              <h3 className="font-serif text-lg text-[var(--primary)]">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group flex items-start justify-between gap-4 rounded-lg px-2 py-1.5 transition hover:bg-[var(--muted-bg)]"
                    >
                      <span>
                        <span className="block font-medium text-[var(--primary)]">
                          {l.label}
                        </span>
                        {l.hint && (
                          <span className="block text-xs text-[var(--muted)]">
                            {l.hint}
                          </span>
                        )}
                      </span>
                      <svg
                        aria-hidden
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-1 shrink-0 text-[var(--muted)] transition group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT RAPIDE */}
      <section className="mt-14 rounded-2xl border border-[var(--border)] bg-[var(--primary)] p-8 text-white">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Besoin d'un coup de main ?
            </p>
            <p className="mt-2 font-serif text-2xl">
              Nous vous répondons sous 48 h ouvrées.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${school.contact.phone.replace(/\s+/g, "")}`}
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {school.contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${school.contact.email}`}
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--primary)] transition hover:bg-[var(--accent-hover)]"
            >
              {school.contact.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
