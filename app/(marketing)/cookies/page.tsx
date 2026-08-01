import { LegalShell, H, P, UL } from "@/components/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Cookie policy",
  description:
    "How Dolemai uses cookies. We use essential cookies to run the service and keep you signed in. We do not use advertising cookies.",
  path: "/cookies",
});

export default function Cookies() {
  return (
    <LegalShell
      title="Cookie policy"
      updated="16 July 2026"
      intro="This policy explains how Dolemai uses cookies and how you can manage them."
    >
      <H>What cookies are</H>
      <P>Cookies are small text files stored on your device by your browser. They let a website remember your actions and preferences over time.</P>

      <H>Essential cookies</H>
      <P>Dolemai uses essential cookies to operate the service — in particular to manage authentication and keep you securely signed in to the app, and to remember your cookie preference on this website. The service will not function correctly without these.</P>
      <UL items={[
        "Authentication and session cookies (set by the Dolemai app when you sign in).",
        "A cookie-consent preference cookie set by this website to remember your choice.",
      ]} />

      <H>Analytics cookies</H>
      <P>This marketing website does not currently use third-party advertising or cross-site tracking cookies. If privacy-respecting analytics are introduced in future, this policy will be updated and, where required, consent will be requested.</P>

      <H>How to manage cookies</H>
      <P>You can control and delete cookies through your browser settings. Blocking essential cookies may prevent you from signing in to the Dolemai app. You can also change your consent choice on this site by clearing this site&apos;s data in your browser.</P>

      <H>Contact</H>
      <P>Questions about our use of cookies can be sent to support@dolemai.com.</P>
    </LegalShell>
  );
}
