import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI Services — Custom Software, AI Agents & Automation',
  description: 'Shrivix offers AI cold calling agents, email automation, workflow automation, SaaS development, mobile apps, and custom software. Book a free consultation today.',
  keywords: ['AI agents', 'workflow automation', 'AI cold calling', 'email automation', 'SaaS development', 'mobile app development', 'custom software India'],
  alternates: { canonical: 'https://shrivix.com/services' },
  openGraph: {
    title: 'AI Services — Custom Software, AI Agents & Automation | Shrivix',
    description: 'From AI voice agents to full SaaS platforms — Shrivix engineers intelligent automation and world-class software for modern businesses.',
    url: 'https://shrivix.com/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Services — Custom Software, AI Agents & Automation | Shrivix',
    description: 'From AI voice agents to full SaaS platforms — Shrivix engineers intelligent automation and world-class software for modern businesses.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a typical project take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most projects run 4–6 weeks end to end. AI agents and automations can be live in 1–2 weeks. We give you a fixed timeline upfront — and we stick to it.' },
    },
    {
      '@type': 'Question',
      name: 'Do you work with businesses outside India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — we serve clients across Asia, the Middle East, and globally. Our team is India-based, which means world-class engineering at competitive rates.' },
    },
    {
      '@type': 'Question',
      name: 'What happens after the project is delivered?',
      acceptedAnswer: { '@type': 'Answer', text: 'We don\'t hand you something and disappear. Every engagement includes onboarding, documentation, and an ongoing support option. Most clients stay with us long-term.' },
    },
    {
      '@type': 'Question',
      name: 'How is pricing structured?',
      acceptedAnswer: { '@type': 'Answer', text: 'Fixed-scope, fixed-price for most projects. No hourly billing surprises. We scope your project, give you a number, and that\'s what you pay. AI agents have optional monthly maintenance plans.' },
    },
  ],
}

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const Chk = () => (
  <div className="sv-fchk"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></div>
)

type VisualItem = { text: string; time: string; status: 'done' | 'active' | 'pending' }

const SvCard = ({ico, label, badge, metric, metricLabel, items, footer}: {
  ico: string; label: string; badge: string; metric: string; metricLabel: string;
  items: VisualItem[]; footer: string;
}) => (
  <div className="sv-card">
    <div className="sv-card-head">
      <div className="sv-card-label-row">
        <span className="sv-card-ico">{ico}</span>
        <span className="sv-card-lbl">{label}</span>
      </div>
      <span className="sv-card-live">● {badge}</span>
    </div>
    <div className="sv-card-metric">
      <span className="sv-card-num">{metric}</span>
      <span className="sv-card-numl">{metricLabel}</span>
    </div>
    <div className="sv-card-feed">
      {items.map((item, i) => (
        <div key={i} className="sv-card-row">
          <span className={`sv-dot sv-dot-${item.status === 'done' ? 'g' : item.status === 'active' ? 'b' : 'muted'}`} />
          <span className="sv-card-row-text">{item.text}</span>
          <span className="sv-card-ts">{item.time}</span>
        </div>
      ))}
    </div>
    <div className="sv-card-foot">{footer}</div>
  </div>
)

const overview = [
  { ico:'🔧', title:'Custom Solutions', tag:'Bespoke', id:'svc-01' },
  { ico:'🚀', title:'SaaS Development', tag:'Product', id:'svc-02' },
  { ico:'📱', title:'App Development', tag:'Mobile', id:'svc-03' },
  { ico:'📞', title:'AI Cold Calling', tag:'Sales AI', id:'svc-04' },
  { ico:'✉️', title:'AI Email Agent', tag:'Outreach', id:'svc-05' },
  { ico:'⚡', title:'Workflow Automation', tag:'Ops', id:'svc-06' },
  { ico:'🏢', title:'Business Ops AI', tag:'Enterprise', id:'svc-07' },
  { ico:'💡', title:'Tech Audit & Strategy', tag:'Consulting', id:'svc-08' },
]

type ServiceItem = {
  id: string; num: string; ico: string; stag: string; title: string; em: string;
  desc: string; mets: { v: string; l: string; c: string }[]; feats: string[];
  cta1: string; cta2: string; cta2href: string;
  cardProps: Parameters<typeof SvCard>[0];
}

