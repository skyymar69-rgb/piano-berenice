export type StaticImage = {
  slug: string;
  alt: string;
  title: string;
  width: number; // intrinsic width ratio anchor
  height: number;
  caption?: string;
};

// Width/height are approximate intrinsic ratios for next/image layout hints.
export const images = {
  berenicePortrait: {
    slug: "berenice-lecardeur-portrait-piano-queue",
    alt: "Bérénice Lecardeur, professeure de piano à Nice, assise devant son piano à queue dans la salle de cours de l'Académie",
    title: "Bérénice Lecardeur, professeure de piano — Nice Cimiez",
    width: 800,
    height: 1400,
    caption:
      "Bérénice Lecardeur, professeure de piano, dans sa salle de cours à Nice.",
  },
  berenicePiano: {
    slug: "berenice-jouant-piano-queue-salle-vitraux",
    alt: "Bérénice Lecardeur jouant du piano à queue dans la salle de cours éclairée par des vitraux, Académie de piano Bérénice à Nice",
    title: "Cours de piano à Nice — salle aux vitraux",
    width: 800,
    height: 1000,
  },
  bereniceNappe: {
    slug: "berenice-piano-queue-nappe-rouge",
    alt: "Bérénice Lecardeur derrière son piano à queue recouvert d'une nappe rouge brodée, Académie de piano à Nice Cimiez",
    title: "Professeure de piano — Nice Cimiez",
    width: 800,
    height: 1100,
  },
  sallePianoDecor: {
    slug: "salle-cours-piano-queue-decor",
    alt: "Salle de cours de piano de l'Académie Bérénice à Nice, piano à queue et décor d'œuvres d'élèves",
    title: "Salle de cours de piano",
    width: 1600,
    height: 800,
  },
  partitionRose: {
    slug: "partition-rose-piano-eveil-musical",
    alt: "Partition ouverte et rose rouge posées sur les touches d'un piano — ambiance poétique des cours de piano",
    title: "Partition et rose sur piano",
    width: 1600,
    height: 800,
  },
  pianoYamahaPartition: {
    slug: "piano-yamaha-partition-cours",
    alt: "Piano Yamaha avec partition ouverte dans la salle de cours de l'Académie de piano Bérénice",
    title: "Piano Yamaha — salle de cours",
    width: 2000,
    height: 1200,
  },
  salleSolfege: {
    slug: "salle-cours-solfege-groupe-academie",
    alt: "Salle de cours de solfège de l'Académie Bérénice à Nice, tables alignées pour cours en groupe",
    title: "Salle de cours de solfège",
    width: 900,
    height: 1200,
  },
  salleSolfegePetite: {
    slug: "salle-solfege-tables-chaises",
    alt: "Salle de solfège avec tables grises et chaises vertes, Académie de piano Bérénice à Nice",
    title: "Salle de solfège",
    width: 900,
    height: 1100,
  },
  salleAudition: {
    slug: "salle-audition-piano-academie-nice",
    alt: "Salle d'audition et d'éveil musical avec piano à queue, Académie Bérénice à Nice Cimiez",
    title: "Salle d'éveil musical et d'audition",
    width: 900,
    height: 1200,
  },
  couloirAccueil: {
    slug: "couloir-accueil-academie-piano-nice",
    alt: "Couloir d'accueil et salle d'attente de l'Académie de piano Bérénice, 59 bd de Cimiez Nice",
    title: "Accueil de l'Académie",
    width: 900,
    height: 1200,
  },
  stockPartitionSolfege: {
    slug: "stock-partition-solfege-piano",
    alt: "Partition de solfège posée sur un piano, gros plan sur les notes et les clés — symbole de l'enseignement du solfège",
    title: "Cours de solfège — lecture de partition",
    width: 1600,
    height: 1067,
  },
  stockTouchesPiano: {
    slug: "stock-touches-piano-gros-plan",
    alt: "Gros plan sur les touches noires et blanches d'un piano — symbole des cours de piano pour enfants et adultes",
    title: "Touches de piano",
    width: 1600,
    height: 900,
  },
  stockElevePartition: {
    slug: "stock-eleve-partition-lecture",
    alt: "Élève lisant une partition musicale, ambiance d'apprentissage à l'éveil musical",
    title: "Jeune élève lisant une partition",
    width: 1067,
    height: 1600,
  },
  stockMainsPiano: {
    slug: "stock-mains-piano-partition",
    alt: "Mains d'une pianiste jouant sur un piano droit, partition ouverte au-dessus du clavier",
    title: "Jouer au piano avec partition",
    width: 1067,
    height: 1600,
  },
  stockMainsPianoBois: {
    slug: "stock-mains-pianiste-piano-droit",
    alt: "Mains féminines posées sur les touches d'un piano droit ancien en bois — ambiance cours de piano",
    title: "Pianiste au piano droit",
    width: 1600,
    height: 1067,
  },
} satisfies Record<string, StaticImage>;

export const imageSrcSet = (slug: string) =>
  `/images/${slug}-sm.webp 480w, /images/${slug}-md.webp 960w, /images/${slug}-lg.webp 1600w`;

export const imageSrc = (slug: string, size: "sm" | "md" | "lg" = "md") =>
  `/images/${slug}-${size}.webp`;
