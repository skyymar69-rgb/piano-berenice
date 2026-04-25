import { ImageResponse } from "next/og";
import { school } from "@/lib/school";

export const alt = `Logo et signature ${school.brand.name}`;
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
  const [fontBold, fontRegular] = await Promise.all([
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
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background:
            "linear-gradient(135deg, #fbf7ef 0%, #f3ece0 60%, #e8dcc1 100%)",
          fontFamily: "Fraunces, serif",
          color: "#1a2540",
          position: "relative",
        }}
      >
        {/* Portée musicale stylisée */}
        <div
          style={{
            position: "absolute",
            top: 280,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            gap: 14,
            opacity: 0.12,
          }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{ height: 2, background: "#1a2540", width: "100%" }}
            />
          ))}
        </div>

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#b8894a",
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 40,
                height: 2,
                background: "#b8894a",
                display: "block",
              }}
            />
            Nice · Cimiez
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#6b6f7a",
              letterSpacing: 4,
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Depuis {school.brand.foundedYear}
          </div>
        </div>

        {/* Titre */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.02,
              fontWeight: 600,
              letterSpacing: -2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Cours de piano,</span>
            <span style={{ color: "#b8894a" }}>solfège & éveil musical</span>
          </div>
          <div
            style={{
              fontSize: 32,
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              color: "#1a2540",
              opacity: 0.78,
              marginTop: 8,
            }}
          >
            par {school.teacher.fullName} — Médaille d'Or de Monaco
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "Inter, sans-serif",
            fontSize: 24,
            color: "#1a2540",
          }}
        >
          <span style={{ fontWeight: 600 }}>{school.brand.name}</span>
          <span style={{ color: "#6b6f7a" }}>piano-berenice.com</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        ...(fontBold
          ? [
              {
                name: "Fraunces",
                data: fontBold,
                weight: 600 as const,
                style: "normal" as const,
              },
            ]
          : []),
        ...(fontRegular
          ? [
              {
                name: "Fraunces",
                data: fontRegular,
                weight: 400 as const,
                style: "normal" as const,
              },
            ]
          : []),
      ],
    },
  );
}
