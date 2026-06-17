import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = { title: 'Services' }

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const Chk = () => (
  <div className="sv-fchk">
    <svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg>
  </div>
)

type ServiceRow = {
  num: string; ico: string; stag: string; title: string; em: string;
  desc: string;
  mets: {v: string; l: string; c: string}[];
  feats: string[];
  cta1: string; cta2: string; cta2href: string;
}

const services: ServiceRow[] = [
  {
    num:'01', ico:'🔧', stag:'Service 01 · Bespoke', title:'Custom', em:'Solutions',
    desc:"When no off-the-shelf software solves your problem, we build exactly what you need from scratch — purpose-built for how your business works, owned by you forever, zero licensing fees.",
    mets:[{v:'100%',l:'Ownership',c:'↑ You own it'},{v:'0',l:'License Fees',c:'↑ Forever'},{v:'∞',l:'Flexibility',c:'↑ Your rules'}],
    feats:['Built entirely around your specific business process','Integrates with every tool you use — zero disruption','No recurring licensing — you own it completely, forever','Can include AI, automation, or advanced data processing','Full documentation so your team can manage it alone'],
    cta1:'Discuss My Problem', cta2:'Book a Free Call', cta2href:'/contact',
  },
  {
    num:'02', ico:'🚀', stag:'Service 02 · SaaS', title:'SaaS', em:'Development',
    desc:"We design, build, and launch full SaaS products — from idea to paying customers. Multi-tenant architecture, billing, dashboards, onboarding flows, and everything in between, engineered to scale.",
    mets:[{v:'<2s',l:'Load Time',c:'↑ Always'},{v:'5wk',l:'Avg. Delivery',c:'↑ On time'},{v:'1M+',l:'Scale Ready',c:'↑ No limits'}],
    feats:['Multi-tenant architecture built to handle thousands of customers','Stripe billing, subscriptions, and plan management built in','Beautiful dashboards, onboarding, and user management','Loads under 2 seconds — faster sites rank and convert better','Scales to 1M+ users without any rebuilding'],
    cta1:'Build My SaaS', cta2:'Get a Quote', cta2href:'/contact',
  },
  {
    num:'03', ico:'📱', stag:'Service 03 · Mobile', title:'App', em:'Development',
    desc:"Native-quality iOS and Android apps from a single codebase — designed to delight users, built to handle scale, and maintained after launch so you're never left alone.",
    mets:[{v:'10K',l:'Month 1 Users',c:'↑ Record'},{v:'4wk',l:'Avg. Delivery',c:'↑ Fast'},{v:'0',l:'Launch Bugs',c:'↑ Always'}],
    feats:['iOS & Android from one codebase — half the cost','Designed to be intuitive — users get it in seconds','Connects to payments, backends, and third-party APIs','Fully tested — zero critical bugs at go-live, always','Ongoing maintenance and updates post-launch included'],
    cta1:'Build My App', cta2:'Get an Estimate', cta2href:'/contact',
  },
  {
    num:'04', ico:'📞', stag:'Service 04 · Sales', title:'AI Cold Calling', em:'Agent',
    desc:"A tireless AI voice rep that calls your entire lead list, handles objections naturally, and books meetings into your calendar — while you focus on closing.",
    mets:[{v:'47',l:'Calls / Day',c:'↑ Automated'},{v:'25%',l:'Conv. Rate',c:'↑ vs manual'},{v:'24/7',l:'Uptime',c:'↑ No breaks'}],
    feats:['Calls your entire lead list — no manual dialling','Speaks naturally and handles objections in real time','Books meetings directly into Google Calendar or Calendly','Full call recordings and transcripts auto-delivered','Learns and improves with every call it makes'],
    cta1:'Deploy This Agent', cta2:'See Pricing', cta2href:'/products',
  },
  {
    num:'05', ico:'✉️', stag:'Service 05 · Outreach', title:'AI Cold Email', em:'Agent',
    desc:"Personalised emails written by AI for every prospect — sent at the optimal time, with automated follow-ups until they reply. More conversations, more deals, zero effort.",
    mets:[{v:'320',l:'Sent / Week',c:'↑ Auto'},{v:'38%',l:'Open Rate',c:'↑ +12 pts'},{v:'11.9%',l:'Reply Rate',c:'↑ 3× avg'}],
    feats:['Researches each prospect and writes truly personal emails','Sends at the optimal time for each individual recipient','Follows up at 3, 5, 7 days automatically until reply','Syncs with HubSpot, Salesforce, or any CRM','A/B tests subject lines and copy to maximise replies'],
    cta1:'Deploy This Agent', cta2:'See Pricing', cta2href:'/products',
  },
  {
    num:'06', ico:'⚡', stag:'Service 06 · Operations', title:'Workflow', em:'Automation',
    desc:"Every repetitive task your team does manually is costing you time. We map, connect, and automate your workflows end-to-end — saving the average team 14+ hours every week from day one.",
    mets:[{v:'14h',l:'Saved / Week',c:'↑ Per team'},{v:'0',l:'Manual Errors',c:'↑ Zero'},{v:'3×',l:'Speed Gain',c:'↑ Avg.'}],
    feats:['Automates data entry, reports, and file management','Sends alerts to your team via Slack, email, or Teams','Connects all your tools — no manual data transfer','Handles approval workflows end-to-end automatically','Zero errors — never misses a step the way humans do'],
    cta1:'Automate My Workflows', cta2:'Book a Discovery Call', cta2href:'/contact',
  },
  {
    num:'07', ico:'🏢', stag:'Service 07 · Ops AI', title:'Business Operations', em:'AI',
    desc:"We build intelligent systems that tie your HR, finance, procurement, and reporting together — keeping everything running without constant manual management.",
    mets:[{v:'80%',l:'Ops Automated',c:'↑ Avg. client'},{v:'10×',l:'ROI',c:'↑ Delivered'},{v:'∞',l:'Scalability',c:'↑ No limits'}],
    feats:['Automates HR — leave, onboarding, payroll reminders','Tracks procurement orders and supplier communications','Generates financial reports and dashboards weekly','Flags issues before they become costly problems','Scales with your business — no rebuilding as you grow'],
    cta1:'Optimise My Operations', cta2:'Book a Discovery Call', cta2href:'/contact',
  },
  {
    num:'08', ico:'💡', stag:'Service 08 · Strategy', title:'Tech Audit', em:'& Strategy',
    desc:"Not sure where your tech is working against you? We audit your entire stack, identify waste and gaps, and hand you a clear prioritised roadmap — honest, jargon-free, no upselling.",
    mets:[{v:'1hr',l:'Discovery Call',c:'↑ Free'},{v:'48h',l:'Full Report',c:'↑ Delivered'},{v:'100%',l:'Unbiased',c:'↑ Always'}],
    feats:['Full review of your stack — what works, what doesn\'t','Clear jargon-free report you can act on immediately','12-month modernisation roadmap with prioritised wins','Identifies cost savings — often pays for itself immediately','Completely honest — we\'ll tell you when not to spend'],
    cta1:'Book a Free Audit Call', cta2:'Learn More', cta2href:'/contact',
  },
]

