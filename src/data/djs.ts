/**
 * Trilogy Crew — DJ data.
 *
 * To add a new DJ: append a new object to the `djs` array. TypeScript enforces
 * the required fields; optional fields (gallery, spotify, clubs, releases, rider,
 * sharedLineup, etc.) only render their section when present.
 *
 * Order in this array = order shown on the site (nav, home grid, member numbers).
 *
 * Localized strings use `{ es, en }`. Generic UI strings live in i18n/translations.ts.
 */

export type Lang = 'es' | 'en';

export interface Localized {
  es: string;
  en: string;
}

export type SocialPlatform =
  | 'soundcloud'
  | 'instagram'
  | 'spotify'
  | 'facebook'
  | 'bandcamp'
  | 'mixcloud'
  | 'youtube';

export interface Social {
  platform: SocialPlatform;
  label: string;
  handle: string;
  url: string;
  cta: Localized;
}

export interface DjEvent {
  date: string;
  weekday: Localized;
  venue: string;
  venueDetail: Localized;
  lineup: Localized;
  url: string;
}

export interface Release {
  title: string;
  label: string;
}

export interface RiderOption {
  label: Localized;
  gear: string;
}

export interface PlayedWith {
  international: string[];
  national: string[];
}

export interface Dj {
  /** URL slug, used in /dj/:slug */
  slug: string;
  /** Order label like "01" */
  order: string;
  /** Single letter label like "A" */
  letter: string;
  /** Display name in one line */
  name: string;
  /** Real name (optional, shown in bio meta) */
  realName?: string;
  /** Display name split into one or two lines for the hero h1 */
  nameLines: [string] | [string, string];
  /** Square portrait for the home card (relative to /public) */
  photoUrl: string;
  /** Optional taller portrait for the DJ page hero. Falls back to photoUrl. */
  heroPhotoUrl?: string;
  /**
   * Visual layout of the hero on the DJ page.
   * 'photo-left'  → photo on the left, info on the right (default)
   * 'photo-right' → photo on the right, info on the left
   * Used to introduce subtle variation between DJ pages.
   */
  heroLayout?: 'photo-left' | 'photo-right';
  /** Short role / style descriptor */
  role: Localized;
  /**
   * Accent color for this DJ (hex). Used for the outline-echo name effect on the
   * hero and small accent touches. Each DJ has their own — matches Instagram feed.
   * Falls back to the global --accent if not set.
   */
  accentColor?: string;
  /**
   * Short standout line shown below the bio (e.g. "SETS SIN GUION, PURA PISTA.").
   * This is the equivalent of the bold tagline at the bottom of the Instagram feeds.
   */
  tagline?: Localized;
  bio: {
    /** Big lead quote. */
    lead: Localized;
    /** Paragraphs in order */
    paragraphs: Localized[];
  };
  meta: {
    based: Localized;
    origin: Localized;
    activeSince: string;
    bpmRange: string;
  };
  socials: Social[];
  events: DjEvent[];
  presskit: {
    size: string;
    url: string;
  };
  email: string;
  trackUrls: [string, string];

  /* ---- Optional rich sections (render only if present) ---- */
  /** Spotify artist ID, enables the Spotify embed. e.g. "1MjLkJ3DdPGmEBzhm2Pj8B" */
  spotifyArtistId?: string;
  /** Genre line shown under the bio */
  genres?: Localized;
  /** Gallery photo URLs. If present & non-empty, replaces the placeholder grid. */
  gallery?: string[];
  /** Notable clubs / venues played */
  clubs?: string[];
  /** Artists shared a lineup with */
  playedWith?: PlayedWith;
  /** Official releases */
  releases?: Release[];
  /** Technical rider options */
  rider?: RiderOption[];
}

const ctaListen: Localized = { es: 'ESCUCHAR ↗', en: 'LISTEN ↗' };
const ctaFollow: Localized = { es: 'SEGUIR ↗', en: 'FOLLOW ↗' };
const ctaStream: Localized = { es: 'STREAM ↗', en: 'STREAM ↗' };
const ctaBuy: Localized = { es: 'COMPRAR ↗', en: 'BUY ↗' };
const ctaMail: Localized = { es: 'ESCRIBIR ↗', en: 'EMAIL ↗' };
const SAB: Localized = { es: 'SAB', en: 'SAT' };
const VIE: Localized = { es: 'VIE', en: 'FRI' };

