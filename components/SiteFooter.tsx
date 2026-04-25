import Link from "next/link";
import { school } from "@/lib/school";
import { kayzen } from "@/lib/kayzen";

const sitemap: {
  title: string;
  icon: React.ReactNode;
  links: { href: string; label: string }[];
}[] = [
  {
    title: "Nos cours",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8h18M3 16h18" />
        <path d="M7 8v8M11 8v8M15 8v8" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
      </svg>
    ),
    links: [
      { href: "/cours/piano", label: "Cours de piano" },
      { href: "/cours/solfege", label: "Cours de solfège" },
      { href: "/cours/eveil-musical", label: "Éveil musical" },
      { href: "/tarifs", label: "Tarifs & modalités" },
      { href: "/inscription", label: "S'inscrire pour la rentrée" },
      { href: "/partitions", label: "Partitions libres de droit" },
      { href: "/faq", label: "Questions fréquentes" },
    ],
  },
  {
    title: "L'Académie",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    ),
    links: [
      { href: "/professeur", label: "Bérénice Lecardeur" },
      { href: "/plan-acces", label: "Plan d'accès" },
      { href: "/contact", label: "Nous contacter" },
      { href: "/carte-de-visite", label: "Carte de visite numérique" },
    ],
  },
  {
    title: "Informations",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    ),
    links: [
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/cgu", label: "Conditions générales d'utilisation" },
      { href: "/cgv", label: "Conditions générales de vente" },
      { href: "/politique-confidentialite", label: "Politique de confidentialité" },
      { href: "/cookies", label: "Politique cookies" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer
      id="footer"
      role="contentinfo"
      className="mt-24 bg-[var(--primary)] text-white"
    >
      {/* Bandeau contact */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-4 sm:px-6 lg:px-8">
          <div>
            <img
              src="/logo.webp"
              alt={`Logo ${school.brand.name}`}
              width="72"
              height="72"
              loading="lazy"
              decoding="async"
              className="mb-3 h-16 w-16 rounded-xl bg-white/5 p-1 ring-1 ring-white/10"
            />
            <p className="font-serif text-lg leading-tight">
              {school.brand.name}
            </p>
            <p className="mt-1 text-xs text-white/60">
              Depuis {school.brand.foundedYear}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Adresse
            </p>
            <address className="mt-2 text-sm not-italic text-white/85">
              {school.contact.address.street}
              <br />
              {school.contact.address.postalCode}{" "}
              {school.contact.address.city}
              <br />
              <span className="text-white/60">
                {school.contact.address.complement}
              </span>
            </address>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Contact
            </p>
            <ul className="mt-2 space-y-1 text-sm text-white/85">
              <li>
                Mobile —{" "}
                <a
                  href={`tel:${school.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white"
                >
                  {school.contact.phoneDisplay}
                </a>
              </li>
              <li>
                Fixe —{" "}
                <a
                  href={`tel:${school.contact.phoneLandline.replace(/\s+/g, "")}`}
                  className="hover:text-white"
                >
                  {school.contact.phoneLandline}
                </a>
              </li>
              <li className="break-all">
                <a
                  href={`mailto:${school.contact.email}`}
                  className="hover:text-white"
                >
                  {school.contact.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Suivez-nous
            </p>
            <div className="mt-3 flex gap-2">
              <a
                href={school.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Page Facebook de l'Académie"
                className="inline-flex size-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-[var(--accent)]"
              >
                <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5 3.66 9.16 8.44 9.93v-7.02H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.9h-2.33V22c4.78-.77 8.44-4.93 8.44-9.93z" />
                </svg>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${school.contact.address.latitude},${school.contact.address.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir l'itinéraire vers l'Académie"
                className="inline-flex size-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-[var(--accent)]"
              >
                <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-8-6.5-8-12a8 8 0 0 1 16 0c0 5.5-8 12-8 12z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </a>
              <Link
                href="/carte-de-visite"
                aria-label="Carte de visite numérique"
                className="inline-flex size-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-[var(--accent)]"
              >
                <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <path d="M14 14h3v3h-3zM20 14h1M14 20h3m4 0h-1" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Plan du site */}
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="inline-flex size-10 items-center justify-center rounded-full bg-white/5 text-[var(--accent)] ring-1 ring-white/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Plan du site
            </p>
            <h2 className="font-serif text-xl text-white">
              Retrouvez toutes les pages en un coup d'œil
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sitemap.map((col) => (
            <div key={col.title}>
              <div className="flex items-center gap-2 text-[var(--accent)]">
                {col.icon}
                <h3 className="font-serif text-base text-white">
                  {col.title}
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-flex items-center gap-1 transition hover:text-[var(--accent)]"
                    >
                      <svg
                        aria-hidden
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="currentColor"
                      >
                        <path d="M2 1l4 3-4 3z" />
                      </svg>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60 sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {school.brand.name} — Tous droits réservés.
        </p>
        <p className="mt-1">
          Fièrement réalisé par{" "}
          <a
            href={kayzen.site}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white/80 underline-offset-2 hover:text-[var(--accent)] hover:underline"
          >
            {kayzen.brandWeb}
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
