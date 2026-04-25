import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Glossaire musical — vocabulaire du piano et du solfège",
  description:
    "Glossaire musical complet : 30 termes essentiels du piano, du solfège et de la musique classique. Définitions claires d'une professeure diplômée à Nice.",
  alternates: { canonical: "/glossaire" },
};

type Term = {
  term: string;
  category: string;
  definition: string;
  related?: string[];
};

const terms: Term[] = [
  { term: "Accord", category: "Harmonie", definition: "Ensemble d'au moins trois notes jouées simultanément. Les accords forment l'harmonie d'un morceau.", related: ["Harmonie", "Tonique"] },
  { term: "Andante", category: "Tempo", definition: "Indication de tempo modéré, équivalente à un pas tranquille (environ 76-108 BPM).", related: ["Allegro", "Largo"] },
  { term: "Allegro", category: "Tempo", definition: "Tempo rapide et joyeux (environ 120-156 BPM). Le tempo le plus courant des sonates classiques." },
  { term: "Arpège", category: "Technique", definition: "Notes d'un accord jouées successivement plutôt que simultanément. Apparaît dans presque tous les morceaux romantiques.", related: ["Accord"] },
  { term: "Articulation", category: "Expression", definition: "Manière dont les notes sont liées ou détachées (legato, staccato, portato).", related: ["Legato", "Staccato"] },
  { term: "Bécarre", category: "Notation", definition: "Symbole (♮) qui annule un dièse ou un bémol précédemment posé sur une note.", related: ["Dièse", "Bémol"] },
  { term: "Bémol", category: "Notation", definition: "Symbole (♭) qui abaisse une note d'un demi-ton chromatique.", related: ["Dièse", "Altération"] },
  { term: "Cadence", category: "Harmonie", definition: "Enchaînement d'accords qui termine ou ponctue une phrase musicale (cadence parfaite, plagale, rompue, demi-cadence)." },
  { term: "Clé de sol", category: "Notation", definition: "Symbole placé en début de portée qui fixe la 2e ligne comme étant la note sol. Utilisée pour la main droite au piano.", related: ["Clé de fa", "Portée"] },
  { term: "Clé de fa", category: "Notation", definition: "Symbole placé en début de portée qui fixe la 4e ligne comme étant la note fa. Utilisée pour la main gauche au piano.", related: ["Clé de sol"] },
  { term: "Croche", category: "Rythme", definition: "Note d'une durée d'un demi-temps. Reconnaissable à sa hampe terminée par un crochet ou reliée à une autre croche par un trait.", related: ["Noire", "Double-croche"] },
  { term: "Demi-ton", category: "Théorie", definition: "Plus petit intervalle de la musique occidentale tonale. Sur le clavier, c'est l'écart entre deux touches adjacentes (blanche-noire ou blanche-blanche du Mi-Fa et Si-Do)." },
  { term: "Dièse", category: "Notation", definition: "Symbole (♯) qui élève une note d'un demi-ton chromatique.", related: ["Bémol"] },
  { term: "Forte", category: "Nuance", definition: "Indication de jouer fort. Notation : f. Variantes : ff (fortissimo), fff (fortississimo).", related: ["Piano (nuance)"] },
  { term: "Fugue", category: "Forme", definition: "Forme musicale polyphonique structurée : un thème (sujet) est exposé puis imité dans plusieurs voix successives. Bach en est le maître absolu." },
  { term: "Gamme", category: "Théorie", definition: "Suite ordonnée de notes dans une tonalité donnée. La gamme majeure de do : do-ré-mi-fa-sol-la-si-do." },
  { term: "Harmonie", category: "Théorie", definition: "Science qui étudie l'enchaînement et la combinaison des accords. Discipline centrale du solfège supérieur.", related: ["Accord", "Cadence"] },
  { term: "Legato", category: "Articulation", definition: "Articulation liée, sans aucune interruption entre les notes. Le contraire du staccato.", related: ["Staccato"] },
  { term: "Mesure", category: "Rythme", definition: "Division périodique du temps musical. Chaque mesure est délimitée par des barres verticales sur la portée." },
  { term: "Modulation", category: "Harmonie", definition: "Changement de tonalité au cours d'un morceau. Beethoven et Schubert sont maîtres dans l'art de la modulation expressive." },
  { term: "Noire", category: "Rythme", definition: "Note d'une durée d'un temps. Référence rythmique dans la mesure 4/4. Notation : hampe pleine.", related: ["Croche", "Blanche"] },
  { term: "Octave", category: "Théorie", definition: "Intervalle entre deux notes de même nom (do-do, sol-sol). Le piano couvre 7 octaves environ." },
  { term: "Pédale forte", category: "Technique", definition: "Pédale la plus à droite du piano, qui prolonge la résonance des cordes en levant les étouffoirs. Indispensable au répertoire romantique.", related: ["Una corda"] },
  { term: "Piano (nuance)", category: "Nuance", definition: "Indication de jouer doucement. Notation : p. Variantes : pp (pianissimo), ppp.", related: ["Forte"] },
  { term: "Portée", category: "Notation", definition: "Ensemble de cinq lignes parallèles sur lesquelles s'écrivent les notes. Le piano utilise deux portées (clés de sol et de fa).", related: ["Clé de sol", "Clé de fa"] },
  { term: "Rythme", category: "Rythme", definition: "Organisation des durées dans le temps musical. Le rythme et la mélodie sont les deux composantes essentielles d'une œuvre." },
  { term: "Solfège", category: "Théorie", definition: "Discipline qui apprend la lecture, l'écriture et l'analyse de la musique. Vocabulaire venu de Guido d'Arezzo (XIe siècle)." },
  { term: "Staccato", category: "Articulation", definition: "Articulation détachée, courte. Notation : point au-dessus ou en dessous de la note.", related: ["Legato"] },
  { term: "Tonique", category: "Harmonie", definition: "Première note d'une gamme, qui donne son nom à la tonalité. En do majeur, la tonique est do.", related: ["Gamme"] },
  { term: "Una corda", category: "Technique", definition: "Pédale de gauche du piano à queue qui décale légèrement le mécanisme et adoucit le son. Utile en pianissimo expressif.", related: ["Pédale forte"] },
];

