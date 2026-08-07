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
        navy: '#16233F',
        'navy-dark': '#0E1826',
        silver: '#7E8998',
        'silver-lt': '#A6AFBC',
        cream: '#F1F3F6',
        charcoal: '#2C2C2C',
        mid: '#5C6672',
        rule: '#D6DCE2',
        'section-alt': '#E6EAEE',
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
