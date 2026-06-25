import { useRef, useEffect, useState } from 'react'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function Contact() {
  const ref = useReveal()
  const [btnText, setBtnText] = useState('Send Message')
  const [btnBg, setBtnBg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setBtnText('Message Sent')
    setBtnBg('#B8AE90')
    setTimeout(() => {
      setBtnText('Send Message')
      setBtnBg('')
      e.target.reset()
    }, 2500)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="text-center reveal" ref={ref}>
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let&apos;s Create Together</h2>
          <p className="section-desc">Have a project in mind? We would love to hear about it. Reach out and let us bring your vision to light.</p>
        </div>
        <div className="contact-grid reveal">
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p>Whether you need a full campaign, editorial coverage, or a consultation, our team is ready to collaborate.</p>
            <div className="contact-details">
              <div className="item">
                <span className="icon">✉</span>
                <span className="text">hello@dac.agency</span>
              </div>
              <div className="item">
                <span className="icon">✆</span>
                <span className="text">+1 (212) 555-0198</span>
              </div>
              <div className="item">
                <span className="icon">◈</span>
                <span className="text">47 W 18th St, New York, NY 10011</span>
              </div>
              <div className="item">
                <span className="icon">◷</span>
                <span className="text">Mon – Fri / 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <input type="text" placeholder="Project Type" />
            <textarea placeholder="Tell us about your project..." required />
            <button type="submit" className="btn btn-primary" style={btnBg ? { background: btnBg } : undefined}>
              {btnText}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
