"use client";

import { useEffect, useState } from "react";

type Image = {
  slug: string;
  alt: string;
  caption?: string;
};

type Props = {
  images: Image[];
};

/**
 * Lightbox client : convertit la galerie standard en grille cliquable
 * qui ouvre une visionneuse plein écran avec navigation prev/next.
 */
export function Lightbox({ images }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, images.length]);

  return (
    <>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <button
            key={img.slug}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group salon-frame text-left"
            aria-label={`Voir ${img.alt} en grand`}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`/images/${img.slug}-sm.webp 480w, /images/${img.slug}-md.webp 960w, /images/${img.slug}-lg.webp 1600w`}
                  sizes="(min-width:1024px) 380px, 100vw"
                />
                <img
                  src={`/images/${img.slug}-md.webp`}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </picture>
            </div>
            {img.caption && (
              <span className="mt-3 block px-1 pb-1 text-center font-serif text-sm italic text-[var(--ink)]/85">
                {img.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[openIndex].alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex(null);
            }}
            aria-label="Fermer la visionneuse"
            className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
            }}
            aria-label="Image précédente"
            className="absolute left-4 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
            }}
            aria-label="Image suivante"
            className="absolute right-4 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <figure
            className="relative max-h-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <picture>
              <source
                type="image/webp"
                srcSet={`/images/${images[openIndex].slug}-md.webp 960w, /images/${images[openIndex].slug}-lg.webp 1600w`}
                sizes="100vw"
              />
              <img
                src={`/images/${images[openIndex].slug}-lg.webp`}
                alt={images[openIndex].alt}
                className="max-h-[85vh] w-auto object-contain"
              />
            </picture>
            {images[openIndex].caption && (
              <figcaption className="mt-3 text-center text-sm text-white/80">
                {images[openIndex].caption}
              </figcaption>
            )}
            <p className="mt-2 text-center text-xs text-white/60">
              {openIndex + 1} / {images.length} · Échap pour fermer · ← → pour naviguer
            </p>
          </figure>
        </div>
      )}
    </>
  );
}
