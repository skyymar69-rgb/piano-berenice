import type { Metadata } from "next";
import Link from "next/link";
import { CourseJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { Picture } from "@/components/Picture";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";

const pianoFaqs = [
  {
    question: "À partir de quel âge peut-on prendre des cours de piano ?",
    answer:
      "Dès 5 ans via l'éveil instrumental, puis les cours de piano classiques à mesure que l'enfant mûrit. Aucun âge maximum : nous accueillons des adultes débutants.",
  },
  {
    question: "Les cours de piano sont-ils individuels ou collectifs ?",
    answer:
      "Individuels ou en binôme pour les enfants et adolescents selon le profil. Individuels pour les adultes. Le solfège, lui, se travaille en petit groupe.",
  },
  {
    question: "Préparez-vous à l'épreuve piano du bac option musique ?",
    answer:
      "Oui, avec un travail technique et interprétatif adapté au programme officiel de l'épreuve piano du baccalauréat option musique.",
  },
  {
    question: "Faut-il avoir un piano à la maison ?",
    answer:
      "Ce n'est pas obligatoire pour démarrer. Pour progresser sérieusement, un piano droit d'occasion ou un clavier électrique à toucher lourd devient recommandé.",
  },
];

export const metadata: Metadata = {
  title: "Cours de piano à Nice (enfants, ados, adultes) — Académie Bérénice",
  description:
    "Cours de piano individuels à Nice Cimiez pour enfants, adolescents et adultes. Méthode individualisée, préparation à l'épreuve piano du bac option musique. Inscriptions ouvertes pour la rentrée 2026 – 2027.",
  alternates: { canonical: "/cours/piano" },
};

export default function PianoPage() {
  return (
    <>
      <CourseJsonLd
        slug="/cours/piano"
        name="Cours de piano à Nice"
        description="Cours de piano individuels ou en binôme pour enfants, adolescents et adultes à Nice Cimiez."
        audience="enfants, adolescents, adultes"
      />
      <FaqJsonLd faqs={pianoFaqs} />
      <Breadcrumbs
        items={[
          { name: "Nos cours", href: "/cours/piano" },
          { name: "Piano", href: "/cours/piano" },
        ]}
      />
      <section className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Cours
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          Cours de piano à Nice
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--ink)]/80">
          Cours individuel ou en binôme, du lundi au vendredi — pour les
          enfants à partir de 5 ans, les adolescents et les adultes. Tous les
          niveaux sont accueillis, du premier contact avec l'instrument à la
          préparation d'un examen.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <figure className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)] sm:col-span-2">
            <div className="aspect-[4/3]">
              <Picture
                image="stockMainsPianoBois"
                priority
                sizes="(min-width:1024px) 700px, 100vw"
              />
            </div>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)]">
            <div className="aspect-[4/3] sm:aspect-auto sm:h-full">
              <Picture
                image="pianoQueueLibreDroit"
                sizes="(min-width:1024px) 350px, 100vw"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-16">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-7">
          <h2 id="enfants" className="font-serif text-2xl text-[var(--primary)]">
            Enfants
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/85">
            Les horaires sont déterminés en fonction du niveau et de l'âge de
            l'enfant. Les cours de piano sont individuels ou à deux, selon le
            profil. Le solfège, lui, est travaillé en groupe — c'est ce qui
            permet de progresser vite tout en gardant le plaisir d'apprendre.
          </p>
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-7">
          <h2 id="ados" className="font-serif text-2xl text-[var(--primary)]">
            Adolescents
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/85">
            Cours individuels ou en binôme, solfège en groupe. Nous préparons
            également les élèves à <strong>l'épreuve piano de l'option
            musique du baccalauréat</strong>, avec un travail technique et
            interprétatif adapté au programme officiel.
          </p>
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-7">
          <h2 id="adultes" className="font-serif text-2xl text-[var(--primary)]">
            Adultes
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/85">
            On peut commencer le piano à tout âge. Les méthodes actuelles
            permettent à un adulte débutant de trouver du plaisir dès les
            premiers cours. Format individuel. Le solfège, en groupe, est
            conseillé pour progresser plus rapidement — et les ambiances de
            ces cours sont très conviviales.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="font-serif text-3xl text-[var(--primary)]">
          Comment se déroule un cours ?
        </h2>
        <div className="prose-warm mt-6">
          <p>
            Les cours sont dispensés du lundi au vendredi, hors vacances
            scolaires. Chaque séance alterne écoute, technique, lecture et
            interprétation, selon l'objectif de l'élève. Nous définissons
            ensemble un programme personnalisé à chaque rentrée.
          </p>
          <p>
            Pour toute question sur les horaires ou les tarifs, vous pouvez
            passer directement à l'Académie du lundi au vendredi entre 16 h et
            19 h, nous téléphoner, ou utiliser le formulaire en ligne.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/inscription"
            className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)]"
          >
            S'inscrire pour la rentrée
          </Link>
          <Link
            href="/tarifs"
            className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
          >
            Voir les tarifs
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl text-[var(--primary)]">
          Questions fréquentes sur les cours de piano
        </h2>
        <div className="mt-5 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {pianoFaqs.map((f) => (
            <details key={f.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-medium text-[var(--primary)]">
                <span>{f.question}</span>
                <svg
                  aria-hidden
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="mt-1 shrink-0 text-[var(--accent)] transition group-open:rotate-180"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/80">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <RelatedLinks
        links={[
          {
            href: "/cours/solfege",
            title: "Cours de solfège",
            description:
              "Un complément essentiel pour progresser vite au piano, en petit groupe et dans la bonne humeur.",
          },
          {
            href: "/professeur",
            title: "Le professeur",
            description:
              "Le parcours de Bérénice Lecardeur — diplômes, expériences, philosophie pédagogique.",
          },
          {
            href: "/tarifs",
            title: "Tarifs & modalités",
            description:
              "Les formules individuelles, binôme et trimestrielles proposées.",
          },
        ]}
      />
    </>
  );
}
