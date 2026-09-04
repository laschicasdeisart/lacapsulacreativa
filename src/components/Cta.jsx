import { useSound } from "../hooks/SoundContext";

// Botón CTA reutilizable: enlaza a Skool, con sonido opcional y el
// cursor personalizado en modo "link".
export default function Cta({ href, children, variant = "primary", className = "", arrow = true, ...rest }) {
  const { hover, click } = useSound();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${variant === "ghost" ? "btn--ghost" : ""} ${className}`}
      onMouseEnter={hover}
      onClick={click}
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
