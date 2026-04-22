# Analyse concurrentielle — écoles de piano à Nice

Objectif : identifier ce qui fonctionne ailleurs pour informer les choix UX/éditoriaux du nouveau site de l'Académie de piano Bérénice, et situer le positionnement tarifaire.

---

## Carte rapide du marché niçois

| Acteur | Modèle | Positionnement | Tarif public | Site |
|---|---|---|---|---|
| **Conservatoire de Nice (CRR)** | École publique | Référence académique, examens, cycles | 200-600 €/an (quotient familial) | [conservatoire-nice.org](https://www.conservatoire-nice.org/cycles/initiation-musique/) |
| **ArtCetera** (Vieux Nice) | École privée multi-instruments | Lieu design, piano/guitare/harpe/chant | Non affiché — devis | [artcetera.fr](https://www.artcetera.fr/) |
| **Wiplay Music** | Plateforme à domicile / studio | Multi-villes, profs salariés, e-learning | Non affiché — formulaire lead | [wiplaymusic.com](https://www.wiplaymusic.com/cours-de-piano-a-nice) |
| **Fasiladom** | Plateforme à domicile nationale | Crédit d'impôt 50 %, garantie 1er cours | Dès 25 €/h net | [fasiladom.fr](https://fasiladom.fr/cours-de-piano/nice/) |
| **Acadomia Musique** | Grand groupe cours particuliers | SAV, crédit d'impôt | Dès 26,40 €/h net | [acadomia.fr](https://www.acadomia.fr/cours-piano/nice-06000/) |
| **Sweet Piano** (Nice Berlioz) | Professeur concertiste | Mise en avant 1er Prix CNSMDP | Non affiché | [sweetpiano.fr](https://sweetpiano.fr/) |
| **PianoGrego** | Professeur particulier | Méthode perso, 30 ans expérience | Cours d'essai gratuit | [pianogrego.com](https://www.pianogrego.com/cours-de-piano-nice/) |
| **Bubble Art** | École multi-arts Nice | Piano/chant/langues, offre large | Non affiché | [bubble-art.fr](https://www.bubble-art.fr/) |
| **Superprof** (agrégateur) | Marketplace profs indépendants | 103 profs à Nice | Moy. 33,60 €/h (10-100 €) | [superprof.fr](https://www.superprof.fr/cours/piano/nice/) |

### Voisinage immédiat (quartier Cimiez)
- **Nina Weinfeld** — 46 bd Cimiez — piano individuel
- **L'Atelier de Musique** — 82 bd Cimiez — musique populaire
- **Clem Bérard** — 82 bd Cimiez — piano, chant, avis Google positifs
- **Frédéric (Superprof)** — concertiste Cimiez — 40 €/h, 1er cours gratuit

---

## Ce qui marche chez les concurrents (à reprendre)

### ArtCetera — le meilleur écosystème design de la place
- **Hero clair** avec CTA « Inscriptions 2025-2026 » + « Réservez votre cours d'essai » — double entrée essai / saison.
- Mise en valeur des **lieux physiques** (Studio, Palais) comme actifs de la marque — utile pour Bérénice qui a un local dédié depuis 30 ans.
- Structure de nav propre : Accueil / Professeurs / Cours / Pédagogie / Lieux.
- Présence réseaux sociaux visible mais non intrusive.
- **Point faible** : aucun tarif affiché, aucun calendrier, profs peu détaillés.

### Wiplay Music — le parcours de lead le plus abouti
- **CTA multiples** : « Demander inscription », « Être rappelé » (asynchrone, faible friction).
- **Parcours d'inscription en 4 étapes** affiché visuellement — réduit l'anxiété.
- **Profils profs détaillés** : photo, années d'expérience, styles — bâtit la confiance.
- FAQ accessible.
- **Point faible** : pas de tarifs, modèle « devis personnalisé » qui peut rebuter.

### Fasiladom — le meilleur message de réassurance financière
- *« Vous n'aurez rien à payer tant que nous ne vous aurons pas présenté un professeur adapté »*.
- *« Si votre premier cours ne vous convient pas, nous vous proposons un autre professeur, ou nous vous remboursons. »*
- Crédit d'impôt 50 % affiché dès le prix principal — prix facial divisé par 2 perçu.
- **Note** : ces arguments ne s'appliquent pas directement à Bérénice (pas de crédit d'impôt pour cours en local commercial, sauf CESU ponctuels à valider), mais l'**idée de garantie** sur le 1er cours d'essai est transposable.

### Sweet Piano — le plus fort argument d'autorité
- Tagline centrée sur le diplôme : *« professeur concertiste 1er Prix du CNSMDP »*.
- **Transposable direct** pour Bérénice : *« Médaille d'Or de l'Académie de Musique Prince Rainier III de Monaco · Prix de perfectionnement du Conservatoire National de Région de Nice »* — à mettre en hero ou juste sous le nom.

### Conservatoire de Nice — le standard institutionnel
- **Pré-inscriptions en ligne** via extranet pour l'éveil et l'initiation en avril.
- Convocation au test d'aptitude par email après inscription — modèle d'automation réutilisable.
- Cycles clairs (éveil, initiation, 1er/2e/3e cycle).
- **Point faible pour nous** : barrière d'entrée sélective (test), tarifs conditionnés au quotient familial — Bérénice peut se positionner comme **plus accessible et individualisé**.

---

## Ce qu'aucun concurrent ne fait bien (notre fenêtre d'opportunité)

1. **Afficher les tarifs publiquement** — quasi aucun concurrent privé ne le fait. Si Bérénice accepte d'afficher au moins une fourchette, c'est un signal de confiance fort.
2. **Parcours de pré-inscription structuré en ligne avec récapitulatif et numéro de suivi (APB-XXXX)** — absent chez tous les acteurs indépendants niçois.
3. **Calendrier public de l'année scolaire** (rentrée, auditions, stages) — absent partout.
4. **Bloc témoignages avec photos et prénoms d'élèves/parents** — absent chez les petits acteurs.
5. **Export ICS** des événements (rentrée, audition annuelle) — aucun ne le propose, différenciant technique à faible coût.
6. **SEO local structuré** avec JSON-LD `EducationalOrganization` + `Course` — la plupart des sites concurrents n'ont que du HTML plat.

---

## Implications UX pour notre site

1. **Hero** : slogan court + diplômes immédiatement visibles (style Sweet Piano) + double CTA « Cours d'essai » primaire / « Découvrir les cours » secondaire (style ArtCetera).
2. **Page `/tarifs`** : afficher au moins une fourchette, même si tous les détails ne sont pas figés — à négocier avec Bérénice.
3. **Parcours de pré-inscription** : inspirer de Wiplay pour la progression visible (4 étapes), mais **confirmation immédiate avec numéro APB-XXXX** (supérieur à ce qu'ils font).
4. **Page `/professeur`** : mettre une photo + une citation + les diplômes en listing clair — densité d'information supérieure à tous les concurrents locaux.
5. **Bloc « 30 ans d'exigence et de bienveillance »** sur la home — argument unique dans le quartier.
6. **Garantie cours d'essai** : « Pas de cours d'essai concluant ? On en reste là, aucun engagement » — reprise de l'angle Fasiladom, adapté.

---

## Benchmark tarif (pour ancrer la négociation)

- Plateformes à domicile net d'impôt : **25-27 €/h**
- Profs Superprof Nice (moyen) : **33 €/h**
- Professeur concertiste Cimiez : **40 €/h**
- Professeur particulier entrepriseparticulier.com : **dès 44 €/h**
- Stage intensif 4 jours Fasilapianoter : **180-225 €**

Ordre de grandeur attendu pour une école installée avec 30 ans d'expérience et diplômes forts : **entre 35 et 55 €/h** en cours individuel équivalent, généralement packagé en **forfait trimestriel** (≈ 10-12 séances). À confirmer avec Bérénice.
