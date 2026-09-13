import { useEffect, useState } from "react";
import { COOKIE_CONSENT_STORAGE_KEY, LEGAL_LINKS } from "../constants";
import { loadMetaPixel } from "../lib/metaPixel";

function readStoredConsent() {
  try {
    return window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  } catch {
    // localStorage bloqueado (navegación privada, etc.) — se trata como
    // "sin decisión", así que se muestra el aviso en cada visita.
    return null;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(() => {
    const stored = readStoredConsent();
    return stored !== "accepted" && stored !== "rejected";
  });

  useEffect(() => {
    if (readStoredConsent() === "accepted") loadMetaPixel();
  }, []);

  const decide = (value) => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
    } catch {
      // Si no se puede guardar, seguimos respetando la elección de esta
      // visita aunque se pierda al recargar.
    }
    if (value === "accepted") loadMetaPixel();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-label="Aviso de cookies">
      <p className="cookie-consent__text">
        Usamos cookies de publicidad (píxel de Meta) para medir nuestros anuncios. Solo se activan
        si las aceptas.{" "}
        <a href={LEGAL_LINKS.politicaCookies} target="_blank" rel="noopener noreferrer">
          Más info
        </a>
      </p>
      <div className="cookie-consent__actions">
        <button
          type="button"
          className="btn btn--ghost cookie-consent__btn"
          onClick={() => decide("rejected")}
        >
          Rechazar
        </button>
        <button type="button" className="btn cookie-consent__btn" onClick={() => decide("accepted")}>
          Aceptar
        </button>
      </div>
    </div>
  );
}
