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
  Cursor, SoundToggle, Doodles).
- `src/hooks/` — contexto y motor de sonido (Web Audio, sin ficheros de audio).
- `src/constants.js` — URL de Skool y fecha límite de la oferta, centralizadas.

## Pendiente antes de publicar

- Sustituir los 3 testimonios placeholder por reales.
- Añadir el meme de "dar palos de ciego" en la sección de dolor.
- Revisar que la URL de Skool (`src/constants.js`) sea la definitiva.
