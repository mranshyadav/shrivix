import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <>
      <div className="contact-wrap">
        <div className="contact-left rv">
          <div className="lbl">Get In Touch</div>
          <h1 className="ch1">Let&apos;s build something <em>remarkable.</em></h1>
          <p className="cdesc">Tell us what you&apos;re working on. Whether you need an AI agent this week or a full product built from scratch — we&apos;ll scope it, price it, and deliver it properly.</p>
          <div className="c-info">
            <div className="ci"><div className="ci-ico">📧</div><div><div className="ci-lbl">Email</div><div className="ci-val"><a href="mailto:hello@shrivix.com">hello@shrivix.com</a></div></div></div>
            <div className="ci"><div className="ci-ico">📞</div><div><div className="ci-lbl">Phone</div><div className="ci-val"><a href="tel:+917669449009">+91 76694 49009</a></div></div></div>
            <div className="ci"><div className="ci-ico">📍</div><div><div className="ci-lbl">Location</div><div className="ci-val">India — Serving clients worldwide</div></div></div>
            <div className="ci"><div className="ci-ico">🕐</div><div><div className="ci-lbl">Response Time</div><div className="ci-val">Within 24 hours, Mon–Sat</div></div></div>
          </div>
          <div className="avail"><div className="avdot" /><p>Currently accepting new clients — limited spots available this month</p></div>
        </div>
        <div className="rv d1">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  )
}
