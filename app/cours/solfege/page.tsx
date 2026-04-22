import type { Metadata } from "next";
import Link from "next/link";
import { CourseJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { Picture } from "@/components/Picture";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";

const solfegeFaqs = [
  {
    question: "Le solfège est-il obligatoire quand on fait du piano ?",
    answer:
      "Très fortement recommandé. Savoir lire une partition permet d'avancer deux fois plus vite à l'instrument et d'être autonome dans son travail personnel.",
  },
  {
    question: "Peut-on faire du solfège sans faire de piano ?",
    answer:
      "Oui. Les cours de solfège sont ouverts aux guitaristes, batteurs, chanteurs et à tout instrumentiste souhaitant consolider ses bases théoriques.",
  },
  {
    question: "Les cours de solfège sont-ils collectifs ?",
    answer:
      "Oui, en petits groupes. L'émulation et le travail de l'oreille sont bien plus efficaces à plusieurs qu'en face-à-face.",
  },
];

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
        slug="/cours/solfege"
        name="Cours de solfège à Nice"
        description="Cours de solfège en groupe pour enfants, adolescents et adultes à Nice Cimiez."
        audience="enfants, adolescents, adultes"
      />
      <FaqJsonLd faqs={solfegeFaqs} />
      <Breadcrumbs
        items={[
          { name: "Nos cours", href: "/cours/piano" },
          { name: "Solfège", href: "/cours/solfege" },
        ]}
      />
      <section className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
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
        <figure className="overflow-hidden rounded-3xl border border-[var(--border)] shadow-[var(--shadow)]">
          <div className="aspect-[16/9]">
            <Picture
              image="stockPartitionSolfege"
              priority
              sizes="(min-width:1024px) 1100px, 100vw"
            />
          </div>
          <figcaption className="bg-[var(--surface)] px-5 py-3 text-xs text-[var(--muted)]">
            Gros plan sur une partition — lire une partition, c'est la clé pour
            progresser rapidement à l'instrument.
          </figcaption>
        </figure>
      </section>
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)]">
            <div className="aspect-[4/3]">
              <Picture
                image="stockElevePartition"
                sizes="(min-width:1024px) 500px, 100vw"
              />
            </div>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)]">
            <div className="aspect-[4/3]">
              <Picture
                image="salleSolfege"
                sizes="(min-width:1024px) 500px, 100vw"
              />
            </div>
            <figcaption className="bg-[var(--surface)] px-4 py-3 text-xs text-[var(--muted)]">
              La salle de solfège de l'Académie, aménagée en petit groupe.
            </figcaption>
          </figure>
        </div>
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

      <RelatedLinks
        links={[
          {
            href: "/cours/piano",
            title: "Cours de piano",
            description:
              "Le solfège et le piano vont de pair — voyez comment nous articulons les deux.",
          },
          {
            href: "/cours/eveil-musical",
            title: "Éveil musical",
            description:
              "Pour les plus jeunes : la musique en s'amusant, dès 5 ans.",
          },
          {
            href: "/faq",
            title: "Foire aux questions",
            description:
              "Plus de réponses sur l'école, les inscriptions et les formats de cours.",
          },
        ]}
      />
    </>
  );
}
