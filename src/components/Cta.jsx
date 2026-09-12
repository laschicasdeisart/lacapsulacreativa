import { useSound } from "../hooks/SoundContext";
import {
  SKOOL_URL,
  META_INITIATE_CHECKOUT_VALUE,
  META_INITIATE_CHECKOUT_CURRENCY,
} from "../constants";

// Botón CTA reutilizable: enlaza a Skool, con sonido opcional y el
// cursor personalizado en modo "link". Cuando lleva al checkout real de
// Skool, dispara también el evento InitiateCheckout del píxel de Meta —
// es el mejor proxy de conversión disponible en la propia landing.
export default function Cta({ href, children, variant = "primary", className = "", arrow = true, ...rest }) {
  const { hover, click } = useSound();

  const handleClick = (e) => {
    click(e);
    if (href === SKOOL_URL && typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "InitiateCheckout", {
        value: META_INITIATE_CHECKOUT_VALUE,
        currency: META_INITIATE_CHECKOUT_CURRENCY,
      });
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${variant === "ghost" ? "btn--ghost" : ""} ${className}`}
      onMouseEnter={hover}
      onClick={handleClick}
      {...rest}
    >
      {children}
      {arrow && (
        <span className="btn__arrow" aria-hidden="true">
          →
        </span>
      )}
    </a>
  );
}
