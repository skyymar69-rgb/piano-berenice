"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type KeyDef = {
  /** Nom MIDI : C4, C#4, D4… */
  note: string;
  /** Position sur le clavier (semitones depuis A0 = 0) */
  midi: number;
  isBlack: boolean;
  /** Étiquette française (pour les blanches uniquement) */
  label?: string;
  /** Touche clavier QWERTY associée */
  shortcut?: string;
};

const NOTE_NAMES = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
const FRENCH = ["Do", "", "Ré", "", "Mi", "Fa", "", "Sol", "", "La", "", "Si"];

/** Touches QWERTY pour 2 octaves. */
const SHORTCUTS = [
  "a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j", // C4-B4
  "k", "o", "l", "p", ";", "z", "2", "x", "3", "c", "4", "v", // C5-B5
  ",", // C6
];

/** Construit la liste des touches à partir d'un octave de base (3 = C3 → C5). */
function buildKeys(baseOctave: number, octaveCount: number = 2): KeyDef[] {
  const keys: KeyDef[] = [];
  let shortcutIdx = 0;
  for (let oct = 0; oct < octaveCount; oct++) {
    for (let i = 0; i < 12; i++) {
      const isBlack = NOTE_NAMES[i].includes("#");
      const note = `${NOTE_NAMES[i]}${baseOctave + oct}`;
      // MIDI : A0=21, donc C0=12, C4=60
      const midi = (baseOctave + oct + 1) * 12 + i;
      keys.push({
        note,
        midi,
        isBlack,
        label: !isBlack ? FRENCH[i] : undefined,
        shortcut: SHORTCUTS[shortcutIdx++],
      });
    }
  }
  // C final pour fermer la dernière octave
  keys.push({
    note: `C${baseOctave + octaveCount}`,
    midi: (baseOctave + octaveCount + 1) * 12,
    isBlack: false,
    label: "Do",
    shortcut: SHORTCUTS[shortcutIdx],
  });
  return keys;
}

/** Convertit MIDI → fréquence (Hz). A4 = 440 Hz, MIDI 69. */
const midiToFreq = (m: number) => 440 * Math.pow(2, (m - 69) / 12);

// 3 mélodies courtes (séquences MIDI : [note, duration en ms])
const DEMOS: Record<string, { name: string; sequence: [number, number][] }> = {
  alclair: {
    name: "Au clair de la lune",
    sequence: [
      [60, 400], [60, 400], [60, 400], [62, 400], // do do do ré
      [64, 800], [62, 800], // mi ré
      [60, 400], [64, 400], [62, 400], [62, 400], // do mi ré ré
      [60, 1200], // do
    ],
  },
  frere: {
    name: "Frère Jacques",
    sequence: [
      [60, 400], [62, 400], [64, 400], [60, 400],
      [60, 400], [62, 400], [64, 400], [60, 400],
      [64, 400], [65, 400], [67, 800],
      [64, 400], [65, 400], [67, 800],
    ],
  },
  furelise: {
    name: "Lettre à Élise (incipit)",
    sequence: [
      [76, 250], [75, 250], [76, 250], [75, 250], [76, 250],
      [71, 250], [74, 250], [72, 250],
      [69, 600],
      [60, 250], [64, 250], [69, 250],
      [71, 600],
      [64, 250], [68, 250], [71, 250],
      [72, 600],
    ],
  },
};

