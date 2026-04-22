import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title:
    "Partitions libres de droit · Piano & solfège — Académie Bérénice Nice",
  description:
    "Sélection de partitions gratuites et libres de droit pour piano (tous niveaux) et solfège, recommandées par Bérénice Lecardeur. Téléchargez depuis IMSLP ou consultez les versions interactives sur MuseScore.",
  alternates: { canonical: "/partitions" },
};

type Score = {
  composer: string;
  title: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  period: string;
  duration: string;
  description: string;
  imslp?: string;
  musescore?: string;
};

const scores: Score[] = [
  {
    composer: "Johann Sebastian Bach",
    title: "Menuet en sol majeur (BWV Anh. 114)",
    level: "Débutant",
    period: "Baroque · 1725",
    duration: "≈ 1 min 30",
    description:
      "Un incontournable du premier cycle, extrait du Petit livre d'Anna Magdalena Bach. Idéal pour travailler la polyphonie à deux voix et l'indépendance des mains.",
    imslp: "https://imslp.org/wiki/Special:ReverseLookup/28497",
    musescore: "https://musescore.com/classicman/bach-minuet-in-g",
  },
  {
    composer: "Muzio Clementi",
    title: "Sonatine Op. 36 n°1",
    level: "Débutant",
    period: "Classique · 1797",
    duration: "≈ 4 min",
    description:
      "Premier mouvement célèbre, structure claire en sonate et motifs simples : la porte d'entrée idéale vers le répertoire classique après 1 à 2 ans de piano.",
    imslp: "https://imslp.org/wiki/6_Progressive_Sonatinas%2C_Op.36_(Clementi%2C_Muzio)",
    musescore: "https://musescore.com/user/28616/scores/83395",
  },
  {
    composer: "Wolfgang Amadeus Mozart",
    title: "Sonate K.545 « Facile » (1er mouvement)",
    level: "Intermédiaire",
    period: "Classique · 1788",
    duration: "≈ 4 min",
    description:
      "La « Sonate facile » n'est pas si facile — mais c'est un passage obligé. Allegro en do majeur d'une clarté mozartienne impeccable.",
    imslp: "https://imslp.org/wiki/Piano_Sonata_No.16_in_C_major%2C_K.545_(Mozart%2C_Wolfgang_Amadeus)",
    musescore: "https://musescore.com/classicman/k.-545-mozart-sonata-facile",
  },
  {
    composer: "Frédéric Chopin",
    title: "Prélude Op. 28 n°7 en la majeur",
    level: "Débutant",
    period: "Romantique · 1839",
    duration: "≈ 1 min",
    description:
      "Une miniature de 16 mesures, sublime et accessible. Un moment parfait pour aborder la sensibilité romantique dès le 2ᵉ cycle.",
    imslp: "https://imslp.org/wiki/Preludes%2C_Op.28_(Chopin%2C_Fr%C3%A9d%C3%A9ric)",
    musescore: "https://musescore.com/user/207687/scores/156021",
  },
  {
    composer: "Erik Satie",
    title: "Gymnopédie n°1",
    level: "Intermédiaire",
    period: "Moderne · 1888",
    duration: "≈ 3 min 30",
    description:
      "L'atmosphère Satie : rêveuse, presque immobile. Techniquement accessible, musicalement exigeante pour la qualité du toucher et du rubato.",
    imslp: "https://imslp.org/wiki/3_Gymnop%C3%A9dies_(Satie%2C_Erik)",
    musescore: "https://musescore.com/classicman/gymnopedie-no-1",
  },
  {
    composer: "Robert Schumann",
    title: "Album pour la Jeunesse Op. 68 (sélection)",
    level: "Débutant",
    period: "Romantique · 1848",
    duration: "≈ 2-4 min par pièce",
    description:
      "43 petites pièces pédagogiques composées pour les enfants de Schumann. Trésor inépuisable pour le premier cycle — chaque pièce travaille un aspect précis.",
    imslp: "https://imslp.org/wiki/Album_f%C3%BCr_die_Jugend%2C_Op.68_(Schumann%2C_Robert)",
    musescore: "https://musescore.com/user/9836121/scores/6030987",
  },
];

