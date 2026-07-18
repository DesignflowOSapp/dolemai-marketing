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

export function UL({ items }: { items: string[] }) {
  return (
    <ul style={{ color: paper.inkSoft, fontSize: 15.5, lineHeight: 1.75, margin: "0 0 14px", paddingLeft: 20 }}>
      {items.map((x, i) => <li key={i} style={{ marginBottom: 6 }}>{x}</li>)}
    </ul>
  );
}
