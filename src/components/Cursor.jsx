import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Cursor a medida: punto turquesa + halo, se convierte en "subrayador"
// amarillo al pasar sobre botones/textos marcados.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState("default");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(hasFinePointer);
    if (!hasFinePointer) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target.closest("[data-cursor]");
      setVariant(target ? target.getAttribute("data-cursor") : "default");
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="cursor-layer" aria-hidden="true">
      <motion.div
        className={`cursor-ring cursor-ring--${variant}`}
        style={{ left: ringX, top: ringY }}
      />
      <motion.div
        className={`cursor-dot ${variant === "marker" ? "cursor-dot--hidden" : ""}`}
        style={{ left: x, top: y }}
      />
    </div>
  );
}
