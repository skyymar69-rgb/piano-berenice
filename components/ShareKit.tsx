"use client";

import { useState } from "react";

type Props = {
  title: string;
  url: string;
};

/**
 * Kit de partage léger : Facebook, X, LinkedIn, Email, Copier le lien.
 * Pas de tracker tiers, simples ouvertures de fenêtres.
 */
export function ShareKit({ title, url }: Props) {
  const [copied, setCopied] = useState(false);
  const fullUrl = url.startsWith("http") ? url : `https://piano-berenice.com${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);

  const services = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      svg: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5 3.66 9.16 8.44 9.93v-7.02H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.9h-2.33V22c4.78-.77 8.44-4.93 8.44-9.93z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      svg: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      svg: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8 17v-7H5.5v7zm-1.25-8a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zM18 17v-3.85c0-2.45-1.55-3.4-3.05-3.4a2.65 2.65 0 0 0-2.45 1.4V10H10v7h2.5v-3.6c0-1.05.65-1.65 1.5-1.65.85 0 1.5.55 1.5 1.65V17z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedTitle}%0A%0A${encodedUrl}`,
      svg: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 7L12 13 2 7" />
        </svg>
      ),
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="my-10 flex flex-wrap items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--muted-bg)]/50 p-5">
      <p className="font-serif text-sm font-medium text-[var(--primary)]">
        Partager cet article
      </p>
      <div className="flex flex-wrap gap-2">
        {services.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Partager sur ${s.name}`}
            data-tooltip={s.name}
            className="fab-tooltip inline-flex size-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {s.svg}
          </a>
        ))}
        <button
          type="button"
          onClick={copyLink}
          aria-label="Copier le lien"
          data-tooltip={copied ? "Lien copié !" : "Copier le lien"}
          className="fab-tooltip inline-flex size-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          {copied ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M20 6L9 17l-5-5" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
