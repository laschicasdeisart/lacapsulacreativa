import { useSound } from "../hooks/SoundContext";
import { useSlideDeck } from "../hooks/SlideDeckContext";

const pad = (n) => String(n + 1).padStart(2, "0");

export default function SlideNav() {
  const { index, total, next, prev, goTo, isFirst, isLast } = useSlideDeck();
  const { hover, click } = useSound();

  return (
    <nav className="deck-nav" aria-label="Navegación de la presentación">
      <div className="deck-nav__dots">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            className={`deck-nav__dot ${i === index ? "is-active" : ""}`}
            onClick={() => {
              click();
              goTo(i);
            }}
            onMouseEnter={hover}
            aria-label={`Ir a la diapositiva ${i + 1} de ${total}`}
            aria-current={i === index}
          />
        ))}
      </div>

      <div className="deck-nav__controls">
        <button
          type="button"
          className="deck-nav__arrow"
          onClick={() => {
            click();
            prev();
          }}
          onMouseEnter={hover}
          disabled={isFirst}
          aria-label="Diapositiva anterior"
        >
          ←
        </button>
        <span className="deck-nav__count">
          {pad(index)} <i>/</i> {pad(total - 1)}
        </span>
        <button
          type="button"
          className="deck-nav__arrow deck-nav__arrow--next"
          onClick={() => {
            click();
            next();
          }}
          onMouseEnter={hover}
          disabled={isLast}
          aria-label="Siguiente diapositiva"
        >
          →
        </button>
      </div>
    </nav>
  );
}
