import { LegalShell, H, P, UL } from "@/components/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Security",
  description:
    "How Dolemai keeps project information secure. Documents are processed in memory and never stored; authentication supports MFA; data held on EU-region infrastructure.",
  path: "/security",
});

export default function Security() {
  return (
    <LegalShell
      title="Security"
      updated="16 July 2026"
      intro="Security and confidentiality are central to how Dolemai is built. This page summarises our approach."
    >
      <H>How documents are processed</H>
      <P>Project documents are downloaded, processed in memory and discarded. They are never written to disk, never stored on Dolemai servers, and never retained after analysis is complete. The only information kept is the structured register data extracted during analysis.</P>

      <H>AI processing</H>
      <P>Documents are processed using the Anthropic Claude API. No project information is sent to any other AI provider for document analysis. Under Anthropic&apos;s commercial API terms, submitted data is not used to train their models by default. AI outputs are drafts for professional review.</P>

      <H>Authentication</H>
      <P>Access to the Dolemai app is protected by authenticated sign-in. Multi-factor authentication (MFA) is available to add a second layer of protection to your account.</P>

      <H>Data storage</H>
      <P>Structured project data and account information are held on managed, access-controlled infrastructure in an EU region.</P>

      <H>Responsible disclosure</H>
      <P>If you believe you have found a security vulnerability in Dolemai, please contact us so we can investigate and resolve it. We appreciate responsible disclosure and will work with you in good faith.</P>
      <UL items={[
        "Report security issues to: support@designflowos.com",
        "Please include enough detail for us to reproduce the issue, and give us reasonable time to respond before any public disclosure.",
      ]} />

      <H>Contact</H>
      <P>Security questions can be sent to support@designflowos.com.</P>
    </LegalShell>
  );
}
