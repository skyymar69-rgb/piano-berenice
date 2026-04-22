import type { Metadata } from "next";
import Link from "next/link";
import { CourseJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { Picture } from "@/components/Picture";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";

const eveilFaqs = [
  {
    question: "À partir de quel âge l'éveil musical ?",
    answer:
      "Dès 5 ans. Les jeunes enfants jouent du piano dès le premier cours et choisissent eux-mêmes les musiques qu'ils veulent explorer.",
  },
  {
    question: "Combien de temps dure un cours d'éveil musical ?",
    answer:
      "40 minutes hebdomadaires, en petit groupe, du lundi au vendredi hors vacances scolaires.",
  },
  {
    question: "Faut-il un piano à la maison pour inscrire mon enfant ?",
    answer:
      "Non, ce n'est pas nécessaire à la rentrée. L'éveil instrumental permet de découvrir le piano à l'école d'abord.",
  },
];

export const metadata: Metadata = {
  title: "Éveil musical et instrumental à Nice — dès 5 ans",
  description:
    "Éveil musical et instrumental à partir de 5 ans à Nice Cimiez. Petits groupes de 40 min, piano dès le premier cours, méthode ludique et adaptée à l'âge.",
  alternates: { canonical: "/cours/eveil-musical" },
};

export default function EveilPage() {
  return (
    <>
      <CourseJsonLd
        slug="/cours/eveil-musical"
        name="Éveil musical et instrumental à Nice"
        description="Éveil musical et instrumental pour enfants à partir de 5 ans à Nice Cimiez."
        audience="enfants"
      />
      <FaqJsonLd faqs={eveilFaqs} />
      <Breadcrumbs
        items={[
          { name: "Nos cours", href: "/cours/piano" },
          { name: "Éveil musical", href: "/cours/eveil-musical" },
        ]}
      />
      <section className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Cours
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          Éveil musical et instrumental
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--ink)]/80">
          Le but premier de l'éveil musical : permettre aux enfants de{" "}
          <strong>découvrir et d'aimer la musique en s'amusant</strong>. Ils
          apprennent à écouter, rythmer, chanter et jouer du piano avec une
          méthode ludique adaptée à leur âge.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <figure className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)] sm:col-span-2">
            <div className="aspect-[4/3]">
              <Picture
                image="salleAudition"
                priority
                sizes="(min-width:1024px) 700px, 100vw"
              />
            </div>
            <figcaption className="bg-[var(--surface)] px-4 py-3 text-xs text-[var(--muted)]">
              La salle d'éveil musical, avec piano à queue dédié aux petits.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)]">
            <div className="aspect-[3/4] sm:aspect-auto sm:h-full">
              <Picture
                image="stockElevePartition"
                sizes="(min-width:1024px) 350px, 100vw"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-7">
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Éveil musical — dès 5 ans
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-[var(--ink)]/85">
            <li className="flex gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>
                Les jeunes enfants jouent du piano dès le{" "}
                <strong>premier cours</strong>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>
                Ils choisissent <strong>eux-mêmes</strong> les musiques et
                chansons qu'ils vont jouer.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>Petits groupes, pour laisser à chacun sa place.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>Cours hebdomadaires de 40 minutes, lundi au vendredi.</span>
            </li>
          </ul>
        </article>

        <article
          id="eveil-instrumental"
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-7"
        >
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Éveil instrumental
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--ink)]/85">
            Complément de l'éveil musical, réservé aux élèves déjà inscrits —
            ou ayant déjà fait une année d'éveil musical, à partir de 5 ans.
          </p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--ink)]/85">
            <li className="flex gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>Cours de 30 minutes, au piano.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>
                <strong>Pas besoin</strong> d'avoir un piano à la maison à la
                rentrée.
              </span>
            </li>
          </ul>
        </article>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-2xl border border-[var(--accent)]/30 bg-[var(--muted-bg)] p-6">
          <p className="text-sm leading-relaxed text-[var(--ink)]/85">
            <strong>Conseil :</strong> les places d'éveil musical pour les
            nouveaux élèves partent vite. Passez à l'Académie dès l'ouverture
            des inscriptions, ou prenez rendez-vous en ligne.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/inscription"
            className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)]"
          >
            Inscrire mon enfant
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
          >
            Poser une question
          </Link>
        </div>
      </section>

      <RelatedLinks
        links={[
          {
            href: "/cours/piano",
            title: "Cours de piano",
            description:
              "Quand l'enfant est prêt, le piano prend le relais — dans la même école, avec la même professeure.",
          },
          {
            href: "/cours/solfege",
            title: "Cours de solfège",
            description:
              "Pour lire et comprendre la musique, en petit groupe dès que l'enfant sait lire.",
          },
          {
            href: "/plan-acces",
            title: "Plan d'accès",
            description:
              "Repérer l'Académie avant la rentrée — 59 bd de Cimiez, entrée dans l'impasse.",
          },
        ]}
      />
    </>
  );
}
