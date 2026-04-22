"use client";

import { useEffect, useRef, useState } from "react";
import { school } from "@/lib/school";

type Props = {
  qrDataUrl: string;
};

export function VCardMenu({ qrDataUrl }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("mousedown", h);
    window.addEventListener("keydown", k);
    return () => {
      window.removeEventListener("mousedown", h);
      window.removeEventListener("keydown", k);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Carte de visite numérique"
        title="Carte de visite numérique"
        className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        <svg
          aria-hidden
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <path d="M14 14h3v3h-3zM20 14h1M14 20h3m4 0h-1m-4-4v1" />
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Carte de visite numérique"
          className="absolute right-0 top-11 z-50 w-80 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl"
        >
          <div className="flex items-start gap-3">
            <img
              src="/logo.webp"
              alt={`Logo ${school.brand.name}`}
              width="56"
              height="56"
              loading="lazy"
              decoding="async"
              className="size-14 shrink-0 rounded-xl border border-[var(--border)] bg-white p-1"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                {school.brand.shortName}
              </p>
              <p className="mt-1 font-serif text-lg leading-tight text-[var(--primary)]">
                {school.teacher.fullName}
              </p>
              <p className="text-xs text-[var(--muted)]">
                {school.teacher.title}
              </p>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <img
              src={qrDataUrl}
              alt="QR code vers la carte de contact de l'Académie de piano Bérénice"
              width={160}
              height={160}
              className="rounded-lg border border-[var(--border)] bg-white p-2"
            />
          </div>
          <p className="mt-2 text-center text-xs text-[var(--muted)]">
            Scannez pour enregistrer le contact
          </p>

          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between gap-3">
              <dt className="text-[var(--muted)]">Mobile</dt>
              <dd>
                <a
                  href={`tel:${school.contact.phone.replace(/\s+/g, "")}`}
                  className="font-medium text-[var(--primary)] hover:text-[var(--accent)]"
                >
                  {school.contact.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-[var(--muted)]">Fixe</dt>
              <dd>
                <a
                  href={`tel:${school.contact.phoneLandline.replace(/\s+/g, "")}`}
                  className="font-medium text-[var(--primary)] hover:text-[var(--accent)]"
                >
                  {school.contact.phoneLandline}
                </a>
              </dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-[var(--muted)]">Email</dt>
              <dd className="break-all text-right">
                <a
                  href={`mailto:${school.contact.email}`}
                  className="text-xs font-medium text-[var(--primary)] hover:text-[var(--accent)]"
                >
                  {school.contact.email}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-col gap-2">
            <a
              href="/api/vcard"
              download
              className="rounded-full bg-[var(--primary)] px-4 py-2.5 text-center text-sm font-medium text-[var(--primary-contrast)] transition hover:bg-[var(--primary-hover)]"
            >
              Télécharger la vCard (.vcf)
            </a>
            <a
              href="/carte-de-visite"
              className="rounded-full border border-[var(--border)] px-4 py-2 text-center text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
            >
              Carte de visite complète →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
