import Link from "next/link";
import { school } from "@/lib/school";
import { Picture } from "@/components/Picture";
import { AudioFeature } from "@/components/AudioFeature";

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
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--muted-bg)] via-[var(--background)] to-[var(--background)]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[3fr,2fr] lg:gap-12 lg:px-8 lg:pb-24 lg:pt-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Depuis {school.brand.foundedYear} · Nice · Cimiez
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] text-[var(--primary)] sm:text-5xl lg:text-6xl">
              Le piano s'apprend avec méthode,
              <br />
              <span className="text-[var(--accent)]">et avec plaisir.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--ink)]/80">
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
                <dt className="text-[var(--muted)]">Ouverte depuis</dt>
                <dd className="mt-1 font-serif text-2xl text-[var(--primary)]">
                  {school.brand.foundedYear}
                </dd>
              </div>
              <div>
                <dt className="text-[var(--muted)]">Disciplines</dt>
                <dd className="mt-1 font-serif text-2xl text-[var(--primary)]">
                  3
                </dd>
              </div>
              <div>
                <dt className="text-[var(--muted)]">Âge minimum</dt>
                <dd className="mt-1 font-serif text-2xl text-[var(--primary)]">
                  5 ans
                </dd>
              </div>
              <div>
                <dt className="text-[var(--muted)]">Quartier</dt>
                <dd className="mt-1 font-serif text-2xl text-[var(--primary)]">
                  Cimiez
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-3xl border border-[var(--border)] shadow-[var(--shadow)]">
              <Picture
                image="berenicePortrait"
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-56 overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)] lg:block">
              <div className="aspect-[4/3]">
                <Picture
                  image="partitionRose"
                  sizes="220px"
                />
              </div>
            </div>
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

      {/* AUDIO */}
      <AudioFeature />

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
