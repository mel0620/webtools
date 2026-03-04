/**
 * Text / case conversion utilities
 */

const CASES = {
  upper:      { label: 'UPPERCASE',      fn: t => t.toUpperCase() },
  lower:      { label: 'lowercase',      fn: t => t.toLowerCase() },
  title:      { label: 'Title Case',     fn: t => t.replace(/\w\S*/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase()) },
  sentence:   { label: 'Sentence case',  fn: t =>
    t.replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase()).replace(/(?<=[A-Z])([A-Z]+)/g, m => m.toLowerCase())
  },
  camel:      { label: 'camelCase',      fn: t => t
      .replace(/[\s_-]+(\w)/g, (_, c) => c.toUpperCase())
      .replace(/^\w/, c => c.toLowerCase())
  },
  pascal:     { label: 'PascalCase',     fn: t => t
      .replace(/[\s_-]+(\w)/g, (_, c) => c.toUpperCase())
      .replace(/^\w/, c => c.toUpperCase())
  },
  snake:      { label: 'snake_case',     fn: t => t
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[\s-]+/g, '_')
      .toLowerCase()
  },
  kebab:      { label: 'kebab-case',     fn: t => t
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase()
  },
  constant:   { label: 'CONSTANT_CASE',  fn: t => t
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[\s-]+/g, '_')
      .toUpperCase()
  },
  dot:        { label: 'dot.case',       fn: t => t
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[\s_-]+/g, '.')
      .toLowerCase()
  },
  path:       { label: 'path/case',      fn: t => t
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[\s_-]+/g, '/')
      .toLowerCase()
  },
  toggle:     { label: 'tOGGLE cASE',    fn: t => t.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('') },
  alternating:{ label: 'aLtErNaTiNg',   fn: t => t.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('') },
  reverse:    { label: 'Reverse Text',   fn: t => t.split('').reverse().join('') },
  slug:       { label: 'url-slug',       fn: t => t
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/[\s_]+/g, '-')
      .replace(/-+/g, '-')
  },
}

/**
 * Convert text to a specific case type.
 * @param {string} text
 * @param {string} type - One of the keys in CASES
 * @returns {{ result: string, label: string } | null}
 */
export function convertCase(text, type) {
  const c = CASES[type]
  if (!c) return null
  return { result: c.fn(text), label: c.label }
}

export function countCharacters(text) {
  return text.length
}

export function countWords(text) {
  return text.trim() ? text.trim().split(/\s+/).length : 0
}
