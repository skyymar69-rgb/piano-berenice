"use client";

import { useEffect, useRef } from "react";

/**
 * Curseur ornemental : un rond doré qui suit la souris avec un léger
 * délai (lerp), gravée d'une clé de sol. Sur les zones interactives
 * (a, button, [role=button]) le rond se gonfle et la clé passe en
 * coloris primaire pour signaler l'action.
 *
 * Désactivé sur :
 *  - écrans sans pointeur fin (touch)
 *  - prefers-reduced-motion
 *  - data-motion="reduced"
 */
export function CursorOrb() {
  const orbRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const raf = useRef<number | null>(null);
  const visible = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduced || !fine) return;

    const orb = orbRef.current;
    const dot = dotRef.current;
    if (!orb || !dot) return;

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible.current) {
        visible.current = true;
        orb.classList.add("is-visible");
        dot.classList.add("is-visible");
      }
      const t = e.target as HTMLElement | null;
      const interactive = t?.closest(
        'a, button, [role="button"], summary, label, input[type="submit"], input[type="button"]',
      );
      orb.classList.toggle("is-active", !!interactive);
    };

    const onLeave = () => {
      visible.current = false;
      orb.classList.remove("is-visible");
      dot.classList.remove("is-visible");
    };

    const tick = () => {
      // Lerp orb (lent), dot (rapide)
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      dotPos.current.x += (target.current.x - dotPos.current.x) * 0.45;
      dotPos.current.y += (target.current.y - dotPos.current.y) * 0.45;
      orb.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      dot.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      raf.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    raf.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (raf.current) window.cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={orbRef} aria-hidden className="cursor-orb">
        <svg
          viewBox="0 0 48 72"
          width="22"
          height="33"
          fill="currentColor"
          className="cursor-orb__clef"
        >
          <path d="M25.9 2.3c-2 2.2-3.1 5.2-3.1 8.6 0 3.3.9 6.5 2.5 10.1-5.9 4.2-10.1 9.1-10.1 15.7 0 5.9 4.1 10.8 9.5 12.4l.8 4.9c.2 1.3-.1 2.5-.9 3.5-.9 1-2.2 1.6-3.7 1.6-2.2 0-4-1.4-4.6-3.3 2.1-.4 3.6-2.2 3.6-4.4 0-2.5-2-4.5-4.5-4.5s-4.6 2-4.6 4.6c0 5 4.3 9 9.6 9 2.9 0 5.4-1.1 7.1-3.1 1.5-1.8 2.2-4.1 1.9-6.5l-.8-4.7c.4 0 .8.1 1.2.1 5.8 0 10.5-4.7 10.5-10.5 0-4.8-3.2-8.9-7.7-10.2l-1.1-6.5c3.1-2.5 5-6.2 5-10.1 0-3.2-1.1-6-3.1-8.3-.2-.3-.7-.3-1-.1-2 1.7-3.4 4.6-3.4 7.8 0 3.5 1.5 6.7 3.9 8.9l1 6.2c-.7-.1-1.4-.2-2.1-.2-5.5 0-10 4.5-10 10 0 3.8 2.1 7.1 5.2 8.8l-.7-4.1c-1.2-1-1.9-2.5-1.9-4.2 0-3 2.4-5.4 5.4-5.4s5.4 2.4 5.4 5.4c0 2.5-1.7 4.6-4 5.2l-1-5.7c-.3-1.9-.8-3.7-1.5-5.4-1.6-3.8-2.6-7.2-2.6-10.4 0-2.7.7-5.1 2.1-7 .3-.2.3-.6 0-.8-.3-.3-.7-.3-1 0z" />
        </svg>
      </div>
      <div ref={dotRef} aria-hidden className="cursor-orb__dot" />
    </>
  );
}
