"use client";
import { useTimeline } from "@/components/useAnimTimeline";

const SIGNAL = "#5BA8D9";
const RED = "#E5736A";
const AMBER = "#E0A748";
const GREEN = "#5CB87A";
const rag: Record<string, string> = { red: RED, amber: AMBER, green: GREEN };
const FONT = "Inter, ui-sans-serif, system-ui, sans-serif";

const metrics = [
  { label: "Cost position", value: "−£104k", note: "Favourable", rag: "green" },
  { label: "Programme", value: "+11 days", note: "Behind plan", rag: "amber" },
  { label: "Key risks", value: "3", note: "1 Critical", rag: "red" },
  { label: "Decisions", value: "4", note: "Awaiting input", rag: "amber" },
  { label: "Information required", value: "7", note: "Outstanding", rag: "amber" },
];
const connectItems = [
  { at: 2300, label: "SharePoint folder connected", sub: "Riverside Works / 2026" },
  { at: 3100, label: "Outlook inbox connected", sub: "pm@lapunne.com" },
  { at: 3900, label: "Google Drive connected", sub: "Riverside Works Docs" },
];
const docs = [
  "Reading: Programme_Rev3.xlsx",
  "Reading: Meeting_Minutes_14Jul.docx",
  "Reading: RFI_Response_009.pdf",
  "Reading: Contract_Instructions.docx",
  "Reading: Budget_Update_Q2.xlsx",
];
const movements = [
  { rag: "red", text: "Completion date passed — no revised date confirmed" },
  { rag: "amber", text: "Budget estimate increased to £104k" },
  { rag: "green", text: "Steelwork package awarded — £142k saving confirmed" },
];

const card: React.CSSProperties = { background: "#11161c", border: "1px solid #282f36", borderRadius: 12, padding: "12px 13px" };
const label: React.CSSProperties = { fontFamily: "'SFMono-Regular', monospace", color: "#9198a1", textTransform: "uppercase", letterSpacing: ".06em", fontSize: 9.5 };

function Metric({ m, filled }: { m: (typeof metrics)[number]; filled: boolean }) {
  return (
    <div style={card}>
      <div style={label}>{m.label}</div>
      <div style={{ position: "relative", height: 26, marginTop: 8 }}>
        <span style={{ position: "absolute", inset: 0, color: "#565d66", fontWeight: 700, fontSize: 18, opacity: filled ? 0 : 1, transition: "opacity .4s" }}>—</span>
        <span style={{ position: "absolute", inset: 0, color: "#F2F1ED", fontWeight: 700, fontSize: 18, opacity: filled ? 1 : 0, transform: filled ? "none" : "scale(.85)", transition: "opacity .45s ease, transform .45s ease" }}>{m.value}</span>
      </div>
      <div style={{ fontSize: 10.5, marginTop: 3, color: filled ? rag[m.rag] : "#565d66", transition: "color .4s" }}>{filled ? m.note : "Not set"}</div>
    </div>
  );
}

