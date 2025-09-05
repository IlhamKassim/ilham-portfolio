import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { defaultMetadata } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { profile } from '@/lib/data'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: profile.name,
              jobTitle: profile.headline,
              email: profile.email,
              telephone: profile.phone,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'State College',
                addressRegion: 'PA',
                addressCountry: 'USA',
              },
              url: 'https://ilham-portfolio-three.vercel.app',
              sameAs: [profile.linkedin, profile.github],
              description: profile.tagline,
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
