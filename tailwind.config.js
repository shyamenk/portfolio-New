const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Mono"', 'monospace']
      },
      colors: {
        react: {
          link: '#0178df',
          DEFAULT: '#20232a'
        }
      },
      boxShadow: {
        custom: '3px 3px 12px rgba(200, 200, 200, 0.3)'
      },
      flexGrow: {
        2: 2,
        3: 3,
        4: 4
      },
      keyframes: {
        disco: {
          '0%': {
            transform: 'translateX(-50%) translateY(-50%) rotate(0deg)'
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-50%) rotate(360deg)'
          }
        },
        blink: {
          '0%': {
            opacity: '0.2'
          },
          '20%': {
            opacity: '1'
          },
          '100%': {
            opacity: ' 0.2'
          }
        },
        fade: {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: ' 0.3'
          }
        },
        fadeIn: {
          '0%, 39%, 100%': {
            opacity: '0'
          },
          '40%': {
            opacity: '1'
          }
        },
        scale: {
          '0%, 100%': {
            transform: 'scale(1.0)'
          },
          '50%': {
            transform: 'scale(0)'
          }
        },
        perspective: {
          '0%': { transform: 'perspective(120px)' },
          ' 50%': { transform: 'perspective(120px) rotateY(180deg)' },
          '100%': {
            transform:
              'perspective(120px) rotateY(180deg)  rotateX(180deg)'
          }
        }
      },
      animation: {
        disco: 'disco 3s linear infinite',
        blink: 'blink 1.4s infinite both',
        fade: 'fade 1.4s infinite both',
        scale: 'scale 2s infinite',
        perspective: 'perspective 1.2s infinite',
        fadeIn: 'fadeIn 1.2s ease-in-out infinite both'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': value => {
            return {
              'animation-delay': value
            }
          }
        },
        {
          values: theme('transitionDelay')
        }
      )
    })
  ]
}
