import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = { title: 'Products' }

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const Chk = () => (
  <div className="fchk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></div>
)

export default function ProductsPage() {
  return (
    <>
      <div className="ph"><div className="ph-inner">
        <div className="lbl">Our Products</div>
        <h1 className="h2">AI-powered tools that work<br /><em>while you sleep</em></h1>
        <p>Deploy intelligent agents and automation systems that run your outreach, operations, and workflows around the clock.</p>
      </div></div>

      <section className="prod-section" style={{padding:'72px 48px',background:'var(--bg)'}}>
        {/* Cold Calling Agent */}
        <div className="prod-card rv">
          <div className="prod-inner">
            <div className="prod-info">
              <div className="prod-badge">🤖 AI Agent</div>
              <div className="prod-ico">📞</div>
              <h2>Cold Calling <em>Agent</em></h2>
              <p>A natural-sounding AI voice agent that calls your prospect list, handles objections intelligently, and books qualified meetings directly into your calendar — 24 hours a day, 7 days a week.</p>
              <div className="feat-list">
                <div className="fi"><Chk />Natural voice with dynamic objection handling</div>
                <div className="fi"><Chk />Runs from your lead list — CSV, CRM, or API</div>
                <div className="fi"><Chk />Auto-books meetings into Google Calendar or Calendly</div>
                <div className="fi"><Chk />Full call transcripts and performance dashboard</div>
                <div className="fi"><Chk />Improves continuously with every call via feedback loop</div>
              </div>
              <div className="prod-acts">
                <Link href="/contact" className="bp">Deploy This Agent <ArrowIcon /></Link>
                <Link href="/contact" className="bs">Learn More</Link>
              </div>
            </div>
            <div className="prod-stats">
              <div className="pst"><div className="pst-v">47</div><div className="pst-l">Calls / Day</div><div className="pst-c">↑ +18% avg.</div></div>
              <div className="pst"><div className="pst-v">25%</div><div className="pst-l">Conv. Rate</div><div className="pst-c">↑ vs manual</div></div>
              <div className="pst"><div className="pst-v">12</div><div className="pst-l">Meetings / Day</div><div className="pst-c">↑ Consistent</div></div>
              <div className="pst"><div className="pst-v">24/7</div><div className="pst-l">Availability</div><div className="pst-c">↑ Zero downtime</div></div>
            </div>
          </div>
        </div>

        {/* Email Agent */}
        <div className="prod-card rv d1">
          <div className="prod-inner">
            <div className="prod-info">
              <div className="prod-badge">🤖 AI Agent</div>
              <div className="prod-ico">✉️</div>
              <h2>Email Outreach <em>Agent</em></h2>
              <p>An AI agent that crafts deeply personalised emails for every prospect, sends at optimal times, and follows up intelligently based on behaviour — driving replies at scale without manual effort.</p>
              <div className="feat-list">
                <div className="fi"><Chk />AI-written personalised subject lines and email bodies</div>
                <div className="fi"><Chk />Smart follow-up sequences triggered by prospect behaviour</div>
                <div className="fi"><Chk />Optimal send time per recipient based on timezone</div>
                <div className="fi"><Chk />Integrates with HubSpot, Salesforce, Pipedrive</div>
                <div className="fi"><Chk />A/B tests subject lines and messaging variants automatically</div>
              </div>
              <div className="prod-acts">
                <Link href="/contact" className="bp">Deploy This Agent <ArrowIcon /></Link>
                <Link href="/contact" className="bs">Learn More</Link>
              </div>
            </div>
            <div className="prod-stats">
              <div className="pst"><div className="pst-v">320</div><div className="pst-l">Emails / Week</div><div className="pst-c">↑ Automated</div></div>
              <div className="pst"><div className="pst-v">38%</div><div className="pst-l">Open Rate</div><div className="pst-c">↑ +12pts avg.</div></div>
              <div className="pst"><div className="pst-v">38</div><div className="pst-l">Replies / Week</div><div className="pst-c">↑ 11.9% CVR</div></div>
              <div className="pst"><div className="pst-v">∞</div><div className="pst-l">Scale</div><div className="pst-c">↑ No limits</div></div>
            </div>
          </div>
        </div>

        {/* Workflow Bot */}
        <div className="prod-card rv d2">
          <div className="prod-inner">
            <div className="prod-info">
              <div className="prod-badge">⚙️ Automation</div>
              <div className="prod-ico">⚙️</div>
              <h2>Workflow Automation <em>Bot</em></h2>
              <p>A configurable automation engine that connects your tools, eliminates manual tasks, and runs your daily operations pipelines end-to-end — CRM syncs, reports, alerts, approvals, and more.</p>
              <div className="feat-list">
                <div className="fi"><Chk />CRM auto-update and pipeline management</div>
                <div className="fi"><Chk />Slack / Teams / email notifications</div>
                <div className="fi"><Chk />Automated report generation and delivery</div>
                <div className="fi"><Chk />Cross-tool data syncing (Google, HubSpot, etc.)</div>
                <div className="fi"><Chk />Custom triggers, conditions, and actions</div>
              </div>
              <div className="prod-acts">
                <Link href="/contact" className="bp">Deploy Automation <ArrowIcon /></Link>
                <Link href="/contact" className="bs">Learn More</Link>
              </div>
            </div>
            <div className="prod-stats">
              <div className="pst"><div className="pst-v">14h</div><div className="pst-l">Saved / Week</div><div className="pst-c">↑ Per team avg.</div></div>
              <div className="pst"><div className="pst-v">8</div><div className="pst-l">Active Pipelines</div><div className="pst-c">↑ Always on</div></div>
              <div className="pst"><div className="pst-v">0</div><div className="pst-l">Manual Errors</div><div className="pst-c">↑ Fully automated</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup */}
      <section style={{padding:'72px 48px',background:'var(--white)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
        <div className="setup-wrap">
          <div className="rv">
            <div className="lbl">Quick Setup</div>
            <h2 className="h2">Live in <em>days,</em><br />not months</h2>
            <p style={{fontSize:'15px',color:'var(--muted)',lineHeight:1.78,margin:'16px 0 28px'}}>We configure, test, and deploy your agent in a structured four-step process — you start seeing results within the first week.</p>
            <Link href="/contact" className="bp">Book Onboarding Call →</Link>
          </div>
          <div className="rv d1">
            <div className="setup-steps">
              <div className="setup-step"><div className="setup-n">01</div><div><h4>Onboarding Call</h4><p>We learn your ICP, tone, goals, and tech stack in a focused 60-minute session.</p></div></div>
              <div className="setup-step"><div className="setup-n">02</div><div><h4>Agent Configuration</h4><p>We build, train, and integrate your agent with your existing tools and workflows.</p></div></div>
              <div className="setup-step"><div className="setup-n">03</div><div><h4>Test &amp; Refine</h4><p>We run test batches together, review outputs, and refine until quality is excellent.</p></div></div>
              <div className="setup-step"><div className="setup-n">04</div><div><h4>Go Live &amp; Optimise</h4><p>Your agent goes live. We monitor daily and continuously optimise for performance.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-grid" /><div className="cta-glow" />
        <h2>Deploy your first agent <em>this week.</em></h2>
        <p>We&apos;ll have your AI agent live and producing results within days of your onboarding call.</p>
        <div className="cta-row">
          <Link href="/contact" className="bw">Book Onboarding Call →</Link>
          <Link href="/services" className="bg">View All Services</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
