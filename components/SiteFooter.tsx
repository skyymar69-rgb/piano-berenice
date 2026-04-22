import Link from "next/link";
import { school } from "@/lib/school";
import { kayzen } from "@/lib/kayzen";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--primary)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-serif text-xl">{school.brand.name}</p>
          <p className="mt-2 text-sm text-white/70">
            Depuis {school.brand.foundedYear} à Nice · Cimiez
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>
              <a
                href={`tel:${school.contact.phone.replace(/\s+/g, "")}`}
                className="hover:text-white"
              >
                {school.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${school.contact.email}`}
                className="break-all hover:text-white"
              >
                {school.contact.email}
              </a>
            </li>
            <li>
              <a
                href={school.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Facebook →
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Adresse
          </p>
          <address className="mt-3 text-sm not-italic text-white/85">
            {school.contact.address.street}
            <br />
            {school.contact.address.postalCode} {school.contact.address.city}
            <br />
            <span className="text-white/60">
              {school.contact.address.complement}
            </span>
          </address>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Navigation
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-white/85">
            <li>
              <Link href="/" className="hover:text-white">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/professeur" className="hover:text-white">
                Professeur
              </Link>
            </li>
            <li>
              <Link href="/cours/piano" className="hover:text-white">
                Piano
              </Link>
            </li>
            <li>
              <Link href="/cours/solfege" className="hover:text-white">
                Solfège
              </Link>
            </li>
            <li>
              <Link href="/cours/eveil-musical" className="hover:text-white">
                Éveil musical
              </Link>
            </li>
            <li>
              <Link href="/tarifs" className="hover:text-white">
                Tarifs
              </Link>
            </li>
            <li>
              <Link href="/plan-acces" className="hover:text-white">
                Plan d'accès
              </Link>
            </li>
            <li>
              <Link href="/inscription" className="hover:text-white">
                Inscription
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/cgu" className="hover:text-white">
                CGU
              </Link>
            </li>
            <li>
              <Link href="/cgv" className="hover:text-white">
                CGV
              </Link>
            </li>
            <li>
              <Link
                href="/politique-confidentialite"
                className="hover:text-white"
              >
                Confidentialité
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-white">
                Cookies
              </Link>
            </li>
            <li>
              <Link href="/carte-de-visite" className="hover:text-white">
                Carte de visite
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/60 sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {school.brand.name} — Tous droits
          réservés.
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
