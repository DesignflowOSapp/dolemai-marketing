import { LegalShell, H, P, UL } from "@/components/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms and conditions",
  description:
    "The terms governing use of Dolemai, operated by Lapunne Limited. AI-generated outputs are drafts requiring professional review. Governing law: England and Wales.",
  path: "/terms",
});

export default function Terms() {
  return (
    <LegalShell
      title="Terms and conditions"
      updated="16 July 2026"
      intro="These terms govern your use of Dolemai, operated by Lapunne Limited (trading as Dolemai). By using the service you agree to these terms."
    >

      <H>1. The service</H>
      <P>Dolemai is a construction project intelligence and reporting tool. It processes documents and correspondence you connect to it, maintains structured project registers, and prepares report drafts for your review. Dolemai supports your work; it does not replace professional judgement.</P>

      <H>2. Your responsibilities</H>
      <UL items={[
        "You are responsible for reviewing every register entry and report draft before relying on it or issuing it.",
        "Dolemai outputs are drafts. They are not professional, legal or contractual advice and must not be relied upon without your own review and sign-off.",
        "You are responsible for ensuring you have the right to connect and process the documents and correspondence you provide to the service.",
        "You must not use the service in breach of any obligation of confidentiality you owe to a client or third party.",
      ]} />

      <H>3. Subscription and billing</H>
      <UL items={[
        "Dolemai is charged per active project on a monthly subscription, at the rate published on our pricing page, unless otherwise agreed.",
        "You may cancel a project's subscription at any time; cancellation stops future charges.",
        "The monthly fee is not refunded for the current billing period on cancellation.",
        "Add-on generation credit packs are one-off purchases. Unused add-on credits purchased separately are refundable to the original payment method within 5–10 business days of the project being closed.",
        "Prices are exclusive of VAT where applicable.",
      ]} />

      <H>4. Acceptable use</H>
      <P>You must not misuse the service, attempt to disrupt or gain unauthorised access to it, or use it for any unlawful purpose. We may suspend access where these terms are breached.</P>

      <H>5. Intellectual property</H>
      <P>Dolemai and its underlying software remain the property of Lapunne Limited. You retain ownership of your project data and the reports you produce. You grant us the limited rights necessary to operate the service for you.</P>

      <H>6. Limitation of liability</H>
      <P>Dolemai prepares drafts using automated and AI-based processing, which may contain errors or omissions. All outputs require professional review before use. To the fullest extent permitted by law, Lapunne Limited is not liable for losses arising from reliance on outputs that have not been reviewed and approved by you, or for indirect or consequential loss.</P>

      <H>7. Governing law</H>
      <P>These terms are governed by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction over any dispute.</P>

      <H>8. Contact</H>
      <P>Questions about these terms can be sent to support@designflowos.com.</P>
    </LegalShell>
  );
}
