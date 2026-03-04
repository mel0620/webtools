/**
 * Clipboard utilities
 */

/** Copy a plain text string to the clipboard with optional button feedback */
export async function copyToClipboard(text, btn = null) {
  try {
    await navigator.clipboard.writeText(text)
    if (btn) flashBtn(btn, 'Copied!', 'fa-check')
    return true
  } catch {
    // Fallback for older browsers
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.focus()
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    if (btn) flashBtn(btn, 'Copied!', 'fa-check')
    return true
  }
}

/**
 * Copy the value of an <input>/<textarea> to the clipboard.
 * @param {HTMLInputElement|HTMLTextAreaElement|string} inputOrId - Element or its ID
 * @param {HTMLElement|null} btn - Optional button to flash feedback
 */
export async function copyFromInput(inputOrId, btn = null) {
  const el = typeof inputOrId === 'string'
    ? document.getElementById(inputOrId)
    : inputOrId
  if (!el) return false
  return copyToClipboard(el.value || el.textContent, btn)
}

/** Flash a button with a temporary label */
function flashBtn(btn, label = 'Copied!', icon = 'fa-check') {
  const original = btn.innerHTML
  btn.innerHTML = `<i class="fa-solid ${icon}"></i> ${label}`
  btn.disabled = true
  setTimeout(() => {
    btn.innerHTML = original
    btn.disabled = false
  }, 1800)
}
