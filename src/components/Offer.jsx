import Slide from "./Slide";
import Reveal from "./Reveal";
import Marker from "./Marker";
import { Star } from "./Doodles";
import { SLIDES } from "../constants";

const plans = [
  { name: "Standard", gift: "6 meses gratis", badge: "🎓" },
  { name: "Premium", gift: "1 año gratis", badge: "👑" },
];

export default function Offer() {
  return (
    <Slide index={SLIDES.OFFER} alt className="offer">
      <div className="container">
        <Reveal tag="span" className="section-kicker">
          La oferta
        </Reveal>
        <Reveal tag="h2" className="offer__title" delay={0.05}>
          Este septiembre, al entrar en La Cápsula, te llevas{" "}
          <Marker color="turquoise" delay={0.5}>
            Flowly de regalo
          </Marker>
        </Reveal>

        <div className="offer__table">
          {plans.map((plan, i) => (
            <Reveal tag="div" className="offer-row" key={plan.name} delay={0.15 + i * 0.1}>
              <span className="offer-row__badge">{plan.badge}</span>
              <span className="offer-row__plan">Plan {plan.name}</span>
              <span className="offer-row__arrow">→</span>
              <span className="offer-row__gift">Flowly: {plan.gift}</span>
            </Reveal>
          ))}
        </div>

        <Reveal tag="p" className="offer__rule" delay={0.3}>
          Mientras te mantengas activo en La Cápsula, Flowly es tuyo sin coste. Es
          así de simple.
        </Reveal>

        <Reveal tag="div" className="offer__note" delay={0.35}>
          <Star className="offer__note-star" color="var(--yellow)" />
          <p>
            Esto no es un truco de embudo. Es nuestra forma de que pruebes Flowly
            durante el tiempo suficiente para que tomes el control del contenido en
            tu negocio — como nos pasó a nosotras.
          </p>
        </Reveal>
      </div>
    </Slide>
  );
}
