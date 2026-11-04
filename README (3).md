# Trilogy Crew

Sitio web del colectivo de DJs Trilogy Crew. Stack: **Vite + React 18 + TypeScript + React Router 6**.

Sin backend. Despliegue estático en cualquier hosting (Vercel, Netlify, Cloudflare Pages, tu VPS).

## Empezar

```bash
npm install
npm run dev
```

Se abre en `http://localhost:5173`.

## Scripts

- `npm run dev` — servidor de desarrollo con HMR
- `npm run build` — build de producción a `dist/`
- `npm run preview` — sirve el build localmente para probarlo
- `npm run lint` — chequea tipos con TypeScript (sin emitir archivos)

## Estructura

```
src/
├── data/djs.ts            ← TODA la info de los DJs vive acá
├── i18n/translations.ts   ← strings de UI (botones, labels) ES/EN
├── contexts/LangContext.tsx
├── components/            ← Nav, Footer, EventList, DjCard, etc.
├── pages/
│   ├── HomePage.tsx
│   └── DjPage.tsx         ← una sola page, parametrizada por slug
└── styles/global.css
```

## Agregar un DJ nuevo

Editar `src/data/djs.ts` y agregar un objeto al array `djs`:

```ts
{
  slug: 'nombre-dj',           // → URL /dj/nombre-dj
  order: '04',
  letter: 'D',
  name: 'Nombre DJ',
  nameLines: ['NOMBRE', 'DJ'], // para el h1 grande
  photoUrl: '/assets/nombre-dj.png',  // poner la foto en public/assets/
  role: { es: '...', en: '...' },
  bio: {
    lead: { es: '"..."', en: '"..."' },   // puede contener <em>
    paragraphs: [
      { es: '...', en: '...' },
      { es: '...', en: '...' },
    ],
  },
  meta: {
    based: { es: 'Montevideo', en: 'Montevideo' },
    origin: { es: 'Uruguay', en: 'Uruguay' },
    activeSince: '2020',
    bpmRange: '125–132',
  },
  socials: [ /* ... */ ],
  events: [ /* ... */ ],
  presskit: { size: '20MB', url: '/assets/nombre-dj-presskit.pdf' },
  email: 'nombre@trilogycrew.com',
  trackUrls: ['https://soundcloud.com/...', 'https://soundcloud.com/.../tracks'],
}
```

Eso es todo. El Nav, el grid de Home y la ruta `/dj/:slug` lo recogen automáticamente.

TypeScript te avisa si te falta algún campo.

## Traducciones

- **Strings de UI** (nav, footer, labels, botones): `src/i18n/translations.ts`. Agregar la key y rellenar `es` y `en`.
- **Copy específico de un DJ** (bio, role, eventos): directo en `data/djs.ts`, como objeto `{ es, en }`.

El idioma actual se guarda en `localStorage` (key `trilogy-lang`).

## Reemplazar el presskit

1. Subir el PDF a `public/assets/mr-green-presskit.pdf` (o donde sea)
2. En `data/djs.ts`, cambiar `presskit: { size: '24MB', url: '#' }` → `url: '/assets/mr-green-presskit.pdf'`

## Reemplazar fotos

Poner el archivo en `public/assets/` y actualizar `photoUrl` en `data/djs.ts`. La carpeta `public/` se sirve desde la raíz, así que `/assets/foto.png` apunta a `public/assets/foto.png`.

## Deploy

Build:

```bash
npm run build
```

Sube `dist/` a:

- **Vercel / Netlify**: drag-and-drop o conectar el repo de GitHub
- **Cloudflare Pages**: lo mismo
- **VPS propio (Nginx)**: copiar `dist/` al docroot. Importante configurar el fallback SPA para que las rutas `/dj/:slug` no devuelvan 404 con refresh:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Stack y decisiones

- **React Router 6** con rutas reales (`/`, `/dj/:slug`) en lugar de hash routing. URLs limpias, compartibles.
- **TypeScript estricto** (`strict: true`). El tipo `Dj` define el contrato — agregar un DJ es imposible si te falta un campo.
- **CSS global** (un solo archivo) en lugar de CSS modules o styled-components. Para un sitio chico es lo más simple. Si crece, fácil de migrar.
- **Contexto para idioma** + `localStorage` para persistencia. Sin librerías de i18n pesadas — la app es chica, un objeto + un hook alcanza.
- **`dangerouslySetInnerHTML`** se usa solo para `<em>` dentro de leads y bios. El contenido viene de `data/djs.ts` que vos controlás, así que no hay riesgo XSS.

## TODO / Próximos pasos

- [ ] Reemplazar bios ficticias con las reales
- [ ] Conseguir URLs reales de Instagram / Spotify / etc.
- [ ] Generar y enlazar los PDFs de presskit
- [ ] Subir fotos para las galerías (hoy son placeholders)
- [ ] Reemplazar los eventos ficticios con la agenda real
- [ ] Considerar agregar una página `/eventos` con histórico completo
- [ ] Considerar OpenGraph tags para preview en redes
