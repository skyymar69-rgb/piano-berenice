# Académie de piano Bérénice — Consolidation Phase 1 (recherche)

> Source de vérité pour toutes les phases suivantes. Produit le 2026-04-22 à partir de sources publiques uniquement (site legacy via Wayback Machine, SIRENE via recherche-entreprises.api.gouv.fr, Facebook, PagesJaunes, Mappy, Spectable, Pappers, WebRankInfo, Superprof, recherches Google ciblées).
>
> Les informations marquées `TO_CONFIRM` nécessitent validation par Bérénice avant publication.

---

## 1. État du site actuel

Le site officiel `piano-berenice.com` est **actuellement hors ligne** : l'hébergeur Celeonet renvoie « Ce site n'a pas été trouvé sur nos serveurs » pour toutes les URLs. Tout le contenu textuel a été reconstitué depuis la Wayback Machine (dernières captures 2025-05 à 2025-08), stocké brut dans `research/raw/wb-*.html`.

**Pages legacy archivées**, à rediriger en 301 depuis le nouveau site :
- `/` → `/`
- `/professeur-piano-nice.htm` → `/professeur`
- `/cours-piano-nice.htm` → `/cours/piano`
- `/cours-solfege-nice.htm` → `/cours/solfege`
- `/eveil-musical-nice.htm` → `/cours/eveil-musical`
- `/ecole-piano-plan-acces.htm` → `/plan-acces`
- `/mentions-legales.htm` → `/mentions-legales`
- `/index.html` et `/index.htm` → `/`

**Analytics historiquement installés** (présents sur la vieille version, à ne pas remettre en place sans RGPD/consentement) :
- Google Analytics Universal : `UA-27591485-1`
- Google Analytics 4 : `G-F8BT4G28G5`

---

## 2. Informations vérifiées sur l'école

### Identité commerciale
- **Nom commercial** : Académie de piano Bérénice
- **Professeur / fondatrice** : Bérénice Lecardeur (nom utilisé commercialement)
- **Catégorie Facebook** : École d'art
- **Création de l'activité d'enseignement** : 2 novembre 1994 — **l'école a 30+ ans** (argument de confiance fort à mettre en avant)

### Coordonnées
- **Adresse** : 59 boulevard de Cimiez, 06000 Nice — mention impérative « Entrée dans l'impasse »
- **Latitude / longitude** (depuis INSEE) : 43.718445327, 7.2715064504
- **Téléphone mobile** (principal, affiché site/Facebook) : `+33 6 81 84 27 23`
- **Téléphone fixe** (PagesJaunes/Mappy) : `04 93 81 37 57` — à confirmer s'il est toujours utilisé
- **Email** : `berenice.lecardeur@gmail.com`
- **Facebook** : https://fr-fr.facebook.com/AcademieDePianoBerenice

### Transports (plan d'accès legacy)
- Bus **5** → arrêt **Prince de Galles**
- Bus **33, 40, 70** → arrêt **Victoria**
- (Réseau Lignes d'Azur — vérifier que les lignes 33/40/70 n'ont pas été renumérotées depuis)

### Horaires de passage à l'académie (contenu legacy)
- Inscriptions / renseignements : **du lundi au vendredi entre 16 h et 19 h**, hors vacances scolaires
- Été : renseignements par mail ou sur rendez-vous
- Cours : **du lundi au vendredi** sauf vacances scolaires
- PagesJaunes mentionne en plus : mercredi 10h-12h et 15h-19h30 — `TO_CONFIRM`

### Année scolaire 2025-2026 (legacy)
- Reprise inscriptions : **mercredi 3 septembre et vendredi 5 septembre 2025, 16h30-19h**
- Reprise des cours : **mardi 9 septembre 2025**
- Ces dates ne doivent pas être codées en dur — stockées dans `data/school.json > academicYear` pour que Bérénice les mette à jour chaque année depuis l'admin.

---

