"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Item = {
  label: string;
  href: string;
  hint?: string;
};

type Group = { title: string; items: Item[] };

const groups: Group[] = [
  {
    title: "Nos cours",
    items: [
      { href: "/cours/piano", label: "Cours de piano", hint: "Individuel ou en binôme" },
      { href: "/cours/solfege", label: "Cours de solfège", hint: "En groupe" },
      { href: "/cours/eveil-musical", label: "Éveil musical", hint: "Dès 5 ans" },
      { href: "/tarifs", label: "Tarifs & modalités" },
      { href: "/inscription", label: "S'inscrire pour la rentrée" },
      { href: "/partitions", label: "Partitions libres de droit" },
    ],
  },
  {
    title: "L'Académie",
    items: [
      { href: "/professeur", label: "Bérénice Lecardeur", hint: "Le professeur" },
      { href: "/plan-acces", label: "Plan d'accès", hint: "59 bd de Cimiez" },
      { href: "/contact", label: "Nous contacter" },
      { href: "/carte-de-visite", label: "Carte de visite numérique" },
      { href: "/cours-piano-cimiez", label: "Cours à Cimiez" },
      { href: "/cours-piano-vieux-nice", label: "Cours · Vieux-Nice" },
      { href: "/cours-piano-mont-boron", label: "Cours · Mont-Boron" },
    ],
  },
  {
    title: "Blog & ressources",
    items: [
      { href: "/blog", label: "Blog", hint: "15 articles" },
      { href: "/glossaire", label: "Glossaire musical" },
      { href: "/questions", label: "Questions fréquentes" },
      { href: "/concerts", label: "Concerts & auditions" },
      { href: "/faq", label: "FAQ — toutes les questions" },
    ],
  },
];

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Ferme automatiquement à chaque navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Empêche le scroll de fond et active Échap
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-drawer"
        onClick={() => setOpen((v) => !v)}
        className="burger-toggle inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--primary)] shadow-sm transition hover:border-[var(--accent)]"
      >
        <span aria-hidden className={`burger-icon ${open ? "is-open" : ""}`}>
          <span />
          <span />
          <span />
        </span>
        <span className="hidden sm:inline">{open ? "Fermer" : "Menu"}</span>
      </button>

      {mounted &&
        createPortal(
          <div
            id="mobile-menu-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
            className={`mobile-drawer ${open ? "is-open" : ""}`}
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <div className="mobile-drawer__backdrop" />
            <aside className="mobile-drawer__panel">
              <header className="mobile-drawer__header">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                  Navigation
                </p>
                <p className="mt-1 font-serif text-lg text-[var(--primary)]">
                  Académie de piano Bérénice
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fermer le menu"
                  className="mobile-drawer__close"
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
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </header>

              <nav aria-label="Navigation principale" className="mobile-drawer__body">
                {groups.map((g) => (
                  <section key={g.title} className="mobile-drawer__group">
                    <h3 className="mobile-drawer__group-title">{g.title}</h3>
                    <ul>
                      {g.items.map((it) => {
                        const active =
                          pathname === it.href ||
                          (it.href !== "/" && pathname.startsWith(`${it.href}/`));
                        return (
                          <li key={it.href}>
                            <Link
                              href={it.href}
                              prefetch
                              aria-current={active ? "page" : undefined}
                              className={`mobile-drawer__link ${active ? "is-active" : ""}`}
                              onClick={() => setOpen(false)}
                            >
                              <span className="mobile-drawer__link-label">
                                {it.label}
                              </span>
                              {it.hint && (
                                <span className="mobile-drawer__link-hint">
                                  {it.hint}
                                </span>
                              )}
                              <svg
                                aria-hidden
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mobile-drawer__link-arrow"
                              >
                                <path d="M5 12h14M13 6l6 6-6 6" />
                              </svg>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                ))}
              </nav>

              <footer className="mobile-drawer__footer">
                <Link
                  href="/inscription"
                  prefetch
                  className="mobile-drawer__cta"
                  onClick={() => setOpen(false)}
                >
                  S'inscrire pour la rentrée
                  <svg
                    aria-hidden
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <p className="mt-3 text-center text-xs text-[var(--muted)]">
                  59 bd de Cimiez · Nice — Depuis 1994
                </p>
              </footer>
            </aside>
          </div>,
          document.body,
        )}
    </>
  );
}
