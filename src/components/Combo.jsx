import Slide from "./Slide";
import Reveal from "./Reveal";
import Cta from "./Cta";
import Marker from "./Marker";
import { Sparkle } from "./Doodles";
import { SKOOL_URL, SLIDES } from "../constants";

export default function Combo() {
  return (
    <Slide index={SLIDES.COMBO} className="combo">
      <div className="container">
        <Reveal tag="span" className="section-kicker">
          El plan de estudios
        </Reveal>
        <Reveal tag="h2" className="combo__title" delay={0.05}>
          El combo{" "}
          <Marker color="yellow" delay={0.4}>
            perfecto
          </Marker>
        </Reveal>
        <Reveal tag="p" className="combo__formula" delay={0.1}>
          La Cápsula Creativa <span>+</span> Flowly <span>+</span> El Propulsor
        </Reveal>

        <div className="combo__grid">
          <Reveal tag="article" className="combo-card" delay={0.15}>
            <span className="combo-card__icon">🎓</span>
            <h3>La Cápsula Creativa</h3>
            <p>
              Estrategia, guiones, comunidad y clases en vivo — todo lo que necesitas
              para saber qué crear, cómo y por qué.
            </p>
            <Cta href={SKOOL_URL} variant="ghost" className="combo-card__cta">
              ¿Qué es la Cápsula Creativa?
            </Cta>
          </Reveal>

          <Reveal tag="article" className="combo-card" delay={0.25}>
            <span className="combo-card__icon">🗂️</span>
            <h3>Flowly</h3>
            <p>
              La herramienta que pone orden en todo el proceso: ideas, contenidos,
              calendario, lanzamientos, equipo. Flowly es el cómo ejecutas todo lo
              que aprendes en la Cápsula, sin perderlo por el camino.
            </p>
          </Reveal>
        </div>

        <Reveal tag="p" className="combo__bridge" delay={0.1}>
          La Cápsula te enseña a crear.{" "}
          <Marker color="turquoise" delay={0.3}>
            Flowly
          </Marker>{" "}
          es la app desde la que creas y centralizas la gestión de todo tu contenido.
        </Reveal>

        <Reveal tag="article" className="combo-card combo-card--propulsor" delay={0.1}>
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
        </Reveal>

        <Reveal tag="p" className="combo__closing" delay={0.15}>
          Ese es el combo completo.
        </Reveal>
      </div>
    </Slide>
  );
}
