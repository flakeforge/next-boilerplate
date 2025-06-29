import { DEFAULT_LOCALE, LOCALES } from '@lib/i18n'

import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'always',
  localeDetection: true,
})

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\\\..*).*)'],
}
