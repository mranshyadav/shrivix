import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import ApplyModal from '@/components/ApplyModal'

export const metadata: Metadata = { title: 'Careers' }

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const jobs = [
  { emoji:'📞', title:'Sales Development Representative (SDR)', meta:'Sales · India / Remote', tags:['Full-time','Remote'] },
  { emoji:'🤝', title:'Account Executive', meta:'Sales · India / Remote', tags:['Full-time','Remote'] },
  { emoji:'📊', title:'Sales Manager', meta:'Sales Leadership · India (Hybrid)', tags:['Full-time'] },
  { emoji:'⚙️', title:'Revenue Operations Manager', meta:'RevOps · India / Remote', tags:['Full-time','Remote'] },
  { emoji:'✉️', title:'Open Application', meta:'Any department · Tell us what you\'re great at', tags:['Any Role'] },
]

export default function CareersPage() {
  return (
    <>
      <div className="ph"><div className="ph-inner">
        <div className="lbl">Join Our Team</div>
        <h1 className="h2">Build the future of<br /><em>intelligent automation</em></h1>
        <p>We&apos;re a small, ambitious team solving real problems with AI and modern software. If you care deeply about craft and want your work to matter, we&apos;d love to meet you.</p>
      </div></div>

      <section className="cult-section" style={{padding:'72px 48px',background:'var(--bg)'}}>
        <div className="rv"><div className="lbl">How We Work</div><h2 className="h2">A culture built on <em>ownership</em></h2></div>
        <div className="cult-grid rv">
          <div className="cult-card"><div className="cult-ico">🧠</div><h3>Deep Work First</h3><p>We protect focused time. Minimal meetings, async-first, and space to do your best thinking.</p></div>
          <div className="cult-card"><div className="cult-ico">🚀</div><h3>Ship Fast, Learn Faster</h3><p>Two-week sprints. Real users. Rapid feedback. We build and improve without bureaucracy slowing us down.</p></div>
          <div className="cult-card"><div className="cult-ico">🌍</div><h3>Remote-Friendly</h3><p>Work from wherever you do your best thinking. We care about output and impact, not where you sit.</p></div>
          <div className="cult-card"><div className="cult-ico">📈</div><h3>Grow With Us</h3><p>We&apos;re growing fast. Early team members get real ownership, influence, and opportunities to lead.</p></div>
          <div className="cult-card"><div className="cult-ico">🤝</div><h3>Honest Feedback</h3><p>Direct, respectful communication. We say what we mean, disagree openly, and decide together.</p></div>
          <div className="cult-card"><div className="cult-ico">✨</div><h3>High Standards</h3><p>We care about quality. Whatever you ship carries the Shrivix name — we hold each other to excellent work.</p></div>
        </div>
      </section>

      <section className="jobs-section" style={{padding:'72px 48px',background:'var(--white)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'36px',gap:'16px',flexWrap:'wrap'}} className="rv">
          <div><div className="lbl">Open Roles</div><h2 className="h2">Current <em>openings</em></h2></div>
          <p style={{fontSize:'14.5px',color:'var(--muted)',maxWidth:'300px',lineHeight:1.65}}>Don&apos;t see the right role? Send an open application — we hire for talent, not just titles.</p>
        </div>
        <div className="jobs-list rv">
          {jobs.map((job) => (
            <ApplyModal key={job.title} role={job.title}>
              <div className="job-dept">{job.emoji}</div>
              <div className="job-info">
                <div className="job-title">{job.title}</div>
                <div className="job-meta">{job.meta}</div>
              </div>
              <div className="job-tags">
                {job.tags.map(t => (
                  <span key={t} className={`jtag${t === 'Full-time' ? ' ft' : t === 'Remote' ? ' rem' : ''}`}>{t}</span>
                ))}
              </div>
              <div className="jarr">→</div>
            </ApplyModal>
          ))}
        </div>
      </section>

      <section className="ben-section" style={{padding:'72px 48px',background:'var(--bg)',borderBottom:'1px solid var(--border)'}}>
        <div className="rv"><div className="lbl">Benefits</div><h2 className="h2">Why people <em>love</em> working here</h2></div>
        <div className="ben-grid rv">
          <div className="ben-item"><div className="ben-ico">💰</div><h4>Competitive Pay</h4><p>Market-rate compensation with regular reviews and performance bonuses.</p></div>
          <div className="ben-item"><div className="ben-ico">🏖️</div><h4>Flexible Leave</h4><p>Generous leave policy. We trust you to manage your time and recharge when needed.</p></div>
          <div className="ben-item"><div className="ben-ico">📚</div><h4>Learning Budget</h4><p>Annual budget for courses, conferences, and anything that makes you better at your craft.</p></div>
          <div className="ben-item"><div className="ben-ico">🏥</div><h4>Health Coverage</h4><p>Full health insurance for you and your immediate family members.</p></div>
          <div className="ben-item"><div className="ben-ico">🖥️</div><h4>Equipment</h4><p>Best-in-class laptop and any tools you need to do excellent work from day one.</p></div>
          <div className="ben-item"><div className="ben-ico">📊</div><h4>Equity Potential</h4><p>Early team members receive meaningful equity options as the company grows.</p></div>
          <div className="ben-item"><div className="ben-ico">🤝</div><h4>Mentorship</h4><p>Direct access to senior engineers and founders invested in your growth.</p></div>
          <div className="ben-item"><div className="ben-ico">🚀</div><h4>Real Impact</h4><p>Work that ships to real clients and produces measurable business outcomes every sprint.</p></div>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-grid" /><div className="cta-glow" />
        <h2>Ready to do the best<br />work of your <em>career?</em></h2>
        <p>We&apos;re always looking for exceptional people — even if the timing isn&apos;t right today, let&apos;s connect.</p>
        <div className="cta-row">
          <Link href="/contact" className="bw">Apply Now →</Link>
          <Link href="/about" className="bg">Learn About Us</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
