import { SIGNAL, rag, monoLabel, darkCard } from "@/components/animShared";

const metrics = [
  { label: "Cost position", value: "−£104k", note: "Favourable", rag: "green" },
  { label: "Programme", value: "+11 days", note: "Behind plan", rag: "amber" },
  { label: "Key risks", value: "3", note: "1 Critical", rag: "red" },
  { label: "Decisions", value: "4", note: "Awaiting input", rag: "amber" },
  { label: "Information", value: "7", note: "Outstanding", rag: "amber" },
];
const movements = [
  { rag: "red", text: "Completion date passed — no revised date confirmed" },
  { rag: "amber", text: "Budget estimate increased to £104k" },
  { rag: "green", text: "Steelwork package awarded — £142k saving confirmed" },
];
const registers: [string, number][] = [["All open risks", 3], ["Actions", 5], ["Decisions", 4], ["Changes", 1]];

const btn: React.CSSProperties = { background: "rgba(91,168,217,0.15)", color: SIGNAL, border: "1px solid rgba(91,168,217,0.4)", borderRadius: 8, padding: "6px 10px", fontSize: 11.5, fontWeight: 700, whiteSpace: "nowrap" };

/** Dark Project Overview. `revealBase` staggers the pop-in; pass a large negative
 *  number to show everything immediately. */
export default function OverviewMock({ t, revealBase, reportPulse = false, askHot = false }: { t: number; revealBase: number; reportPulse?: boolean; askHot?: boolean }) {
  const reportOn = t >= revealBase + 3600;
  return (
    <div>
      {/* header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ fontSize: 20, fontWeight: 750 }}>Riverside Works</div>
            <span style={{ fontSize: 11, fontWeight: 700, borderRadius: 999, padding: "4px 11px", color: "#E0A748", background: "rgba(224,167,72,.14)", border: "1px solid rgba(224,167,72,.32)" }}>Attention required</span>
          </div>
          <div style={{ color: "#8B8F96", fontSize: 12, marginTop: 4 }}>Project Overview</div>
          <div style={{ color: "#6b7178", fontSize: 11, marginTop: 2 }}>Last updated: Today at 09:15</div>
        </div>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap", justifyContent: "flex-end" }}>
          <span style={btn}>↻ Refresh</span>
          <span style={btn}>+ Report ▾</span>
          <span style={{ ...btn, background: askHot ? SIGNAL : "rgba(91,168,217,0.22)", color: askHot ? "#08131c" : SIGNAL, transition: "all .3s ease" }}>Ask Dolemai</span>
        </div>
      </div>

      {/* metrics */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8 }}>
        {metrics.map((m, i) => {
          const filled = t >= revealBase + i * 400;
          return (
            <div key={m.label} style={{ ...darkCard, padding: "11px 12px", opacity: filled ? 1 : 0.55, transform: filled ? "none" : "scale(.96)", transition: "opacity .45s ease, transform .45s ease" }}>
              <div style={monoLabel}>{m.label}</div>
              <div style={{ color: "#F2F1ED", fontWeight: 700, fontSize: 22, marginTop: 7, opacity: filled ? 1 : 0, transition: "opacity .4s" }}>{m.value}</div>
              <div style={{ fontSize: 10.5, marginTop: 3, color: rag[m.rag], opacity: filled ? 1 : 0, transition: "opacity .4s" }}>{m.note}</div>
            </div>
          );
        })}
      </div>

      {/* two columns */}
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 12, marginTop: 12 }}>
        <div style={{ ...darkCard, padding: 14 }}>
          <div style={{ ...monoLabel, marginBottom: 10 }}>This period</div>
          <div style={{ display: "grid", gap: 9 }}>
            {movements.map((mv) => (
              <div key={mv.text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ marginTop: 5, width: 8, height: 8, borderRadius: "50%", flex: "0 0 auto", background: rag[mv.rag] }} />
                <span style={{ color: "#dbe3ea", fontSize: 12.5, lineHeight: 1.45 }}>{mv.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ ...darkCard, padding: 14 }}>
          <div style={{ ...monoLabel, marginBottom: 10 }}>Registers</div>
          <div style={{ display: "grid", gap: 8 }}>
            {registers.map(([l, n]) => (
              <div key={l} style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5 }}>
                <span style={{ color: "#9aa2ab" }}>{l}</span>
                <span style={{ color: "#F2F1ED", fontWeight: 700 }}>{n}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* featured report card */}
      <div style={{ marginTop: 12, opacity: reportOn ? 1 : 0, transform: reportOn ? "none" : "translateY(8px)", transition: "opacity .6s ease, transform .6s ease",
        background: "linear-gradient(180deg, rgba(91,168,217,.16), rgba(91,168,217,.05))", border: "1px solid rgba(91,168,217,.4)", borderRadius: 12, padding: 14,
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, animation: reportPulse ? "dm-cardpulse 2s ease-in-out infinite" : "none" }}>
        <div>
          <div style={{ color: SIGNAL, fontSize: 10, fontWeight: 700, letterSpacing: ".06em" }}>WEEKLY REPORT DRAFT READY</div>
          <div style={{ color: "#cfe0ec", fontSize: 12, marginTop: 3 }}>Riverside Works · Wk 2, Jul 2026</div>
        </div>
        <span style={{ background: SIGNAL, color: "#08131c", fontSize: 12, fontWeight: 700, borderRadius: 8, padding: "7px 12px", whiteSpace: "nowrap" }}>Review report →</span>
      </div>
    </div>
  );
}
