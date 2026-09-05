import Slide from "./Slide";
import Reveal from "./Reveal";
import { SLIDES } from "../constants";

const testimonials = [
  {
    quote:
      "Me he quedado muerta con el generador de ideas. Dándole solo mi nicho me ha sacado 60 ideas, a cual mejor, y lo más flipante es que no suena ni de lejos a IA.",
    role: "Usuario de El Propulsor",
    rotate: -3,
  },
  {
    quote: "Tengo clarísimo que esto va a ser un antes y un después en mi contenido.",
    role: "Miembro de La Cápsula",
    rotate: 2,
  },
  {
    quote:
      "En ningún sitio vais a recibir tanto por tan poco. Toda la ayuda, toda la facilidad en los procesos y todo el aprendizaje que ofrecen Irene y María.",
    role: "Miembro de La Cápsula",
    rotate: -1.5,
  },
  {
    quote:
      "Me parece brutal, porque esto va a ahorrar tiempo y dinero. Qué bien piensa y organiza — y las pruebas que le hice de guiones e historias me han molado.",
    role: "Usuario de El Propulsor",
    rotate: 2.5,
  },
  {
    quote:
      "Poco se habla de la magia del Propulsor… no nos estamos dando cuenta de lo que han creado estas dos mujeres. Gracias, chicas, de corazón.",
    role: "Miembro de La Cápsula",
    rotate: -2,
  },
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
          {testimonials.map((t, i) => (
            <Reveal
              tag="figure"
              className="testimonial-card"
              key={i}
              delay={0.18 + i * 0.12}
              pop
              rotate={t.rotate}
              whileHover={{ rotate: 0, y: -4 }}
            >
              <span className="testimonial-card__quote">"</span>
              <p className="testimonial-card__quote-text">{t.quote}</p>
              <figcaption>
                <span className="testimonial-card__role">{t.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
        <Reveal tag="p" className="testimonials__note" delay={0.4}>
          Y esto es solo el principio — cada semana se suman más testimonios.
        </Reveal>
      </div>
    </Slide>
  );
}
