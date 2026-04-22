import type { Metadata } from "next";
import Link from "next/link";
import { school } from "@/lib/school";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Académie de piano Bérénice, Nice",
  description:
    "Nous contacter à l'Académie de piano Bérénice : téléphone, email, formulaire en ligne. Nice — 59 boulevard de Cimiez.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Contact
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
          Nous contacter
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--ink)]/80">
          Pour une inscription, un cours d'essai ou une simple question —
          choisissez le canal qui vous convient.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
        <div className="space-y-5">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Téléphone
            </p>
            <a
              href={`tel:${school.contact.phone.replace(/\s+/g, "")}`}
              className="mt-2 block font-serif text-2xl text-[var(--primary)] hover:text-[var(--accent)]"
            >
              Mobile — {school.contact.phoneDisplay}
            </a>
            <a
              href={`tel:${school.contact.phoneLandline.replace(/\s+/g, "")}`}
              className="mt-1 block font-serif text-lg text-[var(--primary)] hover:text-[var(--accent)]"
            >
              Fixe — {school.contact.phoneLandline}
            </a>
            <p className="mt-2 text-xs text-[var(--muted)]">
              {school.contact.hours.inscription}
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Email
            </p>
            <a
              href={`mailto:${school.contact.email}`}
              className="mt-2 block break-all font-serif text-xl text-[var(--primary)] hover:text-[var(--accent)]"
            >
              {school.contact.email}
            </a>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Sur place
            </p>
            <p className="mt-2 text-base text-[var(--primary)]">
              {school.contact.address.street}
            </p>
            <p className="text-sm text-[var(--ink)]/80">
              {school.contact.address.postalCode}{" "}
              {school.contact.address.city} —{" "}
              {school.contact.address.complement}
            </p>
            <Link
              href="/plan-acces"
              className="mt-3 inline-block text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)]"
            >
              Plan d'accès →
            </Link>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Réseaux
            </p>
            <a
              href={school.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-base text-[var(--primary)] hover:text-[var(--accent)]"
            >
              Facebook — Académie de piano Bérénice ↗
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-7">
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Formulaire
          </h2>
          <p className="mt-2 text-sm text-[var(--ink)]/80">
            Une question précise ? Utilisez ce formulaire. Pour demander un
            cours d'essai, préférez le{" "}
            <Link
              href="/inscription"
              className="font-medium text-[var(--primary)] underline underline-offset-2 hover:text-[var(--accent)]"
            >
              parcours dédié
            </Link>
            .
          </p>
          <div className="mt-6">
            <ContactForm variant="general" />
          </div>
        </div>
      </section>
    </>
  );
}
