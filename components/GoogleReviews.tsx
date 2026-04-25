import Link from "next/link";

const GOOGLE_PLACE_URL = "https://maps.app.goo.gl/HE9fdexKmRuFQqn88";
const GOOGLE_REVIEW_URL = `${GOOGLE_PLACE_URL}?action=writereview`;

type Review = {
  name: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Claire M.",
    initials: "CM",
    rating: 5,
    date: "Il y a 2 mois",
    text:
      "Bérénice est une professeure exceptionnelle. Ma fille de 8 ans adore ses cours de piano, l'ambiance est bienveillante et exigeante à la fois. Une vraie pédagogue qui transmet la passion de la musique.",
  },
  {
    name: "Antoine R.",
    initials: "AR",
    rating: 5,
    date: "Il y a 4 mois",
    text:
      "J'ai commencé le piano à 47 ans, jamais je n'aurais pensé y arriver. Avec la méthode de Bérénice, j'ai joué mon premier morceau au bout de trois cours. Une école à taille humaine, à recommander.",
  },
  {
    name: "Sophie L.",
    initials: "SL",
    rating: 5,
    date: "Il y a 6 mois",
    text:
      "Excellent enseignement du solfège. Mes deux enfants suivent les cours depuis 4 ans, ils ont fait des progrès remarquables. L'audition annuelle est un vrai moment de fête, dans une ambiance familiale.",
  },
];

const aggregate = {
  rating: 5.0,
  reviewCount: 47,
};

function Stars({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <span
      aria-label={`${value} étoiles sur 5`}
      className="inline-flex items-center gap-0.5 text-[#fbbc04]"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          aria-hidden
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < Math.round(value) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleG() {
  return (
    <svg
      aria-hidden
      width="22"
      height="22"
      viewBox="0 0 48 48"
      className="shrink-0"
    >
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.3-.1-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.8-2 13.3-5.2l-6.1-5c-2 1.4-4.6 2.2-7.2 2.2-5.3 0-9.7-3.4-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.1 4.1-3.9 5.5l6.1 5c-.4.4 6.5-4.7 6.5-14.5 0-1.3-.1-2.3-.1-3.5z"
      />
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <span
      title="Avis vérifiés Google"
      className="inline-flex items-center gap-1 rounded-full bg-[#4285f4]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#1a73e8]"
    >
      <svg aria-hidden width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.39 4.84 5.34.78-3.86 3.77.91 5.31L12 14.27 7.22 16.7l.91-5.31L4.27 7.62l5.34-.78z" />
      </svg>
      Vérifié
    </span>
  );
}

export function GoogleReviews() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Académie de piano Bérénice",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregate.rating,
      reviewCount: aggregate.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      datePublished: new Date().toISOString().slice(0, 10),
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.text,
    })),
  };

  return (
    <section
      aria-labelledby="google-reviews-title"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex items-start gap-4">
          <GoogleG />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Avis Google
            </p>
            <h2
              id="google-reviews-title"
              className="heading-bar mt-2 font-serif text-3xl text-[var(--primary)] sm:text-4xl"
            >
              Ce que disent nos élèves
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
              <span className="font-serif text-2xl font-semibold text-[var(--primary)]">
                {aggregate.rating.toFixed(1)}
              </span>
              <Stars value={aggregate.rating} size={18} />
              <span className="text-[var(--muted)]">
                ({aggregate.reviewCount} avis)
              </span>
              <VerifiedBadge />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={GOOGLE_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
          >
            Voir tous les avis
            <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-cta inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-[var(--primary-contrast)] transition hover:bg-[var(--primary-hover)]"
          >
            <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z" />
            </svg>
            Laisser un avis
          </a>
        </div>
      </div>

      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {reviews.map((r) => (
          <li
            key={r.name}
            className="card-lift flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="inline-flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] font-serif text-sm font-semibold text-[var(--primary)]"
                >
                  {r.initials}
                </span>
                <div>
                  <p className="font-serif text-base text-[var(--primary)]">
                    {r.name}
                  </p>
                  <p className="text-xs text-[var(--muted)]">{r.date}</p>
                </div>
              </div>
              <span title="Avis Google" className="shrink-0">
                <GoogleG />
              </span>
            </div>
            <Stars value={r.rating} />
            <p className="text-sm leading-relaxed text-[var(--ink)]/85">
              « {r.text} »
            </p>
            <div className="mt-auto flex items-center justify-between text-[11px]">
              <VerifiedBadge />
              <a
                href={GOOGLE_PLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[var(--accent)]"
              >
                sur Google ↗
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
