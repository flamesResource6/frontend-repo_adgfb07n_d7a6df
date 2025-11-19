import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8 text-white">
      <div className="mx-auto max-w-6xl px-6 text-sm text-white/60">
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} A Plus Auto Mechanics. All rights reserved.</p>
          <p>Owner-operated by Justin Wexler (Certified Mechanic)</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
