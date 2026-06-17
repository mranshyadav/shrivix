'use client'
import { useState } from 'react'

interface Props {
  role: string
  children: React.ReactNode
}

export default function ApplyModal({ role, children }: Props) {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <button className="job-row" onClick={() => setOpen(true)}>
        {children}
      </button>

      {open && (
        <div className="modal open" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}>
          <div className="modal-box">
            <button className="modal-close" onClick={() => setOpen(false)}>✕</button>
            {!submitted ? (
              <div id="applyForm">
                <h3>Apply Now</h3>
                <div className="modal-role">{role}</div>
                <form onSubmit={handleSubmit}>
                  <div className="fg2"><label className="fl">Full Name *</label><input type="text" className="fi2" placeholder="Your full name" required /></div>
                  <div className="fg2"><label className="fl">Email *</label><input type="email" className="fi2" placeholder="your@email.com" required /></div>
                  <div className="fg2"><label className="fl">LinkedIn or Portfolio URL</label><input type="url" className="fi2" placeholder="https://" /></div>
                  <div className="fg2"><label className="fl">Why Shrivix? *</label><textarea className="ft2" placeholder="Tell us why you want to join and what makes you a great fit..." required /></div>
                  <button type="submit" className="msub">Submit Application →</button>
                </form>
              </div>
            ) : (
              <div className="msuccess">
                <div className="msuccess-ico">🎉</div>
                <h4>Application received!</h4>
                <p>Thank you for applying. We review every application personally and will be in touch within 5 business days.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
