"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src?: string;
  title?: string;
  subtitle?: string;
};

/**
 * Lecteur audio flottant. Disque "vinyle" qui tourne quand ça joue.
 * - Clic sur le disque = play/pause directement (le contrôle est évident)
 * - Croix au coin = ferme totalement
 * - Tooltip à gauche au hover (titre du morceau)
 */
export function MiniPlayer({
  src = "/audio/victoria-a-berenice-lalba-in-sol-maggiore.mp3",
  title = "L'Alba in Sol maggiore",
  subtitle = "Victoria Sol — dédié à Bérénice",
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [closed, setClosed] = useState(false);

  // ⚠ Pas de persistance "fermé" : la cliente veut toujours voir le bouton
  // quand on revient sur le site. Le close ne masque que pour cette session.

  useEffect(() => {
    if (closed) return;
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.42;

    let cleanup = () => {};

    a.play()
      .then(() => setPlaying(true))
      .catch(() => {
        const tryPlay = () => {
          a.play()
            .then(() => setPlaying(true))
            .catch(() => {});
          cleanup();
        };
        const events: (keyof WindowEventMap)[] = [
          "pointerdown",
          "keydown",
          "touchstart",
          "scroll",
        ];
        events.forEach((e) =>
          window.addEventListener(e, tryPlay, { once: true, passive: true }),
        );
        cleanup = () => {
          events.forEach((e) => window.removeEventListener(e, tryPlay));
        };
      });

    const onEnd = () => setPlaying(false);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    a.addEventListener("ended", onEnd);
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    return () => {
      cleanup();
      a.removeEventListener("ended", onEnd);
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
    };
  }, [closed]);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().catch(() => {});
    } else {
      a.pause();
    }
  };

  const close = () => {
    audioRef.current?.pause();
    setClosed(true);
  };

  if (closed) return null;

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? "Mettre en pause" : "Lancer la lecture"}
        data-tooltip={`${playing ? "Pause" : "Play"} · ${title}`}
        className={`fab-tooltip relative inline-flex size-12 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--primary)] text-[var(--primary-contrast)] shadow-lg transition hover:bg-[var(--primary-hover)] ${
          playing ? "vinyl-spinning" : ""
        }`}
      >
        {/* Sillons concentriques du vinyle */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0 1px, transparent 1px 4px)",
          }}
        />
        {/* Étiquette centrale */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,var(--accent)_0_5px,transparent_5px_6px)]"
        />
        {/* Icône play/pause au centre */}
        <span className="relative z-10 inline-flex size-6 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--primary)]">
          {playing ? (
            <svg aria-hidden width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg aria-hidden width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </span>
      </button>

      {/* Croix de fermeture définitive (au coin haut-droit) */}
      <button
        type="button"
        onClick={close}
        aria-label="Fermer le lecteur audio"
        className="absolute -right-1 -top-1 inline-flex size-5 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] shadow-sm transition hover:border-[var(--accent)] hover:text-[var(--primary)]"
      >
        <svg aria-hidden width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {/* Équaliseur en bas, indicateur de lecture */}
      {playing && (
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2"
        >
          <span className="equalizer">
            <span />
            <span />
            <span />
          </span>
        </span>
      )}

      <audio ref={audioRef} preload="auto" loop={false} aria-label={`${title} — ${subtitle}`}>
        <source src={src} type="audio/mpeg" />
      </audio>
    </div>
  );
}
