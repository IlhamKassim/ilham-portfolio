'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: '/work', href: isHome ? '#work' : '/#work' },
    { label: '/experience', href: isHome ? '#experience' : '/#experience' },
    { label: '/stack', href: isHome ? '#stack' : '/#stack' },
    { label: '/journey', href: '/journey' },
    { label: '/directions', href: '/directions' },
    { label: '/contact', href: isHome ? '#contact' : '/#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1F2422] bg-[#0A0C0B]/85 backdrop-blur-md font-mono text-[13px]">
      <div className="flex items-center justify-between gap-4 px-[clamp(20px,4vw,48px)] py-4">
        {/* Brand */}
        <Link
          href={isHome ? '#top' : '/'}
          className="font-medium text-[#C5F547] hover:opacity-80 transition-opacity"
        >
          ~/ilham
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-[#8A918C]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-[#C5F547] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Status Indicator */}
        <div className="hidden sm:flex items-center gap-2 text-[#8A918C]">
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5F547] opacity-75" />
            <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#C5F547] shadow-[0_0_10px_#C5F547]" />
          </span>
          <span className="text-xs">available · full-time 2026</span>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#8A918C] hover:text-[#C5F547] p-1 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1F2422] bg-[#0E1110] px-6 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#8A918C] hover:text-[#C5F547] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-2 border-t border-[#1F2422] text-[#8A918C] text-xs">
            <span className="h-[7px] w-[7px] rounded-full bg-[#C5F547] shadow-[0_0_10px_#C5F547]" />
            <span>available · full-time 2026</span>
          </div>
        </div>
      )}
    </header>
  )
}