const categories = Array.from(new Set(terms.map((t) => t.category))).sort();

export default function GlossairePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Glossaire", href: "/glossaire" }]} />
      <section className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Glossaire musical
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          Le vocabulaire essentiel du pianiste
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-[var(--ink)]/80">
          Trente termes que vous croiserez dans toute partition,
          tout cours et toute écoute musicale. Définitions claires
          rédigées par Bérénice Lecardeur, professeure diplômée à Nice.
        </p>

        {/* Index alphabétique */}
        <nav aria-label="Navigation glossaire" className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Catégories
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {categories.map((c) => (
              <li key={c}>
                <a
                  href={`#cat-${c.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section className="mx-auto mt-14 max-w-4xl px-4 sm:px-6 lg:px-8">
        {categories.map((c) => {
          const list = terms.filter((t) => t.category === c).sort((a, b) => a.term.localeCompare(b.term, "fr"));
          return (
            <div
              key={c}
              id={`cat-${c.toLowerCase().replace(/\s+/g, "-")}`}
              className="mb-12 scroll-mt-28"
            >
              <h2 className="heading-bar font-serif text-2xl text-[var(--primary)] sm:text-3xl">
                {c}
              </h2>
              <dl className="mt-6 divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {list.map((t) => (
                  <div
                    key={t.term}
                    id={`term-${t.term.toLowerCase().replace(/\s+/g, "-")}`}
                    className="grid gap-4 py-5 sm:grid-cols-[160px,1fr]"
                  >
                    <dt className="font-serif text-lg text-[var(--primary)]">
                      {t.term}
                    </dt>
                    <dd className="text-[var(--ink)]/85">
                      {t.definition}
                      {t.related && t.related.length > 0 && (
                        <p className="mt-2 text-xs text-[var(--muted)]">
                          Voir aussi :{" "}
                          {t.related.map((r, i) => (
                            <span key={r}>
                              {i > 0 && ", "}
                              <a
                                href={`#term-${r.toLowerCase().replace(/\s+/g, "-")}`}
                                className="smart-link font-medium text-[var(--primary)]"
                              >
                                {r}
                              </a>
                            </span>
                          ))}
                        </p>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          );
        })}
      </section>

      <section className="mx-auto my-20 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--muted-bg)] to-[var(--surface)] p-8 text-center sm:p-12">
          <h2 className="heading-bar mx-auto inline-block font-serif text-2xl text-[var(--primary)] sm:text-3xl">
            Du vocabulaire à la pratique
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--ink)]/80">
            Connaître les termes, c'est bien. Les jouer au piano, c'est mieux.
            Inscriptions ouvertes pour la rentrée 2026 – 2027.
          </p>
          <Link
            href="/inscription"
            prefetch
            className="magnetic-cta mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-medium text-[var(--primary-contrast)] transition hover:bg-[var(--primary-hover)]"
          >
            S'inscrire pour la rentrée
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
