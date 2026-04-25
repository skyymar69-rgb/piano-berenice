import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Picture } from "@/components/Picture";
import { school } from "@/lib/school";

export const metadata: Metadata = {
  title: "Cours de piano à Cimiez (Nice) — Académie Bérénice",
  description:
    "Cours de piano à Cimiez, Nice : Académie Bérénice au 59 boulevard de Cimiez, à deux pas des arènes et du monastère. Piano, solfège et éveil musical depuis 1994.",
  alternates: { canonical: "/cours-piano-cimiez" },
};

export default function CimiezPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Cours de piano à Cimiez", href: "/cours-piano-cimiez" }]} />
      <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Quartier de Cimiez · Nice
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          Cours de piano à Cimiez, au cœur du 06000
        </h1>
        <p className="drop-cap mt-5 max-w-2xl text-lg text-[var(--ink)]/80">
          L'Académie de piano Bérénice est implantée depuis 1994 au 59 boulevard
          de Cimiez à Nice, dans le quartier résidentiel le plus prestigieux de
          la ville. Une école à taille humaine, à deux pas des arènes romaines
          et du monastère de Cimiez.
        </p>
      </section>

      <section className="mx-auto my-12 grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="heading-bar font-serif text-3xl text-[var(--primary)]">
            Pourquoi Cimiez ?
          </h2>
          <p className="mt-4 text-[var(--ink)]/85">
            Cimiez est l'un des quartiers les plus calmes de Nice : verdure,
            architecture Belle Époque, atmosphère résidentielle. C'est l'environnement
            idéal pour un cours de musique : aucune nuisance sonore extérieure,
            stationnement aisé, accès en bus rapide depuis la promenade des Anglais
            comme depuis le nord de Nice.
          </p>
          <p className="mt-3 text-[var(--ink)]/85">
            L'Académie occupe trois salles dédiées au 59 bd de Cimiez :
            une salle de piano avec piano à queue, une salle d'éveil
            musical et d'audition, et une salle de solfège en groupe.
          </p>
          <h3 className="mt-8 font-serif text-xl text-[var(--primary)]">
            Accès et stationnement
          </h3>
          <ul className="mt-3 space-y-2 text-[var(--ink)]/80">
            <li className="flex gap-2"><span className="text-[var(--accent)]">→</span> Bus 5 — arrêt Prince de Galles</li>
            <li className="flex gap-2"><span className="text-[var(--accent)]">→</span> Bus 33, 40, 70 — arrêt Victoria</li>
            <li className="flex gap-2"><span className="text-[var(--accent)]">→</span> Stationnement résidentiel facile</li>
            <li className="flex gap-2"><span className="text-[var(--accent)]">→</span> 8 minutes en voiture du centre Massena</li>
          </ul>
        </div>
        <div className="space-y-4">
          <figure className="overflow-hidden rounded-2xl salon-frame">
            <Picture image="berenicePiano" sizes="(min-width:1024px) 480px, 100vw" />
          </figure>
          <figure className="overflow-hidden rounded-2xl salon-frame">
            <Picture image="salleAudition" sizes="(min-width:1024px) 480px, 100vw" />
          </figure>
        </div>
      </section>

      <section className="mx-auto my-16 max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bar font-serif text-3xl text-[var(--primary)]">
          Cours proposés à Cimiez
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Link href="/cours/piano" prefetch className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Enfants · ados · adultes</p>
            <h3 className="mt-2 font-serif text-2xl text-[var(--primary)]">Piano</h3>
            <p className="mt-2 text-sm text-[var(--ink)]/80">Cours individuel ou en binôme. Tous niveaux du débutant à la préparation du bac option musique.</p>
          </Link>
          <Link href="/cours/solfege" prefetch className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">En groupe</p>
            <h3 className="mt-2 font-serif text-2xl text-[var(--primary)]">Solfège</h3>
            <p className="mt-2 text-sm text-[var(--ink)]/80">Lecture, rythme, écoute. Ouvert aux pianistes mais aussi guitaristes, batteurs, chanteurs.</p>
          </Link>
          <Link href="/cours/eveil-musical" prefetch className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Dès 5 ans</p>
            <h3 className="mt-2 font-serif text-2xl text-[var(--primary)]">Éveil musical</h3>
            <p className="mt-2 text-sm text-[var(--ink)]/80">Jouer, chanter, écouter, rythmer. Les enfants choisissent leurs musiques.</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto my-16 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--muted-bg)] to-[var(--surface)] p-8 sm:p-12">
          <h2 className="heading-bar font-serif text-2xl text-[var(--primary)] sm:text-3xl">
            Inscriptions ouvertes pour la rentrée 2026 – 2027
          </h2>
          <p className="mt-4 text-[var(--ink)]/80">
            Reprise des cours le mardi 8 septembre 2026. Permanences d'inscription
            les mercredi 2 et vendredi 4 septembre. Bérénice vous reçoit sur
            rendez-vous tout au long de l'année.
          </p>
          <Link
            href="/inscription"
            prefetch
            className="magnetic-cta mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-medium text-[var(--primary-contrast)] transition hover:bg-[var(--primary-hover)]"
          >
            S'inscrire pour la rentrée
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