const services: ServiceItem[] = [
  {
    id:'svc-01', num:'01', ico:'🔧', stag:'Bespoke Engineering', title:'Custom', em:'Solutions',
    desc:"When no off-the-shelf software solves your problem, we build exactly what you need from scratch — purpose-built for how your business works, owned by you forever, zero licensing fees.",
    mets:[{v:'100%',l:'Ownership',c:'You own it'},{v:'₹0',l:'License Fees',c:'Forever'},{v:'∞',l:'Flexibility',c:'Your rules'}],
    feats:['Built entirely around your specific business process','Integrates with every tool you use — zero disruption','No recurring licensing — you own it completely, forever','Can include AI, automation, or advanced data processing','Full documentation so your team can manage it alone'],
    cta1:'Discuss My Problem', cta2:'Book a Free Call', cta2href:'/contact',
    cardProps:{
      ico:'🔧', label:'Build Tracker', badge:'In Sprint', metric:'Day 22', metricLabel:'of 30',
      items:[
        {text:'Architecture & design complete',time:'Day 2',status:'done'},
        {text:'Core modules built',time:'Day 8',status:'done'},
        {text:'API integrations done',time:'Day 16',status:'done'},
        {text:'QA & testing',time:'Now',status:'active'},
        {text:'Client handover',time:'Day 30',status:'pending'},
      ],
      footer:'You own 100% · Zero licensing fees',
    },
  },
  {
    id:'svc-02', num:'02', ico:'🚀', stag:'Product Engineering', title:'SaaS', em:'Development',
    desc:"We design, build, and launch full SaaS products — from idea to paying customers. Multi-tenant architecture, billing, dashboards, and onboarding flows, engineered to scale to millions.",
    mets:[{v:'<2s',l:'Load Time',c:'Always'},{v:'5wk',l:'Avg. Delivery',c:'On time'},{v:'1M+',l:'Scale Ready',c:'No limits'}],
    feats:['Multi-tenant architecture built to handle thousands of customers','Stripe billing, subscriptions, and plan management built in','Beautiful dashboards, onboarding, and user management','Loads under 2 seconds — faster sites rank and convert better','Scales to 1M+ users without any rebuilding'],
    cta1:'Build My SaaS', cta2:'Get a Quote', cta2href:'/contact',
    cardProps:{
      ico:'🚀', label:'SaaS Dashboard', badge:'Live', metric:'1,247', metricLabel:'Active Users',
      items:[
        {text:'Multi-tenant setup',time:'Week 1',status:'done'},
        {text:'Stripe billing live',time:'Week 2',status:'done'},
        {text:'Onboarding flow built',time:'Week 3',status:'done'},
        {text:'First 1,000 users hit',time:'Month 2',status:'done'},
        {text:'Scaling to 10K users',time:'Now',status:'active'},
      ],
      footer:'< 2s load · 99.9% uptime · Stripe integrated',
    },
  },
  {
    id:'svc-03', num:'03', ico:'📱', stag:'Mobile Engineering', title:'App', em:'Development',
    desc:"Native-quality iOS and Android apps from a single codebase — designed to delight users, built to handle scale, and maintained after launch so you're never left alone.",
    mets:[{v:'10K',l:'Month 1 Users',c:'Record'},{v:'4wk',l:'Avg. Delivery',c:'Fast'},{v:'0',l:'Launch Bugs',c:'Always'}],
    feats:['iOS & Android from one codebase — half the cost','Designed to be intuitive — users get it in seconds','Connects to payments, backends, and third-party APIs','Fully tested — zero critical bugs at go-live, always','Ongoing maintenance and updates post-launch included'],
    cta1:'Build My App', cta2:'Get an Estimate', cta2href:'/contact',
    cardProps:{
      ico:'📱', label:'App Performance', badge:'Live on Stores', metric:'4.9★', metricLabel:'App Store Rating',
      items:[
        {text:'iOS App Store — Live',time:'Week 4',status:'done'},
        {text:'Android Play Store — Live',time:'Week 4',status:'done'},
        {text:'10,000 downloads',time:'Month 1',status:'done'},
        {text:'Zero critical bug reports',time:'Always',status:'done'},
        {text:'Version 1.2 shipping',time:'Now',status:'active'},
      ],
      footer:'iOS + Android · One codebase · Half the cost',
    },
  },
  {
    id:'svc-04', num:'04', ico:'📞', stag:'Sales AI Agent', title:'AI Cold Calling', em:'Agent',
    desc:"A tireless AI voice rep that calls your entire lead list, handles objections naturally, and books meetings into your calendar — while you focus on closing the deals it brings you.",
    mets:[{v:'47',l:'Calls / Day',c:'Automated'},{v:'25%',l:'Conv. Rate',c:'vs manual'},{v:'24/7',l:'Uptime',c:'No breaks'}],
    feats:['Calls your entire lead list — no manual dialling ever','Speaks naturally and handles objections in real time','Books meetings directly into Google Calendar or Calendly','Full call recordings and transcripts auto-delivered','Learns and improves conversion rate with every call'],
    cta1:'Deploy This Agent', cta2:'See Pricing', cta2href:'/products',
    cardProps:{
      ico:'📞', label:'Live Call Activity', badge:'Running', metric:'47', metricLabel:'Calls Today',
      items:[
        {text:'Raj Mehta — Meeting booked 2:30 PM',time:'9:14 AM',status:'done'},
        {text:'Priya Sharma — Callback set Friday',time:'10:02 AM',status:'done'},
        {text:'Arjun Patel — Demo confirmed',time:'11:30 AM',status:'done'},
        {text:'Kavya Nair — In call now...',time:'Now',status:'active'},
        {text:'Siddharth Rao — Dialling...',time:'Next',status:'pending'},
      ],
      footer:'24/7 uptime · Never takes a day off',
    },
  },
  {
    id:'svc-05', num:'05', ico:'✉️', stag:'Outreach AI Agent', title:'AI Cold Email', em:'Agent',
    desc:"Personalised emails written by AI for every prospect — sent at the optimal time, with automated follow-ups until they reply. More conversations, more deals, zero manual effort.",
    mets:[{v:'320',l:'Sent / Week',c:'Auto'},{v:'38%',l:'Open Rate',c:'+12 pts'},{v:'11.9%',l:'Reply Rate',c:'3× avg'}],
    feats:['Researches each prospect and writes truly personal emails','Sends at the optimal time for each individual recipient','Follows up at 3, 5, 7 days automatically until reply','Syncs with HubSpot, Salesforce, or any CRM you use','A/B tests subject lines and copy to maximise replies'],
    cta1:'Deploy This Agent', cta2:'See Pricing', cta2href:'/products',
    cardProps:{
      ico:'✉️', label:'Campaign Stats', badge:'Active', metric:'38%', metricLabel:'Open Rate',
      items:[
        {text:'320 emails sent this week',time:'Auto',status:'done'},
        {text:'121 opens (38% rate)',time:'↑ +12pts',status:'done'},
        {text:'38 replies received',time:'11.9%',status:'done'},
        {text:'14 meetings booked',time:'This week',status:'done'},
        {text:'Follow-up sequence running',time:'Now',status:'active'},
      ],
      footer:'Syncs with HubSpot · Salesforce · Any CRM',
    },
  },
  {
    id:'svc-06', num:'06', ico:'⚡', stag:'Operations Automation', title:'Workflow', em:'Automation',
    desc:"Every repetitive task your team does manually is costing you time and money. We map, connect, and automate your workflows end-to-end — saving the average team 14+ hours every week from day one.",
    mets:[{v:'14h',l:'Saved / Week',c:'Per team'},{v:'0',l:'Manual Errors',c:'Zero'},{v:'3×',l:'Speed Gain',c:'Avg.'}],
    feats:['Automates data entry, reports, and file management tasks','Sends smart alerts via Slack, email, or Teams instantly','Connects all your tools — no more manual data transfer','Handles approval workflows end-to-end without interruption','Zero errors — never misses a step the way humans do'],
    cta1:'Automate My Workflows', cta2:'Book a Discovery Call', cta2href:'/contact',
    cardProps:{
      ico:'⚡', label:'Automation Log', badge:'Running', metric:'14h', metricLabel:'Saved This Week',
      items:[
        {text:'Data sync across tools',time:'Every 15m',status:'done'},
        {text:'Weekly reports generated',time:'Monday 8 AM',status:'done'},
        {text:'Team Slack alerts sent',time:'Real-time',status:'done'},
        {text:'Approval workflow processed',time:'Today',status:'done'},
        {text:'CRM auto-update running',time:'Now',status:'active'},
      ],
      footer:'3× faster · Zero manual errors · Always on',
    },
  },
  {
    id:'svc-07', num:'07', ico:'🏢', stag:'Enterprise AI', title:'Business Operations', em:'AI',
    desc:"We build intelligent systems that tie your HR, finance, procurement, and reporting together — keeping everything running smoothly without constant manual oversight.",
    mets:[{v:'80%',l:'Ops Automated',c:'Avg. client'},{v:'10×',l:'ROI',c:'Delivered'},{v:'∞',l:'Scalability',c:'No limits'}],
    feats:['Automates HR — leave approvals, onboarding, payroll reminders','Tracks procurement orders and supplier communications live','Generates financial reports and dashboards every week automatically','Flags issues before they become costly problems for the business','Scales with your business — never needs rebuilding as you grow'],
    cta1:'Optimise My Operations', cta2:'Book a Discovery Call', cta2href:'/contact',
    cardProps:{
      ico:'🏢', label:'Operations Health', badge:'Live', metric:'98%', metricLabel:'Processes Running',
      items:[
        {text:'HR workflows — all automated',time:'Active',status:'done'},
        {text:'Finance reports generated',time:'Weekly',status:'done'},
        {text:'Procurement tracked',time:'Real-time',status:'done'},
        {text:'Issues flagged: 0 this month',time:'Always',status:'done'},
        {text:'Daily ops briefing sent',time:'6 AM daily',status:'active'},
      ],
      footer:'80% ops automated · 10× ROI delivered',
    },
  },
  {
    id:'svc-08', num:'08', ico:'💡', stag:'Strategy & Consulting', title:'Tech Audit', em:'& Strategy',
    desc:"Not sure where your tech is working against you? We audit your entire stack, identify waste and gaps, and hand you a clear prioritised roadmap — honest, jargon-free, no upselling.",
    mets:[{v:'1hr',l:'Discovery Call',c:'Free'},{v:'48h',l:'Full Report',c:'Delivered'},{v:'100%',l:'Unbiased',c:'Always'}],
    feats:['Full review of your stack — what works and what doesn\'t','Clear jargon-free report you can act on immediately','12-month modernisation roadmap with prioritised quick wins','Identifies cost savings — often pays for itself immediately','Completely honest — we\'ll tell you when NOT to spend money'],
    cta1:'Book a Free Audit Call', cta2:'Contact Us', cta2href:'/contact',
    cardProps:{
      ico:'💡', label:'Audit Report', badge:'Delivered', metric:'48h', metricLabel:'Turnaround',
      items:[
        {text:'Discovery call complete',time:'Day 1',status:'done'},
        {text:'Full stack mapped',time:'Day 2',status:'done'},
        {text:'7 issues identified',time:'Day 2',status:'done'},
        {text:'Savings found: ₹2.1L/yr',time:'Day 3',status:'done'},
        {text:'Roadmap delivered to client',time:'Day 2',status:'done'},
      ],
      footer:'Free discovery call · No upselling · Ever',
    },
  },
]

