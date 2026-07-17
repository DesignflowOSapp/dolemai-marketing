import Link from "next/link";
import { colors, APP_URL } from "@/lib/theme";
import {
  demoProject,
  demoMetrics,
  demoMovements,
  demoRegisterCounts,
} from "@/lib/demoData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo — Project overview | Dolemai",
  description: "Explore a read-only demo of the Dolemai project overview for the anonymised Riverside Works project.",
  robots: { index: true, follow: true },
};

const rag: Record<string, string> = { red: colors.red, amber: colors.amber, green: colors.green, muted: colors.muted };

function DisabledBtn({ children, tip }: { children: React.ReactNode; tip: string }) {
  return (
    <span
      title={tip}
      style={{
        display: "inline-block",
        background: "transparent",
        color: colors.muted,
        border: "1px solid " + colors.border,
        borderRadius: 6,
        padding: "8px 14px",
        fontSize: 13,
        fontWeight: 600,
        cursor: "not-allowed",
        opacity: 0.6,
      }}
    >
      {children}
    </span>
  );
}

const meta = [
  ["Client", demoProject.client],
  ["Role", demoProject.role],
  ["Stage", demoProject.stage],
  ["Contract", demoProject.contract],
  ["Contractor", demoProject.contractor],
  ["Contract sum", demoProject.contractSum],
  ["Approved budget", demoProject.approvedBudget],
  ["Start on site", demoProject.startOnSite],
  ["Contract completion", demoProject.contractCompletion],
];

export default function DemoOverview() {
  return (
    <>
      {/* header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <h1 style={{ margin: 0, color: colors.text, fontSize: 24, fontWeight: 700 }}>{demoProject.name}</h1>
            <span style={{ fontSize: 12, fontWeight: 600, color: colors.amber, background: "rgba(224,167,72,0.12)", border: "1px solid rgba(224,167,72,0.35)", borderRadius: 999, padding: "3px 12px" }}>
              {demoProject.status}
            </span>
          </div>
          <div style={{ color: colors.muted, fontSize: 12, marginTop: 6 }}>Last updated: {demoProject.lastUpdated}</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <DisabledBtn tip="Connect a real project to refresh">↻ Refresh</DisabledBtn>
          <DisabledBtn tip="Connect a real project to generate reports">Generate report</DisabledBtn>
        </div>
      </div>

      {/* meta */}
      <div style={{ marginTop: 18, background: colors.card, border: "1px solid " + colors.border, borderRadius: 12, padding: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 14 }}>
        {meta.map(([k, v]) => (
          <div key={k}>
            <div style={{ color: colors.muted, fontSize: 11 }}>{k}</div>
            <div style={{ color: colors.text, fontSize: 13, marginTop: 3 }}>{v}</div>
          </div>
        ))}
      </div>

      {/* metrics */}
      <div className="dm-metric-grid" style={{ display: "grid", gap: 12, marginTop: 18 }}>
        {demoMetrics.map((m) => (
          <div key={m.label} style={{ background: colors.card, border: "1px solid " + colors.border, borderRadius: 12, padding: 16 }}>
            <div style={{ color: colors.muted, fontSize: 11, lineHeight: 1.3 }}>{m.label}</div>
            <div style={{ color: colors.text, fontSize: 22, fontWeight: 700, marginTop: 8 }}>{m.value}</div>
            <div style={{ color: rag[m.rag], fontSize: 11, marginTop: 4 }}>{m.note}</div>
          </div>
        ))}
      </div>

      {/* two columns */}
      <div className="dm-mockup-cols" style={{ display: "grid", gap: 16, marginTop: 18 }}>
        <div style={{ background: colors.card, border: "1px solid " + colors.border, borderRadius: 12, padding: 18 }}>
          <div style={{ color: colors.text, fontSize: 14, fontWeight: 600, marginBottom: 14 }}>What changed this period</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {demoMovements.map((mv) => (
              <div key={mv.title} style={{ display: "flex", gap: 12 }}>
                <span style={{ marginTop: 5, width: 8, height: 8, borderRadius: 999, flex: "0 0 auto", background: rag[mv.rag] }} />
                <div>
                  <div style={{ color: colors.text, fontSize: 14, fontWeight: 600 }}>{mv.title}</div>
                  <div style={{ color: colors.muted, fontSize: 13, marginTop: 2, lineHeight: 1.5 }}>{mv.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: colors.card, border: "1px solid " + colors.border, borderRadius: 12, padding: 18 }}>
            <div style={{ color: colors.text, fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Registers</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {demoRegisterCounts.map((r) => (
                <Link key={r.label} href="/demo/registers" style={{ display: "flex", justifyContent: "space-between", fontSize: 13, textDecoration: "none" }}>
                  <span style={{ color: colors.muted }}>{r.label}</span>
                  <span style={{ color: colors.text, fontWeight: 600 }}>{r.count}</span>
                </Link>
              ))}
            </div>
          </div>

          <div style={{ background: "linear-gradient(180deg, rgba(91,168,217,0.10), rgba(91,168,217,0.03))", border: "1px solid rgba(91,168,217,0.35)", borderRadius: 12, padding: 18 }}>
            <div style={{ color: colors.accent, fontSize: 11, fontWeight: 600, marginBottom: 6 }}>REPORT DRAFT READY</div>
            <div style={{ color: colors.text, fontSize: 14, fontWeight: 600 }}>Monthly report — Jul 2026</div>
            <div style={{ color: colors.muted, fontSize: 13, marginTop: 4, lineHeight: 1.5 }}>Monthly report draft ready for professional review.</div>
            <Link href="/demo/reports" style={{ display: "inline-block", marginTop: 14, background: colors.accent, color: "#0A1620", fontSize: 13, fontWeight: 600, borderRadius: 6, padding: "8px 14px", textDecoration: "none" }}>
              Review report →
            </Link>
          </div>
        </div>
      </div>

      {/* demo CTA */}
      <div style={{ marginTop: 40, background: colors.card, border: "1px solid " + colors.border, borderRadius: 14, padding: 32, textAlign: "center" }}>
        <h2 style={{ color: colors.text, fontSize: 22, margin: 0 }}>Ready to connect your own project?</h2>
        <p style={{ color: colors.muted, fontSize: 15, margin: "12px auto 20px", maxWidth: 520, lineHeight: 1.6 }}>
          Setting up Riverside Works took 3 minutes. Your first analysis and report drafts are free.
        </p>
        <a href={APP_URL + "/signup"} style={{ display: "inline-block", background: colors.accent, color: "#0A1620", fontSize: 15, fontWeight: 600, borderRadius: 6, padding: "13px 24px", textDecoration: "none" }}>
          Start your first project →
        </a>
      </div>
    </>
  );
}
