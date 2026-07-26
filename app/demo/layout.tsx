import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { DemoBanner, DemoTabs } from "@/components/DemoChrome";

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <DemoBanner />
      <div className="container" style={{ padding: "26px 0 72px" }}>
        <DemoTabs />
        <div className="demo-frame">{children}</div>
      </div>
      <Footer />
    </>
  );
}
