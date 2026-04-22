"use server";

import { school } from "./school";

type Status = { ok: true; reference: string } | { ok: false; error: string };

function genRef(prefix: string) {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${n}`;
}

async function sendEmail(subject: string, text: string, html: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ADMIN_EMAIL || school.contact.email;
  const from = process.env.RESEND_FROM || "onboarding@resend.dev";
  if (!apiKey) {
    console.log("[email-fallback]", { to, subject, text });
    return { ok: true as const, via: "log" };
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
      html,
      reply_to: school.contact.email,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    console.error("resend failed:", err);
    return { ok: false as const, error: err };
  }
  return { ok: true as const, via: "resend" };
}

export async function submitEnrollment(
  _prev: Status | null,
  formData: FormData,
): Promise<Status> {
  // Honeypot
  const honeypot = String(formData.get("website") || "");
  if (honeypot.trim() !== "") {
    return { ok: false, error: "Requête invalide." };
  }

  const offers = formData.getAll("offer").map(String);
  const firstName = String(formData.get("firstName") || "").trim();
  const lastName = String(formData.get("lastName") || "").trim();
  const birthDate = String(formData.get("birthDate") || "").trim();
  const level = String(formData.get("level") || "").trim();
  const guardianName = String(formData.get("guardianName") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const availability = String(formData.get("availability") || "").trim();
  const experience = String(formData.get("experience") || "").trim();
  const motivation = String(formData.get("motivation") || "").trim();
  const wantsTrial = formData.get("wantsTrial") === "on";
  const consent = formData.get("consent") === "on";
  const consentMinor = formData.get("consentMinor") === "on";

  if (!firstName || !lastName || !email || !phone || offers.length === 0) {
    return { ok: false, error: "Merci de renseigner tous les champs requis." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Adresse email invalide." };
  }
  if (!consent) {
    return {
      ok: false,
      error: "Merci d'accepter la politique de confidentialité.",
    };
  }

  // Mineur ?
  let isMinor = false;
  if (birthDate) {
    const d = new Date(birthDate);
    if (!Number.isNaN(d.getTime())) {
      const ageMs = Date.now() - d.getTime();
      const age = ageMs / (365.25 * 24 * 3600 * 1000);
      isMinor = age < 18;
    }
  }
  if (isMinor && !consentMinor) {
    return {
      ok: false,
      error:
        "Pour un élève mineur, le consentement explicite du représentant légal est requis.",
    };
  }

  const reference = genRef("APB");
  const subject = `[Inscription ${reference}] ${firstName} ${lastName} — ${offers.join(", ")}`;

  const lines = [
    `Référence : ${reference}`,
    "",
    `Discipline(s) : ${offers.join(", ")}`,
    `Élève : ${firstName} ${lastName}`,
    birthDate ? `Date de naissance : ${birthDate}${isMinor ? " (mineur)" : ""}` : "",
    level ? `Niveau : ${level}` : "",
    isMinor ? `Représentant légal : ${guardianName || "non précisé"}` : "",
    `Téléphone : ${phone}`,
    `Email : ${email}`,
    availability ? `Disponibilités : ${availability}` : "",
    experience ? `Expérience : ${experience}` : "",
    motivation ? `Motivation : ${motivation}` : "",
    wantsTrial ? "✔ Souhaite un cours d'essai" : "",
    "",
    `Consentement RGPD : oui`,
    `Consentement mineur : ${consentMinor ? "oui" : "n/a"}`,
    `Date : ${new Date().toLocaleString("fr-FR")}`,
  ]
    .filter(Boolean)
    .join("\n");

  const html = lines.replace(/\n/g, "<br/>");

  await sendEmail(subject, lines, html);
  return { ok: true, reference };
}

export async function submitContact(
  _prev: Status | null,
  formData: FormData,
): Promise<Status> {
  const honeypot = String(formData.get("website") || "");
  if (honeypot.trim() !== "") {
    return { ok: false, error: "Requête invalide." };
  }

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const consent = formData.get("consent") === "on";

  if (!name || !email || !message) {
    return { ok: false, error: "Merci de renseigner tous les champs requis." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Adresse email invalide." };
  }
  if (!consent) {
    return {
      ok: false,
      error: "Merci d'accepter la politique de confidentialité.",
    };
  }

  const reference = genRef("MSG");
  const subject = `[Contact ${reference}] ${name}`;
  const lines = [
    `Référence : ${reference}`,
    `Nom : ${name}`,
    `Email : ${email}`,
    phone ? `Téléphone : ${phone}` : "",
    "",
    "Message :",
    message,
    "",
    `Date : ${new Date().toLocaleString("fr-FR")}`,
  ]
    .filter(Boolean)
    .join("\n");
  const html = lines.replace(/\n/g, "<br/>");
  await sendEmail(subject, lines, html);
  return { ok: true, reference };
}
