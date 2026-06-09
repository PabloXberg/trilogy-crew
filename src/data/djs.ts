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
  /** Display name split into two lines for the hero h1 */
  nameLines: [string, string];
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
    bio: {
      lead: {
        es: '"Un DJ que no solo hace bailar, conecta con el alma de la pista."',
        en: '"A DJ who doesn\'t just make you dance — he connects with the soul of the floor."',
      },
      paragraphs: [
        {
          es: 'Terry Mood es un arquitecto sonoro que entiende la música como un espacio de resguardo, conexión y comunión. Su propuesta nace de la cultura clubbing como lugar de encuentro, donde cada set es una historia cargada de energía, groove y estética particular. Con un enfoque siempre alejado del mainstream, busca provocar una experiencia sonora auténtica, vibrante y emocional.',
          en: 'Terry Mood is a sonic architect who understands music as a space of refuge, connection and communion. His vision is born from club culture as a meeting place, where every set is a story loaded with energy, groove and its own particular aesthetic. With an approach always far from the mainstream, he seeks to provoke an authentic, vibrant and emotional sonic experience.',
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
    bio: {
      lead: {
        es: '"Cada set es una conversación con la pista, nunca un guion."',
        en: '"Every set is a conversation with the floor, never a script."',
      },
      paragraphs: [
        {
          es: 'Melómano por naturaleza, Mr Green no prepara sus sets de forma rígida. Prefiere leer la pista en tiempo real, entender lo que el público necesita y llevar el set hacia donde el cuerpo colectivo lo pide. Esa simbiosis entre DJ y pista es su sello: cada sesión es única, viva y profundamente conectada.',
          en: 'A born music lover, Mr Green doesn\'t lock his sets in advance. He prefers to read the floor in real time, sense what the crowd needs and steer the night wherever the collective body asks for it. That symbiosis between DJ and dancefloor is his trademark: every session is unique, alive and deeply connected.',
        },
        {
          es: 'Su vínculo con la música comenzó a los 10 años, grabando en cassette las canciones que le gustaban de la radio, inspirado por su padre. A los 12 ya conectaba equipos de audio en los eventos escolares organizados por su madre. Desde entonces, su gusto musical se expandió sin límites, explorando sonidos modernos sin perder la esencia clubera y rítmica.',
          en: 'His bond with music began at 10, recording his favourite radio songs onto cassettes, inspired by his father. By 12 he was wiring sound systems at school events organized by his mother. Since then his taste has expanded without limits, exploring modern sounds without losing the clubber, rhythmic essence.',
        },
        {
          es: 'Cofundador de Trilogy Crew y residente desde hace 12 años junto a Terry Mood en Soho Punta del Este, una de las discotecas más emblemáticas del país. Ha tocado en Uruguay, Argentina, Brasil, España y Alemania — incluyendo el Main Floor de Green Valley (Camboriú), reconocida por DJ Mag como la segunda mejor discoteca del mundo en 2025.',
          en: 'Co-founder of Trilogy Crew and a 12-year resident alongside Terry Mood at Soho Punta del Este, one of the country\'s most iconic clubs. He has played in Uruguay, Argentina, Brazil, Spain and Germany — including the Main Floor of Green Valley (Camboriú), named the world\'s #2 club by DJ Mag in 2025.',
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
      es: 'Melódico · Progresivo · Amanecer',
      en: 'Melodic · Progressive · Sunrise',
    },
    bio: {
      lead: {
        es: '"El amanecer no se busca, se gana."',
        en: '"The sunrise isn\'t found, it\'s earned."',
      },
      paragraphs: [
        {
          es: 'Pablo Xberg arquitecta el ascenso lento. Donde otros buscan el drop, él busca el momento previo: el acorde suspendido, el silencio que la pista sostiene. Sus sets se despliegan como tiempo geológico — nada pasa, hasta que todo ha pasado.',
          en: 'Pablo Xberg architects the long climb. Where others chase the drop, he chases the moment before it: the suspended chord, the silence the room holds together. His sets unfold like geological time — nothing happens, until everything has happened.',
        },
        {
          es: 'Uruguayo de origen, hoy radicado en Berlín, su recorrido cruza el Atlántico y mezcla la calidez clubber rioplatense con el rigor melódico europeo. Esa doble residencia mental — Montevideo y Berlín — se traduce en sets que viajan entre lo introspectivo y lo eufórico sin perder el hilo.',
          en: 'Uruguayan by origin, Berlin-based today, his journey crosses the Atlantic and blends the warm clubber spirit of the River Plate with the melodic rigour of Europe. That double mental residency — Montevideo and Berlin — translates into sets that move between introspection and euphoria without losing the thread.',
        },
        {
          es: 'Cofundador de Trilogy Crew junto a Terry Mood y Mr Green, aporta al colectivo el lado más melódico del espectro: progresivo, deep house emocional y techno melódico para sets largos de cierre.',
          en: 'Co-founder of Trilogy Crew alongside Terry Mood and Mr Green, he brings the collective\'s most melodic side to the table: progressive, emotional deep house and melodic techno for long closing sets.',
        },
      ],
    },
    meta: {
      based: { es: 'Berlín', en: 'Berlin' },
      origin: { es: 'Uruguay', en: 'Uruguay' },
      activeSince: '2015',
      bpmRange: '120–128',
    },
    genres: {
      es: 'Melodic Techno · Progressive · Deep House',
      en: 'Melodic Techno · Progressive · Deep House',
    },
    socials: [
      { platform: 'soundcloud', label: 'SoundCloud', handle: '@pabloxberg', url: 'https://soundcloud.com/pabloxberg', cta: ctaListen },
      { platform: 'instagram', label: 'Instagram', handle: '@pabloxberg', url: '#', cta: ctaFollow },
      { platform: 'spotify', label: 'Spotify', handle: 'Pablo Xberg', url: '#', cta: ctaStream },
      { platform: 'bandcamp', label: 'Bandcamp', handle: 'pabloxberg.bandcamp.com', url: '#', cta: ctaBuy },
    ],
    clubs: [
      'Berlín — selección',
      'Montevideo — selección',
      '(Lista en construcción)',
    ],
    events: [],
    presskit: { size: 'PDF', url: '#' },
    email: 'pablo@trilogycrew.com',
    trackUrls: [
      'https://soundcloud.com/pabloxberg',
      'https://soundcloud.com/pabloxberg/tracks',
    ],
  },
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
  founded: '2024',
  members: '03',
  base: 'MVD',
  events: '17',
} as const;
