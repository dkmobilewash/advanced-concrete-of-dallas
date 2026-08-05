import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '24px',
    },
    extend: {
      colors: {
        navy: '#1B2B3A',
        'navy-dark': '#111D27',
        gold: '#B8863B',
        'gold-lt': '#D4A45A',
        cream: '#F5F0E8',
        charcoal: '#2C2C2C',
        mid: '#5A5A5A',
        rule: '#D9D0C0',
        'section-alt': '#EDE8DF',
      },
      fontFamily: {
        heading: ['Oswald', 'Arial Narrow', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1160px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-out forwards',
      },
      spacing: {
        header: '72px',
        'header-mobile': '60px',
      },
    },
  },
  plugins: [],
}
export default config
