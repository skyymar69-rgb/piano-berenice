"use client";

import { useEffect, useRef, useState } from "react";

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

type Props = {
  events: TimelineEvent[];
};

export function Timeline({ events }: Props) {
  const containerRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(1);
      setRevealed(new Set(events.map((_, i) => i)));
      return;
    }

    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height + viewport;
      const passed = Math.min(Math.max(viewport - rect.top, 0), total);
      setProgress(Math.min(1, passed / total));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const items = containerRef.current?.querySelectorAll<HTMLLIElement>("li[data-index]");
    if (items) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const idx = Number((e.target as HTMLElement).dataset.index);
              setRevealed((prev) => {
                if (prev.has(idx)) return prev;
                const next = new Set(prev);
                next.add(idx);
                return next;
              });
            }
          });
        },
        { threshold: 0.3, rootMargin: "0px 0px -10% 0px" },
      );
      items.forEach((it) => io.observe(it));
      return () => {
        io.disconnect();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [events]);

  return (
    <ol
      ref={containerRef}
      className="relative ml-3 mt-10 space-y-12 border-l-2 border-[var(--border)] pl-8 sm:ml-6 sm:pl-12"
      aria-label="Parcours chronologique"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -left-[2px] top-0 w-[2px] origin-top bg-gradient-to-b from-[var(--accent)] via-[var(--accent)] to-[var(--accent)]/50 transition-[height] duration-300"
        style={{ height: `${progress * 100}%` }}
      />
      {events.map((event, i) => {
        const visible = revealed.has(i);
        return (
          <li
            key={`${event.year}-${event.title}`}
            data-index={i}
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-12px)",
              transition:
                "opacity 0.7s ease-out, transform 0.7s ease-out",
              transitionDelay: `${(i % 3) * 60}ms`,
            }}
          >
            <span
              aria-hidden
              className="absolute -left-[42px] top-1.5 flex size-5 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--background)] sm:-left-[58px]"
            >
              <span className="size-1.5 rounded-full bg-[var(--accent)]" />
            </span>
            <p className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              {event.year}
            </p>
            <h3 className="mt-2 font-serif text-xl text-[var(--primary)] sm:text-2xl">
              {event.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[var(--ink)]/85">
              {event.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
