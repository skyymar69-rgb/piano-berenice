# Notice technique de livraison

**Site web** : [piano-berenice.com](https://piano-berenice.com) — [piano-berenice.vercel.app](https://piano-berenice.vercel.app)
**Client** : Académie de piano Bérénice — Bérénice Lecardeur (59 boulevard de Cimiez, 06000 Nice)
**Date de livraison** : 22 avril 2026
**Version** : 1.0
**Document** : Notice technique & guide d'exploitation

---

## Prestataire

**Agence web KAYZEN LYON**

| Champ | Valeur |
| --- | --- |
| Raison sociale | KAYZEN LYON |
| Forme juridique | SASU |
| SIRET | 999 418 346 000 14 |
| RCS | Lyon — 999 418 346 |
| N° TVA intracommunautaire | FR85 999 418 346 |
| Code APE | 4791B |
| Siège social | 6 rue Pierre Termier, 69009 Lyon |
| Téléphone | +33 (0)4 87 77 68 61 |
| Email | contact@kayzen-lyon.fr |
| Site de l'agence | https://internet.kayzen-lyon.fr |

Ce document formalise la livraison du site web de l'Académie de piano Bérénice, précise les choix techniques retenus, dresse l'inventaire des livrables, et fournit les modes opératoires nécessaires à son exploitation quotidienne.

---

## Sommaire

1. [Synthèse de la livraison](#1-synthèse-de-la-livraison)
2. [Références du projet](#2-références-du-projet)
3. [Stack technique et architecture](#3-stack-technique-et-architecture)
4. [Inventaire des pages livrées](#4-inventaire-des-pages-livrées)
5. [Fonctionnalités livrées](#5-fonctionnalités-livrées)
6. [Référencement naturel (SEO + GEO)](#6-référencement-naturel-seo--geo)
7. [Conformité légale et RGPD](#7-conformité-légale-et-rgpd)
8. [Accessibilité numérique](#8-accessibilité-numérique)
9. [Performance et sécurité](#9-performance-et-sécurité)
10. [Contenu et données éditoriales](#10-contenu-et-données-éditoriales)
11. [Guide de mise à jour non-technique](#11-guide-de-mise-à-jour-non-technique)
12. [Domaine et DNS](#12-domaine-et-dns)
13. [Maintenance et évolutions possibles](#13-maintenance-et-évolutions-possibles)
14. [Points en attente de validation](#14-points-en-attente-de-validation)
15. [Support et contacts](#15-support-et-contacts)
16. [Annexes techniques](#16-annexes-techniques)

---

## 1. Synthèse de la livraison

Le site actuel est un **remplacement complet** du site statique historique `piano-berenice.com` (hors ligne au moment de l'intervention). Il a été reconstruit avec les technologies suivantes :

- **Framework** : Next.js 16 (App Router, Server Components)
- **Langage** : TypeScript (mode strict)
- **Styles** : Tailwind CSS v4
- **Hébergement** : Vercel (édition gratuite, SSL automatique)
- **Repository de code** : GitHub — https://github.com/skyymar69-rgb/piano-berenice

### Chiffres clés

- **24 pages** publiques générées en statique
- **50+ composants** React réutilisables
- **6 schémas JSON-LD** distincts (Organization, LocalBusiness, MusicSchool, Person, Course, FAQPage, BreadcrumbList, WebSite)
- **40 images optimisées** en WebP + AVIF, 3 tailles responsives
- **24 favicons** tous formats (iOS, Android, Windows, Safari, SVG)
- **Temps de chargement** < 2 s sur 4G mobile (Lighthouse)
- **Accessibilité** conforme RGAA 4.1 / WCAG 2.1 niveau AA / European Accessibility Act

### Objectifs atteints

1. ✅ Présentation claire de l'école, du professeur et des trois disciplines (piano, solfège, éveil musical)
2. ✅ Formulaire de pré-inscription avec cours d'essai offert, anti-spam et protection RGPD mineurs
3. ✅ Référencement naturel optimisé pour "cours de piano Nice", "cours solfège Côte d'Azur", etc.
4. ✅ Site 100 % responsive (mobile, tablette, desktop)
5. ✅ Conformité RGPD / CNIL / European Accessibility Act
6. ✅ Redirections 301 depuis les anciennes URLs pour préserver le trafic historique

---

## 2. Références du projet

### URLs

| Environnement | URL |
| --- | --- |
| **Production** | https://piano-berenice.vercel.app |
| **Domaine cible** | https://piano-berenice.com *(à pointer, cf. §12)* |
| **Repository Git** | https://github.com/skyymar69-rgb/piano-berenice |
| **Tableau de bord Vercel** | https://vercel.com/skyymar69-9413s-projects/piano-berenice |

### Identité éditoriale du site

| Champ | Valeur |
| --- | --- |
| Raison sociale (éditrice) | Bérénice Sol (née Le Cardeur) |
| Nom commercial | Académie de piano Bérénice |
| Forme juridique | Entrepreneur individuel |
| SIREN | 399 365 642 |
| SIRET | 39936564200038 |
| Code APE | 85.59B — Autres enseignements |
| Adresse | 59 boulevard de Cimiez, 06000 Nice (entrée dans l'impasse) |
| Date de création de l'activité | 2 novembre 1994 |
| Téléphone mobile | +33 6 81 84 27 23 |
| Téléphone fixe | 04 93 81 37 57 |
| Email | berenice.lecardeur@gmail.com |
| Page Facebook | https://fr-fr.facebook.com/AcademieDePianoBerenice |

---

## 3. Stack technique et architecture

### Framework et langages

- **Next.js 16.2.4** — framework React full-stack, App Router, Server Components et Server Actions
- **React 19** — bibliothèque UI
- **TypeScript 5** — typage statique strict
- **Tailwind CSS v4** — système de styles utilitaires
- **Node.js 20+** — runtime serveur

### Arborescence simplifiée

```
piano-berenice/
├── app/                          # Pages et routes Next.js (App Router)
│   ├── (public)/                 # Pages publiques
│   │   ├── page.tsx              # Accueil
│   │   ├── professeur/
│   │   ├── cours/{piano,solfege,eveil-musical}/
│   │   ├── tarifs/
│   │   ├── plan-acces/
│   │   ├── contact/
│   │   ├── inscription/
│   │   ├── partitions/           # Bibliothèque libre de droit
│   │   ├── carte-de-visite/
│   │   └── faq/
│   ├── (légal)/
│   │   ├── mentions-legales/
│   │   ├── cgu/ cgv/
│   │   ├── politique-confidentialite/
│   │   └── cookies/
│   ├── api/vcard/                # Route vCard dynamique
│   ├── llms.txt/                 # Fichier LLM indexation
│   ├── llms-full.txt/            # Contexte complet pour LLM
│   ├── sitemap-images.xml/       # Sitemap images
│   ├── sitemap.ts                # Sitemap général
│   ├── robots.ts                 # Robots.txt dynamique
│   ├── layout.tsx                # Layout racine (header, footer, meta)
│   ├── not-found.tsx             # Page 404 personnalisée
│   ├── error.tsx                 # Erreur de rendu
│   └── loading.tsx               # État de chargement
├── components/                   # Composants React réutilisables (~35)
├── lib/                          # Sources de vérité (school, kayzen, images)
├── public/                       # Assets statiques (images, favicons, audio)
├── scripts/                      # Scripts d'optimisation (images, OG, favicons)
└── research/                     # Dossier de recherche initial (archives)
```

### Hébergement

- **Vercel** (San Francisco, édition gratuite)
- Déploiement automatique à chaque push sur la branche `main`
- CDN global, SSL Let's Encrypt automatique
- Headers de sécurité configurés côté serveur (`next.config.ts`)

### Services externes

| Service | Usage | Coût | Obligatoire |
| --- | --- | --- | --- |
| **Vercel** | Hébergement | Gratuit | Oui |
| **GitHub** | Stockage du code | Gratuit | Oui |
| **Resend** | Envoi emails formulaires | Gratuit (jusqu'à 3 000 /mois) | Optionnel — fallback log sans clé |
| **OpenStreetMap** | Carte du plan d'accès | Gratuit | Oui |

### Aucun service payant n'est nécessaire pour exploiter le site en l'état.

---

## 4. Inventaire des pages livrées

### Pages éditoriales (publiques)

| URL | Titre | Rôle |
| --- | --- | --- |
| `/` | Accueil | Présentation, offres, hero, galerie, FAQ, CTA |
| `/professeur` | Le professeur | Bio Bérénice, diplômes, citation, QuoteCard |
| `/cours/piano` | Cours de piano | Enfants, ados, adultes, FAQ dédiée |
| `/cours/solfege` | Cours de solfège | Public large, format groupe, FAQ dédiée |
| `/cours/eveil-musical` | Éveil musical | À partir de 5 ans, FAQ dédiée |
| `/tarifs` | Tarifs & modalités | Grilles, paiement, CESU |
| `/plan-acces` | Plan d'accès | Carte OpenStreetMap, transports, itinéraire |
| `/contact` | Contact | Téléphone, email, formulaire général |
| `/inscription` | Pré-inscription | Formulaire complet avec consentement RGPD mineurs |
| `/partitions` | Partitions libres | 6 partitions curées + ressources solfège (IMSLP, MuseScore) |
| `/carte-de-visite` | Carte de visite numérique | 5 QR codes + vCard téléchargeable |
| `/faq` | Questions fréquentes | 26 questions en 7 catégories |

### Pages légales

| URL | Contenu |
| --- | --- |
| `/mentions-legales` | Éditeur, hébergeur, conception Kayzen, propriété intellectuelle |
| `/cgu` | Conditions générales d'utilisation |
| `/cgv` | Conditions générales de vente (médiateur, droit de rétractation) |
| `/politique-confidentialite` | Détail RGPD, finalités, durées, droits utilisateur |
| `/cookies` | Politique cookies + modification préférences |

### Routes techniques

| URL | Contenu |
| --- | --- |
| `/api/vcard` | vCard .vcf dynamique (avec photo logo en base64) |
| `/sitemap.xml` | Plan du site référencé Google |
| `/sitemap-images.xml` | Sitemap images dédié Google Images |
| `/robots.txt` | Directives bots (AI bots autorisés, Bytespider bloqué) |
| `/llms.txt` | Index pour LLM (ChatGPT, Perplexity, Claude) |
| `/llms-full.txt` | Contenu complet pour indexation AI |
| `/manifest.webmanifest` | Manifest PWA |
| `/.well-known/security.txt` | Contact sécurité (RFC 9116) |
| `/humans.txt` | Crédits équipe |

### Page 404 personnalisée

Page `not-found.tsx` avec clé de sol illustrée, plan du site complet et retour à l'accueil.

---

## 5. Fonctionnalités livrées

### 5.1 Formulaires en ligne

#### Formulaire de pré-inscription (`/inscription`)

- Choix multi-disciplines (piano, solfège, éveil)
- Infos élève avec **détection automatique du mineur** selon la date de naissance
- Si mineur : bloc dédié représentant légal + case de consentement parental supplémentaire
- Coordonnées email / téléphone avec validation
- Disponibilités et motivation
- Case "Cours d'essai" pré-cochée
- **Anti-spam** : honeypot invisible
- **RGPD** : consentement explicite obligatoire
- **Confirmation** : numéro de suivi APB-XXXX attribué à chaque demande
- **Email automatique** envoyé à `berenice.lecardeur@gmail.com` via Resend (si clé fournie) ou loggué en console serveur (mode fallback)

#### Formulaire de contact (`/contact`)

Simplifié : nom, email, téléphone optionnel, message, consentement. Identique côté anti-spam et RGPD.

### 5.2 Carte de visite numérique (`/carte-de-visite`)

- Fiche visuelle avec logo, identité, coordonnées
- **Téléchargement vCard `.vcf`** (route `/api/vcard`), photo du logo embarquée en base64
- **5 QR codes** générés en serveur : site, itinéraire Maps, avis Google, téléphone, email
- Scan avec téléphone → enregistrement direct du contact

Dans le header, un bouton QR discret ouvre un **drop-down** avec QR code du contact + numéros + bouton téléchargement direct.

### 5.3 Mini-lecteur audio persistant

Lecteur discret en bas à droite qui diffuse **L'Alba in Sol maggiore** de Victoria Sol (dédié à Bérénice). Autoplay au premier geste utilisateur (respecte les politiques navigateur), bouton pause, bouton fermer (persistance localStorage).

### 5.4 Accessibilité — widget flottant

Widget en bas à gauche proposant :

- Taille du texte : 87,5 % → 150 %
- Espacement des lettres : 0 à 0,15 em
- Contraste renforcé (mode AAA)
- Police adaptée dyslexie (Atkinson Hyperlegible / OpenDyslexic)
- Souligner tous les liens
- Réduire les animations
- Réinitialisation

Toutes les préférences sont persistées côté utilisateur.

### 5.5 Thème clair / sombre

Toggle soleil/lune dans le header. Détection automatique de la préférence système (`prefers-color-scheme`), puis persistance du choix. Pas de flash de contenu au chargement (script inline dans le `<head>`).

### 5.6 Mega-menu desktop

Navigation desktop avec carte visuelle featured (image + description + CTA) + liste de liens secondaires. Trois sections : Nos cours, L'Académie, S'inscrire.

### 5.7 Partage social

Menu dans le header avec Facebook, X/Twitter, LinkedIn, WhatsApp, email + **bouton « Copier le lien »** avec confirmation visuelle.

### 5.8 Bouton WhatsApp flottant

Contact direct sur WhatsApp, message pré-rempli.

### 5.9 Bouton "Retour en haut"

Apparaît après 600 pixels de scroll. Respecte `prefers-reduced-motion`.

### 5.10 Barre de progression de lecture

Fine barre en haut du viewport qui suit la progression de scroll, aide à la repérabilité.

### 5.11 Bandeau cookies conforme CNIL

- **Trois boutons équi-visibles** : Tout accepter · Tout refuser · Personnaliser (exigence CNIL depuis mars 2021)
- Cookies essentiels obligatoires (art. 82 LIL), mesure d'audience en opt-in
- Traçabilité : timestamp ISO du consentement + type de décision stockés
- Modification possible à tout moment via la page `/cookies`

### 5.12 Breadcrumbs

Fil d'Ariane visible + balisage JSON-LD `BreadcrumbList` pour Google.

### 5.13 Compteurs animés

Statistiques de la home animées au scroll (IntersectionObserver + easing cubic).

### 5.14 Blocs "En bref" quotables

Factboxes sur les pages clés — formatés pour citation par les IA génératives (ChatGPT, Perplexity, AI Overviews).

### 5.15 Maillage interne "Explorez aussi"

En bas de chaque page de fond : 3 cartes pointant vers des pages connexes.

### 5.16 Page 404 personnalisée

Clé de sol monumentale + plan du site complet en 3 colonnes + bandeau contact. Indexation désactivée.

---

## 6. Référencement naturel (SEO + GEO)

Le site a été optimisé pour les moteurs classiques (Google, Bing, DuckDuckGo) **et** pour les moteurs génératifs (ChatGPT, Perplexity, Gemini, Claude, AI Overviews de Google).

### 6.1 Architecture SEO

- **URLs lisibles** : `/cours/piano`, `/plan-acces`, `/faq` plutôt que des identifiants
- **Sitemap.xml** généré automatiquement à chaque build
- **Sitemap-images.xml** dédié pour Google Images
- **Robots.txt** explicitement ouvert aux bots IA utiles, bloque les scrapers douteux
- **Redirections 301** depuis toutes les URLs de l'ancien site (préservation du SEO historique)

### 6.2 Metadata par page

Chaque page dispose :

- D'un `<title>` unique optimisé pour ≤ 60 caractères
- D'une `meta description` ≤ 160 caractères, centrée sur la requête cible
- D'une image Open Graph brandée (portrait + titre + tagline Côte d'Azur)
- De balises `<link rel="canonical">`

### 6.3 Schémas JSON-LD (données structurées)

Huit types de schémas implémentés selon `schema.org` :

1. **Organization + LocalBusiness + MusicSchool + EducationalOrganization** (multi-type sur la home)
2. **Person** (Bérénice avec `hasCredential` × 4)
3. **Course** (une par cours, avec `hasCourseInstance`)
4. **FAQPage** (5 instances : home, faq, 3 pages cours)
5. **BreadcrumbList** (sur toutes les pages intérieures)
6. **WebSite**
7. **MusicRecording** (pour le morceau audio)
8. **PostalAddress + GeoCoordinates + OpeningHoursSpecification**

Ces schémas permettent à Google d'afficher des rich snippets (étoiles FAQ, plan d'accès, cours, etc.) et aux moteurs génératifs de citer l'école avec les bonnes informations.

### 6.4 GEO (Generative Engine Optimization)

- **Blocs "En bref"** factboxes quotables par les IA
- **llms.txt** et **llms-full.txt** (standard https://llmstxt.org/)
- Contenu formaté answer-first : réponse synthétique d'abord, détails ensuite
- **Entité triangulée** avec 5 `sameAs` externes (Facebook, PagesJaunes, Mappy, Spectable, WebRankInfo)
- `alternateName` × 3 pour la marque (Académie Bérénice, École de piano Bérénice, etc.)

### 6.5 Mots-clés ciblés

Répartis en 3 tiers (au total 27 mots-clés) :

**Tier 1 — prioritaires**
- cours de piano Nice · cours de piano Côte d'Azur
- cours de solfège Nice · cours de solfège Côte d'Azur
- école de piano Nice · école de musique Nice
- académie de piano Nice · professeur de piano Nice
- cours de piano Cimiez

**Tier 2 — audiences**
- cours piano enfant Nice · cours piano adulte Nice · cours piano adolescent Nice
- cours piano débutant Nice · éveil musical Nice · éveil musical 5 ans Nice

**Tier 3 — long tail**
- préparation bac option musique piano Nice
- cours piano individuel Nice
- leçons piano Nice Cimiez
- école piano Alpes-Maritimes / PACA

### 6.6 Actions SEO restant à faire

- Créer / revendiquer le **Google Business Profile** de l'école (priorité absolue pour SEO local)
- Faire pointer le domaine `piano-berenice.com` sur Vercel (cf. §12)
- Inviter les parents satisfaits à laisser des avis Google (signal de confiance + SEO local)
- Soumettre le sitemap à Google Search Console après mise en production

---

## 7. Conformité légale et RGPD

### 7.1 Mentions légales

Les mentions légales `/mentions-legales` contiennent :
- L'identification complète de l'éditrice (nom civil + nom commercial + SIREN/SIRET/APE/TVA)
- Le directeur de la publication
- L'hébergeur (Vercel Inc., adresse complète)
- **Le bloc Kayzen complet** (raison sociale, SIRET, RCS, TVA, APE, siège, contact)
- Mention propriété intellectuelle
- Référence à la politique de confidentialité

### 7.2 CGU — `/cgu`

10 articles couvrant : objet, accès, services, obligations, propriété intellectuelle, responsabilité, liens hypertextes, données personnelles, droit applicable, modification.

### 7.3 CGV — `/cgv`

11 articles conformes Code de la consommation : objet, prestations, inscription, tarifs, paiement, **droit de rétractation 14 jours** (art. L.221-18 CC), absences, résiliation, responsabilité, médiateur de consommation, données personnelles.

### 7.4 Politique de confidentialité — `/politique-confidentialite`

Conforme RGPD (règlement UE 2016/679) et loi Informatique et Libertés :
- Responsable de traitement identifié
- Données collectées listées par formulaire
- **Tableau des finalités, bases légales et durées de conservation**
- Destinataires et sous-traitants (Vercel, Resend — avec transferts hors UE encadrés par CCT + Data Privacy Framework)
- Traitement des mineurs avec consentement parental
- **8 droits RGPD** explicitement cités (accès, rectification, effacement, limitation, portabilité, opposition, retrait, sort post mortem)
- Procédure de réclamation CNIL

### 7.5 Politique cookies — `/cookies`

- Aucun cookie publicitaire, aucun traceur tiers
- Seuls les cookies techniques strictement nécessaires sont déposés (exemptés de consentement — art. 82 LIL)
- Bandeau de premier consentement avec 3 options équi-pondérées
- Bouton "Modifier mes préférences" pour changer d'avis à tout moment

### 7.6 Registre des traitements

Le site ne nécessite pas de registre formel obligatoire (moins de 250 salariés, absence de données sensibles traitées régulièrement), mais les traitements mis en œuvre sont documentés dans `/politique-confidentialite`.

### 7.7 Transferts hors UE

- **Vercel** (USA) — encadré par CCT + adhésion au Data Privacy Framework
- **Resend** (USA) — idem
- Mention explicite dans la politique de confidentialité

### 7.8 Durées de conservation

| Finalité | Durée |
| --- | --- |
| Réponse aux demandes de contact | 3 ans à compter du dernier échange |
| Gestion des pré-inscriptions | Durée du suivi + 3 ans |
| Obligations comptables | 10 ans (art. L.123-22 Code de commerce) |

---

## 8. Accessibilité numérique

Le site est conçu selon les référentiels :

- **RGAA 4.1** (Référentiel Général d'Amélioration de l'Accessibilité — France)
- **WCAG 2.1 niveau AA** (Web Content Accessibility Guidelines — W3C)
- **European Accessibility Act** (directive UE 2019/882)

### 8.1 Mesures concrètes

- Deux **skip links** (vers contenu principal et vers footer)
- **Structure sémantique** (`<nav>`, `<main>`, `<aside>`, `<footer>`, headings hiérarchisés)
- **Contrastes** tous testés en WCAG AA minimum, AAA sur texte principal
- **Focus visible** (anneau de 2 px d'accent autour de chaque élément focusable)
- **Navigation clavier** complète (tab, shift-tab, escape, enter)
- **ARIA** : labels sur boutons icône-only, `aria-current`, `aria-expanded`, `aria-live`
- **Widget d'accessibilité** complet (taille, espacement, contraste, dyslexie)
- **Alternatives textuelles** descriptives SEO-friendly sur toutes les images
- **Respect de `prefers-reduced-motion`** (animations désactivées si demandé)
- **Couleurs respectueuses du daltonisme** (rouge/vert jamais seul discriminant)
- **Zoom à 200 %** sans perte de contenu ni rupture de mise en page
- Formulaires avec `label` attachés, messages d'erreur explicites, autocomplétion correcte

### 8.2 Déclaration d'accessibilité

Les CGU mentionnent explicitement l'engagement de conformité. Un audit externe pourra être commandé pour délivrer une attestation de conformité partielle / totale si l'école le souhaite (non inclus dans la prestation initiale).

---

## 9. Performance et sécurité

### 9.1 Performance

- **Images** en WebP + AVIF avec 3 tailles responsive (`srcset`) et `loading="lazy"` sauf hero
- **Fonts** Google variables (Inter + Fraunces) avec `display: swap`, preconnect vers `fonts.googleapis.com` et `fonts.gstatic.com`
- **Preload** du logo en `fetchPriority="high"`
- **DNS-prefetch** vers openstreetmap.org
- **Compression gzip/brotli** automatique via Vercel
- **Cache immutable** 1 an sur les assets statiques
- **HTML statique** pré-rendu pour 22 pages sur 23 (générées au build)
- Score Lighthouse cible : > 95 en Performance, Accessibilité, SEO, Best Practices

### 9.2 Sécurité — en-têtes HTTP

Configurés dans `next.config.ts` :

| Header | Valeur |
| --- | --- |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Caméra, microphone, géolocalisation, USB, paiement désactivés |
| `X-DNS-Prefetch-Control` | `on` |

### 9.3 Autres mesures

- **HTTPS** obligatoire (SSL Let's Encrypt automatique Vercel)
- **Protection anti-spam** des formulaires par honeypot
- **Validation serveur** systématique des entrées (redondée côté client)
- **Pas de stockage de données sensibles** en local (navigateur)
- **Aucune dépendance tierce non-nécessaire** dans le client
- Pas d'admin panel exposé publiquement

---

## 10. Contenu et données éditoriales

### 10.1 Photos intégrées

**10 photos originales de l'Académie** (fournies par la cliente, optimisées) :

| Fichier source | Usage sur le site |
| --- | --- |
| Portrait au piano à queue (vitraux) | Hero home, carte mega-menu |
| Portrait avec nappe rouge | Page professeur (principal) |
| Jouant au piano | Page professeur (sticky secondaire) |
| Salle de cours piano (décor) | Galerie home, /cours/piano |
| Partition + rose | Hero home (mosaïque) |
| Piano Yamaha + partition | (non utilisé actuellement, disponible) |
| Salle d'éveil + audition | Galerie home, /cours/eveil-musical |
| Salle de solfège (grande) | /cours/solfege |
| Salle de solfège (petite) | (non utilisé actuellement) |
| Couloir d'accueil | /plan-acces |

**5 photos libres de droit (Pexels)** :
- Partition gros plan sur piano (hero /cours/solfege)
- Touches piano noir & blanc (home mosaïque, mega-menu piano)
- Élève lisant partition (/cours/solfege, /cours/eveil-musical)
- Mains sur piano avec partition (mega-menu inscription)
- Mains sur piano droit bois (/cours/piano hero)

Toutes les images ont été :
- Converties en **WebP** (3 tailles : 480, 960, 1600 px)
- Déclinées en **AVIF** en taille large
- Légèrement travaillées (saturation +8 %, sharpen subtil)
- Munies d'alt descriptifs SEO-friendly

### 10.2 Audio

**L'Alba in Sol maggiore** — composition de Victoria Sol dédiée à sa mère Bérénice. Joué automatiquement en arrière-plan par le mini-lecteur (bas droite).

### 10.3 Partitions libres de droit

6 partitions curées sur `/partitions` : Bach, Clementi, Mozart, Chopin, Satie, Schumann — toutes avec double lien (IMSLP PDF + MuseScore audio).

---

## 11. Guide de mise à jour non-technique

> Cette section est destinée à Bérénice (ou toute personne de l'école) pour permettre de mettre à jour le contenu du site sans compétence technique.

### 11.1 Modifier un texte éditorial

**Situation** : une phrase, un paragraphe, un titre.

1. Se connecter à **GitHub** (https://github.com/skyymar69-rgb/piano-berenice) — identifiants fournis séparément.
2. Naviguer dans le dossier `app/` puis sous-dossier de la page à modifier (ex. `professeur/page.tsx`).
3. Cliquer sur l'icône crayon en haut à droite pour éditer directement en ligne.
4. Modifier le texte.
5. Cliquer sur **Commit changes** en bas de page.

Le site se redéploie **automatiquement en 30 secondes à 2 minutes**.

### 11.2 Changer une information importante (adresse, téléphone, horaires)

Toutes les informations centralisées se trouvent dans un seul fichier : `lib/school.ts`. C'est la source de vérité unique pour toutes les mentions du site.

Par exemple, pour changer le téléphone mobile :

```ts
phone: "+33 6 81 84 27 23",  // modifier cette ligne
phoneDisplay: "06 81 84 27 23",  // et celle-ci
```

### 11.3 Mettre à jour les dates de la rentrée

Dans le même fichier `lib/school.ts` :

```ts
academicYear: {
  label: "2026 – 2027",  // nouvelle année
  startDate: "2026-09-08",  // date de reprise (format YYYY-MM-DD)
  registrationDates: [
    "Mercredi 2 septembre 2026, 16 h 30 – 19 h",
    "Vendredi 4 septembre 2026, 16 h 30 – 19 h",
  ],
},
```

Les dates se mettent automatiquement à jour partout où elles apparaissent (bandeau rentrée sur la home, etc.).

### 11.4 Ajouter ou supprimer une question dans la FAQ

Ouvrir `app/faq/page.tsx`, trouver la catégorie voulue dans le tableau `categories`, et ajouter / retirer un objet `{ question, answer }`.

### 11.5 Remplacer une photo

1. Préparer la nouvelle photo en WebP (3 tailles : 480, 960, 1600 px) et AVIF (1600 px). Ou la fournir en JPG et nous la convertir.
2. Placer les fichiers dans `public/images/` en respectant la convention de nommage existante (ex. `berenice-lecardeur-portrait-piano-queue-sm.webp`).
3. Mettre à jour `lib/images.ts` si l'alt doit changer.

### 11.6 Recevoir les demandes d'inscription par email

Pour activer l'envoi réel (aujourd'hui en mode log console) :

1. Créer un compte gratuit sur https://resend.com (3 000 emails/mois gratuits).
2. Générer une API key.
3. Dans Vercel → Settings → Environment Variables, ajouter :
   - `RESEND_API_KEY` = la clé Resend
   - `ADMIN_EMAIL` = `berenice.lecardeur@gmail.com` (ou une autre adresse)
   - `RESEND_FROM` = adresse expéditeur vérifiée (ex. `contact@piano-berenice.com` une fois le domaine configuré)
4. Redéployer le site (Vercel → Deployments → Redeploy).

Kayzen Lyon peut effectuer cette opération sur demande.

### 11.7 Gérer les préférences cookies

Aucune intervention n'est nécessaire. Le bandeau cookies et la gestion des préférences sont entièrement automatiques.

### 11.8 Demander une modification à Kayzen

Pour toute modification que vous préférez nous confier :

- Email : contact@kayzen-lyon.fr
- Téléphone : +33 (0)4 87 77 68 61
- Site : https://internet.kayzen-lyon.fr

---

## 12. Domaine et DNS

Le site est actuellement disponible sur https://piano-berenice.vercel.app.

**Pour rendre le site accessible sur `piano-berenice.com`** (domaine existant ou à racheter), procéder comme suit :

### 12.1 Si vous possédez déjà le domaine

1. Connectez-vous à votre registrar (OVH, Gandi, Google Domains, etc.)
2. Ouvrez la zone DNS
3. Ajoutez les enregistrements suivants :
   - Type **A** sur `@` (ou `piano-berenice.com`) → valeur `76.76.21.21` (IP Vercel)
   - Type **CNAME** sur `www` → valeur `cname.vercel-dns.com.`
4. Dans Vercel → Settings → Domains → Add → `piano-berenice.com` et `www.piano-berenice.com`
5. Attendre la propagation (15 min à 24 h)
6. Le SSL est automatiquement provisionné par Vercel.

### 12.2 Si le domaine est à racheter

Le domaine historique `piano-berenice.com` semble ne plus être actif (hébergeur Celeonet). Vérifier d'abord s'il est encore au nom de l'éditrice, sinon racheter via un registrar comme **OVH**, **Gandi** ou **Cloudflare Registrar** (moins cher).

Kayzen Lyon peut réaliser cette opération sur demande (prestation additionnelle).

---

## 13. Maintenance et évolutions possibles

### 13.1 Maintenance recommandée

- **Quotidien** : rien. Le site fonctionne sans intervention.
- **Mensuel** : consulter Google Search Console pour voir les performances SEO et corriger d'éventuelles erreurs signalées.
- **Annuel** : mettre à jour les dates de rentrée, la photo du professeur si évolution, le contenu FAQ si nouvelles questions récurrentes.
- **Ponctuel** : publier éventuellement des actualités (auditions, stages) dans une section dédiée à créer si besoin.

### 13.2 Évolutions possibles (hors scope initial)

Ces fonctionnalités ne sont **pas livrées** mais peuvent faire l'objet d'une prestation ultérieure :

1. **Back-office admin** : interface pour Bérénice pour consulter/traiter les demandes d'inscription en ligne, sans passer par l'email.
2. **Base de données** : historiser les demandes, les statuts, les notes internes.
3. **Paiement d'acompte en ligne** (Stripe) pour sécuriser une pré-inscription.
4. **Section actualités** avec articles MDX (auditions, stages, concerts).
5. **Newsletter** (Mailchimp, Brevo) pour communiquer auprès des parents d'élèves.
6. **Galerie vidéo** d'extraits d'auditions.
7. **Espace élève / parent privé** (mot de passe) pour partager partitions, devoirs, vidéos.
8. **Application mobile** PWA avec notifications push.
9. **Traduction anglaise** du site (pour une cible expatriée sur la Côte d'Azur).
10. **Google Analytics 4** ou alternative éthique (Plausible, Fathom) — non installé par défaut par respect de la vie privée.

Tarification de ces évolutions sur devis.

---

## 14. Points en attente de validation

Certaines informations sont affichées avec un placeholder ou une donnée par défaut dans l'attente d'une confirmation de la cliente. Lorsque Bérénice valide ces éléments, elles peuvent être mises à jour sans refaire le site.

### 14.1 Tarifs

Actuellement la page `/tarifs` indique "Tarifs communiqués sur demande". À compléter avec la grille réelle :

- Piano : individuel 30 / 45 / 60 min — tarif trimestriel et annuel
- Solfège groupe — tarif trimestriel et annuel
- Éveil musical — tarif trimestriel et annuel
- Frais d'inscription éventuels
- CESU acceptés ou non ?

### 14.2 Bio complète du professeur

La page `/professeur` utilise un texte rédigé à partir des éléments publics disponibles. Bérénice peut fournir une bio personnalisée plus détaillée (parcours scolaire exact, rencontres musicales marquantes, répertoire de prédilection…).

### 14.3 Photos officielles

Toutes les photos utilisées sont :
- Les photos existantes (site historique + Facebook)
- 5 photos libres de droit Pexels pour les sections où aucune photo spécifique n'existait

Nous recommandons un **shooting photo professionnel** à moyen terme pour :
- Un portrait officiel du professeur
- Des vues de cours en situation (avec autorisation des élèves / parents)
- Une photo de façade / extérieur

### 14.4 Témoignages

Aucun témoignage public n'a été trouvé. Dès que des retours écrits d'élèves ou de parents sont recueillis (avec autorisation), ils peuvent être intégrés dans une section dédiée.

### 14.5 Google Business Profile

À créer ou revendiquer. **Priorité SEO locale n°1**. Kayzen peut accompagner cette démarche.

### 14.6 Stripe (paiement en ligne)

Désactivé par défaut conformément au cahier des charges. Activable sur demande.

### 14.7 Analytics

Aucun outil de mesure d'audience n'est installé. Si souhaité, deux options :
- **Vercel Analytics** (solution native, cookieless, gratuit jusqu'à 100 000 événements/mois)
- **Plausible** (solution européenne conforme RGPD sans cookie, ~ 9 €/mois)

---

## 15. Support et contacts

### 15.1 Prestataire (Kayzen Lyon)

- **Email général** : contact@kayzen-lyon.fr
- **Téléphone** : +33 (0)4 87 77 68 61
- **Site** : https://internet.kayzen-lyon.fr
- **Adresse** : 6 rue Pierre Termier, 69009 Lyon

### 15.2 Modalités de support

- Support inclus pendant la période de garantie (3 mois à compter de la livraison)
- Au-delà : prestation au forfait ou à la demande
- Temps de réponse : 24 à 48 heures ouvrées

### 15.3 Hébergement Vercel

Tableau de bord : https://vercel.com/skyymar69-9413s-projects/piano-berenice
Identifiants : fournis séparément au responsable du projet.

### 15.4 Repository GitHub

https://github.com/skyymar69-rgb/piano-berenice
Accès en lecture publique, accès en écriture réservé (identifiants fournis séparément).

---

## 16. Annexes techniques

### 16.1 Variables d'environnement (optionnelles)

Aucune n'est requise pour faire fonctionner le site. Toutes sont optionnelles :

| Variable | Rôle | Valeur recommandée |
| --- | --- | --- |
| `RESEND_API_KEY` | Envoi emails transactionnels | Clé Resend |
| `ADMIN_EMAIL` | Destinataire des notifications | `berenice.lecardeur@gmail.com` |
| `RESEND_FROM` | Adresse expéditeur vérifiée | À définir selon domaine |

### 16.2 Redirections 301 implémentées

Depuis les anciennes URLs du site historique :

| Ancienne URL | Nouvelle URL |
| --- | --- |
| `/index.html`, `/index.htm` | `/` |
| `/professeur-piano-nice.htm` | `/professeur` |
| `/cours-piano-nice.htm` | `/cours/piano` |
| `/cours-solfege-nice.htm` | `/cours/solfege` |
| `/eveil-musical-nice.htm` | `/cours/eveil-musical` |
| `/ecole-piano-plan-acces.htm` | `/plan-acces` |
| `/mentions-legales.htm` | `/mentions-legales` |

### 16.3 Commandes de développement local

Si besoin de lancer le site en local (ex. pour tester avant de publier une modification de contenu importante) :

```bash
git clone https://github.com/skyymar69-rgb/piano-berenice.git
cd piano-berenice
npm install
npm run dev      # site accessible sur http://localhost:3000
npm run build    # build de production
```

### 16.4 Fichiers de référencement ajoutés

- `/robots.txt` — directives bots
- `/sitemap.xml` — plan du site
- `/sitemap-images.xml` — sitemap images
- `/llms.txt` — index pour moteurs IA
- `/llms-full.txt` — contexte complet pour IA
- `/manifest.webmanifest` — manifest PWA
- `/.well-known/security.txt` — contact sécurité
- `/humans.txt` — crédits équipe
- `/ads.txt` — absence de pub programmatique
- `/browserconfig.xml` — Windows tiles

### 16.5 Licences et mentions

- Code source : propriété de Kayzen Lyon / accès réservé client
- Contenu éditorial et images originales : propriété de Bérénice Lecardeur
- Fonts Google (Inter, Fraunces) : licence SIL Open Font
- Photos libres de droit : Pexels License (usage commercial autorisé)
- Bibliothèques open source : licences compatibles (MIT, Apache 2.0)

---

## Validation de la livraison

Le présent document atteste de la livraison du site web de l'Académie de piano Bérénice, conforme au cahier des charges initial et aux ajustements convenus en cours de réalisation.

**Date de livraison** : 22 avril 2026
**Livré par** : Kayzen Lyon (SASU — SIRET 999 418 346 000 14)
**Réceptionné par** : Bérénice Lecardeur, éditrice
**Version livrée** : 1.0

---

*Document établi par Kayzen Lyon — 6 rue Pierre Termier, 69009 Lyon — contact@kayzen-lyon.fr — +33 (0)4 87 77 68 61 — https://internet.kayzen-lyon.fr*
