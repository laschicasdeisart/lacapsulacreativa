import Slide from "./Slide";
import Reveal from "./Reveal";
import Marker from "./Marker";
import { SLIDES } from "../constants";

export default function Pain() {
  return (
    <Slide index={SLIDES.PAIN} alt className="pain">
      <div className="container pain__inner">
        <Reveal tag="p" className="pain__lead">
          Sabemos que crear contenido para tu negocio es más complejo de lo que
          pensabas cuando empezaste…
        </Reveal>

        <Reveal tag="p" className="pain__big" delay={0.15}>
          Y no, por más que te empeñes en creértelo, no es porque no tengas tiempo…
          Es porque{" "}
          <Marker delay={0.6}>sin sistema ni estructura</Marker>, vas dando palos
          de ciego 🦯.
        </Reveal>
      </div>
    </Slide>
  );
}
