import { useId } from "react";

// Iconos propios, ilustrados para esta página: insignia con degradado +
// brillo + sombra (estilo "sticker 3D"), y un dibujo propio encima —
// nada de clip-art genérico ni emojis de sistema.

function Badge({ id, from, to, children, className }) {
  return (
    <svg viewBox="0 0 44 44" className={`glossy-icon ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="6" y1="4" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
        <radialGradient id={`${id}-gloss`} cx="0.32" cy="0.24" r="0.6">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="40" height="40" rx="12" fill={`url(#${id}-bg)`} />
      <rect x="2" y="2" width="40" height="40" rx="12" fill={`url(#${id}-gloss)`} />
      <rect x="2" y="2" width="40" height="40" rx="12" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="1" />
      {children}
    </svg>
  );
}

// La Cápsula Creativa — birrete con un amuleto de estrella en la borla,
// como guiño al resto de estrellitas de la página.
export function GradCapIcon({ className = "" }) {
  const id = useId();
  return (
    <Badge id={id} from="#2a2c31" to="#0a0b0d" className={className}>
      <path d="M22 11 7.5 17.8 22 24.6l14.5-6.8Z" fill="#f2ff3d" />
      <path d="M22 11 7.5 17.8 22 24.6l14.5-6.8Z" fill="none" stroke="#0a0b0d" strokeWidth="0.6" strokeOpacity="0.25" />
      <path d="M13.5 20.6v5.6c0 1.9 3.8 3.6 8.5 3.6s8.5-1.7 8.5-3.6v-5.6L22 24.6Z" fill="#fdffcf" />
      <path d="M33.5 18.2v6.6" stroke="#f2ff3d" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M33.5 24.4c-1.6 1.6-1.6 2.9 0 4.4 1.6-1.5 1.6-2.8 0-4.4Z"
        fill="#f2ff3d"
      />
    </Badge>
  );
}

// Flowly — carpeta con el contenido ya ordenado: fichas asomando por
// detrás, en vez de una carpeta vacía.
export function FolderIcon({ className = "" }) {
  const id = useId();
  return (
    <Badge id={id} from="#3dfcd0" to="#0f8f6c" className={className}>
      <rect x="12.5" y="8.5" width="8" height="12" rx="1.3" fill="#fff" transform="rotate(-8 16.5 14.5)" />
      <rect x="20" y="7.5" width="8" height="12" rx="1.3" fill="#fff7d6" transform="rotate(4 24 13.5)" />
      <path d="M9 17.2c0-1 .8-1.9 1.9-1.9h5.6l2 2.4H32c1 0 1.9.9 1.9 1.9v9.9c0 1-.9 1.9-1.9 1.9H10.9c-1 0-1.9-.9-1.9-1.9Z" fill="#e9fff8" />
      <path d="M9 20h24.9v8.5c0 1-.9 1.9-1.9 1.9H10.9c-1 0-1.9-.9-1.9-1.9Z" fill="#ffe469" />
      <path d="M14.5 24.5h9" stroke="#0f8f6c" strokeWidth="1.6" strokeLinecap="round" />
    </Badge>
  );
}

// El Propulsor — despega en diagonal, con una chispa en la escotilla
// (la idea que se enciende) y una estela de velocidad.
export function RocketIcon({ className = "" }) {
  const id = useId();
  return (
    <Badge id={id} from="#e9eef4" to="#aab4c4" className={className}>
      <g transform="rotate(24 22 23)">
        <path d="M9 27.5 13 25l1.3 3.2Z" fill="#21ffc7" opacity="0.85" />
        <path d="M11.8 30 15 26.8l2.2 2.1Z" fill="#f2ff3d" opacity="0.7" />
        <path d="M22 6.5c4.8 3 6.9 8.3 6.9 14 0 2.5-.5 4.7-1.4 6.5H16.5c-.9-1.8-1.4-4-1.4-6.5 0-5.7 2.1-11 6.9-14Z" fill="#fff" stroke="#c3ccd8" strokeWidth="0.6" />
        <circle cx="22" cy="16.6" r="3" fill="#0a0b0d" />
        <circle cx="22" cy="16.6" r="1.7" fill="#f2ff3d" />
        <path d="M15.1 23.6l-5 5.6 6.7-2Z" fill="#21ffc7" />
        <path d="M28.9 23.6l5 5.6-6.7-2Z" fill="#21ffc7" />
        <path d="M18.7 27h6.6l-2.1 6.8c-.4 1.3-2 1.3-2.4 0Z" fill="#ff8a3d" />
        <path d="M20.3 27h3.4l-1.1 5.4c-.2.9-1 .9-1.2 0Z" fill="#ffe469" />
      </g>
    </Badge>
  );
}

// Ahorro — regalo con etiqueta de descuento y un brillo, para que la
// cifra de ahorro se lea como un premio, no como un icono genérico.
export function GiftIcon({ className = "" }) {
  const id = useId();
  return (
    <Badge id={id} from="#2be6c4" to="#0aa27f" className={className}>
      <rect x="9.5" y="18.5" width="24" height="14" rx="1.6" fill="#e9fff8" />
      <rect x="9.5" y="18.5" width="24" height="5" fill="#ffe469" />
      <rect x="20.2" y="18.5" width="3.2" height="14" fill="#ffe469" />
      <path
        d="M21.5 18.5c-2.8-4.8-8.6-4.6-8.6-1.4 0 1.7 1.9 1.4 8.6 1.4Zm1.3 0c2.8-4.8 8.6-4.6 8.6-1.4 0 1.7-1.9 1.4-8.6 1.4Z"
        fill="#ffe469"
      />
      <path d="M31.5 12.5 33.6 13.3 32.8 15.4 30.7 14.6Z" fill="#fff" opacity="0.85" />
      <circle cx="10.5" cy="14" r="1.3" fill="#fff" opacity="0.6" />
    </Badge>
  );
}
