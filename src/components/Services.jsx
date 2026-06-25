import { useRef, useEffect } from 'react'

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

const services = [
  { num: '01', title: 'Commercial Photography', desc: 'Product, branding, and campaign shoots that elevate your brand identity and captivate your audience.' },
  { num: '02', title: 'Editorial & Fashion', desc: 'Narrative-driven editorials for magazines, lookbooks, and fashion campaigns with cinematic precision.' },
  { num: '03', title: 'Architecture & Interiors', desc: 'Meticulous documentation of spaces — from intimate interiors to monumental architecture.' },
  { num: '04', title: 'Portrait & Headshots', desc: 'Executive, personal branding, and creative portraits that convey presence and personality.' },
  { num: '05', title: 'Post-Production', desc: 'Professional color grading, retouching, and asset management for flawless final results.' },
  { num: '06', title: 'Art Direction', desc: 'Full creative direction from concept boards through production to polished final assets.' },
]

export default function Services() {
  const headerRef = useReveal()
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()
  const r4 = useReveal()
  const r5 = useReveal()
  const r6 = useReveal()
  const cardRefs = [r1, r2, r3, r4, r5, r6]

  return (
    <section id="services">
      <div className="container">
        <div className="text-center reveal" ref={headerRef}>
          <div className="section-label">Services</div>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-desc">From concept to final delivery, every service is tailored to your vision and executed with uncompromising quality.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card reveal" key={s.num} ref={cardRefs[i]}>
              <div className="num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
