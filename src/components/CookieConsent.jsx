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
//
// variant="wall": pantalla completa, bloquea la página hasta que se
// decide (Aceptar o Rechazar — las dos opciones desbloquean, ninguna
// obliga a aceptar para poder ver el contenido). Solo la versión
// ads.html la usa; el carrusel (index.html) se queda con la barra fina.
export default function CookieConsent({ enableClarity = false, variant = "bar" }) {
  const isWall = variant === "wall";
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

  // Barra: empuja el toggle de sonido y el contenido para que no quede
  // tapado. Muro: bloquea el scroll de la página mientras está abierto.
  useEffect(() => {
    if (isWall) {
      const prevOverflow = document.body.style.overflow;
      if (visible) document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
    document.body.classList.toggle(BODY_CLASS, visible);
    return () => document.body.classList.remove(BODY_CLASS);
  }, [visible, isWall]);

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

  const text = (
    <p className={isWall ? "cookie-wall__text" : "cookie-consent__text"}>
      Usamos cookies para mejorar tu experiencia y medir nuestra publicidad.{" "}
      <a href={LEGAL_LINKS.politicaCookies} target="_blank" rel="noopener noreferrer">
        Más info
      </a>
    </p>
  );

  if (isWall) {
    return (
      <div className="cookie-wall" role="dialog" aria-modal="true" aria-label="Aviso de cookies">
        <div className="cookie-wall__card">
          <span className="cookie-wall__badge" aria-hidden="true">
            🍪
          </span>
          <h2 className="cookie-wall__title">Antes de seguir</h2>
          {text}
          <div className="cookie-wall__actions">
            <button
              type="button"
              className="btn cookie-wall__btn"
              onClick={() => decide("accepted")}
            >
              Aceptar
            </button>
            <button
              type="button"
              className="btn btn--ghost cookie-wall__btn"
              onClick={() => decide("rejected")}
            >
              Rechazar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cookie-consent" role="dialog" aria-label="Aviso de cookies">
      {text}
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
