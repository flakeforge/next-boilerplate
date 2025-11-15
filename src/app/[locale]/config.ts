import type { Metadata, Viewport } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata')
  const locale = await getLocale()

  return {
    metadataBase: new URL('https://flakeforge.com'),
    title: {
      default: t('title'),
      template: '%s | FlakeForge',
    },
    description: t('description'),
    authors: [{ name: 'FlakeForge', url: 'https://flakeforge.com' }],
    creator: 'FlakeForge',
    publisher: 'FlakeForge Team',
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      title: t('title'),
      description: t('description'),
      siteName: 'FlakeForge',
      url: `https://flakeforge.com/${locale}`,
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
      title: t('title'),
      description: t('description'),
      images: ['/images/twitter-image.jpg'],
      creator: '@flakeforge',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    alternates: {
      canonical: `https://flakeforge.com/${locale}`,
      languages: {
        'uz-UZ': 'https://flakeforge.com/uz',
        'ru-RU': 'https://flakeforge.com/ru',
        'en-US': 'https://flakeforge.com/en',
      },
    },
  }
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
