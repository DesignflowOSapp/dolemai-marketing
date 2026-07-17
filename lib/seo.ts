import type { Metadata } from "next";
import { SITE_URL } from "@/lib/theme";

const OG_IMAGE = SITE_URL + "/og.png";

/** Build per-page metadata: title, description, canonical, OG, robots. */
export function pageMeta(args: {
  title: string;
  description: string;
  path: string; // e.g. "/pricing" or "" for home
}): Metadata {
  const fullTitle =
    args.path === "" || args.path === "/"
      ? "Dolemai — Project intelligence and reporting for construction consultants"
      : args.title + " | Dolemai";
  const url = SITE_URL + (args.path === "/" ? "" : args.path) + "/";
  return {
    title: fullTitle,
    description: args.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description: args.description,
      siteName: "Dolemai",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Dolemai — Know where every project stands." }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: args.description,
      images: [OG_IMAGE],
    },
  };
}
