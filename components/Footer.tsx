import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { APP_URL } from "@/lib/theme";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(165px, 1fr))" }}>
          <div className="footer-brand">
            <Wordmark />
            <p style={{ marginTop: 12 }}>
              Continuous project intelligence and reporting for construction consultants.
            </p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/demo/overview">Try demo</Link>
            <a href={APP_URL + "/projects/new"}>Start your first project</a>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/security">Security</Link>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <Link href="/support">Support</Link>
            <Link href="/support">FAQ</Link>
            <a href="mailto:support@designflowos.com">Contact</a>
          </div>

          <div className="footer-col">
            <h4>Part of the DesignFlowOS suite</h4>
            <a href="https://designflowos.com">DesignFlowOS</a>
            <a href="https://counsel.designflowos.com">Counsel</a>
            <a href="https://studio.designflowos.com">Studio OS</a>
            <a href="https://snagflow.designflowos.com">Snagflow</a>
            <a href="https://dfai.designflowos.com">DesignFlow AI</a>
          </div>
        </div>

        <div className="copyright">
          © 2026 Lapunne Limited. Dolemai is part of the DesignFlowOS suite.
        </div>
      </div>
    </footer>
  );
}
