import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { defaultMetadata } from '@/lib/seo'
import { SITE_URL } from '@/lib/site'
import { profile } from '@/lib/data'
import Navbar from '@/components/v2/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Mohammad Ilham bin Kassim — Computer Engineer',
  description:
    'AI tools and systems software, built to be trusted. Penn State Computer Engineering, May 2026.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: profile.name,
              jobTitle: profile.role,
              email: profile.email,
              telephone: profile.phone,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'State College',
                addressRegion: 'PA',
                addressCountry: 'USA',
              },
              url: SITE_URL,
              sameAs: [profile.linkedin, profile.github],
              description: profile.tagline,
            }),
          }}
        />
      </head>
      <body className="bg-[#0A0C0B] text-[#E6E9E4] font-sans antialiased selection:bg-[#C5F547] selection:text-[#0A0C0B] min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-[#C5F547] px-4 py-2 text-[#0A0C0B] font-mono focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
