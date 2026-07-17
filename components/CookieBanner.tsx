"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { paper } from "@/lib/theme";

const KEY = "dolemai_cookie_consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try { if (!localStorage.getItem(KEY)) setShow(true); } catch { setShow(true); }
  }, []);
  function decide(v: "accepted" | "essential") {
    try { localStorage.setItem(KEY, v); } catch { /* ignore */ }
    setShow(false);
  }
  if (!show) return null;
  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed", left: 16, right: 16, bottom: 16, zIndex: 100,
        maxWidth: 620, margin: "0 auto",
        background: paper.white, border: "1px solid " + paper.sandLine, borderRadius: 8,
        padding: 18, boxShadow: "0 20px 50px -20px rgba(15,42,63,0.4)",
      }}
    >
      <p style={{ color: paper.ink, fontSize: 14, lineHeight: 1.55, margin: "0 0 14px" }}>
        Dolemai uses essential cookies to run this site and keep you signed in. We do not use
        advertising cookies. See our <Link href="/cookies" style={{ color: paper.signalDeep }}>cookie policy</Link>.
      </p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button onClick={() => decide("accepted")} style={{ background: paper.oceanDeep, color: paper.paper, border: "none", fontWeight: 600, fontSize: 14, borderRadius: 4, padding: "11px 20px", cursor: "pointer" }}>Accept</button>
        <button onClick={() => decide("essential")} style={{ background: "transparent", color: paper.oceanDeep, border: "1px solid " + paper.sand, fontWeight: 600, fontSize: 14, borderRadius: 4, padding: "11px 20px", cursor: "pointer" }}>Essential only</button>
      </div>
    </div>
  );
}
