"use client";
import { useEffect, useRef, useState } from "react";

/** Fades/slides children in on scroll (Intersection Observer, no library). */
export default function Reveal({
  children, delay = 0, style, className,
}: { children: React.ReactNode; delay?: number; style?: React.CSSProperties; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShown(true); return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setShown(true); obs.unobserve(e.target); } });
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={"reveal" + (shown ? " in" : "") + (className ? " " + className : "")}
      style={{ transitionDelay: delay + "ms", ...style }}>
      {children}
    </div>
  );
}
