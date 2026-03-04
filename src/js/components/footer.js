/**
 * Shared Footer Component
 */
export function renderFooter() {
  const year = new Date().getFullYear()
  return `
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
        <button onclick="navigator.clipboard.writeText('09205703382').then(()=>{ let t=document.getElementById('gcash-tip'); t.classList.remove('hidden'); setTimeout(()=>t.classList.add('hidden'),2000); })"
          class="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-600/30 transition-all"
          title="Copy GCash number">
          <i class="fa-solid fa-mobile-screen-button"></i>
          GCash
          <span id="gcash-tip" class="hidden absolute -top-7 left-1/2 -translate-x-1/2 bg-neutral-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap">Copied!</span>
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
