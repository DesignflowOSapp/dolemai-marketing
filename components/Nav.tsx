"use client";
import { useState } from "react";
import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { APP_URL } from "@/lib/theme";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <Link href="/how-it-works" onClick={() => setOpen(false)}>How it works</Link>
      <Link href="/demo/overview" onClick={() => setOpen(false)}>Try demo</Link>
      <a href={APP_URL + "/login"}>Sign in</a>
      <a className="nav-cta" href={APP_URL + "/signup"}>Start your first project</a>
    </>
  );
  return (
    <header className="site-header">
      <div className="container nav">
        <Wordmark />
        <nav className="nav-links" aria-label="Primary navigation">{links}</nav>
        <button className="menu-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="container" style={{ paddingBottom: 18 }}>
          <nav aria-label="Mobile navigation" style={{
            display: "flex", flexDirection: "column", gap: 14, alignItems: "stretch",
            padding: 20, background: "#f6f1e8", border: "1px solid #d8c7a8",
            borderRadius: 14, boxShadow: "0 20px 50px rgba(18,42,64,.16)",
            fontWeight: 600, color: "#28465f",
          }}>{links}</nav>
        </div>
      )}
    </header>
  );
}
