import { motion } from "framer-motion";
import Cta from "./Cta";
import Marker from "./Marker";
import { Sparkle } from "./Doodles";
import { SKOOL_URL } from "../constants";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Combo() {
  return (
    <section className="slide slide--auto combo" id="combo">
      <div className="container">
        <motion.span className="section-kicker" {...fadeUp(0)}>
          El plan de estudios
        </motion.span>
        <motion.h2 className="combo__title" {...fadeUp(0.05)}>
          El combo <Marker color="yellow">perfecto</Marker>
        </motion.h2>
        <motion.p className="combo__formula" {...fadeUp(0.1)}>
          La Cápsula Creativa <span>+</span> Flowly <span>+</span> El Propulsor
        </motion.p>

        <div className="combo__grid">
          <motion.article className="combo-card" {...fadeUp(0.15)}>
            <span className="combo-card__icon">🎓</span>
            <h3>La Cápsula Creativa</h3>
            <p>
              Estrategia, guiones, comunidad y clases en vivo — todo lo que necesitas
              para saber qué crear, cómo y por qué.
            </p>
            <Cta href={SKOOL_URL} variant="ghost" className="combo-card__cta">
              ¿Qué es la Cápsula Creativa?
            </Cta>
          </motion.article>

          <motion.article className="combo-card" {...fadeUp(0.25)}>
            <span className="combo-card__icon">🗂️</span>
            <h3>Flowly</h3>
            <p>
              La herramienta que pone orden en todo el proceso: ideas, contenidos,
              calendario, lanzamientos, equipo. Flowly es el cómo ejecutas todo lo
              que aprendes en la Cápsula, sin perderlo por el camino.
            </p>
          </motion.article>
        </div>

        <motion.p className="combo__bridge" {...fadeUp(0.1)}>
          La Cápsula te enseña a crear. <Marker color="turquoise">Flowly</Marker> es la
          app desde la que creas y centralizas la gestión de todo tu contenido.
        </motion.p>

        <motion.article className="combo-card combo-card--propulsor" {...fadeUp(0.1)}>
          <Sparkle className="combo-card__sparkle" />
          <span className="combo-card__icon">🚀</span>
          <h3>Y el Propulsor</h3>
          <p>
            Es una app con la que generas guiones, secuencias de stories y ofertas
            irresistibles como si tuvieras nuestro cerebro creativo en tus manos.
            Literal.
          </p>
          <p className="combo-card__tagline">
            Formación + orden + un generador que piensa como nosotras cuando te
            atascas.
          </p>
        </motion.article>

        <motion.p className="combo__closing" {...fadeUp(0.15)}>
          Ese es el combo completo.
        </motion.p>
      </div>
    </section>
  );
}
