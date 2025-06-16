import createConfig from '@antfu/eslint-config'

import readableTailwind from 'eslint-plugin-readable-tailwind'

export default createConfig({
  react: true,
  lessOpinionated: true,
}).append({
  plugins: { 'readable-tailwind': readableTailwind },
  rules: {
    'readable-tailwind/no-duplicate-classes': ['error'],
    'readable-tailwind/no-unnecessary-whitespace': ['error'],
    'readable-tailwind/multiline': ['error', { printWidth: 120, preferSingleLine: true }],
    'readable-tailwind/sort-classes': ['error', { entryPoint: 'src/assets/css/tailwind.css' }],
  },
})
