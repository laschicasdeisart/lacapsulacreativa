import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const slots = [
  { tag: "Miembro de La Cápsula", rotate: -3 },
  { tag: "Usuario de Flowly", rotate: 2 },
  { tag: "Miembro de La Cápsula", rotate: -1.5 },
];

export default function Testimonials() {
  return (
    <section className="slide slide--auto slide--alt testimonials" id="tripulacion">
      <div className="container">
        <motion.span className="section-kicker" {...fadeUp(0)}>
          Nuestra tripulación
        </motion.span>
        <motion.h2 className="testimonials__title" {...fadeUp(0.05)}>
          Lo que dice nuestra tripulación
        </motion.h2>

        <div className="testimonials__grid">
          {slots.map((slot, i) => (
            <motion.figure
              className="testimonial-card"
              key={i}
              style={{ "--rotate": `${slot.rotate}deg` }}
              {...fadeUp(0.15 + i * 0.1)}
            >
              <span className="testimonial-card__quote">"</span>
              <p className="testimonial-card__placeholder">
                Testimonio pendiente de añadir — aquí irá la experiencia real de
                un{slot.tag.startsWith("U") ? "" : "a"} {slot.tag.toLowerCase()}.
              </p>
              <figcaption>{slot.tag}</figcaption>
            </motion.figure>
          ))}
        </div>
        <motion.p className="testimonials__note" {...fadeUp(0.4)}>
          Espacio reservado — se irán añadiendo testimonios reales a medida que
          entren.
        </motion.p>
      </div>
    </section>
  );
}
