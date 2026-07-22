import { LegalShell, H, Sub, P, UL } from "@/components/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms and conditions",
  description:
    "The terms and conditions governing use of Dolemai, a software service provided by Lapunne Limited. AI-generated outputs require professional review. Governing law: England and Wales.",
  path: "/terms",
});

export default function Terms() {
  return (
    <LegalShell
      title="Terms and conditions"
      updated="23 July 2026"
      intro="Dolemai is a software service provided by Lapunne Limited, a company registered in England and Wales. These terms govern your use of the Dolemai platform at app.dolemai.com."
    >
      <P>{`By creating an account or using Dolemai, you agree to these terms. If you do not agree, do not use the service.`}</P>

      <H>1. The service</H>
      <P>{`Dolemai is a project intelligence and reporting tool for construction consultants, project managers, Employer's Agents and related professionals. It connects to your project documents and emails, identifies changes and extracts project intelligence, and prepares draft reports for your professional review.`}</P>
      <P>{`Dolemai is a professional tool. All outputs — including extracted register items, risk assessments, programme summaries and report drafts — are AI-generated and require your professional review before being relied upon or issued. Dolemai does not replace professional judgement.`}</P>

      <H>2. Professional responsibility</H>
      <P>{`You are responsible for reviewing all AI-generated outputs before use. Dolemai prepares drafts — you approve, amend and issue. The professional responsibility for any report, advice, assessment or decision remains entirely with you.`}</P>
      <P>{`Dolemai is not a substitute for professional advice. Nothing produced by Dolemai constitutes legal, contractual, financial, structural or regulatory advice. You should not rely on Dolemai outputs without independent professional review appropriate to the circumstances.`}</P>

      <H>3. Your account</H>
      <P>{`You must create an account to use Dolemai, using email and password, Microsoft SSO or Google sign-in. You are responsible for keeping your login credentials secure. You must not share your account with others or allow others to access the service using your credentials.`}</P>
      <P>{`You must provide accurate information when creating your account. You must be at least 18 years old to use Dolemai.`}</P>
      <P>{`We may suspend or terminate your account if we reasonably believe you have breached these terms.`}</P>

      <H>4. Subscriptions and billing</H>

      <Sub>How subscriptions work</Sub>
      <P>{`Dolemai is billed on a per-project, per-month basis at the rate published on our pricing page at dolemai.com/pricing. Each active project requires a separate subscription. Your subscription begins when you complete payment and gives you access to all Dolemai features for that project for the billing period.`}</P>

      <Sub>Free trial</Sub>
      <P>{`Your first project includes a free trial. The trial allows you to connect your project, run an initial analysis and generate your first report drafts. No payment is required during the trial. The trial ends when your free generation allowance is used or after 30 days, whichever comes first. After the trial ends, a subscription is required to continue using Dolemai for that project.`}</P>

      <Sub>Billing</Sub>
      <P>{`You will be billed monthly on the same date each month. Payment is taken via Stripe. By subscribing you authorise us to charge your payment method monthly until you cancel.`}</P>

      <Sub>14-day cancellation right and waiver</Sub>
      <P>{`Under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, you have the right to cancel a digital service contract within 14 days of purchase without giving a reason.`}</P>
      <P>{`However, if you expressly request that we begin providing the service immediately — which is necessary for Dolemai to connect to your documents, run analysis and generate reports — you acknowledge that you waive this 14-day cancellation right once the service has begun.`}</P>
      <P>{`When you first subscribe to a Dolemai project, you will be asked to confirm that you request immediate access to the service and that you understand this waives your statutory 14-day cancellation right. This confirmation applies to all subsequent project subscriptions on your account. You may still cancel your subscription at any time as described below — your subscription will end at the close of the current billing period.`}</P>

      <Sub>Pausing your reporting schedule</Sub>
      <P>{`Pausing your automatic reporting schedule does not pause or cancel your subscription. You retain full access to your project while your subscription is active regardless of whether your schedule is running.`}</P>

      <Sub>Cancelling your subscription</Sub>
      <P>{`To cancel a project subscription, either:`}</P>
      <UL items={[
        "Close the project in Project Settings → Closeout, or",
        "Cancel the subscription in Project Settings → Billing → Cancel subscription",
      ]} />
      <P>{`In both cases your subscription ends at the close of the current billing period. You retain access until then. Your subscription will not renew after that date.`}</P>

      <Sub>Closing a project</Sub>
      <P>{`When you close a project your subscription is cancelled at the end of the current billing period. Unused monthly report generations for the current period may be transferred to another active project on your account. Unused add-on credits purchased separately will be refunded to your original payment method within 5–10 business days. Monthly report generations included in your subscription cannot be refunded in cash but may be transferred as described.`}</P>

      <Sub>Deleting a project</Sub>
      <P>{`Deleting a project is permanent and cannot be undone. When you delete a project your subscription is cancelled immediately. Unused monthly report generations expire immediately and cannot be transferred or refunded. Unused add-on credits purchased separately will be refunded within 5–10 business days. All project data including reports, registers and project records is permanently deleted. We recommend using Close project rather than Delete project if you wish to transfer unused generations or preserve your records.`}</P>

      <Sub>Add-on credits</Sub>
      <P>{`Additional report generation credits may be purchased separately. Add-on credits do not expire and carry over month to month until used or until the project is closed or deleted. Unused add-on credits are refundable at the purchase rate if you close or delete your project.`}</P>

      <Sub>Failed payments</Sub>
      <P>{`If a payment fails we will notify you by email. Your project will remain accessible while we retry the payment. If payment cannot be collected after reasonable attempts, we may suspend or cancel your subscription and access to your project.`}</P>

      <Sub>Refunds</Sub>
      <P>{`Monthly subscription fees are non-refundable except as described above in relation to add-on credits and project closure. We do not offer pro-rata refunds for unused days within a billing period.`}</P>

      <H>5. Acceptable use</H>
      <P>{`You must use Dolemai only for lawful purposes and in accordance with these terms. You must not:`}</P>
      <UL items={[
        "Use Dolemai to process documents you do not have the right to share",
        "Attempt to reverse engineer, copy or extract the underlying software or AI models",
        "Use Dolemai to generate misleading, fraudulent or harmful content",
        "Attempt to circumvent any security or access controls",
        "Use Dolemai in any way that could damage, disable or impair the service",
      ]} />

      <H>6. Intellectual property</H>
      <P>{`Dolemai and its underlying technology are owned by Lapunne Limited. We grant you a non-exclusive, non-transferable licence to use Dolemai for the duration of your subscription.`}</P>
      <P>{`You retain ownership of your project documents and the information you provide. You grant us a limited licence to process your documents and data solely for the purpose of providing the service to you. We do not use your project data to train AI models.`}</P>
      <P>{`Reports and register outputs generated by Dolemai from your project data belong to you.`}</P>

      <H>7. Data and privacy</H>
      <P>{`We process your personal data and project information in accordance with our Privacy Policy at dolemai.com/privacy. Project documents are processed in memory to extract intelligence and are not stored on our servers after processing. The structured intelligence extracted — risks, actions, decisions and changes — is retained to provide the service.`}</P>
      <P>{`We use Anthropic's Claude API to process documents. Anthropic does not use submitted data for model training by default under their commercial terms.`}</P>

      <H>8. No warranty</H>
      <P>{`Dolemai is provided as a professional tool to assist your work. We do not warrant that:`}</P>
      <UL items={[
        "AI-generated outputs are accurate, complete or fit for any particular purpose",
        "The service will be available without interruption or error",
        "The service will meet your specific requirements",
      ]} />
      <P>{`All AI-generated outputs require professional review before use. You use Dolemai at your own professional risk.`}</P>

      <H>9. Limitation of liability</H>
      <P>{`To the fullest extent permitted by law, Lapunne Limited shall not be liable for:`}</P>
      <UL items={[
        "Any loss arising from your reliance on AI-generated outputs without professional review",
        "Any indirect, consequential or economic loss arising from use of the service",
        "Any loss of data, revenue, profit or opportunity",
        "Any failure or interruption of the service",
      ]} />
      <P>{`Our total liability to you for any claim arising from these terms or your use of Dolemai shall not exceed the amount you paid us in the three months preceding the claim.`}</P>
      <P>{`Nothing in these terms excludes or limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded by law.`}</P>

      <H>10. Changes to the service and terms</H>
      <P>{`We may update these terms from time to time. We will notify you of material changes by email. Continued use of Dolemai after notification constitutes acceptance of the updated terms.`}</P>
      <P>{`We may change, suspend or discontinue any part of the service at any time. We will give reasonable notice where possible.`}</P>

      <H>11. Governing law</H>
      <P>{`These terms are governed by the laws of England and Wales. Any disputes arising from these terms or your use of Dolemai shall be subject to the exclusive jurisdiction of the courts of England and Wales.`}</P>

      <H>12. Contact</H>
      <P>{`Lapunne Limited`}</P>
      <P>{`support@designflowos.com`}</P>
      <P>{`dolemai.com`}</P>
    </LegalShell>
  );
}
