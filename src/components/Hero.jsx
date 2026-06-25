export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="hero-badge">Est. 2012</div>
        <h1>
          <span className="line">Where Light</span>
          <span className="line gold">Tells Your Story</span>
        </h1>
        <p>We craft timeless visual narratives for brands, editorial, and the moments that matter most. Every frame is a dedication to artistry and intention.</p>
        <div className="hero-buttons">
          <a href="#portfolio" className="btn btn-primary">View Portfolio</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
      </div>
      <div className="scroll-indicator">
        Scroll
        <div className="line" />
      </div>
    </section>
  )
}
