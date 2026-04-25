"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src?: string;
  title?: string;
  subtitle?: string;
};

/**
 * Lecteur audio flottant discret. Par défaut : un simple bouton circulaire
 * "vinyle" avec note de musique. Au clic, déploiement en pill compact
 * avec play/pause/fermer.
 *
 * L'audio démarre tout seul (autoplay-friendly + fallback first-gesture),
 * ce qui rend le lecteur "presque invisible" — exactement ce que la cliente
 * souhaite : ambiance sans l'appareillage visible.
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

  // Mode discret : un petit bouton vinyle qui tourne quand ça joue
  if (!expanded) {
    return (
      <>
        <button
          type="button"
          onClick={() => setExpanded(true)}
          aria-label="Ouvrir le lecteur audio"
          data-tooltip="Lecteur · L'Alba in Sol maggiore"
          className={`fab-tooltip relative inline-flex size-12 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--primary)] text-[var(--primary-contrast)] shadow-lg transition hover:bg-[var(--primary-hover)] ${
            playing ? "vinyl-spinning" : ""
          }`}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background:
                "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0 1px, transparent 1px 4px)",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,var(--accent)_0_3px,transparent_3px_4px)]"
          />
          {playing ? (
            <svg className="relative" aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          ) : (
            <svg className="relative" aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
          {playing && (
            <span
              aria-hidden
              className="absolute -bottom-1 left-1/2 inline-flex -translate-x-1/2 items-end gap-[2px]"
            >
              <span className="equalizer">
                <span />
                <span />
                <span />
              </span>
            </span>
          )}
        </button>
        <audio ref={audioRef} preload="auto" loop={false}>
          <source src={src} type="audio/mpeg" />
        </audio>
      </>
    );
  }

  return (
    <div
      role="region"
      aria-label="Lecteur audio — extrait musical"
      className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] py-1.5 pl-1.5 pr-3 shadow-lg"
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Mettre en pause" : "Lancer la lecture"}
        className={`relative inline-flex size-10 items-center justify-center overflow-hidden rounded-full bg-[var(--primary)] text-[var(--primary-contrast)] transition hover:bg-[var(--primary-hover)] ${
          playing ? "vinyl-spinning" : ""
        }`}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0 1px, transparent 1px 3px)",
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,var(--accent)_0_2px,transparent_2px_3px)]"
        />
        {playing ? (
          <svg className="relative" aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg className="relative" aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <div className="flex min-w-0 flex-col items-start text-left">
        <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          {playing ? (
            <span aria-hidden className="equalizer">
              <span />
              <span />
              <span />
            </span>
          ) : (
            <span aria-hidden className="size-1.5 rounded-full bg-[var(--muted)]" />
          )}
          En écoute
        </span>
        <span className="mt-0.5 max-w-[160px] truncate text-xs font-medium text-[var(--primary)]">
          {title}
        </span>
        <span className="max-w-[160px] truncate text-[11px] text-[var(--muted)]">
          {subtitle}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setExpanded(false)}
        aria-label="Réduire le lecteur"
        className="ml-1 inline-flex size-7 items-center justify-center rounded-full text-[var(--muted)] transition hover:bg-[var(--muted-bg)] hover:text-[var(--primary)]"
      >
        <svg aria-hidden width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M5 12h14" />
        </svg>
      </button>
      <button
        type="button"
        onClick={close}
        aria-label="Fermer le lecteur"
        className="inline-flex size-7 items-center justify-center rounded-full text-[var(--muted)] transition hover:bg-[var(--muted-bg)] hover:text-[var(--primary)]"
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
