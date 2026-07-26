"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

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
    <div className="cookie" role="dialog" aria-label="Cookie consent">
      <p>
        Dolemai uses essential cookies to run this site and keep you signed in. We do not use
        advertising cookies. See our <Link href="/cookies" style={{ color: "#4d8cba", fontWeight: 700 }}>cookie policy</Link>.
      </p>
      <div className="cookie-actions">
        <button onClick={() => decide("accepted")} className="btn btn-primary" style={{ minHeight: 44, padding: "0 20px" }}>Accept</button>
        <button onClick={() => decide("essential")} className="btn btn-secondary" style={{ minHeight: 44, padding: "0 20px" }}>Essential only</button>
      </div>
    </div>
  );
}
