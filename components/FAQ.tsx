"use client";
import { useState } from "react";
import { paper } from "@/lib/theme";

export interface QA { q: string; a: string }

export default function FAQ({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 760, margin: "0 auto" }}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} style={{ background: paper.white, border: "1px solid " + paper.sandLine, borderRadius: 6, overflow: "hidden" }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", cursor: "pointer", color: paper.ink, fontSize: 15, fontWeight: 600, padding: "18px 20px", display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}
            >
              <span>{it.q}</span>
              <span style={{ color: paper.signalDeep, fontSize: 20, flex: "0 0 auto" }}>{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && <div style={{ padding: "0 20px 20px", color: paper.inkSoft, fontSize: 15, lineHeight: 1.7 }}>{it.a}</div>}
          </div>
        );
      })}
    </div>
  );
}
