'use client'

import type { FC } from 'react'
import { useTranslations } from 'next-intl'

export const Home: FC = () => {
  const t = useTranslations('common')

  return <div>{t('home')}</div>
}

Home.displayName = 'Home'
