"use client";
import { useEffect, useState } from "react";

/**
 * Loops elapsed time in [0, loopMs). Driven by requestAnimationFrame, which the
 * browser already pauses on hidden tabs; we also guard with document.hidden so a
 * backgrounded tab never advances. Returns elapsed ms for the current loop.
 */
export function useTimeline(loopMs: number): number {
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    let elapsed = 0;
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (!document.hidden) {
        elapsed = (elapsed + dt) % loopMs;
        setT(elapsed);
      }
      raf = requestAnimationFrame(tick);
    };
    const onVis = () => { last = performance.now(); };
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); document.removeEventListener("visibilitychange", onVis); };
  }, [loopMs]);
  return t;
}
