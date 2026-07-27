import type { Metadata } from "next";
import Container from "@/components/Container";
import HeroDemoAnimation from "@/components/HeroDemoAnimation";

export const metadata: Metadata = {
  title: "Animation 1 preview | Dolemai",
  robots: { index: false, follow: false },
};

export default function DemoAnimation1() {
  return (
    <Container style={{ padding: "64px 0 96px", textAlign: "center" }}>
      <h1 style={{ fontSize: "1.6rem", margin: 0 }}>Animation 1 preview — Hero replacement</h1>
      <p style={{ color: "#536472", margin: "10px 0 36px" }}>For review only — not live on the site yet.</p>
      <HeroDemoAnimation />
    </Container>
  );
}
