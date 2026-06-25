import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Clients from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import './App.css'

export default function App() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio onSelect={setSelected} />
      <Services />
      <Clients />
      <Contact />
      <Footer />
      <Lightbox project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
