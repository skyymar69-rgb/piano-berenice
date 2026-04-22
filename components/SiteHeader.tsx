import Link from "next/link";
import { school } from "@/lib/school";

const nav = [
  { href: "/professeur", label: "Le professeur" },
  { href: "/cours/piano", label: "Piano" },
  { href: "/cours/solfege", label: "Solfège" },
  { href: "/cours/eveil-musical", label: "Éveil musical" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/plan-acces", label: "Plan d'accès" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex flex-col leading-tight"
          aria-label="Retour à l'accueil"
        >
          <span className="font-serif text-lg font-semibold text-[var(--primary)] sm:text-xl">
            {school.brand.name}
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Nice · Cimiez · depuis {school.brand.foundedYear}
          </span>
        </Link>
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-5 text-sm text-[var(--ink)]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-[var(--accent)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/carte-de-visite"
            aria-label="Carte de visite numérique"
            title="Carte de visite numérique"
            className="hidden rounded-full border border-[var(--border)] bg-white/60 p-2 text-[var(--primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] sm:inline-flex"
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
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
              <path d="M14 14h3m4 0h-1m-3 4v3m0-7v1m4 2h3m-3 4h3" />
            </svg>
          </Link>
          <Link
            href="/inscription"
            className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)]"
          >
            Cours d'essai
          </Link>
        </div>
      </div>
      <nav aria-label="Navigation mobile" className="lg:hidden">
        <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto border-t border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)]">
          {nav.map((item) => (
            <li key={item.href} className="snap-start shrink-0">
              <Link
                href={item.href}
                className="whitespace-nowrap hover:text-[var(--accent)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
