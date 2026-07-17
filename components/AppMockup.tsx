import { colors } from "@/lib/theme";
import {
  demoProject,
  demoMetrics,
  demoMovements,
  demoRegisterCounts,
} from "@/lib/demoData";

const ragColor: Record<string, string> = {
  red: colors.red,
  amber: colors.amber,
  green: colors.green,
  muted: colors.muted,
};

/**
 * Static, non-interactive Project Overview mockup that mirrors the real app UI.
 * Pure markup + inline styles — no screenshot, no data fetching.
 */
export default function AppMockup() {
  return (
    <div
      style={{
        background: colors.card,
        border: "1px solid " + colors.border,
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: "0 24px 70px rgba(0,0,0,0.55)",
        width: "100%",
        maxWidth: 940,
        margin: "0 auto",
      }}
    >
      {/* window chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 14px",
          borderBottom: "1px solid " + colors.border,
          background: "#0B0D13",
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#33384a" }} />
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#33384a" }} />
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#33384a" }} />
        <span
          style={{
            marginLeft: 10,
            fontSize: 11,
            color: colors.muted,
            background: colors.bg,
            border: "1px solid " + colors.border,
            borderRadius: 6,
            padding: "3px 10px",
          }}
        >
          app.dolemai.com / projects / riverside-works
        </span>
      </div>

      <div style={{ padding: 20 }}>
        {/* header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 18,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <h3 style={{ margin: 0, color: colors.text, fontSize: 18, fontWeight: 700 }}>
                {demoProject.name}
              </h3>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: colors.amber,
                  background: "rgba(224,167,72,0.12)",
                  border: "1px solid rgba(224,167,72,0.35)",
                  borderRadius: 999,
                  padding: "3px 10px",
                }}
              >
                {demoProject.status}
              </span>
            </div>
            <div style={{ color: colors.muted, fontSize: 12, marginTop: 6 }}>
              {demoProject.client} · {demoProject.role} · {demoProject.stage}
            </div>
          </div>
          <div style={{ color: colors.muted, fontSize: 11, textAlign: "right" }}>
            Last updated<br />
            <span style={{ color: colors.text }}>{demoProject.lastUpdated}</span>
          </div>
        </div>

        {/* metric cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 10,
            marginBottom: 18,
          }}
          className="dm-metric-grid"
        >
          {demoMetrics.map((m) => (
            <div
              key={m.label}
              style={{
                background: colors.bg,
                border: "1px solid " + colors.border,
                borderRadius: 10,
                padding: "12px 12px 14px",
              }}
            >
              <div style={{ color: colors.muted, fontSize: 11, marginBottom: 8, lineHeight: 1.3 }}>
                {m.label}
              </div>
              <div style={{ color: colors.text, fontSize: 20, fontWeight: 700 }}>{m.value}</div>
              <div style={{ color: ragColor[m.rag], fontSize: 11, marginTop: 4 }}>{m.note}</div>
            </div>
          ))}
        </div>

        {/* two columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 14 }} className="dm-mockup-cols">
          {/* what changed */}
          <div
            style={{
              background: colors.bg,
              border: "1px solid " + colors.border,
              borderRadius: 10,
              padding: 14,
            }}
          >
            <div style={{ color: colors.text, fontSize: 13, fontWeight: 600, marginBottom: 12 }}>
              What changed this period
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {demoMovements.map((mv) => (
                <div key={mv.title} style={{ display: "flex", gap: 10 }}>
                  <span
                    style={{
                      marginTop: 5,
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      flex: "0 0 auto",
                      background: ragColor[mv.rag],
                    }}
                  />
                  <div>
                    <div style={{ color: colors.text, fontSize: 13, fontWeight: 600 }}>{mv.title}</div>
                    <div style={{ color: colors.muted, fontSize: 12, marginTop: 2, lineHeight: 1.45 }}>
                      {mv.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                background: colors.bg,
                border: "1px solid " + colors.border,
                borderRadius: 10,
                padding: 14,
              }}
            >
              <div style={{ color: colors.text, fontSize: 13, fontWeight: 600, marginBottom: 10 }}>
                Registers
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {demoRegisterCounts.map((r) => (
                  <div
                    key={r.label}
                    style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}
                  >
                    <span style={{ color: colors.muted }}>{r.label}</span>
                    <span style={{ color: colors.text, fontWeight: 600 }}>{r.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* featured report */}
            <div
              style={{
                background: "linear-gradient(180deg, rgba(91,168,217,0.10), rgba(91,168,217,0.03))",
                border: "1px solid rgba(91,168,217,0.35)",
                borderRadius: 10,
                padding: 14,
              }}
            >
              <div style={{ color: colors.accent, fontSize: 11, fontWeight: 600, marginBottom: 6 }}>
                REPORT DRAFT READY
              </div>
              <div style={{ color: colors.text, fontSize: 13, fontWeight: 600 }}>Monthly report — Jul 2026</div>
              <div style={{ color: colors.muted, fontSize: 12, marginTop: 4, lineHeight: 1.45 }}>
                Monthly report draft ready for professional review.
              </div>
              <span
                style={{
                  display: "inline-block",
                  marginTop: 12,
                  background: colors.accent,
                  color: "#0A1620",
                  fontSize: 12,
                  fontWeight: 600,
                  borderRadius: 6,
                  padding: "7px 12px",
                }}
              >
                Review report →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
