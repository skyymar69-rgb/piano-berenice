# SEO — mots-clés cibles & plan de positionnement local

Zone géographique : **Nice (06)**, sous-ancre forte **Cimiez**. Source de vérité pour toutes les décisions `generateMetadata`, `keywords`, JSON-LD, titres H1/H2, nommage d'URL.

Les volumes et la concurrence sont des estimations qualitatives (low / medium / high) dérivées de la densité de résultats SERP et des suggestions Google, pas de chiffres exacts sans Ahrefs/SEMrush (non consultés dans cette phase).

---

## Requêtes prioritaires (tier 1)

Ces requêtes doivent correspondre à des pages dédiées, avec `<h1>` et `<title>` explicites.

| # | Requête | Intention | Page cible | Volume estimé | Concurrence |
|---|---|---|---|---|---|
| 1 | cours de piano Nice | Transactionnelle | `/cours/piano` | **Élevé** | **Forte** |
| 2 | école de piano Nice | Transactionnelle | `/` | Élevé | Forte |
| 3 | professeur de piano Nice | Transactionnelle | `/professeur` | Élevé | Forte |
| 4 | cours de solfège Nice | Transactionnelle | `/cours/solfege` | Moyen | Moyenne |
| 5 | éveil musical Nice | Transactionnelle | `/cours/eveil-musical` | Moyen | Moyenne |
| 6 | cours de piano Cimiez | Transactionnelle, localisée | `/` + `/plan-acces` | Faible | **Faible** — gros potentiel |
| 7 | académie de piano Nice | Navigational/brand | `/` | Faible | Faible |
| 8 | cours piano enfant Nice | Transactionnelle, segmentée | `/cours/piano` (ancre `#enfants`) | Moyen | Moyenne |
| 9 | cours piano adulte Nice | Transactionnelle, segmentée | `/cours/piano#adultes` | Moyen | Moyenne |
| 10 | cours piano débutant Nice | Transactionnelle, segmentée | `/cours/piano` | Moyen | Moyenne |

**Opportunité claire** : les requêtes mentionnant **« Cimiez »** sont peu concurrencées et hautement qualifiées. À injecter systématiquement dans les meta descriptions et H2 secondaires.

---

## Requêtes tier 2 (long tail, moins compétitives, haute intention)

| Requête | Page cible | Note |
|---|---|---|
| cours de piano enfant Nice 06 | `/cours/piano` | Conserver « 06 » dans OG description |
| cours piano ado Nice bac option musique | `/cours/piano` | Argument préparation épreuve piano bac — unique dans l'offre |
| cours de solfège adulte Nice | `/cours/solfege#adultes` | |
| cours solfège guitare Nice | `/cours/solfege` | Le solfège de Bérénice est ouvert aux non-pianistes |
| éveil musical 5 ans Nice | `/cours/eveil-musical` | Tranche d'âge précise |
| éveil instrumental piano Nice | `/cours/eveil-musical#eveil-instrumental` | Sous-offre spécifique |
| école de musique Cimiez | `/` | Requête de quartier |
| piano Nice arrêt Prince de Galles | `/plan-acces` | Micro-local transport |
| inscription piano Nice rentrée | `/inscription` | Saisonnier (fort volume août-septembre) |
| cours de piano essai gratuit Nice | `/inscription` | Forte intention d'achat |

---

## Requêtes brand / navigationnelles (à défendre)

| Requête | Page cible |
|---|---|
| académie de piano Bérénice | `/` |
| Bérénice Lecardeur piano | `/professeur` |
| piano-berenice.com | `/` |
| Bérénice Lecardeur Nice | `/professeur` |

Ces requêtes doivent trivialement ranker en #1. Le site legacy est actuellement hors ligne → on perd déjà du trafic brand. **Urgence technique** : redirections 301 dès la mise en prod pour rattraper les liens entrants existants (PagesJaunes, Mappy, Spectable, WebRankInfo, Facebook).

---

## Intégration concrète dans le site

### Title par page (balise `<title>` via `generateMetadata`)

