import React from 'react'
import Spline from '@splinetool/react-spline'
import { Phone } from 'lucide-react'

const Hero = () => {
  const phoneNumber = '(123) 456-7890'
  const telHref = 'tel:+11234567890'

  return (
    <section className="relative h-[70vh] min-h-[540px] w-full overflow-hidden">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 text-white">
        <div className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur">
          <span className="text-xs text-white/80">Owner-operated by Justin Wexler (Certified Mechanic)</span>
        </div>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          A Plus Auto Mechanics
        </h1>
        <p className="mt-3 max-w-2xl text-base text-white/85 sm:text-lg">
          Reliable, local car repair you can trust.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={telHref} className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900">
            <Phone className="mr-2 h-4 w-4" />
            Call for a Free Quote
          </a>
          <a href={telHref} className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30">
            Book Your Service
          </a>
          <span className="self-center text-sm text-white/80 sm:ml-2">{phoneNumber}</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
