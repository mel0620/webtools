# WebTools

A collection of free, privacy-first web developer tools that run entirely in the browser. No data is ever uploaded to a server.

Live site: [wb2ls.netlify.app](https://wb2ls.netlify.app/)

## Features

- 38+ tools across Image, Design, Text, Web, and AI categories
- 100% client-side processing, no server, no uploads
- Progressive Web App (PWA), installable and works offline
- Dark-themed responsive UI built with Tailwind CSS

## Tool Categories

### Image & Media
- Aspect Ratio Calculator
- Image Compressor
- Image Converter
- Image Resizer
- Image Watermark
- Social Image Resizer
- Color Palette Extractor
- Compress PDF
- PDF to JPG
- Merge PDF
- Split PDF
- Images to PDF

### CSS & Design
- Box Shadow Generator
- Clip-Path Generator
- Color Picker
- Contrast Checker
- Gradient Generator
- Icon Generator
- SVG to Data URI

### Text & Code
- Case Converter
- Fancy Text Generator
- JSON Formatter
- Lorem Ipsum Generator
- Markdown Preview
- Number Base Converter
- Readability Checker
- Text Diff
- Word Counter

### Web & SEO
- Breakpoint Tester
- Meta Tags Generator
- Password Generator
- QR Code Generator
- Screen Resolution Info

### AI Tools (runs in-browser via Transformers.js / TensorFlow.js)
- Remove Background
- AI Image Upscaler
- AI Caption Generator
- AI Text Summarizer
- AI Sentiment Analyzer

## Tech Stack

| Layer | Technology |
|---|---|
| Build tool | [Vite 5](https://vitejs.dev) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) |
| PWA | [vite-plugin-pwa](https://vite-pwa-org.netlify.app) |
| AI (NLP/Vision) | [Transformers.js 3](https://huggingface.co/docs/transformers.js) |
| AI (Upscaling) | [UpscalerJS](https://upscalerjs.com) + [TensorFlow.js](https://tensorflow.org/js) |
| PDF | [pdf-lib](https://pdf-lib.js.org) + [PDF.js](https://mozilla.github.io/pdf.js) |
| ZIP | [JSZip](https://stuk.github.io/jszip) |
| Icons | [Font Awesome 6](https://fontawesome.com) |
| Hosting | [Netlify](https://netlify.com) |

## Getting Started

**Prerequisites:** Node.js 20+

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
webtools/
├── index.html           # Homepage with tool grid
├── tools/               # Individual tool pages (one HTML file each)
├── src/
│   ├── css/main.css     # Global styles + Tailwind directives
│   └── js/
│       ├── main.js      # Homepage scripts (search, category filter)
│       ├── tool-page.js # Navbar + footer injection for tool pages
│       ├── components/  # Shared navbar / footer components
│       └── utils/       # Shared helpers (clipboard, color, text, lorem)
├── public/
│   └── manifest.webmanifest
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── netlify.toml
```

## Deployment

The site deploys automatically to Netlify on push to `main`. Configuration is in [`netlify.toml`](netlify.toml).

```bash
# Manual deploy via Netlify CLI
netlify deploy --prod
```

## Adding a New Tool

1. Create `tools/your-tool-name.html` - copy any existing tool as a template.
2. Include `/src/css/main.css` and `<script type="module" src="/src/js/tool-page.js">` for the shared shell.
3. Register the entry point in `vite.config.js` under `rollupOptions.input`.
4. Add a card to the `#tools-grid` in `index.html` with the correct `data-cat` attribute.

## License

MIT
# webtools