export const djs: Dj[] = [
  /* ============================================================
     01 — TERRY MOOD  (Terry Pérez)
     Info real desde el press kit oficial.
     ============================================================ */
  {
    slug: 'terry-mood',
    order: '01',
    letter: 'A',
    name: 'Terry Mood',
    realName: 'Terry Pérez',
    nameLines: ['TERRY', 'MOOD'],
    photoUrl: '/assets/terry-card.jpg',
    heroPhotoUrl: '/assets/terry-hero.jpg',
    role: {
      es: 'House · Deep · Tech House',
      en: 'House · Deep · Tech House',
    },
    accentColor: '#ffffff',
    tagline: {
      es: 'MÁS QUE MÚSICA, UN LUGAR EN COMÚN.',
      en: 'MORE THAN MUSIC, A COMMON GROUND.',
    },
    bio: {
      lead: {
        es: '"Un DJ que no solo hace bailar, conecta con el alma de la pista."',
        en: '"A DJ who doesn\'t just make you dance — he connects with the soul of the floor."',
      },
      paragraphs: [
        {
          es: 'Terry Mood es un arquitecto sonoro que concibe la música como un espacio de refugio, conexión y comunión. Inspirado en la cultura clubbing como punto de encuentro, construye sets que narran historias a través de la energía, el groove y una identidad estética propia.',
          en: 'Terry Mood is a sonic architect who conceives music as a space of refuge, connection and communion. Inspired by club culture as a meeting point, he builds sets that tell stories through energy, groove and an aesthetic identity of his own.',
        },
        {
          es: 'Su sonido combina bajos potentes, ritmos envolventes y una esencia retro reinterpretada desde una mirada contemporánea. Lejos de las fórmulas mainstream y lo predecible, apuesta por un house refinado, elegante y vibrante, donde la sorpresa convive con la esencia de la pista. Su propósito va más allá de hacer bailar: busca generar una conexión auténtica y emocional con el público.',
          en: 'His sound combines powerful bass, immersive rhythms and a retro essence reinterpreted through a contemporary lens. Far from mainstream formulas and the predictable, he bets on a refined, elegant and vibrant house, where surprise coexists with the essence of the dancefloor. His purpose goes beyond making people dance: he seeks to generate an authentic, emotional connection with the crowd.',
        },
        {
          es: 'Comenzó como DJ en 2003, a los 16 años, explorando los primeros softwares de mezcla y evolucionando hacia bandejas dobles y vinilos. Sus primeras fiestas las organizaba él mismo junto a Pablo Xberg. En 2008 obtuvo su primera residencia en Cain Dance y desde 2011 sostiene una residencia de 13 años en Soho Punta del Este.',
          en: 'He started DJing in 2003, at 16, exploring the first mixing software and evolving towards twin decks and vinyl. His first parties were ones he organized himself alongside Pablo Xberg. In 2008 he landed his first residency at Cain Dance, and since 2011 he has held a 13-year residency at Soho Punta del Este.',
        },
        {
          es: 'Su sonido se caracteriza por bajos potentes, groove contagioso y una estética retro actualizada. Rechaza lo predecible y busca siempre la sorpresa sin salirse del sonido de pista: un house refinado, elegante y lleno de energía clubber.',
          en: 'His sound is defined by powerful bass, contagious groove and an updated retro aesthetic. He rejects the predictable and always chases surprise without leaving the dancefloor sound: refined, elegant house full of clubber energy.',
        },
      ],
    },
    meta: {
      based: { es: 'Montevideo', en: 'Montevideo' },
      origin: { es: 'Uruguay', en: 'Uruguay' },
      activeSince: '2003',
      bpmRange: '120–128',
    },
    genres: {
      es: 'House · Deep · Minimal · Deep Tech · Tech House',
      en: 'House · Deep · Minimal · Deep Tech · Tech House',
    },
    socials: [
      { platform: 'soundcloud', label: 'SoundCloud', handle: '@terrymooduy', url: 'https://soundcloud.com/terrymooduy', cta: ctaListen },
      { platform: 'spotify', label: 'Spotify', handle: 'Terry Mood', url: 'https://open.spotify.com/artist/1MjLkJ3DdPGmEBzhm2Pj8B', cta: ctaStream },
      { platform: 'instagram', label: 'Instagram', handle: '@terry__mood', url: 'https://www.instagram.com/terry__mood/', cta: ctaFollow },
      { platform: 'facebook', label: 'Bookings', handle: 'contacto.terryperez', url: 'mailto:contacto.terryperez@gmail.com', cta: ctaMail },
    ],
    spotifyArtistId: '1MjLkJ3DdPGmEBzhm2Pj8B',
    gallery: [
      '/assets/terry-1.jpg',
      '/assets/terry-2.jpg',
      '/assets/terry-3.jpg',
      '/assets/terry-4.jpg',
      '/assets/terry-5.jpg',
      '/assets/terry-6.jpg',
      '/assets/terry-7.jpg',
      '/assets/terry-logo.jpg',
    ],
    clubs: [
      'Soho Punta del Este',
      'Cain Dance',
      'Danzeria',
      'W-Lounge',
      'Dreamhouse',
      'Ava Club (Berlín)',
      'LA Fianna (Barcelona)',
      'Sunset Pilar (Argentina)',
      'Cloverfield (Argentina)',
      'Galeras Beach Club (Brasil)',
      'Marias @ Green Valley (Brasil)',
      'Boombox',
      'Full Moon (Punta del Este)',
      'Ovo (Punta del Este)',
      'Ocean Club (Punta del Este)',
      'Kultoo',
    ],
    playedWith: {
      international: [
        'Barem', 'Diego Ro-k', 'Deep Mariano', 'DJ Pp', 'Andrea Oliva', 'DJ Glen',
        'Basel Darrwish', 'Aldo Cadiz', 'Luca Bachetti', 'Cour-T', 'Umho',
        'Tomas Saenz', 'Ghezz', 'Nasyou', 'Miguel Silver', 'Tommy Whal', 'Tomy Disco',
      ],
      national: [
        'Koolt', 'Manglus', 'Mr. Green', 'Luciano Elvira',
        'Seba Rodríguez', 'Detected', 'Diego Acosta', 'Vale Volpe',
      ],
    },
    releases: [{ title: 'House 33', label: 'Late Ninety' }],
    rider: [
      { label: { es: 'Opción 1', en: 'Option 1' }, gear: '3× CDJ-3000 · DJM-V10' },
      { label: { es: 'Opción 2', en: 'Option 2' }, gear: '3× CDJ-2000NXS · DJM-900' },
    ],
    events: [],
    presskit: { size: 'PDF', url: '/assets/terry-mood-presskit.pdf' },
    email: 'contacto.terryperez@gmail.com',
    trackUrls: [
      'https://soundcloud.com/terrymooduy',
      'https://soundcloud.com/terrymooduy/tracks',
    ],
  },

  /* ============================================================
     02 — MR GREEN   (Matías Verde)
     Info real desde el press kit oficial de Hacemos Ruido.
     ============================================================ */
  {
    slug: 'mr-green',
    order: '02',
    letter: 'B',
    name: 'Mr Green',
    realName: 'Matías Verde',
    nameLines: ['MR', 'GREEN'],
    photoUrl: '/assets/mr-green-card.jpg',
    heroPhotoUrl: '/assets/mr-green-hero.jpg',
    heroLayout: 'photo-right',
    role: {
      es: 'Minimal · House · Tech House',
      en: 'Minimal · House · Tech House',
    },
    accentColor: '#00e676',
    tagline: {
      es: 'SETS SIN GUION, PURA PISTA.',
      en: 'UNSCRIPTED SETS, PURE DANCEFLOOR.',
    },
    bio: {
      lead: {
        es: '"Cada set es una conversación con la pista, nunca un guion."',
        en: '"Every set is a conversation with the floor, never a script."',
      },
      paragraphs: [
        {
          es: 'Mr.Green (Matías Verde) es un DJ y productor uruguayo con más de 15 años de trayectoria en la escena electrónica. Su identidad sonora transita entre el minimal, house, deep tech y tech house, combinando un groove envolvente, energía y una conexión constante con la pista.',
          en: 'Mr.Green (Matías Verde) is a Uruguayan DJ and producer with over 15 years in the electronic scene. His sonic identity moves between minimal, house, deep tech and tech house, combining an immersive groove, energy and a constant connection with the floor.',
        },
        {
          es: 'Melómano por naturaleza, no prepara sus sets de forma rígida: prefiere leer la pista en tiempo real y llevarla hacia donde el cuerpo colectivo lo pide. Esa simbiosis entre DJ y pista es su sello — cada sesión es única, viva y profundamente conectada.',
          en: 'A born music lover, he doesn\'t lock his sets in advance: he reads the floor in real time and steers it wherever the collective body asks. That symbiosis between DJ and dancefloor is his trademark — every session is unique, alive and deeply connected.',
        },
        {
          es: 'Cofundador de Trilogy Crew y residente de Soho Punta del Este desde hace 15 años, ha llevado su música a escenarios de Uruguay, Argentina y Brasil, destacándose su presentación en el Main Floor de Green Valley (Brasil), uno de los clubes más reconocidos del mundo según el ranking de DJ Mag.',
          en: 'Co-founder of Trilogy Crew and a 15-year resident at Soho Punta del Este, he has played venues across Uruguay, Argentina and Brazil, including a standout appearance on the Main Floor of Green Valley (Brazil), one of the world\'s most acclaimed clubs according to DJ Mag\'s ranking.',
        },
      ],
    },
    meta: {
      based: { es: 'Montevideo', en: 'Montevideo' },
      origin: { es: 'Uruguay', en: 'Uruguay' },
      activeSince: '2010',
      bpmRange: '122–128',
    },
    genres: {
      es: 'Minimal · House · Deep Tech · Tech House',
      en: 'Minimal · House · Deep Tech · Tech House',
    },
    socials: [
      { platform: 'soundcloud', label: 'SoundCloud', handle: '@mrgreen_uy', url: 'https://soundcloud.com/mrgreen_uy', cta: ctaListen },
      { platform: 'instagram', label: 'Instagram', handle: '@mrgreen.uy', url: '#', cta: ctaFollow },
      { platform: 'spotify', label: 'Spotify', handle: 'Mr Green', url: '#', cta: ctaStream },
      { platform: 'facebook', label: 'Bookings', handle: 'hacemosruido.uy', url: 'mailto:hola@hacemosruido.uy', cta: ctaMail },
    ],
    gallery: [
      '/assets/mr-green-1.jpg',
      '/assets/mr-green-2.jpg',
      '/assets/mr-green-3.jpg',
      '/assets/mr-green-4.jpg',
    ],
    clubs: [
      'Soho Punta del Este',
      'Green Valley (Camboriú, BR)',
      'Kalú',
      'DreamHouse',
      'BeatInside',
      'CROP',
      'The Sound of Roomba',
      'Aftería',
    ],
    events: [],
    presskit: { size: 'PDF', url: '/assets/mr-green-bio.pdf' },
    email: 'hola@hacemosruido.uy',
    trackUrls: [
      'https://soundcloud.com/mrgreen_uy',
      'https://soundcloud.com/mrgreen_uy/tracks',
    ],
  },

  /* ============================================================
     03 — PABLO XBERG
     Placeholder content — to be replaced when real bio arrives.
     ============================================================ */
  {
    slug: 'pablo-xberg',
    order: '03',
    letter: 'C',
    name: 'Pablo Xberg',
    nameLines: ['PABLO', 'XBERG'],
    photoUrl: '/assets/pablo-xberg-card.jpg',
    heroPhotoUrl: '/assets/pablo-xberg-hero.jpg',
    role: {
      es: 'Tech House · Techno · Peak Time',
      en: 'Tech House · Techno · Peak Time',
    },
    accentColor: '#ff2a2a',
    tagline: {
      es: 'EN LA FINA LÍNEA ENTRE EL TECHNO Y EL TECH HOUSE.',
      en: 'ON THE FINE LINE BETWEEN TECHNO AND TECH HOUSE.',
    },
    bio: {
      lead: {
        es: '"Viajo en la fina línea entre el techno y el tech house, con fusiones de techno melódico o minimal techno."',
        en: '"I travel the fine line between techno and tech house, with fusions of melodic techno or minimal techno."',
      },
      paragraphs: [
        {
          es: 'Pablo Xberg (Pablo Morena) comenzó su camino detrás de las bandejas hace casi 20 años, junto a Terry Mood, en los primeros circuitos clandestinos de Montevideo. Desde hace 17 años vive en Berlín, donde absorbió la crudeza, la precisión y la riqueza melódica de la escena techno más influyente del mundo.',
          en: 'Pablo Xberg (Pablo Morena) started behind the decks almost 20 years ago alongside Terry Mood, in the first underground circuits of Montevideo. He has lived in Berlin for the last 17 years, absorbing the rawness, precision and melodic richness of the world\'s most influential techno scene.',
        },
        {
          es: 'Su sonido viaja en la fina línea entre el techno y el tech house, atravesado por fusiones de techno melódico y minimal techno. Kicks envolventes, percusión seca, arreglos que respiran — una paleta que se abre desde la pista hacia lo introspectivo sin perder la contundencia.',
          en: 'His sound travels the fine line between techno and tech house, crossed by fusions of melodic techno and minimal techno. Wrapping kicks, dry percussion, arrangements that breathe — a palette that opens from the dancefloor towards the introspective without losing weight.',
        },
        {
          es: 'Dentro de Trilogy Crew aporta el lado más duro del espectro: cabina natural para los cierres potentes, esos sets donde la pista ya está lista para que no vuelva a bajar. Años de residencias y afters berlineses le dieron un sentido del timing afilado que se nota en cada transición.',
          en: 'Within Trilogy Crew, he brings the hardest side of the spectrum: a natural booth for powerful closings — the kind of sets where the floor is ready never to come back down. Years of Berlin residencies and after-hours gave him a sharp sense of timing that shows in every transition.',
        },
        {
          es: 'Cofundador de Trilogy Crew, representa el puente entre la raíz uruguaya del colectivo y la mirada europea de la escena. Montevideo y Berlín — dos capitales, un mismo pulso.',
          en: 'Co-founder of Trilogy Crew, he represents the bridge between the collective\'s Uruguayan roots and the European eye of the scene. Montevideo and Berlin — two capitals, one pulse.',
        },
      ],
    },
    meta: {
      based: { es: 'Berlín', en: 'Berlin' },
      origin: { es: 'Uruguay', en: 'Uruguay' },
      activeSince: '2006',
      bpmRange: '126–135',
    },
    genres: {
      es: 'Tech House · Techno · Techno Melódico · Minimal Techno',
      en: 'Tech House · Techno · Melodic Techno · Minimal Techno',
    },
    socials: [
      { platform: 'soundcloud', label: 'SoundCloud', handle: '@pabloxberg', url: 'https://soundcloud.com/pabloxberg', cta: ctaListen },
      { platform: 'instagram', label: 'Instagram', handle: '@pabloxberg', url: '#', cta: ctaFollow },
      { platform: 'spotify', label: 'Spotify', handle: 'Pablo Xberg', url: '#', cta: ctaStream },
      { platform: 'bandcamp', label: 'Bandcamp', handle: 'pabloxberg.bandcamp.com', url: '#', cta: ctaBuy },
    ],
    clubs: [
      'Berlín — residencias y afters',
      'Montevideo — circuito clandestino',
      'Dreamhouse',
      'Ocean Club',
      'Soho Punta del Este',
      'Fiestas al aire libre (Berlín)',
    ],
    rider: [
      { label: { es: 'Opción 1 — CDJs', en: 'Option 1 — CDJs' }, gear: '3× CDJ-2000NXS · DJM-900' },
      { label: { es: 'Opción 2 — Vinilos', en: 'Option 2 — Vinyl' }, gear: '2× Technics MK2 · DJM-900' },
    ],
    gallery: [
      '/assets/pablo-1.jpg',
      '/assets/pablo-2.jpg',
      '/assets/pablo-3.jpg',
      '/assets/pablo-4.jpg',
      '/assets/pablo-5.jpg',
      '/assets/pablo-6.jpg',
      '/assets/pablo-7.jpg',
      '/assets/pablo-8.jpg',
    ],
    events: [],
    presskit: { size: 'PDF', url: '/assets/pablo-xberg-presskit.pdf' },
    email: 'pabloxberg@gmail.com',
    trackUrls: [
      'https://soundcloud.com/pabloxberg',
      'https://soundcloud.com/pabloxberg/tracks',
    ],
  },

  /* ============================================================
     04 — ANTO BRAVO  (Antonella)
     Info real desde el feed oficial de Trilogy Crew.
     ============================================================ */
  {
    slug: 'anto-bravo',
    order: '04',
    letter: 'D',
    name: 'Anto Bravo',
    realName: 'Antonella',
    nameLines: ['ANTO', 'BRAVO'],
    photoUrl: '/assets/anto-bravo-card.jpg',
    heroPhotoUrl: '/assets/anto-bravo-hero.jpg',
    heroLayout: 'photo-right',
    role: {
      es: 'Tech House · Groove · Energía',
      en: 'Tech House · Groove · Energy',
    },
    accentColor: '#1fc7ff',
    tagline: {
      es: 'ELEGANCIA, GROOVE Y ENERGÍA SIN FRONTERAS.',
      en: 'ELEGANCE, GROOVE AND ENERGY WITHOUT BORDERS.',
    },
    bio: {
      lead: {
        es: '"Una fuerza emergente en la escena electrónica."',
        en: '"An emerging force in the electronic scene."',
      },
      paragraphs: [
        {
          es: 'Antonella es una fuerza emergente en la escena electrónica. Su sonido se define por la fusión de elegancia, profundidad rítmica groovera y exótica, y una energía vibrante que ha cautivado las pistas, tanto en Latinoamérica como en Europa.',
          en: 'Antonella is an emerging force in the electronic scene. Her sound is defined by the fusion of elegance, groovy and exotic rhythmic depth, and a vibrant energy that has captivated dancefloors across Latin America and Europe.',
        },
        {
          es: 'Con cada presentación, Anto Bravo demuestra por qué su propuesta trasciende fronteras: una identidad sonora propia que combina lo refinado con el pulso implacable de la pista.',
          en: 'With every performance, Anto Bravo shows why her proposal crosses borders: a sonic identity of her own that combines the refined with the relentless pulse of the dancefloor.',
        },
      ],
    },
    meta: {
      based: { es: 'Uruguay', en: 'Uruguay' },
      origin: { es: 'Uruguay', en: 'Uruguay' },
      activeSince: '—',
      bpmRange: '124–128',
    },
    genres: {
      es: 'Tech House · House · Groove',
      en: 'Tech House · House · Groove',
    },
    socials: [
      { platform: 'instagram', label: 'Instagram', handle: '@antobravo', url: '#', cta: ctaFollow },
      { platform: 'soundcloud', label: 'SoundCloud', handle: '@antobravo', url: '#', cta: ctaListen },
      { platform: 'spotify', label: 'Spotify', handle: 'Anto Bravo', url: '#', cta: ctaStream },
      { platform: 'facebook', label: 'Bookings', handle: 'Trilogy Crew', url: 'mailto:bookings@trilogycrew.com', cta: ctaMail },
    ],
    gallery: ['/assets/anto-bravo-1.jpg'],
    events: [],
    presskit: { size: '—', url: '#' },
    email: 'bookings@trilogycrew.com',
    trackUrls: [
      'https://soundcloud.com/antobravo',
      'https://soundcloud.com/antobravo/tracks',
    ],
  },

  /* ============================================================
     05 — JOACO AÑÓN
     Info real provista por el DJ.
     ============================================================ */
  {
    slug: 'joaco-anon',
    order: '05',
    letter: 'E',
    name: 'Joaco Añón',
    realName: 'Joaco Añón',
    nameLines: ['JOACO', 'AÑÓN'],
    photoUrl: '/assets/joaco-anon-card.jpg',
    heroPhotoUrl: '/assets/joaco-anon-hero.jpg',
    role: {
      es: 'House · Minimal Deep Tech',
      en: 'House · Minimal Deep Tech',
    },
    accentColor: '#ff7a1a',
    tagline: {
      es: 'HOUSE CON ALMA, PRODUCCIÓN CON IDENTIDAD.',
      en: 'HOUSE WITH SOUL, PRODUCTION WITH IDENTITY.',
    },
    bio: {
      lead: {
        es: '"Sets potentes, alegres y cargados de energía."',
        en: '"Powerful, joyful sets charged with energy."',
      },
      paragraphs: [
        {
          es: 'Joaco Añón es un DJ y productor uruguayo que comenzó su vínculo con la música electrónica en 2008. Desde 2023 desarrolla una propuesta enfocada en el house, con influencias de minimal deep tech, caracterizada por sets potentes, alegres y cargados de energía.',
          en: 'Joaco Añón is a Uruguayan DJ and producer who began his bond with electronic music in 2008. Since 2023 he has developed a project focused on house, with minimal deep tech influences, defined by powerful, joyful sets loaded with energy.',
        },
        {
          es: 'Como productor, publicó "Don\'t Go" en Manicomio White, el EP "Discotek" en Miaw y "What the Fuck Is Happening" en Manicomio Music, consolidando progresivamente su identidad sonora.',
          en: 'As a producer, he released "Don\'t Go" on Manicomio White, the EP "Discotek" on Miaw and "What the Fuck Is Happening" on Manicomio Music, progressively consolidating his sonic identity.',
        },
        {
          es: 'Su propuesta también se destaca por reversionar clásicos musicales y llevarlos al terreno del house, combinando nostalgia y energía de pista a través de sus edits. Es cofundador de Synkro, una marca de eventos enfocada en el house y el minimal deep tech, donde busca generar experiencias que conecten la música, el público y la energía de cada encuentro.',
          en: 'His proposal also stands out for reworking musical classics into house territory, combining nostalgia and dancefloor energy through his edits. He is co-founder of Synkro, an events brand focused on house and minimal deep tech, where he seeks to create experiences that connect music, audience and the energy of each gathering.',
        },
      ],
    },
    meta: {
      based: { es: 'Montevideo', en: 'Montevideo' },
      origin: { es: 'Uruguay', en: 'Uruguay' },
      activeSince: '2008',
      bpmRange: '124–128',
    },
    genres: {
      es: 'House · Minimal Deep Tech · Edits',
      en: 'House · Minimal Deep Tech · Edits',
    },
    releases: [
      { title: "Don't Go", label: 'Manicomio White' },
      { title: 'Discotek (EP)', label: 'Miaw' },
      { title: 'What the Fuck Is Happening', label: 'Manicomio Music' },
    ],
    socials: [
      { platform: 'instagram', label: 'Instagram', handle: '@joacoanon', url: '#', cta: ctaFollow },
      { platform: 'soundcloud', label: 'SoundCloud', handle: '@joacoanon', url: '#', cta: ctaListen },
      { platform: 'spotify', label: 'Spotify', handle: 'Joaco Añón', url: '#', cta: ctaStream },
      { platform: 'facebook', label: 'Bookings', handle: 'Trilogy Crew', url: 'mailto:bookings@trilogycrew.com', cta: ctaMail },
    ],
    clubs: ['Synkro (cofundador)', 'Uruguay'],
    events: [],
    presskit: { size: '—', url: '#' },
    email: 'bookings@trilogycrew.com',
    trackUrls: [
      'https://soundcloud.com/joacoanon',
      'https://soundcloud.com/joacoanon/tracks',
    ],
  },

  /* ============================================================
     06 — MATH   (Mathias Molina / Math Music)
     Info real provista por el DJ.
     ============================================================ */
  {
    slug: 'math',
    order: '06',
    letter: 'F',
    name: 'Math',
    realName: 'Mathias Molina',
    nameLines: ['MATH', 'MUSIC'],
    photoUrl: '/assets/math-card.jpg',
    heroPhotoUrl: '/assets/math-hero.jpg',
    heroLayout: 'photo-right',
    role: {
      es: 'Minimal · Deep Tech · Acid',
      en: 'Minimal · Deep Tech · Acid',
    },
    accentColor: '#c136ff',
    tagline: {
      es: 'LA CABINA COMO LIENZO SONORO.',
      en: 'THE BOOTH AS A SONIC CANVAS.',
    },
    bio: {
      lead: {
        es: '"Sets precisos, profundos y de conexión directa con la pista."',
        en: '"Precise, deep sets with a direct connection to the floor."',
      },
      paragraphs: [
        {
          es: 'Math (Mathias Molina / Math Music) es un DJ y artista visual uruguayo radicado en Montevideo. Con un recorrido que comenzó en 2015 cruzando la pintura, el diseño y el tatuaje, traslada esa misma sensibilidad a las bandejas, concibiendo la cabina como un lienzo sonoro en constante movimiento.',
          en: 'Math (Mathias Molina / Math Music) is a Uruguayan DJ and visual artist based in Montevideo. With a journey that began in 2015 crossing painting, design and tattooing, he brings that same sensibility to the decks, conceiving the booth as a sonic canvas in constant motion.',
        },
        {
          es: 'Su sonido recorre el minimal, el deep tech, el house y matices del acid, construyendo así una identidad estética propia.',
          en: 'His sound travels through minimal, deep tech, house and acid nuances, building an aesthetic identity of his own along the way.',
        },
        {
          es: 'Con trayectoria en salas y eventos de Uruguay, Brasil y España, y habiendo compartido cabinas con grandes referentes de la escena nacional e internacional, desarrolla sets precisos, profundos y de conexión directa con la pista.',
          en: 'With experience in venues and events across Uruguay, Brazil and Spain, having shared booths with major names of the national and international scene, he delivers precise, deep sets with a direct connection to the floor.',
        },
      ],
    },
    meta: {
      based: { es: 'Montevideo', en: 'Montevideo' },
      origin: { es: 'Uruguay', en: 'Uruguay' },
      activeSince: '2015',
      bpmRange: '124–130',
    },
    genres: {
      es: 'Minimal · Deep Tech · House · Acid',
      en: 'Minimal · Deep Tech · House · Acid',
    },
    socials: [
      { platform: 'instagram', label: 'Instagram', handle: '@math.music', url: '#', cta: ctaFollow },
      { platform: 'soundcloud', label: 'SoundCloud', handle: '@mathmusic', url: '#', cta: ctaListen },
      { platform: 'spotify', label: 'Spotify', handle: 'Math', url: '#', cta: ctaStream },
      { platform: 'facebook', label: 'Bookings', handle: 'Trilogy Crew', url: 'mailto:bookings@trilogycrew.com', cta: ctaMail },
    ],
    clubs: ['Uruguay', 'Brasil', 'España'],
    events: [],
    presskit: { size: '—', url: '#' },
    email: 'bookings@trilogycrew.com',
    trackUrls: [
      'https://soundcloud.com/mathmusic',
      'https://soundcloud.com/mathmusic/tracks',
    ],
  },

  /* ============================================================
     07 — NICO  (temporalmente oculto - a la espera de info real)
     Para reactivarlo: descomentar el bloque de abajo.
     ============================================================ */
  /*
  {
    slug: 'nico',
    order: '07',
    letter: 'G',
    name: 'Nico',
    nameLines: ['NICO'],
    photoUrl: '/assets/placeholder-card.jpg',
    role: {
      es: 'Info próximamente',
      en: 'Info coming soon',
    },
    accentColor: '#b48bff',
    tagline: {
      es: 'MUY PRONTO.',
      en: 'COMING SOON.',
    },
    bio: {
      lead: {
        es: '"Nuevo miembro del colectivo — presentación próximamente."',
        en: '"New member of the collective — introduction coming soon."',
      },
      paragraphs: [
        {
          es: 'Nico se incorpora al colectivo. La información completa (biografía, estilo, fotos y redes) se publicará en los próximos días.',
          en: 'Nico is joining the collective. Full information (bio, style, photos and links) will be published in the coming days.',
        },
      ],
    },
    meta: {
      based: { es: 'TBA', en: 'TBA' },
      origin: { es: 'TBA', en: 'TBA' },
      activeSince: '—',
      bpmRange: '—',
    },
    socials: [],
    events: [],
    presskit: { size: '—', url: '#' },
    email: 'bookings@trilogycrew.com',
    trackUrls: [
      'https://soundcloud.com/trilogy-crew',
      'https://soundcloud.com/trilogy-crew/tracks',
    ],
  },
  */
];

