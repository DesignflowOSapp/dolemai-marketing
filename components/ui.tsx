import Container from "@/components/Container";

export function Section({
  children, style, bg, className, id,
}: { children: React.ReactNode; style?: React.CSSProperties; bg?: string; className?: string; id?: string }) {
  return (
    <section id={id} className={className} style={{ ...(bg ? { background: bg } : {}), ...style }}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="section-kicker">{children}</div>;
}

export function H2({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <h2 style={style}>{children}</h2>;
}

export function Lead({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <p className="section-lead" style={style}>{children}</p>;
}

export function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #ded3bf", borderRadius: 16, padding: 26, ...style }}>
      {children}
    </div>
  );
}
