import type { Metadata } from "next";
import { school } from "@/lib/school";
import { kayzen } from "@/lib/kayzen";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de l'Académie de piano Bérénice — éditeur, hébergeur, propriété intellectuelle, conformité RGPD.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales", href: "/mentions-legales" }]} />
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
        Légal
      </p>
      <h1 className="mt-4 font-serif text-4xl text-[var(--primary)] sm:text-5xl">
        Mentions légales
      </h1>
      <p className="mt-3 text-sm text-[var(--muted)]">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </p>

      {!school.legal._confirmed && (
        <div className="mt-6 rounded-xl border border-[var(--accent)]/40 bg-[var(--muted-bg)] p-4 text-sm text-[var(--ink)]/85">
          <strong>Site en cours de recette.</strong> Certaines informations
          sont provisoires en attente de validation définitive par l'éditrice.
        </div>
      )}

      <div className="prose-warm mt-8 space-y-8 text-[var(--ink)]/85">
        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            1. Éditeur du site
          </h2>
          <p>
            <strong>Raison sociale :</strong> {school.legal.raisonSociale}
            <br />
            <strong>Forme juridique :</strong> {school.legal.formeJuridique}
            <br />
            <strong>SIREN :</strong> {school.legal.siren}
            <br />
            <strong>SIRET :</strong> {school.legal.siret}
            <br />
            <strong>Code APE :</strong> {school.legal.codeApe} —{" "}
            {school.legal.libelleApe}
            <br />
            <strong>TVA intracommunautaire :</strong>{" "}
            {school.legal.tvaIntracom}
            <br />
            <strong>Siège / lieu d'exercice :</strong>{" "}
            {school.contact.address.street},{" "}
            {school.contact.address.postalCode} {school.contact.address.city}
            <br />
            <strong>Téléphone :</strong> {school.contact.phoneDisplay}
            <br />
            <strong>Email :</strong>{" "}
            <a
              href={`mailto:${school.contact.email}`}
              className="underline underline-offset-2"
            >
              {school.contact.email}
            </a>
          </p>
          <p>
            <strong>Directeur de la publication :</strong>{" "}
            {school.legal.directeurPublication}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            2. Hébergeur
          </h2>
          <p>
            <strong>{school.legal.hebergeur.nom}</strong>
            <br />
            {school.legal.hebergeur.adresse}
            <br />
            Site :{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              vercel.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            3. Conception et réalisation du site
          </h2>
          <p>
            Ce site a été conçu, développé et mis en ligne par :
          </p>
          <p>
            <strong>{kayzen.raisonSociale}</strong> ({kayzen.formeJuridique})
            <br />
            Siège social : {kayzen.siegeSocial}
            <br />
            SIREN : {kayzen.siren} — SIRET : {kayzen.siret}
            <br />
            RCS : {kayzen.rcs}
            <br />
            TVA intracommunautaire : {kayzen.tvaIntracom}
            <br />
            Code APE : {kayzen.codeApe}
            <br />
            Téléphone : {kayzen.telephoneDisplay}
            <br />
            Email :{" "}
            <a
              href={`mailto:${kayzen.email}`}
              className="underline underline-offset-2"
            >
              {kayzen.email}
            </a>
            <br />
            Site :{" "}
            <a
              href={kayzen.site}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              {kayzen.site}
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            4. Propriété intellectuelle
          </h2>
          <p>
            L'ensemble des éléments du site (textes, images, logos,
            illustrations, charte graphique, code source, arborescence) est
            protégé par le droit d'auteur et la propriété intellectuelle.
            Toute reproduction, représentation, modification, publication ou
            adaptation, totale ou partielle, par quelque procédé que ce soit,
            est interdite sans l'autorisation préalable et écrite de
            l'éditrice du site.
          </p>
          <p>
            La marque « Académie de piano Bérénice » ainsi que le logotype
            associé sont la propriété exclusive de {school.legal.raisonSociale}.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            5. Données personnelles
          </h2>
          <p>
            Les informations recueillies via les formulaires de ce site sont
            traitées conformément au Règlement Général sur la Protection des
            Données (RGPD) et à la loi Informatique et Libertés. Pour connaître
            les détails des traitements, les finalités, les durées de
            conservation et vos droits, consultez la{" "}
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
            6. Cookies et traceurs
          </h2>
          <p>
            Ce site n'utilise aucun cookie publicitaire, ni cookie de traçage
            tiers. Seuls des cookies strictement nécessaires au bon
            fonctionnement du site peuvent être déposés. Pour plus
            d'informations, consultez notre{" "}
            <a
              href="/cookies"
              className="underline underline-offset-2"
            >
              politique cookies
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            7. Accessibilité
          </h2>
          <p>
            Ce site s'efforce de respecter les exigences du Référentiel
            général d'amélioration de l'accessibilité (RGAA 4.1), des Web
            Content Accessibility Guidelines (WCAG 2.1 niveau AA) et de
            l'European Accessibility Act. Un audit de conformité est en cours.
            Vous pouvez nous signaler toute difficulté d'accessibilité à
            l'adresse{" "}
            <a
              href={`mailto:${school.contact.email}`}
              className="underline underline-offset-2"
            >
              {school.contact.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            8. Droit applicable et juridiction
          </h2>
          <p>
            Le présent site et l'ensemble des relations qu'il implique sont
            régis par le droit français. En cas de litige, et à défaut de
            résolution amiable préalable, les tribunaux français seront seuls
            compétents.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            9. Médiation de la consommation
          </h2>
          <p>
            Conformément aux articles L.611-1 et suivants du Code de la
            consommation, tout consommateur a le droit de recourir gratuitement
            à un médiateur de la consommation en vue de la résolution amiable
            d'un litige. Les coordonnées du médiateur compétent seront
            communiquées sur simple demande.
          </p>
        </section>
      </div>
    </article>
    </>
  );
}