## 3. Profil du professeur — Bérénice Lecardeur

### Parcours pédagogique et diplômes (tels qu'affichés sur le site legacy)

**Discipline piano :**
- **Médaille d'Or de piano** — Académie de Musique Prince Rainier III de Monaco
- **Prix de perfectionnement** — Conservatoire National de Région de Nice (CNRR)
- **Ancien professeur de piano agréé de la fonction publique**, recruté sur concours national
- **Ancien professeur de piano** à l'École Départementale de Musique des Alpes-Maritimes

**Discipline éveil musical :**
- **Ancien professeur d'éveil musical** au jardin d'enfants Sainte Marthe à Nice
- **Ancien professeur d'éveil musical** à l'école maternelle et primaire Régina Coeli à Nice

### Identité civile (registre INSEE / RNE)
- Nom légal : **SOL née LE CARDEUR** — Bérénice Isabelle Anne
- Née décembre 1966 (≈59 ans)
- Elle exerce sous son **nom de naissance Lecardeur** dans le cadre commercial ; le registre INSEE la liste comme « BERENICE SOL (LE CARDEUR-SOL) ». Le nouveau site continuera d'afficher « Bérénice Lecardeur » partout en façade utilisateur. Les mentions légales afficheront les deux.

### Profil LinkedIn
Un profil LinkedIn existe : https://www.linkedin.com/in/b%C3%A9r%C3%A9nice-lecardeur-558173b1/
Contenu non scrapé (authentification requise) — à consulter en direct pour bio étendue.

---

## 4. Statut juridique (résolu via SIRENE)

### Entité professionnelle de Bérénice pour l'activité d'enseignement

| Champ | Valeur | Source |
|---|---|---|
| Raison sociale | **BERENICE SOL (LE CARDEUR-SOL)** | SIRENE |
| Forme juridique | **Entrepreneur individuel** (code INSEE 1000) | SIRENE |
| SIREN | **399 365 642** | SIRENE |
| SIRET (siège actuel, ouvert) | **39936564200038** | SIRENE |
| Code APE / NAF | **85.59B** — Autres enseignements (NAF 2025 : 85.59H) | SIRENE |
| Section NAF | P — Enseignement | SIRENE |
| Date création | **1994-11-02** | SIRENE |
| Date ouverture siège Cimiez | **2008-01-01** | SIRENE |
| Adresse siège | 59 boulevard de Cimiez, 06000 Nice | SIRENE |
| Catégorie entreprise | PME (2023), non-employeur | SIRENE |
| État administratif | Actif | SIRENE |

> ⚠️ Le brief du projet anticipait code APE **85.52Z** (Enseignement culturel). **C'est en réalité 85.59B** (Autres enseignements) — plus générique, mais parfaitement licite pour une école de piano indépendante. Le `data/school.json` doit refléter 85.59B.

### SCI propriétaire des locaux (non liée à l'activité d'enseignement)

Bérénice est aussi gérante de la **SCI ELISANTOINE** (SIREN 413 383 241), créée en 1997, qui détient le local au 59 bd de Cimiez. Les deux autres associés sont ses deux enfants (Charles-Antoine Sol, Victoria Elisa Sol). **La SCI ne doit pas apparaître sur le site public** — elle est juste le propriétaire du mur, l'activité d'enseignement n'est pas exercée sous ce véhicule.

### TVA

Non visible dans les mentions légales legacy. Probable **franchise en base de TVA** (activité non-employeur, seuils micro-BNC respectés). Afficher « TVA non applicable — article 293 B du CGI » par défaut, `TO_CONFIRM` par Bérénice.

### Directeur de la publication

Bérénice Lecardeur (nom commercial) / Bérénice Sol (nom civil) en tant qu'éditrice personne physique.

### Hébergement historique (à remplacer par Vercel)

Celeonet SARL, 55 rue Boissonade, 75014 Paris.

