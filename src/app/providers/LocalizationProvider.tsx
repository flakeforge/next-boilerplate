import type { FC, PropsWithChildren } from 'react'
import { NextIntlClientProvider } from 'next-intl'

export const LocalizationProvider: FC<PropsWithChildren> = ({ children }) => (
  <NextIntlClientProvider>
    {children}
  </NextIntlClientProvider>
)
