/**
 * Badge "Inscriptions ouvertes" — indicateur de disponibilité visible sur home.
 * Données en dur pour l'instant ; pourra être alimenté par settings admin plus tard.
 */
export function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--primary)]">
      <span
        aria-hidden
        className="relative flex size-2"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-[var(--accent)]" />
      </span>
      Inscriptions ouvertes pour la rentrée
    </span>
  );
}
