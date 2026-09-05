import { motion } from "framer-motion";
import Slide from "./Slide";
import Reveal from "./Reveal";
import Marker from "./Marker";
import Cta from "./Cta";
import PriceTag from "./PriceTag";
import { Star, Sparkle, Ring } from "./Doodles";
import { SKOOL_URL, SLIDES } from "../constants";
import { useActiveSlide } from "../hooks/SlideDeckContext";

const titleWords = ["La", "vuelta", "al", "cole", "de", "tu"];
const chips = ["Ideas", "Guiones", "Calendarios", "Lanzamientos", "Equipo"];

function HeroContent() {
  const isActive = useActiveSlide();

  return (
    <>
      <div className="hero__field" aria-hidden="true">
        <Star className="hero__deco hero__deco--star1" />
        <Sparkle className="hero__deco hero__deco--sparkle1" />
        <Ring className="hero__deco hero__deco--ring1" />
      </div>

      <div className="container hero__inner">
        <Reveal tag="span" className="eyebrow" y={16}>
          Oferta especial vuelta al cole
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
            <Marker delay={0.75}>negocio</Marker>
          </motion.span>
        </h1>

        <Reveal tag="p" className="hero__subtitle" delay={0.7}>
          Este septiembre te regalamos la herramienta que necesitas para{" "}
          <Marker delay={0.95}>eliminar por completo el caos</Marker> de crear contenido para
          tu negocio.
        </Reveal>

        <div className="hero__chips">
          {chips.map((c, i) => (
            <motion.span
              key={c}
              className="hero__chip"
              initial={{ opacity: 0, y: 14, scale: 0.85 }}
              animate={
                isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 14, scale: 0.85 }
              }
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1.0 + i * 0.08 }}
            >
              {c}
            </motion.span>
          ))}
          <motion.span
            className="hero__chip hero__chip--todo"
            initial={{ opacity: 0, y: 14, scale: 0.8 }}
            animate={
              isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 14, scale: 0.8 }
            }
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
              delay: 1.0 + chips.length * 0.08,
            }}
          >
            <Marker delay={0.15}>TODO</Marker>
          </motion.span>
        </div>

        <Reveal tag="div" className="hero__cta" delay={0.85}>
          <Cta href={SKOOL_URL}>¡Lo necesito ya!</Cta>
          <PriceTag />
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