### Conception historique
InformaNice — 14 avenue du Puits, 06000 Nice, 06 45 68 29 41, ltauc@nerim.net. À remplacer par nos propres mentions de conception (à décider — « Site conçu par [nom] » ou rien si pas souhaité).

### Conséquences pour les mentions légales du nouveau site

Le bloc `legal` de `data/school.json` peut donc être **pré-rempli avec confiance** :

```json
{
  "raisonSociale": "Bérénice Sol (Le Cardeur-Sol)",
  "formeJuridique": "Entrepreneur individuel",
  "siren": "399365642",
  "siret": "39936564200038",
  "codeApe": "85.59B",
  "libelleApe": "Autres enseignements",
  "tvaIntracom": "TVA non applicable, art. 293 B du CGI",
  "directeurPublication": "Bérénice Lecardeur",
  "_confirmed": false
}
```

Le flag `_confirmed` reste `false` tant que Bérénice n'a pas validé l'affichage public de son nom civil (Sol née Le Cardeur) dans les mentions légales — c'est la seule info qui pourrait nécessiter discussion (cf. §7 Questions ouvertes).

---

## 5. Offres pédagogiques (contenu exploitable)

### Éveil musical (à partir de 5 ans)
- Petit groupe
- **Durée : 40 minutes**, hebdomadaire, lun-ven
- Objectifs : découvrir et aimer la musique en s'amusant — écouter, rythmer, chanter, jouer du piano dès le 1er cours
- Les enfants **choisissent eux-mêmes** les musiques qu'ils jouent ou chantent
- Pas besoin d'avoir un piano à la maison
- Inscriptions à ouvrir tôt : les places partent vite

### Éveil instrumental (complément à l'éveil musical)
- Réservé aux élèves déjà inscrits en éveil musical
- Minimum 5 ans, ou avoir fait 1 an d'éveil musical
- **Durée : 30 minutes**
- Pas de piano requis à la maison

### Cours de piano
- **Enfants** : individuel ou en binôme (à deux), horaires selon niveau et âge
- **Adolescents** : individuel ou binôme, inclut préparation à **l'épreuve piano de l'option musique du baccalauréat**
- **Adultes** : individuel uniquement, message fort du site legacy — *« N'oubliez pas que l'on peut commencer le piano à tout âge. Les méthodes ont énormément évolué. À l'heure actuelle, un adulte peut débuter le piano et trouver du plaisir dès les premiers cours. »*
- Cours lun-ven, sauf vacances scolaires

### Cours de solfège
- **Cours en groupe**
- Enfants : aide à la lecture de partition, progression plus rapide en instrument
- Adolescents : créneaux spécifiques
- Adultes : ouvert à tous — piano, guitare, batterie, chant — inscription possible **sans cours d'instrument**
- Le solfège est **obligatoire** en parallèle du piano à partir d'un certain niveau (message du site : *« ils sont fort sympathiques ! »* — ton à conserver)

### Durées / tarifs / modalités de paiement
**`TO_CONFIRM` — absents du site legacy et non trouvables publiquement.** À demander à Bérénice :
- Durée exacte de chaque cours (30 / 45 / 60 min ?)
- Tarif trimestriel, annuel, à l'unité
- Modalités : chèque, espèces, virement, prélèvement automatique ?
- CESU / chèques éducation ?
- Frais d'inscription ?
- Politique en cas d'absence ou d'annulation ?

---

## 6. Écosystème & présence en ligne

