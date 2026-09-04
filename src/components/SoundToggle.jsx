import { useSound } from "../hooks/SoundContext";

export default function SoundToggle() {
  const { enabled, toggle } = useSound();
  return (
    <button
      type="button"
      className="sound-toggle"
      data-cursor="link"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? "Silenciar sonido" : "Activar sonido"}
    >
      <span className="sound-toggle__bars" data-on={enabled}>
        <i />
        <i />
        <i />
      </span>
      {enabled ? "Sonido ON" : "Sonido OFF"}
    </button>
  );
}