const faqs = [
  { q:'How long does a typical project take?', a:'Most projects run 4–6 weeks end to end. AI agents and automations can be live in 1–2 weeks. We give you a fixed timeline upfront — and we stick to it.' },
  { q:'Do you work with businesses outside India?', a:'Yes — we serve clients across Asia, the Middle East, and globally. Our team is India-based, which means world-class engineering at competitive rates.' },
  { q:'What happens after the project is delivered?', a:'We don\'t hand you something and disappear. Every engagement includes onboarding, documentation, and an ongoing support option. Most clients stay with us long-term.' },
  { q:'How is pricing structured?', a:'Fixed-scope, fixed-price for most projects. No hourly billing surprises. We scope your project, give you a number, and that\'s what you pay. AI agents have optional monthly maintenance plans.' },
]

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* PAGE HEADER */}
      <div className="svc-ph">
        <div className="svc-ph-inner">
          <div className="lbl rv">Our Services</div>
          <h1 className="svc-ph-h1 rv">Everything your business<br /><em>needs to grow</em></h1>
          <p className="svc-ph-p rv">Eight battle-tested services, one committed team. Simple descriptions, real outcomes, zero jargon.</p>
          <div className="svc-ph-stats rv">
            <div className="svc-ph-stat"><span className="svc-ph-stat-n">8</span><span className="svc-ph-stat-l">Services</span></div>
            <div className="svc-ph-sep" />
            <div className="svc-ph-stat"><span className="svc-ph-stat-n">50+</span><span className="svc-ph-stat-l">Projects Delivered</span></div>
            <div className="svc-ph-sep" />
            <div className="svc-ph-stat"><span className="svc-ph-stat-n">4wk</span><span className="svc-ph-stat-l">Avg. Delivery</span></div>
            <div className="svc-ph-sep" />
            <div className="svc-ph-stat"><span className="svc-ph-stat-n">10×</span><span className="svc-ph-stat-l">Avg. ROI</span></div>
          </div>
        </div>
      </div>

      {/* SERVICES OVERVIEW GRID */}
      <section className="svc-overview">
        <div className="svc-ov-inner">
          <p className="svc-ov-label">Jump to a service</p>
          <div className="svc-ov-grid">
            {overview.map((o) => (
              <a key={o.id} href={`#${o.id}`} className="svc-ov-card">
                <span className="svc-ov-ico">{o.ico}</span>
                <span className="svc-ov-tag">{o.tag}</span>
                <span className="svc-ov-title">{o.title}</span>
                <span className="svc-ov-arr">↓</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE ROWS */}
      {services.map((s, i) => (
        <div key={s.id} id={s.id} className={`sv-row${i % 2 === 1 ? ' sv-row-alt' : ''}`}>
          <div className="sv-nbg">{s.num}</div>
          <div className="sv-split rv">
            {/* Content */}
            <div className="sv-content">
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
                    <div className="sv-met-c">↑ {m.c}</div>
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
            {/* Visual card */}
            <div className="sv-visual">
              <SvCard {...s.cardProps} />
            </div>
          </div>
        </div>
      ))}

      {/* WHY SHRIVIX */}
      <section className="svc-why">
        <div className="svc-why-inner">
          <div className="rv">
            <div className="lbl">Why Choose Shrivix</div>
            <h2 className="h2">The same commitment<br /><em>across every service</em></h2>
          </div>
          <div className="svc-why-grid">
            {[
              { ico:'⚡', title:'Two-Week Sprints', desc:'You see working results fast. We don\'t make you wait months for things to happen — every two weeks you get something real.' },
              { ico:'🔒', title:'Security by Default', desc:'Every system we build has security built in from the start — your data and your customers\' data are never an afterthought.' },
              { ico:'📈', title:'Built to Scale', desc:'Whatever we build for you today will still perform when your business is 10 times bigger — no costly rebuilds down the road.' },
              { ico:'🤝', title:'Long-Term Partnership', desc:'We don\'t hand you something and disappear. We monitor, improve, and grow with you as long as you need us.' },
              { ico:'🧠', title:'AI-First Engineering', desc:'Intelligence isn\'t a feature we bolt on — it\'s how we architect from day one. Every system learns, adapts, and improves.' },
              { ico:'💬', title:'Radical Transparency', desc:'No black boxes. You see every decision, every cost, and every tradeoff. We tell you what you need to hear — not what you want to.' },
            ].map((w) => (
              <div key={w.title} className="svc-why-card rv">
                <div className="svc-why-ico">{w.ico}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="svc-faq">
        <div className="svc-faq-inner">
          <div className="rv">
            <div className="lbl">Common Questions</div>
            <h2 className="h2">Answers before<br />you <em>even ask</em></h2>
          </div>
          <div className="svc-faq-grid">
            {faqs.map((f) => (
              <div key={f.q} className="svc-faq-item rv">
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-grid" /><div className="cta-glow" />
        <h2>Ready to get started?<br /><em>Let&apos;s talk.</em></h2>
        <p>Book a free discovery call. We&apos;ll scope your project and tell you exactly what&apos;s possible.</p>
        <div className="cta-row">
          <Link href="/contact" className="bw">Book a Free Call <ArrowIcon /></Link>
          <Link href="/products" className="bg">View Our Products</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
