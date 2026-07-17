"use client";
import { useEffect, useRef, useState } from "react";
import { colors } from "@/lib/theme";

const scenes = [
  { num: "01", label: "The situation", text: "It is the final week of the reporting period. The information exists — but it is spread across documents, registers and email." },
  { num: "02", label: "Connect", text: "Connect the folder and inbox where your project information already lives." },
  { num: "03", label: "Review", text: "What changed this period? Cost moved. Programme slipped. Two new decisions require attention." },
  { num: "04", label: "Registers", text: "Risks, actions, decisions and contract changes — identified from your documents and ready for review." },
  { num: "05", label: "Report", text: "One approved project position. Two audiences." },
  { num: "06", label: "Issue", text: "Prepared by Dolemai. Reviewed and issued by you." },
];

function Visual({ i }: { i: number }) {
  if (i === 0) return <SceneDots />;
  if (i === 1) return <SceneConnect />;
  if (i === 2) return <SceneOverview />;
  if (i === 3) return <SceneRegisters />;
  if (i === 4) return <SceneReports />;
  return <SceneIssue />;
}

export default function ScrollStory() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const idx = Number((e.target as HTMLElement).dataset.idx);
          if (e.isIntersecting) {
            e.target.classList.add("dm-scene-active");
            setActive(idx);
          }
        });
      },
      { threshold: 0.55, rootMargin: "-10% 0px -10% 0px" }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="dm-story">
      <div className="dm-story-left">
        <div className="dm-scene-num" style={{ fontSize: 15 }}>
          {scenes[active].num} / {scenes[active].label}
        </div>
        <div style={{ fontSize: 13, color: colors.muted, marginTop: 8, maxWidth: 260 }}>
          How Dolemai turns scattered project information into a reviewed, reportable position.
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
          {scenes.map((s, i) => (
            <span key={s.num} className={"dm-story-dot" + (i === active ? " on" : "")} />
          ))}
        </div>
      </div>

      <div>
        {scenes.map((s, i) => (
          <div
            key={s.num}
            data-idx={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className="dm-scene"
          >
            <div className="dm-scene-num dm-anim d1">{s.num} / {s.label}</div>
            <div className="dm-scene-text dm-anim d2">{s.text}</div>
            <div className="dm-anim d3">
              <Visual i={i} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Scene visuals ---------------- */

function SceneDots() {
  const items = ["Minutes", "Cost report", "Programme", "CE log", "Valuation", "Email", "RFI", "Instruction"];
  return (
    <div className="dm-visual">
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", alignItems: "center", minHeight: 180 }}>
        {items.map((t, k) => (
          <span
            key={t}
            className={"dm-float dm-anim d" + ((k % 5) + 1)}
            style={{
              animationDelay: k * 0.3 + "s",
              background: colors.bg,
              border: "1px solid " + colors.border,
              color: colors.muted,
              fontSize: 12,
              borderRadius: 999,
              padding: "8px 14px",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function IconBox({ label, sub }: { label: string; sub: string }) {
  return (
    <div style={{ background: colors.bg, border: "1px solid " + colors.border, borderRadius: 10, padding: "14px 16px", textAlign: "center", minWidth: 120 }}>
      <div style={{ color: colors.text, fontSize: 22 }}>{label}</div>
      <div style={{ color: colors.muted, fontSize: 12, marginTop: 4 }}>{sub}</div>
    </div>
  );
}

function SceneConnect() {
  return (
    <div className="dm-visual" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="dm-anim d1"><IconBox label="📁" sub="SharePoint / OneDrive" /></div>
          <div className="dm-anim d2"><IconBox label="✉️" sub="Project inbox" /></div>
        </div>
        <div className="dm-anim d3" style={{ color: colors.accent, fontSize: 24 }}>→</div>
        <div className="dm-anim d4" style={{ background: "rgba(91,168,217,0.10)", border: "1px solid rgba(91,168,217,0.4)", borderRadius: 12, padding: "18px 22px", textAlign: "center" }}>
          <div style={{ color: colors.accent, fontWeight: 800, fontSize: 20 }}>Dolemai</div>
          <div style={{ color: colors.muted, fontSize: 12, marginTop: 4 }}>Connected</div>
        </div>
      </div>
    </div>
  );
}

function SceneOverview() {
  const m = [
    { l: "Cost position", v: "−£104k", c: colors.green },
    { l: "Programme", v: "+11d", c: colors.amber },
    { l: "Key risks", v: "3", c: colors.red },
    { l: "Decisions", v: "4", c: colors.amber },
  ];
  return (
    <div className="dm-visual">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
        {m.map((x, k) => (
          <div key={x.l} className={"dm-anim d" + (k + 1)} style={{ background: colors.bg, border: "1px solid " + colors.border, borderRadius: 10, padding: 12 }}>
            <div style={{ color: colors.muted, fontSize: 11 }}>{x.l}</div>
            <div style={{ color: colors.text, fontSize: 18, fontWeight: 700, marginTop: 6 }}>{x.v}</div>
            <div style={{ height: 3, borderRadius: 3, marginTop: 8, background: x.c }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function SceneRegisters() {
  const rows = [
    { r: "RSK-004", d: "Ground conditions uncertain", s: "Critical", c: colors.red },
    { r: "DEC-005", d: "Programme recovery proposals", s: "Required", c: colors.amber },
    { r: "VAR-006", d: "Steelwork value engineering", s: "Agreed", c: colors.green },
    { r: "INF-003", d: "DNO connection date", s: "Open", c: colors.muted },
  ];
  return (
    <div className="dm-visual" style={{ padding: 14 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {rows.map((x, k) => (
          <div key={x.r} className={"dm-anim d" + (k + 1)} style={{ display: "flex", alignItems: "center", gap: 12, background: colors.bg, border: "1px solid " + colors.border, borderRadius: 8, padding: "10px 12px" }}>
            <span style={{ color: colors.accent, fontSize: 12, fontWeight: 600, minWidth: 62 }}>{x.r}</span>
            <span style={{ color: colors.text, fontSize: 13, flex: 1 }}>{x.d}</span>
            <span style={{ color: x.c, fontSize: 11, fontWeight: 600, border: "1px solid " + x.c, borderRadius: 999, padding: "2px 10px" }}>{x.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SceneReports() {
  return (
    <div className="dm-visual">
      <div className="dm-split">
        <div className="dm-anim d1" style={{ background: "#F3F1FF", borderRadius: 10, padding: 16, color: "#1a1a1a" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#5BA8D9" }}>CLIENT-FACING</div>
          <div style={{ fontWeight: 700, marginTop: 6, fontSize: 14 }}>Monthly report</div>
          <div style={{ height: 6, background: "#e5e3f0", borderRadius: 4, marginTop: 12 }} />
          <div style={{ height: 6, background: "#e5e3f0", borderRadius: 4, marginTop: 8, width: "80%" }} />
          <div style={{ height: 6, background: "#e5e3f0", borderRadius: 4, marginTop: 8, width: "60%" }} />
        </div>
        <div className="dm-anim d3" style={{ background: colors.bg, border: "1px solid " + colors.border, borderRadius: 10, padding: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: colors.accent }}>INTERNAL</div>
          <div style={{ fontWeight: 700, marginTop: 6, fontSize: 14, color: colors.text }}>Internal report</div>
          <div style={{ height: 6, background: colors.border, borderRadius: 4, marginTop: 12 }} />
          <div style={{ height: 6, background: colors.border, borderRadius: 4, marginTop: 8, width: "80%" }} />
          <div style={{ height: 6, background: colors.border, borderRadius: 4, marginTop: 8, width: "60%" }} />
        </div>
      </div>
    </div>
  );
}

function SceneIssue() {
  return (
    <div className="dm-visual" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, flexWrap: "wrap" }}>
      <span className="dm-anim d1" style={{ color: colors.muted, fontSize: 12, fontWeight: 600, border: "1px solid " + colors.border, borderRadius: 999, padding: "6px 16px" }}>
        Draft
      </span>
      <span className="dm-anim d2" style={{ color: colors.accent, fontSize: 22 }}>→</span>
      <span className="dm-anim d3 dm-chip-issued" style={{ color: colors.green, fontSize: 12, fontWeight: 600, border: "1px solid " + colors.green, background: "rgba(92,184,122,0.12)", borderRadius: 999, padding: "6px 16px" }}>
        Issued by you
      </span>
    </div>
  );
}
