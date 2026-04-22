import Link from "next/link";

type Link = {
  href: string;
  title: string;
  description: string;
};

/**
 * Maillage interne en bas de page. Améliore le signal de cohésion sémantique
 * et la distribution de PageRank interne.
 */
export function RelatedLinks({
  title = "À lire ensuite",
  links,
}: {
  title?: string;
  links: Link[];
}) {
  return (
    <section
      aria-labelledby="related-title"
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
    >
      <p
        id="related-title"
        className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]"
      >
        {title}
      </p>
      <h2 className="mt-2 font-serif text-2xl text-[var(--primary)] sm:text-3xl">
        Explorez aussi
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-[var(--shadow)]"
          >
            <p className="font-serif text-lg text-[var(--primary)]">
              {l.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]/80">
              {l.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)] transition group-hover:text-[var(--accent)]">
              Lire la page →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
