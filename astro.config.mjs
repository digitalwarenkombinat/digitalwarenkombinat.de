import mdx from '@astrojs/mdx'
import { defineConfig } from 'astro/config'
import rehypeExternalLinks from 'rehype-external-links'
import { site } from './src/consts'
import { defaultLocale, locales } from './src/i18n/i18n'
const sitemapLocales = Object.fromEntries(
  locales.map((_, i) => [locales[i], locales[i]]),
) // Create an object with keys and values based on locales

import sitemap from '@astrojs/sitemap'

import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: site,
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => page.secret !== true,
      i18n: {
        defaultLocale: defaultLocale,
        locales: sitemapLocales,
      },
    }),
    tailwind(),
  ],
  i18n: {
    defaultLocale: defaultLocale,
    locales: locales,
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: {
            type: 'text',
            value: ' 🔗',
          },
          target: '_blank',
          rel: ['nofollow', 'noreferrer'],
        },
      ],
    ],
  },
})
