import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://ilham-portfolio.vercel.app'),
  title: 'Mohammad Ilham bin Kassim | Computer Engineering Student',
  description:
    'Computer Engineering student at Penn State University specializing in AI & Systems Programming, Leadership & Innovation. Building human-centered systems and data-driven products.',
  keywords: [
    'Mohammad Ilham bin Kassim',
    'Computer Engineering',
    'Penn State',
    'AI',
    'Machine Learning',
    'Systems Programming',
    'Leadership',
  ],
  authors: [{ name: 'Mohammad Ilham bin Kassim' }],
  creator: 'Mohammad Ilham bin Kassim',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ilhamkassim.com',
    title: 'Mohammad Ilham bin Kassim | Computer Engineering Student',
    description:
      'Computer Engineering student at Penn State University specializing in AI & Systems Programming, Leadership & Innovation.',
    siteName: 'Ilham Kassim Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Mohammad Ilham bin Kassim - Computer Engineering Student',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Ilham bin Kassim | Computer Engineering Student',
    description:
      'Computer Engineering student at Penn State University specializing in AI & Systems Programming, Leadership & Innovation.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}
