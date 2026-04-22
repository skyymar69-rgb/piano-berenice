import Link from "next/link";
import { school } from "@/lib/school";
import { Picture } from "@/components/Picture";
import { QuoteCard } from "@/components/QuoteCard";
import { RelatedLinks } from "@/components/RelatedLinks";
import { WebSiteJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { StatusBadge } from "@/components/StatusBadge";
import { SocialProof } from "@/components/SocialProof";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";

const homeFaqs = [
  {
    question: "Où se trouve l'Académie de piano Bérénice ?",
    answer:
      "L'Académie est située au 59 boulevard de Cimiez, 06000 Nice, dans le quartier résidentiel de Cimiez, avec entrée dans l'impasse. Accès en bus via les lignes 5 (arrêt Prince de Galles), 33, 40 et 70 (arrêt Victoria).",
  },
  {
    question: "Quels cours propose l'Académie de piano Bérénice ?",
    answer:
      "Trois disciplines : cours de piano (individuels ou en binôme, pour enfants, adolescents et adultes), cours de solfège (en groupe, ouverts aux pianistes comme aux autres instrumentistes) et éveil musical et instrumental à partir de 5 ans.",
  },
  {
    question: "Depuis combien d'années l'école existe-t-elle ?",
    answer:
      "L'Académie de piano Bérénice est ouverte depuis novembre 1994, soit plus de trente ans d'enseignement du piano, du solfège et de l'éveil musical à Nice.",
  },
  {
    question: "Qui est la professeure ?",
    answer:
      "Bérénice Lecardeur, Médaille d'Or de piano de l'Académie de Musique Prince Rainier III de Monaco et Prix de perfectionnement du Conservatoire National de Région de Nice. Elle a été professeure agréée de la fonction publique recrutée sur concours national.",
  },
  {
    question: "Peut-on commencer le piano adulte ?",
    answer:
      "Oui, on peut commencer le piano à tout âge. Les méthodes actuelles permettent à un adulte débutant de trouver du plaisir dès les premiers cours. Les cours adultes sont individuels.",
  },
  {
    question: "Comment prendre un cours d'essai ?",
    answer:
      "Remplissez le formulaire en ligne sur la page inscription. Bérénice vous recontacte personnellement sous 48 heures ouvrées pour convenir d'un premier rendez-vous, sans engagement.",
  },
];

const offers = [
  {
    href: "/cours/piano",
    tag: "Enfants · ados · adultes",
    title: "Cours de piano",
    description:
      "Cours individuel ou en binôme, du premier contact au niveau avancé. Préparation à l'épreuve piano du baccalauréat option musique.",
  },
  {
    href: "/cours/solfege",
    tag: "En groupe",
    title: "Cours de solfège",
    description:
      "Lecture de partition, rythme et écoute. Ouvert aux pianistes, mais aussi aux guitaristes, batteurs et chanteurs.",
  },
  {
    href: "/cours/eveil-musical",
    tag: "À partir de 5 ans",
    title: "Éveil musical et instrumental",
    description:
      "Jouer, chanter, écouter, rythmer. Les enfants jouent du piano dès le premier cours et choisissent eux-mêmes leurs musiques.",
  },
];

const steps = [
  {
    title: "Prise de contact",
    text: "Vous remplissez le formulaire en ligne ou nous téléphonez. Réponse personnalisée sous 48 h ouvrées.",
  },
  {
    title: "Cours d'essai",
    text: "On se rencontre à l'Académie pour un cours d'essai. Vous découvrez la méthode, l'élève rencontre son futur professeur.",
  },
  {
    title: "Inscription",
    text: "Si le courant passe, on fixe les créneaux hebdomadaires et on démarre. Sinon, aucun engagement.",
  },
  {
    title: "Audition annuelle",
    text: "Chaque année, les élèves se produisent devant leurs proches. Une étape qui compte, dans une ambiance bienveillante.",
  },
];

export default function HomePage() {
  return (
    <>
      <WebSiteJsonLd />
      <FaqJsonLd faqs={homeFaqs} />
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--muted-bg)] via-[var(--background)] to-[var(--background)]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.3fr,1fr] lg:gap-12 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="flex flex-col justify-center">
            <StatusBadge />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Depuis {school.brand.foundedYear} · Nice · Cimiez
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.05] text-[var(--primary)] sm:text-5xl lg:text-6xl">
              Le piano s'apprend avec méthode,
              <br />
              <span className="text-[var(--accent)]">et avec plaisir.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--ink)]/80">
              L'Académie de piano Bérénice accueille enfants, adolescents et
              adultes à Nice Cimiez pour des cours de piano, de solfège et
              d'éveil musical. Une école à taille humaine, tenue depuis plus
              de trente ans par {school.teacher.fullName}.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/inscription"
                className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-[var(--primary-contrast)] transition hover:bg-[var(--primary-hover)]"
              >
                Demander un cours d'essai
              </Link>
              <Link
                href="/cours/piano"
                className="rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-6 py-3 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
              >
                Découvrir les cours
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-6 text-sm sm:grid-cols-4">
              <div>
                <dt className="text-[var(--muted)]">Depuis</dt>
                <dd className="mt-1 font-serif text-2xl text-[var(--primary)]">
                  <Counter to={school.brand.foundedYear} duration={1200} />
                </dd>
              </div>
              <div>
                <dt className="text-[var(--muted)]">Années d'école</dt>
                <dd className="mt-1 font-serif text-2xl text-[var(--primary)]">
                  <Counter to={new Date().getFullYear() - school.brand.foundedYear} suffix=" ans" />
                </dd>
              </div>
              <div>
                <dt className="text-[var(--muted)]">Disciplines</dt>
                <dd className="mt-1 font-serif text-2xl text-[var(--primary)]">
                  <Counter to={3} />
                </dd>
              </div>
              <div>
                <dt className="text-[var(--muted)]">Âge min.</dt>
                <dd className="mt-1 font-serif text-2xl text-[var(--primary)]">
                  <Counter to={5} suffix=" ans" />
                </dd>
              </div>
            </dl>
          </div>
          {/* Mosaïque — composition équilibrée, portrait discret */}
          <div className="relative grid grid-cols-6 grid-rows-6 gap-3 sm:gap-4">
            <figure className="col-span-4 row-span-4 overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)]">
              <Picture
                image="stockTouchesPiano"
                priority
                sizes="(min-width:1024px) 320px, 66vw"
              />
            </figure>
            <figure className="col-span-2 row-span-3 overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)]">
              <Picture
                image="stockPartitionSolfege"
                sizes="(min-width:1024px) 160px, 33vw"
              />
            </figure>
            <figure className="col-span-2 row-span-3 overflow-hidden rounded-2xl border border-2 border-[var(--accent)] shadow-[var(--shadow)]">
              <Picture
                image="berenicePortrait"
                sizes="(min-width:1024px) 160px, 33vw"
              />
            </figure>
            <figure className="col-span-6 row-span-2 overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)]">
              <Picture
                image="partitionRose"
                sizes="(min-width:1024px) 480px, 100vw"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* RENTRÉE BANNER */}
      <section className="border-y border-[var(--border)] bg-[var(--primary)] text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="text-sm">
            <span className="font-semibold text-[var(--accent)]">Rentrée {school.academicYear.label}</span>{" "}
            · Reprise des cours le{" "}
            <time dateTime={school.academicYear.startDate}>9 septembre 2025</time>.
            Inscriptions : {school.academicYear.registrationDates.join(" · ")}.
          </p>
          <Link
            href="/inscription"
            className="text-sm font-medium text-white underline-offset-4 hover:underline"
          >
            Je m'inscris →
          </Link>
        </div>
      </section>

      {/* EN BREF — answer-first / GEO quotable */}
      <QuoteCard
        intro="L'Académie de piano Bérénice est une école de musique indépendante située au 59 boulevard de Cimiez à Nice, fondée en 1994 par Bérénice Lecardeur, Médaille d'Or du Conservatoire Prince Rainier III de Monaco. Elle enseigne le piano, le solfège et l'éveil musical aux enfants dès 5 ans, aux adolescents et aux adultes de tous niveaux."
        facts={[
          { term: "Adresse", value: "59 bd de Cimiez, 06000 Nice" },
          { term: "Téléphone", value: "06 81 84 27 23" },
          { term: "Fondée en", value: "1994" },
          { term: "Disciplines", value: "Piano · Solfège · Éveil musical" },
          { term: "Âge minimum", value: "5 ans" },
          { term: "Format", value: "Individuel, binôme ou groupe" },
        ]}
      />

      {/* OFFRES */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Nos cours
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--primary)] sm:text-4xl">
              Trois disciplines, une même exigence
            </h2>
          </div>
          <Link
            href="/tarifs"
            className="hidden text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] sm:inline"
          >
            Voir les tarifs →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {offers.map((o) => (
            <Link
              key={o.href}
              href={o.href}
              className="group flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-6 transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-lg hover:shadow-[var(--accent)]/10"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                {o.tag}
              </span>
              <h3 className="font-serif text-2xl text-[var(--primary)]">
                {o.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--ink)]/80">
                {o.description}
              </p>
              <span className="mt-auto text-sm font-medium text-[var(--primary)] transition group-hover:text-[var(--accent)]">
                En savoir plus →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* PROF */}
      <section className="bg-[var(--muted-bg)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8 lg:py-24">
          <div className="lg:col-span-2">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)]">
              <Picture
                image="berenicePiano"
                sizes="(min-width: 1024px) 400px, 100vw"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Le professeur
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--primary)] sm:text-4xl">
              {school.teacher.fullName}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--ink)]/85">
              Médaille d'Or de piano de l'Académie de Musique Prince Rainier III
              de Monaco et Prix de perfectionnement du Conservatoire National de
              Région de Nice. Ancienne professeure agréée de la fonction
              publique, Bérénice enseigne le piano, le solfège et l'éveil
              musical depuis plus de trente ans dans son académie du boulevard
              de Cimiez.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[var(--ink)]/80">
              {school.teacher.credentials.slice(0, 3).map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-1 inline-block size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/professeur"
              className="mt-8 inline-flex rounded-full border border-[var(--primary)]/20 bg-white px-5 py-2.5 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--accent)]"
            >
              Découvrir son parcours →
            </Link>
          </div>
        </div>
      </section>

      {/* DÉROULÉ */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Comment ça se passe
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl text-[var(--primary)] sm:text-4xl">
          De votre première question à la scène de l'audition
        </h2>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 p-6"
            >
              <span className="font-serif text-5xl text-[var(--accent)]/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-xl text-[var(--primary)]">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/80">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* GALERIE LIEUX */}
      <section className="bg-[var(--muted-bg)]/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Le lieu
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl text-[var(--primary)] sm:text-4xl">
            Trois salles dédiées, au cœur de Cimiez
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--ink)]/80">
            Une salle de piano principale avec piano à queue, une salle
            d'éveil musical et d'audition, et une salle de solfège en groupe.
            Tout se passe dans le même lieu, au 59 boulevard de Cimiez.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <figure className="group overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)]">
              <div className="aspect-[4/3] transition duration-500 group-hover:scale-105">
                <Picture image="sallePianoDecor" sizes="(min-width:1024px) 380px, 100vw" />
              </div>
              <figcaption className="bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]/85">
                Salle de cours de piano avec piano à queue
              </figcaption>
            </figure>
            <figure className="group overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)]">
              <div className="aspect-[4/3] transition duration-500 group-hover:scale-105">
                <Picture image="salleAudition" sizes="(min-width:1024px) 380px, 100vw" />
              </div>
              <figcaption className="bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]/85">
                Salle d'éveil musical et d'audition
              </figcaption>
            </figure>
            <figure className="group overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)]">
              <div className="aspect-[4/3] transition duration-500 group-hover:scale-105">
                <Picture image="salleSolfege" sizes="(min-width:1024px) 380px, 100vw" />
              </div>
              <figcaption className="bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)]/85">
                Salle de solfège en groupe
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* LOCALISATION */}
      <section className="bg-[var(--primary)] text-[var(--primary-contrast)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Où nous trouver
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Au cœur de Cimiez, à deux pas des arènes
            </h2>
            <p className="mt-5 text-base text-white/80">
              L'Académie se trouve au {school.contact.address.street}, à Nice.{" "}
              <strong>Entrée dans l'impasse.</strong> Plusieurs lignes de bus
              desservent le quartier, et la station Prince de Galles est à
              quelques minutes à pied.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/85">
              {school.contact.transit.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 inline-block size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/plan-acces"
              className="mt-8 inline-flex rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition hover:border-[var(--accent)]"
            >
              Plan d'accès détaillé →
            </Link>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Carte — Académie de piano Bérénice"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                school.contact.address.longitude - 0.005
              }%2C${school.contact.address.latitude - 0.003}%2C${
                school.contact.address.longitude + 0.005
              }%2C${
                school.contact.address.latitude + 0.003
              }&layer=mapnik&marker=${school.contact.address.latitude}%2C${school.contact.address.longitude}`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ — questions fréquentes */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Questions fréquentes
        </p>
        <h2 className="mt-3 font-serif text-3xl text-[var(--primary)] sm:text-4xl">
          Vos questions, nos réponses
        </h2>
        <div className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {homeFaqs.map((f) => (
            <details
              key={f.question}
              className="group py-4"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-4 py-1 font-serif text-lg text-[var(--primary)] marker:hidden">
                <span>{f.question}</span>
                <svg
                  aria-hidden
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="mt-1 shrink-0 text-[var(--accent)] transition group-open:rotate-180"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-[var(--ink)]/80">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* PROOF — présence sur annuaires externes */}
      <SocialProof />

      {/* RELATED — maillage interne */}
      <RelatedLinks
        links={[
          {
            href: "/professeur",
            title: "Le professeur",
            description:
              "Découvrez le parcours de Bérénice Lecardeur — diplômes, expérience et philosophie pédagogique.",
          },
          {
            href: "/cours/piano",
            title: "Cours de piano",
            description:
              "Cours individuels ou en binôme pour enfants, ados et adultes — méthode individualisée.",
          },
          {
            href: "/plan-acces",
            title: "Plan d'accès",
            description:
              "59 boulevard de Cimiez, Nice — accès en bus, repères et plan détaillé.",
          },
        ]}
      />

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--muted-bg)] to-white px-8 py-14 text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl text-[var(--primary)] sm:text-4xl">
            On commence quand vous voulez.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[var(--ink)]/80">
            Remplissez le formulaire en ligne — vous serez rappelé(e) sous 48 h
            ouvrées par Bérénice pour convenir d'un premier rendez-vous.
          </p>
          <Link
            href="/inscription"
            className="mt-8 inline-flex rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)]"
          >
            Demander un cours d'essai
          </Link>
        </div>
      </section>
    </>
  );
}
