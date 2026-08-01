/**
 * Static white-paper client report preview for the /demo/reports page.
 * Document styling only — white background, charcoal ink, warm grey rules.
 * No brand colours; RAG status uses professional print-weight tones.
 */

const paper = {
  bg: "#ffffff",
  ink: "#23252b",
  ink2: "#3c3f47",
  muted: "#6f6b63",
  line: "#e6e1d7",
  amber: "#B7791F",
  green: "#2F7A4E",
  red: "#B4453B",
  panelAmber: "#FBF3E1",
};

const label: React.CSSProperties = {
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontSize: 11,
  fontWeight: 700,
  color: paper.muted,
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ ...label, color: paper.ink, margin: "28px 0 12px", paddingBottom: 6, borderBottom: "1px solid " + paper.line }}>
      {children}
    </h3>
  );
}

function Chip({ text, tone }: { text: string; tone: "amber" | "green" | "red" }) {
  const c = tone === "amber" ? paper.amber : tone === "green" ? paper.green : paper.red;
  return (
    <span style={{ color: c, border: "1px solid " + c, borderRadius: 4, fontSize: 11, fontWeight: 700, padding: "2px 8px", whiteSpace: "nowrap" }}>
      {text}
    </span>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "7px 0", borderBottom: "1px solid " + paper.line, fontSize: 13.5 }}>
      <span style={{ color: paper.muted }}>{k}</span>
      <span style={{ color: paper.ink, fontWeight: 600, textAlign: "right" }}>{v}</span>
    </div>
  );
}

const risks = [
  { n: 1, t: "DNO connection delay", sev: "Critical", tone: "red" as const, note: "VAR-009 on critical path. No PM decision issued. Failure to act will prejudice ability to assess time and cost.", owner: "PM" },
  { n: 2, t: "Stage 4 appointments unagreed", sev: "High", tone: "amber" as const, note: "Scope and budget not confirmed. PM recommends extending only after scope confirmed.", owner: "Client" },
  { n: 3, t: "Ground conditions", sev: "Significant", tone: "amber" as const, note: "Potential programme and cost impact not yet assessed.", owner: "Contractor" },
];

const decisions = [
  { n: 1, t: "Confirm contractor's programme recovery proposals", due: "28 July 2026", owner: "PM / Client" },
  { n: 2, t: "Select preferred ground floor layout option", due: "25 July 2026", owner: "Client" },
  { n: 3, t: "Approve revised MEP coordination strategy", due: "31 July 2026", owner: "Client" },
];

export default function DemoReport() {
  return (
    <div
      style={{
        background: paper.bg,
        color: paper.ink,
        borderRadius: 4,
        border: "1px solid " + paper.line,
        boxShadow: "0 18px 50px rgba(0,0,0,0.45)",
        padding: "44px 48px",
        maxWidth: 780,
        margin: "0 auto",
        lineHeight: 1.6,
      }}
    >
      {/* cover */}
      <div style={{ paddingBottom: 20, borderBottom: "2px solid " + paper.ink }}>
        <div style={label}>Monthly project report</div>
        <h2 style={{ margin: "8px 0 16px", fontSize: 30, color: paper.ink, fontWeight: 800, letterSpacing: "-0.01em" }}>Riverside Works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 24px", fontSize: 13.5 }}>
          <div><span style={{ color: paper.muted }}>Prepared by: </span><span style={{ color: paper.ink }}>Employer&apos;s Agent</span></div>
          <div><span style={{ color: paper.muted }}>Prepared for: </span><span style={{ color: paper.ink }}>Hembury Developments</span></div>
          <div style={{ gridColumn: "1 / -1" }}><span style={{ color: paper.muted }}>Reporting period: </span><span style={{ color: paper.ink }}>9 July – 16 July 2026</span></div>
        </div>
      </div>

      {/* executive summary */}
      <SectionTitle>Executive summary</SectionTitle>
      <p style={{ margin: 0, fontSize: 14.5, color: paper.ink2 }}>
        The project is currently 11 days behind the approved programme, with the principal delay
        attributed to a DNO connection redesign on the critical path. The steelwork package has been
        awarded with a confirmed saving of £142k against the package allowance. Four decisions are
        required from the client before the end of July 2026, including confirmation of the
        contractor&apos;s recovery proposals. The cost position remains favourable overall, with a net
        movement of £104k below the approved budget after accounting for anticipated variation costs.
      </p>

      {/* programme */}
      <SectionTitle>Programme</SectionTitle>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 4 }}><Chip text="Amber" tone="amber" /></div>
      <Row k="Original completion" v="14 November 2026" />
      <Row k="Current forecast" v="25 November 2026" />
      <Row k="Delay" v="11 days" />
      <p style={{ margin: "10px 0 0", fontSize: 13.5, color: paper.muted }}>
        Delay is primarily attributed to the DNO connection redesign (VAR-009). Contractor has
        submitted recovery proposals for PM review.
      </p>

      {/* cost */}
      <SectionTitle>Cost</SectionTitle>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 4 }}><Chip text="Green" tone="green" /></div>
      <Row k="Approved budget" v="£2,950,000" />
      <Row k="Original contract sum" v="£2,850,000" />
      <Row k="Net cost movement" v="−£104,000 (favourable)" />
      <p style={{ margin: "10px 0 0", fontSize: 13.5, color: paper.muted }}>
        Favourable movement reflects confirmed steelwork saving of £142k partially offset by
        anticipated MEP acoustic works of £38k.
      </p>

      {/* key risks */}
      <SectionTitle>Key risks</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {risks.map((r) => (
          <div key={r.n}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <span style={{ color: paper.muted, fontWeight: 700, fontSize: 13.5 }}>{r.n}.</span>
              <span style={{ color: paper.ink, fontWeight: 700, fontSize: 14 }}>{r.t}</span>
              <Chip text={r.sev} tone={r.tone} />
              <span style={{ color: paper.muted, fontSize: 12.5, marginLeft: "auto" }}>Owner: {r.owner}</span>
            </div>
            <div style={{ color: paper.ink2, fontSize: 13.5, marginTop: 4, paddingLeft: 20 }}>{r.note}</div>
          </div>
        ))}
      </div>

      {/* decisions */}
      <SectionTitle>Decisions required</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {decisions.map((d) => (
          <div key={d.n} style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "baseline" }}>
            <span style={{ color: paper.muted, fontWeight: 700, fontSize: 13.5 }}>{d.n}.</span>
            <span style={{ color: paper.ink, fontSize: 14, flex: "1 1 260px" }}>{d.t}</span>
            <span style={{ color: paper.muted, fontSize: 12.5 }}>Due: {d.due} · {d.owner}</span>
          </div>
        ))}
      </div>

      {/* recommendation */}
      <SectionTitle>PM recommendation</SectionTitle>
      <p style={{ margin: 0, fontSize: 14.5, color: paper.ink2 }}>
        The DNO connection matter requires an urgent client decision this period. The PM recommends
        the client confirms the contractor&apos;s recovery programme by 28 July 2026 to preserve the
        ability to assess time and cost entitlement under the contract. The cost position remains
        favourable and no budget intervention is required at this stage.
      </p>
    </div>
  );
}
