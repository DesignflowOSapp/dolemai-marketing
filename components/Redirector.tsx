"use client";
import { useEffect } from "react";
import { paper as colors } from "@/lib/theme";

/** Client-side redirect to an external URL. The Cloudflare _redirects file
 *  handles this at the edge in production; this is the fallback. */
export default function Redirector({ to, label }: { to: string; label: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ textAlign: "center" }}>
        <p style={{ color: colors.muted, fontSize: 15 }}>Taking you to {label}…</p>
        <p style={{ marginTop: 8 }}>
          <a href={to} style={{ color: colors.accent, fontWeight: 600 }}>Continue to {label} →</a>
        </p>
      </div>
    </div>
  );
}
