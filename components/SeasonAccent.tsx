"use client";

import { useEffect } from "react";

/**
 * Module subtilement la couleur d'accent selon la saison.
 * Hiver : or pâle légèrement bleuté.
 * Printemps : or chaud doré.
 * Été : terre cuite.
 * Automne : ocre/cuivre.
 * Effet imperceptible mais présent — comme une lumière qui change.
 */
export function SeasonAccent() {
  useEffect(() => {
    const month = new Date().getMonth(); // 0-11
    let season: "winter" | "spring" | "summer" | "autumn";
    if (month <= 1 || month === 11) season = "winter";
    else if (month <= 4) season = "spring";
    else if (month <= 7) season = "summer";
    else season = "autumn";
    document.documentElement.dataset.season = season;
  }, []);
  return null;
}
