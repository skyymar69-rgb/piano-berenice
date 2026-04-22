import type { Metadata } from "next";
import { school } from "@/lib/school";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Conditions générales de vente des prestations pédagogiques de l'Académie de piano Bérénice.",
  alternates: { canonical: "/cgv" },
};

export default function CgvPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
        Légal
      </p>
      <h1 className="mt-4 font-serif text-4xl text-[var(--primary)] sm:text-5xl">
        Conditions générales de vente
      </h1>
      <p className="mt-3 text-sm text-[var(--muted)]">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </p>

      <div className="prose-warm mt-8 space-y-8 text-[var(--ink)]/85">
        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 1 — Objet et champ d'application
          </h2>
          <p>
            Les présentes Conditions générales de vente (CGV) régissent les
            relations contractuelles entre l'Académie de piano Bérénice,
            exploitée par {school.legal.raisonSociale} (SIREN{" "}
            {school.legal.siren}), et toute personne physique ou morale
            souhaitant bénéficier de ses prestations d'enseignement musical
            (ci-après « le Client »).
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 2 — Prestations proposées
          </h2>
          <p>
            L'Académie propose des cours de piano, de solfège et d'éveil
            musical, en individuel, binôme ou en petit groupe, dispensés dans
            ses locaux situés {school.contact.address.street},{" "}
            {school.contact.address.postalCode} {school.contact.address.city}.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 3 — Inscription
          </h2>
          <p>
            L'inscription est effective après : (i) un premier rendez-vous ou
            cours d'essai ; (ii) remise d'un dossier d'inscription complet ;
            (iii) règlement des sommes dues selon les modalités convenues.
            L'inscription vaut acceptation des présentes CGV et du règlement
            intérieur de l'école remis lors de l'inscription.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 4 — Tarifs
          </h2>
          <p>
            Les tarifs sont communiqués sur demande et mentionnés dans le
            contrat d'inscription. Ils sont exprimés toutes taxes comprises
            (TTC). L'éditrice bénéficie de la franchise en base de TVA
            conformément à l'article 293 B du Code général des impôts — TVA
            non applicable.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 5 — Modalités de paiement
          </h2>
          <p>
            Les paiements sont acceptés par chèque, espèces ou virement. Les
            modalités (règlement annuel, trimestriel ou mensuel) sont
            précisées lors de l'inscription. En cas de retard de paiement,
            des pénalités de retard au taux légal en vigueur pourront être
            appliquées, sans mise en demeure préalable.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 6 — Droit de rétractation
          </h2>
          <p>
            Conformément à l'article L.221-18 du Code de la consommation,
            lorsque l'inscription est réalisée à distance (via le formulaire
            en ligne), le Client consommateur dispose d'un délai de{" "}
            <strong>quatorze (14) jours</strong> à compter de la signature du
            contrat pour exercer son droit de rétractation, sans avoir à
            motiver sa décision. En cas de demande d'exécution des
            prestations pendant ce délai, le Client peut être tenu au paiement
            des prestations déjà effectuées.
          </p>
          <p>
            Pour exercer ce droit, le Client peut adresser une demande écrite
            à {school.contact.email} ou par courrier à l'adresse de
            l'éditrice.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 7 — Absences et annulations
          </h2>
          <p>
            Les modalités de rattrapage ou de remboursement en cas d'absence
            de l'élève ou du professeur sont définies dans le règlement
            intérieur remis à l'inscription.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 8 — Résiliation
          </h2>
          <p>
            Le contrat d'inscription peut être résilié par l'une ou l'autre
            partie pour motif légitime, moyennant un préavis écrit d'un mois.
            En cas de manquement grave du Client (non-paiement, comportement
            portant atteinte au bon fonctionnement de l'école), l'Académie se
            réserve le droit de résilier le contrat sans préavis.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 9 — Responsabilité
          </h2>
          <p>
            L'Académie est tenue d'une obligation de moyens et non de
            résultat. Elle ne saurait être tenue responsable des cas de force
            majeure entraînant l'interruption temporaire ou définitive des
            cours.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 10 — Médiation & litiges
          </h2>
          <p>
            Conformément aux articles L.611-1 et suivants du Code de la
            consommation, le Client consommateur peut recourir gratuitement à
            un médiateur de la consommation en vue de la résolution amiable
            d'un litige. Les coordonnées du médiateur compétent peuvent être
            communiquées sur simple demande.
          </p>
          <p>
            À défaut de résolution amiable, tout litige relève de la
            compétence exclusive des tribunaux français.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Article 11 — Données personnelles
          </h2>
          <p>
            Le traitement des données personnelles du Client est détaillé
            dans la{" "}
            <a
              href="/politique-confidentialite"
              className="underline underline-offset-2"
            >
              politique de confidentialité
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
