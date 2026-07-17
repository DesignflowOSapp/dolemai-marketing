import Link from "next/link";
import Container from "@/components/Container";
import Wordmark from "@/components/Wordmark";
import { paper, fonts, APP_URL } from "@/lib/theme";

const col: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 10 };
const head: React.CSSProperties = { color: paper.ink, fontSize: 13, fontWeight: 600, marginBottom: 2, fontFamily: fonts.mono, textTransform: "uppercase", letterSpacing: "0.05em" };
const fl: React.CSSProperties = { color: paper.inkSoft, textDecoration: "none", fontSize: 14 };

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid " + paper.sandLine, background: paper.paper, marginTop: 8 }}>
      <Container style={{ padding: "56px 32px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 40 }}>
          <div style={{ ...col, maxWidth: 280 }}>
            <Wordmark />
            <p style={{ color: paper.inkSoft, fontSize: 14, lineHeight: 1.5, margin: 0 }}>
              Project intelligence and reporting for construction consultants.
            </p>
          </div>

          <div style={col}>
            <span style={head}>Product</span>
            <Link href="/how-it-works" style={fl}>How it works</Link>
            <Link href="/pricing" style={fl}>Pricing</Link>
            <Link href="/demo" style={fl}>Try demo</Link>
            <a href={APP_URL + "/signup"} style={fl}>Start free</a>
          </div>

          <div style={col}>
            <span style={head}>Legal</span>
            <Link href="/privacy" style={fl}>Privacy policy</Link>
            <Link href="/terms" style={fl}>Terms and conditions</Link>
            <Link href="/cookies" style={fl}>Cookie policy</Link>
            <Link href="/security" style={fl}>Security</Link>
          </div>

          <div style={col}>
            <span style={head}>DesignFlowOS suite</span>
            <a href="https://designflowos.com" style={fl}>Counsel</a>
            <a href="https://designflowos.com" style={fl}>Studio OS</a>
            <a href="https://designflowos.com" style={fl}>Snagflow</a>
            <a href="mailto:support@designflowos.com" style={fl}>support@designflowos.com</a>
          </div>
        </div>

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid " + paper.sandLine, color: paper.inkSoft, fontSize: 13 }}>
          © 2026 Lapunne Limited. Dolemai is part of the DesignFlowOS suite.
        </div>
      </Container>
    </footer>
  );
}
