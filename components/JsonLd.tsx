import { school } from "@/lib/school";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: school.brand.name,
    url: "https://piano-berenice.com",
    telephone: school.contact.phone,
    email: school.contact.email,
    foundingDate: "1994-11-02",
    sameAs: [school.contact.facebook],
    address: {
      "@type": "PostalAddress",
      streetAddress: school.contact.address.street,
      postalCode: school.contact.address.postalCode,
      addressLocality: school.contact.address.city,
      addressCountry: school.contact.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: school.contact.address.latitude,
      longitude: school.contact.address.longitude,
    },
    areaServed: {
      "@type": "City",
      name: "Nice",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function CourseJsonLd({
  name,
  description,
  audience,
}: {
  name: string;
  description: string;
  audience: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "EducationalOrganization",
      name: school.brand.name,
      sameAs: "https://piano-berenice.com",
    },
    audience: { "@type": "EducationalAudience", educationalRole: audience },
    inLanguage: "fr-FR",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
