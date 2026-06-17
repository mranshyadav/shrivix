import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Shrivix — AI Agents & Intelligent Automation for Modern Businesses'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f0e0d',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 96px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          display: 'flex',
        }} />

        {/* Accent glow */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,80,212,0.18) 0%, transparent 70%)',
          display: 'flex',
        }} />

        {/* Badge */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          background: 'rgba(26,80,212,0.12)',
          border: '1px solid rgba(26,80,212,0.28)',
          borderRadius: '100px',
          padding: '8px 20px',
          marginBottom: '36px',
        }}>
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#28c840', display: 'flex' }} />
          <span style={{ color: '#6b8eea', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            AI Agents & Intelligent Automation
          </span>
        </div>

        {/* Wordmark */}
        <div style={{
          fontSize: '96px', fontWeight: 400, color: '#ffffff',
          lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '20px',
          display: 'flex',
        }}>
          Shrivix
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: '26px', color: 'rgba(255,255,255,0.42)',
          lineHeight: 1.5, maxWidth: '680px', marginBottom: '56px',
          display: 'flex',
        }}>
          World-class software, AI agents, and automation for modern businesses.
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '0px' }}>
          {[['50+', 'Projects delivered'], ['10×', 'Average ROI'], ['24/7', 'Agent uptime'], ['8', 'Industries']].map(([n, l], i) => (
            <div key={l} style={{
              display: 'flex', flexDirection: 'column', gap: '5px',
              paddingRight: '40px', marginRight: '40px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <span style={{ fontSize: '34px', fontWeight: 700, color: '#fff', letterSpacing: '-0.04em', display: 'flex' }}>{n}</span>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, display: 'flex' }}>{l}</span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div style={{
          position: 'absolute', bottom: '52px', right: '96px',
          fontSize: '16px', color: 'rgba(255,255,255,0.2)', fontWeight: 600,
          display: 'flex',
        }}>
          shrivix.com
        </div>
      </div>
    ),
    { ...size }
  )
}
