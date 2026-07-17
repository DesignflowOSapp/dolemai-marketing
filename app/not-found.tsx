import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { paper as colors, btnPrimary } from "@/lib/theme";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <Container style={{ minHeight: "58vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px" }}>
          <div>
            <div style={{ color: colors.accent, fontSize: 56, fontWeight: 800, letterSpacing: "-0.03em" }}>404</div>
            <h1 style={{ color: colors.text, fontSize: 28, margin: "12px 0 10px" }}>Page not found.</h1>
            <p style={{ color: colors.muted, fontSize: 16, margin: "0 auto 26px", maxWidth: 440 }}>
              The page you are looking for does not exist or has moved.
            </p>
            <Link href="/" style={{ ...btnPrimary, padding: "12px 22px", fontSize: 15 }}>Go to homepage →</Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
