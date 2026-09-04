import { motion } from "framer-motion";
import Marker from "./Marker";
import Cta from "./Cta";
import { Star, Sparkle, Squiggle, Ring } from "./Doodles";
import { SKOOL_URL } from "../constants";

const titleWords = ["La", "vuelta", "al", "cole", "de", "tu"];

export default function Hero() {
  return (
    <section className="slide hero" id="hero">
      <div className="hero__field" aria-hidden="true">
        <Star className="hero__deco hero__deco--star1" />
        <Sparkle className="hero__deco hero__deco--sparkle1" />
        <Ring className="hero__deco hero__deco--ring1" />
        <Squiggle className="hero__deco hero__deco--squiggle1" />
        <span className="tape hero__deco hero__deco--tape1" style={{ transform: "rotate(-6deg)" }}>
          curso 25/26
        </span>
      </div>

      <div className="container hero__inner">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 16, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          🎒 Matrícula de septiembre
        </motion.span>

        <h1 className="hero__title">
          {titleWords.flatMap((word, i) => [
            <motion.span
              key={word + i}
              className="hero__word"
              initial={{ opacity: 0, y: "60%", rotate: -4 }}
              animate={{ opacity: 1, y: "0%", rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>,
            " ",
          ])}
          <br />
          <motion.span
            className="hero__word"
            initial={{ opacity: 0, y: "60%", rotate: -4 }}
            animate={{ opacity: 1, y: "0%", rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.15 + titleWords.length * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <Marker color="turquoise">negocio</Marker>
          </motion.span>
        </h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Este septiembre te regalamos la herramienta que necesitas para eliminar por completo
          el caos de crear contenido para tu negocio.
          <br />
          <span className="hero__chaos">Ideas… guiones… calendarios… lanzamientos… equipo…</span>{" "}
          <Marker color="yellow" className="hero__todo">
            TODO
          </Marker>
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          <Cta href={SKOOL_URL}>¡Lo necesito ya!</Cta>
          <span className="hero__micro">Oferta válida solo en septiembre.</span>
        </motion.div>
      </div>

      <motion.div
        className="hero__scrollcue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span>scroll</span>
        <motion.i animate={{ y: [0, 8, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }} />
      </motion.div>
    </section>
  );
}
