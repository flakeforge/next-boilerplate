'use client'

import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useTransition } from 'react'

export const Header: FC = () => {
  const { theme, setTheme } = useTheme()
  const [isPending, startTransition] = useTransition()
  const t = useTranslations('common')
  const tTheme = useTranslations('theme')

  const handleThemeToggle = () => {
    startTransition(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    })
  }

  return (
    <header className="flex items-center justify-between">
      <p>{t('header')}</p>

      <button
        type="button"
        suppressHydrationWarning
        onClick={handleThemeToggle}
        disabled={isPending}
        aria-label={tTheme('toggle')}
      >
        {theme === 'dark' ? tTheme('light') : tTheme('dark')}
      </button>
    </header>
  )
}

Header.displayName = 'Header'
