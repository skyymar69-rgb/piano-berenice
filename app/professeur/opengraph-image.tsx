import { ImageResponse } from "next/og";
import { school } from "@/lib/school";

export const alt = `Bérénice Lecardeur — professeure de piano à Nice`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-dynamic";

async function loadFraunces(weight: 400 | 600 = 600): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=Fraunces:wght@${weight}&display=swap`;
    const css = await fetch(cssUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15",
      },
    }).then((r) => r.text());
    const match = css.match(/url\((https:\/\/[^)]+\.(?:woff2|ttf|otf))\)/);
    if (!match) return null;
    const fontRes = await fetch(match[1]);
    if (!fontRes.ok) return null;
    return await fontRes.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Image() {
  const [bold, italic] = await Promise.all([
    loadFraunces(600),
    loadFraunces(400),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "0",
          background: "#1a2540",
          color: "#fbf7ef",
          fontFamily: "Fraunces, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 64px",
          }}
        >
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#d5b07c",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span
              style={{
                width: 40,
                height: 2,
                background: "#d5b07c",
                display: "block",
              }}
            />
            La professeure
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                fontSize: 88,
                lineHeight: 1,
                fontWeight: 600,
                letterSpacing: -2,
              }}
            >
              {school.teacher.fullName}
            </div>
            <div
              style={{
                fontSize: 30,
                fontStyle: "italic",
                color: "#d5b07c",
                opacity: 0.95,
              }}
            >
              Médaille d&apos;Or — Académie de Monaco
            </div>
            <div
              style={{
                fontSize: 26,
                color: "#fbf7ef",
                opacity: 0.82,
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                marginTop: 4,
              }}
            >
              Plus de 30 ans d&apos;enseignement à Nice Cimiez
            </div>
          </div>

          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 22,
              color: "#fbf7ef",
              opacity: 0.7,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>{school.brand.name}</span>
            <span>piano-berenice.com/professeur</span>
          </div>
        </div>

        {/* Bandeau or à droite */}
        <div
          style={{
            width: 12,
            background:
              "linear-gradient(180deg, #d5b07c 0%, #b8894a 50%, #d5b07c 100%)",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        ...(bold
          ? [
              {
                name: "Fraunces",
                data: bold,
                weight: 600 as const,
                style: "normal" as const,
              },
            ]
          : []),
        ...(italic
          ? [
              {
                name: "Fraunces",
                data: italic,
                weight: 400 as const,
                style: "normal" as const,
              },
            ]
          : []),
      ],
    },
  );
}
