import type { Lang } from '../data/djs';

/**
 * UI translation dictionary. DJ-specific copy lives in `data/djs.ts` as Localized objects.
 * Keep keys flat and namespaced with dots: 'nav.home', 'footer.bookings', etc.
 */
export const translations = {
  es: {
    'nav.home': 'Inicio',

    'home.meta.year': 'FUNDADO 2024 / MONTEVIDEO',
    'home.meta.vol': 'VOL. 001',
    'home.meta.tag': 'COLECTIVO DE DJS',
    'home.tagline':
      'Tres identidades sonoras, un solo ritual. Donde la pista no se mide en BPM sino en momentos compartidos.',
    'home.right.l1': 'TRES DJS',
    'home.right.l2': 'UNA PISTA',
    'home.right.l3': 'SIN CONCESIONES',

    'home.members.num': 'EL COLECTIVO',
    'home.members.title': 'Miembros',

    'home.about.num': 'MANIFIESTO',
    'home.about.title': 'Sobre nosotros',
    'home.about.lead':
      'Somos un grupo de djs amantes de la <em>buena música</em> y su difusión.',
    'home.about.body':
      'En nuestros eventos encontrarás un lugar mágico, donde somos todos iguales, donde nadie ni nada vale más que nada, donde lo único importante es la música y que, al menos durante ese tiempo, seas feliz.',

    'home.stat.founded': 'Fundado',
    'home.stat.members': 'Miembros',
    'home.stat.base': 'Base',
    'home.stat.events': 'Eventos',

    'home.events.num': 'AGENDA',
    'home.events.title': 'Próximos eventos',

    'events.info': 'Info ↗',

    'footer.links': 'LINKS',
    'footer.contact': 'CONTACTO',
    'footer.bookings': 'BOOKINGS',
    'footer.back': 'VOLVER',
    'footer.back.home': 'Inicio',
    'footer.brand.tag':
      'Colectivo de DJs basado en Montevideo. Tres identidades sonoras, un ritual compartido.',

    'dj.bc': '← TRILOGY / MIEMBROS / ',
    'dj.meta.based': 'Basado en',
    'dj.meta.origin': 'Origen',
    'dj.meta.since': 'Activo desde',
    'dj.meta.bpm': 'BPM',
    'dj.bio.label': '/// BIO',
    'dj.tracks.num': '/// SOUNDCLOUD',
    'dj.tracks.title': 'Tracks',
    'dj.socials.num': '/// CONECTAR',
    'dj.socials.title': 'Redes',
    'dj.gallery.num': '/// LIVE',
    'dj.gallery.title': 'Galería',
    'dj.presskit.title': 'Presskit',
    'dj.presskit.desc':
      'Fotos en alta, bio en ES/EN, rider técnico y logos. PDF + bundle.',
    'dj.presskit.cta': 'Descargar',
    'dj.upcoming.num': '/// AGENDA',
    'dj.upcoming.title': 'Próximas fechas',

    'dj.meta.realname': 'Nombre real',
    'dj.releases.num': '/// DISCOGRAFÍA',
    'dj.releases.title': 'Lanzamientos',
    'dj.releases.label': 'Sello',
    'dj.clubs.num': '/// TRAYECTORIA',
    'dj.clubs.title': 'Clubes & escenarios',
    'dj.playedwith.num': '/// CARTEL',
    'dj.playedwith.title': 'Han compartido cabina',
    'dj.playedwith.intl': 'Internacionales',
    'dj.playedwith.natl': 'Nacionales',
    'dj.rider.num': '/// TÉCNICO',
    'dj.rider.title': 'Rider',

    'clock.label': 'MVD',
  },
  en: {
    'nav.home': 'Home',

    'home.meta.year': 'EST. 2024 / MONTEVIDEO',
    'home.meta.vol': 'VOL. 001',
    'home.meta.tag': 'DJ COLLECTIVE',
    'home.tagline':
      "Three sonic identities, one shared ritual. Where the floor isn't measured in BPM but in shared moments.",
    'home.right.l1': 'THREE DJS',
    'home.right.l2': 'ONE FLOOR',
    'home.right.l3': 'NO COMPROMISE',

    'home.members.num': 'THE COLLECTIVE',
    'home.members.title': 'Members',

    'home.about.num': 'MANIFESTO',
    'home.about.title': 'About us',
    'home.about.lead':
      'We are a group of djs in love with <em>good music</em> and its spread.',
    'home.about.body':
      "At our events you'll find a magical place, where we are all equal, where no one and nothing is worth more than anything else, where the only thing that matters is the music and that, at least during that time, you are happy.",

    'home.stat.founded': 'Founded',
    'home.stat.members': 'Members',
    'home.stat.base': 'Based',
    'home.stat.events': 'Events',

    'home.events.num': 'SCHEDULE',
    'home.events.title': 'Upcoming events',

    'events.info': 'Info ↗',

    'footer.links': 'LINKS',
    'footer.contact': 'CONTACT',
    'footer.bookings': 'BOOKINGS',
    'footer.back': 'BACK',
    'footer.back.home': 'Home',
    'footer.brand.tag':
      'DJ collective based in Montevideo. Three sonic identities, one shared ritual.',

    'dj.bc': '← TRILOGY / MEMBERS / ',
    'dj.meta.based': 'Based in',
    'dj.meta.origin': 'Origin',
    'dj.meta.since': 'Active since',
    'dj.meta.bpm': 'BPM',
    'dj.bio.label': '/// BIO',
    'dj.tracks.num': '/// SOUNDCLOUD',
    'dj.tracks.title': 'Tracks',
    'dj.socials.num': '/// CONNECT',
    'dj.socials.title': 'Socials',
    'dj.gallery.num': '/// LIVE',
    'dj.gallery.title': 'Gallery',
    'dj.presskit.title': 'Presskit',
    'dj.presskit.desc':
      'Hi-res press shots, bio in ES/EN, technical rider and logos. PDF + bundle.',
    'dj.presskit.cta': 'Download',
    'dj.upcoming.num': '/// SCHEDULE',
    'dj.upcoming.title': 'Upcoming dates',

    'dj.meta.realname': 'Real name',
    'dj.releases.num': '/// DISCOGRAPHY',
    'dj.releases.title': 'Releases',
    'dj.releases.label': 'Label',
    'dj.clubs.num': '/// TRACK RECORD',
    'dj.clubs.title': 'Clubs & stages',
    'dj.playedwith.num': '/// LINEUPS',
    'dj.playedwith.title': 'Shared the booth with',
    'dj.playedwith.intl': 'International',
    'dj.playedwith.natl': 'National',
    'dj.rider.num': '/// TECHNICAL',
    'dj.rider.title': 'Rider',

    'clock.label': 'MVD',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type TranslationKey = keyof typeof translations.es;
