import Slide from "./Slide";
import Reveal from "./Reveal";
import Marker from "./Marker";
import { CheckIcon, CrossIcon } from "./CartoonIcons";
import { SLIDES } from "../constants";

const points = [
  "Ya creas contenido para vender más con tu marca, pero un poco a lo loco.",
  "No vendes lo suficiente con tu negocio y sabes que, si te mostraras en RRSS con estrategia, crecería mucho más rápido.",
  "Sabes que tienes que estar presente en RRSS, pero no tienes el conocimiento para hacerlo con estrategia y vas subiendo lo que se te ocurre.",
  "Si un día no tienes ganas o tiempo, no publicas nada… y luego, en una semana tranquila de curro, publicas todos los días.",
  "Sientes que no le pillas el ritmo a lo rápido que avanzan las estrategias de venta y la IA para esto del contenido.",
  "Sabes que si vas sola en el proceso, vas a tardar mucho más, y te va a costar más dinero y más errores.",
  "Estás cansada de seguir improvisando el contenido, probando herramientas y descargándote guías… y quieres empezar a tomártelo en serio.",
];

const notFor = [
  "Todavía no tienes un negocio, servicio o producto que ofrecer. Esto es para quien ya tiene algo que vender.",
  "Ya tienes un sistema de contenido que te funciona y sabes explicar tu estrategia en una frase.",
  "Buscas una app mágica sin poner nada de tu parte. Aquí el cambio viene de formación + orden + ejecución, juntos.",
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
              delay={0.15 + i * 0.08}
              pop
              rotate={i % 2 === 0 ? -0.6 : 0.6}
              whileHover={{ rotate: 0, y: -4 }}
            >
              <CheckIcon className="foryou__item-icon" />
              <p>{text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal tag="h3" className="foryou__subtitle" delay={0.2}>
          Esto no es para ti si:
        </Reveal>
        <ul className="foryou__list foryou__list--not">
          {notFor.map((text, i) => (
            <Reveal
              tag="li"
              className="foryou__item foryou__item--not"
              key={text}
              delay={0.25 + i * 0.08}
              pop
              rotate={i % 2 === 0 ? 0.5 : -0.5}
            >
              <CrossIcon className="foryou__item-icon" />
              <p>{text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal tag="div" className="foryou__urgency" delay={0.3}>
          <p>
            Esta oferta es solo para probar la novedad de Flowly dentro de la Cápsula, y solo
            existe este septiembre. Después del 30, cerramos las puertas a nuevos miembros —
            no sabemos hasta cuándo.
          </p>
        </Reveal>
      </div>
    </Slide>
  );
}
