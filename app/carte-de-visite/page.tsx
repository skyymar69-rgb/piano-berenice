import type { Metadata } from "next";
import { school } from "@/lib/school";
import { QrCode } from "@/components/QrCode";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Carte de visite numérique",
  description:
    "Carte de visite numérique de l'Académie de piano Bérénice : téléchargez la vCard, scannez les QR codes vers le site, le plan d'accès et les avis.",
  alternates: { canonical: "/carte-de-visite" },
};

export default function CarteDeVisitePage() {
  const siteUrl = "https://piano-berenice.com";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${school.contact.address.latitude},${school.contact.address.longitude}`;
  const reviewsUrl = `https://www.google.com/search?q=${encodeURIComponent(
    `Académie de piano Bérénice avis`,
  )}`;

  return (
    <>
      <Breadcrumbs items={[{ name: "Carte de visite", href: "/carte-de-visite" }]} />
      <section className="mx-auto max-w-5xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Carte de visite
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          Restez en contact
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--ink)]/80">
          Enregistrez les coordonnées de l'Académie dans votre téléphone en un
          geste, ou partagez-les en scannant les QR codes ci-dessous.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[2fr,3fr] lg:px-8 lg:py-16">
        <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--muted-bg)] to-[var(--surface)] p-8">
          <img
            src="/logo.webp"
            alt={`Logo ${school.brand.name}`}
            width="96"
            height="96"
            className="mb-5 h-24 w-24 rounded-xl border border-[var(--border)] bg-white p-2 shadow-sm"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            {school.brand.shortName}
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--primary)]">
            {school.teacher.fullName}
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {school.teacher.title}
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-[var(--muted)]">Adresse</dt>
              <dd className="mt-1 text-[var(--primary)]">
                {school.contact.address.street}
                <br />
                {school.contact.address.postalCode}{" "}
                {school.contact.address.city}
              </dd>
            </div>
            <div>
              <dt className="text-[var(--muted)]">Téléphone</dt>
              <dd className="mt-1 text-[var(--primary)]">
                <a
                  href={`tel:${school.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[var(--accent)]"
                >
                  {school.contact.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[var(--muted)]">Email</dt>
              <dd className="mt-1 break-all text-[var(--primary)]">
                <a
                  href={`mailto:${school.contact.email}`}
                  className="hover:text-[var(--accent)]"
                >
                  {school.contact.email}
                </a>
              </dd>
            </div>
          </dl>

          <a
            href="/api/vcard"
            download
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)]"
          >
            Télécharger la vCard (.vcf)
          </a>
          <p className="mt-3 text-center text-xs text-[var(--muted)]">
            Compatible iOS, Android, Outlook, Gmail.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Trois QR codes pour nous retrouver
          </h2>
          <p className="mt-2 text-sm text-[var(--ink)]/80">
            Scannez avec votre appareil photo — imprimez-les pour les garder
            sous la main.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <QrCode
              value={siteUrl}
              label="Notre site"
              caption="piano-berenice.com"
            />
            <QrCode
              value={mapsUrl}
              label="Itinéraire"
              caption="59 bd de Cimiez"
            />
            <QrCode
              value={reviewsUrl}
              label="Avis Google"
              caption="Laissez un témoignage"
            />
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <QrCode
              value={`tel:${school.contact.phone.replace(/\s+/g, "")}`}
              label="Appeler"
              caption={school.contact.phoneDisplay}
              size={140}
            />
            <QrCode
              value={`mailto:${school.contact.email}`}
              label="Écrire"
              caption={school.contact.email}
              size={140}
            />
          </div>
        </div>
      </section>
    </>
  );
}
