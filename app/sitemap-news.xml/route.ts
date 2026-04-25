import { getAllArticles } from "@/lib/blog";

const SITE_URL = "https://piano-berenice.com";

/**
 * Sitemap News (Google News). Inclut uniquement les articles
 * publiés au cours des 2 dernières années.
 */
export function GET() {
  const cutoff = new Date();
  cutoff.setFullYear(cutoff.getFullYear() - 2);

  const articles = getAllArticles().filter(
    (a) => new Date(a.publishedAt) >= cutoff,
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${articles
  .map(
    (a) => `  <url>
    <loc>${SITE_URL}/blog/${a.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Académie de piano Bérénice</news:name>
        <news:language>fr</news:language>
      </news:publication>
      <news:publication_date>${a.publishedAt}</news:publication_date>
      <news:title><![CDATA[${a.title}]]></news:title>
    </news:news>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
