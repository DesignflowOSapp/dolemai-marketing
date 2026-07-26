/**
 * Dolemai design system — warm/paper (rebuilt from the design-foundation HTML).
 * Georgia serif headings, Inter body, SFMono labels.
 *
 * TWO palettes:
 *  - `colors` — DARK app palette. Used only by the /demo app mockup (must stay dark).
 *  - `paper`  — WARM marketing palette. Marketing files use it (some as `paper as colors`).
 */

// Dark app-mockup palette (demo only) — unchanged.
export const colors = {
  bg: "#08090C",
  card: "#111418",
  cardAlt: "#121521",
  border: "#23262C",
  accent: "#5BA8D9",
  accentDim: "#3E7CA6",
  text: "#F2F1ED",
  muted: "#8B8F96",
  red: "#E5736A",
  amber: "#E0A748",
  green: "#5CB87A",
} as const;

// Warm marketing palette.
export const paper = {
  // semantic (aliasable as `colors`)
  bg: "#f6f1e8",
  card: "#ffffff",
  cardAlt: "#fbf8f2",
  border: "#d8c7a8",
  accent: "#4d8cba",
  accentDim: "#183149",
  text: "#183149",   // ink (primary/heading text)
  muted: "#536472",  // body/secondary text
  red: "#dc6a61",
  amber: "#dba43a",
  green: "#59c27a",
  // named tokens
  paper: "#f6f1e8",
  paperWarm: "#fbf8f2",
  ink: "#183149",
  ink2: "#28465f",
  inkSoft: "#28465f",
  bodyText: "#536472",
  dark: "#122a40",
  dark2: "#0d2234",
  sky: "#69a8d6",
  sky2: "#8fc1e4",
  kicker: "#4d8cba",
  line: "#d8c7a8",
  muted2: "#85919a",
  white: "#ffffff",
  // back-compat aliases (older files)
  signal: "#69a8d6",
  signalDeep: "#4d8cba",
  sand: "#d8c7a8",
  sandLine: "#d8c7a8",
  oceanDeep: "#183149",
} as const;

export const fonts = {
  display: 'Georgia, "Times New Roman", serif',
  body: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  mono: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
} as const;

export const font = fonts.body;

export const layout = { maxWidth: 1180, pad: 20 } as const;

/** Primary CTA — ink fill, white text. */
export const btnPrimary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 54,
  padding: "0 24px",
  borderRadius: 10,
  border: "1px solid transparent",
  background: paper.ink,
  color: "#fff",
  fontWeight: 750,
  textDecoration: "none",
  cursor: "pointer",
  boxShadow: "0 12px 30px rgba(24,49,73,.16)",
};

/** Secondary CTA — outlined on paper. */
export const btnOutline: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 54,
  padding: "0 24px",
  borderRadius: 10,
  border: "1px solid " + paper.line,
  background: "rgba(255,255,255,.35)",
  color: paper.ink,
  fontWeight: 750,
  textDecoration: "none",
  cursor: "pointer",
};

export const APP_URL = "https://app.dolemai.com";
export const SITE_URL = "https://dolemai.com";
