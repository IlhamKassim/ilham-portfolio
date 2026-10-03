import Link from 'next/link'
import { profile } from '@/lib/data'

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Journey', href: '/journey' },
  { label: 'Résumé', href: '/resume' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-3xl font-semibold tracking-tight md:text-4xl">
              {profile.shortName}
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Web, AI and data work from {profile.location}. Built with Next.js,
              Tailwind and a lot of second drafts.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
          >
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </a>
          </nav>
        </div>
        <p className="mt-10 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
