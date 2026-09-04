import { useCallback, useRef, useState } from "react";

// Motor de sonido minimalista (Web Audio, sin ficheros): un par de "blips"
// tipo rotulador para acompañar los hovers/clicks, como en la referencia.
let sharedCtx = null;
function getCtx() {
  if (!sharedCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    sharedCtx = new AudioCtx();
  }
  return sharedCtx;
}

function blip(ctx, { freq = 440, duration = 0.09, type = "sine", gain = 0.05 }) {
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(Math.max(freq * 0.6, 40), ctx.currentTime + duration);
  amp.gain.setValueAtTime(gain, ctx.currentTime);
  amp.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
  osc.connect(amp).connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration + 0.02);
}

export function useSoundEngine() {
  const [enabled, setEnabled] = useState(false);
  const enabledRef = useRef(enabled);
  enabledRef.current = enabled;

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      if (next) {
        const ctx = getCtx();
        if (ctx.state === "suspended") ctx.resume();
        blip(ctx, { freq: 620, duration: 0.12, type: "triangle", gain: 0.06 });
      }
      return next;
    });
  }, []);

  const hover = useCallback(() => {
    if (!enabledRef.current) return;
    blip(getCtx(), { freq: 880, duration: 0.05, type: "sine", gain: 0.035 });
  }, []);

  const click = useCallback(() => {
    if (!enabledRef.current) return;
    blip(getCtx(), { freq: 320, duration: 0.14, type: "square", gain: 0.05 });
  }, []);

  return { enabled, toggle, hover, click };
}
