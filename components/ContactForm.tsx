'use client'
import { useState } from 'react'

const chips = ['📞 AI Calling','✉️ Email Agent','⚡ Automation','📱 Mobile App','🌐 Web Dev','🔧 Custom','💡 Consultation']

export default function ContactForm() {
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const toggle = (c: string) =>
    setSelected(s => s.includes(c) ? s.filter(x => x !== c) : [...s, c])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="form-card">
      <div className="form-title">Start a conversation</div>
      <div className="form-sub">We&apos;ll respond within 24 hours with a clear, helpful reply.</div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="frow">
            <div className="fgrp"><label className="flbl">First Name *</label><input type="text" className="finp" placeholder="Rahul" required /></div>
            <div className="fgrp"><label className="flbl">Last Name *</label><input type="text" className="finp" placeholder="Mehta" required /></div>
          </div>
          <div className="fgrp"><label className="flbl">Work Email *</label><input type="email" className="finp" placeholder="rahul@company.com" required /></div>
          <div className="fgrp"><label className="flbl">Company</label><input type="text" className="finp" placeholder="Your company name" /></div>
          <div className="fgrp">
            <label className="flbl">Interested in</label>
            <div className="chips">
              {chips.map(c => (
                <div key={c} className={`chip${selected.includes(c) ? ' on' : ''}`} onClick={() => toggle(c)}>{c}</div>
              ))}
            </div>
          </div>
          <div className="fgrp">
            <label className="flbl">Budget Range</label>
            <select className="fsel">
              <option value="" disabled>Select a range</option>
              <option>Under ₹50,000</option>
              <option>₹50,000 – ₹2,00,000</option>
              <option>₹2,00,000 – ₹5,00,000</option>
              <option>₹5,00,000 – ₹10,00,000</option>
              <option>₹10,00,000+</option>
              <option>Let&apos;s discuss</option>
            </select>
          </div>
          <div className="fgrp"><label className="flbl">Tell us about your project *</label><textarea className="ftxt" placeholder="Describe what you're looking to build, automate, or improve..." required /></div>
          <button type="submit" className="fsub">
            Send Message{' '}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <p className="fnote">We never share your data. By submitting you agree to our Privacy Policy.</p>
        </form>
      ) : (
        <div className="fsuccess">
          <div className="fsuccess-ico">✅</div>
          <h3>Message received!</h3>
          <p>Thanks for reaching out. We&apos;ll get back to you within 24 hours with a clear, helpful response.</p>
        </div>
      )}
    </div>
  )
}
