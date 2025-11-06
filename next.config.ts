import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/shared/lib/i18n.ts')

const nextConfig: NextConfig = {
  cacheComponents: true,
}

export default withNextIntl(nextConfig)
