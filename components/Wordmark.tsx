import Link from "next/link";
import { paper, fonts } from "@/lib/theme";

/** Marketing wordmark — Fraunces, ocean-deep, with a signal-blue dot. */
export default function Wordmark({ size = 22 }: { size?: number }) {
  return (
    <Link
      href="/"
      style={{
        fontFamily: fonts.display,
        fontWeight: 600,
        fontSize: size,
        letterSpacing: "-0.01em",
        color: paper.oceanDeep,
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          background: paper.signal,
          borderRadius: "50%",
          marginRight: 9,
          display: "inline-block",
        }}
      />
      Dolemai
    </Link>
  );
}
