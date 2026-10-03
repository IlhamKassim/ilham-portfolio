'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'
import { profile } from '@/lib/data'

// Same-page sections link as "/#id" so they also work from /journey and /resume.
const navItems = [
  { name: 'Services', href: '/#services', section: 'services' },
  { name: 'Work', href: '/#work', section: 'work' },
  { name: 'About', href: '/#about', section: 'about' },
  { name: 'Experience', href: '/#experience', section: 'experience' },
  { name: 'Notes', href: '/#notes', section: 'notes' },
  { name: 'Journey', href: '/journey', section: null },
]

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Highlight the nav item for whichever section is crossing the upper third of the viewport.
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(null)
      return
    }
    // Hero and contact have no nav item; observing them clears the highlight there.
    const ids = [
      'hero',
      ...(navItems.map((i) => i.section).filter(Boolean) as string[]),
      'contact',
    ]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: '-30% 0px -65% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [pathname])

  const isActive = (item: (typeof navItems)[number]) =>
    item.section ? activeSection === item.section : pathname === item.href

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Home"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground font-mono text-xs font-bold text-background">
            IK
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-sm font-semibold">{profile.shortName}</span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Freelance developer
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                isActive(item)
                  ? 'bg-secondary text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <Link
            href="/#services"
            className="hidden items-center gap-1 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85 sm:inline-flex"
          >
            Get a quote
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="border-t border-border md:hidden">
          <div className="container mx-auto flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-border/60 py-3 text-base font-medium last:border-0"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-1 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background"
            >
              Get a quote
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
