import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/blog";

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
    "/faq",
    "/questions",
    "/glossaire",
    "/concerts",
    "/cours-piano-cimiez",
    "/cours-piano-vieux-nice",
    "/cours-piano-mont-boron",
    "/partitions",
    "/blog",
    "/carte-de-visite",
    "/mentions-legales",
    "/cgu",
    "/cgv",
    "/politique-confidentialite",
    "/cookies",
  ];

  const staticEntries: MetadataRoute.Sitemap = pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority:
      p === ""
        ? 1
        : p.startsWith("/cours") || p === "/inscription"
          ? 0.8
          : p === "/blog"
            ? 0.7
            : 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: a.updatedAt ?? a.publishedAt,
    changeFrequency: "yearly" as const,
    priority: 0.65,
  }));

  return [...staticEntries, ...blogEntries];
}
