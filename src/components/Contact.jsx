import React from 'react'
import { Phone, Mail, MapPin, ClockArrowUp } from 'lucide-react'

const Contact = () => {
  const telHref = 'tel:+11234567890'
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact details */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
            <p className="mt-3 text-white/75">Call now for fast scheduling and honest, upfront pricing.</p>

            <div className="mt-8 space-y-4">
              <a href={telHref} className="flex items-center gap-3 rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 transition hover:bg-blue-500/20">
                <Phone className="h-5 w-5 text-blue-300" />
                <div>
                  <div className="text-sm text-white/70">Call</div>
                  <div className="text-lg font-semibold">(123) 456-7890</div>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <Mail className="h-5 w-5 text-blue-300" />
                <div>
                  <div className="text-sm text-white/70">Email</div>
                  <div className="text-lg font-semibold">jkleven@aplusautomechanics.org</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <MapPin className="h-5 w-5 text-blue-300" />
                <div>
                  <div className="text-sm text-white/70">Address</div>
                  <div className="text-lg font-semibold">[Your Address Here]</div>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-300 underline underline-offset-4 hover:text-blue-200"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <ClockArrowUp className="h-5 w-5 text-blue-300" />
                <div>
                  <div className="text-sm text-white/70">Hours</div>
                  <div className="text-lg font-semibold">[Your Hours Here]</div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <iframe
              title="Google Map"
              className="h-80 w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197706504045!2d-122.41941548468032!3d37.7749292797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df9c2f6f%3A0x808f7e9f3c6f!2sYour%20Garage!5e0!3m2!1sen!2sus!4v1610000000000"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
