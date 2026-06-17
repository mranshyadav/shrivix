'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import LogoSvg from './LogoSvg'

const links = [
  { href: '/', label: 'Home', id: 'home' },
  { href: '/services', label: 'Services', id: 'services' },
  { href: '/products', label: 'Products', id: 'products' },
  { href: '/about', label: 'About', id: 'about' },
  { href: '/careers', label: 'Careers', id: 'careers' },
]

export default function Nav() {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
    window.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="logo">
          <LogoSvg />
        </Link>
        <div className="nav-pill">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? 'active' : ''}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="btn-nav">Get Started</Link>
        <button
          className={`hamburger${drawerOpen ? ' open' : ''}`}
          id="hamb"
          onClick={() => setDrawerOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`drawer${drawerOpen ? ' open' : ''}`} id="drawer">
        {links.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setDrawerOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="d-cta" onClick={() => setDrawerOpen(false)}>
          Get Started →
        </Link>
      </div>
    </>
  )
}