export default function HeroDemoAnimation() {
  const t = useTimeline(16000);

  const showConnectPrompt = t < 2000;
  const connecting = t >= 2000 && t < 5000;
  const docsPhase = t >= 5000 && t < 7000;
  const building = t >= 7000 && t < 11000;
  const movementsPhase = t >= 11000;
  const attention = t >= 10500;
  const reportReady = t >= 14000;
  const fade = t >= 15500 ? (t - 15500) / 500 : 0;

  const overlay = (on: boolean, extra?: React.CSSProperties): React.CSSProperties => ({
    position: "absolute", inset: 0, opacity: on ? 1 : 0, pointerEvents: "none",
    transition: "opacity .5s ease", ...extra,
  });

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", fontFamily: FONT }}>
      <div style={{ borderRadius: 16, background: "#070b0f", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden", boxShadow: "0 30px 80px -30px rgba(0,0,0,.6)" }}>
        {/* browser top */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 14px", background: "#e8e3da" }}>
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#f2645a" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#f2b94b" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#5fc65e" }} />
          <span style={{ marginLeft: 8, flex: 1, background: "#f7f4ef", borderRadius: 7, padding: "6px 12px", color: "#746f66", fontFamily: "'SFMono-Regular', monospace", fontSize: 11 }}>
            app.dolemai.com/projects/riverside-works
          </span>
        </div>

        {/* dash */}
        <div style={{ position: "relative", padding: 22, color: "#fff", minHeight: 430 }}>
          {/* header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 20, fontWeight: 750 }}>Riverside Works</div>
            <span style={{ fontSize: 11, fontWeight: 700, borderRadius: 999, padding: "5px 12px",
              color: attention ? AMBER : "#9aa2ab",
              background: attention ? "rgba(224,167,72,.14)" : "rgba(255,255,255,.06)",
              border: "1px solid " + (attention ? "rgba(224,167,72,.32)" : "rgba(255,255,255,.10)"),
              transition: "all .5s ease" }}>
              {attention ? "Attention required" : "Not yet assessed"}
            </span>
          </div>

          {/* metric grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 9 }}>
            {metrics.map((m, i) => <Metric key={m.label} m={m} filled={t >= 7000 + i * 450} />)}
          </div>

          {/* work area */}
          <div style={{ position: "relative", marginTop: 16, minHeight: 150 }}>
            {/* Phase 1 — connect prompt */}
            <div style={overlay(showConnectPrompt, { display: "flex", alignItems: "center", justifyContent: "center" })}>
              <div style={{ textAlign: "center", border: "1px dashed #2b333c", borderRadius: 12, padding: "26px 30px", color: "#9198a1" }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>📁</div>
                <div style={{ color: "#cbd2d9", fontWeight: 600, fontSize: 14 }}>Connect a project folder to begin</div>
                <div style={{ fontSize: 12, marginTop: 4 }}>Dolemai will read what is already there</div>
              </div>
            </div>

            {/* Phase 2 — connecting sources */}
            <div style={overlay(connecting)}>
              <div style={{ display: "grid", gap: 8 }}>
                {connectItems.map((c) => {
                  const on = t >= c.at;
                  return (
                    <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 10, background: "#11161c", border: "1px solid #282f36", borderRadius: 10, padding: "9px 12px", opacity: on ? 1 : 0, transform: on ? "none" : "translateY(6px)", transition: "opacity .4s ease, transform .4s ease" }}>
                      <span style={{ color: GREEN, fontWeight: 800 }}>✓</span>
                      <span style={{ color: "#e6eef3", fontSize: 13, fontWeight: 600 }}>{c.label}</span>
                      <span style={{ color: "#8d939b", fontSize: 12, marginLeft: "auto", fontFamily: "'SFMono-Regular', monospace" }}>{c.sub}</span>
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: 12, color: "#8d939b", fontSize: 12 }}>Dolemai is reading your project…</div>
              <div style={{ marginTop: 8, height: 4, borderRadius: 4, background: "#1b2129", overflow: "hidden" }}>
                <div style={{ height: "100%", width: "40%", background: SIGNAL, borderRadius: 4, animation: "dm-pulse 1.2s ease-in-out infinite" }} />
              </div>
            </div>

            {/* Phase 3 — documents feed */}
            <div style={overlay(docsPhase, { filter: t >= 6700 ? "blur(3px)" : "none", transition: "opacity .5s ease, filter .3s ease" })}>
              <div style={{ fontFamily: "'SFMono-Regular', monospace", fontSize: 12.5, lineHeight: 1.9 }}>
                {docs.map((d, i) => {
                  const appear = 5100 + i * 320;
                  const on = t >= appear;
                  return (
                    <div key={d} style={{ color: "#7fb2d6", opacity: on ? 1 : 0, transform: on ? "none" : "translateY(8px)", transition: "opacity .25s ease, transform .25s ease" }}>
                      {d}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Phase 4 — building */}
            <div style={overlay(building, { display: "flex", alignItems: "center", justifyContent: "center" })}>
              <div style={{ color: SIGNAL, fontSize: 13, fontWeight: 600, letterSpacing: ".02em" }}>Building project intelligence…</div>
            </div>

            {/* Phase 5 — movements */}
            <div style={overlay(movementsPhase)}>
              <div style={{ ...label, marginBottom: 10 }}>This period</div>
              <div style={{ display: "grid", gap: 10 }}>
                {movements.map((mv, i) => {
                  const on = t >= 11000 + i * 700;
                  return (
                    <div key={mv.text} style={{ display: "flex", gap: 10, alignItems: "flex-start", opacity: on ? 1 : 0, transform: on ? "none" : "translateY(6px)", transition: "opacity .45s ease, transform .45s ease" }}>
                      <span style={{ marginTop: 5, width: 8, height: 8, borderRadius: "50%", flex: "0 0 auto", background: rag[mv.rag] }} />
                      <span style={{ color: "#dbe3ea", fontSize: 13, lineHeight: 1.5 }}>{mv.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Phase 6 — featured report card */}
          <div style={{ position: "absolute", right: 22, bottom: 22, width: 240,
            opacity: reportReady ? 1 : 0, transform: reportReady ? "none" : "translateY(10px)",
            transition: "opacity .6s ease, transform .6s ease",
            background: "linear-gradient(180deg, rgba(91,168,217,.16), rgba(91,168,217,.05))",
            border: "1px solid rgba(91,168,217,.4)", borderRadius: 12, padding: 14 }}>
            <div style={{ color: SIGNAL, fontSize: 10, fontWeight: 700, letterSpacing: ".06em" }}>WEEKLY REPORT DRAFT READY</div>
            <div style={{ color: "#fff", fontSize: 13, fontWeight: 700, marginTop: 6 }}>Riverside Works</div>
            <div style={{ color: "#9fb6c6", fontSize: 11.5, marginTop: 2 }}>Wk 2, Jul 2026</div>
            <span style={{ display: "inline-block", marginTop: 10, background: SIGNAL, color: "#08131c", fontSize: 12, fontWeight: 700, borderRadius: 7, padding: "6px 12px" }}>Review report →</span>
          </div>

          {/* fade to black */}
          <div style={{ position: "absolute", inset: 0, background: "#000", opacity: fade, pointerEvents: "none", transition: "opacity .1s linear" }} />
        </div>
      </div>
      <style>{`@keyframes dm-pulse{0%,100%{opacity:.5;transform:translateX(0)}50%{opacity:1;transform:translateX(140%)}}`}</style>
    </div>
  );
}
