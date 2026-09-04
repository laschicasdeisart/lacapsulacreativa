import { useEffect, useMemo, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useActiveSlide } from "../hooks/SlideDeckContext";

// Dos trazos "a mano" distintos (bordes irregulares, grosor desigual) para
// que no todos los resaltados se vean como el mismo rectángulo clonado.
const PATHS = [
  "M6,30 C2,22 4,12 14,10 C90,2 180,14 230,6 C260,2 284,8 296,16 C300,20 298,28 292,30 C250,38 190,24 140,32 C90,40 40,30 16,36 C6,38 2,34 6,30 Z",
  "M8,14 C4,6 10,2 20,4 C80,14 160,4 220,12 C256,18 280,8 294,4 C300,4 298,14 292,20 C270,30 220,16 170,24 C110,34 60,18 26,28 C10,32 4,22 8,14 Z",
];

let markCount = 0;

// Resaltado automático tipo rotulador (siempre turquesa, en degradado
// suave): se dibuja solo al entrar en el slide, no depende del cursor. El
// texto en mayúsculas y en negrita es lo que destaca; la tinta es un
// apoyo sutil detrás, no un bloque sólido.
export default function Marker({ children, delay = 0, className = "" }) {
  const id = useMemo(() => markCount++, []);
  const path = PATHS[id % PATHS.length];
  const gradientId = useMemo(() => `mark-ink-${id}`, [id]);
  const tilt = useMemo(() => (((id * 37) % 7) - 3) * 0.5, [id]);

  const isActive = useActiveSlide();
  const controls = useAnimation();
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (isActive) {
      hasPlayed.current = true;
      controls.start("drawn");
    } else if (hasPlayed.current) {
      controls.set("hidden");
      hasPlayed.current = false;
    }
  }, [isActive, controls]);

  return (
    <span className={`mark ${className}`}>
      <motion.svg
        className="mark__ink"
        viewBox="0 0 300 44"
        preserveAspectRatio="none"
        initial="hidden"
        animate={controls}
        style={{ transformOrigin: "left center" }}
        variants={{
          hidden: { scaleX: 0, rotate: 0 },
          drawn: {
            scaleX: [0, 0.22, 0.52, 0.8, 1],
            rotate: [0, tilt * 1.7, tilt * 0.5, tilt * 1.15, tilt],
            transition: { duration: 0.7, delay, times: [0, 0.2, 0.45, 0.75, 1], ease: "easeOut" },
          },
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--turquoise)" stopOpacity="0.16" />
            <stop offset="18%" stopColor="var(--turquoise)" stopOpacity="0.5" />
            <stop offset="55%" stopColor="var(--turquoise)" stopOpacity="0.38" />
            <stop offset="85%" stopColor="var(--turquoise)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--turquoise)" stopOpacity="0.14" />
          </linearGradient>
        </defs>
        <path d={path} fill={`url(#${gradientId})`} />
        <path d={path} className="mark__ink-pass" transform="translate(-3,3) scale(0.985)" />
      </motion.svg>
      <span className="mark__text">{children}</span>
    </span>
  );
}
