import type { Metadata } from "next";
import Link from "next/link";
import { CourseJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Cours de piano à Nice (enfants, ados, adultes) — Académie Bérénice",
  description:
    "Cours de piano individuels à Nice Cimiez pour enfants, adolescents et adultes. Méthode individualisée, préparation à l'épreuve piano du bac option musique. Cours d'essai offert.",
  alternates: { canonical: "/cours/piano" },
};

export default function PianoPage() {
  return (
    <>
      <CourseJsonLd
        name="Cours de piano à Nice"
        description="Cours de piano individuels ou en binôme pour enfants, adolescents et adultes à Nice Cimiez."
        audience="enfants, adolescents, adultes"
      />
      <section className="mx-auto max-w-4xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-24">
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

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-16">
        <article className="rounded-2xl border border-[var(--border)] bg-white/60 p-7">
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

        <article className="rounded-2xl border border-[var(--border)] bg-white/60 p-7">
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

        <article className="rounded-2xl border border-[var(--border)] bg-white/60 p-7">
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
            Demander un cours d'essai
          </Link>
          <Link
            href="/tarifs"
            className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
          >
            Voir les tarifs
          </Link>
        </div>
      </section>
    </>
  );
}
