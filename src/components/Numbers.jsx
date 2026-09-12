import Slide from "./Slide";
import Reveal from "./Reveal";
import Cta from "./Cta";
import Marker from "./Marker";
import PriceTag from "./PriceTag";
import Countdown from "./Countdown";
import { GiftIcon } from "./CartoonIcons";
import { SKOOL_URL, SLIDES, PRICING, FLOWLY_PRICE_EUR_MONTHLY } from "../constants";

const blocks = [
  {
    plan: PRICING.standard.label,
    priceEur: `${PRICING.standard.eurMonthlyApprox}€/mes aprox.`,
    priceUsd: `$${PRICING.standard.usdMonthly}/mes o $${PRICING.standard.usdYearly}/año`,
    gift: "Flowly + El Propulsor gratis 6 meses",
    saved: `${PRICING.standard.savedEur}€`,
  },
  {
    plan: PRICING.premium.label,
    priceEur: `${PRICING.premium.eurMonthlyApprox}€/mes aprox.`,
    priceUsd: `$${PRICING.premium.usdMonthly}/mes o $${PRICING.premium.usdYearly}/año`,
    gift: "Flowly + El Propulsor gratis 12 meses",
    saved: `${PRICING.premium.savedEur}€`,
    extra:
      "Incluye todo lo de Estándar, y además: 1 sesión 1:1 de dirección (pago anual), Classroom completo por módulos, sesión en directo mensual y retos de Propulsión.",
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

        <Reveal tag="p" className="numbers__anchor" delay={0.08}>
          Flowly cuesta {FLOWLY_PRICE_EUR_MONTHLY}€/mes por separado. 6 meses gratis ={" "}
          {PRICING.standard.savedEur}€ que no pagas. 12 meses gratis ={" "}
          {PRICING.premium.savedEur}€ que no pagas.
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
                <span className="number-card__price">{b.priceEur}</span>
                <span className="number-card__price-usd">Cobro real en USD: {b.priceUsd}</span>
                <span className="number-card__gift">{b.gift}</span>
                {b.extra && <p className="number-card__extra">{b.extra}</p>}
              </div>
              <span className="number-card__savings">
                TE AHORRAS {b.saved} <GiftIcon className="number-card__savings-emoji" />
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal tag="p" className="numbers__note" delay={0.22}>
          Los planes se cobran en dólares a través de Skool. Aquí te los mostramos en euros
          aproximados al cambio actual, para que compares fácil.
        </Reveal>

        <Reveal tag="div" delay={0.26}>
          <Countdown className="numbers__countdown" />
        </Reveal>

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