- **PagesJaunes** : fiche existante — https://www.pagesjaunes.fr/pros/07247300 — catégorie « Cours de musique, cours de chant ». Aucun avis à ce jour.
- **Mappy** : fiche existante — https://fr.mappy.com/poi/50b02c5b84ae4bef54e3b9e3 — catégorie « Leçon de musique et chant ».
- **Spectable** : fiche existante — https://www.spectable.com/cours-de-piano-nice-academie-de-piano-berenice/61215 — présente Bérénice sous le nom civil « Sol ».
- **WebRankInfo** : fiche https://www.webrankinfo.net/site/32867.htm
- **Facebook** : https://fr-fr.facebook.com/AcademieDePianoBerenice — catégorie « École d'art », publications visibles mais nécessite auth pour scraper (cf. `research/facebook-content.md`)
- **Google Business Profile** : existance non-vérifiable publiquement — `TO_CONFIRM`
- **Aucun avis client public** trouvé à ce jour sur aucune des plateformes ci-dessus. La section « Témoignages » du nouveau site devra rester en placeholder, remplie plus tard par Bérénice (ex : retours écrits de parents avec leur autorisation).

---

## 7. Questions ouvertes à clarifier avec Bérénice

Ces points ne bloquent pas le scaffold ni le développement — ils bloquent la **mise en production**. Chacun est matérialisé par un champ `TO_CONFIRM` dans `data/school.json` ou un placeholder `[À CONFIRMER : ...]` dans le contenu éditorial.

