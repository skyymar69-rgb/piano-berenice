"use client";

import { useActionState } from "react";
import { submitContact } from "@/lib/actions";

export function ContactForm({
  variant: _variant = "general",
}: {
  variant?: "general";
}) {
  const [state, formAction, pending] = useActionState(submitContact, null);

  if (state?.ok) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-[var(--accent)]/40 bg-white p-5 text-sm text-[var(--ink)]"
      >
        <p className="font-serif text-lg text-[var(--primary)]">
          Message bien reçu.
        </p>
        <p className="mt-2">
          Référence : <strong>{state.reference}</strong>. Bérénice vous
          répondra sous 48 h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4" noValidate>
      {/* Honeypot */}
      <div aria-hidden className="hidden">
        <label>
          Ne pas remplir
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>

      <Field label="Nom" name="name" required autoComplete="name" />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        autoComplete="email"
      />
      <Field label="Téléphone (optionnel)" name="phone" type="tel" autoComplete="tel" />
      <label className="block">
        <span className="block text-sm font-medium text-[var(--primary)]">
          Message <span aria-hidden className="text-[var(--accent)]">*</span>
        </span>
        <textarea
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30"
        />
      </label>

      <Consent />

      {state?.ok === false && (
        <p role="alert" className="text-sm text-red-700">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Envoi en cours…" : "Envoyer"}
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

function Consent() {
  return (
    <label className="flex gap-3 text-sm text-[var(--ink)]/85">
      <input
        type="checkbox"
        name="consent"
        required
        className="mt-1 size-4 rounded border-[var(--border)] accent-[var(--primary)]"
      />
      <span>
        J'accepte que mes informations soient utilisées uniquement pour
        répondre à ma demande, conformément à la{" "}
        <a
          href="/politique-confidentialite"
          className="underline underline-offset-2 hover:text-[var(--accent)]"
        >
          politique de confidentialité
        </a>
        .
      </span>
    </label>
  );
}
