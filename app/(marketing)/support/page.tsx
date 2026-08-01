import Link from "next/link";
import Container from "@/components/Container";
import { paper, fonts } from "@/lib/theme";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Support",
  description:
    "Get help with Dolemai. Email support@dolemai.com — we aim to respond within one business day. Answers to common questions about connecting Microsoft 365, monitoring folders, registers and data storage.",
  path: "/support",
});

const faqs = [
  {
    q: "How do I connect my Microsoft 365 account?",
    a: "Go to Account Settings and click Connect under Microsoft 365 connection. You will be asked to authorise Dolemai to access your SharePoint and OneDrive folders. This connection covers all your projects — you only need to do it once.",
  },
  {
    q: "How do I start monitoring a project folder?",
    a: "Once your Microsoft 365 account is connected, go to your project → Project Settings → Monitoring → Connect folder. Select the SharePoint or OneDrive folder where your project documents live. Dolemai will begin monitoring it immediately.",
  },
  {
    q: "Why is my register empty?",
    a: "Registers populate when you run a Refresh or generate a report — not automatically when you first connect a folder. Go to your project → Project Overview and click Refresh project position. Dolemai will read your connected documents and update the registers.",
  },
];

const sectionHead: React.CSSProperties = {
  fontFamily: fonts.display,
  fontWeight: 600,
  color: paper.oceanDeep,
  fontSize: 22,
  margin: "0 0 16px",
};
const question: React.CSSProperties = {
  color: paper.ink,
  fontSize: 16,
  fontWeight: 700,
  margin: "0 0 6px",
};
const answer: React.CSSProperties = {
  color: paper.inkSoft,
  fontSize: 15.5,
  lineHeight: 1.75,
  margin: "0 0 22px",
};
const legalLink: React.CSSProperties = {
  color: paper.signalDeep,
  fontSize: 15.5,
  fontWeight: 600,
  textDecoration: "none",
};

export default function Support() {
  return (
    <Container style={{ padding: "64px 32px 24px", maxWidth: 820 }}>
      <h1 style={{ fontFamily: fonts.display, fontWeight: 600, color: paper.oceanDeep, fontSize: "clamp(30px,4vw,42px)", margin: 0, letterSpacing: "-0.01em" }}>
        Support
      </h1>
      <p style={{ color: paper.inkSoft, fontSize: 18, lineHeight: 1.6, margin: "14px 0 0" }}>
        {"We're here to help."}
      </p>

      {/* Section 1 — Contact */}
      <section style={{ marginTop: 44 }}>
        <h2 style={sectionHead}>Contact</h2>
        <p style={{ color: paper.inkSoft, fontSize: 16, lineHeight: 1.7, margin: "0 0 22px", maxWidth: 640 }}>
          For support with Dolemai, email us at{" "}
          <a href="mailto:support@dolemai.com" style={{ color: paper.signalDeep }}>support@dolemai.com</a>. We
          aim to respond within one business day.
        </p>
        <a
          href="mailto:support@dolemai.com"
          style={{
            display: "inline-block",
            background: "transparent",
            border: "1px solid " + paper.signal,
            color: paper.signalDeep,
            fontWeight: 600,
            fontSize: 16,
            borderRadius: 4,
            padding: "14px 28px",
            textDecoration: "none",
          }}
        >
          support@dolemai.com
        </a>
      </section>

      {/* Section 2 — Common questions */}
      <section style={{ marginTop: 52 }}>
        <h2 style={sectionHead}>Common questions</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <p style={question}>{f.q}</p>
            <p style={answer}>{f.a}</p>
          </div>
        ))}
        <div>
          <p style={question}>Where are my documents stored?</p>
          <p style={answer}>
            They are not stored. Dolemai reads your documents in the moment they are needed and
            discards them immediately after. Only the structured information extracted — risks,
            actions, decisions and changes — is retained. See our{" "}
            <Link href="/privacy" style={{ color: paper.signalDeep }}>Privacy Policy</Link> for full
            details.
          </p>
        </div>
      </section>

      {/* Section 3 — Privacy and legal */}
      <section style={{ marginTop: 44 }}>
        <h2 style={sectionHead}>Privacy and legal</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Link href="/privacy" style={legalLink}>Privacy Policy →</Link>
          <Link href="/terms" style={legalLink}>Terms and Conditions →</Link>
        </div>
      </section>
    </Container>
  );
}
