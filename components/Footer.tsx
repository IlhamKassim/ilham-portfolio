'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Footer() {
  const pathname = usePathname()

  // On the home page, the integrated ContactSection already provides the footer.
  if (pathname === '/') {
    return null
  }

  return (
    <footer className="border-t border-[#1F2422] bg-[#0A0C0B] py-8 font-mono text-[13px] text-[#8A918C]">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© {new Date().getFullYear()} Mohammad Ilham bin Kassim</span>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-[#C5F547] hover:underline">
            ~/ilham
          </Link>
          <a
            href="https://www.linkedin.com/in/ilhamkassim"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C5F547] transition-colors"
          >
            linkedin ↗
          </a>
          <a
            href="https://github.com/IlhamKassim"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C5F547] transition-colors"
          >
            github ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
