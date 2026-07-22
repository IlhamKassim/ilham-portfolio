import { Metadata } from 'next'
import { SITE_URL } from './site'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Mohammad Ilham bin Kassim | Computer Engineering Graduate',
  description:
    'Computer Engineering graduate of Penn State University specializing in AI & Systems Programming, Leadership & Innovation. Building human-centered systems and data-driven products.',
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
    url: SITE_URL,
    title: 'Mohammad Ilham bin Kassim | Computer Engineering Graduate',
    description:
      'Computer Engineering graduate of Penn State University specializing in AI & Systems Programming, Leadership & Innovation.',
    siteName: 'Ilham Kassim Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Mohammad Ilham bin Kassim - Computer Engineering Graduate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Ilham bin Kassim | Computer Engineering Graduate',
    description:
      'Computer Engineering graduate of Penn State University specializing in AI & Systems Programming, Leadership & Innovation.',
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
}
