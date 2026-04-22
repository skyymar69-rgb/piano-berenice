import type { Metadata } from "next";
import { school } from "@/lib/school";

export const metadata: Metadata = {
  title: "Plan d'accès — 59 boulevard de Cimiez, Nice",
  description:
    "L'Académie de piano Bérénice se trouve au 59 boulevard de Cimiez à Nice, entrée dans l'impasse. Accès en bus : lignes 5, 33, 40, 70.",
  alternates: { canonical: "/plan-acces" },
};

export default function PlanAccesPage() {
  const { latitude, longitude } = school.contact.address;
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Accès
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          Plan d'accès
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--ink)]/80">
          L'Académie se trouve au cœur du quartier résidentiel de Cimiez, à
          deux pas des arènes et du monastère.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
        <div>
          <address className="rounded-2xl border border-[var(--border)] bg-white/70 p-7 not-italic">
            <p className="font-serif text-2xl text-[var(--primary)]">
              {school.brand.name}
            </p>
            <p className="mt-3 text-base leading-relaxed text-[var(--ink)]/85">
              {school.contact.address.street}
              <br />
              {school.contact.address.postalCode}{" "}
              {school.contact.address.city}
              <br />
              <span className="text-[var(--accent)]">
                {school.contact.address.complement}
              </span>
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={`tel:${school.contact.phone.replace(/\s+/g, "")}`}
                className="font-medium text-[var(--primary)] hover:text-[var(--accent)]"
              >
                Téléphone : {school.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${school.contact.email}`}
                className="font-medium text-[var(--primary)] break-all hover:text-[var(--accent)]"
              >
                Email : {school.contact.email}
              </a>
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)]"
            >
              Itinéraire →
            </a>
          </address>

          <div className="mt-8 rounded-2xl border border-[var(--border)] bg-white/70 p-7">
            <h2 className="font-serif text-xl text-[var(--primary)]">
              En bus
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--ink)]/85">
              {school.contact.transit.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[var(--muted)]">
              Les lignes sont opérées par Lignes d'Azur. Vérifiez les horaires
              et éventuelles évolutions du réseau sur leur site.
            </p>
          </div>
        </div>

        <div className="aspect-square overflow-hidden rounded-2xl border border-[var(--border)] lg:aspect-auto lg:h-full">
          <iframe
            title="Carte OpenStreetMap — 59 boulevard de Cimiez"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${
              longitude - 0.006
            }%2C${latitude - 0.004}%2C${longitude + 0.006}%2C${
              latitude + 0.004
            }&layer=mapnik&marker=${latitude}%2C${longitude}`}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
