import { motion } from "framer-motion";
import Slide from "./Slide";
import Reveal from "./Reveal";
import Marker from "./Marker";
import Cta from "./Cta";
import { Star, Sparkle, Squiggle, Ring } from "./Doodles";
import { SKOOL_URL, SLIDES } from "../constants";
import { useActiveSlide } from "../hooks/SlideDeckContext";

const titleWords = ["La", "vuelta", "al", "cole", "de", "tu"];

function HeroContent() {
  const isActive = useActiveSlide();

  return (
    <>
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
        <Reveal tag="span" className="eyebrow" y={16}>
          🎒 Matrícula de septiembre
        </Reveal>

        <h1 className="hero__title">
          {titleWords.flatMap((word, i) => [
            <motion.span
              key={word + i}
              className="hero__word"
              initial={{ opacity: 0, y: "60%", rotate: -4 }}
              animate={isActive ? { opacity: 1, y: "0%", rotate: 0 } : { opacity: 0, y: "60%", rotate: -4 }}
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
            animate={isActive ? { opacity: 1, y: "0%", rotate: 0 } : { opacity: 0, y: "60%", rotate: -4 }}
            transition={{ duration: 0.7, delay: 0.15 + titleWords.length * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <Marker color="turquoise" delay={0.75}>
              negocio
            </Marker>
          </motion.span>
        </h1>

        <Reveal tag="p" className="hero__subtitle" delay={0.7}>
          Este septiembre te regalamos la herramienta que necesitas para eliminar por completo
          el caos de crear contenido para tu negocio.
          <br />
          <span className="hero__chaos">Ideas… guiones… calendarios… lanzamientos… equipo…</span>{" "}
          <Marker color="yellow" className="hero__todo" delay={1.1}>
            TODO
          </Marker>
        </Reveal>

        <Reveal tag="div" className="hero__cta" delay={0.85}>
          <Cta href={SKOOL_URL}>¡Lo necesito ya!</Cta>
          <span className="hero__micro">Oferta válida solo en septiembre.</span>
        </Reveal>
      </div>
    </>
  );
}

export default function Hero() {
  return (
    <Slide index={SLIDES.HERO} className="hero">
      <HeroContent />
    </Slide>
  );
}
