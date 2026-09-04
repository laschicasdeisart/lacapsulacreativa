import { motion } from "framer-motion";
import { useActiveSlide } from "../hooks/SlideDeckContext";

// Entra cuando su slide se activa (no al hacer scroll). Se reinicia al
// salir del slide para que la entrada se repita cada vez que se vuelve.
// pop=true da una entrada tipo "pegatina cayendo" (springy, con rotación)
// para títulos y tarjetas — más cerca del ritmo de Nodeck que un fade liso.
export default function Reveal({
  tag = "div",
  children,
  delay = 0,
  y = 28,
  pop = false,
  rotate = 0,
  className = "",
  ...rest
}) {
  const isActive = useActiveSlide();
  const Tag = motion[tag];

  const hidden = pop ? { opacity: 0, y, scale: 0.82, rotate: rotate - 4 } : { opacity: 0, y };
  const show = pop
    ? {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate,
        transition: { type: "spring", stiffness: 240, damping: 19, mass: 0.7, delay },
      }
    : { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] } };

  return (
    <Tag
      className={className}
      initial="hidden"
      animate={isActive ? "show" : "hidden"}
      variants={{ hidden, show }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
