import { ActiveSlideContext, useSlideDeck } from "../hooks/SlideDeckContext";

// Un panel del carrusel. Provee "activo/no activo" a sus hijos (títulos,
// Marker...) para que solo animen cuando el usuario está en ese slide.
export default function Slide({ index, alt = false, className = "", children }) {
  const { index: activeIndex } = useSlideDeck();
  const isActive = activeIndex === index;

  return (
    <ActiveSlideContext.Provider value={isActive}>
      <section
        className={`slide-panel ${alt ? "slide-panel--alt" : ""} ${className}`}
        aria-hidden={!isActive}
        inert={!isActive}
      >
        <div className="slide-panel__scroll">{children}</div>
      </section>
    </ActiveSlideContext.Provider>
  );
}
