"use client";
import { useState } from "react";
import DemoReport from "@/components/DemoReport";
import { colors, APP_URL } from "@/lib/theme";

const internalSections = [
  "Key activities (completed and due)",
  "Blockers",
  "Risks and issues (full detail)",
  "Movement this period",
  "Actions (with owners and due dates)",
  "Potential and confirmed contract changes",
  "Contract-administration items",
];

function Tab({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? colors.card : "transparent",
        color: active ? colors.text : colors.muted,
        border: "1px solid " + (active ? colors.border : "transparent"),
        borderRadius: 8,
        padding: "8px 16px",
        fontSize: 14,
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default function DemoReportTabs() {
  const [tab, setTab] = useState<"client" | "internal">("client");
  return (
    <div>
      <div style={{ display: "flex", gap: 6, marginBottom: 18, background: colors.bg, border: "1px solid " + colors.border, borderRadius: 10, padding: 5, width: "fit-content" }}>
        <Tab active={tab === "client"} onClick={() => setTab("client")}>Client report</Tab>
        <Tab active={tab === "internal"} onClick={() => setTab("internal")}>Internal report</Tab>
      </div>

      {tab === "client" ? (
        <>
          <DemoReport />
          <p style={{ color: colors.muted, fontSize: 12.5, textAlign: "center", maxWidth: 780, margin: "16px auto 0", lineHeight: 1.6 }}>
            AI-generated draft. Review all dates, figures, responsibilities, assumptions and
            professional judgements before issue.
          </p>
        </>
      ) : (
        <div style={{ maxWidth: 780, margin: "0 auto", background: colors.card, border: "1px solid " + colors.border, borderRadius: 14, padding: 32 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: colors.accent, letterSpacing: "0.04em" }}>INTERNAL REPORT</div>
          <h3 style={{ color: colors.text, fontSize: 20, margin: "8px 0 6px" }}>The delivery-team view</h3>
          <p style={{ color: colors.muted, fontSize: 14.5, lineHeight: 1.6, margin: "0 0 18px" }}>
            The internal report carries the full detail your project team needs before the next
            period — including everything below.
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {internalSections.map((s) => (
              <li key={s} style={{ display: "flex", gap: 10, alignItems: "center", color: colors.muted, fontSize: 14 }}>
                <span aria-hidden style={{ color: colors.muted }}>🔒</span>
                <span style={{ filter: "blur(0.4px)", opacity: 0.85 }}>{s}</span>
              </li>
            ))}
          </ul>
          <a
            href={APP_URL + "/signup"}
            style={{ display: "inline-block", marginTop: 24, background: colors.accent, color: "#0A1620", fontSize: 14, fontWeight: 600, borderRadius: 6, padding: "12px 20px", textDecoration: "none" }}
          >
            Sign up to see the full internal report →
          </a>
        </div>
      )}
    </div>
  );
}
