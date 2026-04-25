export const school = {
  brand: {
    name: "Académie de piano Bérénice",
    shortName: "Académie Bérénice",
    tagline: "École de musique à Nice — Cimiez",
    foundedYear: 1994,
  },
  teacher: {
    firstName: "Bérénice",
    lastName: "Lecardeur",
    fullName: "Bérénice Lecardeur",
    civilName: "Bérénice Sol née Le Cardeur",
    title: "Professeure de piano, de solfège et d'éveil musical",
    credentials: [
      "Médaille d'Or de piano — Académie de Musique Prince Rainier III de Monaco",
      "Prix de perfectionnement — Conservatoire National de Région de Nice",
      "Ancienne professeure de piano agréée de la fonction publique (concours national)",
      "Ancienne professeure de piano — École Départementale de Musique des Alpes-Maritimes",
    ],
    eveilCredentials: [
      "Ancienne professeure d'éveil musical — jardin d'enfants Sainte Marthe, Nice",
      "Ancienne professeure d'éveil musical — école maternelle et primaire Régina Coeli, Nice",
    ],
  },
  contact: {
    phone: "+33 6 81 84 27 23",
    phoneDisplay: "06 81 84 27 23",
    phoneLandline: "04 93 81 37 57",
    email: "berenice.lecardeur@gmail.com",
    address: {
      street: "59 boulevard de Cimiez",
      complement: "Entrée dans l'impasse",
      postalCode: "06000",
      city: "Nice",
      country: "France",
      countryCode: "FR",
      latitude: 43.718445,
      longitude: 7.271506,
    },
    transit: [
      "Bus 5 — arrêt Prince de Galles",
      "Bus 33, 40, 70 — arrêt Victoria",
    ],
    hours: {
      inscription: "Du lundi au vendredi, 16 h – 19 h (hors vacances scolaires)",
      summer: "Sur rendez-vous ou par e-mail",
    },
    facebook: "https://fr-fr.facebook.com/AcademieDePianoBerenice",
  },
  academicYear: {
    label: "2026 – 2027",
    startDate: "2026-09-08",
    registrationDates: [
      "Mercredi 2 septembre 2026, 16 h 30 – 19 h",
      "Vendredi 4 septembre 2026, 16 h 30 – 19 h",
    ],
  },
  legal: {
    raisonSociale: "Bérénice Sol (née Le Cardeur)",
    formeJuridique: "Entrepreneur individuel",
    siren: "399 365 642",
    siret: "39936564200038",
    codeApe: "85.59B",
    libelleApe: "Autres enseignements",
    tvaIntracom: "TVA non applicable, article 293 B du CGI",
    directeurPublication: "Bérénice Lecardeur",
    hebergeur: {
      nom: "Vercel Inc.",
      adresse: "340 S Lemon Ave #4133, Walnut, CA 91789, USA",
    },
    _confirmed: false,
  },
  seo: {
    defaultTitle:
      "Cours de piano et solfège à Nice · Académie Bérénice — Côte d'Azur",
    defaultDescription:
      "N°1 des cours de piano et solfège à Nice et sur la Côte d'Azur depuis 1994. Académie dirigée par Bérénice Lecardeur, Médaille d'Or Monaco et Prix du Conservatoire de Nice. Éveil musical dès 5 ans, cours enfants, ados, adultes. Inscriptions ouvertes pour la rentrée 2026 – 2027 à Cimiez.",
    keywords: [
      // Tier 1 — cibles prioritaires
      "cours de piano Nice",
      "cours de piano Côte d'Azur",
      "cours de solfège Nice",
      "cours de solfège Côte d'Azur",
      "école de piano Nice",
      "école de musique Nice",
      "académie de piano Nice",
      "professeur de piano Nice",
      "cours de piano Cimiez",
      // Tier 2 — audiences
      "cours piano enfant Nice",
      "cours piano adulte Nice",
      "cours piano adolescent Nice",
      "cours piano débutant Nice",
      "éveil musical Nice",
      "éveil musical 5 ans Nice",
      "éveil instrumental Nice",
      // Tier 3 — long tail
      "préparation bac option musique piano Nice",
      "cours de piano Nice 06000",
      "école piano Alpes-Maritimes",
      "leçons piano Nice Cimiez",
      "professeur piano diplômé Nice",
      "cours piano individuel Nice",
      "piano solfège combiné Nice",
      // Côte d'Azur régionales
      "cours piano Côte d'Azur",
      "académie musique Côte d'Azur",
      "professeur piano Côte d'Azur",
      "école piano PACA",
    ],
  },
} as const;

export type School = typeof school;
