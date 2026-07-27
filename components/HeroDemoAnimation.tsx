"use client";
import { useTimeline } from "@/components/useAnimTimeline";
import { AnimFrame, Cursor, SIGNAL, RED, AMBER, GREEN, MONO, darkCard, monoLabel, overlay } from "@/components/animShared";
import OverviewMock from "@/components/OverviewMock";

const folders = ["Documents / 2024", "Projects / Active", "Riverside Works / 2026", "Archive / 2023"];
const docs = [
  "Reading: Programme_Rev3.xlsx",
  "Reading: Meeting_Minutes_14Jul.docx",
  "Reading: RFI_Response_009.pdf",
  "Reading: Budget_Update_Q2.xlsx",
  "Reading: Risk_Register_v4.xlsx",
];
const risks = [
  { id: "R001", text: "No contingency in budget estimate", sev: "Critical", tone: RED },
  { id: "R002", text: "Completion date passed, no revised date", sev: "High", tone: AMBER },
  { id: "R003", text: "Construction contract not executed", sev: "High", tone: AMBER },
];
const chip = (color: string, bg: string): React.CSSProperties => ({ color, background: bg, border: "1px solid " + color, borderRadius: 999, fontSize: 10.5, fontWeight: 700, padding: "2px 9px", whiteSpace: "nowrap" });

function cursorFor(t: number): { x: string; y: string; click: boolean } | null {
  if (t < 4000) {
    const y = t < 800 ? 104 : t < 2400 ? 104 + ((t - 800) / 1600) * 74 : 178;
    return { x: "42%", y: y + "px", click: t >= 2900 && t < 3300 };
  }
  if (t >= 11000 && t < 15200) {
    if (t < 11500) return { x: "calc(100% - 128px)", y: "244px", click: t >= 11250 && t < 11500 };
    return { x: "44%", y: "150px", click: false };
  }
  if (t >= 15200 && t < 19000) {
    if (t < 15650) return { x: "44%", y: "150px", click: t >= 15200 && t < 15450 };
    if (t < 16900) return { x: "calc(100% - 150px)", y: "150px", click: t >= 16550 && t < 16800 };
    return { x: "calc(100% - 150px)", y: "214px", click: t >= 17350 && t < 17600 };
  }
  if (t >= 20000 && t < 21300) return { x: "50%", y: "436px", click: t >= 20600 && t < 20900 };
  return null;
}

