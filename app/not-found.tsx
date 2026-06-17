import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Page Not Found — Shrivix',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      <div style={{
        minHeight: 'calc(100vh - 72px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        background: 'var(--bg)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,80,212,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* 404 numeral */}
        <div style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(96px, 18vw, 180px)',
          fontWeight: 700,
          lineHeight: 1,
          color: 'var(--ink)',
          opacity: 0.06,
          marginBottom: '0',
          letterSpacing: '-0.04em',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}>
          404
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '520px' }}>
          <div className="lbl" style={{ justifyContent: 'center', display: 'flex', marginBottom: '24px' }}>
            Page not found
          </div>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            marginBottom: '16px',
          }}>
            This page doesn&apos;t<br /><em>exist</em>
          </h1>
          <p style={{
            fontSize: '15.5px',
            color: 'var(--muted)',
            lineHeight: 1.75,
            marginBottom: '36px',
          }}>
            The link may have moved or been removed. Head back home and find what you&apos;re looking for.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="bp">Go to Homepage</Link>
            <Link href="/contact" className="bs">Contact Us</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
