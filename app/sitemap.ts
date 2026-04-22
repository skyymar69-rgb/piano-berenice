import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://piano-berenice.com";
  const now = new Date().toISOString();
  const pages = [
    "",
    "/professeur",
    "/cours/piano",
    "/cours/solfege",
    "/cours/eveil-musical",
    "/tarifs",
    "/plan-acces",
    "/contact",
    "/inscription",
    "/carte-de-visite",
    "/mentions-legales",
    "/cgu",
    "/cgv",
    "/politique-confidentialite",
    "/cookies",
  ];
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p.startsWith("/cours") || p === "/inscription" ? 0.8 : 0.6,
  }));
}
