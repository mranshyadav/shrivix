'use client'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => <div className="hero3d-fallback" />,
})

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: EASE },
  }),
}

const FLOAT_CARDS = [
  { ico: '🤖', label: 'AI Neural Network', sub: 'Processing', dot: '#22c55e', top: '14%', right: '-18px', val: '99.8%', valLabel: 'Accuracy' },
  { ico: '☁️', label: 'Cloud Infrastructure', sub: 'Scaling up', dot: '#3b82f6', top: '52%', right: '-24px', val: '< 2ms', valLabel: 'Latency' },
  { ico: '⚡', label: 'Active Automations', sub: '14 pipelines', dot: '#a855f7', bottom: '16%', right: '-12px', val: '247', valLabel: 'Tasks Today' },
]

const LOGOS = [
  'Accenture','Infosys','TechMahindra','Wipro','HCL',
  'Cognizant','Deloitte','IBM','Oracle','SAP',
]

const STATS = [
  { n: '250+', l: 'Projects Delivered' },
  { n: '98%',  l: 'Client Satisfaction' },
  { n: '50+',  l: 'Tech Experts' },
  { n: '15+',  l: 'Countries Served' },
]

export default function HeroNew() {
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = sectionRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      mouseX.current = ((e.clientX - r.left) / r.width - 0.5) * 2
      mouseY.current = ((e.clientY - r.top)  / r.height - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="hn-root" ref={sectionRef}>
        {/* Background layers */}
        <div className="hn-bg-grid" />
        <div className="hn-bg-glow1" />
        <div className="hn-bg-glow2" />
        <div className="hn-bg-glow3" />

        <div className="hn-inner">
          {/* ── Left content ─────────────────────────────── */}
          <div className="hn-left">
            <motion.div custom={0} variants={FADE_UP} initial="hidden" animate="show" className="hn-badge">
              <span className="hn-badge-dot" />
              Accepting New Clients — 2025
            </motion.div>

            <motion.h1 custom={1} variants={FADE_UP} initial="hidden" animate="show" className="hn-h1">
              Building Intelligent<br />
              <span className="hn-h1-em">Digital Experiences</span><br />
              for the Future
            </motion.h1>

            <motion.p custom={2} variants={FADE_UP} initial="hidden" animate="show" className="hn-sub">
              We help startups, enterprises, and global businesses accelerate growth through AI, software development, cloud solutions, UI/UX design, and digital transformation.
            </motion.p>

            <motion.div custom={3} variants={FADE_UP} initial="hidden" animate="show" className="hn-acts">
              <Link href="/contact" className="hn-btn-primary">
                Book a Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/services" className="hn-btn-secondary">
                View Our Work
              </Link>
            </motion.div>

            <motion.div custom={4} variants={FADE_UP} initial="hidden" animate="show" className="hn-proof">
              <div className="hn-avatars">
                {['R','P','A','K','M'].map((l) => (
                  <div key={l} className="hn-av">{l}</div>
                ))}
              </div>
              <div className="hn-proof-txt">
                <strong>500+ businesses</strong> trust us worldwide
              </div>
              <div className="hn-stars">
                {'★★★★★'} <span>5.0</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right: 3D canvas ─────────────────────────── */}
          <motion.div
            className="hn-right"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <div className="hn-canvas-wrap">
              <HeroScene mouseX={mouseX} mouseY={mouseY} />

              {/* Floating glassmorphic cards */}
              {FLOAT_CARDS.map((card) => (
                <motion.div
                  key={card.label}
                  className="hn-float-card"
                  style={{ top: card.top, bottom: card.bottom, right: card.right }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5 + Math.random() * 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="hn-fc-header">
                    <span className="hn-fc-ico">{card.ico}</span>
                    <div>
                      <div className="hn-fc-label">{card.label}</div>
                      <div className="hn-fc-sub">
                        <span className="hn-fc-dot" style={{ background: card.dot }} />
                        {card.sub}
                      </div>
                    </div>
                  </div>
                  <div className="hn-fc-metric">
                    <span className="hn-fc-val">{card.val}</span>
                    <span className="hn-fc-vlbl">{card.valLabel}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hn-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <motion.div
            className="hn-scroll-dot"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* ── Trust Bar ──────────────────────────────────── */}
      <section className="hn-trust">
        <motion.div
          className="hn-trust-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by <strong>500+ Businesses</strong> Worldwide
        </motion.div>

        {/* Logo marquee */}
        <div className="hn-marquee-wrap">
          <div className="hn-marquee">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <div key={i} className="hn-logo-item">{name}</div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="hn-stats-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {STATS.map((s, i) => (
            <div key={s.l} className="hn-stat">
              <div className="hn-stat-n">{s.n}</div>
              <div className="hn-stat-l">{s.l}</div>
              {i < STATS.length - 1 && <div className="hn-stat-sep" />}
            </div>
          ))}
        </motion.div>
      </section>
    </>
  )
}
