import { useId } from "react";

// Iconos propios estilo "3D glossy sticker" para sustituir los emojis del
// sistema: insignia con degradado + brillo superior + sombra, y un
// glifo plano encima. Paleta atada a la marca (negro/turquesa/amarillo).

function Badge({ id, from, to, children, className }) {
  return (
    <svg viewBox="0 0 44 44" className={`glossy-icon ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="6" y1="4" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
        <radialGradient id={`${id}-gloss`} cx="0.32" cy="0.26" r="0.55">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.65" />
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

export function GradCapIcon({ className = "" }) {
  const id = useId();
  return (
    <Badge id={id} from="#2a2c31" to="#0a0b0d" className={className}>
      <path d="M22 12 8 18.5 22 25l14-6.5Z" fill="#f2ff3d" />
      <path d="M14 21.3v5.4c0 1.9 3.6 3.4 8 3.4s8-1.5 8-3.4v-5.4l-8 3.7Z" fill="#fdffcf" />
      <path d="M32 19v6.5" stroke="#f2ff3d" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="32" cy="26.3" r="1.6" fill="#f2ff3d" />
    </Badge>
  );
}

export function FolderIcon({ className = "" }) {
  const id = useId();
  return (
    <Badge id={id} from="#3dfcd0" to="#0f8f6c" className={className}>
      <path d="M9 16.5c0-1 .8-1.8 1.8-1.8h5.4l2 2.3h13c1 0 1.8.8 1.8 1.8v9.6c0 1-.8 1.8-1.8 1.8H10.8c-1 0-1.8-.8-1.8-1.8Z" fill="#fff7d6" />
      <path d="M9 19.2h24v9.7c0 1-.8 1.8-1.8 1.8H10.8c-1 0-1.8-.8-1.8-1.8Z" fill="#ffe469" />
    </Badge>
  );
}

export function RocketIcon({ className = "" }) {
  const id = useId();
  return (
    <Badge id={id} from="#e9eef4" to="#aab4c4" className={className}>
      <path d="M22 8c4.6 3 6.6 8 6.6 13.4 0 2.4-.5 4.5-1.3 6.2h-10.6c-.8-1.7-1.3-3.8-1.3-6.2C15.4 16 17.4 11 22 8Z" fill="#fff" stroke="#c3ccd8" strokeWidth="0.6" />
      <circle cx="22" cy="18.2" r="2.6" fill="#21ffc7" />
      <path d="M15.6 24.4 11 29.6l6-1.6Z" fill="#f2ff3d" />
      <path d="M28.4 24.4 33 29.6l-6-1.6Z" fill="#f2ff3d" />
      <path d="M18.8 27.6h6.4l-2 6.4c-.4 1.2-1.9 1.2-2.3 0Z" fill="#ff8a3d" />
    </Badge>
  );
}

export function GiftIcon({ className = "" }) {
  const id = useId();
  return (
    <Badge id={id} from="#2be6c4" to="#0aa27f" className={className}>
      <rect x="10" y="19" width="24" height="13.5" rx="1.6" fill="#fff7d6" />
      <rect x="10" y="19" width="24" height="4.6" fill="#ffe469" />
      <rect x="20.5" y="19" width="3" height="13.5" fill="#ffe469" />
      <path
        d="M22 19c-3-4.6-8.6-4.2-8.6-1.2 0 1.6 2 1.2 8.6 1.2Zm0 0c3-4.6 8.6-4.2 8.6-1.2 0 1.6-2 1.2-8.6 1.2Z"
        fill="#ffe469"
      />
    </Badge>
  );
}
