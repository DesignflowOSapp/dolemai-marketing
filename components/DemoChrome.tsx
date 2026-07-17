"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { colors, APP_URL } from "@/lib/theme";

export function DemoBanner() {
  return (
    <div className="dm-demo-banner">
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 600 }}>
          You are viewing a demo project. No real data here.
        </span>
        <a
          href={APP_URL + "/signup"}
          style={{
            background: "#06121b",
            color: "#F3F1FF",
            fontSize: 13,
            fontWeight: 600,
            borderRadius: 6,
            padding: "7px 14px",
            textDecoration: "none",
          }}
        >
          Start your own project →
        </a>
      </div>
    </div>
  );
}

const items = [
  { href: "/demo/overview", label: "Project Overview" },
  { href: "/demo/registers", label: "Registers" },
  { href: "/demo/reports", label: "Reports" },
];

export function DemoNav() {
  const path = usePathname();
  return (
    <aside
      style={{
        borderRight: "1px solid " + colors.border,
        padding: "20px 14px",
        background: "#0A0B10",
      }}
    >
      <div style={{ padding: "0 8px 16px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: colors.accent, display: "inline-block" }} />
        <span style={{ color: colors.text, fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em" }}>Dolemai</span>
      </div>
      <nav className="dm-demo-nav" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {items.map((it) => (
          <Link key={it.href} href={it.href} className={path === it.href ? "on" : ""}>
            {it.label}
          </Link>
        ))}
      </nav>
      <div style={{ marginTop: 20, padding: "0 8px" }}>
        <Link href="/" style={{ color: colors.muted, fontSize: 12, textDecoration: "none" }}>
          ← Back to dolemai.com
        </Link>
      </div>
    </aside>
  );
}
