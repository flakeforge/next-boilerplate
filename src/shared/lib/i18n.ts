import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

type Messages = typeof import('../../../messages/en.json')

declare global {
  interface IntlMessages extends Messages {}
}

export const TIME_ZONE = 'Asia/Samarkand'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale
  const resolved = locale && routing.locales.includes(locale as any)
    ? locale
    : routing.defaultLocale

  return {
    locale: resolved,
    messages: (await import(`../../../messages/${resolved}.json`)).default,
    timeZone: TIME_ZONE,
  }
})
