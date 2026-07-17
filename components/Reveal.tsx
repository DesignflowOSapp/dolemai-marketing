"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Fades/slides children in when they scroll into view. Intersection Observer
 * only — no animation library. Respects prefers-reduced-motion by showing
 * immediately.
 */
export default function Reveal({
  children,
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={"dm-reveal" + (shown ? " dm-in" : "")}
      style={{ transitionDelay: delay + "ms", ...style }}
    >
      {children}
    </div>
  );
}
