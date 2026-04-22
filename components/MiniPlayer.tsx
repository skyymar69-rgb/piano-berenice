"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src?: string;
  title?: string;
  subtitle?: string;
};

/**
 * Mini-lecteur audio discret en bas à droite. Tente l'autoplay au chargement ;
 * si bloqué par le navigateur (politique autoplay), se déclenche au premier
 * geste utilisateur (click/touch/keydown).
 * L'utilisateur peut mettre en pause, ajuster le son ou fermer.
 * Respecte prefers-reduced-motion et persiste l'état "fermé" en localStorage.
 */
export function MiniPlayer({
  src = "/audio/victoria-a-berenice-lalba-in-sol-maggiore.mp3",
  title = "L'Alba in Sol maggiore",
  subtitle = "Victoria Sol — dédié à Bérénice",
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [closed, setClosed] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("apb-mini-player-closed") === "1") {
        setClosed(true);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (closed) return;
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.45;

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
    a.addEventListener("ended", onEnd);
    return () => {
      cleanup();
      a.removeEventListener("ended", onEnd);
    };
  }, [closed]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play()
        .then(() => setPlaying(true))
        .catch(() => {});
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  const close = () => {
    audioRef.current?.pause();
    setClosed(true);
    try {
      localStorage.setItem("apb-mini-player-closed", "1");
    } catch {
      /* ignore */
    }
  };

  if (closed) return null;

  return (
    <div
      role="region"
      aria-label="Lecteur audio — extrait musical"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/95 py-1.5 pl-1.5 pr-3 shadow-lg backdrop-blur"
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Mettre en pause" : "Lancer la lecture"}
        className="inline-flex size-9 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-contrast)] transition hover:bg-[var(--primary-hover)]"
      >
        {playing ? (
          <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        aria-label={
          expanded
            ? "Masquer les détails du morceau"
            : "Afficher les détails du morceau"
        }
        className="flex min-w-0 flex-col items-start text-left"
      >
        <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          <span
            aria-hidden
            className={`inline-block size-1.5 rounded-full ${playing ? "animate-pulse bg-[var(--accent)]" : "bg-[var(--muted)]"}`}
          />
          En écoute
        </span>
        {expanded && (
          <>
            <span className="mt-0.5 truncate text-xs font-medium text-[var(--primary)]">
              {title}
            </span>
            <span className="truncate text-[11px] text-[var(--muted)]">
              {subtitle}
            </span>
          </>
        )}
      </button>

      <button
        type="button"
        onClick={close}
        aria-label="Fermer le lecteur"
        className="ml-1 inline-flex size-7 items-center justify-center rounded-full text-[var(--muted)] transition hover:bg-[var(--muted-bg)] hover:text-[var(--primary)]"
      >
        <svg aria-hidden width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <audio ref={audioRef} preload="auto" loop={false}>
        <source src={src} type="audio/mpeg" />
      </audio>
    </div>
  );
}
