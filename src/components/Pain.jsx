import { motion } from "framer-motion";
import Marker from "./Marker";
import { Squiggle } from "./Doodles";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

export default function Pain() {
  return (
    <section className="slide slide--auto slide--alt pain" id="dolor">
      <div className="container pain__inner">
        <motion.p className="pain__lead" {...fadeUp}>
          Sabemos que crear contenido para tu negocio o marca personal en RRSS es
          mucho más complejo de lo que pensabas cuando empezaste.
        </motion.p>

        <motion.p className="pain__big" {...fadeUp}>
          Y no! por mucho que lo creas… no es que no tengas tiempo, es que{" "}
          <Marker color="yellow">sin sistema ni estructura</Marker>… vas dando palos
          de ciego.
        </motion.p>

        <motion.div className="pain__meme" {...fadeUp}>
          <div className="pain__meme-box">
            <span>🎯🙈</span>
            <p>Hueco para el meme de "dar palos de ciego"</p>
          </div>
          <Squiggle className="pain__meme-squiggle" />
        </motion.div>

        <motion.p className="pain__bridge" {...fadeUp}>
          Por eso este septiembre te hemos preparado <strong>EL COMBO PERFECTO.</strong>
        </motion.p>
      </div>
    </section>
  );
}
