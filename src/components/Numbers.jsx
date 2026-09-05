import Slide from "./Slide";
import Reveal from "./Reveal";
import Cta from "./Cta";
import Marker from "./Marker";
import PriceTag from "./PriceTag";
import { GiftIcon } from "./CartoonIcons";
import { SKOOL_URL, SLIDES } from "../constants";

const blocks = [
  {
    plan: "Estándar",
    price: "22$/mes",
    gift: "Flowly + El Propulsor gratis 6 meses",
    saved: "114€",
  },
  {
    plan: "Premium",
    price: "47$/mes",
    gift: "Flowly + El Propulsor gratis 12 meses",
    saved: "228€",
  },
];

export default function Numbers() {
  return (
    <Slide index={SLIDES.NUMBERS} className="numbers">
      <div className="container">
        <Reveal tag="span" className="section-kicker">
          Esto es lo que pagas por entrar
        </Reveal>

        <Reveal tag="p" className="numbers__intro" delay={0.05}>
          Así de simple: esto es lo que pagas cada mes por estar dentro de La Cápsula. Y este
          septiembre, además, te llevas Flowly y El Propulsor totalmente gratis.
        </Reveal>

        <div className="numbers__grid">
          {blocks.map((b, i) => (
            <Reveal
              tag="div"
              className="number-card"
              key={b.plan}
              delay={0.12 + i * 0.14}
              pop
              rotate={i % 2 === 0 ? -0.8 : 0.8}
              whileHover={{ rotate: 0, y: -4 }}
            >
              <div className="number-card__info">
                <span className="number-card__plan">Tripulante {b.plan}</span>
                <span className="number-card__price">{b.price}</span>
                <span className="number-card__gift">{b.gift}</span>
              </div>
              <span className="number-card__savings">
                TE AHORRAS {b.saved} <GiftIcon className="number-card__savings-emoji" />
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal tag="p" className="numbers__urgency" delay={0.3}>
          Este mes de septiembre, no entrar en la cápsula te cuesta dinero…
        </Reveal>

        <Reveal tag="p" className="numbers__hype" delay={0.35}>
          Venga! que estamos en el mes de{" "}
          <Marker delay={0.6}>"Esta vez sí que sí"</Marker>
          … Aprovéchalo, esta oferta se cierra el <strong>30 de septiembre</strong>{" "}
          para siempre.
        </Reveal>

        <Reveal tag="p" className="numbers__warning" delay={0.4}>
          A partir del 30 de septiembre, cerramos las puertas a nuevos miembros. No sabemos
          hasta cuándo.
        </Reveal>

        <Reveal tag="div" className="numbers__cta-row" delay={0.45}>
          <Cta href={SKOOL_URL} className="numbers__cta">
            Quiero el combo perfecto
          </Cta>
          <PriceTag />
        </Reveal>
      </div>
    </Slide>
  );
}
