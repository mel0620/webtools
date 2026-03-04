/**
 * Color utilities: conversion, formatting, and palette generation
 */

// ── Conversion ──────────────────────────────────────────────────────────────

export function hexToRgb(hex) {
  const m = hex.replace('#', '').match(/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)
  return m ? { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) } : null
}

export function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')
}

export function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2
  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / d + 2) / 6; break
      default: h = ((r - g) / d + 4) / 6
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
}

export function hslToRgb(h, s, l) {
  s /= 100; l /= 100
  const k = n => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return { r: Math.round(f(0) * 255), g: Math.round(f(8) * 255), b: Math.round(f(4) * 255) }
}

// ── Formatting ───────────────────────────────────────────────────────────────

export function formatRgb({ r, g, b }) {
  return `rgb(${r}, ${g}, ${b})`
}

export function formatHsl({ h, s, l }) {
  return `hsl(${h}, ${s}%, ${l}%)`
}

// ── Palettes ─────────────────────────────────────────────────────────────────

export function generateShades(rgb, steps = 5) {
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
  return Array.from({ length: steps * 2 + 1 }, (_, i) => {
    const l = Math.max(0, Math.min(100, hsl.l + (i - steps) * (90 / (steps * 2))))
    const r = hslToRgb(hsl.h, hsl.s, l)
    return { ...r, hex: rgbToHex(r.r, r.g, r.b), l }
  })
}

function rotate(hsl, deg) {
  const h = (hsl.h + deg + 360) % 360
  const r = hslToRgb(h, hsl.s, hsl.l)
  return { ...r, hex: rgbToHex(r.r, r.g, r.b) }
}

export function getComplementary(rgb) {
  return rotate(rgbToHsl(rgb.r, rgb.g, rgb.b), 180)
}

export function getAnalogous(rgb) {
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
  return [-30, 0, 30].map(d => rotate(hsl, d))
}

export function getTriadic(rgb) {
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
  return [0, 120, 240].map(d => rotate(hsl, d))
}

export function getSplitComplementary(rgb) {
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
  return [0, 150, 210].map(d => rotate(hsl, d))
}
