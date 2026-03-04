/**
 * Shared Footer Component
 */
export function renderFooter() {
  const year = new Date().getFullYear()
  return `
<!-- QR Modal -->
<div id="qr-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="qr-modal-title">
  <!-- Backdrop -->
  <div id="qr-modal-backdrop" class="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="document.getElementById('qr-modal').classList.add('hidden'); document.getElementById('qr-modal').classList.remove('flex');"></div>
  <!-- Card -->
  <div class="relative z-10 bg-neutral-900 border border-neutral-700 rounded-2xl p-6 w-full max-w-xs text-center shadow-2xl">
    <button onclick="document.getElementById('qr-modal').classList.add('hidden'); document.getElementById('qr-modal').classList.remove('flex');"
      class="absolute top-3 right-3 text-zinc-500 hover:text-white transition-colors" aria-label="Close">
      <i class="fa-solid fa-xmark text-lg"></i>
    </button>
    <div id="qr-modal-icon" class="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-lg"></div>
    <h3 id="qr-modal-title" class="text-white font-semibold text-sm mb-1"></h3>
    <p id="qr-modal-subtitle" class="text-zinc-500 text-xs mb-4"></p>
    <img id="qr-modal-img" src="" alt="QR Code" class="w-48 h-48 object-contain mx-auto rounded-xl border border-neutral-700 bg-white p-2" />
    <p class="mt-4 text-zinc-500 text-xs">Scan with your <span id="qr-modal-app"></span> app to send your support. Thank you! 🙏</p>
  </div>
</div>

<footer class="mt-auto border-t py-5 sm:py-8" style="border-color:var(--surface-border);">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

    <!-- Top row: branding + privacy note -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">

      <div class="flex items-center gap-2 text-zinc-500 text-sm">
        <i class="fa-solid fa-layer-group text-brand"></i>
        <span><span class="text-white font-medium">Web<span class="text-brand">Tools</span></span></span>
        <span class="hidden sm:inline text-zinc-600">&ndash; Free, browser-based developer utilities</span>
      </div>

      <div class="flex items-center gap-3 text-xs text-zinc-600">
        <span class="flex items-center gap-1.5">
          <i class="fa-solid fa-lock text-brand/70"></i>
          100% client-side &bull; no data sent to servers
        </span>
        <span class="hidden sm:inline">&copy; ${year}</span>
      </div>

    </div>

    <!-- Bottom row: author + donation -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t" style="border-color:var(--surface-border);">

      <p class="text-xs text-zinc-500">
        Built by <a href="https://www.facebook.com/rommel.cuneta" target="_blank" rel="noopener noreferrer" class="text-white font-medium hover:text-brand transition-colors">Rommel Cuneta</a>
      </p>

      <div class="flex items-center gap-2">
        <span class="text-xs text-zinc-600 mr-1">Support this project:</span>

        <!-- GCash -->
        <button id="footer-gcash-btn"
          class="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-600/30 transition-all"
          title="Show GCash QR Code">
          <i class="fa-solid fa-qrcode"></i>
          GCash
        </button>

        <!-- Maya -->
        <button id="footer-maya-btn"
          class="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-green-600/20 text-green-400 hover:bg-green-600/30 border border-green-600/30 transition-all"
          title="Show Maya QR Code">
          <i class="fa-solid fa-qrcode"></i>
          Maya
        </button>

        <!-- PayPal -->
        <a href="https://paypal.me/RommelCuneta" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0070ba]/20 text-[#4faee8] hover:bg-[#0070ba]/30 border border-[#0070ba]/30 transition-all">
          <i class="fa-brands fa-paypal"></i>
          PayPal
        </a>
      </div>

    </div>

  </div>
</footer>`
}

/**
 * Wire up footer QR modal buttons — call after renderFooter() is in the DOM.
 */
export function initFooter() {
  const modal      = document.getElementById('qr-modal')
  const modalImg   = document.getElementById('qr-modal-img')
  const modalTitle = document.getElementById('qr-modal-title')
  const modalSub   = document.getElementById('qr-modal-subtitle')
  const modalIcon  = document.getElementById('qr-modal-icon')
  const modalApp   = document.getElementById('qr-modal-app')

  function openQR({ src, title, subtitle, iconClass, iconBg, app }) {
    modalImg.src       = src
    modalImg.alt       = title + ' QR Code'
    modalTitle.textContent  = title
    modalSub.textContent    = subtitle
    modalIcon.className     = `w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-lg ${iconBg}`
    modalIcon.innerHTML     = `<i class="${iconClass}"></i>`
    modalApp.textContent    = app
    modal.classList.remove('hidden')
    modal.classList.add('flex')
  }

  document.getElementById('footer-gcash-btn')?.addEventListener('click', () => {
    openQR({
      src:       '/gcash.jpg',
      title:     'GCash',
      subtitle:  'Scan to send via GCash',
      iconClass: 'fa-solid fa-mobile-screen-button text-blue-400',
      iconBg:    'bg-blue-600/20',
      app:       'GCash',
    })
  })

  document.getElementById('footer-maya-btn')?.addEventListener('click', () => {
    openQR({
      src:       '/maya.jpg',
      title:     'Maya',
      subtitle:  'Scan to send via Maya',
      iconClass: 'fa-solid fa-mobile-screen-button text-green-400',
      iconBg:    'bg-green-600/20',
      app:       'Maya',
    })
  })

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden')
      modal.classList.remove('flex')
    }
  })
}
