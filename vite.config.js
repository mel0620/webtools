import { defineConfig } from 'vite'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  root: '.',

  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'icons/*.png'],
      manifest: false, // Using external manifest.webmanifest
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cdn-cache',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],

  build: {
    outDir: 'dist',
    target: 'es2018',          // modern browsers; safe with Netlify CDN
    sourcemap: false,           // no source maps in production; reduces deploy size
    cssCodeSplit: true,         // per-page CSS chunks (already Vite default)
    assetsInlineLimit: 0,       // never inline assets as base64 to keep HTML lean
    chunkSizeWarningLimit: 1200, // PDF/HEIC libs are legitimately large
    rollupOptions: {
      input: {
        main:                resolve(__dirname, 'index.html'),
        'breakpoint-tester': resolve(__dirname, 'tools/breakpoint-tester.html'),
        'case-converter':    resolve(__dirname, 'tools/case-converter.html'),
        'color-picker':      resolve(__dirname, 'tools/color-picker.html'),
        'gradient-generator':resolve(__dirname, 'tools/gradient-generator.html'),
        'icon-generator':    resolve(__dirname, 'tools/icon-generator.html'),
        'image-compressor':  resolve(__dirname, 'tools/image-compressor.html'),
        'image-converter':   resolve(__dirname, 'tools/image-converter.html'),
        'images-to-pdf':     resolve(__dirname, 'tools/images_to_pdf.html'),
        'lorem-ipsum':       resolve(__dirname, 'tools/lorem-ipsum.html'),
        'markdown-preview':  resolve(__dirname, 'tools/markdown-preview.html'),
        'meta-tags':         resolve(__dirname, 'tools/meta-tags.html'),
        'qr-code-generator': resolve(__dirname, 'tools/qr-code-generator.html'),
        'screen-resolution': resolve(__dirname, 'tools/screen-resolution.html'),
        'svg-to-datauri':    resolve(__dirname, 'tools/svg-to-datauri.html'),
        'text-diff':         resolve(__dirname, 'tools/text-diff.html'),
        // New tools
        'password-generator':    resolve(__dirname, 'tools/password-generator.html'),
        'number-base-converter': resolve(__dirname, 'tools/number-base-converter.html'),
        'word-counter':          resolve(__dirname, 'tools/word-counter.html'),
        'image-resizer':         resolve(__dirname, 'tools/image-resizer.html'),
        'box-shadow-generator':  resolve(__dirname, 'tools/box-shadow-generator.html'),
        'contrast-checker':      resolve(__dirname, 'tools/contrast-checker.html'),
        'clip-path-generator':   resolve(__dirname, 'tools/clip-path-generator.html'),
        // Session tools
        'social-image-resizer':    resolve(__dirname, 'tools/social-image-resizer.html'),
        'color-palette-extractor': resolve(__dirname, 'tools/color-palette-extractor.html'),
        'readability-checker':     resolve(__dirname, 'tools/readability-checker.html'),
        'image-watermark':         resolve(__dirname, 'tools/image-watermark.html'),
        'aspect-ratio-calculator': resolve(__dirname, 'tools/aspect-ratio-calculator.html'),
        'fancy-text-generator':    resolve(__dirname, 'tools/fancy-text-generator.html'),
        'json-formatter':          resolve(__dirname, 'tools/json-formatter.html'),
        'merge-pdf':               resolve(__dirname, 'tools/merge-pdf.html'),
        'split-pdf':               resolve(__dirname, 'tools/split-pdf.html'),
        // PDF & AI tools
        'compress-pdf':            resolve(__dirname, 'tools/compress-pdf.html'),
        'pdf-to-jpg':              resolve(__dirname, 'tools/pdf-to-jpg.html'),
        'remove-background':       resolve(__dirname, 'tools/remove-background.html'),
        'ai-image-upscaler':       resolve(__dirname, 'tools/ai-image-upscaler.html'),
        'ai-caption-generator':    resolve(__dirname, 'tools/ai-caption-generator.html'),
        'ai-text-summarizer':      resolve(__dirname, 'tools/ai-text-summarizer.html'),
        'ai-sentiment-analyzer':   resolve(__dirname, 'tools/ai-sentiment-analyzer.html'),
      },
    },
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/js/components'),
    },
  },

  server: {
    port: 5173,
    open: true,
  },
})
