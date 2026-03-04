/**
 * Shared Navbar Component
 * Injected into every page via tool-page.js or main.js
 */

const BRAND_LOGO = `
  <a href="/" class="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-brand rounded-lg" aria-label="WebTools – Home">
    <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105" 
         style="background:rgba(41,199,159,0.15);">
      <i class="fa-solid fa-layer-group text-brand text-base"></i>
    </div>
    <span class="text-base font-bold tracking-tight text-white">
      Web<span class="text-brand">Tools</span>
    </span>
  </a>
`

export function renderNavbar({ activePage = '' } = {}) {
  return `
<nav class="app-navbar" role="navigation" aria-label="Main navigation">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-[60px]">

      <!-- Brand -->
      <div class="flex items-center">
        ${BRAND_LOGO}
      </div>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-1">
        <a href="/" class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150
          ${activePage === 'home' ? 'text-brand bg-brand/10' : 'text-zinc-400 hover:text-white hover:bg-white/5'}">
          <i class="fa-solid fa-house mr-1.5"></i>Home
        </a>
        <a href="/#tools" class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150
          ${activePage === 'tools' ? 'text-brand bg-brand/10' : 'text-zinc-400 hover:text-white hover:bg-white/5'}">
          <i class="fa-solid fa-grid-2 mr-1.5"></i>All Tools
        </a>
      </div>

      <!-- Mobile menu button -->
      <button id="navbar-mobile-btn"
              class="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Open navigation menu"
              aria-expanded="false"
              aria-controls="navbar-mobile-menu">
        <i class="fa-solid fa-bars text-base"></i>
      </button>
    </div>
  </div>

  <!-- Mobile menu (hidden by default) -->
  <div id="navbar-mobile-menu"
       class="hidden md:hidden border-t"
       style="border-color:var(--surface-border)">
    <div class="px-4 py-3 space-y-1">
      <a href="/" class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
         ${activePage === 'home' ? 'text-brand bg-brand/10' : 'text-zinc-300 hover:text-white hover:bg-white/5'} transition-colors">
        <i class="fa-solid fa-house w-4"></i>Home
      </a>
      <a href="/#tools" class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
         ${activePage === 'tools' ? 'text-brand bg-brand/10' : 'text-zinc-300 hover:text-white hover:bg-white/5'} transition-colors">
        <i class="fa-solid fa-grid-2 w-4"></i>All Tools
      </a>
    </div>
  </div>
</nav>`
}

export function initNavbarEvents() {
  const btn  = document.getElementById('navbar-mobile-btn')
  const menu = document.getElementById('navbar-mobile-menu')
  if (!btn || !menu) return
  btn.addEventListener('click', () => {
    const open = !menu.classList.contains('hidden')
    menu.classList.toggle('hidden', open)
    btn.setAttribute('aria-expanded', String(!open))
    const icon = btn.querySelector('i')
    if (icon) {
      icon.className = open
        ? 'fa-solid fa-bars text-base'
        : 'fa-solid fa-xmark text-base'
    }
  })
}
