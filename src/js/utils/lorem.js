/**
 * Lorem ipsum generator utilities
 */

const WORDS = [
  'lorem','ipsum','dolor','sit','amet','consectetur','adipiscing','elit','sed','do',
  'eiusmod','tempor','incididunt','ut','labore','et','dolore','magna','aliqua','enim',
  'ad','minim','veniam','quis','nostrud','exercitation','ullamco','laboris','nisi','aliquip',
  'ex','ea','commodo','consequat','duis','aute','irure','in','reprehenderit','voluptate',
  'velit','esse','cillum','eu','fugiat','nulla','pariatur','excepteur','sint','occaecat',
  'cupidatat','non','proident','sunt','culpa','qui','officia','deserunt','mollit','anim',
  'est','laborum','perspiciatis','unde','omnis','iste','natus','error','accusantium',
  'doloremque','laudantium','totam','rem','aperiam','eaque','ipsa','quae','ab','illo',
  'inventore','veritatis','quasi','architecto','beatae','vitae','dicta','explicabo',
  'nemo','ipsam','quia','voluptas','aspernatur','aut','odit','fugit','consequuntur',
  'magni','dolores','eos','ratione','sequi','nesciunt','neque','porro','quisquam',
  'dolorem','adipisci','numquam','eius','modi','tempora','incidunt','magnam','quaerat',
]

function pick() { return WORDS[Math.floor(Math.random() * WORDS.length)] }

function sentence(minWords = 7, maxWords = 15) {
  const len = minWords + Math.floor(Math.random() * (maxWords - minWords + 1))
  const words = Array.from({ length: len }, pick)
  words[0] = words[0][0].toUpperCase() + words[0].slice(1)
  return words.join(' ') + '.'
}

function paragraph(minSentences = 3, maxSentences = 7) {
  const count = minSentences + Math.floor(Math.random() * (maxSentences - minSentences + 1))
  return Array.from({ length: count }, sentence).join(' ')
}

/**
 * Generate lorem ipsum content.
 * @param {{ type: 'paragraphs'|'sentences'|'words'|'list', count: number, startWithLorem?: boolean, html?: boolean }} opts
 * @returns {string}
 */
export function generateLorem({ type = 'paragraphs', count = 3, startWithLorem = true, html = false } = {}) {
  let pieces = []
  const prefix = startWithLorem ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' : ''

  switch (type) {
    case 'paragraphs': {
      const paras = Array.from({ length: count }, (_, i) => {
        const p = paragraph()
        return i === 0 ? prefix + p : p
      })
      pieces = html ? paras.map(p => `<p>${p}</p>`) : paras
      break
    }
    case 'sentences': {
      const sents = Array.from({ length: count }, sentence)
      if (startWithLorem && sents.length > 0) sents[0] = 'Lorem ipsum dolor sit amet.'
      pieces = html ? [`<p>${sents.join(' ')}</p>`] : [sents.join(' ')]
      break
    }
    case 'words': {
      const words = Array.from({ length: count }, pick)
      if (startWithLorem && words.length > 2) { words[0] = 'lorem'; words[1] = 'ipsum' }
      const text = words.join(' ')
      pieces = html ? [`<p>${text}</p>`] : [text]
      break
    }
    case 'list': {
      const items = Array.from({ length: count }, () => sentence(3, 8).replace(/\.$/, ''))
      pieces = html
        ? [`<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`]
        : items.map(i => `• ${i}`)
      break
    }
    default:
      pieces = [paragraph()]
  }

  return html ? pieces.join('\n') : pieces.join('\n\n')
}

/** Generate from a named preset key */
export function generateFromPreset(presetName) {
  const preset = LOREM_PRESETS[presetName]
  if (!preset) return ''
  return generateLorem(preset)
}

export const LOREM_PRESETS = {
  short:    { type: 'paragraphs', count: 1,  startWithLorem: true,  label: 'Short (1 paragraph)' },
  medium:   { type: 'paragraphs', count: 3,  startWithLorem: true,  label: 'Medium (3 paragraphs)' },
  long:     { type: 'paragraphs', count: 7,  startWithLorem: true,  label: 'Long (7 paragraphs)' },
  headline: { type: 'words',      count: 6,  startWithLorem: false, label: 'Headline (6 words)' },
  list:     { type: 'list',       count: 5,  startWithLorem: false, label: 'List (5 items)' },
}
