import type { Metadata } from "next";
import Link from "next/link";
import { school } from "@/lib/school";
import { Picture } from "@/components/Picture";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteCard } from "@/components/QuoteCard";
import { RelatedLinks } from "@/components/RelatedLinks";
import { PersonJsonLd } from "@/components/JsonLd";
import { Timeline } from "@/components/Timeline";

const journey = [
  {
    year: "Années de formation",
    title: "Académie Prince Rainier III, Monaco",
    description:
      "Médaille d'Or de piano de l'Académie de Musique Prince Rainier III de Monaco — l'institution musicale phare de la Principauté.",
  },
  {
    year: "Perfectionnement",
    title: "Conservatoire National de Région de Nice",
    description:
      "Prix de perfectionnement obtenu au CNR de Nice, qui prolonge la formation au plus haut niveau régional.",
  },
  {
    year: "Concours national",
    title: "Professeure agréée de la fonction publique",
    description:
      "Recrutement par concours national. Enseignement du piano dans le cadre public, avant l'ouverture de l'Académie.",
  },
  {
    year: "Avant 1994",
    title: "École Départementale de Musique des Alpes-Maritimes",
    description:
      "Professeure de piano au sein de l'école départementale ; expérience de l'enseignement structuré, en groupe et en individuel.",
  },
  {
    year: "Avant 1994",
    title: "Éveil musical à Sainte Marthe & Régina Coeli",
    description:
      "Professeure d'éveil musical au jardin d'enfants Sainte Marthe et à l'école Régina Coeli (Nice). Naissance d'une pédagogie pour les tout-petits.",
  },
  {
    year: "1994",
    title: "Fondation de l'Académie de piano Bérénice",
    description:
      "Ouverture au 59 boulevard de Cimiez : trois salles dédiées, un piano à queue, et le projet d'une école à taille humaine, indépendante.",
  },
  {
    year: "Aujourd'hui",
    title: "Plus de trente ans d'enseignement",
    description:
      "Bérénice continue de transmettre le piano, le solfège et l'éveil musical à une centaine d'élèves chaque année — enfants, adolescents et adultes.",
  },
];

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
          <p className="drop-cap">
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
              S'inscrire pour la rentrée
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

      <section className="bg-[var(--muted-bg)]/60">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Le parcours
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--primary)] sm:text-4xl">
            Trente ans d'enseignement, étape par étape
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--ink)]/80">
            De Monaco au boulevard de Cimiez, une trajectoire entièrement
            consacrée à l'enseignement du piano et de la musique.
          </p>
          <Timeline events={journey} />
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
            title: "Inscription rentrée 2026 – 2027",
            description:
              "Réservez votre place pour la rentrée. Réponse personnalisée sous 48 h ouvrées.",
          },
        ]}
      />
    </>
  );
}
