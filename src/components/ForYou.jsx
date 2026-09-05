import Slide from "./Slide";
import Reveal from "./Reveal";
import Marker from "./Marker";
import { CheckIcon } from "./CartoonIcons";
import { SLIDES } from "../constants";

const points = [
  "Ya creas contenido para vender más con tu marca, pero un poco a lo loco.",
  "Sabes que tienes que estar presente en RRSS, pero no tienes el conocimiento para hacerlo con estrategia y vas subiendo lo que se te ocurre.",
  "Estás cansado de seguir improvisando el contenido, probando herramientas y descargándote guías… y quieres empezar a tomártelo en serio.",
];

export default function ForYou() {
  return (
    <Slide index={SLIDES.FORYOU} alt className="foryou">
      <div className="container">
        <Reveal tag="span" className="section-kicker">
          ¿Es para ti?
        </Reveal>
        <Reveal tag="h2" className="foryou__title" pop y={40}>
          "<Marker delay={0.4}>El combo perfecto</Marker>" es para ti si:
        </Reveal>

        <ul className="foryou__list">
          {points.map((text, i) => (
            <Reveal
              tag="li"
              className="foryou__item"
              key={text}
              delay={0.2 + i * 0.15}
              pop
              rotate={i % 2 === 0 ? -0.6 : 0.6}
              whileHover={{ rotate: 0, y: -4 }}
            >
              <CheckIcon className="foryou__item-icon" />
              <p>{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Slide>
  );
}
