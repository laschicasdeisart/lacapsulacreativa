import { motion } from "framer-motion";
import Marker from "./Marker";
import { Star } from "./Doodles";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const plans = [
  { name: "Standard", gift: "6 meses gratis", badge: "🎓" },
  { name: "Premium", gift: "1 año gratis", badge: "👑" },
];

export default function Offer() {
  return (
    <section className="slide slide--auto slide--alt offer" id="oferta">
      <div className="container">
        <motion.span className="section-kicker" {...fadeUp(0)}>
          La oferta
        </motion.span>
        <motion.h2 className="offer__title" {...fadeUp(0.05)}>
          Este septiembre, al entrar en La Cápsula, te llevas{" "}
          <Marker color="turquoise">Flowly de regalo</Marker>
        </motion.h2>

        <div className="offer__table">
          {plans.map((plan, i) => (
            <motion.div className="offer-row" key={plan.name} {...fadeUp(0.15 + i * 0.1)}>
              <span className="offer-row__badge">{plan.badge}</span>
              <span className="offer-row__plan">Plan {plan.name}</span>
              <span className="offer-row__arrow">→</span>
              <span className="offer-row__gift">Flowly: {plan.gift}</span>
            </motion.div>
          ))}
        </div>

        <motion.p className="offer__rule" {...fadeUp(0.3)}>
          Mientras te mantengas activo en La Cápsula, Flowly es tuyo sin coste. Es
          así de simple.
        </motion.p>

        <motion.div className="offer__note" {...fadeUp(0.35)}>
          <Star className="offer__note-star" color="var(--yellow)" />
          <p>
            Esto no es un truco de embudo. Es nuestra forma de que pruebes Flowly
            durante el tiempo suficiente para que tomes el control del contenido en
            tu negocio — como nos pasó a nosotras.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
