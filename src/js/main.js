/**
 * main.js – entry point for index.html
 * Handles: navbar, footer, search/filter, PWA install prompt.
 */
import '../css/main.css'
import { renderNavbar, initNavbarEvents } from './components/navbar.js'
import { renderFooter } from './components/footer.js'

// Inject shared nav/footer
document.getElementById('app-navbar').innerHTML = renderNavbar({ activePage: 'home' })
document.getElementById('app-footer').innerHTML = renderFooter()
initNavbarEvents()

// ─── Remove page loader once content is ready ───────────────────────────────
function dismissLoader () {
  const loader = document.getElementById('page-loader')
  if (loader) loader.classList.add('done')
}

// requestAnimationFrame ensures the browser has painted the injected navbar
// before we fade-out the loader, so there is zero layout shift visible.
requestAnimationFrame(() => requestAnimationFrame(dismissLoader))

// Handle back-forward cache restores (iOS Safari, Chrome bfcache):
// the page is shown from snapshot. JS doesn't re-run, but pageshow fires.
window.addEventListener('pageshow', e => {
  if (e.persisted) dismissLoader()
})

// --- Tool search/filter -----------------------------------------------------
const searchInput = document.getElementById('tool-search')
const categoryBtns = document.querySelectorAll('.cat-btn')
const toolCards = document.querySelectorAll('[data-tool]')
const emptyState = document.getElementById('empty-state')

let activeCategory = 'all'
let searchQuery = ''

function filterTools() {
  let visible = 0
  toolCards.forEach(card => {
    const name = card.dataset.name?.toLowerCase() ?? ''
    const cat  = card.dataset.cat  ?? ''
    const matchSearch = searchQuery === '' || name.includes(searchQuery)
    const matchCat    = activeCategory === 'all' || cat === activeCategory
    const show = matchSearch && matchCat
    card.classList.toggle('hidden', !show)
    if (show) visible++
  })
  if (emptyState) emptyState.classList.toggle('hidden', visible > 0)
}

if (searchInput) {
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value.toLowerCase().trim()
    filterTools()
  })
}

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    activeCategory = btn.dataset.cat
    categoryBtns.forEach(b => {
      b.classList.toggle('text-brand', b.dataset.cat === activeCategory)
      b.classList.toggle('bg-brand/10', b.dataset.cat === activeCategory)
      b.classList.toggle('border-brand', b.dataset.cat === activeCategory)
      b.classList.toggle('text-zinc-400', b.dataset.cat !== activeCategory)
      b.classList.toggle('bg-transparent', b.dataset.cat !== activeCategory)
      b.classList.toggle('border-transparent', b.dataset.cat !== activeCategory)
    })
    filterTools()
  })
})

// --- PWA install prompt -----------------------------------------------------
let deferredPrompt = null
const installBtn = document.getElementById('pwa-install-btn')

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault()
  deferredPrompt = e
  if (installBtn) {
    installBtn.classList.remove('hidden')
  }
})

if (installBtn) {
  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') installBtn.classList.add('hidden')
    deferredPrompt = null
  })
}

window.addEventListener('appinstalled', () => {
  if (installBtn) installBtn.classList.add('hidden')
  deferredPrompt = null
})

// --- PWA service worker -----------------------------------------------------
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  })
}
