import { DemoBanner, DemoNav } from "@/components/DemoChrome";
import { colors } from "@/lib/theme";

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DemoBanner />
      <div className="dm-demo-shell" style={{ minHeight: "100vh" }}>
        <DemoNav />
        <div style={{ background: colors.bg }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "24px 24px 64px", width: "100%", boxSizing: "border-box" }}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
