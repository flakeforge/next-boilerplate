import { hasLocale } from 'next-intl'
import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'
import { getRequestConfig } from 'next-intl/server'

export const LOCALES = ['en', 'ru', 'uz'] as const
export const DEFAULT_LOCALE = 'en'

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
})

const { Link, redirect, usePathname, useRouter, getPathname }
  = createNavigation(routing)

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  return {
    locale,
    messages: (await import(`../../../messages/${locale}.json`)).default,
  }
})

export { getPathname, Link, redirect, usePathname, useRouter }
