'use client'

import type { FC } from 'react'
import { useTheme } from 'next-themes'
import { useTransition } from 'react'

export const Header: FC = () => {
  const { theme, setTheme } = useTheme()
  const [isPending, startTransition] = useTransition()

  const handleThemeToggle = () => {
    startTransition(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    })
  }

  return (
    <header className="flex items-center justify-between">
      <p>header</p>

      <button
        type="button"
        onClick={handleThemeToggle}
        disabled={isPending}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? 'light mode' : 'dark mode'}
      </button>
    </header>
  )
}

Header.displayName = 'Header'
