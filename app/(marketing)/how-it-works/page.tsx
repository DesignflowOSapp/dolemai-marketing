import Link from "next/link";
import { Section, H2, Lead, Card } from "@/components/ui";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { paper as colors, btnPrimary, APP_URL } from "@/lib/theme";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "How it works",
  description:
    "From scattered project information to a controlled project position. Connect your project information, review what changed and prepare professional reports from one current, evidence-based position.",
  path: "/how-it-works",
});

const steps = [
  {
    n: "01",
    t: "Connect your project information",
    body: [
      "Connect the SharePoint folder or OneDrive location where your project documents are stored. Add a project email address to monitor for relevant correspondence. Dolemai will review new documents when you run an analysis or when a scheduled report is due.",
    ],
    reads:
      "What Dolemai reads: meeting minutes, cost reports, valuations, programme updates, compensation events and instructions, change records, design information logs, information required schedules, inspection reports, correspondence.",
  },
  {
    n: "02",
    t: "Review your project position",
    body: [
      "When you run an analysis, Dolemai reads new documents and identifies potential movement in your project position. It populates and updates your registers — risks, actions, decisions, information required, appointment changes and contract changes.",
      "Each item is extracted with a source reference so you can see which document it came from. You review and confirm before relying on any item in a report or decision. Items you have reviewed and edited are protected — the pipeline will not overwrite your changes.",
    ],
  },
  {
    n: "03",
    t: "Generate and issue",
    body: [
      "When you are ready to report, click Generate. Dolemai runs a final analysis to capture any documents added since the last run, then prepares two report drafts from your current project position:",
    ],
    bullets: [
      "A client-facing report for your client, funder or project board",
      "An internal report for your project team",
    ],
    after:
      "Both reports are generated from the same reviewed project information. You review each draft, make any amendments, and issue under your own professional responsibility.",
  },
];

const faqs = [
  { q: "What documents can Dolemai read?", a: "Dolemai reads PDF files, Word documents (.docx) and Excel spreadsheets (.xlsx) from your connected SharePoint folder or OneDrive location. Microsoft Project programmes can also be included by exporting as XML from MS Project (File → Save As → XML Format) and saving the file to your connected folder. Email attachments in supported formats are also processed when project email monitoring is connected. Each processed document is referenced in your document log." },
  { q: "How often should I run an analysis?", a: "Run an analysis whenever new project information arrives, or simply before you report. When a scheduled report is due, Dolemai runs a final analysis automatically to capture anything added since your last run — so your reports always reflect the latest position." },
  { q: "What is the difference between the client and internal report?", a: "The client-facing report is concise and decision-oriented: overall position, cost and programme headlines, principal risks and the decisions requiring client attention. The internal report carries more detail: full risks, actions and decisions, potential and confirmed contract changes, coordination matters, blockers and team actions. Both are generated from the same reviewed project information." },
  { q: "Can I edit the generated report?", a: "Yes. Every report is produced as a draft. You review it, make any amendments you need, and issue it under your own professional responsibility. Nothing is issued automatically." },
  { q: "What happens to my documents after analysis?", a: "Project documents are downloaded, processed in memory and discarded. They are never written to disk, never stored on Dolemai servers and never retained after analysis. Only the structured intelligence extracted during analysis — your registers — is kept." },
  { q: "Is Dolemai suitable for all project stages?", a: "Dolemai is designed around RIBA stages and works across the project lifecycle. It is most valuable during delivery and construction stages, where cost, programme, risk, change and decisions move most frequently between reporting periods." },
  { q: "How many reports can I generate?", a: "Each active project includes a monthly report generation allowance. See the pricing page for current limits." },
  { q: "How many refreshes per week?", a: "Each active project includes a weekly analysis allowance. See the pricing page for current limits." },
];

export default function HowItWorks() {
  return (
    <>
      <section style={{ padding: "72px 0 24px", textAlign: "center" }}>
        <Container>
          <Reveal>
            <h1 style={{ color: colors.text, margin: "0 auto", maxWidth: "18ch", letterSpacing: "-0.03em" }}>
              From scattered project information to a controlled project position.
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p style={{ color: colors.muted, fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: "22px auto 0" }}>
              Connect your project information, review what changed and prepare professional reports from one current, evidence-based position.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section style={{ paddingTop: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 900, margin: "0 auto" }}>
          {steps.map((s) => (
            <Reveal key={s.n}>
              <Card style={{ padding: 32 }}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
                  <div style={{ color: colors.accent, fontSize: 32, fontWeight: 800, lineHeight: 1, minWidth: 56 }}>{s.n}</div>
                  <div style={{ flex: "1 1 420px" }}>
                    <h2 style={{ color: colors.text, fontSize: 22, margin: "0 0 14px" }}>{s.t}</h2>
                    {s.body.map((p, i) => (
                      <p key={i} style={{ color: colors.muted, fontSize: 16, lineHeight: 1.7, margin: "0 0 12px" }}>{p}</p>
                    ))}
                    {s.bullets && (
                      <ul style={{ margin: "6px 0 12px", paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                        {s.bullets.map((b) => (
                          <li key={b} style={{ display: "flex", gap: 10, color: colors.text, fontSize: 15 }}>
                            <span style={{ color: colors.accent }}>→</span>{b}
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.after && <p style={{ color: colors.text, fontSize: 16, lineHeight: 1.7, margin: 0 }}>{s.after}</p>}
                    {s.reads && (
                      <div style={{ marginTop: 16, padding: 16, background: colors.bg, border: "1px solid " + colors.border, borderRadius: 10, color: colors.muted, fontSize: 14, lineHeight: 1.6 }}>
                        {s.reads}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg={colors.cardAlt} style={{ borderTop: "1px solid " + colors.border, borderBottom: "1px solid " + colors.border }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <H2 style={{ fontSize: "clamp(24px,3.2vw,32px)" }}>Frequently asked questions</H2>
        </div>
        <FAQ items={faqs} />
      </Section>

      <section style={{ padding: "72px 0", textAlign: "center" }}>
        <Container>
          <h2 style={{ color: colors.text, fontSize: "clamp(24px,3.2vw,34px)", margin: 0 }}>Know where every project stands.</h2>
          <div style={{ marginTop: 24 }}>
            <a href={APP_URL + "/signup"} style={{ ...btnPrimary, padding: "13px 24px", fontSize: 15 }}>Start your first project →</a>
          </div>
          <p style={{ color: colors.muted, fontSize: 14, marginTop: 16 }}>
            Or <Link href="/demo" style={{ color: colors.accent }}>explore the interactive demo</Link> — no sign-up required.
          </p>
        </Container>
      </section>
    </>
  );
}