const solfegeResources = [
  {
    name: "Méthode rose (C. Van de Velde)",
    description:
      "La méthode de référence pour débuter le piano et la lecture de notes, domaine public.",
    url: "https://imslp.org/wiki/M%C3%A9thode_rose_(Van_de_Velde%2C_Ernest)",
  },
  {
    name: "Solfège des solfèges — A. Dannhauser",
    description:
      "Manuel classique utilisé dans les conservatoires, libre de droits.",
    url: "https://imslp.org/wiki/Solf%C3%A8ge_des_Solf%C3%A8ges_(Dannhauser%2C_Adolphe)",
  },
  {
    name: "Exercices de Czerny Op. 299",
    description:
      "École de la vélocité — exercices techniques pour main droite et gauche.",
    url: "https://imslp.org/wiki/School_of_Velocity%2C_Op.299_(Czerny%2C_Carl)",
  },
];

const levelColors: Record<Score["level"], string> = {
  Débutant: "bg-emerald-100 text-emerald-900 border-emerald-200",
  Intermédiaire: "bg-amber-100 text-amber-900 border-amber-200",
  Avancé: "bg-rose-100 text-rose-900 border-rose-200",
};

export default function PartitionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Partitions libres", href: "/partitions" }]} />

      <section className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Bibliothèque
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          Partitions libres de droit
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-[var(--ink)]/80">
          Une sélection de partitions <strong>gratuites et libres de droit</strong>,
          curée par Bérénice pour nos élèves et pour toute personne qui
          souhaite progresser à la maison. Les PDF sont hébergés sur{" "}
          <a
            href="https://imslp.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-2 hover:text-[var(--accent)]"
          >
            IMSLP
          </a>{" "}
          (Petrucci Music Library), les versions interactives avec audio sur{" "}
          <a
            href="https://musescore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-2 hover:text-[var(--accent)]"
          >
            MuseScore
          </a>
          .
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {scores.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-6 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${levelColors[s.level]}`}
                >
                  {s.level}
                </span>
                <span className="text-[11px] text-[var(--muted)]">
                  {s.period}
                </span>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                {s.composer}
              </p>
              <h2 className="mt-1 font-serif text-2xl text-[var(--primary)]">
                {s.title}
              </h2>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Durée {s.duration}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/80">
                {s.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.imslp && (
                  <a
                    href={s.imslp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-medium text-[var(--primary-contrast)] transition hover:bg-[var(--primary-hover)]"
                  >
                    <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                    </svg>
                    IMSLP — PDF
                  </a>
                )}
                {s.musescore && (
                  <a
                    href={s.musescore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-xs font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
                  >
                    <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12l3 3 5-6" />
                    </svg>
                    MuseScore — audio
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--muted-bg)] p-6">
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Ressources de solfège libres
          </h2>
          <ul className="mt-4 space-y-3">
            {solfegeResources.map((r) => (
              <li key={r.name}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent)]"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 text-[var(--accent)]"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-medium text-[var(--primary)]">
                      {r.name}
                    </span>
                    <span className="block text-xs text-[var(--ink)]/80">
                      {r.description}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[var(--accent)]/30 bg-[var(--muted-bg)]/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Bon à savoir
          </p>
          <h2 className="mt-2 font-serif text-2xl text-[var(--primary)]">
            Pourquoi ces deux plateformes ?
          </h2>
          <div className="prose-warm mt-3">
            <p>
              <strong>IMSLP</strong> (International Music Score Library
              Project) héberge plus d'un million de partitions dans le domaine
              public : téléchargement PDF gratuit, sans inscription, dans la
              plus pure tradition des bibliothèques musicales.
            </p>
            <p>
              <strong>MuseScore</strong> permet d'écouter la partition jouée,
              ralentir/accélérer le tempo, masquer/afficher les portées — très
              utile pour se familiariser avec une pièce avant de la travailler.
            </p>
            <p className="text-sm text-[var(--muted)]">
              Si une partition que vous cherchez n'est pas dans cette
              sélection, demandez-nous — nous vous indiquerons la meilleure
              source libre de droit.
            </p>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          {
            href: "/cours/piano",
            title: "Cours de piano",
            description:
              "Travailler ces partitions avec Bérénice — méthode individualisée.",
          },
          {
            href: "/cours/solfege",
            title: "Cours de solfège",
            description:
              "Lire, comprendre, analyser les partitions en petit groupe.",
          },
          {
            href: "/inscription",
            title: "Cours d'essai",
            description:
              "Venir jouer une de ces pièces ensemble, sans engagement.",
          },
        ]}
      />
    </>
  );
}
