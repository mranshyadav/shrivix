'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

function Counter({
  to,
  fmt = (n: number) => String(n),
  delay = 0,
}: {
  to: number
  fmt?: (n: number) => string
  delay?: number
}) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => {
      const start = performance.now()
      const dur = 1600
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1)
        const e = 1 - Math.pow(1 - p, 3)
        setVal(Math.round(to * e))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, delay)
    return () => clearTimeout(t)
  }, [to, delay])
  return <>{fmt(val)}</>
}

const SPARK = {
  latency:    '0,48 12,44 24,42 36,36 48,30 60,28 72,20 84,14 96,10 100,8',
  accuracy:   '0,30 12,27 24,25 36,22 48,20 60,21 72,17 84,15 96,13 100,12',
  throughput: '0,50 12,46 24,42 36,36 48,30 60,24 72,16 84,10 96,5  100,4',
}

const ACTIVITIES = [
  { c: '#34d399', ico: '✓', txt: 'Model v3.1 deployed to production', t: '2s ago' },
  { c: '#60a5fa', ico: '↑', txt: 'Auto-scaled: 4 → 12 nodes', t: '1m ago' },
  { c: '#34d399', ico: '✓', txt: 'Batch pipeline: 8,400 items complete', t: '4m ago' },
]

const LOGOS = ['Accenture', 'Infosys', 'TechMahindra', 'Wipro', 'HCL', 'Cognizant', 'Deloitte', 'IBM', 'Oracle', 'SAP']

const STATS = [
  { n: '250+', l: 'Projects Delivered', c: '#60a5fa' },
  { n: '98%',  l: 'Client Satisfaction', c: '#34d399' },
  { n: '50+',  l: 'Technology Experts',  c: '#a78bfa' },
  { n: '15+',  l: 'Countries Served',    c: '#22d3ee' },
]