| Page | `<title>` proposé (≤ 60 caractères) |
|---|---|
| `/` | Académie de piano Bérénice · Cours de piano à Nice Cimiez |
| `/professeur` | Bérénice Lecardeur — Professeure de piano à Nice |
| `/cours/piano` | Cours de piano à Nice (enfants, ados, adultes) · Académie Bérénice |
| `/cours/solfege` | Cours de solfège à Nice · Académie de piano Bérénice |
| `/cours/eveil-musical` | Éveil musical et instrumental dès 5 ans à Nice |
| `/tarifs` | Tarifs cours de piano, solfège, éveil musical · Nice |
| `/plan-acces` | Plan d'accès — 59 bd de Cimiez, Nice · Académie Bérénice |
| `/contact` | Contact · Académie de piano Bérénice — Nice Cimiez |
| `/inscription` | Demande d'inscription · Cours d'essai offert — Nice |

### Meta descriptions (≤ 155 caractères)

- `/` : *« Depuis 1994, l'Académie de piano Bérénice enseigne le piano, le solfège et l'éveil musical à Nice (Cimiez). Cours d'essai offert. »*
- `/cours/piano` : *« Cours de piano à Nice pour enfants, adolescents et adultes. Méthode individualisée, préparation au bac option musique. Cours d'essai offert. »*
- `/cours/solfege` : *« Cours de solfège en groupe à Nice pour pianistes, guitaristes, chanteurs. Enfants, adolescents et adultes, tous niveaux. »*
- `/cours/eveil-musical` : *« Éveil musical et instrumental à partir de 5 ans à Nice Cimiez. Petits groupes, 40 min, piano dès le premier cours. »*

### Mots-clés à utiliser dans `SchoolConfig.seo.keywords`

```json
[
  "cours de piano Nice",
  "école de piano Nice",
  "professeur de piano Nice",
  "cours de piano Cimiez",
  "cours de solfège Nice",
  "éveil musical Nice",
  "éveil instrumental Nice",
  "cours piano enfant Nice",
  "cours piano adulte Nice",
  "cours piano débutant Nice",
  "académie de piano Nice",
  "école de musique Nice",
  "cours de musique Cimiez",
  "préparation bac option musique piano Nice"
]
```

---

## JSON-LD (Structured Data)

À émettre sur la home :

- **`EducationalOrganization`** (schema.org) avec `name`, `url`, `logo`, `address` (PostalAddress), `telephone`, `email`, `foundingDate: "1994-11-02"`, `sameAs` (Facebook, PagesJaunes, Mappy).
- **`LocalBusiness`** pour l'ancrage local (horaires d'ouverture, géoloc, zone desservie).
- **`Person`** sur `/professeur` pour Bérénice (`jobTitle: "Professeure de piano"`, `worksFor`, `hasCredential` x2 pour les deux diplômes).
- **`Course`** sur chaque page de discipline (`educationalLevel`, `audience: "enfants / adolescents / adultes"`, `provider`).

---

## Backlinks / citations à consolider

Liens entrants existants à garder vivants en conservant les URLs canoniques :

- PagesJaunes — fiche `07247300`
- Mappy — POI `50b02c5b84ae4bef54e3b9e3`
- Spectable — fiche `61215`
- WebRankInfo — fiche `32867`
- Facebook — page `AcademieDePianoBerenice`

**Action recommandée post-lancement** (hors scope de code mais à documenter dans le handover) :
- Créer ou revendiquer **Google Business Profile** au 59 bd de Cimiez — priorité SEO locale n°1.
- Vérifier que toutes les fiches tierces pointent bien vers `https://www.piano-berenice.com` (ou nouveau domaine si changé) et non vers une URL morte.
- Inviter les parents satisfaits à laisser un avis sur Google Business Profile (signal de confiance + SEO local).

---

## Contenus à ranker (stratégie éditoriale `/actualites`)

Articles courts à prévoir pour `data/news/` (MDX), chacun optimisé pour des requêtes long tail saisonnières :

1. *« Rentrée 2026-2027 à l'Académie de piano Bérénice »* — publier fin août, catch `rentrée piano Nice 2026`.
2. *« Préparer l'épreuve piano de l'option musique au bac »* — catch `bac option musique piano Nice` (niche mais haute intention).
3. *« Pourquoi commencer le piano adulte à Nice ? »* — catch `cours piano adulte Nice débutant`.
4. *« L'éveil musical à 5 ans : à quoi ça sert vraiment ? »* — catch `éveil musical 5 ans`.
5. *« Audition annuelle des élèves 2027 »* — saisonnier, photos à obtenir après accord parents.

Ces articles sont optionnels pour le MVP mais **prévus par l'architecture** (`app/(marketing)/actualites/[slug]/page.tsx` + MDX dans `data/news/`). Un seed de 2-3 exemples suffit pour la livraison initiale.
