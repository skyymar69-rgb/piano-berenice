import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { CookieBanner } from "@/components/CookieBanner";
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

export const metadata: Metadata = {
  title: {
    default: school.seo.defaultTitle,
    template: `%s · ${school.brand.shortName}`,
  },
  description: school.seo.defaultDescription,
  keywords: [...school.seo.keywords],
  metadataBase: new URL("https://piano-berenice.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: school.brand.name,
    title: school.seo.defaultTitle,
    description: school.seo.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: school.seo.defaultTitle,
    description: school.seo.defaultDescription,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  authors: [{ name: school.teacher.fullName }],
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <CookieBanner />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
