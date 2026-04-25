import type { Metadata } from "next";
import { EnrollmentForm } from "@/components/EnrollmentForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Inscription rentrée 2026 – 2027 — Académie de piano Bérénice",
  description:
    "Inscrivez-vous pour la rentrée 2026 – 2027 à l'Académie de piano Bérénice à Nice Cimiez. Formulaire en ligne, réponse personnalisée sous 48 h ouvrées.",
  alternates: { canonical: "/inscription" },
};

export default function InscriptionPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Inscription", href: "/inscription" }]} />
      <section className="mx-auto max-w-3xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Pré-inscription · Rentrée 2026 – 2027
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          S'inscrire pour la rentrée prochaine
        </h1>
        <p className="mt-4 text-lg text-[var(--ink)]/80">
          Remplissez ce formulaire pour réserver votre place à la rentrée
          2026 – 2027 : Bérénice vous recontactera personnellement sous 48 h
          ouvrées pour convenir d'un premier rendez-vous. Aucune somme n'est
          demandée à cette étape — vous êtes libre de vous rétracter.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <EnrollmentForm />
      </section>
    </>
  );
}
