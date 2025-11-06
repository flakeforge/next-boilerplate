import type { FC, PropsWithChildren } from 'react'
import { Layout } from '@app/layouts'
import { MainProvider } from '@app/providers'
import { routing } from '@shared/lib'
import { getLocale } from 'next-intl/server'
import '@shared/styles/globals.css'

export { metadata, viewport } from './config'

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const locale = await getLocale()

  return (
    <html suppressHydrationWarning lang={locale}>
      <body>
        <MainProvider>
          <Layout>{children}</Layout>
        </MainProvider>
      </body>
    </html>
  )
}

RootLayout.displayName = 'Root Layout'
export default RootLayout
