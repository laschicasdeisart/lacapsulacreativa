import { useEffect, useState } from "react";
import { COOKIE_CONSENT_STORAGE_KEY, LEGAL_LINKS } from "../constants";
import { loadMetaPixel } from "../lib/metaPixel";
import { loadClarity } from "../lib/clarity";

const BODY_CLASS = "has-cookie-banner";

function readStoredConsent() {
  try {
    return window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  } catch {
    // localStorage bloqueado (navegación privada, etc.) — se trata como
    // "sin decisión", así que se muestra el aviso en cada visita.
    return null;
  }
}

// enableClarity: solo la versión /ads.html lo pasa a true por ahora — el
// resto de analítica/publicidad (píxel de Meta) se carga siempre igual,
// tras consentimiento. Los nombres de las herramientas no van en el
// banner (solo en la política de cookies), así que el texto no cambia
// según esta prop.
export default function CookieConsent({ enableClarity = false }) {
  const [visible, setVisible] = useState(() => {
    const stored = readStoredConsent();
    return stored !== "accepted" && stored !== "rejected";
  });

  const loadAcceptedScripts = () => {
    loadMetaPixel();
    if (enableClarity) loadClarity();
  };

  useEffect(() => {
    if (readStoredConsent() === "accepted") loadAcceptedScripts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Mientras el banner está visible, empuja el toggle de sonido (fijo
  // arriba a la derecha) para que la barra no lo tape.
  useEffect(() => {
    document.body.classList.toggle(BODY_CLASS, visible);
    return () => document.body.classList.remove(BODY_CLASS);
  }, [visible]);

  const decide = (value) => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
    } catch {
      // Si no se puede guardar, seguimos respetando la elección de esta
      // visita aunque se pierda al recargar.
    }
    if (value === "accepted") loadAcceptedScripts();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-label="Aviso de cookies">
      <p className="cookie-consent__text">
        Usamos cookies para mejorar tu experiencia y medir nuestra publicidad.{" "}
        <a href={LEGAL_LINKS.politicaCookies} target="_blank" rel="noopener noreferrer">
          Más info
        </a>
      </p>
      <div className="cookie-consent__actions">
        <button type="button" className="btn cookie-consent__btn" onClick={() => decide("accepted")}>
          Aceptar
        </button>
        <button
          type="button"
          className="cookie-consent__btn cookie-consent__btn--reject"
          onClick={() => decide("rejected")}
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}
