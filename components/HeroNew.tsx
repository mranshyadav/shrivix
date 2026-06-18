'use client'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => <div className="hero3d-fallback" />,
})

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: EASE },
  }),
}

const INDICATORS = [
  { label: 'SOC 2 Certified', color: '#22c55e' },
  { label: '99.99% Uptime', color: '#1a50d4' },
  { label: 'ISO 27001', color: '#7c3aed' },
]

const FLOAT_CARDS = [
  {
    ico: '🧠',
    label: 'Neural Processing',
    sub: '12ms inference',
    dot: '#22c55e',
    top: '12%', right: '-20px',
    val: '99.4%', valLabel: 'Accuracy',
  },
  {
    ico: '☁️',
    label: 'Cloud Infrastructure',
    sub: 'Auto-scaling',
    dot: '#1a50d4',
    top: '50%', right: '-28px',
    val: '< 2ms', valLabel: 'Latency',
  },
  {
    ico: '⚡',
    label: 'AI Pipelines',
    sub: '18 active streams',
    dot: '#7c3aed',
    bottom: '14%', right: '-16px',
    val: '847', valLabel: 'Tasks/min',
  },
]

const LOGOS = ['Accenture', 'Infosys', 'TechMahindra', 'Wipro', 'HCL', 'Cognizant', 'Deloitte', 'IBM', 'Oracle', 'SAP']

const STATS = [
  { n: '250+', l: 'Projects Delivered', accent: '#1a50d4' },
  { n: '98%',  l: 'Client Satisfaction', accent: '#22c55e' },
  { n: '50+',  l: 'Technology Experts', accent: '#7c3aed' },
  { n: '15+',  l: 'Countries Served', accent: '#06b6d4' },
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
      mouseX.current = ((e.clientX - r.left) / r.width  - 0.5) * 2
      mouseY.current = ((e.clientY - r.top)  / r.height - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="hn-root" ref={sectionRef}>
        {/* Background effects */}
        <div className="hn-bg-grid" />
        <div className="hn-blob1" />
        <div className="hn-blob2" />
        <div className="hn-blob3" />

        <div className="hn-inner">
          {/* ── Left ─────────────────────────────────── */}
          <div className="hn-left">
            <motion.div
              custom={0} variants={FADE_UP} initial="hidden" animate="show"
              className="hn-tag"
            >
              <span className="hn-tag-dot" />
              AI × Infrastructure × Intelligence
            </motion.div>

            <motion.h1
              custom={1} variants={FADE_UP} initial="hidden" animate="show"
              className="hn-h1"
            >
              Engineering<br />
              <span className="hn-h1-em">Tomorrow&apos;s</span><br />
              Digital Infrastructure
            </motion.h1>

            <motion.p
              custom={2} variants={FADE_UP} initial="hidden" animate="show"
              className="hn-sub"
            >
              We architect the intelligent systems that power enterprise growth — from autonomous AI agents and cloud infrastructure to full-scale software that operates 24 / 7 without limits.
            </motion.p>

            <motion.div
              custom={3} variants={FADE_UP} initial="hidden" animate="show"
              className="hn-acts"
            >
              <Link href="/contact" className="hn-btn-primary">
                Book a Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/services" className="hn-btn-secondary">
                View Our Work
              </Link>
            </motion.div>

            <motion.div
              custom={4} variants={FADE_UP} initial="hidden" animate="show"
              className="hn-indicators"
            >
              {INDICATORS.map((ind) => (
                <div key={ind.label} className="hn-ind">
                  <span className="hn-ind-dot" style={{ background: ind.color }} />
                  {ind.label}
                </div>
              ))}
            </motion.div>

            <motion.div
              custom={5} variants={FADE_UP} initial="hidden" animate="show"
              className="hn-proof"
            >
              <div className="hn-avatars">
                {['R','P','A','K','M'].map((l) => (
                  <div key={l} className="hn-av">{l}</div>
                ))}
              </div>
              <div className="hn-proof-txt">
                <strong>500+ enterprises</strong> trust our platform
              </div>
              <div className="hn-stars">★★★★★ <span>5.0</span></div>
            </motion.div>
          </div>

          {/* ── Right: 3D engine ─────────────────────── */}
          <motion.div
            className="hn-right"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.25 }}
          >
            <div className="hn-canvas-wrap">
              <HeroScene mouseX={mouseX} mouseY={mouseY} />

              {/* Floating stat cards */}
              {FLOAT_CARDS.map((card) => (
                <motion.div
                  key={card.label}
                  className="hn-float-card"
                  style={{ top: card.top, bottom: card.bottom, right: card.right }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
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
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className="hn-scroll-dot"
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* ── Trust Bar ─────────────────────────────────── */}
      <section className="hn-trust">
        <motion.div
          className="hn-trust-head"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Powering enterprises across the globe
        </motion.div>

        <div className="hn-marquee-wrap">
          <div className="hn-marquee">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <div key={i} className="hn-logo-item">{name}</div>
            ))}
          </div>
        </div>

        <motion.div
          className="hn-stats-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {STATS.map((s, i) => (
            <div key={s.l} className="hn-stat">
              <div className="hn-stat-n" style={{ color: s.accent }}>{s.n}</div>
              <div className="hn-stat-l">{s.l}</div>
              {i < STATS.length - 1 && <div className="hn-stat-sep" />}
            </div>
          ))}
        </motion.div>
      </section>
    </>
  )
}
