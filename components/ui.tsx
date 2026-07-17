import Container from "@/components/Container";
import { paper, fonts } from "@/lib/theme";

export function Section({
  children, style, bg, id,
}: { children: React.ReactNode; style?: React.CSSProperties; bg?: string; id?: string }) {
  return (
    <section id={id} style={{ background: bg ?? "transparent", padding: "84px 0", ...style }}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: paper.signalDeep, marginBottom: 16, ...style }}>
      {children}
    </div>
  );
}

export function H2({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2 style={{ fontFamily: fonts.display, color: paper.oceanDeep, fontWeight: 600, margin: 0, letterSpacing: "-0.01em", ...style }}>
      {children}
    </h2>
  );
}

export function Lead({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <p style={{ color: paper.inkSoft, fontSize: 17, lineHeight: 1.7, margin: 0, ...style }}>{children}</p>;
}

export function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: paper.white, border: "1px solid " + paper.sandLine, borderRadius: 6, padding: 24, ...style }}>
      {children}
    </div>
  );
}