export function getDjBySlug(slug: string): Dj | undefined {
  return djs.find((d) => d.slug === slug);
}

/* ============================================================
   Crew-level data (events shown on Home)
   ============================================================ */

export const crewEvents: DjEvent[] = [
  { date: '14.06', weekday: SAB, venue: 'Phonotheque', venueDetail: { es: 'Ciudad Vieja, MVD', en: 'Ciudad Vieja, MVD' }, lineup: { es: 'Los tres · 23:00 → late', en: 'All three · 23:00 → late' }, url: '#' },
  { date: '28.06', weekday: SAB, venue: 'Bahrein', venueDetail: { es: 'Punta Carretas, MVD', en: 'Punta Carretas, MVD' }, lineup: { es: 'Terry Mood B2B Mr Green', en: 'Terry Mood B2B Mr Green' }, url: '#' },
  { date: '12.07', weekday: SAB, venue: 'La Trastienda', venueDetail: { es: 'Centro, MVD', en: 'Centro, MVD' }, lineup: { es: 'Pablo Xberg · set de cierre', en: 'Pablo Xberg · closing set' }, url: '#' },
  { date: '02.08', weekday: VIE, venue: 'Sala Zitarrosa', venueDetail: { es: 'Punta del Este', en: 'Punta del Este' }, lineup: { es: 'Trilogy x Costa Festival', en: 'Trilogy x Costa Festival' }, url: '#' },
];

export const crewStats = {
  founded: '2010',
  members: '06',
  base: 'MVD',
  events: '28',
} as const;
