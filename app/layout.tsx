import type { Metadata } from 'next'
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { defaultMetadata } from '@/lib/seo'
import { SITE_URL } from '@/lib/site'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { profile } from '@/lib/data'

const sans = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
})

const serif = Instrument_Serif({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const mono = JetBrains_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = defaultMetadata

// Runs before first paint so the saved or system theme applies without a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})()`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: profile.name,
              alternateName: profile.shortName,
              jobTitle: profile.role,
              email: profile.email,
              telephone: profile.phone,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Papar',
                addressRegion: 'Sabah',
                addressCountry: 'MY',
              },
              alumniOf: 'Pennsylvania State University',
              url: SITE_URL,
              sameAs: [profile.linkedin, profile.github],
              description: profile.tagline,
              knowsAbout: [
                'Web development',
                'Next.js',
                'AI integration',
                'Data visualization',
                'Quantitative finance',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only z-[60] rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
