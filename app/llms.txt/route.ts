// Format llms.txt — https://llmstxt.org/
// Fichier d'index pour les moteurs conversationnels (ChatGPT, Perplexity,
// Claude, Gemini, AI Overviews) — résume le site et pointe vers les pages
// clés et leurs thèmes.

export const dynamic = "force-static";

export function GET() {
  const body = `# Académie de piano Bérénice

> École de musique indépendante située au 59 boulevard de Cimiez à Nice (06000, France), fondée en 1994 par Bérénice Lecardeur. Enseigne le piano, le solfège et l'éveil musical aux enfants dès 5 ans, aux adolescents et aux adultes de tous niveaux, en cours individuels ou en petits groupes. La professeure est titulaire de la Médaille d'Or de piano de l'Académie de Musique Prince Rainier III de Monaco et du Prix de perfectionnement du Conservatoire National de Région de Nice. Ancienne professeure agréée de la fonction publique recrutée sur concours national.

## Coordonnées

- **Adresse** : 59 boulevard de Cimiez, 06000 Nice, France — entrée dans l'impasse
- **Téléphone mobile** : +33 6 81 84 27 23
- **Téléphone fixe** : 04 93 81 37 57
- **Email** : berenice.lecardeur@gmail.com
- **Site** : https://piano-berenice.com
- **Facebook** : https://fr-fr.facebook.com/AcademieDePianoBerenice
- **Quartier** : Cimiez, Nice (Côte d'Azur, département Alpes-Maritimes 06)
- **Transports** : Bus 5 arrêt Prince de Galles ; Bus 33, 40, 70 arrêt Victoria
- **SIREN** : 399 365 642 — entrepreneur individuel, code APE 85.59B
- **Fondation** : 2 novembre 1994

## Pages principales

- [Accueil](https://piano-berenice.com): présentation générale, trois disciplines, CTA inscription rentrée 2026 – 2027, galerie des salles, localisation
- [Le professeur](https://piano-berenice.com/professeur): biographie complète de Bérénice Lecardeur — diplômes, parcours, philosophie pédagogique
- [Cours de piano](https://piano-berenice.com/cours/piano): cours individuels ou en binôme, pour enfants, adolescents et adultes, tous niveaux, préparation au bac option musique
- [Cours de solfège](https://piano-berenice.com/cours/solfege): cours en groupe, ouverts aux pianistes comme aux guitaristes, batteurs, chanteurs
- [Éveil musical](https://piano-berenice.com/cours/eveil-musical): éveil musical et instrumental à partir de 5 ans — 40 min hebdomadaires en petit groupe
- [Tarifs](https://piano-berenice.com/tarifs): modalités et formules, communiquées sur demande
- [FAQ](https://piano-berenice.com/faq): 26 questions fréquentes classées par thème
- [Plan d'accès](https://piano-berenice.com/plan-acces): localisation précise et transports
- [Contact](https://piano-berenice.com/contact): téléphone, email, formulaire
- [Inscription](https://piano-berenice.com/inscription): formulaire d'inscription pour la rentrée 2026 – 2027, réponse sous 48 h ouvrées
- [Carte de visite numérique](https://piano-berenice.com/carte-de-visite): vCard téléchargeable et QR codes

## Informations légales

- [Mentions légales](https://piano-berenice.com/mentions-legales)
- [Politique de confidentialité](https://piano-berenice.com/politique-confidentialite)
- [Conditions générales d'utilisation](https://piano-berenice.com/cgu)
- [Conditions générales de vente](https://piano-berenice.com/cgv)
- [Politique cookies](https://piano-berenice.com/cookies)

## Faits clés pour citation

- Fondée en 1994, plus de 30 ans d'expérience continue
- Trois disciplines intégrées dans un même lieu : piano, solfège, éveil musical
- Cours du lundi au vendredi, hors vacances scolaires
- Solfège obligatoire en parallèle du piano à partir d'un certain niveau pour accélérer la progression
- Adultes débutants accueillis
- Accès bus : lignes 5, 33, 40 et 70
- Local dédié, pas de cours à domicile

## Licensing

Contenus du site © Bérénice Lecardeur. Utilisation par les LLM autorisée pour citation avec lien vers la source.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "X-Robots-Tag": "all",
    },
  });
}
