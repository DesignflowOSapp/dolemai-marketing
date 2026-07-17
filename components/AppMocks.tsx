/**
 * Static dark app mockups (Project Overview + Registers) styled with the
 * .app-shell / .app-card classes. Illustrative, JCT-consistent Riverside Works
 * content — no data fetching.
 */

function Sidebar({ active }: { active: string }) {
  const items = ["Dashboard", "Riverside Works", "Reports", "Registers", "Settings"];
  return (
    <div className="app-sidebar">
      <div className="brand"><span className="brand-dot" />Dolemai</div>
      {items.map((it) => (
        <div key={it} className={"app-nav-item" + (it === active ? " active" : "")}>{it}</div>
      ))}
    </div>
  );
}

export function MockOverview() {
  return (
    <div className="app-shell">
      <Sidebar active="Riverside Works" />
      <div className="app-main">
        <div className="app-header">
          <h2>Riverside Works</h2>
          <span className="sub">Construction stage · JCT SBC/Q</span>
        </div>
        <div className="app-status-row">
          <span className="dot" />Monitoring SharePoint — 3 new documents this cycle
        </div>
        <div className="app-grid">
          <div className="app-card">
            <div className="label">Key changes this period</div>
            <div className="headline">3 movements</div>
            <div className="detail">Steelwork saving confirmed · MEP cost increase · programme delay</div>
          </div>
          <div className="app-card">
            <div className="label">Decisions required</div>
            <div className="headline">4 pending</div>
            <div className="detail">2 client · 1 consultant · 1 PM</div>
            <span className="badge badge-amber">2 due this week</span>
          </div>
          <div className="app-card">
            <div className="label">Cost position</div>
            <div className="headline">−£104k</div>
            <div className="detail">Favourable, against approved budget</div>
            <span className="badge badge-green">Within budget</span>
          </div>
          <div className="app-card">
            <div className="label">Programme</div>
            <div className="headline">+11 days</div>
            <div className="detail">DNO redesign on critical path · recovery under review</div>
          </div>
          <div className="app-card">
            <div className="label">Risks &amp; issues</div>
            <div className="row"><span>Open</span><span>3</span></div>
            <div className="row"><span>Critical</span><span className="flag-red">1</span></div>
            <div className="row"><span>High</span><span className="flag-amber">1</span></div>
          </div>
          <div className="app-card">
            <div className="label">Change control</div>
            <div className="row"><span>Agreed this period</span><span>−£142k</span></div>
            <div className="row"><span>Anticipated</span><span className="flag-amber">+£38k</span></div>
            <span className="badge badge-red">VAR-009 — decision required</span>
          </div>
          <div className="app-card">
            <div className="label">Information required</div>
            <div className="detail">7 open items · DNO connection date · revised structural calcs</div>
          </div>
          <div className="app-card">
            <div className="label">Commercial position</div>
            <div className="headline">On track</div>
            <div className="detail">No unclaimed scope against appointment</div>
            <span className="badge badge-green">Within fee</span>
          </div>
          <div className="app-card">
            <div className="label">Report draft</div>
            <div className="headline">Ready for review</div>
            <div className="detail">Monthly client report · generated Fri</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MockRegisters() {
  const rows = [
    { ref: "RSK-004", d: "Ground conditions uncertain", badge: "badge-red", tag: "Critical" },
    { ref: "RSK-007", d: "DNO connection delay (VAR-009)", badge: "badge-amber", tag: "High" },
    { ref: "DEC-005", d: "Programme recovery proposals", badge: "badge-amber", tag: "Required" },
    { ref: "VAR-006", d: "Steelwork value engineering", badge: "badge-green", tag: "Agreed" },
    { ref: "INF-003", d: "DNO connection date", badge: "", tag: "Open" },
  ];
  return (
    <div className="app-shell">
      <Sidebar active="Registers" />
      <div className="app-main">
        <div className="app-header">
          <h2>Registers</h2>
          <span className="sub">Riverside Works · reviewed &amp; sourced</span>
        </div>
        <div className="app-status-row">
          <span className="dot" />Risks · Decisions · Actions · Information · Changes
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {rows.map((r) => (
            <div key={r.ref} className="app-card" style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, color: "#8FC5E8", minWidth: 58 }}>{r.ref}</span>
              <span style={{ fontSize: 12, color: "#F2F1ED", flex: 1 }}>{r.d}</span>
              {r.tag && <span className={"badge " + (r.badge || "badge-green")} style={{ marginTop: 0 }}>{r.tag}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
