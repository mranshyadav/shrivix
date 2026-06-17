import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = { title: 'About' }

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function AboutPage() {
  return (
    <>
      <div className="about-ph">
        <div className="about-hw">
          <div>
            <div className="lbl">About Shrivix</div>
            <h1 className="h2">Not just an agency.<br />Your <em>technology</em> partner.</h1>
            <p style={{marginTop:'14px',fontSize:'15.5px',color:'var(--muted)',lineHeight:1.75,maxWidth:'460px'}}>We are engineers, AI specialists, and product designers who believe technology should make businesses genuinely better — not just technically impressive.</p>
          </div>
          <div className="rv">
            <div className="astat-grid">
              <div className="astat"><div className="astat-n">50<sup>+</sup></div><div className="astat-l">Projects Delivered</div></div>
              <div className="astat"><div className="astat-n">10<sup>×</sup></div><div className="astat-l">Avg. ROI</div></div>
              <div className="astat"><div className="astat-n">8</div><div className="astat-l">Industries</div></div>
              <div className="astat"><div className="astat-n">24/7</div><div className="astat-l">Agent Uptime</div></div>
            </div>
          </div>
        </div>
      </div>

      <section className="story-section" style={{padding:'72px 48px',background:'var(--bg)'}}>
        <div className="story-wrap">
          <div className="story-left rv">
            <div className="lbl">Our Story</div>
            <h2 className="h2">Built to solve <em>real problems,</em><br />not showcase tech</h2>
            <p>Shrivix was founded on a simple observation: most businesses are losing enormous amounts of time, money, and opportunity to manual processes that can and should be automated.</p>
            <p>We started by building AI agents for sales teams. The results were undeniable — companies booking more meetings with fewer resources. That success led us to expand into automation, mobile apps, and custom software.</p>
            <p>Today, Shrivix serves businesses across India and globally. Our approach has never changed: understand the problem deeply, build the right solution, and stay invested in the outcome.</p>
            <Link href="/contact" className="bp" style={{marginTop:'8px'}}>Work With Us →</Link>
          </div>
          <div className="rv d1">
            <div className="story-right">
              <div className="wr"><div className="wr-n">01</div><div><h4>AI-First Thinking</h4><p>Intelligence isn&apos;t an add-on — it&apos;s the foundation of every solution we build from day one.</p></div></div>
              <div className="wr"><div className="wr-n">02</div><div><h4>Speed Without Shortcuts</h4><p>We move fast using modern tooling and disciplined sprints, without compromising engineering quality.</p></div></div>
              <div className="wr"><div className="wr-n">03</div><div><h4>Radical Transparency</h4><p>No black boxes. You see every decision, every cost, every tradeoff — from kickoff to launch.</p></div></div>
              <div className="wr"><div className="wr-n">04</div><div><h4>Long-Term Partnership</h4><p>We don&apos;t vanish after delivery. Shrivix is your ongoing technology partner for years, not just projects.</p></div></div>
              <div className="wr"><div className="wr-n">05</div><div><h4>Outcome-Driven</h4><p>Every engagement is measured by business impact — not just delivery. We optimize for what matters to you.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="val-section" style={{padding:'72px 48px',background:'var(--white)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
        <div className="rv"><div className="lbl">Our Values</div><h2 className="h2">What we <em>stand for</em></h2></div>
        <div className="val-grid rv">
          <div className="val-card"><div className="val-ico">🎯</div><h3>Precision</h3><p>We get the details right — from system architecture to pixel-perfect UI. Precision defines everything we deliver.</p></div>
          <div className="val-card"><div className="val-ico">🤝</div><h3>Partnership</h3><p>We treat your business as our own. Your success is our success — we don&apos;t separate the two.</p></div>
          <div className="val-card"><div className="val-ico">💡</div><h3>Innovation</h3><p>We stay at the cutting edge so our clients are always ahead of the curve, not playing catch-up.</p></div>
          <div className="val-card"><div className="val-ico">🔒</div><h3>Integrity</h3><p>We are honest about what&apos;s possible, what it will cost, and when it will be done. No overpromising. Ever.</p></div>
          <div className="val-card"><div className="val-ico">⚡</div><h3>Speed</h3><p>Time is money. We build fast, iterate fast, and launch fast — without creating technical debt.</p></div>
          <div className="val-card"><div className="val-ico">📈</div><h3>Impact</h3><p>Technology for its own sake is worthless. We build systems that create measurable business impact.</p></div>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-grid" /><div className="cta-glow" />
        <h2>Let&apos;s build something <em>together.</em></h2>
        <p>We&apos;d love to learn about your business and explore how Shrivix can help you operate smarter.</p>
        <div className="cta-row">
          <Link href="/contact" className="bw">Get In Touch →</Link>
          <Link href="/careers" className="bg">View Open Roles</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