export default function ServicesPage() {
  return (
    <>
      <div className="ph"><div className="ph-inner">
        <div className="lbl">Our Services</div>
        <h1 className="h2">Everything your business<br /><em>needs to grow</em></h1>
        <p>Simple, honest descriptions of what we do, how it works, and exactly how it helps your business move faster and earn more.</p>
      </div></div>

      {services.map((s) => (
        <div key={s.num} className="sv-row">
          <div className="sv-nbg">{s.num}</div>
          <div className="sv-body rv">
            <div className="sv-top">
              <span className="sv-ico">{s.ico}</span>
              <span className="sv-stag">{s.stag}</span>
            </div>
            <h2 className="sv-h2">{s.title} <em>{s.em}</em></h2>
            <p className="sv-desc">{s.desc}</p>
            <div className="sv-mets">
              {s.mets.map((m) => (
                <div key={m.l} className="sv-met">
                  <div className="sv-met-v">{m.v}</div>
                  <div className="sv-met-l">{m.l}</div>
                  <div className="sv-met-c">{m.c}</div>
                </div>
              ))}
            </div>
            <div className="sv-feats">
              {s.feats.map((f) => (
                <div key={f} className="sv-feat"><Chk />{f}</div>
              ))}
            </div>
            <div className="sv-acts">
              <Link href="/contact" className="bp">{s.cta1} <ArrowIcon /></Link>
              <Link href={s.cta2href} className="bs">{s.cta2}</Link>
            </div>
          </div>
        </div>
      ))}

      <section className="why-section-inner" style={{padding:'72px 48px',background:'var(--white)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
        <div className="rv"><div className="lbl">Why Choose Shrivix</div><h2 className="h2">The same commitment <em>across every service</em></h2></div>
        <div className="why-grid rv">
          <div className="why-item"><div className="wi">🚀</div><h4>Fast Delivery</h4><p>Two-week sprint cycles mean you see working results fast — not wait months for things to happen.</p></div>
          <div className="why-item"><div className="wi">🔒</div><h4>Security First</h4><p>Every system we build has security built in from the start — your data and your customers&apos; data stay safe.</p></div>
          <div className="why-item"><div className="wi">📈</div><h4>Built to Scale</h4><p>Whatever we build for you today will still work perfectly when your business is 10 times bigger.</p></div>
          <div className="why-item"><div className="wi">🤝</div><h4>Always There</h4><p>We don&apos;t hand you something and disappear. We&apos;re your ongoing partner for as long as you need us.</p></div>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-grid" /><div className="cta-glow" />
        <h2>Ready to get started?<br /><em>Let&apos;s talk.</em></h2>
        <p>Book a free discovery call. We&apos;ll scope your project and deliver exactly what you need.</p>
        <div className="cta-row">
          <Link href="/contact" className="bw">Book a Free Call <ArrowIcon /></Link>
          <Link href="/products" className="bg">View Our Products</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
