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
    label: "2025 – 2026",
    startDate: "2025-09-09",
    registrationDates: [
      "Mercredi 3 septembre 2025, 16 h 30 – 19 h",
      "Vendredi 5 septembre 2025, 16 h 30 – 19 h",
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
    defaultTitle: "Académie de piano Bérénice · Cours de piano à Nice Cimiez",
    defaultDescription:
      "Depuis 1994, l'Académie de piano Bérénice enseigne le piano, le solfège et l'éveil musical à Nice (Cimiez). Enfants, adolescents, adultes — cours d'essai offert.",
    keywords: [
      "cours de piano Nice",
      "école de piano Nice",
      "professeur de piano Nice",
      "cours de piano Cimiez",
      "cours de solfège Nice",
      "éveil musical Nice",
      "éveil instrumental Nice",
      "cours piano enfant Nice",
      "cours piano adulte Nice",
      "cours piano débutant Nice",
      "académie de piano Nice",
      "école de musique Nice",
      "préparation bac option musique piano Nice",
    ],
  },
} as const;

export type School = typeof school;
