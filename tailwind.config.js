/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './tools/**/*.html',
    './src/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#29C79F',
          50:  '#edfaf5',
          100: '#d2f4ea',
          200: '#a9e9d6',
          300: '#71d8bc',
          400: '#3ec4a4',
          500: '#29C79F',
          600: '#178a6e',
          700: '#156f59',
          800: '#155849',
          900: '#15493e',
        },
        surface: {
          DEFAULT: '#1a1a1a',
          card:    '#242424',
          border:  '#2e2e2e',
          hover:   '#2a2a2a',
          input:   '#1e1e1e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        'brand-glow': '0 0 40px rgba(41,199,159,0.12)',
        'card': '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)',
        'card-hover': '0 10px 30px rgba(0,0,0,0.5), 0 4px 12px rgba(41,199,159,0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
