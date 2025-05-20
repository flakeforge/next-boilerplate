import { type Metadata, type Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://flakeforge.com'),
  title: {
    default: 'FlakeForge – Forging ideas into reality',
    template: '%s | FlakeForge',
  },
  description:
    'A collective of developers, designers, and technologists crafting open-source tools, scalable apps, and community-driven solutions with precision and care.',
  authors: [{ name: 'FlakeForge', url: 'https://flakeforge.com' }],
  creator: 'FlakeForge',
  publisher: 'FlakeForge Team',
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: 'website',
    title: 'FlakeForge',
    description:
      'We forge ideas into purposeful digital tools — from scalable apps to open-source projects and automation bots.',
    siteName: 'FlakeForge',
    url: 'https://flakeforge.com',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FlakeForge Open Graph Image',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'FlakeForge',
    description:
      'Join FlakeForge — where ideas become open-source solutions and community-crafted tools.',
    images: ['/images/twitter-image.jpg'],
    creator: '@flakeforge',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  alternates: {
    canonical: 'https://flakeforge.com',
    languages: {
      'uz-UZ': 'https://flakeforge.com/uz',
      'ru-RU': 'https://flakeforge.com/ru',
      'en-US': 'https://flakeforge.com/en',
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f0f' },
  ],
  colorScheme: 'light dark',
}
