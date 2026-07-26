"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_URL } from "@/lib/theme";

export function DemoBanner() {
  return (
    <div className="demo-banner">
      <div className="demo-banner-inner">
        <span><b>You are viewing a demo project.</b> No real data here.</span>
        <a href={APP_URL + "/signup"}>Start your own project →</a>
      </div>
    </div>
  );
}

const tabs = [
  { href: "/demo/overview", label: "Project Overview" },
  { href: "/demo/registers", label: "Registers" },
  { href: "/demo/reports", label: "Reports" },
];

export function DemoTabs() {
  const path = usePathname();
  return (
    <div className="demo-tabs">
      {tabs.map((t) => (
        <Link key={t.href} href={t.href} className={"demo-tab" + (path === t.href ? " on" : "")}>
          {t.label}
        </Link>
      ))}
    </div>
  );
}