function Sparkline({ points, color, id }: { points: string; color: string; id: string }) {
  return (
    <svg className="hd-spark" viewBox="0 0 100 56" preserveAspectRatio="none">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,56 ${points} 100,56`} fill={`url(#${id})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function HeroNew() {
  const [prog, setProg] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => {
      let p = 0
      const id = setInterval(() => {
        p += 1.4
        setProg(Math.min(p, 78))
        if (p >= 78) clearInterval(id)
      }, 20)
      return () => clearInterval(id)
    }, 1300)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="hd-root">
        <div className="hd-aurora" />
        <div className="hd-grid" />

        <div className="hd-inner">

          {/* ── Left col ─────────────────────────────────── */}
          <div className="hd-left">
            <motion.div className="hd-eyebrow"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <span className="hd-pulse" />
              AI Infrastructure Platform
            </motion.div>

            <motion.h1 className="hd-h1"
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            >
              The Intelligence<br />
              <span className="hd-grad">Layer</span> for the<br />
              Modern Enterprise
            </motion.h1>

            <motion.p className="hd-sub"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              We architect AI agents, cloud infrastructure, and enterprise software that operates
              autonomously — built for teams scaling from startup to Fortune 500.
            </motion.p>

            <motion.div className="hd-ctas"
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            >
              <Link href="/contact" className="hd-btn-p">
                Book a Consultation
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/services" className="hd-btn-g">Explore Services</Link>
            </motion.div>

            <motion.div className="hd-pills"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.42, ease: EASE }}
            >
              {([['#34d399','SOC 2 Certified'],['#60a5fa','99.99% Uptime'],['#a78bfa','ISO 27001']] as [string,string][]).map(([dot, lbl]) => (
                <div key={lbl} className="hd-pill">
                  <span className="hd-pill-dot" style={{ background: dot }} />
                  {lbl}
                </div>
              ))}
            </motion.div>

            <motion.div className="hd-proof"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.54, ease: EASE }}
            >
              <div className="hd-avs">
                {['R','P','A','K','M'].map(l => <div key={l} className="hd-av">{l}</div>)}
              </div>
              <span className="hd-proof-txt"><strong>500+</strong> enterprises trust our platform</span>
              <span className="hd-stars">★★★★★ <span>5.0</span></span>
            </motion.div>
          </div>

          {/* ── Right col: dashboard ─────────────────────── */}
          <motion.div className="hd-right"
            initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
          >
            {/* Top notification */}
            <motion.div className="hd-notif"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.45, ease: EASE }}
            >
              <span className="hd-notif-dot" />
              <span>Model v3.1 deployed successfully</span>
              <span className="hd-notif-time">just now</span>
            </motion.div>

            {/* Main panel */}
            <div className="hd-panel">

              {/* Window chrome */}
              <div className="hd-chrome">
                <div className="hd-wdots">
                  <span className="hd-wd r"/><span className="hd-wd y"/><span className="hd-wd g"/>
                </div>
                <span className="hd-chrome-lbl">Shrivix Intelligence Platform</span>
                <div className="hd-live">
                  <span className="hd-live-dot"/>Live
                </div>
              </div>

              {/* Metrics */}
              <div className="hd-metrics">
                <div className="hd-metric">
                  <div className="hd-m-head">
                    <span className="hd-m-lbl">API Latency</span>
                    <span className="hd-delta dn">↓ 8%</span>
                  </div>
                  <div className="hd-m-val blue">
                    <Counter to={12} fmt={n => `${n}ms`} delay={950} />
                  </div>
                  <Sparkline points={SPARK.latency} color="#1a50d4" id="s1" />
                </div>
                <div className="hd-msep"/>
                <div className="hd-metric">
                  <div className="hd-m-head">
                    <span className="hd-m-lbl">Accuracy</span>
                    <span className="hd-delta up">↑ 0.2%</span>
                  </div>
                  <div className="hd-m-val green">
                    <Counter to={994} fmt={n => `${(n / 10).toFixed(1)}%`} delay={1050} />
                  </div>
                  <Sparkline points={SPARK.accuracy} color="#059669" id="s2" />
                </div>
                <div className="hd-msep"/>
                <div className="hd-metric">
                  <div className="hd-m-head">
                    <span className="hd-m-lbl">Throughput</span>
                    <span className="hd-delta up">↑ 12%</span>
                  </div>
                  <div className="hd-m-val violet">
                    <Counter to={847} fmt={n => `${n}/m`} delay={1150} />
                  </div>
                  <Sparkline points={SPARK.throughput} color="#7c3aed" id="s3" />
                </div>
              </div>

              {/* Pipeline */}
              <div className="hd-pipe">
                <div className="hd-pipe-top">
                  <span className="hd-pipe-lbl">AI Pipeline Processing</span>
                  <span className="hd-pipe-pct">{Math.round(prog)}%</span>
                </div>
                <div className="hd-ptrack">
                  <div className="hd-pfill" style={{ width: `${prog}%` }} />
                </div>
                <div className="hd-steps">
                  {['Ingest','Vectorize','Inference','Output'].map((s, i) => (
                    <div key={s} className={`hd-step${prog > i * 25 + 1 ? ' done' : ''}`}>
                      <span className="hd-sdot"/>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity */}
              <div className="hd-act">
                <div className="hd-act-head">Recent Activity</div>
                {ACTIVITIES.map((a, i) => (
                  <div key={i} className="hd-act-row">
                    <span className="hd-act-ico" style={{ color: a.c }}>{a.ico}</span>
                    <span className="hd-act-txt">{a.txt}</span>
                    <span className="hd-act-t">{a.t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating uptime card */}
            <motion.div className="hd-fcard"
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="hd-fcard-ring">
                <svg viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(5,150,105,.15)" strokeWidth="3.5"/>
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#059669" strokeWidth="3.5"
                    strokeDasharray="88 12" strokeLinecap="round"
                    transform="rotate(-90 20 20)"/>
                </svg>
              </div>
              <div>
                <div className="hd-fcard-val">99.99%</div>
                <div className="hd-fcard-lbl">Uptime SLA</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll mouse */}
        <motion.div className="hd-mouse"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        >
          <motion.span className="hd-wheel"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* ── Trust Bar ─────────────────────────────────────── */}
      <section className="hd-trust">
        <motion.div className="hd-trust-lbl"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
        >
          Powering enterprises across the globe
        </motion.div>

        <div className="hd-marq-wrap">
          <div className="hd-marq">
            {[...LOGOS, ...LOGOS].map((n, i) => (
              <div key={i} className="hd-logo">{n}</div>
            ))}
          </div>
        </div>

        <motion.div className="hd-stats"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          {STATS.map((s, i) => (
            <div key={s.l} className="hd-stat">
              <div className="hd-stat-n" style={{ color: s.c }}>{s.n}</div>
              <div className="hd-stat-l">{s.l}</div>
              {i < STATS.length - 1 && <div className="hd-stat-sep"/>}
            </div>
          ))}
        </motion.div>
      </section>
    </>
  )
}
