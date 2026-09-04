import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Frase resaltada tipo "subrayador": se rellena al entrar en pantalla,
// y si el usuario pasa el cursor por encima, puede "trazarlo" a mano.
export default function Marker({ children, color = "turquoise", className = "" }) {
  const ref = useRef(null);
  const scaleX = useMotionValue(0);
  const smooth = useSpring(scaleX, { stiffness: 260, damping: 26, mass: 0.4 });

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const fraction = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    scaleX.set(fraction);
  };

  return (
    <span
      ref={ref}
      className={`mark mark--${color} ${className}`}
      data-cursor="marker"
      onMouseMove={handleMove}
      onMouseLeave={() => scaleX.set(1)}
    >
      <motion.span
        className="mark__fill"
        style={{ scaleX: smooth }}
        onViewportEnter={() => scaleX.set(1)}
        viewport={{ once: true, amount: 0.7 }}
      />
      <span className="mark__text">{children}</span>
    </span>
  );
}
