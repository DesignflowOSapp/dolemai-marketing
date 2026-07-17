"use client";
import { useState } from "react";
import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import Container from "@/components/Container";
import { paper, APP_URL } from "@/lib/theme";

const linkStyle: React.CSSProperties = {
  color: paper.ink,
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 500,
};

const cta: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 600,
  background: paper.oceanDeep,
  color: paper.paper,
  padding: "10px 20px",
  borderRadius: 4,
  textDecoration: "none",
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(251,248,242,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid " + paper.sandLine,
      }}
    >
      <Container>
        <div style={{ height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Wordmark />

          <nav className="dm-nav-desktop" style={{ alignItems: "center", gap: 26 }}>
            <Link href="/how-it-works" style={linkStyle}>How it works</Link>
            <Link href="/demo" style={linkStyle}>Try demo</Link>
            <Link href="/pricing" style={linkStyle}>Pricing</Link>
            <a href={APP_URL + "/login"} style={linkStyle}>Sign in</a>
            <a href={APP_URL + "/signup"} style={cta}>Start free</a>
          </nav>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="dm-nav-toggle"
            style={{
              background: "transparent",
              border: "1px solid " + paper.sand,
              borderRadius: 4,
              color: paper.ink,
              width: 40,
              height: 36,
              cursor: "pointer",
              fontSize: 18,
              lineHeight: 1,
            }}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <nav style={{ display: "flex", flexDirection: "column", gap: 4, paddingBottom: 16 }}>
            <Link href="/how-it-works" style={{ ...linkStyle, padding: "10px 0" }} onClick={() => setOpen(false)}>How it works</Link>
            <Link href="/demo" style={{ ...linkStyle, padding: "10px 0" }} onClick={() => setOpen(false)}>Try demo</Link>
            <Link href="/pricing" style={{ ...linkStyle, padding: "10px 0" }} onClick={() => setOpen(false)}>Pricing</Link>
            <a href={APP_URL + "/login"} style={{ ...linkStyle, padding: "10px 0" }}>Sign in</a>
            <a href={APP_URL + "/signup"} style={{ ...cta, textAlign: "center", marginTop: 8 }}>Start free</a>
          </nav>
        )}
      </Container>
    </header>
  );
}
