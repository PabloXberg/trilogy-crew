/**
 * Trilogy Crew — DJ data.
 *
 * To add a new DJ: append a new object to the `djs` array. All TypeScript
 * types are enforced, so the compiler will tell you what's missing.
 *
 * Strings that need translation use a `Localized` shape: `{ es, en }`.
 * Generic UI strings (button labels, nav, etc.) live in `src/i18n/translations.ts`.
 *
 * HTML allowed inside bio/lead strings: only <em>. Renders italic accent color.
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
  /** Display label, e.g. "SoundCloud" */
  label: string;
  /** Handle as shown to the user, e.g. "@mrgreen_uy" */
  handle: string;
  /** Full URL. Use "#" if not yet known. */
  url: string;
  /** CTA label shown bottom-right of the social card. */
  cta: Localized;
}

export interface DjEvent {
  /** "DD.MM" */
  date: string;
  /** Localized weekday short form, e.g. { es: 'SAB', en: 'SAT' } */
  weekday: Localized;
  venue: string;
  /** Subtitle below the venue, e.g. "Ciudad Vieja, MVD" */
  venueDetail: Localized;
  /** Lineup / time info, e.g. "23:00 → late · B2B" */
  lineup: Localized;
  /** Link to event page (RA, Instagram, etc). "#" if unknown. */
  url: string;
}

export interface Dj {
  /** URL slug, used in /dj/:slug */
  slug: string;
  /** Order label like "01" */
  order: string;
  /** Single letter label like "A" */
  letter: string;
  /** Display name in one line, e.g. "Mr Green" */
  name: string;
  /** Display name split into two lines for the hero h1 */
  nameLines: [string, string];
  /** Path to portrait, relative to /public (e.g. "/assets/mr-green.png") */
  photoUrl: string;
  /** Short role / style descriptor */
  role: Localized;
  bio: {
    /** Big lead quote. May contain <em>...</em> */
    lead: Localized;
    /** Paragraphs in order */
    paragraphs: Localized[];
  };
  meta: {
    based: Localized;
    origin: Localized;
    /** Year, e.g. "2018" */
    activeSince: string;
    /** e.g. "128–138" */
    bpmRange: string;
  };
  socials: Social[];
  events: DjEvent[];
  presskit: {
    /** e.g. "24MB" */
    size: string;
    /** Path to PDF, or "#" if not ready */
    url: string;
  };
  email: string;
  /**
   * Two SoundCloud URLs to embed as iframes.
   * Usually [profile_url, profile_url + "/tracks"]
   */
  trackUrls: [string, string];
}

const ctaListen: Localized = { es: 'ESCUCHAR ↗', en: 'LISTEN ↗' };
const ctaFollow: Localized = { es: 'SEGUIR ↗', en: 'FOLLOW ↗' };
const ctaStream: Localized = { es: 'STREAM ↗', en: 'STREAM ↗' };
const ctaProfile: Localized = { es: 'PERFIL ↗', en: 'PROFILE ↗' };
const ctaBuy: Localized = { es: 'COMPRAR ↗', en: 'BUY ↗' };
const ctaMixes: Localized = { es: 'MIXES ↗', en: 'MIXES ↗' };
const SAB: Localized = { es: 'SAB', en: 'SAT' };
const VIE: Localized = { es: 'VIE', en: 'FRI' };
const JUE: Localized = { es: 'JUE', en: 'THU' };

