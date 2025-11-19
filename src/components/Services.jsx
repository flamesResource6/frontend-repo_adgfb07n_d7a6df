import React from 'react'
import { Wrench, Oil, BatteryCharging, Gauge, Car, AlertTriangle } from 'lucide-react'

const services = [
  {
    icon: Oil,
    title: 'Oil & Filter Change',
    desc: 'Quality oils and OEM filters to keep your engine running smoothly.'
  },
  {
    icon: Wrench,
    title: 'Brake Service & Repair',
    desc: 'Pads, rotors, fluid flush, and full braking diagnostics.'
  },
  {
    icon: Gauge,
    title: 'Tyre Services',
    desc: 'Fitting, balancing, and puncture repair for a safe, smooth ride.'
  },
  {
    icon: AlertTriangle,
    title: 'Check Engine Light Diagnostics',
    desc: 'Advanced OBD-II diagnostics to identify and fix issues fast.'
  },
  {
    icon: BatteryCharging,
    title: 'Battery Testing & Replacement',
    desc: 'On-the-spot testing and replacement with high-quality batteries.'
  },
  {
    icon: Car,
    title: 'MOT Preparation & Servicing',
    desc: 'Pre-test checks and servicing to help you pass first time.'
  },
]

const Services = () => {
  return (
    <section className="relative bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
        <p className="mt-2 max-w-2xl text-white/70">Honest advice, fair pricing, and quality workmanship across all makes and models.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/30 transition hover:border-blue-500/30 hover:bg-white/[0.06]">
              <div className="mb-4 inline-flex rounded-lg bg-blue-500/20 p-2 text-blue-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/75">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
