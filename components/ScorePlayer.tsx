"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  url: string;
  title: string;
  composer: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  period?: string;
  note?: string;
};

const levelStyles: Record<Props["level"], string> = {
  Débutant: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  Intermédiaire: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  Avancé: "bg-rose-500/10 text-rose-300 border-rose-500/30",
};

export function ScorePlayer({ url, title, composer, level, period, note }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const osmdRef = useRef<unknown>(null);
  type SmplrPiano = {
    start: (opts: { note: number; duration: number }) => void;
    stop?: () => void;
  };
  const audioRef = useRef<{ piano: SmplrPiano; ac: AudioContext } | null>(null);
  const playingRef = useRef(false);

  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("loading");
  const [playing, setPlaying] = useState(false);
  const [tempo, setTempo] = useState(0.7); // 70% par défaut (pédagogique)
  const [bpm, setBpm] = useState(100);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");

    (async () => {
      try {
        const { OpenSheetMusicDisplay } = await import("opensheetmusicdisplay");
        if (cancelled || !containerRef.current) return;

        const osmd = new OpenSheetMusicDisplay(containerRef.current, {
          autoResize: true,
          backend: "svg",
          drawTitle: false,
          drawSubtitle: false,
          drawComposer: false,
          drawCredits: false,
          drawPartNames: false,
          followCursor: true,
          cursorsOptions: [
            { type: 0, color: "#d5b07c", alpha: 0.5, follow: true },
          ],
          defaultColorMusic: "#1a1d29",
        });

        await osmd.load(url);
        if (cancelled) return;
        osmd.render();
        osmd.cursor.show();
        osmdRef.current = osmd;

        const sourceBpm = osmd.Sheet?.DefaultStartTempoInBpm || 100;
        setBpm(Math.round(sourceBpm));

        setStatus("ready");
      } catch (e) {
        console.error("ScorePlayer load failed", e);
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
      playingRef.current = false;
      try {
        audioRef.current?.ac?.close?.();
      } catch {
        /* noop */
      }
      audioRef.current = null;
      osmdRef.current = null;
    };
  }, [url]);

  async function ensureAudio() {
    if (audioRef.current) return audioRef.current;
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const ac = new Ctx();
    if (ac.state === "suspended") await ac.resume();
    const { Soundfont } = await import("smplr");
    const piano = new Soundfont(ac, { instrument: "acoustic_grand_piano" }) as unknown as SmplrPiano & { load: Promise<unknown> };
    await piano.load;
    audioRef.current = { piano, ac };
    return audioRef.current;
  }

  async function play() {
    if (!osmdRef.current || playing) return;
    setPlaying(true);
    playingRef.current = true;

    try {
      const { piano } = await ensureAudio();
      const osmd = osmdRef.current as never as {
        cursor: {
          reset: () => void;
          show: () => void;
          next: () => void;
          iterator?: { EndReached?: boolean };
          NotesUnderCursor: () => Array<{
            Pitch?: { halfTone: number };
            Length: { RealValue: number };
            isRest?: () => boolean;
          }>;
        };
      };
      osmd.cursor.reset();
      osmd.cursor.show();

      while (playingRef.current) {
        if (osmd.cursor.iterator?.EndReached) break;

        const notes = osmd.cursor.NotesUnderCursor();

        let stepWholes = 1;
        for (const n of notes) {
          if (typeof n.isRest === "function" && n.isRest()) {
            stepWholes = Math.min(stepWholes, n.Length.RealValue);
            continue;
          }
          if (!n.Pitch) {
            stepWholes = Math.min(stepWholes, n.Length.RealValue);
            continue;
          }
          const midi = n.Pitch.halfTone + 12;
          const durationSec = (n.Length.RealValue * 240) / bpm / tempo;
          piano.start({ note: midi, duration: durationSec });
          stepWholes = Math.min(stepWholes, n.Length.RealValue);
        }

        const stepMs = ((stepWholes * 240) / bpm / tempo) * 1000;
        await new Promise((r) => setTimeout(r, stepMs));
        if (!playingRef.current) break;
        osmd.cursor.next();
      }
    } finally {
      setPlaying(false);
      playingRef.current = false;
    }
  }

  function stop() {
    playingRef.current = false;
    setPlaying(false);
    try {
      audioRef.current?.piano?.stop?.();
    } catch {
      /* noop */
    }
  }

  function reset() {
    stop();
    try {
      (osmdRef.current as { cursor?: { reset?: () => void } } | null)?.cursor?.reset?.();
    } catch {
      /* noop */
    }
  }

  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            {composer}
          </p>
          <h3 className="mt-1 font-serif text-xl text-[var(--ink)]">
            {title}
          </h3>
          {period && (
            <p className="mt-1 text-xs text-[var(--muted)]">{period}</p>
          )}
        </div>
        <span
          className={`inline-flex shrink-0 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${levelStyles[level]}`}
        >
          {level}
        </span>
      </header>

      {note && (
        <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/75">
          {note}
        </p>
      )}

      <div
        ref={containerRef}
        className="mt-5 min-h-[180px] overflow-x-auto rounded-xl bg-white p-3 ring-1 ring-[var(--border)]"
        aria-label={`Partition de ${title}, ${composer}`}
      />

      {status === "loading" && (
        <p className="mt-3 text-xs text-[var(--muted)]">
          Chargement de la partition…
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-xs text-rose-400">
          Désolé, cette partition n'a pas pu être chargée.
        </p>
      )}

      {status === "ready" && (
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {!playing ? (
            <button
              type="button"
              onClick={play}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--primary-contrast)] transition hover:bg-[var(--accent-hover)]"
              aria-label="Lancer la lecture audio de la partition"
            >
              <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Écouter
            </button>
          ) : (
            <button
              type="button"
              onClick={stop}
              className="inline-flex items-center gap-2 rounded-full bg-rose-500/90 px-4 py-2 text-sm font-medium text-white transition hover:bg-rose-500"
              aria-label="Arrêter la lecture"
            >
              <svg aria-hidden width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <rect x="5" y="5" width="14" height="14" rx="1" />
              </svg>
              Stop
            </button>
          )}

          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-2 text-xs font-medium text-[var(--ink)]/80 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            aria-label="Revenir au début"
          >
            <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="11 17 6 12 11 7" />
              <polyline points="18 17 13 12 18 7" />
            </svg>
            Début
          </button>

          <label className="ml-auto flex items-center gap-2 text-xs text-[var(--ink)]/75">
            <span className="font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Tempo
            </span>
            <input
              type="range"
              min={0.4}
              max={1}
              step={0.05}
              value={tempo}
              onChange={(e) => setTempo(parseFloat(e.target.value))}
              className="h-1 w-28 cursor-pointer accent-[var(--accent)]"
              aria-label={`Vitesse de lecture : ${Math.round(tempo * 100)} %`}
            />
            <span className="w-10 text-right tabular-nums">
              {Math.round(tempo * 100)}%
            </span>
          </label>
        </div>
      )}
    </article>
  );
}
