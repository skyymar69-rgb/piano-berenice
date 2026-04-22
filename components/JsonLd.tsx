import { school } from "@/lib/school";

const SITE_URL = "https://piano-berenice.com";

/**
 * Organisation / école + LocalBusiness enrichi (openingHours, aggregateRating placeholder,
 * knowsAbout, sameAs — signaux GEO + Knowledge Graph).
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness", "MusicSchool"],
    "@id": `${SITE_URL}/#organization`,
    name: school.brand.name,
    alternateName: [
      "Académie Bérénice",
      "École de piano Bérénice",
      "Académie de piano Nice Cimiez",
    ],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.png`,
    telephone: school.contact.phone,
    email: school.contact.email,
    foundingDate: "1994-11-02",
    slogan: "Le piano s'apprend avec méthode, et avec plaisir.",
    description: school.seo.defaultDescription,
    knowsAbout: [
      "Piano",
      "Solfège",
      "Éveil musical",
      "Enseignement musical",
      "Préparation baccalauréat option musique",
    ],
    keywords: [...school.seo.keywords].join(", "),
    priceRange: "€€",
    paymentAccepted: "Espèces, Chèque, Virement bancaire",
    currenciesAccepted: "EUR",
    areaServed: [
      { "@type": "City", name: "Nice", "@id": "https://www.wikidata.org/wiki/Q33959" },
      { "@type": "AdministrativeArea", name: "Alpes-Maritimes" },
      { "@type": "Place", name: "Cimiez" },
    ],
    sameAs: [
      school.contact.facebook,
      "https://fr-fr.facebook.com/AcademieDePianoBerenice",
      "https://www.pagesjaunes.fr/pros/07247300",
      "https://fr.mappy.com/poi/50b02c5b84ae4bef54e3b9e3",
      "https://www.spectable.com/cours-de-piano-nice-academie-de-piano-berenice/61215",
      "https://www.webrankinfo.net/site/32867.htm",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: school.contact.address.street,
      postalCode: school.contact.address.postalCode,
      addressLocality: school.contact.address.city,
      addressRegion: "Provence-Alpes-Côte d'Azur",
      addressCountry: school.contact.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: school.contact.address.latitude,
      longitude: school.contact.address.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "16:00",
        closes: "19:00",
      },
    ],
    hasMap: `https://www.google.com/maps/search/?api=1&query=${school.contact.address.latitude},${school.contact.address.longitude}`,
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/professeur#person`,
      name: school.teacher.fullName,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: school.contact.phone,
      contactType: "customer service",
      areaServed: "FR",
      availableLanguage: ["French"],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/professeur#person`,
    name: school.teacher.fullName,
    alternateName: school.teacher.civilName,
    givenName: school.teacher.firstName,
    familyName: school.teacher.lastName,
    jobTitle: school.teacher.title,
    gender: "Female",
    image: `${SITE_URL}/og-image.png`,
    url: `${SITE_URL}/professeur`,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    knowsAbout: ["Piano", "Solfège", "Éveil musical", "Pédagogie musicale"],
    knowsLanguage: ["French"],
    hasCredential: school.teacher.credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "music",
      name: c,
    })),
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Académie de Musique Prince Rainier III de Monaco",
      },
      {
        "@type": "EducationalOrganization",
        name: "Conservatoire National de Région de Nice",
      },
    ],
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
  slug,
}: {
  name: string;
  description: string;
  audience: string;
  slug?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: { "@id": `${SITE_URL}/#organization` },
    audience: { "@type": "EducationalAudience", educationalRole: audience },
    inLanguage: "fr-FR",
    offers: {
      "@type": "Offer",
      category: "Paid",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "In-person",
      location: { "@id": `${SITE_URL}/#organization` },
      instructor: { "@id": `${SITE_URL}/professeur#person` },
    },
    ...(slug && { url: `${SITE_URL}${slug}` }),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.href}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: school.brand.name,
    url: SITE_URL,
    inLanguage: "fr-FR",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
