import type { FC, PropsWithChildren } from 'react'
import { TIME_ZONE } from '@shared/lib'
import { getLocale, getMessages } from 'next-intl/server'
import { LocalizationProvider } from './LocalizationProvider'
import { ThemeProvider } from './ThemeProvider'

export const MainProvider: FC<PropsWithChildren> = async ({ children }) => {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <ThemeProvider>
      <LocalizationProvider messages={messages} locale={locale} timeZone={TIME_ZONE}>
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  )
}
