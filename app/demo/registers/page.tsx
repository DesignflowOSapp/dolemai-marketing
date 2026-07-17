import { colors } from "@/lib/theme";
import {
  demoRisks, demoDecisions, demoActions, demoInfoRequired, demoConstructionChanges,
} from "@/lib/demoData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo — Registers | Dolemai",
  description: "Read-only demo of Dolemai registers — risks, decisions, actions, information required and contract changes for the anonymised Riverside Works project.",
  robots: { index: true, follow: true },
};

const sevColor: Record<string, string> = {
  Critical: colors.red,
  High: colors.amber,
  Significant: colors.amber,
  Required: colors.amber,
  Open: colors.muted,
  Agreed: colors.green,
  "Under assessment": colors.amber,
};

function Chip({ label }: { label: string }) {
  const c = sevColor[label] ?? colors.muted;
  return (
    <span style={{ color: c, fontSize: 11, fontWeight: 600, border: "1px solid " + c, borderRadius: 999, padding: "2px 10px", whiteSpace: "nowrap" }}>
      {label}
    </span>
  );
}

function Src({ children }: { children: React.ReactNode }) {
  return <span style={{ color: colors.muted, fontSize: 12 }}>{children}</span>;
}

function RegSection({ title, count, children }: { title: string; count: number; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: 28 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 12 }}>
        <h2 style={{ color: colors.text, fontSize: 18, margin: 0 }}>{title}</h2>
        <span style={{ color: colors.muted, fontSize: 13 }}>{count}</span>
      </div>
      <div className="dm-table-wrap">
        <table className="dm-table">{children}</table>
      </div>
    </section>
  );
}

export default function DemoRegisters() {
  return (
    <>
      <h1 style={{ color: colors.text, fontSize: 24, margin: 0 }}>Registers</h1>
      <p style={{ color: colors.muted, fontSize: 13, marginTop: 6 }}>
        Riverside Works · Display only in the demo — in the app each entry is reviewed and editable, with a source reference.
      </p>

      <RegSection title="Risks" count={demoRisks.length}>
        <thead><tr><th>Ref</th><th>Description</th><th>Severity</th><th>Owner</th><th>Source</th></tr></thead>
        <tbody>
          {demoRisks.map((r) => (
            <tr key={r.ref}>
              <td style={{ color: colors.accent, fontWeight: 600 }}>{r.ref}</td>
              <td style={{ color: colors.text }}>{r.description}</td>
              <td><Chip label={r.severity} /></td>
              <td><Src>{r.owner}</Src></td>
              <td><Src>{r.source}</Src></td>
            </tr>
          ))}
        </tbody>
      </RegSection>

      <RegSection title="Decisions" count={demoDecisions.length}>
        <thead><tr><th>Ref</th><th>Description</th><th>Status</th><th>Owner</th><th>Due</th><th>Source</th></tr></thead>
        <tbody>
          {demoDecisions.map((d) => (
            <tr key={d.ref}>
              <td style={{ color: colors.accent, fontWeight: 600 }}>{d.ref}</td>
              <td style={{ color: colors.text }}>{d.description}</td>
              <td><Chip label={d.status} /></td>
              <td><Src>{d.owner}</Src></td>
              <td><Src>{d.due}</Src></td>
              <td><Src>{d.source}</Src></td>
            </tr>
          ))}
        </tbody>
      </RegSection>

      <RegSection title="Actions" count={demoActions.length}>
        <thead><tr><th>Ref</th><th>Description</th><th>Owner</th><th>Due</th><th>Source</th></tr></thead>
        <tbody>
          {demoActions.map((a) => (
            <tr key={a.ref}>
              <td style={{ color: colors.accent, fontWeight: 600 }}>{a.ref}</td>
              <td style={{ color: colors.text }}>{a.description}</td>
              <td><Src>{a.owner}</Src></td>
              <td><Src>{a.due}</Src></td>
              <td><Src>{a.source}</Src></td>
            </tr>
          ))}
        </tbody>
      </RegSection>

      <RegSection title="Information required" count={demoInfoRequired.length}>
        <thead><tr><th>Ref</th><th>Description</th><th>Owner</th><th>Source</th></tr></thead>
        <tbody>
          {demoInfoRequired.map((i) => (
            <tr key={i.ref}>
              <td style={{ color: colors.accent, fontWeight: 600 }}>{i.ref}</td>
              <td style={{ color: colors.text }}>{i.description}</td>
              <td><Src>{i.owner}</Src></td>
              <td><Src>{i.source}</Src></td>
            </tr>
          ))}
        </tbody>
      </RegSection>

      <RegSection title="Construction changes" count={demoConstructionChanges.length}>
        <thead><tr><th>Ref</th><th>Description</th><th>Status</th><th>Agreed</th><th>Anticipated</th><th>Raised</th><th>Source</th></tr></thead>
        <tbody>
          {demoConstructionChanges.map((c) => (
            <tr key={c.ref}>
              <td style={{ color: colors.accent, fontWeight: 600 }}>{c.ref}</td>
              <td style={{ color: colors.text }}>{c.description}</td>
              <td><Chip label={c.status} /></td>
              <td style={{ color: colors.text }}>{c.valueAgreed}</td>
              <td style={{ color: colors.text }}>{c.valueAnticipated}</td>
              <td><Src>{c.dateRaised}</Src></td>
              <td><Src>{c.source}</Src></td>
            </tr>
          ))}
        </tbody>
      </RegSection>
    </>
  );
}
