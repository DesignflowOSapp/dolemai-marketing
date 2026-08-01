"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Elapsed-time driver for the demo animations.
 *  - default: loops in [0, loopMs) forever
 *  - opts.once: plays 0 → restAt once, then stops (rests on the final frame)
 *  - opts.enabled === false: paused at 0 until enabled (e.g. scrolled into view)
 *  - prefers-reduced-motion: play-once jumps straight to restAt (no animation)
 * rAF-driven, guarded by document.hidden so hidden tabs never advance.
 */
export function useTimeline(loopMs: number, opts?: { once?: boolean; restAt?: number; enabled?: boolean }): number {
  const once = !!opts?.once;
  const restAt = opts?.restAt ?? loopMs;
  const enabled = opts?.enabled ?? true;
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!enabled) return;
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
  }, [loopMs, once, restAt, enabled]);
  return t;
}

/** Returns [ref, inView] — inView flips true once the element is >= threshold visible. */
export function useInView(threshold = 0.5): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setInView(true); }),
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}
