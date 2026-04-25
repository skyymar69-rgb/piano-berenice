import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAllArticles } from "@/lib/blog";
import { school } from "@/lib/school";

export const metadata: Metadata = {
  title: "Blog · Conseils pour pianistes — Académie de piano Bérénice",
  description:
    "Articles sur le piano, le solfège et l'éveil musical : guides pour débutants, histoire des compositeurs, choix d'instrument, méthodes pédagogiques. Par une professeure diplômée à Nice.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Académie de piano Bérénice",
    description:
      "Conseils, méthodes et histoire de la musique par Bérénice Lecardeur — Médaille d'Or de Monaco, 30 ans d'enseignement à Nice.",
    type: "website",
  },
};

const categoryMeta: Record<string, { label: string; color: string }> = {
  Apprendre: { label: "Apprendre", color: "var(--accent)" },
  Histoire: { label: "Histoire", color: "#7e6646" },
  Pratique: { label: "Pratique", color: "#5a7d68" },
  Théorie: { label: "Théorie", color: "#7a5d8e" },
  Inspiration: { label: "Inspiration", color: "#a86b4d" },
};

export default function BlogIndexPage() {
  const articles = getAllArticles();
  const [first, ...rest] = articles;

  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Le journal de l'Académie
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          Conseils, méthodes et histoires autour du piano
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-[var(--ink)]/80">
          Trois siècles de musique et trente ans d'enseignement résumés en
          articles : pour débutants, parents d'élèves ou pianistes confirmés.
          Tous les contenus sont rédigés par {school.teacher.fullName} et
          l'équipe de l'Académie.
        </p>
      </section>

      {/* Featured — premier article */}
      {first && (
        <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/blog/${first.slug}`}
            prefetch
            className="group grid gap-6 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)] md:grid-cols-[1.1fr,1fr] md:p-8"
          >
            {first.imageSlug && (
              <div className="relative aspect-[5/3] overflow-hidden rounded-2xl">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`/images/${first.imageSlug}-sm.webp 480w, /images/${first.imageSlug}-md.webp 960w, /images/${first.imageSlug}-lg.webp 1600w`}
                    sizes="(min-width:1024px) 600px, 100vw"
                  />
                  <img
                    src={`/images/${first.imageSlug}-md.webp`}
                    alt={first.imageAlt ?? first.title}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </picture>
                <span className="absolute left-4 top-4 rounded-full bg-[var(--accent)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  À la une
                </span>
              </div>
            )}
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                {first.category} · {first.readingMinutes} min
              </p>
              <h2 className="heading-bar mt-3 font-serif text-2xl leading-tight text-[var(--primary)] sm:text-3xl">
                {first.title}
              </h2>
              <p className="mt-3 text-[var(--ink)]/80">{first.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] transition group-hover:text-[var(--accent)]">
                Lire l'article
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* Grille complète */}
      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="heading-bar font-serif text-2xl text-[var(--primary)] sm:text-3xl">
            Tous les articles
          </h2>
          <span className="text-sm text-[var(--muted)]">
            {articles.length} article{articles.length > 1 ? "s" : ""}
          </span>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
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
                  style={{ color: categoryMeta[a.category]?.color || "var(--accent)" }}
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
      </section>

      {/* CTA */}
      <section className="mx-auto my-20 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--muted-bg)] to-[var(--surface)] p-8 text-center sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Passez à la pratique
          </p>
          <h2 className="heading-bar mx-auto mt-3 inline-block font-serif text-2xl text-[var(--primary)] sm:text-3xl">
            Les articles c'est bien — le clavier, c'est mieux
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--ink)]/80">
            Inscriptions ouvertes pour la rentrée 2026 – 2027. Bérénice
            vous recontacte sous 48 h ouvrées pour fixer un rendez-vous.
          </p>
          <Link
            href="/inscription"
            prefetch
            className="magnetic-cta mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-medium text-[var(--primary-contrast)] transition hover:bg-[var(--primary-hover)]"
          >
            S'inscrire pour la rentrée
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
