import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const SlideDeckContext = createContext(null);
export const ActiveSlideContext = createContext(false);

export function SlideDeckProvider({ total, children }) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (i) => setIndex(Math.min(Math.max(i, 0), total - 1)),
    [total]
  );
  const next = useCallback(() => setIndex((i) => Math.min(i + 1, total - 1)), [total]);
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const value = useMemo(
    () => ({ index, total, goTo, next, prev, isFirst: index === 0, isLast: index === total - 1 }),
    [index, total, goTo, next, prev]
  );

  return <SlideDeckContext.Provider value={value}>{children}</SlideDeckContext.Provider>;
}

export function useSlideDeck() {
  const ctx = useContext(SlideDeckContext);
  if (!ctx) throw new Error("useSlideDeck must be used within SlideDeckProvider");
  return ctx;
}

export function useActiveSlide() {
  return useContext(ActiveSlideContext);
}
