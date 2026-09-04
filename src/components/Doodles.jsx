// Pequeños "props de papelería" en SVG: estrella, garabato, chincheta,
// para dar el toque cartoon/scrapbook de la referencia.

export function Star({ className = "", color = "var(--turquoise)" }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none">
      <path
        d="M30 0c1.8 13 4 20.2 8.5 24.7C43 29.2 50.3 31.4 60 33c-9.7 1.6-17 3.8-21.5 8.3C34 45.8 31.8 53 30 66c-1.8-13-4-20.2-8.5-24.7C17 36.8 9.7 34.6 0 33c9.7-1.6 17-3.8 21.5-8.3C26 20.2 28.2 13 30 0Z"
        fill={color}
      />
    </svg>
  );
}

export function Squiggle({ className = "", color = "var(--yellow)" }) {
  return (
    <svg viewBox="0 0 200 40" className={className} fill="none">
      <path
        d="M2 30c15-25 30-25 45 0s30 25 45 0 30-25 45 0 30 25 45 0"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sparkle({ className = "", color = "var(--white)" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none">
      <path d="M20 2v14M20 24v14M2 20h14M24 20h14M8 8l9 9M23 23l9 9M32 8l-9 9M17 23l-9 9" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Highlighter({ className = "" }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="none">
      <rect x="4" y="10" width="70" height="20" rx="4" fill="var(--yellow)" stroke="#000" strokeWidth="3" />
      <path d="M74 10 96 4 108 20 96 36 74 30Z" fill="var(--black-card)" stroke="#000" strokeWidth="3" />
      <rect x="4" y="10" width="70" height="20" rx="4" fill="none" stroke="#000" strokeWidth="3" />
    </svg>
  );
}

export function Ring({ className = "", color = "var(--turquoise)" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <circle cx="50" cy="50" r="42" stroke={color} strokeWidth="8" strokeDasharray="10 12" />
    </svg>
  );
}
