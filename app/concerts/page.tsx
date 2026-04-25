import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Picture } from "@/components/Picture";
import { school } from "@/lib/school";

export const metadata: Metadata = {
  title: "Concerts & auditions — Académie de piano Bérénice à Nice",
  description:
    "Auditions annuelles et concerts de l'Académie de piano Bérénice. Les élèves se produisent chaque année dans une ambiance bienveillante au cœur de Cimiez.",
  alternates: { canonical: "/concerts" },
};

const upcomingEvents = [
  {
    name: "Audition annuelle 2027",
    date: "2027-06-13",
    time: "14:00",
    description:
      "Audition annuelle des élèves de l'Académie de piano Bérénice. Tous les élèves inscrits présentent un morceau de leur choix devant familles et amis. Entrée libre sur invitation.",
    type: "audition",
  },
  {
    name: "Audition de mi-saison",
    date: "2027-02-07",
    time: "16:00",
    description:
      "Concert intermédiaire pour les élèves les plus avancés, en préparation de l'audition annuelle de juin. Format intimiste autour du piano à queue.",
    type: "concert",
  },
];

const pastEvents = [
  { year: "2026", title: "Audition annuelle 2026", count: 28, description: "28 élèves se sont produits, du plus petit (5 ans, en éveil musical) au plus avancé (préparation bac option musique)." },
  { year: "2025", title: "Audition annuelle 2025", count: 25, description: "Programme allant des Petits Préludes de Bach aux Préludes de Chopin." },
  { year: "2024", title: "Audition annuelle 2024", count: 30, description: "Édition exceptionnelle des 30 ans de l'Académie." },
];

function EventJsonLd({ events }: { events: typeof upcomingEvents }) {
  const data = events.map((e) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.name,
    description: e.description,
    startDate: `${e.date}T${e.time}:00+02:00`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: school.brand.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: school.contact.address.street,
        postalCode: school.contact.address.postalCode,
        addressLocality: school.contact.address.city,
        addressCountry: school.contact.address.countryCode,
      },
    },
    organizer: {
      "@type": "MusicSchool",
      name: school.brand.name,
      url: "https://piano-berenice.com",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://piano-berenice.com/concerts",
    },
  }));
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ConcertsPage() {
  return (
    <>
      <EventJsonLd events={upcomingEvents} />
      <Breadcrumbs items={[{ name: "Concerts & auditions", href: "/concerts" }]} />

      <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          La saison
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          Concerts & auditions de l'Académie
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-[var(--ink)]/80">
          Chaque année, les élèves de l'Académie de piano Bérénice se produisent
          devant leurs proches dans la salle d'audition. Une étape qui compte,
          dans une ambiance bienveillante.
        </p>
      </section>

      <section className="mx-auto my-12 max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bar font-serif text-3xl text-[var(--primary)]">
          Prochains rendez-vous
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {upcomingEvents.map((e) => {
            const dateObj = new Date(e.date);
            return (
              <article
                key={e.name}
                className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
              >
                <div className="border-b border-[var(--border)] bg-[var(--muted-bg)] px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                    {dateObj.toLocaleDateString("fr-FR", { weekday: "long" })}
                  </p>
                  <p className="mt-1 font-serif text-3xl text-[var(--primary)]">
                    {dateObj.getDate()}{" "}
                    {dateObj.toLocaleDateString("fr-FR", { month: "long" })}{" "}
                    {dateObj.getFullYear()}
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {e.time.replace(":", "h")}
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-[var(--primary)]">
                    {e.name}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--ink)]/80">
                    {e.description}
                  </p>
                  <p className="mt-4 text-xs text-[var(--muted)]">
                    Lieu : Académie de piano Bérénice · 59 bd de Cimiez · Nice
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[var(--muted-bg)]/60">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="heading-bar font-serif text-3xl text-[var(--primary)]">
            Saisons précédentes
          </h2>
          <ul className="mt-8 space-y-5">
            {pastEvents.map((p) => (
              <li
                key={p.year}
                className="flex items-start gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <span className="font-serif text-3xl text-[var(--accent)]">
                  {p.year}
                </span>
                <div>
                  <p className="font-serif text-lg text-[var(--primary)]">
                    {p.title}
                  </p>
                  <p className="mt-1 text-sm text-[var(--ink)]/80">
                    {p.description}
                  </p>
                  <p className="mt-2 text-xs text-[var(--muted)]">
                    {p.count} élèves
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto my-16 max-w-3xl px-4 sm:px-6 lg:px-8">
        <figure className="overflow-hidden rounded-2xl salon-frame">
          <Picture image="salleAudition" sizes="(min-width:1024px) 700px, 100vw" />
          <figcaption className="mt-3 px-1 pb-1 text-center font-serif text-sm italic text-[var(--ink)]/85">
            La salle d'audition lors d'un concert d'élèves
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto my-16 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--muted-bg)] to-[var(--surface)] p-8 sm:p-12 text-center">
          <h2 className="heading-bar mx-auto inline-block font-serif text-2xl text-[var(--primary)] sm:text-3xl">
            Devenez l'un de nos élèves
          </h2>
          <p className="mt-4 text-[var(--ink)]/80">
            Inscriptions ouvertes pour la rentrée 2026 – 2027. Vous aussi,
            participez aux auditions annuelles dès la première année.
          </p>
          <Link
            href="/inscription"
            prefetch
            className="magnetic-cta mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-medium text-[var(--primary-contrast)] transition hover:bg-[var(--primary-hover)]"
          >
            S'inscrire pour la rentrée
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
