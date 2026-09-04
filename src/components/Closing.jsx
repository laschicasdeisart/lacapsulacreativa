import Slide from "./Slide";
import Reveal from "./Reveal";
import Cta from "./Cta";
import Marker from "./Marker";
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
        <Reveal tag="h2" className="closing__title">
          Este septiembre no te prometas lo que sabes que{" "}
          <Marker color="yellow" delay={0.4}>
            no conseguirás sol@
          </Marker>
          .
        </Reveal>
        <Reveal tag="p" className="closing__sub" delay={0.15}>
          Entra en la Cápsula Creativa ahora y llévate el combo perfecto.
        </Reveal>

        <Reveal tag="div" delay={0.3}>
          <Cta href={SKOOL_URL} className="closing__cta">
            Entrar en La Cápsula
          </Cta>
          <p className="closing__micro">Oferta válida hasta el 30 de septiembre.</p>
        </Reveal>
      </div>

      <footer className="closing__footer">
        <span>La Cápsula Creativa</span>
        <span>✦</span>
        <span>Septiembre 2025</span>
      </footer>
    </Slide>
  );
}
