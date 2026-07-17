/**
 * Dolemai design system tokens.
 *
 * TWO palettes:
 *  - `colors`  — DARK app palette. Used by the /demo experience and the embedded
 *                dark app mockups. DO NOT change: the demo must stay dark.
 *  - `paper`   — WARM marketing palette (new design direction). Marketing pages
 *                import it, most as `paper as colors`, so bodies keep the same
 *                semantic keys (text, muted, card, border, accent, bg, ...).
 */

// ---- Dark app palette (demo + mockups) ----
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

// ---- Warm marketing palette (aliased as `colors` in marketing files) ----
export const paper = {
  // semantic keys (mirror `colors` so `paper as colors` just works)
  bg: "#FBF8F2",
  card: "#ffffff",
  cardAlt: "#F5F0E6",
  border: "#E4D9C3",
  accent: "#3D86B4",     // signal-deep — links / emphasis on paper
  accentDim: "#0F2A3F",
  text: "#1C2B33",       // ink
  muted: "#4A5A63",      // ink-soft
  red: "#B4483C",
  amber: "#B8863A",
  green: "#3F7A5C",
  // named tokens for new components
  paper: "#FBF8F2",
  paperWarm: "#F5F0E6",
  ink: "#1C2B33",
  inkSoft: "#4A5A63",
  oceanDeep: "#0F2A3F",
  ocean: "#13405C",
  signal: "#5BA8D9",
  signalDeep: "#3D86B4",
  sand: "#D8C5A6",
  sandLine: "#E4D9C3",
  white: "#ffffff",
} as const;

export const fonts = {
  display: "'Fraunces', Georgia, 'Times New Roman', serif",
  body: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
} as const;

// Back-compat: some files import `font`.
export const font = fonts.body;

export const layout = {
  maxWidth: 1120,
  pad: 32,
} as const;

/** Primary CTA — solid ocean-deep on paper. */
export const btnPrimary: React.CSSProperties = {
  display: "inline-block",
  background: paper.oceanDeep,
  color: paper.paper,
  fontWeight: 600,
  fontSize: 15,
  borderRadius: 4,
  padding: "14px 26px",
  border: "1px solid " + paper.oceanDeep,
  textDecoration: "none",
  cursor: "pointer",
  lineHeight: 1.2,
};

/** Secondary CTA — outlined on paper. */
export const btnOutline: React.CSSProperties = {
  display: "inline-block",
  background: "transparent",
  color: paper.oceanDeep,
  fontWeight: 600,
  fontSize: 14,
  borderRadius: 4,
  padding: "13px 24px",
  border: "1px solid " + paper.sand,
  textDecoration: "none",
  cursor: "pointer",
  lineHeight: 1.2,
};

export const APP_URL = "https://app.dolemai.com";
export const SITE_URL = "https://dolemai.com";
