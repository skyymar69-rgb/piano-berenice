import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarifs — Cours de piano, solfège et éveil musical à Nice",
  description:
    "Tarifs des cours de piano, solfège et éveil musical à l'Académie de piano Bérénice, Nice Cimiez. Nous contacter pour un devis personnalisé.",
  alternates: { canonical: "/tarifs" },
};

export default function TarifsPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Tarifs
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          Tarifs & modalités
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--ink)]/80">
          Les tarifs dépendent du cours choisi (piano, solfège, éveil musical),
          du format (individuel, binôme ou groupe) et de la durée. Nous
          proposons des formules trimestrielles ou annuelles, pour une
          planification sereine de l'année scolaire.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-2xl border border-[var(--accent)]/30 bg-[var(--muted-bg)] p-8">
          <p className="font-serif text-2xl text-[var(--primary)]">
            Tarifs 2025 – 2026 communiqués sur demande
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--ink)]/85">
            Pour obtenir la grille tarifaire à jour, précisez-nous simplement
            la discipline souhaitée, l'âge de l'élève et le format de cours
            recherché. Réponse sous 48 h ouvrées, sans engagement.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/inscription"
              className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)]"
            >
              Demander un devis
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-6 py-3 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-[var(--border)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Piano
            </p>
            <h2 className="mt-3 font-serif text-xl text-[var(--primary)]">
              Cours individuels ou en binôme
            </h2>
            <p className="mt-3 text-sm text-[var(--ink)]/80">
              Durée modulable (30, 45 ou 60 min) selon l'âge et l'objectif.
              Formule trimestrielle ou annuelle.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Solfège
            </p>
            <h2 className="mt-3 font-serif text-xl text-[var(--primary)]">
              Cours en groupe
            </h2>
            <p className="mt-3 text-sm text-[var(--ink)]/80">
              Séances hebdomadaires en petit groupe, complémentaires des cours
              d'instrument — ou indépendantes.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Éveil musical
            </p>
            <h2 className="mt-3 font-serif text-xl text-[var(--primary)]">
              Séance de 40 min
            </h2>
            <p className="mt-3 text-sm text-[var(--ink)]/80">
              En petits groupes, une fois par semaine. L'éveil instrumental
              (30 min) s'ajoute pour les élèves déjà inscrits.
            </p>
          </div>
        </div>

        <div className="prose-warm mt-12">
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Modalités de paiement
          </h2>
          <p>
            Paiements acceptés : chèque, espèces, virement. Les modalités
            précises (mensuel, trimestriel, annuel) sont définies lors de
            l'inscription. Pour toute demande particulière (CESU, chèques
            éducation, règlement fractionné), n'hésitez pas à nous en parler.
          </p>
        </div>
      </section>
    </>
  );
}
