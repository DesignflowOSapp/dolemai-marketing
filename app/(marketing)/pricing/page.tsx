import Link from "next/link";
import { Section, H2, Card } from "@/components/ui";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { paper as colors, btnPrimary, btnOutline, APP_URL } from "@/lib/theme";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Pricing",
  description:
    "Simple pricing, per active project. £5 per active project per month — project monitoring, register maintenance, up to 7 reporting cycles, and client and internal report drafts. Start free.",
  path: "/pricing",
});

const paidFeatures = [
  "Project monitoring and analysis",
  "Automated register maintenance",
  "Up to 7 reporting cycles per month",
  "Client-facing and internal report drafts per cycle",
  "Scheduled weekly and monthly reports",
  "Cancel at any time",
];

const faqs = [
  { q: "What counts as an active project?", a: "An active project is one you are monitoring and reporting on with a live subscription. You pay £5 per month for each active project. Projects you have closed or archived are not counted as active." },
  { q: "What happens if I close a project?", a: "When you close a project in Dolemai, your subscription is cancelled automatically at the end of the current billing period — you keep access until then. Any unused monthly report generations can be transferred to another active project, and unused add-on credits are refunded to your original payment method within 5–10 business days. If you have no other active project to receive transferred generations, they expire at the end of the billing period." },
  { q: "Can I transfer unused generations to another project?", a: "Unused monthly report generations can be transferred to another active project when you close a project. During normal operation, each active project has its own monthly allowance of up to 7 cycles." },
  { q: "What happens if a generation fails?", a: "A failed generation does not count against your monthly reporting cycles, and no add-on credit is used. You can simply generate again once the issue is resolved." },
  { q: "Can I add extra report generations?", a: "Yes. If you reach the monthly cap on a project, you can buy an add-on credit pack (£5 for 5 extra generations) to continue reporting on that project for the rest of the month." },
  { q: "Is there a per-user or per-seat charge?", a: "No. Pricing is per active project only. There is no per-user or per-seat charge." },
  { q: "How do I cancel?", a: "You can cancel a project's subscription at any time from its billing settings. Cancellation stops future monthly charges. The monthly fee already paid is not refunded for the current period." },
];

export default function Pricing() {
  return (
    <>
      <section style={{ padding: "72px 0 8px", textAlign: "center" }}>
        <Container>
          <Reveal>
            <h1 style={{ color: colors.text, margin: 0, letterSpacing: "-0.03em" }}>Simple pricing. Per active project.</h1>
          </Reveal>
        </Container>
      </section>

      <Section style={{ paddingTop: 40 }}>
        <div className="dm-grid-2" style={{ maxWidth: 860, margin: "0 auto", alignItems: "stretch" }}>
          <Reveal>
            <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <div style={{ color: colors.muted, fontSize: 13, fontWeight: 600, letterSpacing: "0.04em" }}>FREE TRIAL</div>
              <h2 style={{ color: colors.text, fontSize: 26, margin: "10px 0 6px" }}>Start free</h2>
              <p style={{ color: colors.muted, fontSize: 15, lineHeight: 1.6, margin: "8px 0 0" }}>
                Includes one project, one analysis and one client-facing and internal reporting
                cycle. No credit card required.
              </p>
              <div style={{ flex: 1 }} />
              <div style={{ marginTop: 24 }}>
                <a href={APP_URL + "/signup"} style={{ ...btnOutline, display: "block", textAlign: "center", padding: "13px 20px" }}>
                  Start your first project →
                </a>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card style={{ height: "100%", display: "flex", flexDirection: "column", borderColor: colors.accent, boxShadow: "0 0 0 1px " + colors.accent }}>
              <div style={{ color: colors.accent, fontSize: 13, fontWeight: 600, letterSpacing: "0.04em" }}>SUBSCRIPTION</div>
              <h2 style={{ color: colors.text, fontSize: 26, margin: "10px 0 2px" }}>
                £5<span style={{ fontSize: 15, color: colors.muted, fontWeight: 500 }}> per active project, per month</span>
              </h2>
              <ul style={{ listStyle: "none", margin: "20px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {paidFeatures.map((f) => (
                  <li key={f} style={{ display: "flex", gap: 10, color: colors.text, fontSize: 15, lineHeight: 1.5 }}>
                    <span style={{ color: colors.green, flex: "0 0 auto" }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <div style={{ flex: 1 }} />
              <div style={{ marginTop: 24 }}>
                <a href={APP_URL + "/signup"} style={{ ...btnPrimary, display: "block", textAlign: "center", padding: "13px 20px" }}>
                  Start your first project →
                </a>
                <p style={{ color: colors.muted, fontSize: 12, textAlign: "center", marginTop: 12 }}>Early access pricing.</p>
              </div>
            </Card>
          </Reveal>
        </div>

        <p style={{ color: colors.muted, fontSize: 13, textAlign: "center", maxWidth: 680, margin: "24px auto 0", lineHeight: 1.6 }}>
          Each reporting cycle produces a client-facing and an internal draft, counted as one cycle.
          VAT may apply.
        </p>
      </Section>

      <Section bg={colors.cardAlt} style={{ borderTop: "1px solid " + colors.border, borderBottom: "1px solid " + colors.border }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <H2 style={{ fontSize: "clamp(24px,3.2vw,32px)" }}>Pricing questions</H2>
        </div>
        <FAQ items={faqs} />
      </Section>

      <section style={{ padding: "72px 0", textAlign: "center" }}>
        <Container>
          <h2 style={{ color: colors.text, fontSize: "clamp(24px,3.2vw,34px)", margin: 0 }}>Try it on a real project.</h2>
          <p style={{ color: colors.muted, fontSize: 16, margin: "16px auto 24px", maxWidth: 560 }}>
            Your first analysis and report drafts are free. No credit card required.
          </p>
          <a href={APP_URL + "/signup"} style={{ ...btnPrimary, padding: "13px 24px", fontSize: 15 }}>Start your first project →</a>
          <p style={{ color: colors.muted, fontSize: 14, marginTop: 16 }}>
            Prefer to look first? <Link href="/demo" style={{ color: colors.accent }}>Explore the demo</Link>.
          </p>
        </Container>
      </section>
    </>
  );
}
