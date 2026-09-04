import { createContext, useContext } from "react";
import { useSoundEngine } from "./useSoundEngine";

const SoundContext = createContext(null);

export function SoundProvider({ children }) {
  const engine = useSoundEngine();
  return <SoundContext.Provider value={engine}>{children}</SoundContext.Provider>;
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within SoundProvider");
  return ctx;
}
