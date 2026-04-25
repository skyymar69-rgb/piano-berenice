"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type KeyDef = {
  note: string;
  freq: number;
  isBlack: boolean;
  label?: string;
};

// Une octave + 1 note (Do central → Do supérieur)
const KEYS: KeyDef[] = [
  { note: "C4", freq: 261.63, isBlack: false, label: "Do" },
  { note: "C#4", freq: 277.18, isBlack: true },
  { note: "D4", freq: 293.66, isBlack: false, label: "Ré" },
  { note: "D#4", freq: 311.13, isBlack: true },
  { note: "E4", freq: 329.63, isBlack: false, label: "Mi" },
  { note: "F4", freq: 349.23, isBlack: false, label: "Fa" },
  { note: "F#4", freq: 369.99, isBlack: true },
  { note: "G4", freq: 392.0, isBlack: false, label: "Sol" },
  { note: "G#4", freq: 415.3, isBlack: true },
  { note: "A4", freq: 440.0, isBlack: false, label: "La" },
  { note: "A#4", freq: 466.16, isBlack: true },
  { note: "B4", freq: 493.88, isBlack: false, label: "Si" },
  { note: "C5", freq: 523.25, isBlack: false, label: "Do" },
];

export function MiniKeyboard() {
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const [muted, setMuted] = useState(true);

  const ensureContext = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!ctxRef.current) {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!Ctor) return null;
      ctxRef.current = new Ctor();
      const master = ctxRef.current.createGain();
      master.gain.value = 0.18;
      master.connect(ctxRef.current.destination);
      masterRef.current = master;
    }
    if (ctxRef.current.state === "suspended") {
      void ctxRef.current.resume();
    }
    return ctxRef.current;
  }, []);

  const playNote = useCallback(
    (key: KeyDef) => {
      if (muted) return;
      const ctx = ensureContext();
      if (!ctx || !masterRef.current) return;

      // Petit "piano" via additive synthesis : sinus + harmoniques douces
      const t0 = ctx.currentTime;
      const dur = 1.4;

      const env = ctx.createGain();
      env.gain.setValueAtTime(0.0001, t0);
      env.gain.exponentialRampToValueAtTime(1, t0 + 0.005);
      env.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      env.connect(masterRef.current);

      [
        { type: "triangle" as OscillatorType, gain: 1, mult: 1 },
        { type: "sine" as OscillatorType, gain: 0.4, mult: 2 },
        { type: "sine" as OscillatorType, gain: 0.15, mult: 3 },
      ].forEach(({ type, gain, mult }) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = type;
        o.frequency.value = key.freq * mult;
        g.gain.value = gain;
        o.connect(g);
        g.connect(env);
        o.start(t0);
        o.stop(t0 + dur);
      });

      setActive(key.note);
      window.setTimeout(
        () => setActive((cur) => (cur === key.note ? null : cur)),
        260,
      );
    },
    [ensureContext, muted],
  );

  // Cleanup
  useEffect(() => {
    return () => {
      if (ctxRef.current) {
        void ctxRef.current.close();
        ctxRef.current = null;
      }
    };
  }, []);

  const whiteKeys = KEYS.filter((k) => !k.isBlack);

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="font-serif text-sm italic text-[var(--ink)]/75">
          Posez les doigts.{" "}
          <span className="text-[var(--muted)]">Une octave, pour le plaisir.</span>
        </p>
        <button
          type="button"
          onClick={() => {
            if (muted) ensureContext();
            setMuted((m) => !m);
          }}
          aria-pressed={!muted}
          className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
        >
          {muted ? "Activer le son" : "Couper le son"}
        </button>
      </div>

      <div className="relative h-44 select-none overflow-hidden rounded-md salon-frame">
        {/* Touches blanches */}
        <div className="grid h-full" style={{ gridTemplateColumns: `repeat(${whiteKeys.length}, 1fr)` }}>
          {whiteKeys.map((key) => (
            <button
              key={key.note}
              type="button"
              aria-label={`Note ${key.label}`}
              onPointerDown={(e) => {
                e.preventDefault();
                playNote(key);
              }}
              className={`relative border-r border-[var(--border)] bg-white text-[10px] font-medium uppercase tracking-widest text-[var(--muted)] transition last:border-r-0 hover:bg-[var(--muted-bg)] ${
                active === key.note ? "bg-[var(--accent)]/30" : ""
              }`}
            >
              <span className="absolute inset-x-0 bottom-2 text-center">
                {key.label}
              </span>
            </button>
          ))}
        </div>
        {/* Touches noires en overlay */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="grid h-2/3"
            style={{ gridTemplateColumns: `repeat(${whiteKeys.length}, 1fr)` }}
          >
            {whiteKeys.map((wk, i) => {
              const black = KEYS.find(
                (k, idx) =>
                  k.isBlack &&
                  KEYS[idx - 1] === wk,
              );
              return (
                <div key={wk.note + "-slot"} className="relative">
                  {black && (
                    <button
                      type="button"
                      aria-label={`Note ${black.note}`}
                      onPointerDown={(e) => {
                        e.preventDefault();
                        playNote(black);
                      }}
                      className={`pointer-events-auto absolute -right-[18%] top-0 z-10 h-full w-[36%] rounded-b-sm border border-[var(--primary)] bg-[var(--primary)] transition hover:bg-[var(--primary-hover)] ${
                        active === black.note
                          ? "bg-[var(--accent-hover)] border-[var(--accent)]"
                          : ""
                      }`}
                      style={{ marginLeft: i === 0 ? "0%" : undefined }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-[var(--muted)]">
        Synthé léger Web Audio · aucune dépendance · aucun cookie
      </p>
    </div>
  );
}
