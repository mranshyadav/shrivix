import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      {/* Status bar */}
      <div className="ft-bar">
        <div className="ft-bar-inner">
          <div className="ft-avail">
            <span className="ft-avail-dot" />
            Currently accepting new projects
          </div>
          <Link href="/contact" className="ft-bar-cta">
            Book a free call →
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="ft-main">
        {/* Brand */}
        <div className="ft-brand">
          <div className="ft-logo">Shrivix</div>
          <p className="ft-tagline">AI agents, intelligent automation, and world-class software for modern businesses worldwide.</p>
          <div className="ft-socials">
            <a href="mailto:hello@shrivix.com" className="ft-soc" aria-label="Email">
              <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
            <a href="https://linkedin.com/company/shrivix" className="ft-soc" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://x.com/shrivix" className="ft-soc" aria-label="X">
              <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.732-8.836L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="ft-col">
          <div className="ft-col-head">Services</div>
          <ul>
            <li><Link href="/services">Custom Solutions</Link></li>
            <li><Link href="/services">SaaS Development</Link></li>
            <li><Link href="/services">App Development</Link></li>
            <li><Link href="/services">AI Cold Calling</Link></li>
            <li><Link href="/services">Email Automation</Link></li>
            <li><Link href="/services">Workflow Automation</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="ft-col">
          <div className="ft-col-head">Company</div>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div className="ft-col">
          <div className="ft-col-head">Connect</div>
          <ul>
            <li><a href="mailto:hello@shrivix.com">hello@shrivix.com</a></li>
            <li><a href="tel:+917669449009">+91 76694 49009</a></li>
            <li><span>India — Worldwide</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ft-bottom">
        <span className="ft-copy">© {year} Shrivix Technologies. All rights reserved.</span>
        <div className="ft-legal">
          <span className="ft-made">Made with ♥ in India</span>
        </div>
      </div>
    </footer>
  )
}
