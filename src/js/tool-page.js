/**
 * tool-page.js
 * Injected into every tool HTML via <script type="module">.
 * Handles: body style reset, navbar + footer injection, mobile menu.
 */
import '../css/main.css'
import { renderNavbar, initNavbarEvents } from './components/navbar.js'
import { renderFooter } from './components/footer.js'

// --- Reset body to a consistent dark baseline --------------------------------
// Remove all utility classes that may have been set directly on <body>
// (e.g. bg-neutral-900, p-8, bg-gradient-to-br) so that main.css body rule
// and the inline flex styles below always win.
document.body.removeAttribute('class')

// Inline styles override every class-based rule — ensures identical appearance
// across all tool pages regardless of any residual markup differences.
Object.assign(document.body.style, {
  background:      '#0f0f0f',
  color:           '#f4f4f5',
  display:         'flex',
  flexDirection:   'column',
  minHeight:       '100dvh',
  padding:         '0',
  margin:          '0',
})

// --- Inject Navbar ----------------------------------------------------------
const existingNav = document.querySelector('nav')
if (existingNav) {
  // Replace legacy inline nav with shared component
  existingNav.outerHTML = renderNavbar()
} else {
  // Prepend if missing (Group 3 pages that had no nav)
  document.body.insertAdjacentHTML('afterbegin', renderNavbar())
}

// --- Ensure main content area grows to fill available height ----------------
// Priority: <main> → #app → first non-nav/script direct child of body
const mainEl =
  document.querySelector('main') ||
  document.querySelector('#app') ||
  Array.from(document.body.children).find(
    el => el.tagName !== 'NAV' && el.tagName !== 'SCRIPT'
  ) ||
  null

if (mainEl) {
  mainEl.style.flex = '1 1 auto'
  // Remove any leftover min-h-screen / background on the content wrapper
  mainEl.style.minHeight = ''
  mainEl.style.background = ''
}

// --- Inject Footer (skip if page already has one) ---------------------------
if (!document.querySelector('footer')) {
  document.body.insertAdjacentHTML('beforeend', renderFooter())
}

// --- Mobile menu events -----------------------------------------------------
initNavbarEvents()

// --- Register service worker (PWA) -----------------------------------------
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  })
}
