const listings = [
  {
    name: "Facebook",
    href: "https://fr-fr.facebook.com/AcademieDePianoBerenice",
    tagline: "Nos actualités et nos élèves",
  },
  {
    name: "PagesJaunes",
    href: "https://www.pagesjaunes.fr/pros/07247300",
    tagline: "Fiche professionnelle",
  },
  {
    name: "Mappy",
    href: "https://fr.mappy.com/poi/50b02c5b84ae4bef54e3b9e3",
    tagline: "Localisation",
  },
  {
    name: "Spectable",
    href: "https://www.spectable.com/cours-de-piano-nice-academie-de-piano-berenice/61215",
    tagline: "Annuaire culturel de Nice",
  },
  {
    name: "WebRankInfo",
    href: "https://www.webrankinfo.net/site/32867.htm",
    tagline: "Référencement",
  },
];

export function SocialProof() {
  return (
    <section
      aria-labelledby="social-proof-title"
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <p
        id="social-proof-title"
        className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]"
      >
        Retrouvez-nous aussi sur
      </p>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {listings.map((l) => (
          <li key={l.name}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-4 py-2 text-sm text-[var(--primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <span className="font-medium">{l.name}</span>
              <span className="hidden text-xs text-[var(--muted)] sm:inline">
                · {l.tagline}
              </span>
              <svg
                aria-hidden
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M8 7h9v9" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
