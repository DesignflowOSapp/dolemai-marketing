"use client";
import { useTimeline } from "@/components/useAnimTimeline";
import { AnimFrame, Cursor, SIGNAL, RED, AMBER, GREEN, MONO, darkCard, monoLabel, overlay } from "@/components/animShared";
import OverviewMock from "@/components/OverviewMock";

const folders = [
  { name: "Documents / 2024", date: "12 Jan 2024" },
  { name: "Projects / Active", date: "3 Mar 2026" },
  { name: "Riverside Works / 2026", date: "16 Jul 2026" },
  { name: "Archive / 2023", date: "20 Nov 2023" },
];
const readLines = [
  "Reading Programme_Rev3.xlsx...",
  "Reading Meeting_Minutes_14Jul.docx...",
  "Reading RFI_Response_009.pdf...",
  "Reading Budget_Update_Q2.xlsx...",
  "Reading Risk_Register_v4.xlsx...",
  "Building project intelligence...",
];
const risks = [
  { id: "R001", text: "No contingency in budget estimate", sev: "Critical", tone: RED },
  { id: "R002", text: "Completion date passed, no revised date", sev: "High", tone: AMBER },
  { id: "R003", text: "Construction contract not executed", sev: "High", tone: AMBER },
];
const chip = (color: string, bg: string): React.CSSProperties => ({ color, background: bg, border: "1px solid " + color, borderRadius: 999, fontSize: 10.5, fontWeight: 700, padding: "2px 9px", whiteSpace: "nowrap" });

function cursorFor(t: number): { x: string; y: string; click: boolean } | null {
  if (t < 4000) {
    const y = t < 800 ? 120 : t < 2400 ? 120 + ((t - 800) / 1600) * 66 : 186;
    return { x: "36%", y: y + "px", click: t >= 2900 && t < 3300 };
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

export default function HeroDemoAnimation({ maxWidth }: { maxWidth?: number }) {
  const t = useTimeline(22000, { once: true, restAt: 20800 });
  const c = cursorFor(t);

  const folderOn = t < 4000;
  const readingOn = t >= 4000 && t < 6600;
  const dashOn = (t >= 6400 && t < 11400) || t >= 19000;
  const riskOn = t >= 11200 && t < 19000;
  const reviewOn = t >= 15200 && t < 19000;
  const fade = t >= 21300 ? Math.min(1, (t - 21300) / 700) : 0;

  const riversideHover = t >= 2200 && t < 3000;
  const connecting = t >= 3000 && t < 3500;
  const connected = t >= 3500 && t < 4000;
  const statusConfirmed = t >= 17500;
  const dropdownOpen = t >= 16500 && t < 17650;
  const saved = t >= 17900 && t < 18900;

  return (
    <AnimFrame minHeight={540} maxWidth={maxWidth}>
      {/* ===== Phase 1 — folder picker + project details ===== */}
      <div style={overlay(folderOn, { pointerEvents: "none" })}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 14 }}>
          {/* left: folder picker */}
          <div style={{ ...darkCard, padding: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#0d1116", border: "1px solid #23262C", borderRadius: 8, padding: "7px 10px", color: "#6b7178", fontSize: 12, marginBottom: 10 }}>
              <span>🔍</span><span>Search folders</span>
            </div>
            <div style={{ display: "grid", gap: 4 }}>
              {folders.map((f, i) => {
                const isRiver = i === 2;
                const hot = isRiver && (riversideHover || connecting || connected);
                return (
                  <div key={f.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 8,
                    background: hot ? "rgba(91,168,217,0.14)" : "transparent",
                    border: "1px solid " + (hot ? "rgba(91,168,217,0.4)" : "transparent"), transition: "all .25s ease" }}>
                    <span style={{ fontSize: 15 }}>📁</span>
                    <span style={{ color: "#dbe3ea", fontSize: 13, flex: 1 }}>{f.name}</span>
                    <span style={{ color: "#6b7178", fontSize: 11, fontFamily: MONO }}>{f.date}</span>
                    {isRiver && riversideHover && <span style={{ background: SIGNAL, color: "#08131c", fontSize: 11, fontWeight: 700, borderRadius: 6, padding: "4px 10px" }}>Connect</span>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* right: project details */}
          <div style={{ ...darkCard, padding: 14 }}>
            <div style={{ color: "#F2F1ED", fontSize: 15, fontWeight: 750 }}>Riverside Works</div>
            <div style={{ color: "#8B8F96", fontSize: 12, marginTop: 4 }}>Construction stage · JCT SBC/Q</div>
            <div style={{ color: "#9aa2ab", fontSize: 12, marginTop: 12 }}>Client: Riverside Developments Ltd</div>
            <div style={{ color: "#9aa2ab", fontSize: 12, marginTop: 3 }}>PM: Pearl Ume Associates</div>
            <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #23262C" }}>
              {t < 3000 && <div style={{ color: "#6b7178", fontSize: 12 }}>Select a folder to connect</div>}
              {connecting && <div style={{ color: SIGNAL, fontSize: 12, fontFamily: MONO }}><span style={{ display: "inline-block", animation: "dm-spin .8s linear infinite" }}>◠</span> Connecting…</div>}
              {connected && <div style={{ color: GREEN, fontSize: 12.5, fontWeight: 700 }}>✓ Connected — Riverside Works / 2026</div>}
            </div>
          </div>
        </div>
      </div>

      {/* ===== Phase 2 — reading banner (single-line typewriter) ===== */}
      <div style={overlay(readingOn, { display: "flex", alignItems: "flex-start", justifyContent: "center" })}>
        <div style={{ background: "rgba(91,168,217,0.15)", border: "1px solid rgba(91,168,217,0.4)", borderRadius: 6, padding: "6px 14px", color: SIGNAL, fontSize: 12, fontFamily: MONO }}>
          {(() => {
            const start = 4000, end = 6600, slot = (end - start) / readLines.length;
            const idx = Math.min(readLines.length - 1, Math.max(0, Math.floor((t - start) / slot)));
            const full = readLines[idx];
            const inSlot = (t - start) - idx * slot;
            const perChar = Math.min(30, (slot * 0.72) / full.length);
            const chars = Math.min(full.length, Math.max(0, Math.floor(inSlot / perChar)));
            return <>{full.slice(0, chars)}<span style={{ opacity: chars < full.length ? 1 : 0 }}>▍</span></>;
          })()}
        </div>
      </div>

      {/* ===== Phase 3 / 6 — dashboard ===== */}
      <div style={overlay(dashOn, { pointerEvents: "none" })}>
        <OverviewMock t={t} revealBase={6400} reportPulse={t >= 19000} />
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

      <div style={{ position: "absolute", inset: 0, background: "#000", opacity: fade, pointerEvents: "none", transition: "opacity .1s linear" }} />
      <style>{`@keyframes dm-spin{to{transform:rotate(360deg)}}@keyframes dm-cardpulse{0%,100%{box-shadow:0 0 0 0 rgba(91,168,217,0)}50%{box-shadow:0 0 0 5px rgba(91,168,217,.18)}}`}</style>
    </AnimFrame>
  );
}
