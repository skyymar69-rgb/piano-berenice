import { school } from "@/lib/school";
import { logoVcardBase64 } from "@/lib/logo-vcard-base64";

export const dynamic = "force-static";

function vcardLine(...parts: string[]) {
  return parts.join("");
}

function escapeVcard(v: string) {
  return v.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

// Plie les lignes vCard > 75 octets (RFC 6350)
function foldLine(line: string): string {
  if (line.length <= 75) return line;
  let out = line.slice(0, 75);
  let rest = line.slice(75);
  while (rest.length > 74) {
    out += "\r\n " + rest.slice(0, 74);
    rest = rest.slice(74);
  }
  if (rest.length) out += "\r\n " + rest;
  return out;
}

export async function GET() {
  const phone = school.contact.phone.replace(/\s+/g, "");
  const addr = school.contact.address;
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVcard(school.teacher.lastName)};${escapeVcard(school.teacher.firstName)};;;`,
    `FN:${escapeVcard(school.teacher.fullName)}`,
    `ORG:${escapeVcard(school.brand.name)}`,
    `TITLE:${escapeVcard(school.teacher.title)}`,
    `TEL;TYPE=CELL,VOICE:${phone}`,
    `TEL;TYPE=WORK,VOICE:${school.contact.phoneLandline.replace(/\s+/g, "")}`,
    `EMAIL;TYPE=INTERNET:${school.contact.email}`,
    `ADR;TYPE=WORK:;;${escapeVcard(addr.street)};${escapeVcard(addr.city)};;${addr.postalCode};${addr.country}`,
    `URL:https://piano-berenice.com`,
    vcardLine(`URL;TYPE=Facebook:`, school.contact.facebook),
    `GEO:${addr.latitude};${addr.longitude}`,
    `PHOTO;ENCODING=b;TYPE=JPEG:${logoVcardBase64}`,
    `NOTE:${escapeVcard("École de piano à Nice Cimiez depuis 1994 — piano, solfège, éveil musical.")}`,
    `REV:${new Date().toISOString()}`,
    "END:VCARD",
    "",
  ].map(foldLine);

  const body = lines.join("\r\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="academie-piano-berenice.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
