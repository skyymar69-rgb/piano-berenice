import type { Metadata } from "next";
import { school } from "@/lib/school";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation du site de l'Académie de piano Bérénice.",
  alternates: { canonical: "/cgu" },
};

export default function CguPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
        Légal
      </p>
      <h1 className="mt-4 font-serif text-4xl text-[var(--primary)] sm:text-5xl">
        Conditions générales d'utilisation
      </h1>
      <p className="mt-3 text-sm text-[var(--muted)]">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </p>

      <div className="prose-warm mt-8 space-y-8 text-[var(--ink)]/85">
        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 1 — Objet
          </h2>
          <p>
            Les présentes Conditions générales d'utilisation (CGU) ont pour
            objet de définir les modalités et conditions dans lesquelles
            l'utilisateur accède et utilise le site{" "}
            <strong>piano-berenice.com</strong> (ci-après « le Site »), édité
            par {school.legal.raisonSociale}. L'accès au Site implique
            l'acceptation pleine et entière des présentes CGU.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 2 — Accès au site
          </h2>
          <p>
            Le Site est accessible gratuitement, 24h/24 et 7j/7, sauf cas de
            force majeure ou opérations de maintenance. L'éditrice se réserve
            le droit de suspendre, modifier ou interrompre l'accès à tout ou
            partie du Site sans préavis.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 3 — Services proposés
          </h2>
          <p>
            Le Site présente les services d'enseignement musical proposés par
            l'Académie de piano Bérénice et permet, via un formulaire
            dédié, de demander une inscription ou de prendre contact. Les
            demandes transmises via le formulaire n'engagent aucune des deux
            parties avant un échange personnalisé et la signature éventuelle
            d'un contrat d'inscription distinct.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 4 — Obligations de l'utilisateur
          </h2>
          <p>L'utilisateur s'engage à :</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>fournir des informations exactes et à jour ;</li>
            <li>
              ne pas utiliser le Site à des fins frauduleuses, malveillantes
              ou contraires à l'ordre public ;
            </li>
            <li>
              ne pas tenter de porter atteinte au fonctionnement ou à la
              sécurité du Site ;
            </li>
            <li>
              respecter les droits de propriété intellectuelle rattachés au
              Site et à son contenu.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 5 — Propriété intellectuelle
          </h2>
          <p>
            L'ensemble des contenus du Site est protégé par le droit d'auteur
            et la propriété intellectuelle. Toute reproduction, représentation
            ou exploitation, totale ou partielle, est interdite sans
            autorisation écrite préalable de l'éditrice.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 6 — Responsabilité
          </h2>
          <p>
            L'éditrice met tout en œuvre pour assurer l'exactitude des
            informations publiées sur le Site, sans toutefois pouvoir en
            garantir l'exhaustivité ou l'absence d'erreur. Sa responsabilité
            ne saurait être engagée en cas de dommages liés à l'utilisation ou
            à l'impossibilité d'accéder au Site.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 7 — Liens hypertextes
          </h2>
          <p>
            Le Site peut contenir des liens vers des sites tiers. L'éditrice
            n'exerce aucun contrôle sur ces sites et décline toute
            responsabilité quant à leur contenu.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 8 — Données personnelles
          </h2>
          <p>
            Le traitement des données personnelles collectées sur le Site est
            détaillé dans la{" "}
            <a
              href="/politique-confidentialite"
              className="underline underline-offset-2"
            >
              politique de confidentialité
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 9 — Droit applicable
          </h2>
          <p>
            Les présentes CGU sont soumises au droit français. Tout litige
            relatif à leur interprétation ou à leur exécution relève de la
            compétence des tribunaux français.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 10 — Modification des CGU
          </h2>
          <p>
            L'éditrice se réserve le droit de modifier à tout moment les
            présentes CGU. Les utilisateurs sont invités à les consulter
            régulièrement. La version en vigueur est celle accessible sur le
            Site au moment de la connexion.
          </p>
        </section>
      </div>
    </article>
  );
}
