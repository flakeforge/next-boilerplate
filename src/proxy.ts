import { DEFAULT_LOCALE, LOCALES } from '@shared/lib'

import createProxy from 'next-intl/middleware'

export default createProxy({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'always',
  localeDetection: true,
})

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\\\..*).*)'],
}
