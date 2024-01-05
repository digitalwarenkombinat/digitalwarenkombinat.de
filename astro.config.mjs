import preact from '@astrojs/preact';
import { defineConfig } from 'astro/config'
import AstroPWA from '@vite-pwa/astro'

export default defineConfig({
  integrations: [
    preact(),
    AstroPWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Digitalwarenkombinat',
        short_name: 'Diwako',
        description: 'Digitalagentur für Museen, Archive, Bibliotheken und Galerien. Webdesign, Entwicklung und Beratung für digitalisierte Sammlungen.',
        theme_color: '#dd8d0e',
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png"
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ]
      }
    })
  ]
})
