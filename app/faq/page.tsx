import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqJsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes sur les cours de piano à Nice",
  description:
    "Tout savoir sur l'Académie de piano Bérénice à Nice Cimiez : âges accueillis, inscription, tarifs, modalités, rentrée 2026 – 2027, éveil musical, solfège, bac option musique.",
  alternates: { canonical: "/faq" },
};

const categories = [
  {
    title: "L'école et les cours",
    faqs: [
      {
        question: "Quels cours propose l'Académie de piano Bérénice ?",
        answer:
          "Trois disciplines : cours de piano (individuels ou en binôme), cours de solfège (en groupe) et éveil musical et instrumental à partir de 5 ans. Les trois peuvent être combinés.",
      },
      {
        question: "Depuis combien d'années l'école existe-t-elle ?",
        answer:
          "L'Académie a été fondée en novembre 1994 par Bérénice Lecardeur. Elle enseigne depuis plus de trente ans au cœur du quartier de Cimiez à Nice.",
      },
      {
        question: "Qui est la professeure ?",
        answer:
          "Bérénice Lecardeur est Médaille d'Or de piano de l'Académie de Musique Prince Rainier III de Monaco, Prix de perfectionnement du Conservatoire National de Région de Nice, ancienne professeure de piano agréée de la fonction publique (concours national).",
      },
      {
        question: "À partir de quel âge peut-on commencer ?",
        answer:
          "Dès 5 ans pour l'éveil musical et l'éveil instrumental. Les cours de piano démarrent ensuite selon la maturité de l'enfant. Il n'y a pas d'âge maximum : nous accueillons des adultes débutants comme avancés.",
      },
    ],
  },
  {
    title: "Inscription rentrée 2026 – 2027",
    faqs: [
      {
        question: "Comment s'inscrire pour la rentrée prochaine ?",
        answer:
          "Remplissez le formulaire en ligne sur la page inscription. Bérénice vous recontacte personnellement sous 48 heures ouvrées pour convenir d'un rendez-vous et finaliser l'inscription pour la saison 2026 – 2027.",
      },
      {
        question: "Quand ont lieu les permanences d'inscription ?",
        answer:
          "Les inscriptions ouvrent début septembre. Pour la rentrée 2026 – 2027, les permanences ont lieu le mercredi 2 septembre et le vendredi 4 septembre 2026 de 16h30 à 19h. En dehors de ces dates, prenez rendez-vous par mail ou téléphone.",
      },
      {
        question: "Quand est la reprise des cours ?",
        answer:
          "La reprise des cours est prévue le mardi 8 septembre 2026 pour l'année 2026 – 2027.",
      },
      {
        question: "Puis-je m'inscrire en cours d'année ?",
        answer:
          "Oui, selon les places disponibles. Contactez-nous pour connaître les créneaux encore ouverts dans la discipline visée.",
      },
    ],
  },
  {
    title: "Piano",
    faqs: [
      {
        question: "Faut-il avoir un piano à la maison pour commencer ?",
        answer:
          "Pour l'éveil musical et la première année, ce n'est pas obligatoire. Pour progresser au-delà, un instrument à la maison devient très utile — un clavier électrique à toucher lourd peut convenir au début.",
      },
      {
        question: "Peut-on commencer le piano adulte ?",
        answer:
          "Absolument. On peut commencer le piano à tout âge. Les méthodes actuelles permettent à un adulte débutant de trouver du plaisir dès les premiers cours. Les cours adultes sont individuels.",
      },
      {
        question: "Préparez-vous à l'épreuve piano du bac option musique ?",
        answer:
          "Oui, nous accompagnons les lycéens qui présentent l'option facultative ou obligatoire musique au baccalauréat, avec un travail technique et interprétatif adapté au programme officiel.",
      },
    ],
  },
  {
    title: "Solfège",
    faqs: [
      {
        question: "Le solfège est-il obligatoire ?",
        answer:
          "Il est fortement recommandé en parallèle du piano. Le solfège permet de lire une partition de manière autonome, et accélère nettement la progression à l'instrument.",
      },
      {
        question: "Peut-on suivre uniquement les cours de solfège ?",
        answer:
          "Oui. Les cours de solfège sont ouverts aux pianistes mais aussi aux guitaristes, batteurs, chanteurs et tout instrumentiste qui souhaite consolider ses bases théoriques.",
      },
      {
        question: "Les cours de solfège sont-ils individuels ou collectifs ?",
        answer:
          "Collectifs, en petits groupes. L'émulation et le travail de l'oreille sont plus efficaces en groupe qu'en face-à-face.",
      },
    ],
  },
  {
    title: "Éveil musical",
    faqs: [
      {
        question: "Qu'est-ce que l'éveil musical ?",
        answer:
          "L'éveil musical permet aux enfants de 5 à 7 ans de découvrir la musique en jouant, chantant, écoutant et rythmant. Ils jouent du piano dès le premier cours et choisissent eux-mêmes les musiques qu'ils veulent explorer. Les cours durent 40 minutes en petit groupe.",
      },
      {
        question: "Et l'éveil instrumental ?",
        answer:
          "Il complète l'éveil musical pour les élèves déjà inscrits ou ayant déjà fait une année d'éveil musical. Cours de 30 minutes, pas besoin d'avoir un piano à la maison à la rentrée.",
      },
    ],
  },
  {
    title: "Tarifs et paiement",
    faqs: [
      {
        question: "Quels sont les tarifs ?",
        answer:
          "Les tarifs dépendent du cours (piano, solfège, éveil), du format (individuel, binôme ou groupe) et de la durée. La grille tarifaire à jour est communiquée sur simple demande via le formulaire de contact.",
      },
      {
        question: "Quelles sont les modalités de paiement acceptées ?",
        answer:
          "Chèque, espèces et virement bancaire. Des modalités fractionnées (trimestrielles) sont possibles. Pour toute demande particulière (CESU, chèques éducation), parlons-en ensemble.",
      },
      {
        question: "Y a-t-il des frais d'inscription ?",
        answer:
          "Les conditions d'inscription précises sont remises lors de la signature du contrat d'inscription. Aucun paiement n'est demandé avant la rencontre avec Bérénice.",
      },
    ],
  },
  {
    title: "Accès et pratique",
    faqs: [
      {
        question: "Comment venir à l'Académie ?",
        answer:
          "L'Académie se trouve au 59 boulevard de Cimiez, 06000 Nice, entrée dans l'impasse. Accès en bus : ligne 5 (arrêt Prince de Galles), lignes 33, 40 et 70 (arrêt Victoria). Parking dans le quartier.",
      },
      {
        question: "À qui s'adressent les cours : enfants ou adultes ?",
        answer:
          "Aux deux. Enfants dès 5 ans, adolescents (y compris préparation bac), adultes débutants ou confirmés. Chaque cursus est adapté à l'âge et au niveau.",
      },
      {
        question: "Les cours ont-ils lieu pendant les vacances scolaires ?",
        answer:
          "Non, les cours suivent le calendrier scolaire. Les vacances sont des temps de pause — sauf rattrapages exceptionnels sur accord.",
      },
    ],
  },
];

