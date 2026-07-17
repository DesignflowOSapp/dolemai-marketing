"use client";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import { paper, colors, fonts } from "@/lib/theme";

const scenes = [
  { num: "01", label: "The situation", text: "It is the final week of the reporting period. The information exists — but it is spread across documents, registers and email." },
  { num: "02", label: "Connect", text: "Connect the folder and inbox where your project information already lives." },
  { num: "03", label: "Review", text: "What changed this period? Cost moved. Programme slipped. Two new decisions require attention." },
  { num: "04", label: "Registers", text: "Risks, actions, decisions and contract changes — identified from your documents and ready for review." },
  { num: "05", label: "Report", text: "One approved project position. Two audiences." },
  { num: "06", label: "Issue", text: "Prepared by Dolemai. Reviewed and issued by you." },
];

const AUTO_MS = 3000;

const panel: React.CSSProperties = {
  background: colors.card,
  border: "1px solid " + colors.border,
  borderRadius: 12,
  padding: 22,
  minHeight: 240,
  boxShadow: "0 30px 70px -30px rgba(0,0,0,0.6)",
};
const chip: React.CSSProperties = {
  background: colors.bg,
  border: "1px solid " + colors.border,
  color: colors.muted,
  fontSize: 12,
  borderRadius: 999,
  padding: "7px 13px",
};

function Visual({ i }: { i: number }) {
  if (i === 0)
    return (
      <div style={panel}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 9, alignItems: "center", justifyContent: "center", minHeight: 196 }}>
          {["Minutes", "Cost report", "Programme", "VAR log", "Valuation", "Email", "RFI", "Instruction"].map((t) => (
            <span key={t} style={chip}>{t}</span>
          ))}
        </div>
      </div>
    );
  if (i === 1)
    return (
      <div style={{ ...panel, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={chip}>📁 SharePoint / OneDrive</span>
          <span style={chip}>✉️ Project inbox</span>
        </div>
        <span style={{ color: colors.accent, fontSize: 22 }}>→</span>
        <div style={{ background: "rgba(91,168,217,0.10)", border: "1px solid rgba(91,168,217,0.4)", borderRadius: 12, padding: "16px 20px", textAlign: "center" }}>
          <div style={{ color: colors.accent, fontWeight: 800, fontSize: 18 }}>Dolemai</div>
          <div style={{ color: colors.muted, fontSize: 12, marginTop: 3 }}>Connected</div>
        </div>
      </div>
    );
  if (i === 2)
    return (
      <div style={panel}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10 }}>
          {[["Cost position", "−£104k", colors.green], ["Programme", "+11d", colors.amber], ["Key risks", "3", colors.red], ["Decisions", "4", colors.amber]].map((m) => (
            <div key={m[0]} style={{ background: colors.bg, border: "1px solid " + colors.border, borderRadius: 10, padding: 12 }}>
              <div style={{ color: colors.muted, fontSize: 11 }}>{m[0]}</div>
              <div style={{ color: colors.text, fontSize: 18, fontWeight: 700, marginTop: 6 }}>{m[1]}</div>
              <div style={{ height: 3, borderRadius: 3, marginTop: 8, background: m[2] as string }} />
            </div>
          ))}
        </div>
      </div>
    );
  if (i === 3)
    return (
      <div style={{ ...panel, padding: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[["RSK-004", "Ground conditions uncertain", "Critical", colors.red], ["DEC-005", "Programme recovery proposals", "Required", colors.amber], ["VAR-006", "Steelwork value engineering", "Agreed", colors.green], ["INF-003", "DNO connection date", "Open", colors.muted]].map((r) => (
            <div key={r[0] as string} style={{ display: "flex", alignItems: "center", gap: 12, background: colors.bg, border: "1px solid " + colors.border, borderRadius: 8, padding: "10px 12px" }}>
              <span style={{ color: colors.accent, fontSize: 12, fontWeight: 600, minWidth: 62 }}>{r[0]}</span>
              <span style={{ color: colors.text, fontSize: 13, flex: 1 }}>{r[1]}</span>
              <span style={{ color: r[3] as string, fontSize: 11, fontWeight: 600, border: "1px solid " + (r[3] as string), borderRadius: 999, padding: "2px 10px" }}>{r[2]}</span>
            </div>
          ))}
        </div>
      </div>
    );
  if (i === 4)
    return (
      <div style={{ ...panel, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ background: "#F3F1EC", borderRadius: 10, padding: 16, color: "#1a1a1a" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#3D86B4" }}>CLIENT-FACING</div>
          <div style={{ fontWeight: 700, marginTop: 6, fontSize: 14 }}>Monthly report</div>
          {[100, 80, 60].map((w) => <div key={w} style={{ height: 6, background: "#e3e0d8", borderRadius: 4, marginTop: 8, width: w + "%" }} />)}
        </div>
        <div style={{ background: colors.bg, border: "1px solid " + colors.border, borderRadius: 10, padding: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: colors.accent }}>INTERNAL</div>
          <div style={{ fontWeight: 700, marginTop: 6, fontSize: 14, color: colors.text }}>Internal report</div>
          {[100, 80, 60].map((w) => <div key={w} style={{ height: 6, background: colors.border, borderRadius: 4, marginTop: 8, width: w + "%" }} />)}
        </div>
      </div>
    );
  return (
    <div style={{ ...panel, display: "flex", alignItems: "center", justifyContent: "center", gap: 18, flexWrap: "wrap" }}>
      <span style={{ color: colors.muted, fontSize: 12, fontWeight: 600, border: "1px solid " + colors.border, borderRadius: 999, padding: "6px 16px" }}>Draft</span>
      <span style={{ color: colors.accent, fontSize: 22 }}>→</span>
      <span style={{ color: colors.green, fontSize: 12, fontWeight: 600, border: "1px solid " + colors.green, background: "rgba(92,184,122,0.12)", borderRadius: 999, padding: "6px 16px" }}>Issued by you</span>
    </div>
  );
}

export default function HorizontalSlides() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0); // bump to reset the timer on manual nav

  useEffect(() => {
    const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % scenes.length), AUTO_MS);
    return () => clearInterval(id);
  }, [tick]);

  function go(i: number) {
    setActive(i);
    setTick((t) => t + 1);
  }

  return (
    <section className="dm-hslides" aria-label="How Dolemai works">
      <Container>
        <div className="dm-hslides-viewport">
          <div className="dm-hslides-track" style={{ transform: `translateX(-${active * 100}%)` }}>
            {scenes.map((s) => (
              <div key={s.num} className="dm-hslide" aria-hidden={false}>
                <div className="dm-hslide-inner">
                  <div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: "0.08em", color: paper.signal, marginBottom: 14 }}>
                      {s.num} / {s.label}
                    </div>
                    <div style={{ fontFamily: fonts.display, fontWeight: 500, color: paper.paper, fontSize: "clamp(22px,2.8vw,30px)", lineHeight: 1.28, maxWidth: "22ch" }}>
                      {s.text}
                    </div>
                  </div>
                  <div><Visual i={scenes.indexOf(s)} /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="dm-dots">
        {scenes.map((s, i) => (
          <button key={s.num} aria-label={`Go to scene ${s.num}`} className={"dm-dot" + (i === active ? " on" : "")} onClick={() => go(i)} />
        ))}
      </div>
    </section>
  );
}
