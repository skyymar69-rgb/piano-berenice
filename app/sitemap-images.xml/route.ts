import { images } from "@/lib/images";

const SITE = "https://piano-berenice.com";

// Liste des pages avec leurs images clés pour enrichir l'indexation Google Images
const mapping: { url: string; imageKeys: (keyof typeof images)[] }[] = [
  {
    url: "/",
    imageKeys: ["berenicePortrait", "stockTouchesPiano", "stockPartitionSolfege", "partitionRose"],
  },
  {
    url: "/professeur",
    imageKeys: ["bereniceNappe", "berenicePortrait", "berenicePiano"],
  },
  {
    url: "/cours/piano",
    imageKeys: ["stockMainsPianoBois", "sallePianoDecor", "pianoYamahaPartition"],
  },
  {
    url: "/cours/solfege",
    imageKeys: ["stockPartitionSolfege", "stockElevePartition", "salleSolfege"],
  },
  {
    url: "/cours/eveil-musical",
    imageKeys: ["salleAudition", "stockElevePartition"],
  },
  {
    url: "/plan-acces",
    imageKeys: ["couloirAccueil"],
  },
];

export function GET() {
  const entries = mapping
    .map((m) => {
      const imgs = m.imageKeys
        .map((k) => {
          const img = images[k];
          return `    <image:image>
      <image:loc>${SITE}/images/${img.slug}-lg.webp</image:loc>
      <image:title>${escape(img.title)}</image:title>
      <image:caption>${escape(img.alt)}</image:caption>
    </image:image>`;
        })
        .join("\n");
      return `  <url>
    <loc>${SITE}${m.url}</loc>
${imgs}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
