import { motion } from "framer-motion";
import Cta from "./Cta";
import Marker from "./Marker";
import { SKOOL_URL } from "../constants";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

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
    <section className="slide slide--auto numbers" id="numeros">
      <div className="container">
        <motion.span className="section-kicker" {...fadeUp(0)}>
          Lo que te llevas, en números
        </motion.span>

        <div className="numbers__grid">
          {blocks.map((b, i) => (
            <motion.div className="number-card" key={b.plan} {...fadeUp(0.1 + i * 0.12)}>
              <span className="number-card__plan">Cápsula {b.plan}</span>
              <span className="number-card__price">{b.price}</span>
              <span className="number-card__gift">{b.gift}</span>
              <span className="number-card__saved">
                🎁 <strong>{b.saved}</strong> ahorrados
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p className="numbers__bridge" {...fadeUp(0.3)}>
          Y todavía no hemos hablado de <Marker color="yellow">El Propulsor</Marker>.
          Hasta ahora ha sido una herramienta exclusiva para quienes están dentro de
          La Cápsula. Muy pronto va a salir a la venta por separado, con suscripción
          mensual. Ahora mismo, sigue incluido sin coste extra.
        </motion.p>

        <motion.p className="numbers__urgency" {...fadeUp(0.35)}>
          Este mes de septiembre, no entrar en la cápsula te cuesta dinero…
        </motion.p>

        <motion.p className="numbers__hype" {...fadeUp(0.4)}>
          Venga! que estamos en el mes de{" "}
          <Marker color="turquoise">"Esta vez sí que sí"</Marker>… Aprovéchalo — esta
          oferta se cierra el <strong>30 de septiembre</strong> para siempre.
        </motion.p>

        <motion.div {...fadeUp(0.45)}>
          <Cta href={SKOOL_URL} className="numbers__cta">
            Quiero el combo perfecto
          </Cta>
        </motion.div>
      </div>
    </section>
  );
}
