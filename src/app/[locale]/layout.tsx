import type { FC, PropsWithChildren } from 'react'
import { Layout } from '@app/layouts'
import { ThemeProvider } from '@app/providers'

import { routing } from '@lib/i18n'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

import '@styles/globals.css'

export { metadata, viewport } from './config'

interface Props {
  params: Promise<{ locale: string }>
}

const LocaleLayout: FC<PropsWithChildren<Props>> = async ({ children, params }) => {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html suppressHydrationWarning lang={locale}>
      <body>
        <NextIntlClientProvider>
          <ThemeProvider>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
