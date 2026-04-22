import type { Metadata } from "next";
import Link from "next/link";
import { school } from "@/lib/school";
import { Picture } from "@/components/Picture";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteCard } from "@/components/QuoteCard";
import { RelatedLinks } from "@/components/RelatedLinks";
import { PersonJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Bérénice Lecardeur — Professeure de piano à Nice",
  description:
    "Médaille d'Or de piano de l'Académie Prince Rainier III de Monaco, Prix de perfectionnement du CNR de Nice. Plus de 30 ans d'enseignement du piano, du solfège et de l'éveil musical à Nice.",
  alternates: { canonical: "/professeur" },
};

export default function ProfesseurPage() {
  return (
    <>
      <PersonJsonLd />
      <Breadcrumbs items={[{ name: "Le professeur", href: "/professeur" }]} />
      <section className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Le professeur
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          {school.teacher.fullName}
        </h1>
        <p className="mt-3 text-lg text-[var(--muted)]">
          {school.teacher.title}
        </p>
      </section>

      <QuoteCard
        title="Fiche professeure"
        intro="Bérénice Lecardeur est professeure de piano et de solfège à Nice (Cimiez) depuis 1994. Médaille d'Or de piano de l'Académie de Musique Prince Rainier III de Monaco et Prix de perfectionnement du Conservatoire National de Région de Nice, elle a exercé comme professeure de piano agréée de la fonction publique, recrutée sur concours national, avant de fonder son académie."
        facts={[
          { term: "Nom complet", value: school.teacher.fullName },
          { term: "Fonction", value: school.teacher.title },
          { term: "Activité depuis", value: "1994" },
          { term: "Médaille d'Or", value: "Académie Prince Rainier III, Monaco" },
          { term: "Prix de perfectionnement", value: "CNR de Nice" },
          { term: "Statut", value: "Ancienne professeure agréée de la fonction publique" },
        ]}
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:px-8 lg:py-16">
        <div className="lg:col-span-2">
          <div className="sticky top-28 space-y-5">
            <figure className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)]">
              <Picture image="bereniceNappe" priority sizes="(min-width:1024px) 400px, 100vw" />
            </figure>
            <figure className="hidden overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)] lg:block">
              <Picture image="berenicePortrait" sizes="400px" />
            </figure>
          </div>
        </div>

        <div className="prose-warm lg:col-span-3">
          <blockquote className="border-l-2 border-[var(--accent)] pl-5 font-serif text-2xl italic leading-snug text-[var(--primary)]">
            « L'on peut commencer le piano à tout âge. Les méthodes ont
            énormément évolué — aujourd'hui, un adulte peut débuter et trouver
            du plaisir dès les premiers cours. »
          </blockquote>

          <h2 className="mt-10 font-serif text-2xl text-[var(--primary)]">
            Un parcours au service de l'enseignement
          </h2>
          <p>
            Bérénice Lecardeur tient son académie au 59 boulevard de Cimiez,
            à Nice, depuis plus de trente ans. Formée dans les institutions les
            plus exigeantes de la Côte d'Azur et de la Principauté, elle a
            ensuite enseigné dans la fonction publique avant de fonder sa
            propre école pour transmettre sa passion du piano et de la musique
            à des élèves de tous âges.
          </p>
          <p>
            Sa pédagogie repose sur un principe simple : exigence technique et
            bienveillance vont de pair. Chaque élève progresse à son rythme,
            dans un environnement de travail dédié, avec un suivi personnalisé
            du premier cours jusqu'à l'audition annuelle.
          </p>

          <h2 className="mt-10 font-serif text-2xl text-[var(--primary)]">
            Diplômes & parcours — Piano
          </h2>
          <ul className="mt-4 space-y-3 text-base text-[var(--ink)]/85">
            {school.teacher.credentials.map((c) => (
              <li key={c} className="flex gap-3">
                <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-serif text-2xl text-[var(--primary)]">
            Éveil musical — expériences
          </h2>
          <ul className="mt-4 space-y-3 text-base text-[var(--ink)]/85">
            {school.teacher.eveilCredentials.map((c) => (
              <li key={c} className="flex gap-3">
                <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/inscription"
              className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)]"
            >
              Prendre un cours d'essai
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
            >
              Poser une question
            </Link>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          {
            href: "/cours/piano",
            title: "Cours de piano",
            description:
              "Cours individuels ou en binôme pour enfants, ados et adultes, avec préparation au bac option musique.",
          },
          {
            href: "/cours/solfege",
            title: "Cours de solfège",
            description:
              "Cours en groupe ouverts à tous les instrumentistes — un accélérateur pour progresser vite.",
          },
          {
            href: "/inscription",
            title: "Cours d'essai",
            description:
              "Rencontrez Bérénice lors d'un cours d'essai offert — réponse sous 48 h ouvrées.",
          },
        ]}
      />
    </>
  );
}
