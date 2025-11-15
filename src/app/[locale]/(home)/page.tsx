import type { Metadata } from 'next'
import type { FC } from 'react'
import { Home } from '@modules/home'

import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata')

  return {
    title: t('title'),
    description: t('description'),
  }
}

const HomePage: FC = () => <Home />

export default HomePage
