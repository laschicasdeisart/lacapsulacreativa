import Slide from "./Slide";
import Reveal from "./Reveal";
import Marker from "./Marker";
import { Squiggle } from "./Doodles";
import { SLIDES } from "../constants";

export default function Pain() {
  return (
    <Slide index={SLIDES.PAIN} alt className="pain">
      <div className="container pain__inner">
        <Reveal tag="p" className="pain__lead">
          Sabemos que crear contenido para tu negocio o marca personal en RRSS es
          mucho más complejo de lo que pensabas cuando empezaste.
        </Reveal>

        <Reveal tag="p" className="pain__big" delay={0.1}>
          Y no! por mucho que lo creas… no es que no tengas tiempo, es que{" "}
          <Marker color="yellow" delay={0.5}>
            sin sistema ni estructura
          </Marker>
          … vas dando palos de ciego.
        </Reveal>

        <Reveal tag="div" className="pain__meme" delay={0.2}>
          <div className="pain__meme-box">
            <span>🎯🙈</span>
            <p>Hueco para el meme de "dar palos de ciego"</p>
          </div>
          <Squiggle className="pain__meme-squiggle" />
        </Reveal>

        <Reveal tag="p" className="pain__bridge" delay={0.3}>
          Por eso este septiembre te hemos preparado <strong>EL COMBO PERFECTO.</strong>
        </Reveal>
      </div>
    </Slide>
  );
}
