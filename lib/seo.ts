import { Metadata } from 'next'
import { SITE_URL } from './site'

const title = 'Ilham Kassim | Freelance web, AI and data developer'
const description =
  'Freelance developer from Sabah, Malaysia. Websites, web apps, AI features and data dashboards for clients worldwide, plus programming tutoring. Builder of SabahKu and ShariahTrading. B.S. Computer Engineering, Penn State.'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: '%s | Ilham Kassim',
  },
  description,
  keywords: [
    'Mohammad Ilham bin Kassim',
    'Ilham Kassim',
    'freelance developer Malaysia',
    'freelance web developer Sabah',
    'Next.js developer',
    'AI integration',
    'data dashboard',
    'programming tutor',
    'Penn State Computer Engineering',
  ],
  authors: [{ name: 'Mohammad Ilham bin Kassim' }],
  creator: 'Mohammad Ilham bin Kassim',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title,
    description,
    siteName: 'Ilham Kassim',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
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
