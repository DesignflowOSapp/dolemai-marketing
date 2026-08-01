"use client";
import { useEffect, useState } from "react";

/**
 * Elapsed-time driver for the demo animations.
 *  - default: loops in [0, loopMs) forever
 *  - opts.once: plays 0 → restAt once, then stops (rests on the final frame)
 *  - prefers-reduced-motion: jumps straight to restAt, no animation
 * rAF-driven and guarded by document.hidden so hidden tabs never advance.
 */
export function useTimeline(loopMs: number, opts?: { once?: boolean; restAt?: number }): number {
  const once = !!opts?.once;
  const restAt = opts?.restAt ?? loopMs;
  const [t, setT] = useState(0);
  useEffect(() => {
    // Reduced motion only skips play-once animations (accessibility). Looping
    // animations keep looping as intended.
    if (once && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setT(restAt); return; }
    let raf = 0;
    let last = performance.now();
    let elapsed = 0;
    let stopped = false;
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (!document.hidden && !stopped) {
        elapsed += dt;
        if (once) {
          if (elapsed >= restAt) { setT(restAt); stopped = true; return; }
        } else {
          elapsed %= loopMs;
        }
        setT(elapsed);
      }
      raf = requestAnimationFrame(tick);
    };
    const onVis = () => { last = performance.now(); };
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); document.removeEventListener("visibilitychange", onVis); };
  }, [loopMs, once, restAt]);
  return t;
}
