'use client'
import { useState } from 'react'
import { sendContactEmail } from '@/app/actions/contact'

const chips = ['📞 AI Calling','✉️ Email Agent','⚡ Automation','📱 Mobile App','🌐 Web Dev','🔧 Custom','💡 Consultation']

export default function ContactForm() {
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const toggle = (c: string) =>
    setSelected(s => s.includes(c) ? s.filter(x => x !== c) : [...s, c])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      services: selected,
      budget: (form.elements.namedItem('budget') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    const result = await sendContactEmail(data)
    setLoading(false)

    if (result.ok) {
      setSubmitted(true)
    } else {
      setError(result.error ?? 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="form-card">
      <div className="form-title">Start a conversation</div>
      <div className="form-sub">We&apos;ll respond within 24 hours with a clear, helpful reply.</div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="frow">
            <div className="fgrp"><label className="flbl">First Name *</label><input name="firstName" type="text" className="finp" placeholder="Rahul" required /></div>
            <div className="fgrp"><label className="flbl">Last Name *</label><input name="lastName" type="text" className="finp" placeholder="Mehta" required /></div>
          </div>
          <div className="fgrp"><label className="flbl">Work Email *</label><input name="email" type="email" className="finp" placeholder="rahul@company.com" required /></div>
          <div className="fgrp"><label className="flbl">Company</label><input name="company" type="text" className="finp" placeholder="Your company name" /></div>
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
            <select name="budget" className="fsel">
              <option value="" disabled>Select a range</option>
              <option>Under ₹50,000</option>
              <option>₹50,000 – ₹2,00,000</option>
              <option>₹2,00,000 – ₹5,00,000</option>
              <option>₹5,00,000 – ₹10,00,000</option>
              <option>₹10,00,000+</option>
              <option>Let&apos;s discuss</option>
            </select>
          </div>
          <div className="fgrp"><label className="flbl">Tell us about your project *</label><textarea name="message" className="ftxt" placeholder="Describe what you're looking to build, automate, or improve..." required /></div>
          {error && (
            <p style={{ color: '#c0392b', fontSize: '14px', margin: '0 0 12px', lineHeight: 1.5 }}>{error}</p>
          )}
          <button type="submit" className="fsub" disabled={loading}>
            {loading ? 'Sending…' : 'Send Message'}{' '}
            {!loading && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>}
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
