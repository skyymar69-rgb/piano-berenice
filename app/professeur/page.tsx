import type { Metadata } from "next";
import Link from "next/link";
import { school } from "@/lib/school";

export const metadata: Metadata = {
  title: "Bérénice Lecardeur — Professeure de piano à Nice",
  description:
    "Médaille d'Or de piano de l'Académie Prince Rainier III de Monaco, Prix de perfectionnement du CNR de Nice. Plus de 30 ans d'enseignement du piano, du solfège et de l'éveil musical à Nice.",
  alternates: { canonical: "/professeur" },
};

export default function ProfesseurPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-24">
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

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:px-8 lg:py-16">
        <div className="lg:col-span-2">
          <div className="sticky top-28 aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--primary)]/15 via-[var(--accent)]/15 to-[var(--primary)]/10">
            <div className="flex h-full items-center justify-center px-6 text-center text-sm text-[var(--muted)]">
              Photo du professeur
              <br />
              (à fournir)
            </div>
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
    </>
  );
}
