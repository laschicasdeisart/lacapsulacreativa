import { motion } from "framer-motion";
import Cta from "./Cta";
import Marker from "./Marker";
import { Star, Sparkle } from "./Doodles";
import { SKOOL_URL } from "../constants";

export default function Closing() {
  return (
    <section className="slide closing" id="cierre">
      <div className="closing__field" aria-hidden="true">
        <Star className="closing__deco closing__deco--star" />
        <Sparkle className="closing__deco closing__deco--sparkle" />
      </div>
      <div className="container closing__inner">
        <motion.h2
          className="closing__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Este septiembre no te prometas lo que sabes que{" "}
          <Marker color="yellow">no conseguirás sol@</Marker>.
        </motion.h2>
        <motion.p
          className="closing__sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Entra en la Cápsula Creativa ahora y llévate el combo perfecto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Cta href={SKOOL_URL} className="closing__cta">
            Entrar en La Cápsula
          </Cta>
          <p className="closing__micro">Oferta válida hasta el 30 de septiembre.</p>
        </motion.div>
      </div>

      <footer className="closing__footer">
        <span>La Cápsula Creativa</span>
        <span>✦</span>
        <span>Septiembre 2025</span>
      </footer>
    </section>
  );
}
