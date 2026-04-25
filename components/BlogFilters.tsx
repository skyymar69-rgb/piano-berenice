"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogArticle } from "@/lib/blog";

const categoryColors: Record<string, string> = {
  Apprendre: "var(--accent)",
  Histoire: "#7e6646",
  Pratique: "#5a7d68",
  Théorie: "#7a5d8e",
  Inspiration: "#a86b4d",
};

type Props = {
  articles: BlogArticle[];
};

export function BlogFilters({ articles }: Props) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(articles.map((a) => a.category))),
    [articles],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return articles.filter((a) => {
      if (activeCategory && a.category !== activeCategory) return false;
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [articles, search, activeCategory]);

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher dans les articles…"
            aria-label="Rechercher dans les articles"
            className="w-full rounded-full border border-[var(--border)] bg-[var(--surface)] py-2.5 pl-10 pr-4 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 sm:w-72"
          />
          <svg
            aria-hidden
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4-4" />
          </svg>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              activeCategory === null
                ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-contrast)]"
                : "border-[var(--border)] text-[var(--ink)] hover:border-[var(--accent)]"
            }`}
          >
            Tous
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActiveCategory(c === activeCategory ? null : c)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                activeCategory === c
                  ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-contrast)]"
                  : "border-[var(--border)] text-[var(--ink)] hover:border-[var(--accent)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-[var(--muted)]">
        {filtered.length} article{filtered.length > 1 ? "s" : ""}
        {activeCategory && ` · catégorie ${activeCategory}`}
        {search && ` · « ${search} »`}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center">
          <p className="font-serif text-xl text-[var(--primary)]">
            Aucun article ne correspond à votre recherche.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setActiveCategory(null);
            }}
            className="mt-4 rounded-full border border-[var(--border)] px-5 py-2 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <article
              key={a.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition hover:border-[var(--accent)] hover:shadow-lg"
            >
              <Link href={`/blog/${a.slug}`} prefetch className="block">
                {a.imageSlug && (
                  <div className="aspect-[5/3] overflow-hidden">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={`/images/${a.imageSlug}-sm.webp 480w, /images/${a.imageSlug}-md.webp 960w`}
                        sizes="(min-width:1024px) 380px, 100vw"
                      />
                      <img
                        src={`/images/${a.imageSlug}-md.webp`}
                        alt={a.imageAlt ?? a.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </picture>
                  </div>
                )}
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: categoryColors[a.category] || "var(--accent)" }}
                >
                  {a.category} · {a.readingMinutes} min
                </p>
                <h3 className="mt-2 font-serif text-xl leading-snug text-[var(--primary)]">
                  <Link
                    href={`/blog/${a.slug}`}
                    prefetch
                    className="transition hover:text-[var(--accent)]"
                  >
                    {a.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-[var(--ink)]/80">
                  {a.excerpt}
                </p>
                <Link
                  href={`/blog/${a.slug}`}
                  prefetch
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)] transition group-hover:text-[var(--accent)]"
                >
                  Lire l'article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
