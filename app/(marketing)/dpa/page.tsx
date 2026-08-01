import { LegalShell, H, P, PB } from "@/components/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Data Processing Agreement",
  description:
    "Dolemai Data Processing Agreement (DPA) — how Lapunne Limited (trading as Dolemai) processes personal data on behalf of the Customer under UK GDPR, including sub-processors, international transfers, retention and deletion.",
  path: "/dpa",
});

export default function DPA() {
  return (
    <LegalShell
      title="Data Processing Agreement"
      updated="August 2026"
      intro={`This Data Processing Agreement ("DPA") forms part of the Terms and Conditions between Lapunne Limited (trading as Dolemai) and the Customer, and applies where Dolemai processes personal data on behalf of the Customer in connection with the Dolemai service.`}
    >
      <P>{`Version 1.0 — August 2026`}</P>

      <H>1. Definitions</H>
      <PB lead={`"Controller"`} text="means the Customer, who determines the purposes and means of processing personal data through their use of Dolemai." />
      <PB lead={`"Processor"`} text="means Lapunne Limited (trading as Dolemai), who processes personal data on behalf of the Controller." />
      <PB lead={`"Personal data"`} text="has the meaning given in UK GDPR — any information relating to an identified or identifiable natural person." />
      <PB lead={`"Processing"`} text="means any operation performed on personal data, including collection, storage, use, disclosure and deletion." />
      <PB lead={`"UK GDPR"`} text="means the UK General Data Protection Regulation as retained in UK law by the European Union (Withdrawal) Act 2018, together with the Data Protection Act 2018." />
      <PB lead={`"Sub-processor"`} text="means any third party appointed by Lapunne Limited to process personal data in connection with providing the Dolemai service." />

      <H>2. Scope and purpose</H>
      <P>{`2.1 This DPA applies to all personal data processed by Lapunne Limited in the course of providing the Dolemai service to the Customer.`}</P>
      <P>{`2.2 The personal data processed may include: names and contact details of project stakeholders, consultants and contractors appearing in project documents and emails; project correspondence; and any other personal data contained in documents, emails or other materials the Customer connects to Dolemai.`}</P>
      <P>{`2.3 The purpose of processing is to provide the Dolemai project intelligence and reporting service as described in the Terms and Conditions.`}</P>
      <P>{`2.4 The duration of processing is the duration of the Customer's active subscription, plus any retention period specified in this DPA or the Privacy Policy.`}</P>

      <H>{`3. Lapunne Limited's obligations as Processor`}</H>
      <P>{`Lapunne Limited shall:`}</P>
      <P>{`3.1 Process personal data only on the documented instructions of the Customer and not for any other purpose.`}</P>
      <P>{`3.2 Ensure that all personnel authorised to process personal data are bound by appropriate confidentiality obligations.`}</P>
      <P>{`3.3 Implement appropriate technical and organisational measures to protect personal data against unauthorised or unlawful processing, accidental loss, destruction or damage.`}</P>
      <P>{`3.4 Not transfer personal data outside the United Kingdom without appropriate safeguards as described in clause 6.`}</P>
      <P>{`3.5 Assist the Customer in responding to data subject rights requests to the extent technically possible.`}</P>
      <P>{`3.6 Notify the Customer without undue delay upon becoming aware of a personal data breach affecting the Customer's data.`}</P>
      <P>{`3.7 At the Customer's choice, delete or return all personal data on termination of the service.`}</P>
      <P>{`3.8 Provide the Customer with information necessary to demonstrate compliance with this DPA and cooperate with reasonable audits on reasonable notice.`}</P>

      <H>{`4. Customer's obligations as Controller`}</H>
      <P>{`The Customer shall:`}</P>
      <P>{`4.1 Ensure it has a lawful basis for processing personal data and for sharing it with Lapunne Limited through the Dolemai service.`}</P>
      <P>{`4.2 Ensure that data subjects whose personal data appears in connected documents and emails have been informed of its processing in accordance with UK GDPR.`}</P>
      <P>{`4.3 Provide Lapunne Limited with clear instructions regarding the processing of personal data.`}</P>

      <H>5. Sub-processors</H>
      <P>{`5.1 The Customer provides general authorisation for Lapunne Limited to engage sub-processors for the provision of the Dolemai service.`}</P>
      <P>{`5.2 The current list of sub-processors is published and maintained at dolemai.com/sub-processors.`}</P>
      <P>{`5.3 Lapunne Limited will inform the Customer of any intended changes to sub-processors by updating the sub-processor list and sending an email notification at least 30 days before the change takes effect.`}</P>
      <P>{`5.4 The Customer may object to a new sub-processor within 14 days of notification. If Lapunne Limited cannot accommodate the objection, the Customer may terminate the service with a pro-rata refund of any prepaid fees.`}</P>

      <H>6. International transfers</H>
      <P>{`6.1 Some sub-processors are located outside the United Kingdom. Lapunne Limited ensures that any transfer of personal data outside the UK is protected by appropriate safeguards including the UK International Data Transfer Addendum to the EU Standard Contractual Clauses (UK IDTA).`}</P>
      <P>{`6.2 Further information about transfer safeguards is available on request from privacy@dolemai.com.`}</P>

      <H>7. Document processing and data minimisation</H>
      <P>{`7.1 Where the Customer connects project documents or emails to Dolemai, those documents are downloaded and processed in memory to extract structured project intelligence.`}</P>
      <P>{`7.2 Source documents are not retained on Lapunne Limited's servers after processing. Only the structured intelligence extracted is stored.`}</P>
      <P>{`7.3 Lapunne Limited does not use the Customer's project data, documents or personal data to train artificial intelligence models.`}</P>
      <P>{`7.4 The Anthropic API is used to process project documents. Anthropic does not use data submitted through their commercial API for model training by default.`}</P>

      <H>8. Retention and deletion</H>
      <P>{`8.1 Personal data is retained for the duration of the Customer's active subscription and for 12 months following closure or deletion of the project.`}</P>
      <P>{`8.2 Billing records are retained for 7 years as required by UK financial regulations.`}</P>
      <P>{`8.3 Ask Dolemai responses are retained for a maximum of 30 days and then automatically deleted.`}</P>
      <P>{`8.4 On termination or written request, Lapunne Limited will delete the Customer's personal data within 30 days except where retention is required by law.`}</P>

      <H>9. Governing law</H>
      <P>{`This DPA is governed by the laws of England and Wales.`}</P>

      <H>10. Contact</H>
      <PB lead="Data Protection Contact:" text="Lapunne Limited" />
      <PB lead="Email:" text="privacy@dolemai.com" />
      <PB lead="ICO Registration:" text="ZB111903" />

      <H>Request a countersigned copy</H>
      <P>{`If your organisation requires a countersigned DPA, email privacy@dolemai.com with your organisation name and registered address. We will respond within 5 business days.`}</P>
    </LegalShell>
  );
}
