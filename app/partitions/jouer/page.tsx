import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ScorePlayer } from "@/components/ScorePlayer";

export const metadata: Metadata = {
  title:
    "Coin partitions interactives — écouter et jouer Bach, Mozart, Chopin · Académie Bérénice Nice",
  description:
    "Sept partitions interactives en lecture libre — Bach, Mozart, Beethoven, Chopin, Schumann, Clementi, Satie. Écoutez la pièce au tempo de votre choix avec le curseur qui suit la portée. Open source, sans inscription, sans cookie.",
  alternates: { canonical: "/partitions/jouer" },
  openGraph: {
    title: "Coin partitions interactives — Académie Bérénice",
    description:
      "Bach, Mozart, Chopin et plus, en lecture libre avec curseur pédagogique et tempo réglable.",
    url: "/partitions/jouer",
  },
};

type Piece = {
  url: string;
  composer: string;
  title: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  period: string;
  note: string;
};

const pieces: Piece[] = [
  {
    url: "/scores/bach-menuet-g-bwv-anh-114.mxl",
    composer: "J.S. Bach",
    title: "Menuet en sol majeur — BWV Anh. 114",
    level: "Débutant",
    period: "Baroque · vers 1725",
    note: "Le grand classique du premier cycle, extrait du Petit livre d'Anna Magdalena. Polyphonie à deux voix, indépendance des mains.",
  },
  {
    url: "/scores/clementi-sonatine-op36-n1.xml",
    composer: "Muzio Clementi",
    title: "Sonatine Op. 36 n°1 — Allegro",
    level: "Débutant",
    period: "Classique · 1797",
    note: "Premier mouvement célèbre, structure de sonate en miniature : la porte d'entrée vers le répertoire classique.",
  },
  {
    url: "/scores/mozart-sonate-k545-allegro.mxl",
    composer: "W.A. Mozart",
    title: "Sonate K. 545 « Facile » — Allegro",
    level: "Intermédiaire",
    period: "Classique · 1788",
    note: "La Sonate facile n'est pas si facile — mais c'est un passage obligé. Une clarté mozartienne impeccable en do majeur.",
  },
  {
    url: "/scores/beethoven-fur-elise.mxl",
    composer: "L. v. Beethoven",
    title: "Lettre à Élise — WoO 59",
    level: "Intermédiaire",
    period: "Classique · 1810",
    note: "L'une des pièces les plus connues du répertoire mondial. Travail du legato, du chant de la main droite, de la nuance.",
  },
  {
    url: "/scores/chopin-prelude-op28-n4.mxl",
    composer: "Frédéric Chopin",
    title: "Prélude Op. 28 n°4 en mi mineur",
    level: "Intermédiaire",
    period: "Romantique · 1839",
    note: "Une miniature romantique d'une intensité poignante. Toute la sensibilité Chopin en quelques mesures.",
  },
  {
    url: "/scores/satie-gymnopedie-1.mxl",
    composer: "Erik Satie",
    title: "Gymnopédie n°1",
    level: "Intermédiaire",
    period: "Moderne · 1888",
    note: "L'atmosphère Satie : rêveuse, presque immobile. Techniquement accessible, musicalement exigeante pour la qualité du toucher.",
  },
  {
    url: "/scores/schumann-wild-horseman-op68-n8.mxl",
    composer: "Robert Schumann",
    title: "Le petit cavalier — Album pour la Jeunesse Op. 68 n°8",
    level: "Débutant",
    period: "Romantique · 1848",
    note: "Une pièce courte et entraînante de l'Album pour la Jeunesse. Travaille le détaché et la régularité rythmique.",
  },
];

export default function PartitionsJouerPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Partitions libres", href: "/partitions" },
          { name: "Coin interactif", href: "/partitions/jouer" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Coin interactif
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
          Écoutez et jouez les classiques
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-[var(--ink)]/80">
          Sept partitions du répertoire de piano, lisibles directement dans
          votre navigateur. Lancez la lecture pour entendre la pièce, ralentissez
          le tempo pour accompagner votre étude, suivez le curseur sur la portée.
          Tout est <strong>libre, ouvert, sans inscription</strong>.
        </p>
        <p className="mt-3 max-w-3xl text-sm text-[var(--ink)]/70">
          Le moteur de rendu est{" "}
          <a
            href="https://opensheetmusicdisplay.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-2 hover:text-[var(--accent)]"
          >
            OpenSheetMusicDisplay
          </a>
          , logiciel libre (BSD). Le piano synthétisé est généré localement par
          Web Audio API — aucune donnée n'est envoyée à un serveur tiers, aucun
          cookie n'est posé. Les partitions sont dans le domaine public.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {pieces.map((p) => (
            <ScorePlayer
              key={p.url}
              url={p.url}
              composer={p.composer}
              title={p.title}
              level={p.level}
              period={p.period}
              note={p.note}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[var(--accent)]/30 bg-[var(--muted-bg)]/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Bon à savoir
          </p>
          <h2 className="mt-2 font-serif text-2xl text-[var(--ink)]">
            Une étape avant le travail au piano
          </h2>
          <div className="prose-warm mt-3">
            <p>
              Ces lectures interactives sont précieuses pour <strong>repérer
              une pièce</strong> avant de l'aborder, vérifier un passage qu'on a
              du mal à entendre, ou simplement découvrir le répertoire. Mais
              elles ne remplacent ni l'instrument acoustique, ni le geste, ni
              l'oreille intérieure que l'on développe en cours.
            </p>
            <p className="text-sm text-[var(--muted)]">
              Si vous souhaitez travailler une de ces pièces avec un
              accompagnement pédagogique, parlons-en lors de votre inscription.
            </p>
          </div>
          <div className="mt-5">
            <Link
              href="/partitions"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--ink)]/85 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              ← Voir aussi les PDF téléchargeables
            </Link>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          {
            href: "/partitions",
            title: "Partitions PDF (IMSLP / MuseScore)",
            description:
              "Bibliothèque complète des partitions du domaine public, téléchargeables en PDF.",
          },
          {
            href: "/cours/piano",
            title: "Cours de piano",
            description:
              "Travailler ces œuvres avec Bérénice — méthode individualisée.",
          },
          {
            href: "/inscription",
            title: "Inscription rentrée 2026 – 2027",
            description:
              "Réserver sa place pour venir jouer ces classiques en cours.",
          },
        ]}
      />
    </>
  );
}
