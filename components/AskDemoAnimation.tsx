"use client";
import { useTimeline } from "@/components/useAnimTimeline";
import { AnimFrame, Cursor, SIGNAL, MONO, darkCard, overlay } from "@/components/animShared";
import OverviewMock from "@/components/OverviewMock";

const QUERY = "What changed since my holiday?";
const answer = [
  "Programme revised — completion now 14 days behind baseline.",
  "One consultant appointment changed since 12 July.",
  "Budget reduced by £82,000 against approved figure.",
  "Four new risks added to the register.",
  "Client approved the planning condition discharge.",
  "No critical issues currently outstanding.",
];

export default function AskDemoAnimation() {
  const t = useTimeline(13000);

  const overviewOn = t < 3600;
  const askOn = t >= 3600;
  const cursorMoved = t >= 2000;
  const clicking = t >= 2850 && t < 3250;
  const askHot = t >= 2600 && t < 3400;
  const typed = t < 4500 ? 0 : Math.min(QUERY.length, Math.floor((t - 4500) / 40));
  const typing = t >= 4500 && typed < QUERY.length;
  const loading = t >= 6000 && t < 7000;
  const cardOn = t >= 6800;
  const fade = t >= 11500 ? Math.min(1, (t - 11500) / 700) : 0;

  return (
    <AnimFrame minHeight={472}>
      {/* Overview layer */}
      <div style={overlay(overviewOn, { pointerEvents: "none" })}>
        <OverviewMock t={t} revealBase={-100000} askHot={askHot} />
        <Cursor x={cursorMoved ? "calc(100% - 74px)" : "45%"} y={cursorMoved ? "10px" : "58%"} click={clicking} />
      </div>

      {/* Ask layer */}
      <div style={overlay(askOn)}>
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: SIGNAL }}>Ask Dolemai</div>
          <div style={{ fontSize: 15, fontWeight: 700, marginTop: 4 }}>Riverside Works</div>
          <div style={{ color: "#8B8F96", fontSize: 12, marginTop: 2 }}>Answers grounded in your project data</div>
        </div>

        {/* input */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#0d1620", border: "1px solid " + SIGNAL, borderRadius: 12, padding: "12px 14px", boxShadow: "0 0 0 3px rgba(91,168,217,.12)" }}>
          <span style={{ flex: 1, fontSize: 15, color: typed ? "#eaf1f6" : "#5b6b78" }}>
            {typed ? QUERY.slice(0, typed) : "Ask a question about your project…"}
            {typing && <span style={{ borderLeft: "2px solid " + SIGNAL, marginLeft: 1, animation: "dm-blink 1s step-end infinite" }}>&nbsp;</span>}
          </span>
          <span style={{ width: 34, height: 34, borderRadius: 8, background: SIGNAL, color: "#08131c", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, animation: loading ? "dm-ping .9s ease-out infinite" : "none" }}>→</span>
        </div>

        {/* loading */}
        <div style={{ marginTop: 12, color: "#8fb6d2", fontSize: 12.5, fontFamily: MONO, opacity: loading ? 1 : 0, transition: "opacity .3s" }}>Refreshing project data…</div>

        {/* answer card */}
        <div style={{ ...darkCard, padding: 16, marginTop: loading ? 6 : 14, opacity: cardOn ? 1 : 0, transform: cardOn ? "none" : "translateY(8px)", transition: "opacity .5s ease, transform .5s ease" }}>
          <div style={{ display: "flex", justifyContent: "space-between", color: "#8B8F96", fontSize: 11, marginBottom: 8 }}>
            <span>Riverside Works</span><span>Asked just now</span>
          </div>
          <div style={{ fontSize: 14.5, fontWeight: 700, color: "#F2F1ED", marginBottom: 12 }}>{QUERY}</div>
          <div style={{ display: "grid", gap: 9 }}>
            {answer.map((line, i) => {
              const on = t >= 7000 + i * 300;
              return (
                <div key={line} style={{ display: "flex", gap: 11, alignItems: "flex-start", opacity: on ? 1 : 0, transform: on ? "none" : "translateY(5px)", transition: "opacity .4s ease, transform .4s ease" }}>
                  <span style={{ marginTop: 7, width: 6, height: 6, borderRadius: "50%", flex: "0 0 auto", background: SIGNAL }} />
                  <span style={{ color: "#dbe3ea", fontSize: 13.5, lineHeight: 1.5 }}>{line}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* fade out */}
      <div style={{ position: "absolute", inset: 0, background: "#000", opacity: fade, pointerEvents: "none", transition: "opacity .1s linear" }} />
      <style>{`@keyframes dm-blink{50%{opacity:0}}@keyframes dm-ping{0%{box-shadow:0 0 0 0 rgba(91,168,217,.5)}100%{box-shadow:0 0 0 10px rgba(91,168,217,0)}}@keyframes dm-cardpulse{0%,100%{box-shadow:0 0 0 0 rgba(91,168,217,0)}50%{box-shadow:0 0 0 4px rgba(91,168,217,.18)}}`}</style>
    </AnimFrame>
  );
}
