'use client'

import type { FC } from 'react'
import { useTranslations } from 'next-intl'

export const Footer: FC = () => {
  const t = useTranslations('common')

  return (
    <footer className="sticky bottom-0 z-50 text-9xl">{t('footer')}</footer>
  )
}

Footer.displayName = 'Footer'
