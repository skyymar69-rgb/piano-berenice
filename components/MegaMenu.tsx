"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type FeaturedCard = {
  href: string;
  label: string;
  tag: string;
  description: string;
  imgSlug: string;
  imgAlt: string;
};

type Section = {
  label: string;
  href: string;
  featured: FeaturedCard;
  links: { href: string; label: string; hint?: string }[];
};

const sections: Section[] = [
  {
    label: "Nos cours",
    href: "/cours/piano",
    featured: {
      href: "/cours/piano",
      label: "Cours de piano",
      tag: "Enfants · ados · adultes",
      description:
        "Cours individuel ou en binôme, tous niveaux, du premier contact à la préparation du bac option musique.",
      imgSlug: "stock-touches-piano-gros-plan",
      imgAlt:
        "Gros plan sur les touches noires et blanches d'un piano — cours de piano à Nice Cimiez",
    },
    links: [
      { href: "/cours/piano", label: "Cours de piano", hint: "Individuel ou en binôme" },
      { href: "/cours/solfege", label: "Cours de solfège", hint: "En groupe, tous instruments" },
      { href: "/cours/eveil-musical", label: "Éveil musical", hint: "À partir de 5 ans" },
      { href: "/tarifs", label: "Tarifs & modalités" },
      { href: "/inscription", label: "S'inscrire pour la rentrée" },
      { href: "/partitions", label: "Partitions libres de droit" },
      { href: "/faq", label: "FAQ — questions fréquentes" },
    ],
  },
  {
    label: "L'Académie",
    href: "/professeur",
    featured: {
      href: "/professeur",
      label: "Bérénice Lecardeur",
      tag: "Depuis 1994",
      description:
        "Médaille d'Or de l'Académie Prince Rainier III de Monaco, Prix de perfectionnement du CNR de Nice. 30 ans d'enseignement.",
      imgSlug: "berenice-lecardeur-portrait-piano-queue",
      imgAlt:
        "Bérénice Lecardeur, professeure de piano à Nice Cimiez, assise à son piano à queue",
    },
    links: [
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
    label: "Blog",
    href: "/blog",
    featured: {
      href: "/blog",
      label: "Conseils & histoires",
      tag: "15 articles",
      description:
        "Comment lire une partition, choisir son piano, l'histoire du solfège, le piano pour adulte. Tous nos guides rédigés par Bérénice.",
      imgSlug: "stock-eleve-partition-lecture",
      imgAlt:
        "Élève lisant une partition musicale — articles du blog de l'Académie",
    },
    links: [
      { href: "/blog", label: "Tous les articles", hint: "15 articles" },
      { href: "/blog/comment-lire-une-partition-de-piano", label: "Comment lire une partition", hint: "9 min · Apprendre" },
      { href: "/blog/histoire-du-piano", label: "L'histoire du piano", hint: "9 min · Histoire" },
      { href: "/blog/grands-compositeurs-pour-piano", label: "Les grands compositeurs", hint: "9 min · Inspiration" },
      { href: "/glossaire", label: "Glossaire musical", hint: "30 termes essentiels" },
      { href: "/questions", label: "Réponses aux questions Google", hint: "15 questions/réponses" },
      { href: "/concerts", label: "Concerts & auditions", hint: "Calendrier saison" },
    ],
  },
  {
    label: "S'inscrire",
    href: "/inscription",
    featured: {
      href: "/inscription",
      label: "Rentrée 2026 – 2027",
      tag: "Inscriptions ouvertes",
      description:
        "Réservez votre place pour la prochaine rentrée. Bérénice vous recontactera personnellement sous 48 h ouvrées.",
      imgSlug: "stock-mains-piano-partition",
      imgAlt:
        "Mains d'une pianiste sur un piano droit, partition ouverte — s'inscrire à l'Académie",
    },
    links: [
      { href: "/inscription", label: "S'inscrire pour la rentrée" },
      { href: "/tarifs", label: "Tarifs & modalités" },
      { href: "/contact", label: "Poser une question" },
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/cgu", label: "CGU" },
      { href: "/cgv", label: "CGV" },
      { href: "/politique-confidentialite", label: "Politique de confidentialité" },
      { href: "/cookies", label: "Cookies" },
    ],
  },
];

export function MegaMenu() {
  const [open, setOpen] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        navRef.current &&
        !navRef.current.contains(t) &&
        panelRef.current &&
        !panelRef.current.contains(t)
      ) {
        setOpen(null);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 220);
  };
  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  return (
    <>
      <div
        ref={navRef}
        aria-label="Menu principal"
        className="hidden lg:block"
        onMouseLeave={scheduleClose}
        onMouseEnter={cancelClose}
      >
        <ul className="flex items-center gap-1">
          {sections.map((s, i) => {
            const isOpen = open === i;
            return (
              <li key={s.label} className="relative">
                <button
                  type="button"
                  onMouseEnter={() => {
                    cancelClose();
                    setOpen(i);
                  }}
                  onFocus={() => setOpen(i)}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  className={`group relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
                    isOpen
                      ? "bg-[var(--muted-bg)] text-[var(--primary)]"
                      : "text-[var(--ink)] hover:text-[var(--primary)]"
                  }`}
                >
                  <span className="nav-link-underline">{s.label}</span>
                  <svg
                    aria-hidden
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--accent)]" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Backdrop sombre sur le reste de la page (sous le panneau) */}
      {open !== null && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-30 bg-[var(--primary)]/35"
        />
      )}

      {/* Panneau plein-largeur OPAQUE de bord à bord */}
      {open !== null && (
        <div
          ref={panelRef}
          role="menu"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          className="megamenu-panel fixed left-0 right-0 top-[var(--header-h,4.5rem)] z-40 hidden border-b border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_60px_-20px_rgba(26,37,64,0.45)] lg:block"
        >
          {/* Filet doré en haut */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/60 to-transparent"
          />
          <div className="mx-auto max-w-6xl px-6 py-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr]">
              {/* Featured compact (~260px) */}
              <Link
                href={sections[open].featured.href}
                role="menuitem"
                prefetch
                onClick={() => setOpen(null)}
                className="group relative block overflow-hidden rounded-xl border border-[var(--border)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`/images/${sections[open].featured.imgSlug}-sm.webp 480w, /images/${sections[open].featured.imgSlug}-md.webp 960w`}
                      sizes="(min-width:1024px) 260px, 100vw"
                    />
                    <img
                      src={`/images/${sections[open].featured.imgSlug}-sm.webp`}
                      alt={sections[open].featured.imgAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/55 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                      {sections[open].featured.tag}
                    </p>
                    <p className="mt-1 font-serif text-base leading-tight">
                      {sections[open].featured.label}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Liens en colonnes (2 col) */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                  Tout le rayon · {sections[open].label}
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {sections[open].links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        role="menuitem"
                        prefetch
                        onClick={() => setOpen(null)}
                        className="group flex items-start justify-between gap-3 rounded-lg px-3 py-2 transition hover:bg-[var(--muted-bg)]"
                      >
                        <span className="min-w-0">
                          <span className="block truncate font-serif text-base text-[var(--primary)] transition group-hover:text-[var(--accent)]">
                            {l.label}
                          </span>
                          {l.hint && (
                            <span className="mt-0.5 block truncate text-xs text-[var(--muted)]">
                              {l.hint}
                            </span>
                          )}
                        </span>
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
                          className="mt-1.5 shrink-0 text-[var(--muted)] transition group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                        >
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
