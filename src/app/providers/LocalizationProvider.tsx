'use client'

import type { AbstractIntlMessages } from 'next-intl'
import type { FC, PropsWithChildren } from 'react'
import { NextIntlClientProvider } from 'next-intl'

interface LocalizationProviderProps extends PropsWithChildren {
  messages: AbstractIntlMessages
  locale: string
  timeZone?: string
}

export const LocalizationProvider: FC<LocalizationProviderProps> = ({ children, messages, locale, timeZone }) => (
  <NextIntlClientProvider messages={messages} locale={locale} timeZone={timeZone}>
    {children}
  </NextIntlClientProvider>
)