export default function HeroDemoAnimation() {
  const t = useTimeline(22000);
  const c = cursorFor(t);

  const folderOn = t < 4000;
  const readingOn = t >= 4000 && t < 6200;
  const dashOn = (t >= 6000 && t < 11400) || t >= 19000;
  const riskOn = t >= 11200 && t < 19000;
  const reviewOn = t >= 15200 && t < 19000;
  const fade = t >= 21300 ? Math.min(1, (t - 21300) / 700) : 0;

  const riversideHover = t >= 2200 && t < 3000;
  const connecting = t >= 3000 && t < 3500;
  const connected = t >= 3500 && t < 4000;
  const building = t >= 5800 && t < 6200;
  const statusConfirmed = t >= 17500;
  const dropdownOpen = t >= 16500 && t < 17650;
  const saved = t >= 17900 && t < 18900;

  return (
    <AnimFrame minHeight={480}>
      {/* ===== Phase 1 — folder picker ===== */}
      <div style={overlay(folderOn, { pointerEvents: "none" })}>
        <div style={{ ...monoLabel, marginBottom: 12 }}>Connect a project folder</div>
        <div style={{ ...darkCard, padding: 8 }}>
          {folders.map((f, i) => {
            const isRiver = i === 2;
            const hot = isRiver && (riversideHover || connecting || connected);
            return (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 12px", borderRadius: 8,
                background: hot ? "rgba(91,168,217,0.14)" : "transparent",
                border: "1px solid " + (hot ? "rgba(91,168,217,0.4)" : "transparent"), transition: "all .25s ease" }}>
                <span style={{ fontSize: 15 }}>📁</span>
                <span style={{ color: "#dbe3ea", fontSize: 13.5, flex: 1 }}>{f}</span>
                {isRiver && connecting && <span style={{ color: SIGNAL, fontSize: 12, fontFamily: MONO }}><span style={{ display: "inline-block", animation: "dm-spin 0.8s linear infinite" }}>◠</span> Connecting…</span>}
                {isRiver && connected && <span style={{ color: GREEN, fontSize: 12, fontWeight: 700 }}>✓ Connected</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== Phase 2 — reading ===== */}
      <div style={overlay(readingOn)}>
        <div style={{ fontFamily: MONO, fontSize: 12.5, lineHeight: 2, filter: t >= 5600 ? "blur(3px)" : "none", opacity: t >= 5800 ? 0 : 1, transition: "filter .3s ease, opacity .4s ease" }}>
          {docs.map((d, i) => {
            const on = t >= 4100 + i * 300;
            return <div key={d} style={{ color: "#7fb2d6", opacity: on ? 1 : 0, transform: on ? "none" : "translateY(8px)", transition: "opacity .25s ease, transform .25s ease" }}>{d}</div>;
          })}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: SIGNAL, fontSize: 13, fontWeight: 600, opacity: building ? 1 : 0, transition: "opacity .3s" }}>
          Building project intelligence…
        </div>
      </div>

      {/* ===== Phase 3 / 6 — dashboard ===== */}
      <div style={overlay(dashOn, { pointerEvents: "none" })}>
        <OverviewMock t={t} revealBase={6200} reportPulse={t >= 19000} />
      </div>

      {/* ===== Phase 4 / 5 — risk register + review ===== */}
      <div style={overlay(riskOn)}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ ...monoLabel }}>Risk register</span>
          <span style={{ color: "#6b7178", fontSize: 12 }}>Riverside Works</span>
        </div>
        <div style={{ ...darkCard, overflow: "hidden" }}>
          {risks.map((r, i) => {
            const on = t >= 11400 + i * 250;
            const selected = r.id === "R001" && t >= 14000;
            return (
              <div key={r.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderBottom: i < 2 ? "1px solid #23262C" : "none",
                background: selected ? "rgba(91,168,217,0.10)" : "transparent",
                opacity: on ? 1 : 0, transform: on ? "none" : "translateY(6px)", transition: "opacity .35s ease, transform .35s ease, background .3s ease" }}>
                <span style={{ color: "#8FC5E8", fontFamily: MONO, fontSize: 12, minWidth: 40 }}>{r.id}</span>
                <span style={{ color: "#dbe3ea", fontSize: 13, flex: 1 }}>{r.text}</span>
                <span style={chip(r.tone, r.tone === RED ? "rgba(229,115,106,.12)" : "rgba(224,167,72,.12)")}>{r.sev}</span>
                <span style={chip("#9aa2ab", "rgba(255,255,255,.05)")}>Unreviewed</span>
              </div>
            );
          })}
        </div>

        {/* review panel slides in from right */}
        <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: 320, background: "#0c1015", borderLeft: "1px solid #23262C", padding: 18,
          transform: reviewOn ? "translateX(0)" : "translateX(105%)", transition: "transform .5s cubic-bezier(.4,0,.2,1)", boxShadow: "-20px 0 40px rgba(0,0,0,.4)" }}>
          <div style={{ ...monoLabel, marginBottom: 8 }}>Review risk · R001</div>
          <div style={{ color: "#F2F1ED", fontSize: 14, fontWeight: 700, lineHeight: 1.4 }}>No contingency in budget estimate</div>
          <div style={{ color: "#8B8F96", fontSize: 12, marginTop: 8, lineHeight: 1.5 }}>Severity: Critical. Raised from Budget_Update_Q2.xlsx. No contingency line identified against the approved figure.</div>

          <div style={{ ...monoLabel, marginTop: 18, marginBottom: 6 }}>Status</div>
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", ...darkCard, padding: "9px 12px", fontSize: 13,
              color: statusConfirmed ? GREEN : "#9aa2ab", borderColor: statusConfirmed ? "rgba(92,184,122,.4)" : "#23262C", transition: "color .4s, border-color .4s" }}>
              <span>{statusConfirmed ? "Confirmed" : "Unreviewed"}</span><span style={{ color: "#6b7178" }}>▾</span>
            </div>
            {dropdownOpen && (
              <div style={{ position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, ...darkCard, padding: 4, zIndex: 5 }}>
                {["Unreviewed", "Confirmed", "Amended", "Rejected"].map((o) => (
                  <div key={o} style={{ padding: "8px 10px", borderRadius: 6, fontSize: 13, color: o === "Confirmed" ? GREEN : "#cbd2d9", background: o === "Confirmed" && t >= 17350 ? "rgba(92,184,122,.12)" : "transparent" }}>{o}</div>
                ))}
              </div>
            )}
          </div>
          <div style={{ marginTop: 14, color: GREEN, fontSize: 12.5, fontWeight: 700, opacity: saved ? 1 : 0, transition: "opacity .3s" }}>Saved ✓</div>
        </div>
      </div>

      {c && <Cursor x={c.x} y={c.y} click={c.click} />}

      {/* fade to black */}
      <div style={{ position: "absolute", inset: 0, background: "#000", opacity: fade, pointerEvents: "none", transition: "opacity .1s linear" }} />
      <style>{`@keyframes dm-spin{to{transform:rotate(360deg)}}@keyframes dm-cardpulse{0%,100%{box-shadow:0 0 0 0 rgba(91,168,217,0)}50%{box-shadow:0 0 0 5px rgba(91,168,217,.18)}}`}</style>
    </AnimFrame>
  );
}
