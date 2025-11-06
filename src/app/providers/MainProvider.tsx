import type { FC, PropsWithChildren } from 'react'
import { LocalizationProvider } from './LocalizationProvider'
import { ThemeProvider } from './ThemeProvider'

export const MainProvider: FC<Required<PropsWithChildren>> = ({ children }) => (
  <ThemeProvider>
    <LocalizationProvider>
      {children}
    </LocalizationProvider>
  </ThemeProvider>
)
