import { motion } from "framer-motion";
import { useActiveSlide } from "../hooks/SlideDeckContext";

// Entra cuando su slide se activa (no al hacer scroll). Se reinicia al
// salir del slide para que la entrada se repita cada vez que se vuelve.
export default function Reveal({ tag = "div", children, delay = 0, y = 28, className = "", ...rest }) {
  const isActive = useActiveSlide();
  const Tag = motion[tag];
  return (
    <Tag
      className={className}
      initial="hidden"
      animate={isActive ? "show" : "hidden"}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
