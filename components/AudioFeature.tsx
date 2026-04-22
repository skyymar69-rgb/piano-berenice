type Props = {
  src?: string;
  title?: string;
  composer?: string;
  description?: string;
  dedication?: string;
};

/**
 * Bloc éditorial avec lecteur audio HTML5 natif, accessible clavier.
 * Inclut JSON-LD MusicRecording pour l'indexation.
 */
export function AudioFeature({
  src = "/audio/victoria-a-berenice-lalba-in-sol-maggiore.mp3",
  title = "L'Alba in Sol maggiore",
  composer = "Victoria Sol",
  dedication = "Dédié à Bérénice",
  description = "Pièce pour piano offerte par sa fille Victoria — un matin, en sol majeur.",
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    name: title,
    byArtist: { "@type": "Person", name: composer },
    inAlbum: { "@type": "MusicAlbum", name: "Hommage à Bérénice" },
    audio: { "@type": "AudioObject", contentUrl: src, encodingFormat: "audio/mpeg" },
  };

  return (
    <section
      aria-labelledby="audio-feature-title"
      className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--muted-bg)] via-[var(--surface)] to-[var(--muted-bg)] shadow-[var(--shadow)]">
        <div className="grid gap-6 p-6 sm:grid-cols-[auto,1fr] sm:items-center sm:p-8">
          <div className="flex size-24 items-center justify-center rounded-2xl bg-[var(--primary)] text-[var(--accent)] sm:size-28">
            <svg
              aria-hidden
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 17V5l12-2v12" />
              <circle cx="6" cy="17" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="18" cy="15" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M9 5l12-2" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Un hommage musical
            </p>
            <h2
              id="audio-feature-title"
              className="mt-2 font-serif text-2xl leading-tight text-[var(--primary)] sm:text-3xl"
            >
              {title}
            </h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              {composer} — {dedication}
            </p>
            <p className="mt-3 text-base text-[var(--ink)]/80">
              {description}
            </p>
            <audio
              controls
              preload="metadata"
              className="mt-5 w-full"
              aria-label={`Extrait audio : ${title} par ${composer}, ${dedication}`}
            >
              <source src={src} type="audio/mpeg" />
              Votre navigateur ne prend pas en charge le lecteur audio. Vous
              pouvez{" "}
              <a
                href={src}
                className="underline underline-offset-2"
                download
              >
                télécharger le morceau
              </a>
              .
            </audio>
          </div>
        </div>
      </div>
    </section>
  );
}
