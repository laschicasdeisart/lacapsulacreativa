// Iconos propios en estilo cartoon/pegatina (plano, contorno grueso) —
// el mismo lenguaje que las estrellas y garabatos de Doodles.jsx. Nada
// de degradados ni brillo: que se lean como un dibujo, no como un
// emoji 3D. La sombra dura "de pegatina" se aplica en CSS
// (drop-shadow con blur 0), así el contorno negro ya hace de silueta.

const INK = "#060607";

// La Cápsula Creativa — birrete con borla y una chispa turquesa al
// final, como guiño al resto de estrellas de la página.
export function GradCapIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 44 34" className={`cartoon-icon ${className}`} aria-hidden="true">
      <path d="M20 2 2 11l18 9 18-9Z" fill="var(--yellow)" stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
      <path
        d="M10 15.5v7c0 2.5 4.3 4.5 10 4.5s10-2 10-4.5v-7L20 20Z"
        fill="#fff"
        stroke={INK}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M38 12v8" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M38 20.5c-2.1 1.9-2.1 3.8 0 5.8 2.1-2 2.1-3.9 0-5.8Z"
        fill="var(--turquoise)"
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Flowly — carpeta con el contenido ya ordenado, no vacía: fichas
// asomando por detrás y un check en la portada.
export function FolderIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 44 34" className={`cartoon-icon ${className}`} aria-hidden="true">
      <rect x="8" y="1" width="9" height="14" rx="1.3" fill="#fff" stroke={INK} strokeWidth="2.2" transform="rotate(-7 12.5 8)" />
      <rect x="16" y="0" width="9" height="14" rx="1.3" fill="#fff7d6" stroke={INK} strokeWidth="2.2" transform="rotate(5 20.5 7)" />
      <path
        d="M2 11.3c0-1.2.9-2.1 2.1-2.1h8l2.4 2.7H40c1.2 0 2.1.9 2.1 2.1v12c0 1.2-.9 2.1-2.1 2.1H4.1C2.9 28.1 2 27.2 2 26Z"
        fill="var(--turquoise)"
        stroke={INK}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M2 15h40.1v8.7c0 1.2-.9 2.1-2.1 2.1H4.1C2.9 25.8 2 24.9 2 23.7Z"
        fill="var(--yellow)"
        stroke={INK}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M10 19.5h11" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// El Propulsor — cohete despegando en diagonal, chispa en la
// escotilla, llama de dos colores.
export function RocketIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 44 44" className={`cartoon-icon ${className}`} aria-hidden="true">
      <g transform="rotate(24 22 22)">
        <path
          d="M22 3c5.2 3.3 7.5 9 7.5 15.1 0 2.7-.6 5-1.6 6.9H16.1c-1-1.9-1.6-4.2-1.6-6.9C14.5 12 16.8 6.3 22 3Z"
          fill="#fff"
          stroke={INK}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <circle cx="22" cy="14" r="3.3" fill="var(--turquoise)" stroke={INK} strokeWidth="2.2" />
        <path
          d="M14.5 26.2l-6 6.4 7.6-2.3Z"
          fill="var(--turquoise)"
          stroke={INK}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M29.5 26.2l6 6.4-7.6-2.3Z"
          fill="var(--turquoise)"
          stroke={INK}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M18.3 29.7h7.4l-2.3 7.3c-.5 1.3-2.2 1.3-2.7 0Z"
          fill="var(--yellow)"
          stroke={INK}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

// Ahorro — regalo con lazo, sencillo y directo.
export function GiftIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 44 36" className={`cartoon-icon ${className}`} aria-hidden="true">
      <rect x="6" y="13" width="28" height="17" rx="1.6" fill="#fff" stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
      <rect x="6" y="13" width="28" height="6" fill="var(--yellow)" stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
      <rect x="18.5" y="13" width="5" height="17" fill="var(--yellow)" stroke={INK} strokeWidth="2" />
      <path
        d="M21 13c-3.2-5.6-10-5.4-10-1.6 0 2 2.2 1.6 10 1.6Zm2 0c3.2-5.6 10-5.4 10-1.6 0 2-2.2 1.6-10 1.6Z"
        fill="var(--turquoise)"
        stroke={INK}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
