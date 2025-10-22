/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        ec: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b'
        }
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.08)',
        glow: '0 8px 30px rgba(16,185,129,0.45)'
      },
      borderRadius: { 
        '2xl': '1.25rem', 
        '3xl': '1.5rem' 
      },
      keyframes: {
        floaty: { 
          '0%,100%': { transform: 'translateY(0)' }, 
          '50%': { transform: 'translateY(-6px)' } 
        },
        fadeUp: { 
          '0%': { opacity: 0, transform: 'translateY(12px)' }, 
          '100%': { opacity: 1, transform: 'none' } 
        }
      },
      animation: { 
        floaty: 'floaty 5s ease-in-out infinite', 
        fadeUp: 'fadeUp 600ms ease-out both' 
      }
    }
  },
  plugins: [],
}