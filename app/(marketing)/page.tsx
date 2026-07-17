import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import MacFrame from "@/components/MacFrame";
import { MockOverview, MockRegisters } from "@/components/AppMocks";
import HorizontalSlides from "@/components/HorizontalSlides";
import { Section, H2, Lead, Card } from "@/components/ui";
import { paper, fonts, btnPrimary, APP_URL } from "@/lib/theme";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Home",
  description:
    "Dolemai turns the documents and emails already used on your projects into a clear, current view of cost, programme, risk, change and decisions — then prepares professional reports for your clients, team and project board.",
  path: "/",
});

const trust = [
  "Built for UK construction",
  "Two report versions",
  "Professional review retained",
  "Privacy-led processing",
  "Designed for UK consultancies",
];

const features = [
  { t: "Current project position", b: "Know where the project stands before opening another document. See the latest cost position, programme movement, risks, decisions and outstanding information in one place." },
  { t: "Registers that stay useful", b: "Dolemai identifies potential risks, actions, decisions, information gaps and contract changes from connected documents and emails. You review each entry before confirmation." },
  { t: "Two report versions", b: "Prepare client-facing and internal report drafts from the same reviewed project information, reducing duplicated work and inconsistent reporting." },
  { t: "Professional review throughout", b: "Dolemai prepares and proposes. You review, amend, approve and issue. Professional responsibility stays where it belongs — with you." },
];

const clientReport = [
  "Overall project position", "Executive summary", "Cost and programme headlines",
  "Principal risks", "Decisions required", "Look-ahead and consultant recommendation",
];
const internalReport = [
  "Full risks, actions and decisions", "Potential and confirmed contract changes",
  "Consultant coordination matters", "Cost and programme commentary",
  "Contract-administration items", "Blockers and team actions",
];

const whom = [
  { t: "Project Managers and Employer's Agents", b: "Maintain a current view of cost, programme, risk, change and decisions — and turn that information into clear client and project-board reporting." },
  { t: "Architects as Lead Consultant or Contract Administrator", b: "Reduce the time spent reviewing scattered project information while retaining control of professional judgement, contract administration and client communication." },
  { t: "Independent consultants and small practices", b: "Gain structured project controls and professional reporting support without needing a large project-support team." },
];

