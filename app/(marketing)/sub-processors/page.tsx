import { LegalShell, H, P } from "@/components/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sub-processors",
  description:
    "The third-party sub-processors Lapunne Limited (trading as Dolemai) uses to provide the Dolemai service, their purpose, location and international transfer safeguards.",
  path: "/sub-processors",
});

const rows: { name: string; purpose: string; location: string; site: string }[] = [
  { name: "Supabase Inc", purpose: "Database hosting and user authentication", location: "European Union (West Europe)", site: "supabase.com" },
  { name: "Anthropic PBC", purpose: "AI processing of project documents to extract project intelligence", location: "United States", site: "anthropic.com" },
  { name: "Cloudflare Inc", purpose: "Application hosting, content delivery and security", location: "United States / Global", site: "cloudflare.com" },
  { name: "Stripe Inc", purpose: "Payment processing and subscription management", location: "United States", site: "stripe.com" },
  { name: "Resend Inc", purpose: "Transactional email delivery", location: "United States", site: "resend.com" },
  { name: "Microsoft Corporation", purpose: "Microsoft 365 integration — SharePoint, OneDrive and Outlook (only where connected by Customer)", location: "United States / Global", site: "microsoft.com" },
  { name: "Google LLC", purpose: "Google Drive integration and Google sign-in (only where used by Customer)", location: "United States / Global", site: "google.com" },
];

export default function SubProcessors() {
  return (
    <LegalShell
      title="Sub-processors"
      updated="August 2026"
      intro="Lapunne Limited (trading as Dolemai) uses the following third-party sub-processors to provide the Dolemai service. All sub-processors are bound by data processing obligations equivalent to those in our Data Processing Agreement."
    >
      <P>{`We will notify customers of any changes to this list at least 30 days before they take effect.`}</P>

      <div className="legal-table">
        <table>
          <thead>
            <tr>
              <th>Sub-processor</th><th>Purpose</th><th>Location</th><th>Website</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name}>
                <td>{r.name}</td>
                <td>{r.purpose}</td>
                <td>{r.location}</td>
                <td><a href={"https://" + r.site} target="_blank" rel="noopener noreferrer" style={{ color: "#4d8cba", fontWeight: 600 }}>{r.site}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H>International transfers</H>
      <P>{`Some sub-processors listed above are located in the United States. Transfers of personal data to these sub-processors are protected by the UK International Data Transfer Addendum to the EU Standard Contractual Clauses (UK IDTA) or equivalent transfer mechanisms.`}</P>

      <H>Questions</H>
      <P>{`For questions about our sub-processors or data transfers, contact privacy@dolemai.com.`}</P>
    </LegalShell>
  );
}
