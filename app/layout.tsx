import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { CookieBanner } from "@/components/CookieBanner";
import { ThemeInit } from "@/components/ThemeInit";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { MiniPlayer } from "@/components/MiniPlayer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingDock, BackToTopDock } from "@/components/FloatingDock";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { MagneticEffect } from "@/components/MagneticEffect";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SeasonAccent } from "@/components/SeasonAccent";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { school } from "@/lib/school";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf7ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1320" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark" as const,
};

export const metadata: Metadata = {
  title: {
    default: school.seo.defaultTitle,
    template: `%s · ${school.brand.shortName}`,
  },
  description: school.seo.defaultDescription,
  keywords: [...school.seo.keywords],
  metadataBase: new URL("https://piano-berenice.com"),
  manifest: "/manifest.webmanifest",
  applicationName: school.brand.name,
  appleWebApp: {
    capable: true,
    title: school.brand.shortName,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: school.brand.name,
    title: school.seo.defaultTitle,
    description: school.seo.defaultDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `Logo ${school.brand.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: school.seo.defaultTitle,
    description: school.seo.defaultDescription,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon-57.png", sizes: "57x57" },
      { url: "/apple-icon-60.png", sizes: "60x60" },
      { url: "/apple-icon-72.png", sizes: "72x72" },
      { url: "/apple-icon-76.png", sizes: "76x76" },
      { url: "/apple-icon-114.png", sizes: "114x114" },
      { url: "/apple-icon-120.png", sizes: "120x120" },
      { url: "/apple-icon-144.png", sizes: "144x144" },
      { url: "/apple-icon-152.png", sizes: "152x152" },
      { url: "/apple-icon-167.png", sizes: "167x167" },
      { url: "/apple-icon-180.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#1a2540",
      },
    ],
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  authors: [{ name: school.teacher.fullName, url: "https://piano-berenice.com/professeur" }],
  creator: school.teacher.fullName,
  publisher: "Académie de piano Bérénice",
  category: "Education",
  other: {
    "msapplication-TileColor": "#1a2540",
    "msapplication-config": "/browserconfig.xml",
    "geo.region": "FR-06",
    "geo.placename": "Nice Cimiez",
    "geo.position": `${school.contact.address.latitude};${school.contact.address.longitude}`,
    ICBM: `${school.contact.address.latitude}, ${school.contact.address.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeInit />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://flat.io" />
        <link rel="dns-prefetch" href="https://prod.flat-cdn.com" />
        <link rel="dns-prefetch" href="https://www.openstreetmap.org" />
        <link
          rel="preload"
          as="image"
          href="/logo.webp"
          fetchPriority="high"
        />
        <meta name="format-detection" content="telephone=no" />
        {/* Speculation Rules : pré-rendu des routes critiques au survol/clic */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  source: "document",
                  where: {
                    href_matches: [
                      "/inscription",
                      "/cours/piano",
                      "/cours/solfege",
                      "/cours/eveil-musical",
                      "/professeur",
                      "/tarifs",
                      "/contact",
                    ],
                  },
                  eagerness: "moderate",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-[var(--primary-contrast)]"
        >
          Aller au contenu
        </a>
        <a
          href="#footer"
          className="sr-only focus:not-sr-only focus:absolute focus:left-44 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-[var(--primary-contrast)]"
        >
          Aller au pied de page
        </a>
        <ScrollProgress />
        <ScrollToTop />
        <SeasonAccent />
        <MagneticEffect />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <CookieBanner />
        <AccessibilityWidget />
        <FloatingDock>
          <MiniPlayer />
          <BackToTopDock />
          <WhatsAppFab />
        </FloatingDock>
        <OrganizationJsonLd />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
