"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll automatique en haut de page à chaque changement de route.
 * Évite l'atterrissage à mi-page après navigation client-side.
 */
export function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return; // ne touche pas aux ancres
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}
