import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cours de piano près du Vieux-Nice — Académie Bérénice à Cimiez",
  description:
    "Cours de piano accessibles depuis le Vieux-Nice : Académie Bérénice à Cimiez, 15 minutes en bus depuis la place Garibaldi. Piano, solfège et éveil musical depuis 1994.",
  alternates: { canonical: "/cours-piano-vieux-nice" },
};

export default function VieuxNicePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Cours de piano près du Vieux-Nice", href: "/cours-piano-vieux-nice" }]} />
      <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Vieux-Nice · 06000
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          Cours de piano accessibles depuis le Vieux-Nice
        </h1>
        <p className="drop-cap mt-5 max-w-2xl text-lg text-[var(--ink)]/80">
          L'Académie de piano Bérénice se trouve à 15 minutes en bus depuis le
          Vieux-Nice. Une destination prisée des habitants du centre historique
          qui souhaitent apprendre le piano dans un cadre calme et professionnel,
          loin du bruit du marché et de la cohue touristique.
        </p>
      </section>

      <section className="mx-auto my-12 max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bar font-serif text-3xl text-[var(--primary)]">
          Comment venir depuis le Vieux-Nice
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">En bus</p>
            <h3 className="mt-2 font-serif text-xl text-[var(--primary)]">15 minutes via la ligne 5</h3>
            <p className="mt-2 text-sm text-[var(--ink)]/80">
              Depuis l'arrêt "Garibaldi" ou "Cathédrale", prenez la ligne 5
              direction Cimiez. Descente à "Prince de Galles", puis 2 minutes
              à pied jusqu'au 59 bd de Cimiez.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">À vélo</p>
            <h3 className="mt-2 font-serif text-xl text-[var(--primary)]">12 minutes par les ruelles</h3>
            <p className="mt-2 text-sm text-[var(--ink)]/80">
              Vélo Bleu disponible place Garibaldi. Trajet en montée modérée
              jusqu'au plateau de Cimiez. Parking vélo disponible.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto my-12 max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bar font-serif text-3xl text-[var(--primary)]">
          Pourquoi pas un cours dans le Vieux-Nice ?
        </h2>
        <p className="mt-4 text-[var(--ink)]/85">
          Le Vieux-Nice est magnifique mais peu adapté à l'enseignement musical :
          ruelles bruyantes, immeubles mitoyens, voisinage dense, faible isolation
          acoustique. À Cimiez, l'environnement résidentiel garantit le calme
          nécessaire à une pratique sereine — un avantage que tous les élèves apprécient
          dès le premier cours.
        </p>
      </section>

      <section className="mx-auto my-16 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--muted-bg)] to-[var(--surface)] p-8 sm:p-12 text-center">
          <h2 className="heading-bar mx-auto inline-block font-serif text-2xl text-[var(--primary)] sm:text-3xl">
            Inscriptions rentrée 2026 – 2027
          </h2>
          <p className="mt-4 text-[var(--ink)]/80">
            Bérénice vous recontacte sous 48 h ouvrées pour fixer un rendez-vous
            à l'Académie au 59 boulevard de Cimiez.
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
