import { useRef } from "react";
import { useSlideDeck } from "../hooks/SlideDeckContext";
import SlideNav from "./SlideNav";

const SWIPE_THRESHOLD = 50;

export default function Deck({ children }) {
  const { index, next, prev } = useSlideDeck();
  const touch = useRef(null);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) next();
    else prev();
  };

  return (
    <div className="deck">
      <div
        className="deck__track"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {children}
      </div>
      <SlideNav />
    </div>
  );
}
