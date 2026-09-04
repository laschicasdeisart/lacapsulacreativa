import Slide from "./Slide";
import Reveal from "./Reveal";
import Marker from "./Marker";
import { SLIDES } from "../constants";

const chaosItems = [
  { label: "Ideas que se pierden", rotate: -6 },
  { label: "Fechas que se olvidan", rotate: 4 },
  { label: "Grabar sin guion", rotate: -3 },
  { label: "Publicar sin plan", rotate: 6 },
];

export default function Pain() {
  return (
    <Slide index={SLIDES.PAIN} alt className="pain">
      <div className="container pain__grid">
        <div className="pain__copy">
          <Reveal tag="p" className="pain__lead">
            Sabemos que crear contenido para tu negocio es más complejo de lo que
            pensabas cuando empezaste…
          </Reveal>

          <Reveal tag="p" className="pain__big" delay={0.15}>
            Y no, por más que te empeñes en creértelo, no es porque no tengas
            tiempo… Es porque <Marker delay={0.6}>sin sistema ni estructura</Marker>,
            vas dando palos de ciego.
          </Reveal>
        </div>

        <Reveal tag="div" className="pain__chaos-card" delay={0.35} pop rotate={-1.5}>
          <span className="pain__chaos-label">Así es tu contenido sin sistema</span>
          <div className="pain__chaos-tags">
            {chaosItems.map((item) => (
              <span
                key={item.label}
                className="pain__chaos-tag"
                style={{ "--r": `${item.rotate}deg` }}
              >
                {item.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Slide>
  );
}
