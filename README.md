# La Cápsula Creativa — Landing "Vuelta al cole"

Landing de una sola página inspirada en [nodeck.online](https://www.nodeck.online),
con tipografía cartoon oversized, animaciones al scroll y un cursor
personalizado tipo subrayador. Paleta: fondo negro, turquesa flúor y amarillo
subrayador (en vez del rosa/negro de la referencia).

## Stack

- Vite + React
- Framer Motion (animaciones y scroll reveals)
- CSS plano con variables (sin frameworks de utilidades)
- Tipografías autoalojadas: Bricolage Grotesque (titulares) + Space Grotesk (texto)

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

- `src/components/` — una sección por fichero (Hero, Pain, Combo, Offer,
  Numbers, Testimonials, FAQ, Closing) más piezas reutilizables (Cta, Marker,
  Cursor, SoundToggle, Doodles, Countdown).
- `src/hooks/` — contexto y motor de sonido (Web Audio, sin ficheros de audio).
- `src/constants.js` — URL de Skool, precios (`PRICING`), precio de Flowly y
  fecha límite de la oferta (`OFFER_DEADLINE_ISO`), todo centralizado.

## Dos versiones de la landing

- **`index.html`** (`src/App.jsx`) — versión carrusel con flechas, pensada
  para tráfico orgánico/social que ya conoce la marca.
- **`ads.html`** (`src/AdsApp.jsx`) — mismo contenido y orden, pero en scroll
  vertical continuo sin flechas, pensada para tráfico frío de campañas de
  pago (Meta Ads). Ambas comparten los mismos componentes de sección; lo que
  cambia es el contenedor (`Deck`/`ScrollDeck`) y cómo se dispara la
  animación de entrada (por slide activo vs. por scroll real con
  `IntersectionObserver`, ver `src/components/Slide.jsx`).
- `npm run build` genera ambas páginas (`dist/index.html` y `dist/ads.html`).
  Para servir `ads.html` en una URL bonita tipo `/lavueltaalcole-ads`,
  configura una redirección en el hosting (Netlify `_redirects`, Vercel
  `vercel.json`, etc.) hacia `/ads.html`.

## Precios

Skool cobra en **dólares** ($22/mes o $220/año Estándar; $47/mes o $400/año
Premium). La landing muestra un € aproximado (redondeado, cambio ~0.86) con
nota de "cobro real en USD" junto a cada precio — nunca solo el número en €.
Si el tipo de cambio se mueve mucho, actualiza `eurMonthlyApprox` en
`src/constants.js`.

## Pendiente antes de publicar

- Sustituir los 5 testimonios placeholder por reales (nombre + @ + foto en
  al menos 3, para tráfico de pago).
- Añadir un bloque corto de "quiénes somos" (Irene y María) antes del
  pricing, pensado para tráfico frío.
- Añadir el meme de "dar palos de ciego" en la sección de dolor.
- Revisar que la URL de Skool (`src/constants.js`) sea la definitiva.
- Configurar el píxel de Meta para que el evento `Purchase` reporte
  `currency: USD` (el cobro real), y verificarlo en el Test de Eventos.
