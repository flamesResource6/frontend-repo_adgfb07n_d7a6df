import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero with Spline cover */}
      <Hero />

      {/* Services */}
      <Services />

      {/* Contact & Location */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
