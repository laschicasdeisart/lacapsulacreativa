import Slide from "./Slide";
import Reveal from "./Reveal";
import Cta from "./Cta";
import Marker from "./Marker";
import { Star } from "./Doodles";
import { FLOWLY_DEMO_URL, SLIDES } from "../constants";

export default function Offer() {
  return (
    <Slide index={SLIDES.OFFER} alt className="offer">
      <div className="container">
        <Reveal tag="span" className="section-kicker">
          La oferta
        </Reveal>
        <Reveal tag="h2" className="offer__title" delay={0.05} pop y={40}>
          Este septiembre, al entrar en La Cápsula, te llevas{" "}
          <Marker delay={0.5}>Flowly de regalo</Marker>
        </Reveal>

        <Reveal tag="div" delay={0.1}>
          <Cta
            href={FLOWLY_DEMO_URL}
            variant="ghost"
            arrow={false}
            className="offer__demo-cta"
          >
            ¿No sabes qué es Flowly?
          </Cta>
        </Reveal>

        <Reveal tag="div" className="offer__note" delay={0.2}>
          <Star className="offer__note-star" color="var(--yellow)" />
          <p>
            Es nuestra forma de que pruebes Flowly durante el tiempo suficiente para
            que tomes el control del contenido en tu negocio — como nos pasó a
            nosotras.
          </p>
        </Reveal>

        <Reveal tag="p" className="offer__rule offer__rule--small" delay={0.3}>
          Mientras te mantengas activo en La Cápsula, Flowly es tuyo sin coste. Es
          así de simple.
        </Reveal>
      </div>
    </Slide>
  );
}
