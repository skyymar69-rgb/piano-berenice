import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cours de piano près du Mont-Boron — Académie Bérénice",
  description:
    "Cours de piano accessibles depuis le Mont-Boron : Académie Bérénice à Cimiez, à 20 minutes en voiture. Piano, solfège et éveil musical depuis 1994.",
  alternates: { canonical: "/cours-piano-mont-boron" },
};

export default function MontBoronPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Cours de piano Mont-Boron", href: "/cours-piano-mont-boron" }]} />
      <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Mont-Boron · Nice est
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          Cours de piano près du Mont-Boron
        </h1>
        <p className="drop-cap mt-5 max-w-2xl text-lg text-[var(--ink)]/80">
          Habitants du Mont-Boron : l'Académie de piano Bérénice est à 20 minutes
          en voiture par le boulevard du Mont-Boron et le boulevard de l'Observatoire.
          Une école professionnelle dans le quartier résidentiel de Cimiez,
          au 59 boulevard de Cimiez à Nice.
        </p>
      </section>

      <section className="mx-auto my-12 max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bar font-serif text-3xl text-[var(--primary)]">
          Itinéraires depuis le Mont-Boron
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">En voiture</p>
            <h3 className="mt-2 font-serif text-xl text-[var(--primary)]">20 minutes</h3>
            <p className="mt-2 text-sm text-[var(--ink)]/80">
              Boulevard du Mont-Boron → boulevard Carnot → avenue Felix Faure →
              avenue Jean-Médecin → boulevard de Cimiez. Stationnement résidentiel
              facile aux abords de l'Académie.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Transports en commun</p>
            <h3 className="mt-2 font-serif text-xl text-[var(--primary)]">35 minutes en bus</h3>
            <p className="mt-2 text-sm text-[var(--ink)]/80">
              Bus 32 ou 30 jusqu'à Massena, puis ligne 5 jusqu'à Prince de Galles.
              Solution pratique pour les ados autonomes en transports.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto my-12 max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bar font-serif text-3xl text-[var(--primary)]">
          Une vraie école, pas un cours à domicile
        </h2>
        <p className="mt-4 text-[var(--ink)]/85">
          Le Mont-Boron compte de nombreux professeurs de piano à domicile. À l'Académie,
          nous proposons une expérience différente : <strong>trois salles dédiées</strong>,
          piano à queue Yamaha pour les cours individuels, salle d'audition annuelle pour
          les concerts d'élèves, ambiance pédagogique et émulation entre élèves. C'est
          l'environnement qui fait la différence sur le long terme.
        </p>
      </section>

      <section className="mx-auto my-16 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--muted-bg)] to-[var(--surface)] p-8 sm:p-12 text-center">
          <h2 className="heading-bar mx-auto inline-block font-serif text-2xl text-[var(--primary)] sm:text-3xl">
            Inscriptions rentrée 2026 – 2027
          </h2>
          <p className="mt-4 text-[var(--ink)]/80">
            Bérénice vous recontacte sous 48 h ouvrées pour convenir d'un premier
            rendez-vous au 59 boulevard de Cimiez.
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
