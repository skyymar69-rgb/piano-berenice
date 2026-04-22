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
      {
        href: "/cours/piano",
        label: "Piano",
        hint: "Individuel ou en binôme",
      },
      {
        href: "/cours/solfege",
        label: "Solfège",
        hint: "En groupe, tous instruments",
      },
      {
        href: "/cours/eveil-musical",
        label: "Éveil musical",
        hint: "À partir de 5 ans",
      },
      {
        href: "/professeur",
        label: "Le professeur",
        hint: "Bérénice Lecardeur",
      },
      { href: "/tarifs", label: "Tarifs & modalités" },
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
      { href: "/professeur", label: "Le professeur" },
      { href: "/plan-acces", label: "Plan d'accès", hint: "59 bd de Cimiez" },
      { href: "/carte-de-visite", label: "Carte de visite numérique" },
      { href: "/contact", label: "Nous contacter" },
    ],
  },
  {
    label: "S'inscrire",
    href: "/inscription",
    featured: {
      href: "/inscription",
      label: "Cours d'essai offert",
      tag: "Sans engagement",
      description:
        "Remplissez le formulaire en ligne. Bérénice vous recontactera personnellement sous 48 h ouvrées.",
      imgSlug: "stock-mains-piano-partition",
      imgAlt:
        "Mains d'une pianiste sur un piano droit, partition ouverte — s'inscrire à l'Académie",
    },
    links: [
      { href: "/inscription", label: "Demander un cours d'essai" },
      { href: "/tarifs", label: "Tarifs & modalités" },
      { href: "/contact", label: "Poser une question" },
    ],
  },
];

export function MegaMenu() {
  const [open, setOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    const c = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(null);
      }
    };
    window.addEventListener("keydown", h);
    window.addEventListener("mousedown", c);
    return () => {
      window.removeEventListener("keydown", h);
      window.removeEventListener("mousedown", c);
    };
  }, [open]);

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 150);
  };
  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  return (
    <nav
      ref={containerRef}
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
                className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm transition ${
                  isOpen
                    ? "bg-[var(--muted-bg)] text-[var(--primary)]"
                    : "text-[var(--ink)] hover:text-[var(--accent)]"
                }`}
              >
                {s.label}
                <svg
                  aria-hidden
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition ${isOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>

      {open !== null && (
        <div
          className="absolute left-1/2 top-[calc(100%+4px)] z-40 w-[min(960px,calc(100vw-2rem))] -translate-x-1/2 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl"
          role="menu"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr,1.1fr]">
            <Link
              href={sections[open].featured.href}
              role="menuitem"
              className="group relative block overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`/images/${sections[open].featured.imgSlug}-sm.webp 480w, /images/${sections[open].featured.imgSlug}-md.webp 960w, /images/${sections[open].featured.imgSlug}-lg.webp 1600w`}
                    sizes="(min-width:1024px) 440px, 100vw"
                  />
                  <img
                    src={`/images/${sections[open].featured.imgSlug}-md.webp`}
                    alt={sections[open].featured.imgAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/80 via-[var(--primary)]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    {sections[open].featured.tag}
                  </p>
                  <p className="mt-1 font-serif text-2xl leading-tight">
                    {sections[open].featured.label}
                  </p>
                  <p className="mt-2 line-clamp-2 text-xs text-white/85">
                    {sections[open].featured.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)]">
                    En savoir plus →
                  </span>
                </div>
              </div>
            </Link>

            <ul className="grid grid-cols-1 gap-1 self-start">
              {sections[open].links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    role="menuitem"
                    onClick={() => setOpen(null)}
                    className="flex items-start justify-between gap-4 rounded-xl px-4 py-3 transition hover:bg-[var(--muted-bg)]"
                  >
                    <span>
                      <span className="block font-serif text-base text-[var(--primary)]">
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
                      className="mt-1 shrink-0 text-[var(--muted)]"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
