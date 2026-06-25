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

export default function About() {
  const ref1 = useReveal()
  const ref2 = useReveal()

  return (
    <section id="about">
      <div className="container">
        <div className="text-center reveal" ref={ref1}>
          <div className="section-label">About</div>
          <h2 className="section-title">The Art of Seeing</h2>
          <p className="section-desc">We believe photography is not what you look at, but what you see. DAC was founded on the conviction that every image should carry meaning.</p>
        </div>
        <div className="about-grid reveal" ref={ref2}>
          <div className="about-image">
            <div className="img-placeholder">✦</div>
          </div>
          <div className="about-text">
            <h3>Capturing authenticity since 2012</h3>
            <p>What began as a small collective of visionaries has grown into a full-service photography agency trusted by Fortune 500 companies, independent publishers, and creative directors worldwide.</p>
            <p>Our approach blends classical composition with contemporary storytelling. We do not just take pictures — we create immersive visual experiences that resonate, provoke, and endure.</p>
            <div className="stats">
              <div className="stat">
                <h4>850+</h4>
                <p>Projects Delivered</p>
              </div>
              <div className="stat">
                <h4>120+</h4>
                <p>Global Clients</p>
              </div>
              <div className="stat">
                <h4>18</h4>
                <p>Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
