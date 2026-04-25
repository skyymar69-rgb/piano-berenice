import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Réponses aux questions sur les cours de piano à Nice",
  description:
    "Réponses aux questions Google sur les cours de piano à Nice : âge minimum, prix, durée, progression, méthodes. Bérénice Lecardeur, 30 ans d'enseignement.",
  alternates: { canonical: "/questions" },
};

const questions = [
  {
    question: "À quel âge peut-on commencer le piano ?",
    answer:
      "L'éveil musical commence dès 5 ans. Le piano structuré démarre généralement à 6-7 ans selon la maturité de l'enfant. Pour les adultes : il n'y a pas d'âge maximum. Nous accueillons régulièrement des élèves entre 30 et 70 ans qui débutent.",
  },
  {
    question: "Combien coûte un cours de piano à Nice ?",
    answer:
      "Les tarifs dépendent du format (individuel, binôme, groupe), de la durée (30, 45 ou 60 min) et du nombre de cours par semaine. Notre grille tarifaire est communiquée sur demande. Compter en moyenne entre 100 € et 180 € par mois pour un cours hebdomadaire individuel.",
  },
  {
    question: "Combien de temps pour savoir jouer du piano ?",
    answer:
      "Avec 20-30 minutes de pratique quotidienne, voici les jalons réalistes : 3 mois pour déchiffrer un morceau simple, 1 an pour aborder un morceau classique connu (Lettre à Élise), 2 ans pour un nocturne facile de Chopin, 5 ans pour Clair de lune de Debussy. La régularité compte plus que l'intensité.",
  },
  {
    question: "Le solfège est-il obligatoire pour apprendre le piano ?",
    answer:
      "Pas obligatoire au sens strict, mais fortement recommandé. Sans solfège, vous plafonnerez vers 6 mois de pratique. Avec solfège, vous progresserez sans limite et atteindrez l'autonomie en 1-2 ans. À l'Académie, le solfège est dispensé en petit groupe en parallèle des cours d'instrument.",
  },
  {
    question: "Faut-il un piano à la maison pour commencer ?",
    answer:
      "Pour l'éveil musical (5-7 ans), pas obligatoire la première année. Pour le piano structuré (à partir de 7 ans) et pour les adultes : oui, c'est nécessaire. Un piano numérique milieu de gamme (autour de 1000-1500 €) suffit pour démarrer.",
  },
  {
    question: "Cours individuel ou cours en groupe : que choisir ?",
    answer:
      "Pour le piano : individuel ou binôme (le toucher se travaille personnellement). Pour le solfège : groupe (l'oreille se développe par l'émulation). Pour l'éveil musical (5-7 ans) : groupe (le jeu collectif est essentiel à cet âge).",
  },
  {
    question: "Quelle est la durée d'un cours de piano ?",
    answer:
      "À l'Académie de piano Bérénice : 30 min pour l'éveil instrumental enfants, 45 min pour les enfants en cours individuel, 60 min pour les adultes. Le solfège dure également 45 min en petit groupe.",
  },
  {
    question: "Peut-on progresser sans pratiquer tous les jours ?",
    answer:
      "Difficile. La régularité est la clé. Mieux vaut 20 minutes par jour pendant 6 mois que 4 heures le dimanche. Une à deux pauses dans la semaine sont OK, mais 3-4 jours sans piano détricotent les progrès.",
  },
  {
    question: "Le piano est-il un instrument difficile ?",
    answer:
      "Pas plus que les autres. Il a l'avantage que les premières mélodies se jouent dès le premier cours (touches blanches = notes immédiates). Sa difficulté principale est la coordination des deux mains, qui s'acquiert en quelques mois.",
  },
  {
    question: "À partir de quand peut-on jouer un nocturne de Chopin ?",
    answer:
      "Pour les nocturnes faciles (op. 9 n°2, op. 27 n°2) : 2 à 3 ans de piano avec un travail régulier. Pour les nocturnes plus complexes : 4-6 ans. La qualité de l'interprétation continue à se raffiner toute la vie — Chopin n'est jamais épuisé.",
  },
  {
    question: "Comment choisir son professeur de piano à Nice ?",
    answer:
      "Critères importants : diplômes (conservatoire, médaille d'or), expérience (10 ans minimum recommandé), pédagogie adaptée à l'âge de l'élève, environnement de cours dédié (vrai piano, salle calme), témoignages d'élèves anciens.",
  },
  {
    question: "Les cours peuvent-ils m'aider pour le bac option musique ?",
    answer:
      "Oui. À l'Académie, nous accompagnons chaque année plusieurs lycéens dans la préparation de l'épreuve facultative ou de spécialité. Voir notre article dédié 'Préparer le bac option musique au piano'.",
  },
  {
    question: "Que faire en cas de stress avant l'audition annuelle ?",
    answer:
      "Préparer en amont : mémoriser plusieurs semaines à l'avance, faire des répétitions à blanc devant proches. Le jour J : respiration profonde 5 minutes avant, concentration sur la première mesure, et continuer en cas d'erreur (ne jamais s'arrêter ou revenir en arrière).",
  },
  {
    question: "Peut-on louer un piano au lieu d'acheter ?",
    answer:
      "Oui. Plusieurs magasins à Nice et dans le 06 proposent la location-vente : 50-100 €/mois pendant 1-2 ans, avec possibilité d'achat ensuite. Solution intéressante pour tester avant d'investir.",
  },
  {
    question: "Quels sont les compositeurs incontournables pour piano ?",
    answer:
      "Bach (rigueur), Mozart (clarté), Beethoven (expression), Chopin (poésie), Debussy (couleurs), Satie (épure). Voir notre article 'Les grands compositeurs pour piano' pour une exploration détaillée.",
  },
];

export default function QuestionsPage() {
  return (
    <>
      <FaqJsonLd faqs={questions} />
      <Breadcrumbs items={[{ name: "Questions fréquentes", href: "/questions" }]} />

      <section className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Vos questions
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          15 réponses claires sur le piano et le solfège à Nice
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-[var(--ink)]/80">
          Les questions que tout futur élève se pose, et les réponses
          franches d'une professeure qui enseigne depuis 30 ans.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {questions.map((q, i) => (
            <details key={q.question} className="group py-5" {...(i === 0 ? { open: true } : {})}>
              <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
                <h2 className="font-serif text-lg text-[var(--primary)] sm:text-xl">
                  {q.question}
                </h2>
                <svg
                  aria-hidden
                  width="18"
                  height="18"
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
              <p className="mt-3 text-[var(--ink)]/85">{q.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto my-20 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--muted-bg)] to-[var(--surface)] p-8 text-center sm:p-12">
          <h2 className="heading-bar mx-auto inline-block font-serif text-2xl text-[var(--primary)] sm:text-3xl">
            Une question manquante ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--ink)]/80">
            Posez votre question via notre formulaire de contact. Bérénice
            vous répond personnellement sous 48 h ouvrées.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
            >
              Poser une question
            </Link>
            <Link
              href="/inscription"
              prefetch
              className="magnetic-cta inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-medium text-[var(--primary-contrast)] transition hover:bg-[var(--primary-hover)]"
            >
              S'inscrire pour la rentrée
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
