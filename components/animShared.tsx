/** Shared styling + primitives for the demo animations. */
export const SIGNAL = "#5BA8D9";
export const RED = "#E5736A";
export const AMBER = "#E0A748";
export const GREEN = "#5CB87A";
export const rag: Record<string, string> = { red: RED, amber: AMBER, green: GREEN, muted: "#8B8F96" };
export const FONT = "Inter, ui-sans-serif, system-ui, sans-serif";
export const MONO = "'SFMono-Regular', monospace";

export const darkCard: React.CSSProperties = { background: "#111418", border: "1px solid #23262C", borderRadius: 12 };
export const fadedBtn: React.CSSProperties = { background: "rgba(91,168,217,0.15)", color: SIGNAL, border: "1px solid rgba(91,168,217,0.4)", borderRadius: 8, padding: "7px 11px", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" };
export const monoLabel: React.CSSProperties = { fontFamily: MONO, color: "#8B8F96", textTransform: "uppercase", letterSpacing: ".06em", fontSize: 9.5 };

/** Dark browser frame with traffic lights + URL bar. */
export function AnimFrame({ children, minHeight = 460 }: { children: React.ReactNode; minHeight?: number }) {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", fontFamily: FONT, textAlign: "left" }}>
      <div style={{ borderRadius: 16, background: "#070b0f", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden", boxShadow: "0 30px 80px -30px rgba(0,0,0,.6)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 14px", background: "#e8e3da" }}>
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#f2645a" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#f2b94b" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#5fc65e" }} />
          <span style={{ marginLeft: 8, flex: 1, background: "#f7f4ef", borderRadius: 7, padding: "6px 12px", color: "#746f66", fontFamily: MONO, fontSize: 11 }}>
            app.dolemai.com/projects/riverside-works
          </span>
        </div>
        <div style={{ position: "relative", padding: 0, color: "#fff", minHeight }}>{children}</div>
      </div>
    </div>
  );
}

/** White arrow cursor, CSS-translated. */
export function Cursor({ x, y, click = false }: { x: string; y: string; click?: boolean }) {
  return (
    <svg width="18" height="22" viewBox="0 0 20 24" aria-hidden
      style={{ position: "absolute", left: x, top: y, zIndex: 30,
        transform: click ? "scale(.82)" : "scale(1)",
        transition: "left .8s cubic-bezier(.4,0,.2,1), top .8s cubic-bezier(.4,0,.2,1), transform .12s ease",
        filter: "drop-shadow(0 2px 3px rgba(0,0,0,.55))" }}>
      <path d="M2 2 L2 18 L6.5 14 L9.5 21 L12 20 L9 13 L15 13 Z" fill="#fff" stroke="#0a0a0a" strokeWidth="1" />
    </svg>
  );
}

export function overlay(on: boolean, extra?: React.CSSProperties): React.CSSProperties {
  return { position: "absolute", inset: 0, padding: 20, boxSizing: "border-box", opacity: on ? 1 : 0, transition: "opacity .5s ease", ...extra };
}
