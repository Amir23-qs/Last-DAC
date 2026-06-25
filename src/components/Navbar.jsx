import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#clients', label: 'Clients' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="#hero" className="logo"><span>DAC</span></a>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
