import Slide from "./Slide";
import Reveal from "./Reveal";
import Cta from "./Cta";
import Marker from "./Marker";
import { SKOOL_URL, SLIDES } from "../constants";

const blocks = [
  {
    plan: "Standard",
    price: "22$/mes",
    gift: "Flowly gratis 6 meses",
    saved: "114€",
  },
  {
    plan: "Premium",
    price: "47$/mes",
    gift: "Flowly gratis 12 meses",
    saved: "228€",
  },
];

export default function Numbers() {
  return (
    <Slide index={SLIDES.NUMBERS} className="numbers">
      <div className="container">
        <Reveal tag="span" className="section-kicker">
          Lo que te llevas, en números
        </Reveal>

        <div className="numbers__grid">
          {blocks.map((b, i) => (
            <Reveal
              tag="div"
              className="number-card"
              key={b.plan}
              delay={0.12 + i * 0.14}
              pop
              rotate={i % 2 === 0 ? -1.5 : 1.5}
              whileHover={{ rotate: 0, y: -4 }}
            >
              <span className="number-card__plan">Cápsula {b.plan}</span>
              <span className="number-card__price">{b.price}</span>
              <span className="number-card__gift">{b.gift}</span>
              <span className="number-card__saved">
                🎁 <strong>{b.saved}</strong> ahorrados
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal tag="p" className="numbers__bridge" delay={0.3}>
          Y todavía no hemos hablado de{" "}
          <Marker delay={0.6}>El Propulsor</Marker>
          . Hasta ahora ha sido una herramienta exclusiva para quienes están dentro de
          La Cápsula. Muy pronto va a salir a la venta por separado, con suscripción
          mensual. Ahora mismo, sigue incluido sin coste extra.
        </Reveal>

        <Reveal tag="p" className="numbers__urgency" delay={0.35}>
          Este mes de septiembre, no entrar en la cápsula te cuesta dinero…
        </Reveal>

        <Reveal tag="p" className="numbers__hype" delay={0.4}>
          Venga! que estamos en el mes de{" "}
          <Marker delay={0.7}>"Esta vez sí que sí"</Marker>
          … Aprovéchalo — esta oferta se cierra el <strong>30 de septiembre</strong>{" "}
          para siempre.
        </Reveal>

        <Reveal tag="div" delay={0.45}>
          <Cta href={SKOOL_URL} className="numbers__cta">
            Quiero el combo perfecto
          </Cta>
        </Reveal>
      </div>
    </Slide>
  );
}
