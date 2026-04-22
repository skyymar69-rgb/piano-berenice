import type { Metadata } from "next";
import { EnrollmentForm } from "@/components/EnrollmentForm";

export const metadata: Metadata = {
  title: "Inscription — Cours d'essai offert — Académie de piano Bérénice",
  description:
    "Demandez votre cours d'essai à l'Académie de piano Bérénice à Nice Cimiez. Formulaire en ligne, réponse personnalisée sous 48 h ouvrées.",
  alternates: { canonical: "/inscription" },
};

export default function InscriptionPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Pré-inscription
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          Demander un cours d'essai
        </h1>
        <p className="mt-4 text-lg text-[var(--ink)]/80">
          Remplissez ce formulaire : Bérénice vous recontactera personnellement
          sous 48 h ouvrées pour convenir d'un premier rendez-vous. Aucune
          somme n'est demandée à cette étape — vous êtes libre de vous
          rétracter.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <EnrollmentForm />
      </section>
    </>
  );
}
