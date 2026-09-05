import Slide from "./Slide";
import Reveal from "./Reveal";
import Cta from "./Cta";
import Marker from "./Marker";
import PriceTag from "./PriceTag";
import { Star, Sparkle } from "./Doodles";
import { SKOOL_URL, SLIDES } from "../constants";

export default function Closing() {
  return (
    <Slide index={SLIDES.CLOSING} className="closing">
      <div className="closing__field" aria-hidden="true">
        <Star className="closing__deco closing__deco--star" />
        <Sparkle className="closing__deco closing__deco--sparkle" />
      </div>
      <div className="container closing__inner">
        <Reveal tag="h2" className="closing__title" pop y={44}>
          Este septiembre deja de intentar ser más constante y empieza a serlo de
          verdad con <Marker delay={0.5}>el combo perfecto</Marker>.
        </Reveal>
        <Reveal tag="p" className="closing__sub" delay={0.15}>
          Entra en la Cápsula AHORA.
        </Reveal>

        <Reveal tag="div" className="closing__cta-block" delay={0.3}>
          <Cta href={SKOOL_URL} className="closing__cta">
            Entrar en La Cápsula
          </Cta>
          <PriceTag className="closing__price" />
          <p className="closing__micro">Oferta válida hasta el 30 de septiembre.</p>
          <p className="closing__warning">
            A partir de octubre sube el precio y cerramos las puertas de La Cápsula — no
            sabemos hasta cuándo.
          </p>
        </Reveal>
      </div>

      <footer className="closing__footer">
        <span>La Cápsula Creativa</span>
        <Star className="closing__footer-star" color="var(--yellow)" />
        <span>Oferta septiembre 2026</span>
      </footer>
    </Slide>
  );
}
