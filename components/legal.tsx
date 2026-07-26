export function LegalShell({
  title, updated, intro, children,
}: { title: string; updated: string; intro?: string; children: React.ReactNode }) {
  return (
    <div className="legal-wrap">
      <h1>{title}</h1>
      <p className="legal-updated">Last updated: {updated}</p>
      {intro && <p className="legal-intro">{intro}</p>}
      <div style={{ marginTop: 12 }}>{children}</div>
    </div>
  );
}

export function H({ children }: { children: React.ReactNode }) { return <h2>{children}</h2>; }
export function Sub({ children }: { children: React.ReactNode }) { return <h3>{children}</h3>; }
export function P({ children }: { children: React.ReactNode }) { return <p>{children}</p>; }

export function PB({ lead, text }: { lead: string; text: string }) {
  return <p><strong style={{ color: "#183149" }}>{lead}</strong> {text}</p>;
}

export function UL({ items }: { items: string[] }) {
  return <ul>{items.map((x, i) => <li key={i}>{x}</li>)}</ul>;
}

export function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="legal-table">
      <table>
        <thead><tr>{head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}
