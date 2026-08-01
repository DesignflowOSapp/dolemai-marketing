import { LegalShell, H, Sub, P, PB, UL } from "@/components/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy policy",
  description:
    "How Dolemai (Lapunne Limited) collects, uses and protects your personal data under UK GDPR — data collected, AI processing, storage, retention, third parties and your rights.",
  path: "/privacy",
});

export default function Privacy() {
  return (
    <LegalShell
      title="Privacy policy"
      updated="1 August 2026"
      intro="Dolemai is provided by Lapunne Limited, a company registered in England and Wales. This policy explains how we collect, use and protect your personal data when you use Dolemai at app.dolemai.com."
    >
      <P>{`Please read this policy carefully. By using Dolemai you agree to the collection and use of your data as described here.`}</P>

      <H>1. Who we are</H>
      <PB lead="Data controller:" text="Lapunne Limited" />
      <PB lead="Trading as:" text="Dolemai" />
      <PB lead="Contact:" text="support@dolemai.com" />
      <PB lead="Website:" text="dolemai.com" />
      <P>{`Lapunne Limited is registered with the Information Commissioner's Office (ICO). Registration reference: ZB111903.`}</P>
      <P>{`If you have any questions about how we handle your data, contact us at the address above.`}</P>

      <H>2. What data we collect</H>
      <Sub>Account data</Sub>
      <P>{`When you create an account we collect your email address, your name if you provide it, and your authentication method (email and password, Microsoft SSO or Google sign-in).`}</P>
      <Sub>Project data</Sub>
      <P>{`When you use Dolemai for a project we collect the project information you enter — project name, client name, site address, postcode, project type, stage, appointment details and baseline figures.`}</P>
      <Sub>Document intelligence</Sub>
      <P>{`When you connect a Microsoft 365 folder or project email, Dolemai accesses documents and emails in that location to extract project intelligence. Documents are downloaded, processed in memory to identify risks, actions, decisions, changes and outstanding information, and then discarded. The raw document content is not stored on our servers. The structured intelligence extracted — register entries and report content — is stored and associated with your project.`}</P>
      <Sub>Usage data</Sub>
      <P>{`We collect data about how you use Dolemai including pages visited, actions taken, reports generated and analysis runs performed. This helps us maintain and improve the service.`}</P>
      <Sub>Billing data</Sub>
      <P>{`Payment information is processed by Stripe. We do not store your card details. We retain billing records including subscription status, payment history and refund records as required for financial compliance.`}</P>
      <Sub>Technical data</Sub>
      <P>{`We collect standard technical data including IP address, browser type, device type and access logs. This is used for security monitoring and service maintenance.`}</P>

      <H>3. How we use your data</H>
      <P>{`We use your data to:`}</P>
      <UL items={[
        "Provide and maintain the Dolemai service",
        "Process your project documents and generate project intelligence",
        "Prepare and store report drafts for your review",
        "Manage your subscription and process payments",
        "Send you notifications about your reports, subscription and account",
        "Respond to support requests",
        "Monitor and improve the security and performance of the service",
        "Comply with our legal obligations",
      ]} />
      <P>{`We do not:`}</P>
      <UL items={[
        "Sell your data to third parties",
        "Use your project documents or project data to train AI models",
        "Share your data with third parties except as described in this policy",
      ]} />

      <H>4. Legal basis for processing</H>
      <P>{`We process your personal data on the following legal bases under UK GDPR:`}</P>
      <PB lead="Contract performance" text="— processing necessary to provide the service you have subscribed to, including account management, document processing and report generation." />
      <PB lead="Legitimate interests" text="— processing necessary for our legitimate interests in operating and improving Dolemai, including security monitoring, usage analytics and service maintenance, where these interests are not overridden by your rights." />
      <PB lead="Legal obligation" text="— processing necessary to comply with our legal obligations including financial record-keeping and tax compliance." />
      <PB lead="Consent" text="— where we send you marketing communications, we will ask for your consent separately. You may withdraw consent at any time." />

      <H>5. AI processing</H>
      <P>{`Dolemai uses the Anthropic Claude API to process your project documents and generate report content. When you run an analysis or generate a report, your project documents and data are sent to Anthropic's API for processing.`}</P>
      <P>{`Anthropic does not use data submitted through their API to train AI models by default, in accordance with their commercial terms of service. You can review Anthropic's privacy and data handling policies at anthropic.com.`}</P>
      <P>{`Dolemai also uses OpenAI's API to generate embeddings of public UK legislation content. This is used to ground report outputs in relevant regulatory context. No project data, personal data or project documents are sent to OpenAI — only queries against public legislative text.`}</P>
      <P>{`Lapunne Limited does not use your project data, documents or personal data to train artificial intelligence models. Project data submitted through the Dolemai service is used solely to provide the service to you. The Anthropic API used for AI processing does not train on data submitted through their commercial API by default.`}</P>

      <H>6. Data storage and security</H>
      <Sub>Where your data is stored</Sub>
      <P>{`Your account and project data is stored in Supabase, hosted on infrastructure in the European Union. Payment data is processed and stored by Stripe in accordance with their security standards.`}</P>
      <Sub>How long we keep your data</Sub>
      <UL items={[
        "Account data: retained while your account is active and for 12 months after closure",
        "Project data and reports: retained while your project is active and for 12 months after the project is closed or deleted",
        "Billing records: retained for 7 years as required by UK financial regulations",
        "Usage logs: retained for 90 days",
      ]} />
      <Sub>Security measures</Sub>
      <P>{`We implement appropriate technical and organisational measures to protect your data including encrypted data storage, secure API connections, authentication controls and access restrictions. No system is completely secure — if you believe your account has been compromised, contact us immediately at support@dolemai.com.`}</P>

      <H>7. Third parties we use</H>
      <P>{`We share data with the following third parties as necessary to provide the service:`}</P>
      <div className="legal-table">
        <table>
          <thead><tr><th>Provider</th><th>Purpose</th><th>Data shared</th><th>Website</th></tr></thead>
          <tbody>
            <tr><td>Anthropic</td><td>AI document processing</td><td>Project documents, project context</td><td><a href="https://anthropic.com" target="_blank" rel="noopener noreferrer" style={{ color: "#4d8cba", fontWeight: 600 }}>anthropic.com</a></td></tr>
            <tr><td>Supabase</td><td>Database and authentication</td><td>Account and project data</td><td><a href="https://supabase.com" target="_blank" rel="noopener noreferrer" style={{ color: "#4d8cba", fontWeight: 600 }}>supabase.com</a></td></tr>
            <tr><td>Stripe</td><td>Payment processing</td><td>Billing and subscription data</td><td><a href="https://stripe.com" target="_blank" rel="noopener noreferrer" style={{ color: "#4d8cba", fontWeight: 600 }}>stripe.com</a></td></tr>
            <tr><td>Resend</td><td>Email delivery</td><td>Email address, email content</td><td><a href="https://resend.com" target="_blank" rel="noopener noreferrer" style={{ color: "#4d8cba", fontWeight: 600 }}>resend.com</a></td></tr>
            <tr><td>Microsoft (Azure)</td><td>Microsoft 365 integration</td><td>OAuth tokens for folder/email access</td><td><a href="https://microsoft.com" target="_blank" rel="noopener noreferrer" style={{ color: "#4d8cba", fontWeight: 600 }}>microsoft.com</a></td></tr>
            <tr><td>Google</td><td>Authentication (sign-in)</td><td>Email address, name, Google account identifier</td><td><a href="https://google.com" target="_blank" rel="noopener noreferrer" style={{ color: "#4d8cba", fontWeight: 600 }}>google.com</a></td></tr>
            <tr><td>Google</td><td>Cloud storage integration (Google Drive — when connected by user)</td><td>OAuth access token for connected folders only</td><td><a href="https://google.com" target="_blank" rel="noopener noreferrer" style={{ color: "#4d8cba", fontWeight: 600 }}>google.com</a></td></tr>
            <tr><td>Cloudflare</td><td>Hosting and CDN</td><td>Request logs, technical data</td><td><a href="https://cloudflare.com" target="_blank" rel="noopener noreferrer" style={{ color: "#4d8cba", fontWeight: 600 }}>cloudflare.com</a></td></tr>
          </tbody>
        </table>
      </div>
      <P>A full list of our sub-processors with details of their locations and the safeguards in place for international transfers is available at <a href="/sub-processors" style={{ color: "#4d8cba", fontWeight: 600 }}>dolemai.com/sub-processors</a>.</P>
      <P>{`We do not share your data with any other third parties without your consent except where required by law.`}</P>

      <H>8. Microsoft 365 integration</H>
      <P>{`When you connect your Microsoft 365 account to Dolemai, we request permission to access specific SharePoint folders and project email. We use these permissions only to read documents and emails for project analysis as you direct. We do not access any Microsoft 365 data beyond what you explicitly connect.`}</P>
      <P>{`Your Microsoft 365 access tokens are stored securely and used only to access the folders and email accounts you have connected. You can revoke this access at any time by disconnecting your sources in Project Settings or by revoking the Dolemai application in your Microsoft 365 account settings.`}</P>

      <H>9. Google sign-in and Google Drive</H>
      <Sub>Google sign-in</Sub>
      <P>{`When you sign in with Google, we receive your email address, name and Google account identifier from Google. We use this information only to create and manage your Dolemai account.`}</P>
      <Sub>Google Drive integration</Sub>
      <P>{`You may optionally connect a Google Drive folder to a project for document monitoring. When you do, Dolemai requests read-only access to the specific folder you select. We use this access only to read documents for project analysis as you direct. We do not access any Google Drive content beyond the folders you explicitly connect, and we do not access Gmail, Google Calendar or any other Google service.`}</P>
      <P>{`The documents we access are downloaded, processed in memory to extract project intelligence, and then discarded. We do not store your Google Drive documents on our servers. Only the structured intelligence extracted — risks, actions, decisions and changes — is retained.`}</P>
      <P>{`Your Google Drive access tokens are stored securely and used only to access the folders you have connected. You can revoke Dolemai's access to your Google Drive at any time by disconnecting your sources in Project Settings or by revoking the Dolemai application in your Google account settings at myaccount.google.com/permissions.`}</P>

      <H>10. Your rights</H>
      <P>{`Under UK GDPR you have the following rights:`}</P>
      <PB lead="Right of access" text="— you may request a copy of the personal data we hold about you." />
      <PB lead="Right to rectification" text="— you may ask us to correct inaccurate data we hold about you." />
      <PB lead="Right to erasure" text="— you may ask us to delete your personal data. We will comply unless we have a legal obligation to retain it." />
      <PB lead="Right to restriction" text="— you may ask us to restrict processing of your data in certain circumstances." />
      <PB lead="Right to portability" text="— you may request your data in a structured, machine-readable format." />
      <PB lead="Right to object" text="— you may object to processing based on legitimate interests." />
      <PB lead="Right to withdraw consent" text="— where processing is based on consent, you may withdraw it at any time." />
      <P>{`To exercise any of these rights, contact us at support@dolemai.com. We will respond within one month.`}</P>
      <P>{`You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk if you believe we have not handled your data correctly.`}</P>

      <H>11. Cookies</H>
      <P>{`Dolemai uses essential cookies to maintain your login session and provide the service. We do not use advertising cookies or tracking cookies.`}</P>
      <P>{`We may use analytics cookies to understand how the service is used. Where we do, we will ask for your consent via the cookie banner when you first visit.`}</P>
      <P>{`You can manage cookie preferences at any time via the cookie settings link in the footer.`}</P>

      <H>12. Children</H>
      <P>{`Dolemai is a professional service intended for use by adults. We do not knowingly collect data from anyone under the age of 18. If you believe a child has provided us with personal data, contact us at support@dolemai.com and we will delete it.`}</P>

      <H>13. Changes to this policy</H>
      <P>{`We may update this policy from time to time. We will notify you of material changes by email. The current version is always available at dolemai.com/privacy.`}</P>

      <H>14. Contact</H>
      <P>{`If you have any questions about this policy or how we handle your data:`}</P>
      <P>{`Lapunne Limited`}</P>
      <P>{`support@dolemai.com`}</P>
      <P>{`dolemai.com`}</P>
      <P>{`For data protection queries specifically, contact us with the subject line "Data Protection".`}</P>
    </LegalShell>
  );
}
