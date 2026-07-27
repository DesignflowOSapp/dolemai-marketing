"use client";
import { useTimeline } from "@/components/useAnimTimeline";

const SIGNAL = "#5BA8D9";
const GREEN = "#5CB87A";
const FONT = "Inter, ui-sans-serif, system-ui, sans-serif";
const MONO = "'SFMono-Regular', monospace";

const QUERY = "What changed since my holiday?";
const answer = [
  "Three programme revisions.",
  "One consultant changed.",
  "Budget reduced £82k.",
  "Four new risks.",
  "Client approved planning condition.",
  "No critical issues outstanding.",
];
const miniMetrics = [
  { label: "Key risks", value: "1" },
  { label: "Actions", value: "3" },
  { label: "Decisions", value: "2" },
];

const cardBox: React.CSSProperties = { background: "#11161c", border: "1px solid #282f36", borderRadius: 10, padding: "12px 13px" };
const monoLabel: React.CSSProperties = { fontFamily: MONO, color: "#9198a1", textTransform: "uppercase", letterSpacing: ".06em", fontSize: 9.5 };

export default function AskDemoAnimation() {
  const t = useTimeline(12000);

  const overviewOpacity = t < 3200 ? 1 : 0;
  const askOpacity = t >= 3200 ? 1 : 0;
  const cursorMoved = t >= 2000;
  const btnHot = t >= 2700 && t < 3400;
  const typed = t < 4000 ? 0 : Math.min(QUERY.length, Math.floor((t - 4000) / 40));
  const typing = t >= 4000 && typed < QUERY.length;
  const loading = t >= 6000 && t < 7000;
  const submitted = t >= 6000;
  const fade = t >= 11500 ? (t - 11500) / 500 : 0;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", fontFamily: FONT }}>
      <div style={{ borderRadius: 16, background: "#070b0f", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden", boxShadow: "0 30px 80px -30px rgba(0,0,0,.6)" }}>
        {/* browser top */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 14px", background: "#e8e3da" }}>
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#f2645a" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#f2b94b" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#5fc65e" }} />
          <span style={{ marginLeft: 8, flex: 1, background: "#f7f4ef", borderRadius: 7, padding: "6px 12px", color: "#746f66", fontFamily: MONO, fontSize: 11 }}>
            app.dolemai.com/projects/riverside-works
          </span>
        </div>

        <div style={{ position: "relative", minHeight: 360, color: "#fff" }}>
          {/* ===== Overview screen ===== */}
          <div style={{ position: "absolute", inset: 0, padding: 22, opacity: overviewOpacity, transition: "opacity .6s ease", pointerEvents: "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ fontSize: 20, fontWeight: 750 }}>Riverside Works</div>
                <span style={{ fontSize: 11, fontWeight: 700, borderRadius: 999, padding: "4px 11px", color: GREEN, background: "rgba(92,184,122,.14)", border: "1px solid rgba(92,184,122,.3)" }}>On track</span>
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, borderRadius: 9, padding: "8px 14px",
                color: btnHot ? "#08131c" : SIGNAL,
                background: btnHot ? SIGNAL : "rgba(91,168,217,.14)",
                border: "1px solid rgba(91,168,217,.4)", transition: "all .3s ease" }}>Ask Dolemai</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
              {miniMetrics.map((m) => (
                <div key={m.label} style={cardBox}>
                  <div style={monoLabel}>{m.label}</div>
                  <div style={{ color: "#F2F1ED", fontWeight: 700, fontSize: 20, marginTop: 8 }}>{m.value}</div>
                </div>
              ))}
            </div>

            {/* cursor */}
            <svg width="20" height="24" viewBox="0 0 20 24" style={{ position: "absolute",
              left: cursorMoved ? "calc(100% - 92px)" : "48%", top: cursorMoved ? 26 : "60%",
              transition: "left .9s cubic-bezier(.4,0,.2,1), top .9s cubic-bezier(.4,0,.2,1)",
              filter: "drop-shadow(0 2px 3px rgba(0,0,0,.5))" }}>
              <path d="M2 2 L2 18 L6.5 14 L9.5 21 L12 20 L9 13 L15 13 Z" fill="#fff" stroke="#0a0a0a" strokeWidth="1" />
            </svg>
          </div>

          {/* ===== Ask screen ===== */}
          <div style={{ position: "absolute", inset: 0, padding: 24, opacity: askOpacity, transition: "opacity .6s ease" }}>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: SIGNAL, marginBottom: 14 }}>Ask Dolemai</div>

            {/* input */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#0d1620", border: "1px solid " + SIGNAL, borderRadius: 12, padding: "12px 14px", boxShadow: "0 0 0 3px rgba(91,168,217,.12)" }}>
              <span style={{ flex: 1, fontSize: 15, color: typed ? "#eaf1f6" : "#5b6b78" }}>
                {typed ? QUERY.slice(0, typed) : "Ask a question about your project…"}
                {typing && <span style={{ borderLeft: "2px solid " + SIGNAL, marginLeft: 1, animation: "dm-blink 1s step-end infinite" }}>&nbsp;</span>}
              </span>
              <span style={{ width: 34, height: 34, borderRadius: 8, background: SIGNAL, color: "#08131c", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, animation: submitted && loading ? "dm-ping 0.9s ease-out infinite" : "none" }}>→</span>
            </div>

            {/* loading */}
            <div style={{ marginTop: 14, color: "#8fb6d2", fontSize: 12.5, fontFamily: MONO, opacity: loading ? 1 : 0, transition: "opacity .3s" }}>
              Refreshing project data…
            </div>

            {/* answer */}
            <div style={{ marginTop: loading ? 6 : 18, display: "grid", gap: 9 }}>
              {answer.map((line, i) => {
                const on = t >= 7000 + i * 300;
                return (
                  <div key={line} style={{ display: "flex", gap: 12, alignItems: "flex-start", opacity: on ? 1 : 0, transform: on ? "none" : "translateY(6px)", transition: "opacity .4s ease, transform .4s ease" }}>
                    <span style={{ marginTop: 7, width: 6, height: 6, borderRadius: "50%", flex: "0 0 auto", background: SIGNAL }} />
                    <span style={{ color: "#e6eef3", fontSize: 14.5, lineHeight: 1.5 }}>{line}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* fade out */}
          <div style={{ position: "absolute", inset: 0, background: "#000", opacity: fade, pointerEvents: "none", transition: "opacity .1s linear" }} />
        </div>
      </div>
      <style>{`@keyframes dm-blink{50%{opacity:0}}@keyframes dm-ping{0%{box-shadow:0 0 0 0 rgba(91,168,217,.5)}100%{box-shadow:0 0 0 10px rgba(91,168,217,0)}}`}</style>
    </div>
  );
}
