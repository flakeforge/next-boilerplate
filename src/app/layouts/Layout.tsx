import { type FC, type PropsWithChildren } from 'react'

import { Footer } from '@widgets/footer'
import { Header } from '@widgets/header'

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex min-h-screen flex-col">
    <Header />

    <main className="flex-1">{children}</main>

    <Footer />
  </div>
)
