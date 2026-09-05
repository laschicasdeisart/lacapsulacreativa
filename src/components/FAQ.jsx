import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slide from "./Slide";
import Reveal from "./Reveal";
import Marker from "./Marker";
import { useSound } from "../hooks/SoundContext";
import { SLIDES } from "../constants";

const faqs = [
  {
    q: "¿Esto es una versión de prueba limitada de Flowly?",
    a: "No. Es la versión completa de Flowly para uso individual, gratis durante el tiempo indicado según tu plan.",
  },
  {
    q: "¿Qué pasa si me doy de baja de La Cápsula antes de que acabe mi periodo gratis?",
    a: "El acceso gratuito a Flowly está ligado a seguir activo en La Cápsula. Si cancelas, se cancela también el acceso gratuito a Flowly.",
  },
  {
    q: "¿Esto incluye la versión de Flowly para gestionar clientes (portal de agencia)?",
    a: "No, esta oferta es para el uso individual de Flowly, pensado para gestionar tu propio contenido y marca.",
  },
  {
    q: "¿Puedo entrar como standard y luego pasar a premium?",
    a: "Sí, puedes cambiar de plan cuando quieras dentro de La Cápsula. Eso sí: los 6 meses gratis de Flowly del plan Standard no se amplían a 12 si luego pasas a Premium — el año completo gratis aplica solo a quienes entran directamente como Premium.",
  },
  {
    q: "¿Qué pasa cuando terminen mis meses gratis de Flowly?",
    a: "Sigues disfrutando de todo lo aprendido en La Cápsula, y podrás continuar en Flowly a precio normal si decides quedarte — para entonces ya sabrás si es indispensable para ti.",
  },
  {
    q: "¿Esta oferta se repite en otro momento del año?",
    a: "No. Esta es una oferta única para dar a conocer Flowly entre nuestra comunidad más cercana. Una vez termine septiembre, no vuelve a repetirse — ni en septiembre del año que viene, ni en ningún otro momento.",
  },
  {
    q: "¿Qué pasa si no entro ahora, en septiembre?",
    a: "El 30 de septiembre el precio de entrada en La Cápsula sube, y cerramos las puertas a nuevos miembros. No sabemos cuándo — ni si — volveremos a abrirlas.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  const { hover, click } = useSound();
  return (
    <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="faq-item__q"
        onClick={() => {
          click();
          onToggle();
        }}
        onMouseEnter={hover}
        aria-expanded={isOpen}
      >
        <span>{item.q}</span>
        <span className="faq-item__icon" aria-hidden="true">
          {isOpen ? "–" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="faq-item__a-wrap"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="faq-item__a">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Slide index={SLIDES.FAQ} className="faq">
      <div className="container">
        <Reveal tag="span" className="section-kicker">
          Antes de que preguntes
        </Reveal>
        <Reveal tag="h2" className="faq__title" delay={0.05} pop y={40}>
          Por si te lo estás <Marker delay={0.4}>preguntando</Marker>…
        </Reveal>

        <div className="faq__list">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </Slide>
  );
}
