/**
 * Bloc "En bref" / factbox quotable pour les moteurs génératifs (ChatGPT,
 * Perplexity, AI Overviews). Mise en forme answer-first : un paragraphe
 * concis et factuel qui résume la page, suivi d'une liste de faits clés.
 */
type Fact = { term: string; value: string };

export function QuoteCard({
  title = "En bref",
  intro,
  facts,
}: {
  title?: string;
  intro: string;
  facts: Fact[];
}) {
  return (
    <aside
      aria-labelledby="quote-title"
      className="mx-auto my-10 max-w-3xl rounded-2xl border border-[var(--accent)]/30 bg-[var(--muted-bg)] p-6"
    >
      <p
        id="quote-title"
        className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]"
      >
        {title}
      </p>
      <p className="mt-3 text-base leading-relaxed text-[var(--ink)]">
        {intro}
      </p>
      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
        {facts.map((f) => (
          <div
            key={f.term}
            className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3"
          >
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              {f.term}
            </dt>
            <dd className="mt-0.5 text-sm font-medium text-[var(--primary)]">
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
