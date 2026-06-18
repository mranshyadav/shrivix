import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import HeroNew from '@/components/HeroNew'

export const metadata: Metadata = {
  title: 'Shrivix — AI Agents & Intelligent Automation for Modern Businesses',
  description: 'Shrivix builds AI agents, intelligent automation pipelines, and enterprise software that help businesses scale faster. From AI cold calling to SaaS development and custom solutions.',
  alternates: { canonical: 'https://shrivix.com' },
  openGraph: {
    title: 'Shrivix — AI Agents & Intelligent Automation for Modern Businesses',
    description: 'AI agents, intelligent automation, and world-class software for modern businesses.',
    url: 'https://shrivix.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shrivix — AI Agents & Intelligent Automation',
    description: 'AI agents, intelligent automation, and world-class software for modern businesses.',
  },
}

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function HomePage() {
  return (
    <>
      <HeroNew />

      {/* SERVICES GRID */}
      <section className="sp-grid-section">
        <div className="sec-body">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'48px',gap:'20px',flexWrap:'wrap'}} className="rv">
          <div><div className="lbl">What We Build</div><h2 className="h2">End-to-end <em>technology</em><br />services</h2></div>
          <p style={{fontSize:'15px',color:'var(--muted)',maxWidth:'320px',lineHeight:1.7}}>From AI agents to full-scale software — everything your business needs to operate at its peak.</p>
        </div>
        <div className="sp-grid rv">
          <div className="sp-card"><div className="sp-ico">🤖</div><h3>AI Agents</h3><p>Intelligent voice and email agents that prospect, qualify, and close — 24/7 without human intervention.</p></div>
          <div className="sp-card"><div className="sp-ico">⚡</div><h3>Workflow Automation</h3><p>Eliminate repetitive tasks. Automate daily operations so your team focuses on high-value work.</p></div>
          <div className="sp-card"><div className="sp-ico">📱</div><h3>Mobile Apps</h3><p>Cross-platform iOS and Android apps with polished UX, built for real users and maintained long-term.</p></div>
          <div className="sp-card"><div className="sp-ico">🌐</div><h3>Web Development</h3><p>From landing pages to complex SaaS platforms — fast, scalable, and beautifully engineered.</p></div>
          <div className="sp-card"><div className="sp-ico">🔧</div><h3>Custom Solutions</h3><p>Unique challenge? We architect bespoke software designed precisely for your industry and constraints.</p></div>
          <div className="sp-card" style={{background:'var(--ink)',cursor:'pointer'}} onClick={undefined}>
            <Link href="/services" style={{display:'contents'}}>
              <div className="sp-ico" style={{background:'rgba(255,255,255,.08)',borderColor:'rgba(255,255,255,.12)'}}>💡</div>
              <h3 style={{color:'#fff'}}>IT Consultation</h3>
              <p style={{color:'rgba(255,255,255,.5)'}}>Expert strategy, architecture reviews, and digital transformation roadmaps.</p>
              <div style={{marginTop:'18px',fontSize:'13px',fontWeight:600,color:'rgba(255,255,255,.55)',display:'flex',alignItems:'center',gap:'6px'}}>View all services →</div>
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-left rv">
            <div className="lbl">Our Products</div>
            <h2 className="h2">AI tools that work<br /><em>while you sleep</em></h2>
            <p>Our product suite handles outreach, follow-up, and operations around the clock — no human required.</p>
            <Link href="/products" className="bp">Explore Products <ArrowIcon /></Link>
          </div>
          <div className="rv d1">
            <Link href="/products" className="pp-item"><div className="pp-ico">📞</div><div className="pp-body"><h4>AI Cold Calling Agent</h4><p>Natural voice AI that calls your leads, handles objections, and books meetings automatically.</p></div></Link>
            <Link href="/products" className="pp-item"><div className="pp-ico">✉️</div><div className="pp-body"><h4>AI Email Outreach Agent</h4><p>Personalized email sequences written and sent by AI with smart follow-ups that drive replies.</p></div></Link>
            <Link href="/products" className="pp-item"><div className="pp-ico">⚙️</div><div className="pp-body"><h4>Workflow Automation Bot</h4><p>Automate your daily operations — CRM syncs, reports, alerts, and more.</p></div></Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="home-about">
        <div className="ha-wrap">
          <div className="ha-left rv">
            <div className="lbl">About Shrivix</div>
            <h2 className="h2">Not just a vendor.<br />Your <em>technology</em> partner.</h2>
            <p>Shrivix was built on a simple belief — most businesses are losing time, money, and opportunity to manual processes that should be running on autopilot. We fix that.</p>
            <p>We started with AI agents for sales teams. The results were immediate and undeniable. That success led us to build a full-service technology company covering automation, mobile apps, web platforms, and custom AI systems.</p>
            <p>Today we serve businesses across India and globally — from early-stage startups to established enterprises — with one consistent promise: build the right thing, build it properly, and stay invested in the outcome.</p>
            <div style={{display:'flex',gap:'12px',marginTop:'28px',flexWrap:'wrap'}}>
              <Link href="/about" className="bp">Our Full Story <ArrowIcon /></Link>
              <Link href="/contact" className="bs">Work With Us</Link>
            </div>
            <div className="ha-stats">
              <div className="ha-stat"><div className="ha-stat-n">50<sup>+</sup></div><div className="ha-stat-l">Projects Delivered</div></div>
              <div className="ha-stat"><div className="ha-stat-n">10<sup>×</sup></div><div className="ha-stat-l">Average ROI</div></div>
              <div className="ha-stat"><div className="ha-stat-n">8</div><div className="ha-stat-l">Industries Served</div></div>
              <div className="ha-stat"><div className="ha-stat-n">24/7</div><div className="ha-stat-l">Agent Uptime</div></div>
            </div>
          </div>
          <div className="rv d1">
            <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
              <div style={{background:'var(--bg)',border:'1px solid var(--border)',borderRadius:'14px',padding:'28px 28px 24px'}}>
                <div style={{fontSize:'26px',marginBottom:'12px'}}>🎯</div>
                <div style={{fontSize:'15px',fontWeight:700,letterSpacing:'-.02em',marginBottom:'6px',color:'var(--ink)'}}>Our Mission</div>
                <div style={{fontSize:'13.5px',color:'var(--muted)',lineHeight:1.65}}>To make intelligent automation and world-class software accessible to every ambitious business — not just the ones with unlimited budgets.</div>
              </div>
              <div style={{background:'var(--bg)',border:'1px solid var(--border)',borderRadius:'14px',padding:'28px 28px 24px'}}>
                <div style={{fontSize:'26px',marginBottom:'12px'}}>👁️</div>
                <div style={{fontSize:'15px',fontWeight:700,letterSpacing:'-.02em',marginBottom:'6px',color:'var(--ink)'}}>Our Vision</div>
                <div style={{fontSize:'13.5px',color:'var(--muted)',lineHeight:1.65}}>A world where every business — regardless of size — has access to the same AI-powered tools and automation that the largest companies use to dominate their markets.</div>
              </div>
              <div style={{background:'var(--accent-bg)',border:'1px solid var(--accent-bd)',borderRadius:'14px',padding:'24px 28px',display:'flex',alignItems:'flex-start',gap:'14px'}}>
                <div style={{fontSize:'22px',flexShrink:0}}>📍</div>
                <div>
                  <div style={{fontSize:'13.5px',fontWeight:700,color:'var(--ink)',marginBottom:'4px'}}>Based in India, built for the world</div>
                  <div style={{fontSize:'13px',color:'var(--muted)',lineHeight:1.6}}>Our team operates from India with clients across Asia, the Middle East, and beyond. We bring world-class engineering at competitive rates — without compromising on quality.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SHRIVIX */}
      <section className="home-why">
        <div className="sec-body">
        <div className="hw-header rv">
          <div>
            <div className="lbl">Why Shrivix</div>
            <h2 className="h2">What makes us <em>different</em></h2>
          </div>
          <p>Plenty of agencies will take your money and deliver something generic. Here's why our clients stay, refer others, and keep building with us.</p>
        </div>
        <div className="hw-grid">
          <div className="hw-card rv"><div className="hw-num">01</div><div className="hw-ico">🧠</div><h3>AI-First by Design</h3><p>Intelligence isn't something we add at the end — it's how we architect every solution from day one. Every system we build is designed to learn, adapt, and improve.</p></div>
          <div className="hw-card rv d1"><div className="hw-num">02</div><div className="hw-ico">⚡</div><h3>Speed Without Shortcuts</h3><p>Two-week sprints, daily updates, working software in your hands fast. We move at startup speed without cutting corners on quality or reliability.</p></div>
          <div className="hw-card rv d2"><div className="hw-num">03</div><div className="hw-ico">🔍</div><h3>Radical Transparency</h3><p>No black boxes. You see every decision, every cost, and every tradeoff. We tell you what you need to hear — not what you want to hear.</p></div>
          <div className="hw-card rv"><div className="hw-num">04</div><div className="hw-ico">🤝</div><h3>Long-Term Partnership</h3><p>We don't disappear after launch. Shrivix is your ongoing partner — monitoring, improving, and scaling your systems as your business grows.</p></div>
          <div className="hw-card rv d1"><div className="hw-num">05</div><div className="hw-ico">📈</div><h3>Outcome-Driven</h3><p>We're not measured by features shipped — we're measured by business results. Every engagement is tied to metrics that actually matter to you.</p></div>
          <div className="hw-card rv d2" style={{background:'var(--ink)',borderColor:'var(--ink)'}}>
            <div className="hw-num" style={{color:'rgba(255,255,255,.25)'}}>→</div>
            <div className="hw-ico">💬</div>
            <h3 style={{color:'#fff'}}>Ready to see the difference?</h3>
            <p style={{color:'rgba(255,255,255,.55)'}}>Book a free 30-minute discovery call. No commitment, no hard sell — just an honest conversation about your business.</p>
            <Link href="/contact" className="bp" style={{marginTop:'20px',background:'rgba(255,255,255,.12)',color:'#fff',border:'1px solid rgba(255,255,255,.2)'}}>Book Free Call →</Link>
          </div>
        </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="home-process">
        <div className="sec-body">
        <div className="hproc-header rv">
          <div className="lbl">Our Process</div>
          <h2 className="h2">From idea to <em>live</em> in weeks</h2>
          <p>A simple, proven four-step process that takes you from first conversation to working product — with no surprises along the way.</p>
        </div>
        <div className="hproc-steps">
          <div className="hproc-step rv"><div className="hproc-dot"><div className="hproc-dot-n">01</div></div><h4>Discovery Call</h4><p>We learn your business, goals, and challenges in depth. Honest questions, clear answers — no fluff.</p></div>
          <div className="hproc-step rv d1"><div className="hproc-dot"><div className="hproc-dot-n">02</div></div><h4>Strategy &amp; Design</h4><p>We architect the right solution — technology, UX, and integrations — with a fixed scope and price.</p></div>
          <div className="hproc-step rv d2"><div className="hproc-dot"><div className="hproc-dot-n">03</div></div><h4>Build &amp; Integrate</h4><p>Fast two-week sprints with working software every cycle. Seamless integration with your existing tools.</p></div>
          <div className="hproc-step rv d3"><div className="hproc-dot"><div className="hproc-dot-n">04</div></div><h4>Launch &amp; Scale</h4><p>Go live with confidence. We monitor, optimise, and scale continuously as your business grows.</p></div>
        </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="home-mission">
        <div className="hm-inner rv">
          <div className="lbl" style={{justifyContent:'center'}}>What We Believe</div>
          <div className="hm-quote">&ldquo;Every business deserves technology that actually <em>works for them</em> — not the other way around.&rdquo;</div>
          <div className="hm-tags">
            {['AI-First','No Shortcuts','Radical Honesty','Long-Term Thinking','Results Over Outputs','India-Built, World-Class'].map(t => (
              <span key={t} className="hm-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients-section">
        <div className="sec-body">
        <div className="clients-header rv">
          <div className="lbl" style={{justifyContent:'center'}}>Trusted By</div>
          <p>Businesses across industries rely on Shrivix to power their technology</p>
        </div>
        <div className="clients-ticker rv">
          <div className="clients-track">
            {[
              {bg:'#eef2fd',ico:'🏢',name:'ScaleHQ'},{bg:'#fff7ed',ico:'🛒',name:'NovaTrade'},
              {bg:'#f0fdf4',ico:'📲',name:'Loopify'},{bg:'#fef3c7',ico:'⚡',name:'Flowly'},
              {bg:'#fdf2f8',ico:'🔬',name:'DataNest'},{bg:'#ecfdf5',ico:'📊',name:'Clarity Group'},
              {bg:'#eff6ff',ico:'🚀',name:'GrowthStack'},{bg:'#fff1f2',ico:'💎',name:'NextVenture'},
              {bg:'#f5f3ff',ico:'🧬',name:'Precision Labs'},{bg:'#fefce8',ico:'🌿',name:'VerdeTech'},
            ].flatMap((c,i,arr) => [c, ...arr].slice(0,arr.length).map((cl,j) => (
              j === 0 ? (
                <div key={`${i}-${j}`} className="client-logo"><div className="client-logo-inner"><div className="cl-icon" style={{background:cl.bg}}>{cl.ico}</div>{cl.name}</div></div>
              ) : null
            ))).filter(Boolean)}
            {[
              {bg:'#eef2fd',ico:'🏢',name:'ScaleHQ'},{bg:'#fff7ed',ico:'🛒',name:'NovaTrade'},
              {bg:'#f0fdf4',ico:'📲',name:'Loopify'},{bg:'#fef3c7',ico:'⚡',name:'Flowly'},
              {bg:'#fdf2f8',ico:'🔬',name:'DataNest'},{bg:'#ecfdf5',ico:'📊',name:'Clarity Group'},
              {bg:'#eff6ff',ico:'🚀',name:'GrowthStack'},{bg:'#fff1f2',ico:'💎',name:'NextVenture'},
              {bg:'#f5f3ff',ico:'🧬',name:'Precision Labs'},{bg:'#fefce8',ico:'🌿',name:'VerdeTech'},
            ].map((c,i) => (
              <div key={`dup-${i}`} className="client-logo"><div className="client-logo-inner"><div className="cl-icon" style={{background:c.bg}}>{c.ico}</div>{c.name}</div></div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi-section">
        <div className="sec-body">
        <div className="testi-header rv">
          <div><div className="lbl">Client Reviews</div><h2 className="h2">Trusted by <em>ambitious</em><br />teams worldwide</h2></div>
          <p>Don&apos;t take our word for it — here&apos;s what our clients say about working with Shrivix and the results we&apos;ve delivered.</p>
        </div>
        <div className="testi-grid">
          <div className="tc featured rv">
            <div className="tc-service">⭐ Featured</div>
            <div className="tc-stars">★★★★★</div>
            <div className="tc-quote">&ldquo;Shrivix deployed an AI calling agent that books more meetings in a single day than our entire sales team managed in a week. The setup was fast, the results were immediate, and the ROI is unlike anything we&apos;ve seen from a technology investment.&rdquo;</div>
            <div className="tc-author"><div className="tc-av">R</div><div><div className="tc-name">Rahul Mehta</div><div className="tc-role">CEO, ScaleHQ — Mumbai</div></div></div>
          </div>
          <div className="tc rv d1">
            <div className="tc-service">✉️ Email Agent</div>
            <div className="tc-stars">★★★★★</div>
            <div className="tc-quote">&ldquo;The email agent runs our entire outbound motion. It writes better cold emails than our best SDR — and it never needs a day off. Reply rates went up 40% in the first month.&rdquo;</div>
            <div className="tc-author"><div className="tc-av">K</div><div><div className="tc-name">Kavya Nair</div><div className="tc-role">Head of Sales, GrowthStack</div></div></div>
          </div>
          <div className="tc rv">
            <div className="tc-service">⚡ Automation</div>
            <div className="tc-stars">★★★★★</div>
            <div className="tc-quote">&ldquo;Our entire operations pipeline was manual chaos. Shrivix automated 80% of it in three weeks. The team is brilliant, moves fast, and truly understands the business.&rdquo;</div>
            <div className="tc-author"><div className="tc-av">P</div><div><div className="tc-name">Priya Sharma</div><div className="tc-role">COO, NovaTrade — Delhi</div></div></div>
          </div>
          <div className="tc rv d1">
            <div className="tc-service">📱 Mobile App</div>
            <div className="tc-stars">★★★★★</div>
            <div className="tc-quote">&ldquo;The app they built went from zero to 10,000 active users in the first month. Flawless design, zero critical bugs, handled end to end without hand-holding.&rdquo;</div>
            <div className="tc-author"><div className="tc-av">A</div><div><div className="tc-name">Arjun Patel</div><div className="tc-role">Founder, Loopify</div></div></div>
          </div>
          <div className="tc rv d2">
            <div className="tc-service">🌐 Web Dev</div>
            <div className="tc-stars">★★★★★</div>
            <div className="tc-quote">&ldquo;We needed a SaaS platform built from scratch in 6 weeks. Shrivix delivered it in 5. The quality is exceptional — clean architecture, fast, and beautiful.&rdquo;</div>
            <div className="tc-author"><div className="tc-av">S</div><div><div className="tc-name">Siddharth Rao</div><div className="tc-role">CTO, Flowly — Bangalore</div></div></div>
          </div>
        </div>
        <div className="testi-rating-row rv">
          <div className="trat"><div className="trat-val">5.0</div><div className="trat-stars">★★★★★</div><div className="trat-lbl">Avg. Rating</div></div>
          <div className="trat-sep" />
          <div className="trat-fact"><span style={{fontSize:'20px'}}>✅</span><span><strong>100%</strong> project completion rate</span></div>
          <div className="trat-sep" />
          <div className="trat-fact"><span style={{fontSize:'20px'}}>⚡</span><span>Avg. delivery <strong>4 weeks</strong></span></div>
          <div className="trat-sep" />
          <div className="trat-fact"><span style={{fontSize:'20px'}}>🔄</span><span><strong>94%</strong> client retention rate</span></div>
          <div className="trat-sep" />
          <div className="trat-fact"><span style={{fontSize:'20px'}}>🌍</span><span>Clients across <strong>8 industries</strong></span></div>
        </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="cta-grid" /><div className="cta-glow" />
        <h2>Ready to transform your<br />business <em>with AI?</em></h2>
        <p>Book a free discovery call. We&apos;ll scope your project and tell you exactly what&apos;s possible.</p>
        <div className="cta-row">
          <Link href="/contact" className="bw">Book a Free Call <ArrowIcon /></Link>
          <Link href="/services" className="bg">View All Services</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
