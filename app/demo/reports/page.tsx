import Link from "next/link";
import { colors, APP_URL } from "@/lib/theme";
import DemoReportTabs from "@/components/DemoReportTabs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo — Reports | Dolemai",
  description: "Read-only demo of Dolemai reports for the anonymised Riverside Works project — with a rendered client report preview.",
  robots: { index: true, follow: true },
};

const cards = [
  { kind: "MONTHLY REPORT", title: "Riverside Works — July 2026", sub: "Client-facing and internal drafts ready for review.", period: "9–16 Jul 2026" },
  { kind: "WEEKLY REPORT", title: "Riverside Works — w/c 9 Jul 2026", sub: "Weekly status drafts ready for review.", period: "9–16 Jul 2026" },
];

function ReportCard({ kind, title, sub, period }: { kind: string; title: string; sub: string; period: string }) {
  return (
    <div style={{ background: colors.card, border: "1px solid " + colors.border, borderRadius: 14, padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: colors.accent, letterSpacing: "0.04em" }}>{kind}</span>
        <span style={{ fontSize: 11, fontWeight: 600, color: colors.muted, border: "1px solid " + colors.border, borderRadius: 999, padding: "2px 10px" }}>Draft</span>
      </div>
      <h3 style={{ color: colors.text, fontSize: 16, margin: "10px 0 4px" }}>{title}</h3>
      <p style={{ color: colors.muted, fontSize: 13, margin: 0, lineHeight: 1.5 }}>{sub}</p>
      <div style={{ color: colors.muted, fontSize: 12, marginTop: 10 }}>Reporting period: {period}</div>
      <div style={{ color: colors.accent, fontSize: 12.5, fontWeight: 600, marginTop: 12 }}>Preview below ↓</div>
    </div>
  );
}

export default function DemoReports() {
  return (
    <>
      <h1 style={{ color: colors.text, fontSize: 24, margin: 0 }}>Reports</h1>
      <p style={{ color: colors.muted, fontSize: 13, marginTop: 6 }}>Riverside Works · Draft reports awaiting professional review.</p>

      <div className="dm-split" style={{ marginTop: 18 }}>
        {cards.map((c) => (
          <ReportCard key={c.kind} {...c} />
        ))}
      </div>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: colors.text, fontSize: 20, margin: "0 0 6px" }}>Preview: client report</h2>
        <p style={{ color: colors.muted, fontSize: 13.5, margin: "0 0 20px", maxWidth: 720, lineHeight: 1.6 }}>
          A static preview of the client-facing draft Dolemai prepares from the reviewed project
          position. In the app you review, amend and issue it under your own professional
          responsibility.
        </p>
        <DemoReportTabs />
      </section>

      <div style={{ marginTop: 40, textAlign: "center" }}>
        <a href={APP_URL + "/projects/new"} style={{ display: "inline-block", background: colors.accent, color: "#0A1620", fontSize: 15, fontWeight: 600, borderRadius: 6, padding: "13px 24px", textDecoration: "none" }}>
          Generate reports on your own project →
        </a>
        <p style={{ color: colors.muted, fontSize: 13, marginTop: 12 }}>
          <Link href="/demo/overview" style={{ color: colors.accent }}>← Back to project overview</Link>
        </p>
      </div>
    </>
  );
}
