import { Section, H2, Card } from "@/components/ui";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { paper as colors, btnPrimary, btnOutline, APP_URL } from "@/lib/theme";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Pricing",
  description:
    "Simple, per-project pricing for Dolemai. Start free for 30 days. Essential £5/month or Professional £15.99/month per project, with pay-as-you-go add-on credit packs.",
  path: "/pricing",
});

const trial = [
  "30 days",
  "1 report generation (client-facing + internal)",
  "1 manual refresh",
  "2 Ask Dolemai queries",
  "No credit card required",
];
const essential = [
  "7 report generations per month (each produces a client-facing and internal draft)",
  "10 manual refreshes per month",
  "1 Ask Dolemai query per month",
  "Add-on credit packs available",
];
const professional = [
  "10 report generations per month (each produces a client-facing and internal draft)",
  "20 manual refreshes per month",
  "15 Ask Dolemai queries per month",
  "Add-on credit packs available",
];
const addon = [
  "+1 report generation",
  "+2 manual refreshes",
  "+5 Ask Dolemai queries",
];

const faqs = [
  { q: "Can I have projects on different tiers?", a: "Yes — each project has its own subscription. You can have some projects on Essential and others on Professional." },
  { q: "What happens when I run out of credits?", a: "You can purchase add-on credit packs at any time from Project Settings → Billing. One pack adds 1 report generation, 2 refreshes and 5 Ask Dolemai queries for £5." },
  { q: "Can I cancel at any time?", a: "Yes. Cancel from Project Settings → Billing. Your subscription ends at the close of the current billing period and you retain access until then. Unused add-on credits are refunded." },
  { q: "Is there a discount for annual billing?", a: "Not currently. Annual billing is on our roadmap." },
];

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ display: "flex", gap: 10, color: colors.ink2, fontSize: 15, lineHeight: 1.5 }}>
      <span style={{ color: colors.green, flex: "0 0 auto", fontWeight: 700 }}>✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "72px 0 8px", textAlign: "center" }}>
        <Container>
          <h1 style={{ margin: 0 }}>Pricing</h1>
          <p className="section-lead" style={{ margin: "18px auto 0", maxWidth: 560 }}>
            Simple, per-project pricing. Start free, no credit card required.
          </p>
        </Container>
      </section>

      {/* Free trial */}
      <Section style={{ paddingTop: 44, paddingBottom: 20 }}>
        <Reveal>
          <Card style={{ maxWidth: 720, margin: "0 auto" }}>
            <div className="section-kicker" style={{ marginBottom: 8 }}>Always free to start</div>
            <h2 style={{ fontSize: 28, margin: "0 0 6px" }}>Free trial</h2>
            <ul style={{ listStyle: "none", margin: "18px 0 0", padding: 0, display: "grid", gap: 12 }}>
              {trial.map((t) => <Check key={t}>{t}</Check>)}
            </ul>
            <div style={{ marginTop: 24 }}>
              <a href={APP_URL + "/signup"} style={{ ...btnPrimary, minHeight: 50 }}>Start your first project →</a>
            </div>
          </Card>
        </Reveal>
      </Section>

      {/* Two tiers */}
      <Section style={{ paddingTop: 20 }}>
        <div className="dm-split" style={{ maxWidth: 900, margin: "0 auto", alignItems: "stretch" }}>
          <Reveal>
            <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <div className="section-kicker" style={{ marginBottom: 8 }}>Essential</div>
              <h2 style={{ fontSize: 30, margin: "0 0 2px" }}>
                £5<span style={{ fontSize: 15, color: colors.muted, fontWeight: 400, fontFamily: "Inter, sans-serif", letterSpacing: 0 }}> / month per project</span>
              </h2>
              <p style={{ color: colors.muted, fontSize: 15, lineHeight: 1.6, margin: "10px 0 0" }}>
                Everything you need to monitor a project and generate reports.
              </p>
              <ul style={{ listStyle: "none", margin: "20px 0 0", padding: 0, display: "grid", gap: 12 }}>
                {essential.map((f) => <Check key={f}>{f}</Check>)}
              </ul>
              <div style={{ flex: 1 }} />
              <div style={{ marginTop: 24 }}>
                <a href={APP_URL + "/signup"} style={{ ...btnOutline, display: "flex", width: "100%" }}>Start your first project →</a>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card style={{ height: "100%", display: "flex", flexDirection: "column", position: "relative", borderColor: colors.sky, boxShadow: "0 0 0 2px " + colors.sky }}>
              <span style={{ position: "absolute", top: -13, left: 26, background: colors.ink, color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.03em", borderRadius: 999, padding: "5px 14px" }}>
                Recommended
              </span>
              <div className="section-kicker" style={{ marginBottom: 8 }}>Professional</div>
              <h2 style={{ fontSize: 30, margin: "0 0 2px" }}>
                £15.99<span style={{ fontSize: 15, color: colors.muted, fontWeight: 400, fontFamily: "Inter, sans-serif", letterSpacing: 0 }}> / month per project</span>
              </h2>
              <p style={{ color: colors.muted, fontSize: 15, lineHeight: 1.6, margin: "10px 0 0" }}>
                Full access including Ask Dolemai.
              </p>
              <ul style={{ listStyle: "none", margin: "20px 0 0", padding: 0, display: "grid", gap: 12 }}>
                {professional.map((f) => <Check key={f}>{f}</Check>)}
              </ul>
              <div style={{ flex: 1 }} />
              <div style={{ marginTop: 24 }}>
                <a href={APP_URL + "/signup"} style={{ ...btnPrimary, display: "flex", width: "100%" }}>Start your first project →</a>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Add-on credit pack */}
      <Section bg={colors.cardAlt} style={{ borderTop: "1px solid " + colors.border, borderBottom: "1px solid " + colors.border }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Reveal>
            <Card>
              <div className="section-kicker" style={{ marginBottom: 8 }}>Add-on credit pack — £5</div>
              <h2 style={{ fontSize: 26, margin: "0 0 6px" }}>Top up any time</h2>
              <p style={{ color: colors.muted, fontSize: 15, lineHeight: 1.6, margin: "6px 0 0" }}>
                Works on both tiers. Credits never expire.
              </p>
              <ul style={{ listStyle: "none", margin: "18px 0 0", padding: 0, display: "grid", gap: 12 }}>
                {addon.map((a) => <Check key={a}>{a}</Check>)}
              </ul>
              <p style={{ color: colors.muted, fontSize: 14, marginTop: 18 }}>
                Add credits any time from Project Settings → Billing.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* How credits work */}
      <Section>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ marginBottom: 24 }}>
            <div className="section-kicker">How credits work</div>
            <H2 style={{ fontSize: "clamp(1.9rem,3.6vw,2.6rem)" }}>Three simple counters per project</H2>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            <p style={{ color: colors.muted, fontSize: 16, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: colors.ink }}>Reports</strong> — used when you generate a report.
              Each generation produces one client-facing and one internal draft, counted as one.
            </p>
            <p style={{ color: colors.muted, fontSize: 16, lineHeight: 1.7, margin: 0 }}>
              {`Refreshes — used when you manually refresh a project's position. Refreshes triggered automatically by report generation or Ask Dolemai do not count against your allowance.`}
            </p>
            <p style={{ color: colors.muted, fontSize: 16, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: colors.ink }}>Ask Dolemai</strong> — used when you ask a question
              about your project. Each query and its follow-ups count as one.
            </p>
          </div>
          <p style={{ color: colors.muted, fontSize: 15, lineHeight: 1.7, marginTop: 22, paddingTop: 18, borderTop: "1px solid " + colors.border }}>
            Credits reset on your monthly billing date. Add-on credits never expire and are used after
            your monthly allowance is exhausted.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg={colors.cardAlt} style={{ borderTop: "1px solid " + colors.border, borderBottom: "1px solid " + colors.border }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <H2 style={{ fontSize: "clamp(1.9rem,3.6vw,2.6rem)" }}>Pricing questions</H2>
        </div>
        <FAQ items={faqs} />
      </Section>

      {/* Final CTA */}
      <section style={{ padding: "84px 0", textAlign: "center" }}>
        <Container>
          <h2 style={{ margin: "0 auto", maxWidth: "22ch", fontSize: "clamp(2rem,4vw,3rem)" }}>
            Start your first project free — no credit card required.
          </h2>
          <div style={{ marginTop: 28 }}>
            <a href={APP_URL + "/signup"} style={{ ...btnPrimary, fontSize: 15 }}>Get started →</a>
          </div>
        </Container>
      </section>
    </>
  );
}
