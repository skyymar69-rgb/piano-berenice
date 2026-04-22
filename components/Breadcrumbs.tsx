import Link from "next/link";
import { BreadcrumbJsonLd } from "./JsonLd";

type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: "Accueil", href: "/" }, ...items];
  return (
    <>
      <BreadcrumbJsonLd items={full} />
      <nav
        aria-label="Fil d'Ariane"
        className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8"
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[var(--muted)]">
          {full.map((c, i) => {
            const last = i === full.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-1.5">
                {i > 0 && (
                  <svg
                    aria-hidden
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                )}
                {last ? (
                  <span
                    aria-current="page"
                    className="font-medium text-[var(--primary)]"
                  >
                    {c.name}
                  </span>
                ) : (
                  <Link
                    href={c.href}
                    className="hover:text-[var(--accent)] hover:underline underline-offset-2"
                  >
                    {c.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
