import Slide from "./Slide";
import Reveal from "./Reveal";
import { SLIDES } from "../constants";

const slots = [
  { tag: "Miembro de La Cápsula", rotate: -3 },
  { tag: "Usuario de Flowly", rotate: 2 },
  { tag: "Miembro de La Cápsula", rotate: -1.5 },
];

export default function Testimonials() {
  return (
    <Slide index={SLIDES.TESTIMONIALS} alt className="testimonials">
      <div className="container">
        <Reveal tag="span" className="section-kicker">
          Nuestra tripulación
        </Reveal>
        <Reveal tag="h2" className="testimonials__title" delay={0.05} pop y={40}>
          Lo que dice nuestra tripulación
        </Reveal>

        <div className="testimonials__grid">
          {slots.map((slot, i) => (
            <Reveal
              tag="figure"
              className="testimonial-card"
              key={i}
              delay={0.18 + i * 0.12}
              pop
              rotate={slot.rotate}
              whileHover={{ rotate: 0, y: -4 }}
            >
              <span className="testimonial-card__quote">"</span>
              <p className="testimonial-card__placeholder">
                Testimonio pendiente de añadir — aquí irá la experiencia real de
                un{slot.tag.startsWith("U") ? "" : "a"} {slot.tag.toLowerCase()}.
              </p>
              <figcaption>{slot.tag}</figcaption>
            </Reveal>
          ))}
        </div>
        <Reveal tag="p" className="testimonials__note" delay={0.4}>
          Espacio reservado — se irán añadiendo testimonios reales a medida que
          entren.
        </Reveal>
      </div>
    </Slide>
  );
}