function MiniList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div style={{ fontFamily: fonts.mono, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em", color: paper.signalDeep, marginBottom: 10 }}>{title}</div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 7 }}>
        {items.map((x) => (
          <li key={x} style={{ display: "flex", gap: 9, color: paper.ink, fontSize: 13.5, lineHeight: 1.5 }}>
            <span style={{ color: paper.signal, flex: "0 0 auto" }}>›</span>{x}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "80px 0 0" }}>
        <Container>
          <Reveal>
            <div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: paper.signalDeep, marginBottom: 22, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 22, height: 1, background: paper.signal, display: "inline-block" }} />
              Project intelligence and reporting for construction consultants
            </div>
            <h1 className="display" style={{ fontWeight: 600, color: paper.oceanDeep, letterSpacing: "-0.02em", lineHeight: 1.08, maxWidth: "14ch", margin: 0 }}>
              Know where every project stands.
            </h1>
            <p style={{ color: paper.inkSoft, fontSize: 18, lineHeight: 1.65, maxWidth: 620, marginTop: 26 }}>
              Dolemai turns the documents and emails already used on your projects into a clear,
              current view of cost, programme, risk, change and decisions — then prepares professional
              reports for your clients, your team and your project board.
            </p>
            <div style={{ marginTop: 34, display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <a href={APP_URL + "/signup"} style={btnPrimary}>Start your first project</a>
              <Link href="/how-it-works" style={{ fontSize: 14.5, fontWeight: 600, color: paper.oceanDeep, textDecoration: "none", borderBottom: "1px solid " + paper.sand, paddingBottom: 2 }}>
                See how it works
              </Link>
            </div>
            <p style={{ color: paper.inkSoft, fontSize: 14, maxWidth: 620, marginTop: 18 }}>
              Built for project managers, Employer&apos;s Agents and construction consultants who need a
              reliable project position — not just another monthly report.
            </p>
            <div className="dm-trust" style={{ marginTop: 22 }}>
              {trust.map((t, i) => (
                <span key={t} className="dm-trust-item">
                  {i > 0 && <span style={{ color: paper.sand, marginRight: "10px" }}>·</span>}{t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160} style={{ marginTop: 52 }}>
            <MacFrame url="app.dolemai.com/projects/riverside-works" style={{ maxWidth: 980, margin: "0 auto" }}>
              <MockOverview />
            </MacFrame>
          </Reveal>
        </Container>
      </section>

      {/* Problem statement (compact) */}
      <section style={{ padding: "56px 0" }}>
        <Container>
          <Reveal>
            <div style={{ maxWidth: 720 }}>
              <h3 className="display" style={{ fontWeight: 600, color: paper.oceanDeep, fontSize: "clamp(20px,2.4vw,26px)", margin: "0 0 16px", letterSpacing: "-0.01em" }}>
                Every month, the same problem.
              </h3>
              <p style={{ color: paper.inkSoft, fontSize: 16.5, lineHeight: 1.7, margin: "0 0 14px" }}>
                The information already exists. It is spread across meeting minutes, cost reports,
                programme updates, compensation-event logs, valuations and email threads. Before you
                can report, you have to read it all again, identify what changed and rebuild the
                project story from the beginning.
              </p>
              <p style={{ color: paper.ink, fontSize: 16.5, lineHeight: 1.7, margin: 0 }}>
                Dolemai helps maintain a current project position between reporting periods — so you
                are not starting from zero every month.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Horizontal slide section — immediately after hero */}
      <div style={{ marginTop: 72 }}>
        <HorizontalSlides />
      </div>

      {/* Feature cards (4) */}
      <Section>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <Reveal><H2 style={{ fontSize: "clamp(26px,3.4vw,36px)" }}>Everything you need to maintain project control.</H2></Reveal>
        </div>
        <div className="dm-grid-2" style={{ maxWidth: 900, margin: "0 auto" }}>
          {features.map((f, i) => (
            <Reveal key={f.t} delay={(i % 2) * 90}>
              <Card style={{ height: "100%" }}>
                <div style={{ width: 38, height: 38, borderRadius: 8, background: "rgba(91,168,217,0.12)", border: "1px solid rgba(91,168,217,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: paper.signalDeep, fontSize: 16, marginBottom: 14 }}>◆</div>
                <h3 style={{ fontFamily: fonts.display, fontWeight: 600, color: paper.oceanDeep, fontSize: 18, margin: "0 0 8px" }}>{f.t}</h3>
                <p style={{ color: paper.inkSoft, fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>{f.b}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Two-column feature: reporting + registers mockup */}
      <Section>
        <div className="dm-grid-2" style={{ alignItems: "center", gap: 48 }}>
          <Reveal>
            <div>
              <H2 style={{ fontSize: "clamp(26px,3.4vw,36px)" }}>One approved project position. Two audiences.</H2>
              <Lead style={{ marginTop: 18 }}>
                Your client needs the overall position, the principal risks and the decisions requiring
                their attention. Your internal team needs more detail — open actions, potential changes,
                blockers and everything that must be resolved before the next reporting period. Dolemai
                prepares both versions from the same reviewed project information, helping maintain
                consistency between the outward client message and the internal delivery position.
              </Lead>
              <div className="dm-grid-2" style={{ marginTop: 26, gap: 24 }}>
                <MiniList title="Client-facing report" items={clientReport} />
                <MiniList title="Internal report" items={internalReport} />
              </div>
              <div style={{ marginTop: 24, borderLeft: "2px solid " + paper.signal, paddingLeft: 18, color: paper.inkSoft, fontSize: 14.5, lineHeight: 1.6, fontFamily: fonts.mono }}>
                Every identified risk, action and change retains a reference to the source document that
                produced it.
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <MacFrame url="app.dolemai.com/registers"><MockRegisters /></MacFrame>
          </Reveal>
        </div>
      </Section>

      {/* For whom */}
      <Section bg={paper.paperWarm} style={{ borderTop: "1px solid " + paper.sandLine, borderBottom: "1px solid " + paper.sandLine }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <Reveal><H2 style={{ fontSize: "clamp(26px,3.4vw,36px)" }}>Built for the people who carry reporting responsibility.</H2></Reveal>
        </div>
        <div className="dm-grid-3">
          {whom.map((w, i) => (
            <Reveal key={w.t} delay={(i % 3) * 90}>
              <Card style={{ height: "100%" }}>
                <h3 style={{ fontFamily: fonts.display, fontWeight: 600, color: paper.oceanDeep, fontSize: 18, margin: "0 0 10px" }}>{w.t}</h3>
                <p style={{ color: paper.inkSoft, fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>{w.b}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Pricing / closing CTA */}
      <section style={{ background: paper.oceanDeep, padding: "88px 0" }}>
        <Container>
          <Reveal>
            <div style={{ maxWidth: 620 }}>
              <h2 className="display" style={{ fontWeight: 600, color: paper.paper, fontSize: "clamp(26px,3.6vw,40px)", margin: 0, letterSpacing: "-0.01em", lineHeight: 1.14 }}>
                Stop rebuilding the project story every month.
              </h2>
              <p style={{ color: "#C3D2DA", fontSize: 17, lineHeight: 1.65, marginTop: 20 }}>
                Connect your first project and create a current, reviewable project position from the
                information you already use.
              </p>
              <div style={{ marginTop: 30, display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                <a href={APP_URL + "/signup"} style={{ ...btnPrimary, background: paper.signal, borderColor: paper.signal, color: paper.oceanDeep }}>
                  Start your first project
                </a>
                <Link href="/pricing" style={{ fontSize: 14.5, fontWeight: 600, color: paper.paper, textDecoration: "none", borderBottom: "1px solid rgba(251,248,242,0.4)", paddingBottom: 2 }}>
                  See pricing
                </Link>
              </div>
              <p style={{ color: "#93A7B2", fontSize: 13, marginTop: 16 }}>
                First analysis and report drafts included. No credit card required.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
