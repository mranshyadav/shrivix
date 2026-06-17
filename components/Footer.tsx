import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="fc">
        <div className="fc-brand">
          <div className="fc-logo">Shrivix</div>
          <p>AI agents, intelligent automation, and world-class software for modern businesses.</p>
          <div className="socs">
            <a href="mailto:hello@shrivix.com" className="soc" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>
        <div className="fc-nav">
          <div className="fc-col">
            <div className="fc-head">Services</div>
            <ul>
              <li><Link href="/services">Custom Solutions</Link></li>
              <li><Link href="/services">SaaS Development</Link></li>
              <li><Link href="/services">App Development</Link></li>
              <li><Link href="/services">AI Cold Calling</Link></li>
              <li><Link href="/services">Email Automation</Link></li>
              <li><Link href="/services">Workflow Automation</Link></li>
            </ul>
          </div>
          <div className="fc-col">
            <div className="fc-head">Company</div>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="fc-col">
            <div className="fc-head">Contact</div>
            <ul>
              <li><a href="mailto:hello@shrivix.com">hello@shrivix.com</a></li>
              <li><a href="tel:+917669449009">+91 76694 49009</a></li>
              <li>India — Serving clients worldwide</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fc-bottom">
        <span>© {year} Shrivix. All rights reserved.</span>
        <div className="fc-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
