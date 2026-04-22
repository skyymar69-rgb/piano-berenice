"use client";

import { useActionState, useState } from "react";
import { submitEnrollment } from "@/lib/actions";

const offersList = [
  { value: "piano", label: "Cours de piano" },
  { value: "solfege", label: "Cours de solfège" },
  { value: "eveil", label: "Éveil musical" },
];

const levels = [
  { value: "debutant", label: "Débutant(e)" },
  { value: "1_3_ans", label: "1 à 3 ans de pratique" },
  { value: "3_plus_ans", label: "Plus de 3 ans" },
  { value: "avance", label: "Niveau avancé" },
];

export function EnrollmentForm() {
  const [state, formAction, pending] = useActionState(submitEnrollment, null);
  const [birthDate, setBirthDate] = useState("");

  const isMinor = (() => {
    if (!birthDate) return false;
    const d = new Date(birthDate);
    if (Number.isNaN(d.getTime())) return false;
    const age = (Date.now() - d.getTime()) / (365.25 * 24 * 3600 * 1000);
    return age < 18;
  })();

  if (state?.ok) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-[var(--accent)]/40 bg-white p-8 text-center"
      >
        <p className="font-serif text-3xl text-[var(--primary)]">Merci !</p>
        <p className="mt-3 text-sm text-[var(--ink)]/80">
          Votre demande a bien été transmise.
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
          Numéro de suivi
        </p>
        <p className="mt-1 font-serif text-4xl tracking-wide text-[var(--accent)]">
          {state.reference}
        </p>
        <p className="mx-auto mt-6 max-w-md text-sm text-[var(--ink)]/80">
          Bérénice vous recontactera personnellement sous 48 h ouvrées pour
          convenir d'un premier rendez-vous. Un email vient d'être envoyé avec
          ce numéro — pensez à vérifier vos spams.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8" noValidate>
      {/* Honeypot */}
      <div aria-hidden className="hidden">
        <label>
          Laisser vide
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>

      <fieldset className="rounded-2xl border border-[var(--border)] bg-white/70 p-6">
        <legend className="px-2 font-serif text-xl text-[var(--primary)]">
          Discipline(s) souhaitée(s)
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {offersList.map((o) => (
            <label
              key={o.value}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm transition has-[:checked]:border-[var(--accent)] has-[:checked]:bg-[var(--muted-bg)]"
            >
              <input
                type="checkbox"
                name="offer"
                value={o.value}
                className="size-4 rounded border-[var(--border)] accent-[var(--primary)]"
              />
              <span className="font-medium text-[var(--primary)]">
                {o.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="rounded-2xl border border-[var(--border)] bg-white/70 p-6">
        <legend className="px-2 font-serif text-xl text-[var(--primary)]">
          Informations sur l'élève
        </legend>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <Field label="Prénom" name="firstName" required autoComplete="given-name" />
          <Field label="Nom" name="lastName" required autoComplete="family-name" />
          <label className="block">
            <span className="block text-sm font-medium text-[var(--primary)]">
              Date de naissance
            </span>
            <input
              name="birthDate"
              type="date"
              autoComplete="bday"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-[var(--primary)]">
              Niveau actuel
            </span>
            <select
              name="level"
              defaultValue=""
              className="mt-1.5 w-full rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30"
            >
              <option value="" disabled>
                Sélectionner…
              </option>
              {levels.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {isMinor && (
          <div className="mt-5 rounded-xl border border-[var(--accent)]/40 bg-[var(--muted-bg)] p-4">
            <p className="text-sm font-medium text-[var(--primary)]">
              Élève mineur — coordonnées du représentant légal
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Field
                label="Nom et prénom du représentant légal"
                name="guardianName"
                required
              />
            </div>
          </div>
        )}
      </fieldset>

      <fieldset className="rounded-2xl border border-[var(--border)] bg-white/70 p-6">
        <legend className="px-2 font-serif text-xl text-[var(--primary)]">
          Vos coordonnées
        </legend>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <Field label="Email" name="email" type="email" required autoComplete="email" />
          <Field label="Téléphone" name="phone" type="tel" required autoComplete="tel" />
        </div>
      </fieldset>

      <fieldset className="rounded-2xl border border-[var(--border)] bg-white/70 p-6">
        <legend className="px-2 font-serif text-xl text-[var(--primary)]">
          Disponibilités & motivations
        </legend>
        <div className="mt-3 space-y-4">
          <label className="block">
            <span className="block text-sm font-medium text-[var(--primary)]">
              Jours et créneaux préférés (ex. : mercredi après-midi, samedi
              matin…)
            </span>
            <textarea
              name="availability"
              rows={2}
              className="mt-1.5 w-full rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-[var(--primary)]">
              Expérience musicale antérieure (optionnel)
            </span>
            <textarea
              name="experience"
              rows={2}
              className="mt-1.5 w-full rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-[var(--primary)]">
              Qu'est-ce qui vous (ou votre enfant) donne envie d'apprendre la
              musique ? (optionnel)
            </span>
            <textarea
              name="motivation"
              rows={3}
              maxLength={500}
              className="mt-1.5 w-full rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30"
            />
          </label>
          <label className="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              name="wantsTrial"
              defaultChecked
              className="size-4 rounded border-[var(--border)] accent-[var(--primary)]"
            />
            <span>Je souhaite réserver un cours d'essai</span>
          </label>
        </div>
      </fieldset>

      <div className="space-y-3 rounded-2xl border border-[var(--border)] bg-white/70 p-6">
        <label className="flex gap-3 text-sm text-[var(--ink)]/85">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 size-4 rounded border-[var(--border)] accent-[var(--primary)]"
          />
          <span>
            J'accepte que mes données soient traitées par l'Académie de piano
            Bérénice pour répondre à ma demande d'inscription, conformément à
            la{" "}
            <a
              href="/politique-confidentialite"
              className="underline underline-offset-2 hover:text-[var(--accent)]"
            >
              politique de confidentialité
            </a>
            . <span aria-hidden className="text-[var(--accent)]">*</span>
          </span>
        </label>
        {isMinor && (
          <label className="flex gap-3 text-sm text-[var(--ink)]/85">
            <input
              type="checkbox"
              name="consentMinor"
              required
              className="mt-1 size-4 rounded border-[var(--border)] accent-[var(--primary)]"
            />
            <span>
              En tant que représentant légal, j'autorise la collecte et le
              traitement des données personnelles de l'élève mineur mentionné
              ci-dessus. <span aria-hidden className="text-[var(--accent)]">*</span>
            </span>
          </label>
        )}
      </div>

      {state?.ok === false && (
        <p role="alert" className="text-sm text-red-700">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-[var(--primary)] px-6 py-4 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[var(--primary)]">
        {label}{" "}
        {required && (
          <span aria-hidden className="text-[var(--accent)]">
            *
          </span>
        )}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30"
      />
    </label>
  );
}
