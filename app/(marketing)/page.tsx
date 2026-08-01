import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroDemoAnimation from "@/components/HeroDemoAnimation";
import AskDemoAnimation from "@/components/AskDemoAnimation";
import { APP_URL } from "@/lib/theme";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Dolemai — Know what changed before anyone asks",
  description:
    "Dolemai continuously monitors your project documents, emails and updates so construction consultants always know what changed, what needs attention and what their client needs to hear.",
  path: "/",
});

const engineSteps: { t: string; accent?: boolean }[] = [
  { t: "Email arrives in project inbox" },
  { t: "Meeting minutes uploaded to SharePoint" },
  { t: "Programme revised by contractor" },
  { t: "QS uploads updated valuation" },
  { t: "Dolemai reviews everything", accent: true },
  { t: "Risk register updates" },
  { t: "Project position refreshes", accent: true },
  { t: "Weekly briefing updates automatically" },
  { t: "Monthly report reflects latest position" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Continuous project intelligence for construction consultants</div>
            <h1>Know what changed before anyone asks.</h1>
            <p className="hero-copy">
              Connect the folders and inboxes where your projects already live. Dolemai continuously
              reviews new documents, emails and updates, then shows you what moved, what needs
              attention and what your client needs to hear.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={APP_URL + "/projects/new"}>Start monitoring your first project</a>
              <a className="btn btn-secondary" href="#how-it-works">See Dolemai in action</a>
            </div>
            <p className="trust-line">
              {`Built for project managers, Employer's Agents, Contract Administrators and architects managing live UK construction projects.`}
            </p>
          </div>

          <div className="hero-visual" aria-label="Dolemai product overview animation">
            <HeroDemoAnimation />
          </div>
        </div>
      </section>

      {/* Logo strip */}
      <div className="logo-strip">
        <div className="container logo-grid">
          <span>SHAREPOINT</span><span>ONEDRIVE</span><span>OUTLOOK</span><span>MICROSOFT 365</span><span>GOOGLE DRIVE</span>
        </div>
      </div>

      {/* Pain — moved above How it works */}
      <section className="pain">
        <div className="container pain-grid">
          <div>
            <div className="section-kicker">The real problem</div>
            <div className="pain-quote">Every week starts with detective work.</div>
          </div>
          <div className="pain-list">
            <div className="pain-item"><span>01</span><div>New documents land in SharePoint, but no one tells you what materially changed.</div></div>
            <div className="pain-item"><span>02</span><div>Meeting minutes, emails, risk registers and programmes hold different versions of the project story.</div></div>
            <div className="pain-item"><span>03</span><div>Actions become overdue quietly, decisions drift and missing information only becomes visible when it starts affecting delivery.</div></div>
            <div className="pain-item"><span>04</span><div>Before every client update, the PM has to rebuild the position again.</div></div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">How it works</div>
            <h2>Connect once. Stay current continuously.</h2>
            <p className="section-lead">
              Dolemai works with the project information your team already creates. No new project
              administration system, no duplicate data entry and no need to start every report from a
              blank page.
            </p>
          </div>
          <div className="workflow-grid">
            <article className="step">
              <div className="step-num">01 / Connect</div>
              <h3>Add the project sources.</h3>
              <p>Connect SharePoint, OneDrive, Outlook or Google Drive. Dolemai starts monitoring your project documents and emails immediately.</p>
            </article>
            <article className="step">
              <div className="step-num">02 / Review</div>
              <h3>Dolemai watches what changes.</h3>
              <p>New emails, reports, minutes, programmes, risks and change records are reviewed as they arrive.</p>
            </article>
            <article className="step">
              <div className="step-num">03 / Understand</div>
              <h3>Your project position updates.</h3>
              <p>See movements, decisions, risks, actions, programme pressure, commercial changes and missing information.</p>
            </article>
            <article className="step">
              <div className="step-num">04 / Report</div>
              <h3>Briefings are prepared for review.</h3>
              <p>Weekly and monthly client and internal reports are drafted from the same reviewed project intelligence.</p>
            </article>
          </div>
        </div>
      </section>

      {/* What Dolemai monitors (dark) */}
      <section className="dark-section">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">What Dolemai monitors</div>
            <h2>Your projects never stop moving. Neither should your understanding of them.</h2>
            <p className="section-lead">
              Dolemai is designed around the questions a project manager needs answered before a
              client, contractor or project board asks.
            </p>
          </div>
          <div className="monitor-grid">
            <article className="monitor-card">
              <h3>What changed?</h3>
              <p>Track movement since the last review period.</p>
              <ul>
                <li>New documents and revised information</li>
                <li>Programme movement and milestone slippage</li>
                <li>New or escalated risks and issues</li>
                <li>New instructions, changes and potential claims</li>
              </ul>
            </article>
            <article className="monitor-card">
              <h3>What needs attention?</h3>
              <p>Surface the items most likely to affect delivery.</p>
              <ul>
                <li>Overdue actions and accountable parties</li>
                <li>Decisions required from the client or team</li>
                <li>Missing information and conflicting records</li>
                <li>Consultant responses and coordination blockers</li>
              </ul>
            </article>
            <article className="monitor-card">
              <h3>What does the client need to hear?</h3>
              <p>Turn the detailed project position into a clear outward message.</p>
              <ul>
                <li>Overall project status</li>
                <li>Principal risks and mitigation</li>
                <li>Programme and commercial headlines</li>
                <li>Decisions, recommendations and look-ahead</li>
              </ul>
            </article>
            <article className="monitor-card">
              <h3>What does the team need to do?</h3>
              <p>Keep the internal delivery position aligned with the client message.</p>
              <ul>
                <li>Full action and issue detail</li>
                <li>Consultant coordination matters</li>
                <li>Contract-administration items</li>
                <li>Priorities before the next reporting cycle</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Scheduled intelligence */}
      <section id="outputs">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">Scheduled intelligence</div>
            <h2>Useful updates, not another dashboard to remember.</h2>
            <p className="section-lead">
              Dolemai can run on the reporting rhythm of the project and prepare the right level of
              information for the right audience.
            </p>
          </div>
          <div className="output-grid">
            <article className="output-card">
              <div className="output-tag">On demand</div>
              <h3>Project brief</h3>
              <p>Open Dolemai at any time and immediately see what changed since you last looked. Run a refresh whenever you need the latest position.</p>
              <ul>
                <li>New movements</li>
                <li>Priority actions</li>
                <li>Decisions due</li>
                <li>Information gaps</li>
              </ul>
            </article>
            <article className="output-card">
              <div className="output-tag">Weekly</div>
              <h3>Client and team status</h3>
              <p>Two report versions prepared from one approved project position.</p>
              <ul>
                <li>Client-facing weekly update</li>
                <li>Internal action and delivery report</li>
                <li>Look-ahead and blockers</li>
                <li>Source-linked evidence</li>
              </ul>
            </article>
            <article className="output-card">
              <div className="output-tag">Monthly</div>
              <h3>Formal project report</h3>
              <p>A structured monthly report showing the position and what moved during the period.</p>
              <ul>
                <li>Executive summary</li>
                <li>Programme, cost and change</li>
                <li>Risk and compliance</li>
                <li>Client decisions and recommendations</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* The engine */}
      <section>
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">Always on</div>
            <h2>Your projects never stop moving. Neither does Dolemai.</h2>
            <p className="section-lead">
              Dolemai continuously reviews new documents, emails and updates as they arrive. Your
              project position updates automatically — so by the time you open the app, it already
              knows what changed.
            </p>
          </div>
          <div className="engine-timeline">
            {engineSteps.map((s, i) => (
              <Reveal key={s.t} delay={i * 70}>
                <div className={"engine-item" + (s.accent ? " accent" : "")}>{s.t}</div>
              </Reveal>
            ))}
          </div>
          <Reveal><div className="engine-foot">Connect once. Stay current continuously.</div></Reveal>
        </div>
      </section>

      {/* Monday morning */}
      <section className="pain">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">What you see when you open Dolemai</div>
            <h2>What has happened since Friday?</h2>
            <p className="section-lead">
              {`Eight live projects. Three client meetings. Before you've had coffee, Dolemai already knows.`}
            </p>
          </div>
          <div className="mday-grid">
            <Reveal>
              <article className="mday-card">
                <h3>Dragonfly House <span>🟢</span></h3>
                <ul>
                  <li>Three consultant responses received</li>
                  <li>Programme slipped four days</li>
                  <li>One client decision overdue</li>
                  <li>Risk register updated</li>
                  <li className="link">Weekly briefing ready →</li>
                </ul>
              </article>
            </Reveal>
            <Reveal delay={100}>
              <article className="mday-card">
                <h3>Buckingham Palace <span>🟠</span></h3>
                <ul>
                  <li>New contractor instruction received</li>
                  <li>MEP coordination issue identified</li>
                  <li>Programme recovery required</li>
                  <li className="link">Monthly report ready →</li>
                </ul>
              </article>
            </Reveal>
          </div>
          <Reveal><div className="mday-foot">Every project. Every morning. Already reviewed.</div></Reveal>
        </div>
      </section>

      {/* Two registers */}
      <section>
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">A genuine differentiator</div>
            <h2>Your appointment and the construction contract are not the same thing.</h2>
            <p className="section-lead">
              {`Most tools track one. Dolemai tracks both separately — because scope creep against your own fee is a different problem from variations under the contractor's contract.`}
            </p>
          </div>
          <div className="tworeg-grid">
            <Reveal>
              <div className="tworeg-col">
                <h3>Your appointment</h3>
                <p>Changes to your scope, fee and services. Identified as they happen, not discovered at the end of the project when it is too late to recover the fee.</p>
                <ul>
                  <li>Fee variations and scope additions</li>
                  <li>Notice periods and obligations</li>
                  <li>Appointment change log with evidence trail</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="tworeg-col">
                <h3>Construction contract</h3>
                <p>Compensation events, variations and instructions under the JCT or NEC contract with the contractor. Tracked separately from your own appointment.</p>
                <ul>
                  <li>Compensation events and variations</li>
                  <li>Contractor instructions</li>
                  <li>Contract change register</li>
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal><div className="tworeg-foot">Both registers. One place. The evidence trail your PI insurer will thank you for.</div></Reveal>
        </div>
      </section>

      {/* Ask Dolemai */}
      <section className="pain">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">Project intelligence on demand</div>
            <h2>Ask Dolemai anything about your project.</h2>
            <p className="section-lead">
              Every risk, action, decision, change and movement is stored and searchable. Ask a
              question in plain English and get a structured answer grounded in your actual project
              data.
            </p>
          </div>
          <Reveal>
            <AskDemoAnimation />
          </Reveal>
          <Reveal><div className="ask-foot">No digging through folders. No reading minutes. Just ask.</div></Reveal>
        </div>
      </section>

      {/* Who it is for */}
      <section id="who">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">Built for the person holding the project position</div>
            <h2>Designed around project management responsibility.</h2>
          </div>
          <div className="who-grid">
            <article className="persona-main">
              <h3>{`Project Managers and Employer's Agents`}</h3>
              <p>
                Maintain a current view of delivery, decisions, risk, programme, coordination and
                change across one or multiple live projects. Spend less time reconstructing what
                happened and more time acting on it.
              </p>
              <a className="btn btn-light" href={APP_URL + "/projects/new"}>Start your first project</a>
            </article>
            <div className="persona-side">
              <article>
                <h3>Contract Administrators</h3>
                <p>Keep instructions, change, decisions, site issues and formal records connected to the current reporting position.</p>
              </article>
              <article>
                <h3>Architects and Lead Consultants</h3>
                <p>Track design coordination, consultant actions, statutory matters and client decisions without manually reviewing every thread and document.</p>
              </article>
              <article>
                <h3>Independent consultants and small practices</h3>
                <p>Gain structured project controls and reporting support without building a large project support team.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section id="trust" className="trust">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">Professional control retained</div>
            <h2>Built to support judgement, not replace it.</h2>
          </div>
          <div className="trust-grid">
            <article className="trust-item">
              <h3>Source-linked</h3>
              <p>Every identified risk, action, decision and change can retain a reference to the source that produced it.</p>
            </article>
            <article className="trust-item">
              <h3>Review-first</h3>
              <p>Nothing is issued automatically. You review, amend and approve what goes out in your name.</p>
            </article>
            <article className="trust-item">
              <h3>Privacy-led</h3>
              <p>Project information is handled as working project data, not as material for public model training.</p>
            </article>
            <article className="trust-item">
              <h3>UK AEC-aware</h3>
              <p>Designed around UK construction workflows, including JCT, NEC, RIBA stages, CDM and Building Safety Act responsibilities.</p>
            </article>
          </div>
        </div>
      </section>

      {/* For UK construction consultants — AI discovery */}
      <section>
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">FOR UK CONSTRUCTION CONSULTANTS</div>
            <h2>Built specifically for UK construction project delivery.</h2>
          </div>
          <div className="tworeg-grid">
            <div className="tworeg-col">
              <h3>Who uses Dolemai</h3>
              <p>{`Dolemai is used by Project Managers, Employer's Agents, Contract Administrators, Architects and Quantity Surveyors managing live UK construction projects. It is designed around the responsibilities of the client-side construction consultant.`}</p>
            </div>
            <div className="tworeg-col">
              <h3>What Dolemai connects to</h3>
              <p>Dolemai connects to Microsoft 365 (SharePoint, OneDrive and Outlook), Google Drive, and supports direct document upload. It monitors project folders and email inboxes for new documents and updates, extracting intelligence automatically.</p>
            </div>
            <div className="tworeg-col">
              <h3>What Dolemai produces</h3>
              <p>Dolemai maintains live project registers covering risks, actions, decisions, outstanding information, appointment changes and contract changes. It generates client-facing and internal project reports in Word format, covering all RIBA stages from feasibility through to handover.</p>
            </div>
            <div className="tworeg-col">
              <h3>UK construction specific</h3>
              <p>Dolemai understands JCT and NEC contract forms, RIBA stages, CDM 2015, Building Safety Act 2022, and UK planning requirements. It tracks appointment changes separately from construction contract changes — a distinction that matters to every project manager managing their own fee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container cta-wrap">
          <div>
            <h2>Stop rebuilding the project story every week.</h2>
            <p>Connect your first project and create a current, reviewable project position from the information your team already uses.</p>
          </div>
          <a className="btn btn-light" href={APP_URL + "/projects/new"}>Start your first project</a>
        </div>
      </section>

      {/* Second CTA */}
      <section className="cta2">
        <div className="container">
          <h2>Already know you want it?</h2>
          <p className="section-lead">Connect your first project in under three minutes. No credit card required for your first report.</p>
          <div className="cta2-actions">
            <a className="btn btn-primary" href={APP_URL + "/projects/new"}>Start your first project →</a>
            <Link className="cta2-link" href="/demo/overview">Try the demo first →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
