"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { colors } from "@/lib/theme";

export default function DemoIndex() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/demo/overview");
  }, [router]);
  return (
    <p style={{ color: colors.muted, fontSize: 15 }}>
      Loading demo… <a href="/demo/overview" style={{ color: colors.accent }}>Open project overview →</a>
    </p>
  );
}