const allFaqs = categories.flatMap((c) => c.faqs);

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd faqs={allFaqs} />
      <Breadcrumbs items={[{ name: "FAQ", href: "/faq" }]} />
      <section className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Questions fréquentes
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          Tout ce que vous voulez savoir
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--ink)]/80">
          Des réponses claires aux questions que l'on nous pose souvent. Si
          vous ne trouvez pas la vôtre, écrivez-nous : nous répondons sous
          48 h ouvrées.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {categories.map((cat) => (
          <div key={cat.title} className="mb-10">
            <h2 className="font-serif text-2xl text-[var(--primary)]">
              {cat.title}
            </h2>
            <div className="mt-5 divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {cat.faqs.map((f) => (
                <details key={f.question} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-1 font-medium text-[var(--primary)]">
                    <span>{f.question}</span>
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
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink)]/80">
                    {f.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      <RelatedLinks
        links={[
          {
            href: "/inscription",
            title: "Inscription rentrée 2026 – 2027",
            description:
              "S'inscrire en ligne pour la prochaine rentrée. Réponse personnalisée sous 48 h.",
          },
          {
            href: "/tarifs",
            title: "Tarifs & modalités",
            description:
              "Les formules proposées et les modalités de paiement.",
          },
          {
            href: "/contact",
            title: "Nous contacter",
            description:
              "Par téléphone, email ou formulaire — nous sommes à votre écoute.",
          },
        ]}
      />
    </>
  );
}
