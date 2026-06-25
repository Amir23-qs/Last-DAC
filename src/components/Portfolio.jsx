import { useRef, useEffect } from 'react'

const projects = [
  { title: 'Silhouette No. 7', category: 'Fashion Editorial' },
  { title: 'Concrete & Glass', category: 'Architecture' },
  { title: 'Luminance', category: 'Commercial' },
  { title: 'Ephemeral', category: 'Fine Art' },
  { title: 'The Gaze', category: 'Portrait' },
  { title: 'Untamed', category: 'Landscape' },
]

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

export default function Portfolio({ onSelect }) {
  const headerRef = useReveal()
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()
  const r4 = useReveal()
  const r5 = useReveal()
  const r6 = useReveal()
  const itemRefs = [r1, r2, r3, r4, r5, r6]

  return (
    <section id="portfolio">
      <div className="container">
        <div className="text-center reveal" ref={headerRef}>
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Selected Works</h2>
          <p className="section-desc">A curated collection of our finest projects across fashion, architecture, editorial, and commercial photography.</p>
        </div>
      </div>
      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <div
            className="portfolio-item reveal"
            key={p.title}
            ref={itemRefs[i]}
            onClick={() => onSelect(p)}
          >
            <div className="p-icon" />
            <div className="p-overlay">
              <h4>{p.title}</h4>
              <p>{p.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