export function MiniKeyboard() {
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const reverbInRef = useRef<GainNode | null>(null);
  const sustainRef = useRef<boolean>(false);
  const activeNotesRef = useRef<Map<string, () => void>>(new Map());
  const sustainedNotesRef = useRef<Set<() => void>>(new Set());

  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.18);
  const [active, setActive] = useState<Set<string>>(new Set());
  const [baseOctave, setBaseOctave] = useState(4); // commence à C4
  const [sustain, setSustain] = useState(false);
  const [demoPlaying, setDemoPlaying] = useState<string | null>(null);
  const demoTimers = useRef<number[]>([]);

  const keys = buildKeys(baseOctave, 2);
  const whiteKeys = keys.filter((k) => !k.isBlack);

  const ensureContext = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!ctxRef.current) {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!Ctor) return null;
      const ctx = new Ctor();
      const master = ctx.createGain();
      master.gain.value = volume;
      // Compresseur léger pour éviter saturation
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -18;
      comp.ratio.value = 4;
      comp.attack.value = 0.003;
      comp.release.value = 0.25;
      master.connect(comp);
      comp.connect(ctx.destination);

      // Faux reverb : delay + lowpass + feedback
      const reverbIn = ctx.createGain();
      reverbIn.gain.value = 0.18;
      const delay = ctx.createDelay();
      delay.delayTime.value = 0.06;
      const fb = ctx.createGain();
      fb.gain.value = 0.45;
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 2400;
      reverbIn.connect(delay);
      delay.connect(lp);
      lp.connect(fb);
      fb.connect(delay);
      lp.connect(master);

      ctxRef.current = ctx;
      masterRef.current = master;
      reverbInRef.current = reverbIn;
    }
    if (ctxRef.current.state === "suspended") {
      void ctxRef.current.resume();
    }
    return ctxRef.current;
  }, [volume]);

  // Met à jour le volume master
  useEffect(() => {
    if (masterRef.current && ctxRef.current) {
      masterRef.current.gain.linearRampToValueAtTime(
        muted ? 0 : volume,
        ctxRef.current.currentTime + 0.1,
      );
    }
  }, [volume, muted]);

  const playNote = useCallback(
    (key: KeyDef) => {
      if (muted) return;
      const ctx = ensureContext();
      if (!ctx || !masterRef.current || !reverbInRef.current) return;

      const t0 = ctx.currentTime;
      const freq = midiToFreq(key.midi);

      // ADSR + filtre dynamique
      const env = ctx.createGain();
      env.gain.setValueAtTime(0.0001, t0);
      env.gain.exponentialRampToValueAtTime(1, t0 + 0.005); // attack
      env.gain.exponentialRampToValueAtTime(0.55, t0 + 0.18); // decay → sustain

      // Filtre passe-bas qui se ferme avec le temps (mat sustain piano)
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(6000, t0);
      filter.frequency.exponentialRampToValueAtTime(1800, t0 + 1.2);
      filter.Q.value = 0.4;

      env.connect(filter);
      filter.connect(masterRef.current);
      filter.connect(reverbInRef.current);

      // 4 oscillateurs harmoniques (additive synthesis pseudo-piano)
      const oscs: OscillatorNode[] = [];
      [
        { type: "triangle" as OscillatorType, gain: 0.55, mult: 1 },
        { type: "sine" as OscillatorType, gain: 0.35, mult: 2 },
        { type: "sine" as OscillatorType, gain: 0.18, mult: 3 },
        { type: "sine" as OscillatorType, gain: 0.07, mult: 4.01 },
      ].forEach(({ type, gain, mult }) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = type;
        o.frequency.value = freq * mult;
        g.gain.value = gain;
        o.connect(g);
        g.connect(env);
        o.start(t0);
        oscs.push(o);
      });

      // Visuel : touche enfoncée
      setActive((cur) => new Set(cur).add(key.note));
      window.setTimeout(
        () =>
          setActive((cur) => {
            const next = new Set(cur);
            next.delete(key.note);
            return next;
          }),
        220,
      );

      // Release : selon sustain
      const releaseAt = (when: number) => {
        const releaseDur = sustainRef.current ? 3.8 : 1.4;
        env.gain.cancelScheduledValues(when);
        env.gain.setValueAtTime(env.gain.value, when);
        env.gain.exponentialRampToValueAtTime(0.0001, when + releaseDur);
        oscs.forEach((o) => o.stop(when + releaseDur + 0.05));
      };

      const stopFn = () => releaseAt(ctx.currentTime);

      // Si une instance précédente de la même note est encore active, on la coupe
      const prev = activeNotesRef.current.get(key.note);
      if (prev) prev();

      activeNotesRef.current.set(key.note, stopFn);

      // Auto-release au bout de 1.6s (note simple, type "click")
      window.setTimeout(() => {
        const fn = activeNotesRef.current.get(key.note);
        if (!fn) return;
        if (sustainRef.current) {
          sustainedNotesRef.current.add(fn);
        } else {
          fn();
        }
        activeNotesRef.current.delete(key.note);
      }, 1600);
    },
    [ensureContext, muted],
  );

  // Sustain : capture les notes actives pour les laisser sonner à la pédale
  useEffect(() => {
    sustainRef.current = sustain;
    if (!sustain) {
      // Relâcher tout ce qui est sustained
      sustainedNotesRef.current.forEach((fn) => fn());
      sustainedNotesRef.current.clear();
    }
  }, [sustain]);

  // Raccourcis QWERTY
  useEffect(() => {
    if (muted) return;
    const onDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      const k = keys.find((x) => x.shortcut === e.key.toLowerCase());
      if (k) {
        e.preventDefault();
        playNote(k);
      }
      if (e.key === " ") {
        e.preventDefault();
        setSustain((s) => !s);
      }
    };
    window.addEventListener("keydown", onDown);
    return () => window.removeEventListener("keydown", onDown);
  }, [keys, playNote, muted]);

  // Démo
  const playDemo = useCallback(
    (id: string) => {
      const demo = DEMOS[id];
      if (!demo) return;
      ensureContext();
      // Stoppe une démo en cours
      demoTimers.current.forEach((t) => window.clearTimeout(t));
      demoTimers.current = [];
      setDemoPlaying(id);
      let elapsed = 0;
      demo.sequence.forEach(([midi, dur]) => {
        const t = window.setTimeout(() => {
          const k = keys.find((x) => x.midi === midi);
          if (k) {
            playNote(k);
          } else {
            // Note hors clavier visible : joue quand même (silencieux visuellement)
            const fauxKey: KeyDef = {
              note: `M${midi}`,
              midi,
              isBlack: false,
            };
            playNote(fauxKey);
          }
        }, elapsed);
        demoTimers.current.push(t);
        elapsed += dur;
      });
      const finalT = window.setTimeout(() => {
        setDemoPlaying(null);
      }, elapsed + 200);
      demoTimers.current.push(finalT);
    },
    [keys, playNote, ensureContext],
  );

  const stopDemo = useCallback(() => {
    demoTimers.current.forEach((t) => window.clearTimeout(t));
    demoTimers.current = [];
    setDemoPlaying(null);
  }, []);

  // Cleanup
  useEffect(() => {
    return () => {
      demoTimers.current.forEach((t) => window.clearTimeout(t));
      if (ctxRef.current) {
        void ctxRef.current.close();
        ctxRef.current = null;
      }
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* Coffret bois style piano */}
      <div className="overflow-hidden rounded-[18px] border border-[#1a1208] bg-gradient-to-b from-[#3b2a17] via-[#2c1d0f] to-[#1a1208] p-4 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.55),0_0_0_1px_rgba(184,137,74,0.18)_inset] sm:p-6">
        {/* Bandeau marque + contrôles */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-1 text-[#e8d4a8]">
          <div className="flex items-center gap-3">
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-[10px] uppercase tracking-[0.32em] text-[#b8894a]">
                Académie Bérénice
              </span>
              <span className="font-serif text-base italic text-[#e8d4a8]">
                Grand Piano · clavier d'essai
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Octave shifter */}
            <div className="inline-flex items-center gap-1 rounded-full bg-black/40 px-1.5 py-0.5 ring-1 ring-[#b8894a]/30">
              <button
                type="button"
                onClick={() => setBaseOctave((o) => Math.max(2, o - 1))}
                aria-label="Octave inférieure"
                className="inline-flex size-6 items-center justify-center rounded-full text-[#e8d4a8] transition hover:bg-[#b8894a]/30"
              >
                ◀
              </button>
              <span className="min-w-[3.2rem] text-center text-[10px] font-medium uppercase tracking-[0.18em]">
                Oct. {baseOctave}–{baseOctave + 2}
              </span>
              <button
                type="button"
                onClick={() => setBaseOctave((o) => Math.min(6, o + 1))}
                aria-label="Octave supérieure"
                className="inline-flex size-6 items-center justify-center rounded-full text-[#e8d4a8] transition hover:bg-[#b8894a]/30"
              >
                ▶
              </button>
            </div>

            {/* Sustain pedal toggle */}
            <button
              type="button"
              onClick={() => setSustain((s) => !s)}
              aria-pressed={sustain}
              className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${
                sustain
                  ? "bg-[#b8894a] text-[#1a1208]"
                  : "bg-black/40 text-[#e8d4a8] ring-1 ring-[#b8894a]/30 hover:bg-[#b8894a]/20"
              }`}
              title="Pédale forte (Espace)"
            >
              ◉ Pédale
            </button>

            {/* Volume */}
            <label className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 ring-1 ring-[#b8894a]/30">
              <span className="text-[10px] uppercase tracking-[0.18em]">
                Vol.
              </span>
              <input
                type="range"
                min={0}
                max={0.4}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                aria-label="Volume"
                className="h-1 w-16 accent-[#b8894a]"
              />
            </label>

            {/* Mute / power */}
            <button
              type="button"
              onClick={() => {
                if (muted) ensureContext();
                setMuted((m) => !m);
              }}
              aria-pressed={!muted}
              className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${
                muted
                  ? "bg-black/40 text-[#e8d4a8] ring-1 ring-[#b8894a]/30 hover:bg-[#b8894a]/20"
                  : "bg-[#b8894a] text-[#1a1208]"
              }`}
            >
              {muted ? "Allumer" : "On"}
            </button>
          </div>
        </div>

        {/* Démos */}
        <div className="mb-3 flex flex-wrap items-center gap-2 px-1 text-[10px]">
          <span className="font-semibold uppercase tracking-[0.18em] text-[#b8894a]">
            Démos →
          </span>
          {Object.entries(DEMOS).map(([id, demo]) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                if (demoPlaying === id) stopDemo();
                else {
                  if (muted) {
                    setMuted(false);
                    ensureContext();
                  }
                  playDemo(id);
                }
              }}
              className={`rounded-full px-3 py-1 font-medium uppercase tracking-[0.14em] transition ${
                demoPlaying === id
                  ? "bg-[#b8894a] text-[#1a1208]"
                  : "bg-black/30 text-[#e8d4a8] ring-1 ring-[#b8894a]/20 hover:bg-[#b8894a]/15"
              }`}
            >
              {demoPlaying === id ? "■ Stop" : "▶"} {demo.name}
            </button>
          ))}
        </div>

        {/* Bandeau "barre de feutre" rouge */}
        <div className="h-1 rounded-t bg-gradient-to-b from-[#7e2014] to-[#4a1208]" />

        {/* CLAVIER */}
        <div className="relative h-52 select-none overflow-hidden rounded-b-md bg-black shadow-inner">
          {/* Touches blanches */}
          <div
            className="grid h-full"
            style={{ gridTemplateColumns: `repeat(${whiteKeys.length}, 1fr)` }}
          >
            {whiteKeys.map((k) => {
              const isActive = active.has(k.note);
              return (
                <button
                  key={k.note}
                  type="button"
                  aria-label={`Note ${k.label} ${k.note}`}
                  onPointerDown={(e) => {
                    e.preventDefault();
                    playNote(k);
                  }}
                  className={`relative flex flex-col items-center justify-end border-r border-black/40 pb-2 text-[9px] font-medium uppercase tracking-[0.18em] transition-all duration-100 last:border-r-0 ${
                    isActive
                      ? "bg-gradient-to-b from-[#fff7d6] via-[#f1e0a8] to-[#e8c97a] text-[#7a4f00] shadow-[inset_0_-3px_0_rgba(0,0,0,0.15)]"
                      : "bg-gradient-to-b from-[#fdfcf6] via-[#f5efe0] to-[#e8dcc4] text-[#6b6f7a] hover:from-[#fff7e0]"
                  }`}
                >
                  {k.shortcut && (
                    <span className="mb-1 inline-flex size-4 items-center justify-center rounded-sm border border-[var(--border)] bg-white/80 text-[8px] text-[var(--muted)]">
                      {k.shortcut}
                    </span>
                  )}
                  <span className="text-[10px]">{k.label}</span>
                  {k.note === `C${baseOctave}` || k.note === `C${baseOctave + 1}` ? (
                    <span className="absolute left-1/2 top-1 -translate-x-1/2 text-[8px] text-[#b8894a]">
                      {k.note}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>

          {/* Touches noires (overlay) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[68%]">
            <div
              className="grid h-full"
              style={{ gridTemplateColumns: `repeat(${whiteKeys.length}, 1fr)` }}
            >
              {whiteKeys.map((wk, i) => {
                // La touche noire qui suit cette blanche, si elle existe
                const idx = keys.findIndex((k) => k === wk);
                const next = keys[idx + 1];
                const black = next?.isBlack ? next : null;
                if (!black) {
                  return <div key={wk.note + "-slot"} />;
                }
                const isActive = active.has(black.note);
                return (
                  <div key={wk.note + "-slot"} className="relative">
                    <button
                      type="button"
                      aria-label={`Note ${black.note}`}
                      onPointerDown={(e) => {
                        e.preventDefault();
                        playNote(black);
                      }}
                      className={`pointer-events-auto absolute -right-[18%] top-0 z-10 flex h-full w-[36%] flex-col items-center justify-end rounded-b-md border border-black pb-1.5 text-[8px] uppercase tracking-[0.14em] transition-all ${
                        isActive
                          ? "bg-gradient-to-b from-[#5a4a2a] via-[#3a2e15] to-[#2a1f08] text-[#b8894a] shadow-[inset_0_-2px_0_rgba(0,0,0,0.4)]"
                          : "bg-gradient-to-b from-[#4a3a20] via-[#2a1f08] to-[#0d0700] text-[#5a4a2a] hover:from-[#5a4a2a]"
                      }`}
                    >
                      {black.shortcut && (
                        <span className="text-[7px] text-[#7a6038]">
                          {black.shortcut}
                        </span>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pied — pédales décoratives + indication */}
        <div className="mt-3 flex items-center justify-between gap-3 text-[10px] text-[#b8894a]/70">
          <span>
            Web Audio · synthèse additive · 4 harmoniques · réverb légère
          </span>
          <div className="flex items-center gap-1.5">
            <span
              className={`inline-block size-2.5 rounded-full transition ${sustain ? "bg-[#b8894a] shadow-[0_0_8px_2px_#b8894a80]" : "bg-[#b8894a]/30"}`}
              aria-hidden
            />
            <span className="text-[9px] uppercase tracking-[0.18em]">
              Sustain
            </span>
          </div>
        </div>
      </div>

      {/* Pied de notice — discret, sous le coffret */}
      <p className="mt-3 text-center text-xs italic text-[var(--muted)]">
        Posez les doigts. Touches QWERTY actives ·{" "}
        <kbd className="rounded border border-[var(--border)] bg-[var(--surface)] px-1 text-[10px]">
          Espace
        </kbd>{" "}
        pour la pédale.
      </p>
    </div>
  );
}
