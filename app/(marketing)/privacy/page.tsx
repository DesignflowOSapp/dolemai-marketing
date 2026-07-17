import { LegalShell, H, P, UL } from "@/components/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy policy",
  description:
    "How Dolemai handles your data. Source documents are processed in memory and never stored; only structured register data is retained. Operated by Lapunne Limited trading as Dolemai.",
  path: "/privacy",
});

export default function Privacy() {
  return (
    <LegalShell
      title="Privacy policy"
      updated="16 July 2026"
      intro="This policy explains what information Dolemai collects, how it is processed, and your rights. Dolemai is operated by Lapunne Limited (trading as Dolemai)."
    >

      <H>Who we are</H>
      <P>Dolemai is a construction project intelligence and reporting service operated by Lapunne Limited (trading as Dolemai), a company registered in England and Wales. For any privacy query, contact support@designflowos.com.</P>

      <H>What data we collect</H>
      <UL items={[
        "Account information: your name and email address, used to create and secure your account.",
        "Project register data: the structured intelligence extracted during analysis — risks, actions, decisions, information required, appointment changes and contract change records — together with the source reference (for example a document name) for each item.",
        "Billing details: processed by our payment provider (Stripe). We do not store full card details on our systems.",
        "Usage and technical data: basic logs required to operate and secure the service.",
      ]} />

      <H>What we do not retain</H>
      <P>We do not retain your source documents or their raw content. Project documents are downloaded, processed in memory and discarded. They are never written to disk, never stored on Dolemai servers, and never retained after analysis is complete. The only information retained from analysis is the structured register data described above — the intended output, not a copy of your documents.</P>

      <H>How AI processing works</H>
      <P>Dolemai uses the Anthropic Claude API to process project documents and prepare report drafts, and the OpenAI API solely to create embeddings of public UK legislation used for grounding (no project documents are sent to OpenAI). Anthropic&apos;s and OpenAI&apos;s commercial API terms state that data submitted through their APIs is not used to train their models by default. AI-generated outputs are drafts for your professional review.</P>

      <H>Where your data is stored</H>
      <P>Structured project data and account information are stored on EU-based infrastructure operated by our hosting and database providers.</P>

      <H>Data retention</H>
      <P>We retain your account and structured project data for as long as your account or project is active, and for a reasonable period afterwards to meet legal, accounting and dispute-resolution requirements. You may request deletion at any time (see your rights below).</P>

      <H>Your rights</H>
      <P>Under UK data protection law you have the right to access the personal data we hold about you, to request correction or deletion, to request a copy in a portable format, and to object to or restrict certain processing. To exercise any of these rights, contact support@designflowos.com.</P>

      <H>Cookies</H>
      <P>We use essential cookies to run the service and keep you signed in. See our cookie policy for details.</P>

      <H>Contact</H>
      <P>Questions about this policy or your data can be sent to support@designflowos.com.</P>
    </LegalShell>
  );
}
