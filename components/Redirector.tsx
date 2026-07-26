"use client";
import { useEffect } from "react";

/** Client-side redirect to an external URL (edge _redirects handles it in prod). */
export default function Redirector({ to, label }: { to: string; label: string }) {
  useEffect(() => { window.location.replace(to); }, [to]);
  return (
    <div style={{ minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ textAlign: "center" }}>
        <p style={{ color: "#536472", fontSize: 15 }}>Taking you to {label}…</p>
        <p style={{ marginTop: 8 }}>
          <a href={to} style={{ color: "#4d8cba", fontWeight: 700 }}>Continue to {label} →</a>
        </p>
      </div>
    </div>
  );
}
