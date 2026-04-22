import { school } from "@/lib/school";

export const dynamic = "force-static";

function vcardLine(...parts: string[]) {
  return parts.join("");
}

function escapeVcard(v: string) {
  return v.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

export async function GET() {
  const phone = school.contact.phone.replace(/\s+/g, "");
  const addr = school.contact.address;
  const body = [
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
    `NOTE:${escapeVcard("École de piano à Nice Cimiez depuis 1994.")}`,
    `REV:${new Date().toISOString()}`,
    "END:VCARD",
    "",
  ].join("\r\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="academie-piano-berenice.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
