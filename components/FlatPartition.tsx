"use client";

import { useEffect, useRef } from "react";

type Props = {
  scoreId: string;
  sharingKey: string;
  parts?: string;
  height?: number;
  playbackSpeed?: number; // 0.5 = moitié
  title?: string;
};

/**
 * Embed Flat.io avec contrôle programmatique de la vitesse de lecture via
 * l'API JS officielle (`Flat.Embed` chargée dynamiquement). Fallback
 * silencieux si le script ne charge pas.
 */
export function FlatPartition({
  scoreId,
  sharingKey,
  parts,
  height = 480,
  playbackSpeed = 0.5,
  title = "Partition interactive",
}: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !iframeRef.current) return;
      // @ts-expect-error - Flat Embed UMD global
      const FlatCtor = window.Flat?.Embed;
      if (!FlatCtor) return;
      try {
        const embed = new FlatCtor(iframeRef.current);
        embed
          .ready?.()
          .then(() => {
            embed.setPlaybackSpeed?.(playbackSpeed);
          })
          .catch(() => {
            /* silent */
          });
      } catch {
        /* silent */
      }
    };

    // Évite de recharger si le script est déjà là
    // @ts-expect-error - Flat Embed UMD global
    if (window.Flat?.Embed) {
      init();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-flat-embed="v1"]',
    );
    if (existing) {
      existing.addEventListener("load", init, { once: true });
      return () => {
        cancelled = true;
        existing.removeEventListener("load", init);
      };
    }

    const script = document.createElement("script");
    script.src = "https://prod.flat-cdn.com/embed-js/v2.4.1/embed.min.js";
    script.async = true;
    script.dataset.flatEmbed = "v1";
    script.addEventListener("load", init, { once: true });
    document.head.appendChild(script);

    return () => {
      cancelled = true;
      script.removeEventListener("load", init);
    };
  }, [playbackSpeed]);

  const src = `https://flat.io/embed/${scoreId}?_l=true&sharingKey=${sharingKey}&layout=responsive${
    parts ? `&parts=${parts}` : ""
  }`;

  return (
    <iframe
      ref={iframeRef}
      title={title}
      src={src}
      width="100%"
      height={height}
      frameBorder="0"
      allowFullScreen
      allow="autoplay; midi"
      loading="lazy"
      className="block w-full"
    />
  );
}
