import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ locale }) => {
  'use cache'

  const resolved = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale

  return {
    locale: resolved,
    messages: (await import(`../../../messages/${resolved}.json`)).default,
  }
})
