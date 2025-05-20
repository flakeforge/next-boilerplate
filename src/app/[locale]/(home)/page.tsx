import { type FC } from 'react'
import { type Metadata } from 'next'

import { Home } from '@modules/home'

export const metadata: Metadata = {
  title: 'Welcome to FlakeForge',
  description:
    'Discover how FlakeForge transforms bold ideas into real-world digital products. Explore our open-source projects, scalable applications, and developer tools.',
}

const HomePage: FC = () => <Home />

export default HomePage
