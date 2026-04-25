import type { Metadata } from "next";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Politique de gestion des cookies",
  description:
    "Politique de gestion des cookies sur le site de l'Académie de piano Bérénice.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: "Cookies", href: "/cookies" }]} />
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
        Légal
      </p>
      <h1 className="mt-4 font-serif text-4xl text-[var(--primary)] sm:text-5xl">
        Politique de gestion des cookies
      </h1>
      <p className="mt-3 text-sm text-[var(--muted)]">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </p>

      <div className="prose-warm mt-8 space-y-8 text-[var(--ink)]/85">
        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Qu'est-ce qu'un cookie ?
          </h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre terminal
            (ordinateur, tablette, téléphone) lors de la visite d'un site web.
            Il peut servir à mémoriser vos préférences, à mesurer l'audience
            du site, ou à proposer des contenus personnalisés.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Cookies utilisés sur ce site
          </h2>
          <p>
            Ce site est conçu selon une approche <strong>« privacy by
            design »</strong> : il n'utilise <strong>aucun cookie publicitaire,
            aucun cookie de traçage tiers, aucun pixel réseaux sociaux</strong>.
          </p>
          <p>
            Seuls peuvent être déposés les cookies strictement nécessaires au
            bon fonctionnement technique du site (par exemple, préférences
            d'affichage ou sécurité des formulaires). Ces cookies sont exemptés
            de consentement conformément à l'article 82 de la loi Informatique
            et Libertés et aux recommandations de la CNIL.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Gérer vos préférences
          </h2>
          <p>
            Vous pouvez modifier votre consentement à tout moment — il est
            enregistré dans votre navigateur et vous sera redemandé après
            suppression.
          </p>
          <CookiePreferencesButton />


          <p className="mt-6">
            Vous pouvez aussi configurer votre navigateur pour accepter,
            refuser ou supprimer les cookies. Consultez l'aide de votre
            navigateur pour les modalités précises :
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>Firefox : Préférences → Vie privée et sécurité → Cookies</li>
            <li>Chrome : Paramètres → Confidentialité et sécurité → Cookies</li>
            <li>Safari : Préférences → Confidentialité</li>
            <li>Edge : Paramètres → Cookies et autorisations de site</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Si cela évolue…
          </h2>
          <p>
            Si de nouveaux cookies devaient être ajoutés (outil de mesure
            d'audience, intégration de cartes tierces, etc.), un bandeau de
            consentement conforme aux lignes directrices de la CNIL serait
            affiché, permettant l'acceptation, le refus ou le paramétrage
            granulaire préalablement à tout dépôt.
          </p>
        </section>
      </div>
    </article>
    </>
  );
}
