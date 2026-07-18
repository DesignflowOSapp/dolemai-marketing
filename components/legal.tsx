import Container from "@/components/Container";
import { paper, fonts } from "@/lib/theme";

export function LegalShell({
  title, updated, intro, children,
}: { title: string; updated: string; intro?: string; children: React.ReactNode }) {
  return (
    <Container style={{ padding: "64px 32px 24px", maxWidth: 820 }}>
      <h1 style={{ fontFamily: fonts.display, fontWeight: 600, color: paper.oceanDeep, fontSize: "clamp(30px,4vw,42px)", margin: 0, letterSpacing: "-0.01em" }}>{title}</h1>
      <p style={{ color: paper.inkSoft, fontSize: 13, margin: "12px 0 0", fontFamily: fonts.mono }}>Last updated: {updated}</p>
      {intro && <p style={{ color: paper.inkSoft, fontSize: 16, lineHeight: 1.7, marginTop: 20 }}>{intro}</p>}
      <div style={{ marginTop: 12 }}>{children}</div>
    </Container>
  );
}

export function H({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontFamily: fonts.display, fontWeight: 600, color: paper.oceanDeep, fontSize: 21, margin: "36px 0 12px" }}>{children}</h2>;
}

export function Sub({ children }: { children: React.ReactNode }) {
  return <h3 style={{ fontFamily: fonts.body, fontWeight: 700, color: paper.ink, fontSize: 15.5, margin: "22px 0 8px" }}>{children}</h3>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p style={{ color: paper.inkSoft, fontSize: 15.5, lineHeight: 1.75, margin: "0 0 14px" }}>{children}</p>;
}

/** Paragraph with a bold lead-in (e.g. "Right of access — you may ..."). */
export function PB({ lead, text }: { lead: string; text: string }) {
  return (
    <p style={{ color: paper.inkSoft, fontSize: 15.5, lineHeight: 1.75, margin: "0 0 12px" }}>
      <strong style={{ color: paper.ink }}>{lead}</strong> {text}
    </p>
  );
}

export function UL({ items }: { items: string[] }) {
  return (
    <ul style={{ color: paper.inkSoft, fontSize: 15.5, lineHeight: 1.75, margin: "0 0 14px", paddingLeft: 20 }}>
      {items.map((x, i) => <li key={i} style={{ marginBottom: 6 }}>{x}</li>)}
    </ul>
  );
}

export function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: "auto", border: "1px solid " + paper.sandLine, borderRadius: 6, margin: "0 0 16px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} style={{ textAlign: "left", padding: "10px 14px", borderBottom: "1px solid " + paper.sandLine, background: paper.paperWarm, color: paper.ink, fontWeight: 600, fontFamily: fonts.mono, fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j} style={{ padding: "10px 14px", borderBottom: "1px solid " + paper.sandLine, color: j === 0 ? paper.ink : paper.inkSoft, fontWeight: j === 0 ? 600 : 400, verticalAlign: "top", lineHeight: 1.5 }}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
