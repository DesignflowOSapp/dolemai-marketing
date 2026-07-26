import Link from "next/link";

/** Serif brand wordmark with the signal dot. */
export default function Wordmark({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="brand" aria-label="Dolemai home">
      <span className="brand-dot" />
      <span>Dolemai</span>
    </Link>
  );
}