1. **Nom à afficher dans les mentions légales** : « Bérénice Lecardeur » (nom commercial) ou « Bérénice Sol née Le Cardeur » (nom civil légal) ? Recommandation : afficher le nom civil car c'est l'identité juridique de l'entrepreneur individuel, mais garder « Académie de piano Bérénice » comme nom commercial partout ailleurs.
2. **Numéro fixe 04 93 81 37 57** : toujours actif ? À afficher aussi, ou seulement le mobile ?
3. **Durées de cours** : 30 min / 45 min / 60 min — lesquelles pour quelle discipline et quel public ?
4. **Tarifs 2025-2026** : montants exacts, par trimestre / an / unité, modulations selon format.
5. **Modalités de paiement** : CESU, chèques éducation, échéancier, acompte d'inscription.
6. **Créneaux hebdomadaires réels** : grille des créneaux proposés (pour la page `/inscription/disponibilites`).
7. **Horaires de passage à l'académie** : confirmer Lun-Ven 16h-19h + éventuels créneaux mercredi.
8. **Transports** : valider que les lignes de bus (5, 33, 40, 70) n'ont pas été renumérotées par Lignes d'Azur.
9. **Photos officielles** : professeur, salle de cours, façade, élèves en cours (avec droit à l'image signés pour les mineurs). Tant qu'elles ne sont pas fournies → placeholders marqués dans le code.
10. **Bio longue du professeur** : le site legacy donne diplômes + expériences en liste, pas de texte rédigé. À réécrire ensemble pour la page `/professeur`.
11. **Année de fondation à afficher** : 1994 (SIRENE) ou 2008 (ouverture au 59 bd Cimiez) ? Recommandation : **« Depuis 1994 »** — plus fort.
12. **Activation paiement Stripe d'acompte** : feature flag `ENABLE_STRIPE_DEPOSIT` désactivé par défaut, à discuter.
13. **Email destinataire des notifications admin** : confirmer `berenice.lecardeur@gmail.com`.
14. **Google Business Profile** : existe-t-il déjà ? Si non, le créer fait partie du plan de lancement SEO local.

---

## 8. Marché & positionnement (synthèse concurrence et tarifs)

Détail dans `research/competitors.md`. Points saillants pour le positionnement :

- **Tarif moyen cours piano particulier à Nice** : 32-34 €/h (Superprof), avec étalement 10-100 €/h.
- **Plateformes à domicile** (Fasiladom, Acadomia) : 25-26 €/h après crédit d'impôt de 50 % services à la personne.
- **Professeur concertiste à Cimiez** (Frédéric, Superprof) : 40 €/h.
- **Conservatoire de Nice** : 200-600 €/an au quotient familial — barrière d'entrée et sélectivité.
- **ArtCetera (Vieux Nice)** : écosystème complet (piano, guitare, harpe, chant), tarifs non affichés publiquement, CTA « Réservez votre cours d'essai ».
- **Wiplay Music** : modèle hybride avec plateforme e-learning, pas de tarifs affichés, formulaire lead.
- **Sweet Piano** (Nice Berlioz) : mise en avant du 1er Prix du CNSMDP du professeur.

**Autres structures dans le quartier Cimiez** (voisinage direct — l'Académie est au 59) :
- Nina Weinfeld, 46 bd Cimiez — piano individuel
- L'Atelier de Musique, 82 bd Cimiez — musique populaire
- Clem Bérard, 82 bd Cimiez — piano/chant, avis Google positifs

**Positionnement différenciant à défendre sur le nouveau site** :
1. **30 ans d'ancienneté** (depuis 1994) — argument de confiance fort, aucun concurrent du quartier ne peut le revendiquer.
2. **Diplômes solides** (Médaille d'Or Monaco + Prix de perfectionnement CNR Nice + ancien professeur fonction publique) — légitimité académique.
3. **Triple offre intégrée** (éveil + piano + solfège) dans le même lieu — peu commun en privé à Nice.
4. **Solfège obligatoire** en parallèle du piano — marque une école pédagogiquement sérieuse, à assumer positivement (ne pas le cacher).
5. **Accueil tous âges** : de 5 ans à adultes — message « on peut commencer à tout âge » à conserver textuellement.
6. **Local dédié** (pas de cours à domicile) — les élèves se déplacent, environnement de travail stable.

---

## 9. Ton éditorial à adopter

Repris du site legacy, à préserver et raffiner :

- **Chaleureux mais exigeant** : *« l'on peut commencer le piano à tout âge »*, *« ils sont fort sympathiques ! »*, *« en s'amusant »* côté enfants.
- **Précis et factuel** côté pédagogique : listes de diplômes, durées exactes, conditions d'accès.
- **Tutoiement / vouvoiement** : le site legacy vouvoie systématiquement → **conserver le vouvoiement**.
- **Éviter** : superlatifs marketing (« meilleur », « leader », « révolutionnaire »), storytelling larmoyant, anglicismes (masterclass, academy, etc.).
- **Privilégier** : verbes d'action (« découvrir », « apprendre », « progresser », « jouer »), ton d'école de quartier sérieuse.

---

## 10. Médias & images

- Photos existantes sur le site legacy datent de **2017** (chemin `/photos-2017/`). Qualité basse, cadrage daté. **Ne pas les réutiliser en production.**
- Stratégie : placeholders Unsplash/Pexels libres de droits pendant la recette, puis remplacement par shooting pro commandé par Bérénice.
- Placeholders à marquer explicitement dans le code (`alt="[PLACEHOLDER] ..."`, commentaire JSX `{/* TODO remplacer par photo officielle */}`).

---

## 11. Points techniques hérités à préserver

- URLs legacy → redirections 301 obligatoires (cf. §1).
- Le site était indexé par Google (résultats trouvés) — conserver les titres/descriptions sémantiquement proches pour éviter la perte de positions SEO pendant la transition.
- GA ID historique : **ne pas remettre** sans consentement RGPD explicite ; si analytics désiré, préférer Vercel Analytics (cookieless) par défaut.

---

## 12. Sources consultées

Toutes les données brutes (HTML, JSON) sont conservées dans `research/raw/` pour audit.

- Site legacy via Wayback Machine (captures mai-août 2025)
- SIRENE — API recherche-entreprises.api.gouv.fr (2 entités trouvées : entrepreneur individuel + SCI)
- PagesJaunes — fiche `07247300`
- Mappy — POI `50b02c5b84ae4bef54e3b9e3`
- Spectable — fiche `61215`
- Pappers — fiches SCI ELISANTOINE et dirigeante
- WebRankInfo — fiche `32867`
- Facebook — fetch partiel (page publique)
- Superprof, Fasiladom, ArtCetera, Wiplay Music, Sweet Piano, Acadomia — pour étalonnage marché
- Recherches Google ciblées (10+ requêtes)