export const djs: Dj[] = [
  /* ============================================================
     01 — MR GREEN
     ============================================================ */
  {
    slug: 'mr-green',
    order: '01',
    letter: 'A',
    name: 'Mr Green',
    nameLines: ['MR', 'GREEN'],
    photoUrl: '/assets/mr-green.png',
    role: {
      es: 'Techno · House · Pista cargada',
      en: 'Techno · House · Loaded floors',
    },
    bio: {
      lead: {
        es: '"Si la pista no suda, <em>no es la pista correcta</em>."',
        en: '"If the floor isn\'t sweating, <em>it\'s the wrong floor</em>."',
      },
      paragraphs: [
        {
          es: 'Mr Green se formó en el circuito uruguayo de fiestas clandestinas y rooftops montevideanos. Su sonido es una negociación entre el techno tribal y el house más groove: kicks redondos, percusión cruda y un sentido del timing que viene de muchas noches detrás de los platos.',
          en: 'Mr Green was forged in Uruguay\'s underground circuit — secret parties and Montevideo rooftops. His sound negotiates between tribal techno and groove-heavy house: rounded kicks, raw percussion and a sense of timing that comes from many nights behind the decks.',
        },
        {
          es: 'Residente en eventos selectos del cono sur, ha compartido cabina con nombres internacionales y locales por igual. Prefiere las cabinas pequeñas y las pistas que reaccionan en tiempo real.',
          en: 'Resident at select Southern Cone events, he has shared the booth with international and local names alike. Prefers small booths and floors that react in real time.',
        },
      ],
    },
    meta: {
      based: { es: 'Montevideo', en: 'Montevideo' },
      origin: { es: 'Uruguay', en: 'Uruguay' },
      activeSince: '2018',
      bpmRange: '128–138',
    },
    socials: [
      { platform: 'soundcloud', label: 'SoundCloud', handle: '@mrgreen_uy', url: 'https://soundcloud.com/mrgreen_uy', cta: ctaListen },
      { platform: 'instagram', label: 'Instagram', handle: '@mrgreen.uy', url: '#', cta: ctaFollow },
      { platform: 'spotify', label: 'Spotify', handle: 'Mr Green', url: '#', cta: ctaStream },
      { platform: 'facebook', label: 'Facebook', handle: '/mrgreen.uy', url: '#', cta: ctaProfile },
    ],
    events: [
      { date: '14.06', weekday: SAB, venue: 'Phonotheque', venueDetail: { es: 'Trilogy night', en: 'Trilogy night' }, lineup: { es: '02:00 – 06:00', en: '02:00 – 06:00' }, url: '#' },
      { date: '28.06', weekday: SAB, venue: 'Bahrein', venueDetail: { es: 'B2B Terry Mood', en: 'B2B Terry Mood' }, lineup: { es: '23:00 – 03:00', en: '23:00 – 03:00' }, url: '#' },
      { date: '19.07', weekday: VIE, venue: 'Lotus', venueDetail: { es: 'Pocitos, MVD', en: 'Pocitos, MVD' }, lineup: { es: '04:00 – cierre', en: '04:00 – close' }, url: '#' },
    ],
    presskit: { size: '24MB', url: '#' },
    email: 'mrgreen@trilogycrew.com',
    trackUrls: [
      'https://soundcloud.com/mrgreen_uy',
      'https://soundcloud.com/mrgreen_uy/tracks',
    ],
  },

  /* ============================================================
     02 — PABLO X BERG
     ============================================================ */
  {
    slug: 'pablo-xberg',
    order: '02',
    letter: 'B',
    name: 'Pablo Xberg',
    nameLines: ['PABLO', 'XBERG'],
    photoUrl: '/assets/pablo-xberg.png',
    role: {
      es: 'Melódico · Progresivo · Amanecer',
      en: 'Melodic · Progressive · Sunrise',
    },
    bio: {
      lead: {
        es: '"El amanecer <em>se gana</em>."',
        en: '"The sunrise <em>should be earned</em>."',
      },
      paragraphs: [
        {
          es: 'Pablo Xberg arquitecta el ascenso lento. Donde otros buscan el drop, él busca el momento previo: el acorde suspendido, el silencio que la pista sostiene. Sus sets se despliegan como tiempo geológico: nada pasa, hasta que todo ha pasado.',
          en: 'Pablo Xberg architects the long climb. Where others chase the drop, he chases the moment before it: the suspended chord, the silence the room holds together. His sets unfold like geological time — nothing happens, until everything has happened.',
        },
        {
          es: 'Uruguayo de origen, residente en Berlín, paseante de pistas en ambos lados del Atlántico. Cada transición es armónica, cada breakdown está medido. No le pidas un single — no los hace.',
          en: 'Uruguayan-born, Berlin-based, working both sides of the Atlantic. Every transition is harmonic, every breakdown is paced. Don\'t ask him for a single — he doesn\'t make them.',
        },
      ],
    },
    meta: {
      based: { es: 'Berlín', en: 'Berlin' },
      origin: { es: 'Uruguay', en: 'Uruguay' },
      activeSince: '2015',
      bpmRange: '120–128',
    },
    socials: [
      { platform: 'soundcloud', label: 'SoundCloud', handle: '@pabloxberg', url: 'https://soundcloud.com/pabloxberg', cta: ctaListen },
      { platform: 'instagram', label: 'Instagram', handle: '@pabloxberg', url: '#', cta: ctaFollow },
      { platform: 'spotify', label: 'Spotify', handle: 'Pablo Xberg', url: '#', cta: ctaStream },
      { platform: 'bandcamp', label: 'Bandcamp', handle: 'pabloxberg.bc', url: '#', cta: ctaBuy },
    ],
    events: [
      { date: '14.06', weekday: SAB, venue: 'Phonotheque', venueDetail: { es: 'Trilogy night', en: 'Trilogy night' }, lineup: { es: '22:00 – 02:00 · opening', en: '22:00 – 02:00 · opening' }, url: '#' },
      { date: '12.07', weekday: SAB, venue: 'La Trastienda', venueDetail: { es: 'Set de cierre', en: 'Closing set' }, lineup: { es: '19:00 – 23:00', en: '19:00 – 23:00' }, url: '#' },
      { date: '26.07', weekday: SAB, venue: 'Watergate, Berlin', venueDetail: { es: 'Water floor', en: 'Water floor' }, lineup: { es: '02:00 – 06:00', en: '02:00 – 06:00' }, url: '#' },
    ],
    presskit: { size: '22MB', url: '#' },
    email: 'pablo@trilogycrew.com',
    trackUrls: [
      'https://soundcloud.com/pabloxberg',
      'https://soundcloud.com/pabloxberg/tracks',
    ],
  },

  /* ============================================================
     03 — TERRY MOO
     ============================================================ */
  {
    slug: 'terry-mood',
    order: '03',
    letter: 'C',
    name: 'Terry Mood',
    nameLines: ['TERRY', 'MOOD'],
    photoUrl: '/assets/terry-mood.png',
    role: {
      es: 'Afro House · Latin · Percusión',
      en: 'Afro House · Latin · Percussion',
    },
    bio: {
      lead: {
        es: '"El tambor <em>estuvo antes</em>. Lo demás es decoración."',
        en: '"The drum <em>came first</em>. Everything else is decoration."',
      },
      paragraphs: [
        {
          es: 'Terry Mood toca como si cada track fuera una pregunta a la pista y cada transición su respuesta. Raíces en el candombe, escuela en los mixes de Black Coffee, afilado en las pistas más cálidas del Río de la Plata — sus sets traen Lagos, Montevideo, Ciudad del Cabo y el sótano del club en el que esté.',
          en: 'Terry Mood plays as if every track is a question to the floor and every transition the answer. Roots in candombe, schooled in Black Coffee mixes, sharpened in the warmer rooms of the Río de la Plata — his sets pull from Lagos, Montevideo, Cape Town and whichever basement he\'s in.',
        },
        {
          es: 'Curador del ciclo mensual "Murga After Hours". Se niega a tocar antes de medianoche salvo que el lugar tenga ventanas al cielo.',
          en: 'Curates a monthly show called "Murga After Hours". Refuses to play before midnight unless the venue has windows to the sky.',
        },
      ],
    },
    meta: {
      based: { es: 'Montevideo', en: 'Montevideo' },
      origin: { es: 'Uruguay', en: 'Uruguay' },
      activeSince: '2017',
      bpmRange: '118–126',
    },
    socials: [
      { platform: 'soundcloud', label: 'SoundCloud', handle: '@terrymooduy', url: 'https://soundcloud.com/terrymooduy', cta: ctaListen },
      { platform: 'instagram', label: 'Instagram', handle: '@terrymood.uy', url: '#', cta: ctaFollow },
      { platform: 'spotify', label: 'Spotify', handle: 'Terry Mood', url: '#', cta: ctaStream },
      { platform: 'mixcloud', label: 'Mixcloud', handle: '/terrymood', url: '#', cta: ctaMixes },
    ],
    events: [
      { date: '14.06', weekday: SAB, venue: 'Phonotheque', venueDetail: { es: 'Trilogy night', en: 'Trilogy night' }, lineup: { es: '06:00 – cierre · cierre', en: '06:00 – close · closer' }, url: '#' },
      { date: '28.06', weekday: SAB, venue: 'Bahrein', venueDetail: { es: 'B2B Mr Green', en: 'B2B Mr Green' }, lineup: { es: '23:00 – 03:00', en: '23:00 – 03:00' }, url: '#' },
      { date: '08.08', weekday: JUE, venue: 'Rooftop Sur', venueDetail: { es: 'Pocitos, MVD', en: 'Pocitos, MVD' }, lineup: { es: '19:00 – 23:00 · sunset', en: '19:00 – 23:00 · sunset' }, url: '#' },
    ],
    presskit: { size: '19MB', url: '#' },
    email: 'terrymood@trilogycrew.com',
    trackUrls: [
      'https://soundcloud.com/terrymooduy',
      'https://soundcloud.com/terrymooduy/tracks',
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
  { date: '28.06', weekday: SAB, venue: 'Bahrein', venueDetail: { es: 'Punta Carretas, MVD', en: 'Punta Carretas, MVD' }, lineup: { es: 'Mr Green B2B Terry Moodd', en: 'Mr Green B2B Terry Moodd' }, url: '#' },
  { date: '12.07', weekday: SAB, venue: 'La Trastienda', venueDetail: { es: 'Centro, MVD', en: 'Centro, MVD' }, lineup: { es: 'Pablo Xberg · set de cierre', en: 'Pablo Xberg · closing set' }, url: '#' },
  { date: '02.08', weekday: VIE, venue: 'Sala Zitarrosa', venueDetail: { es: 'Punta del Este', en: 'Punta del Este' }, lineup: { es: 'Trilogy x Costa Festival', en: 'Trilogy x Costa Festival' }, url: '#' },
];

export const crewStats = {
  founded: '2024',
  members: '03',
  base: 'MVD',
  events: '17',
} as const;
