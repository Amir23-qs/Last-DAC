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

const clients = [
  { name: 'Porsche', symbol: '\u2600' },
  { name: 'MG', symbol: '\u2726' },
  { name: 'Shell', symbol: '\u25CB' },
  { name: 'Rolex', symbol: '\u265B' },
  { name: 'LVMH', symbol: '\u2661' },
  { name: 'Samsung', symbol: '\u2605' },
]

export default function Clients() {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="clients">
      <div className="container">
        <div className="text-center reveal" ref={headerRef}>
          <div className="section-label">Our Clients</div>
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-desc">We are proud to collaborate with some of the most iconic brands in the world.</p>
        </div>
        <div className="clients-grid reveal" ref={gridRef}>
          {clients.map(c => (
            <div className="client-logo" key={c.name}>
              <div className="client-symbol">{c.symbol}</div>
              <span className="client-name">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
