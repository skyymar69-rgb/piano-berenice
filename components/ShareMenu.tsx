"use client";

import { useEffect, useRef, useState } from "react";

export function ShareMenu() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [currentUrl, setCurrentUrl] = useState("https://piano-berenice.com");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

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

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      const t = document.createElement("input");
      t.value = currentUrl;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Académie de piano Bérénice",
          text: "École de piano, solfège et éveil musical à Nice Cimiez depuis 1994.",
          url: currentUrl,
        });
      } catch {
        /* cancelled */
      }
    }
  };

  const enc = encodeURIComponent(currentUrl);
  const shareText = encodeURIComponent(
    "Académie de piano Bérénice — école de musique à Nice Cimiez depuis 1994",
  );

  const targets = [
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${enc}`,
      icon: "M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5 3.66 9.16 8.44 9.93v-7.02H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.9h-2.33V22c4.78-.77 8.44-4.93 8.44-9.93z",
    },
    {
      label: "X / Twitter",
      href: `https://twitter.com/intent/tweet?url=${enc}&text=${shareText}`,
      icon: "M18.244 2H21l-6.545 7.48L22 22h-6.828l-5.34-6.98L3.6 22H1l7.02-8.02L1.5 2h6.93l4.83 6.39L18.244 2zm-1.2 18h1.53L7.04 3.92H5.4L17.044 20z",
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc}`,
      icon: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H18V15.4c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.15 1.46-2.15 2.96V21H10V9z",
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${shareText}%20${enc}`,
      icon: "M12 2a10 10 0 0 0-8.52 15.2L2 22l4.97-1.43A10 10 0 1 0 12 2zm5.63 13.67c-.24.67-1.38 1.28-1.9 1.36-.49.07-1.1.1-1.78-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.7-4.1-4.85-4.29-.15-.2-1.17-1.55-1.17-2.96 0-1.4.73-2.1.99-2.38.26-.29.56-.36.75-.36.19 0 .38.01.54.02.17 0 .4-.07.62.47.24.57.82 1.97.9 2.11.07.15.12.31.02.5-.1.2-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.12 1 2.07 1.3 2.37 1.45.3.15.48.13.66-.07.18-.2.76-.88.96-1.18.2-.3.4-.25.67-.15.27.1 1.7.8 1.99.95.3.15.49.22.56.35.07.13.07.73-.17 1.4z",
    },
    {
      label: "Email",
      href: `mailto:?subject=${shareText}&body=${shareText}%0A%0A${enc}`,
      icon: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13l8-6.99V6H4zm16 2.24l-7.4 6.46a1 1 0 0 1-1.2 0L4 8.24V18h16V8.24z",
    },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Partager cette page"
        title="Partager"
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
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-11 z-50 w-64 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-xl"
        >
          <button
            type="button"
            onClick={copyLink}
            role="menuitem"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-[var(--foreground)] hover:bg-[var(--muted-bg)]"
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
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <span>{copied ? "Lien copié ✓" : "Copier le lien"}</span>
          </button>
          {typeof navigator !== "undefined" &&
            typeof navigator.share === "function" && (
              <button
                type="button"
                onClick={nativeShare}
                role="menuitem"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-[var(--foreground)] hover:bg-[var(--muted-bg)]"
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
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" />
                </svg>
                <span>Partager…</span>
              </button>
            )}
          <div className="my-1 h-px bg-[var(--border)]" aria-hidden />
          {targets.map((t) => (
            <a
              key={t.label}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--muted-bg)]"
            >
              <svg
                aria-hidden
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d={t.icon} />
              </svg>
              <span>{t.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
