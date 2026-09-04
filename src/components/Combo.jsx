import Slide from "./Slide";
import Reveal from "./Reveal";
import Cta from "./Cta";
import Marker from "./Marker";
import { Sparkle } from "./Doodles";
import { GradCapIcon, FolderIcon, RocketIcon } from "./CartoonIcons";
import { SKOOL_ABOUT_URL, FLOWLY_DEMO_URL, SLIDES } from "../constants";

export default function Combo() {
  return (
    <Slide index={SLIDES.COMBO} className="combo">
      <div className="container">
        <Reveal tag="h2" className="combo__title" pop y={44}>
          El combo <Marker delay={0.45}>perfecto</Marker>
        </Reveal>
        <Reveal tag="p" className="combo__formula" delay={0.18} y={46} pop rotate={-1}>
          La Cápsula Creativa <span>+</span> Flowly <span>+</span> El Propulsor
        </Reveal>

        <div className="combo__grid">
          <Reveal
            tag="article"
            className="combo-card"
            delay={0.2}
            pop
            rotate={-1.5}
            whileHover={{ rotate: 0, y: -4 }}
          >
            <GradCapIcon className="combo-card__icon" />
            <h3>La Cápsula Creativa</h3>
            <p>
              Estrategia, guiones, comunidad y clases en vivo — todo lo que necesitas
              para saber qué crear, cómo y por qué.
            </p>
            <Cta href={SKOOL_ABOUT_URL} variant="ghost" className="combo-card__cta">
              ¿Qué es la Cápsula Creativa?
            </Cta>
          </Reveal>

          <Reveal
            tag="article"
            className="combo-card"
            delay={0.32}
            pop
            rotate={1.5}
            whileHover={{ rotate: 0, y: -4 }}
          >
            <FolderIcon className="combo-card__icon" />
            <h3>Flowly</h3>
            <p>
              La herramienta que pone orden en todo el proceso: ideas, contenidos,
              calendario, lanzamientos, equipo. Flowly es el cómo ejecutas todo lo
              que aprendes en la Cápsula, sin perderlo por el camino.
            </p>
            <Cta href={FLOWLY_DEMO_URL} variant="ghost" className="combo-card__cta">
              Descubre Flowly a fondo
            </Cta>
          </Reveal>
        </div>

        <Reveal
          tag="article"
          className="combo-card combo-card--propulsor"
          delay={0.42}
          pop
          whileHover={{ y: -4 }}
        >
          <Sparkle className="combo-card__sparkle" />
          <RocketIcon className="combo-card__icon" />
          <h3>Y el Propulsor</h3>
          <p>
            Es una app con la que generas guiones, secuencias de stories y ofertas
            irresistibles como si tuvieras nuestro cerebro creativo en tus manos.
            Literal.
          </p>
        </Reveal>

        <Reveal tag="p" className="combo__closing" delay={0.15}>
          Ese es el combo completo.
        </Reveal>

        <Reveal tag="p" className="combo__bridge" delay={0.2}>
          La Cápsula te enseña a crear. <Marker delay={0.4}>Flowly</Marker> es la app
          desde la que creas y centralizas la gestión de todo tu contenido.
          <br />
          Y para finiquitar… El Propulsor lo hace posible en tiempo récord.
        </Reveal>
      </div>
    </Slide>
  );
}
