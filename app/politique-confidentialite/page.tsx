import type { Metadata } from "next";
import { school } from "@/lib/school";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de l'Académie de piano Bérénice — conformité RGPD, finalités, durées de conservation, droits des utilisateurs.",
  alternates: { canonical: "/politique-confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: "Confidentialité", href: "/politique-confidentialite" }]} />
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
        Légal
      </p>
      <h1 className="mt-4 font-serif text-4xl text-[var(--primary)] sm:text-5xl">
        Politique de confidentialité
      </h1>
      <p className="mt-3 text-sm text-[var(--muted)]">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </p>

      <div className="prose-warm mt-8 space-y-8 text-[var(--ink)]/85">
        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            1. Responsable de traitement
          </h2>
          <p>
            Le responsable du traitement des données collectées sur ce site
            est :
          </p>
          <p>
            <strong>{school.legal.raisonSociale}</strong> — exploitant
            l'Académie de piano Bérénice
            <br />
            {school.contact.address.street}, {school.contact.address.postalCode}{" "}
            {school.contact.address.city}
            <br />
            SIREN : {school.legal.siren} — SIRET : {school.legal.siret}
            <br />
            Email :{" "}
            <a
              href={`mailto:${school.contact.email}`}
              className="underline underline-offset-2"
            >
              {school.contact.email}
            </a>
            <br />
            Téléphone : {school.contact.phoneDisplay}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            2. Données collectées
          </h2>
          <p>
            Nous ne collectons que les données strictement nécessaires à la
            gestion de votre demande :
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <strong>Formulaire de contact :</strong> nom, email, téléphone
              (optionnel), message.
            </li>
            <li>
              <strong>Formulaire de pré-inscription :</strong> prénom, nom,
              date de naissance, niveau, coordonnées du représentant légal (si
              élève mineur), email, téléphone, disponibilités, expérience,
              motivation.
            </li>
            <li>
              <strong>Navigation :</strong> aucune donnée de navigation n'est
              collectée à des fins publicitaires. Aucun cookie tiers n'est
              déposé sans votre consentement.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            3. Finalités et bases légales
          </h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] text-left">
                <th className="py-2 pr-3">Finalité</th>
                <th className="py-2 pr-3">Base légale</th>
                <th className="py-2">Durée</th>
              </tr>
            </thead>
            <tbody className="text-[var(--ink)]/80">
              <tr className="border-b border-[var(--border)]">
                <td className="py-3 pr-3">Réponse aux demandes de contact</td>
                <td className="py-3 pr-3">Consentement (art. 6-1-a RGPD)</td>
                <td className="py-3">3 ans à compter du dernier contact</td>
              </tr>
              <tr className="border-b border-[var(--border)]">
                <td className="py-3 pr-3">Gestion des pré-inscriptions</td>
                <td className="py-3 pr-3">
                  Mesures précontractuelles (art. 6-1-b RGPD)
                </td>
                <td className="py-3">
                  Durée du suivi pédagogique + 3 ans (prescription
                  commerciale)
                </td>
              </tr>
              <tr className="border-b border-[var(--border)]">
                <td className="py-3 pr-3">
                  Obligations comptables et fiscales
                </td>
                <td className="py-3 pr-3">
                  Obligation légale (art. 6-1-c RGPD)
                </td>
                <td className="py-3">10 ans (art. L.123-22 Code de commerce)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            4. Destinataires des données
          </h2>
          <p>
            Vos données sont exclusivement destinées à l'équipe pédagogique de
            l'Académie de piano Bérénice. Elles ne sont jamais vendues, louées
            ni transmises à des tiers commerciaux.
          </p>
          <p>
            Sous-traitants techniques (au sens de l'article 28 du RGPD) :
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <strong>Vercel Inc.</strong> — hébergement du site, situé aux
              États-Unis avec clauses contractuelles types (CCT) conformes à
              la décision d'adéquation Data Privacy Framework.
            </li>
            <li>
              <strong>Resend (Resend, Inc.)</strong> — envoi des emails
              transactionnels, basé aux États-Unis, CCT + DPF.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            5. Transferts hors UE
          </h2>
          <p>
            Certains sous-traitants sont situés en dehors de l'Union
            européenne. Les transferts sont encadrés par les Clauses
            Contractuelles Types de la Commission européenne et/ou par le
            Data Privacy Framework, garantissant un niveau de protection
            équivalent à celui exigé par le RGPD.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            6. Traitement des données d'élèves mineurs
          </h2>
          <p>
            Pour l'inscription d'un élève de moins de 18 ans, le consentement
            explicite du représentant légal est obligatoire et recueilli via
            une case dédiée lors de l'inscription en ligne. Les données
            collectées sont strictement nécessaires à la gestion pédagogique
            et administrative. Toute photo ou enregistrement d'un élève mineur
            fera l'objet d'une autorisation spécifique et séparée de droit à
            l'image.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            7. Vos droits
          </h2>
          <p>
            Conformément aux articles 15 à 22 du RGPD, vous disposez des
            droits suivants :
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement (« droit à l'oubli »)</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité</li>
            <li>Droit d'opposition</li>
            <li>Droit de retirer votre consentement à tout moment</li>
            <li>
              Droit de définir des directives relatives au sort de vos données
              après votre décès
            </li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous par email à{" "}
            <a
              href={`mailto:${school.contact.email}`}
              className="underline underline-offset-2"
            >
              {school.contact.email}
            </a>{" "}
            ou par courrier à l'adresse de l'éditrice. Une réponse vous sera
            apportée dans un délai maximum de un mois.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            8. Réclamation auprès de la CNIL
          </h2>
          <p>
            Si vous estimez, après nous avoir contactés, que vos droits
            Informatique et Libertés ne sont pas respectés, vous pouvez
            adresser une réclamation à la Commission Nationale de
            l'Informatique et des Libertés (CNIL) — 3 Place de Fontenoy, TSA
            80715, 75334 PARIS CEDEX 07 —{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              cnil.fr
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            9. Sécurité
          </h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles
            appropriées pour protéger vos données : chiffrement TLS,
            hébergement sécurisé, contrôles d'accès, minimisation des
            données, et sensibilisation des personnes amenées à traiter vos
            informations.
          </p>
        </section>
      </div>
    </article>
    </>
  );
}
