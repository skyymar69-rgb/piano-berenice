import type { Metadata } from "next";
import Link from "next/link";
import { CourseJsonLd } from "@/components/JsonLd";
import { Picture } from "@/components/Picture";

export const metadata: Metadata = {
  title: "Cours de solfège à Nice — Académie de piano Bérénice",
  description:
    "Cours de solfège en groupe à Nice Cimiez. Ouvert aux pianistes, guitaristes, chanteurs, batteurs. Enfants, adolescents et adultes, tous niveaux.",
  alternates: { canonical: "/cours/solfege" },
};

export default function SolfegePage() {
  return (
    <>
      <CourseJsonLd
        name="Cours de solfège à Nice"
        description="Cours de solfège en groupe pour enfants, adolescents et adultes à Nice Cimiez."
        audience="enfants, adolescents, adultes"
      />
      <section className="mx-auto max-w-4xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Cours
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          Cours de solfège à Nice
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--ink)]/80">
          Le solfège permet de lire une partition et d'entendre la musique
          autrement. Il accélère nettement la progression sur n'importe quel
          instrument. Nos cours sont <strong>en groupe</strong>, ce qui rend
          l'apprentissage vivant et stimulant.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <figure className="aspect-[16/9] overflow-hidden rounded-3xl border border-[var(--border)] shadow-[var(--shadow)]">
          <Picture
            image="salleSolfege"
            priority
            sizes="(min-width:1024px) 1100px, 100vw"
          />
        </figure>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-16">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-7">
          <h2 className="font-serif text-2xl text-[var(--primary)]">Enfants</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/85">
            Le solfège aide les enfants à progresser beaucoup plus vite en
            instrument. Ils apprennent à lire une partition de façon ludique,
            en petit groupe.
          </p>
        </article>
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-7">
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Adolescents
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/85">
            Des créneaux spécifiques sont proposés aux adolescents, adaptés à
            leur rythme scolaire. Contactez-nous pour connaître les horaires
            actuellement ouverts.
          </p>
        </article>
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-7">
          <h2 id="adultes" className="font-serif text-2xl text-[var(--primary)]">
            Adultes
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/85">
            Toute personne peut s'inscrire au solfège <strong>sans être
            inscrite en piano</strong>. Que vous jouiez de la guitare, de la
            batterie, ou que vous chantiez, le solfège vous fera progresser
            plus vite.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/inscription"
            className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)]"
          >
            Demander un cours d'essai
          </Link>
          <Link
            href="/cours/piano"
            className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
          >
            Découvrir le piano →
          </Link>
        </div>
      </section>
    </>
  );
}
