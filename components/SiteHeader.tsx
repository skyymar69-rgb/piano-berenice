import Link from "next/link";
import QRCode from "qrcode";
import { school } from "@/lib/school";
import { SolClefLogo } from "./SolClefLogo";
import { ThemeToggle } from "./ThemeToggle";
import { ShareMenu } from "./ShareMenu";
import { VCardMenu } from "./VCardMenu";

const nav = [
  { href: "/professeur", label: "Le professeur" },
  { href: "/cours/piano", label: "Piano" },
  { href: "/cours/solfege", label: "Solfège" },
  { href: "/cours/eveil-musical", label: "Éveil musical" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/plan-acces", label: "Plan d'accès" },
  { href: "/contact", label: "Contact" },
];

export async function SiteHeader() {
  // QR code encodant directement la vCard (URL) — scanné depuis un tel
  const qr = await QRCode.toDataURL("https://piano-berenice.com/api/vcard", {
    width: 320,
    margin: 1,
    color: { dark: "#1a2540", light: "#ffffff" },
    errorCorrectionLevel: "M",
  });

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Retour à l'accueil"
        >
          <SolClefLogo size={32} />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold text-[var(--primary)] sm:text-xl">
              {school.brand.name}
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              Nice · Cimiez · depuis {school.brand.foundedYear}
            </span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-5 text-sm text-[var(--ink)]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-[var(--accent)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <ShareMenu />
            <VCardMenu qrDataUrl={qr} />
            <ThemeToggle />
          </div>
          <Link
            href="/inscription"
            className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-medium text-[var(--primary-contrast)] transition hover:bg-[var(--primary-hover)]"
          >
            Cours d'essai
          </Link>
        </div>
      </div>

      {/* nav mobile + utilitaires */}
      <div className="lg:hidden">
        <div className="flex items-center justify-end gap-2 border-t border-[var(--border)] px-4 py-2 sm:hidden">
          <ShareMenu />
          <VCardMenu qrDataUrl={qr} />
          <ThemeToggle />
        </div>
        <nav aria-label="Navigation mobile">
          <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto border-t border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)]">
            {nav.map((item) => (
              <li key={item.href} className="snap-start shrink-0">
                <Link
                  href={item.href}
                  className="whitespace-nowrap hover:text-[var(--accent)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
