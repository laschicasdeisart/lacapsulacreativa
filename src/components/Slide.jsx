import { useEffect, useRef, useState } from "react";
import { ActiveSlideContext, useSlideDeckSafe } from "../hooks/SlideDeckContext";

// Un panel de contenido. En modo carrusel (dentro de un SlideDeckProvider),
// solo está "activo" cuando coincide con el índice actual del Deck. En modo
// scroll continuo (sin provider, como en la landing de ads), se activa la
// primera vez que entra en el viewport y se queda activo — es un scroll
// normal, no una página oculta.
export default function Slide({ index, alt = false, className = "", children }) {
  const deck = useSlideDeckSafe();
  const ref = useRef(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    if (deck) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setScrollActive(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrollActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [deck]);

  const isActive = deck ? deck.index === index : scrollActive;
  const scrollMode = !deck;

  return (
    <ActiveSlideContext.Provider value={isActive}>
      <section
        ref={ref}
        className={`slide-panel ${alt ? "slide-panel--alt" : ""} ${
          scrollMode ? "slide-panel--scroll" : ""
        } ${className}`}
        aria-hidden={scrollMode ? undefined : !isActive}
        inert={scrollMode ? undefined : !isActive}
      >
        <div className="slide-panel__scroll">{children}</div>
      </section>
    </ActiveSlideContext.Provider>
  );
}
