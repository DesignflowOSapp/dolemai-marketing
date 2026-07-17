/**
 * Hardcoded, anonymised demo project data — "Riverside Works".
 * Powers the read-only /demo experience. No Supabase, no auth, no API.
 */
export const demoProject = {
  name: "Riverside Works",
  client: "Hembury Developments",
  stage: "Construction stage",
  role: "Employer's Agent",
  contract: "JCT Standard Building Contract with Quantities (SBC/Q)",
  contractor: "Meridian Construction Ltd",
  contractSum: "£2,850,000",
  approvedBudget: "£2,950,000",
  startOnSite: "3 March 2026",
  contractCompletion: "14 November 2026",
  status: "Attention required",
  lastUpdated: "Today at 09:30",
};

export const demoMetrics = [
  { label: "Cost position", value: "−£104k", note: "Favourable, against approved budget", rag: "green" as const },
  { label: "Programme position", value: "+11 days", note: "Behind plan", rag: "amber" as const },
  { label: "Key risks", value: "3", note: "1 critical", rag: "red" as const },
  { label: "Decisions required", value: "4", note: "2 due this month", rag: "amber" as const },
  { label: "Information required", value: "7", note: "Open items", rag: "muted" as const },
];

export const demoMovements = [
  {
    title: "Steelwork package awarded",
    body: "Confirmed saving of £142k against package allowance.",
    rag: "green" as const,
  },
  {
    title: "MEP coordination cost increase",
    body: "Additional £38k anticipated for acoustic enclosure works.",
    rag: "amber" as const,
  },
  {
    title: "Programme delay increased",
    body: "Weather impact and late information from utility provider.",
    rag: "amber" as const,
  },
];

export const demoRegisterCounts = [
  { label: "Risks", count: 3 },
  { label: "Decisions", count: 4 },
  { label: "Actions", count: 5 },
  { label: "Information required", count: 7 },
  { label: "Construction changes", count: 3 },
];

export const demoRisks = [
  {
    ref: "RSK-004",
    description: "Ground conditions uncertain — potential programme and cost impact",
    severity: "Critical" as const,
    owner: "Employer's Agent",
    source: "Site investigation report r2.pdf",
    status: "Open",
  },
  {
    ref: "RSK-007",
    description: "DNO connection delay — VAR-009 on critical path, no PM decision issued",
    severity: "High" as const,
    owner: "Project Manager",
    source: "Utilities coordination report.pdf",
    status: "Open",
  },
  {
    ref: "RSK-011",
    description: "Stage 4 consultant appointments unagreed — scope and budget not confirmed",
    severity: "Significant" as const,
    owner: "Employer's Agent",
    source: "Fee proposal thread (email)",
    status: "Open",
  },
];

export const demoDecisions = [
  {
    ref: "DEC-002",
    description: "Select preferred ground floor layout option — Architect awaiting client instruction",
    owner: "Client",
    due: "—",
    source: "Design options pack.pdf",
    status: "Required" as const,
  },
  {
    ref: "DEC-005",
    description: "Confirm contractor's programme recovery proposals — PM decision required by 28 Jul 2026",
    owner: "Project Manager",
    due: "28 Jul 2026",
    source: "Programme rev C.pdf",
    status: "Required" as const,
  },
  {
    ref: "DEC-006",
    description: "Approve revised MEP coordination strategy",
    owner: "Lead Consultant",
    due: "—",
    source: "MEP coordination note.pdf",
    status: "Required" as const,
  },
  {
    ref: "DEC-007",
    description: "Confirm BCO inspection schedule",
    owner: "Employer's Agent",
    due: "—",
    source: "Building control correspondence",
    status: "Required" as const,
  },
];

export const demoActions = [
  { ref: "ACT-010", description: "Issue instruction confirming steelwork package savings", owner: "Employer's Agent", due: "22 Jul 2026", source: "variation-schedule.xlsx" },
  { ref: "ACT-012", description: "Circulate updated coordination model to design team", owner: "Lead Consultant", due: "24 Jul 2026", source: "MEP coordination note.pdf" },
  { ref: "ACT-013", description: "Request revised programme narrative from contractor", owner: "Project Manager", due: "25 Jul 2026", source: "Progress meeting 08 minutes.docx" },
  { ref: "ACT-015", description: "Confirm DNO application status with utility provider", owner: "Project Manager", due: "26 Jul 2026", source: "Utilities coordination report.pdf" },
  { ref: "ACT-018", description: "Prepare client paper on ground conditions risk", owner: "Employer's Agent", due: "29 Jul 2026", source: "Site investigation report r2.pdf" },
];

export const demoInfoRequired = [
  { ref: "INF-003", description: "Confirmed utility connection date from DNO", owner: "Utility provider", source: "Utilities coordination report.pdf" },
  { ref: "INF-004", description: "Revised structural calculations for ground floor slab", owner: "Structural Engineer", source: "Design information register.pdf" },
  { ref: "INF-006", description: "Contractor's method statement for piling", owner: "Meridian Construction Ltd", source: "Progress meeting 08 minutes.docx" },
  { ref: "INF-008", description: "MEP builder's work information for setting out", owner: "MEP Consultant", source: "MEP coordination note.pdf" },
  { ref: "INF-009", description: "Client decision on ground floor layout (see DEC-002)", owner: "Client", source: "Design options pack.pdf" },
  { ref: "INF-011", description: "Fire strategy sign-off for revised layout", owner: "Fire Engineer", source: "Fire strategy rev B.pdf" },
  { ref: "INF-012", description: "Updated cost plan reflecting steelwork savings", owner: "Cost Consultant", source: "cost-report-jul-2026.xlsx" },
];

export const demoConstructionChanges = [
  {
    ref: "VAR-006",
    description: "Steelwork package — value engineering saving",
    status: "Agreed",
    valueAgreed: "-£142,000",
    valueAnticipated: "—",
    dateRaised: "2 Jul 2026",
    source: "variation-schedule.xlsx",
  },
  {
    ref: "VAR-009",
    description: "DNO connection redesign — critical path, time and cost to be assessed",
    status: "Under assessment",
    valueAgreed: "—",
    valueAnticipated: "To be assessed",
    dateRaised: "9 Jul 2026",
    source: "variation-schedule.xlsx",
  },
  {
    ref: "VAR-010",
    description: "MEP acoustic enclosure works — additional builder's work",
    status: "Under assessment",
    valueAgreed: "—",
    valueAnticipated: "+£38,000",
    dateRaised: "11 Jul 2026",
    source: "variation-schedule.xlsx",
  },
];

export const demoReport = {
  title: "Monthly report — Jul 2026",
  subtitle: "Monthly report draft ready for professional review.",
  status: "Draft" as const,
  period: "1 Jul 2026 – 16 Jul 2026",
  clientSections: [
    "Overall position", "Movements this period", "Top risks", "Decisions required", "Look-ahead and recommendation",
  ],
  internalSections: [
    "Key activities", "Blockers", "Risks and issues (full detail)", "Movement this period", "Actions",
  ],
};
