# Académie de piano Bérénice — site web

Site vitrine officiel de l'[Académie de piano Bérénice](https://piano-berenice.com), école de musique située au 59 boulevard de Cimiez à Nice, dirigée par Bérénice Lecardeur depuis 1994.

## Stack

- **Next.js 16** (App Router, Server Components, Server Actions)
- **TypeScript** strict
- **Tailwind CSS v4**
- **Resend** (optionnel) pour l'envoi des emails de formulaires
- **qrcode** pour la carte de visite numérique
- Déployé sur **Vercel**

## Démarrer en local

```bash
npm install
cp .env.example .env.local   # optionnel : configurer Resend
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

Toutes optionnelles. Sans `RESEND_API_KEY`, les soumissions de formulaires sont loggées dans la console serveur (utile en dev, non bloquant en prod).

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Clé API Resend pour l'envoi transactionnel |
| `RESEND_FROM` | Adresse expéditeur vérifiée chez Resend |
| `ADMIN_EMAIL` | Destinataire des notifications (défaut : berenice.lecardeur@gmail.com) |

## Structure

```
app/
  page.tsx                      # Accueil
  professeur/                   # Biographie et diplômes
  cours/
    piano/ | solfege/ | eveil-musical/
  tarifs/ plan-acces/ contact/ inscription/ carte-de-visite/
  mentions-legales/ cgu/ cgv/ politique-confidentialite/ cookies/
  api/vcard/                    # Route renvoyant la vCard .vcf
  sitemap.ts | robots.ts

components/
  SiteHeader | SiteFooter | CookieBanner
  ContactForm | EnrollmentForm
  QrCode | JsonLd

lib/
  school.ts                     # Source de vérité (infos école, SIRENE, SEO)
  kayzen.ts                     # Identité agence web
  actions.ts                    # Server Actions (formulaires)

research/                       # Phase 1 de recherche — conservée pour référence
```

## Conformité

- **RGPD** : politique de confidentialité détaillée, formulaires avec consentement explicite + honeypot anti-spam, consentement dédié pour les mineurs.
- **Cookies** : aucun cookie tiers ni publicitaire. Bandeau informationnel.
- **WCAG 2.1 AA / RGAA / European Accessibility Act** : skip link, focus visibles, contrastes, navigation clavier, aria-labels, `prefers-reduced-motion`. Audit complet à planifier.
- **SEO** : metadata par page, Open Graph, JSON-LD `EducationalOrganization` + `Course`, sitemap + robots, redirections 301 depuis les URLs legacy.

## Crédits

Conception & développement : [Kayzen Web](https://internet.kayzen-lyon.fr).
