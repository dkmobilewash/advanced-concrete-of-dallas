import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C3557',
        accent: '#E8710A',
        'accent-dark': '#C85E08',
        dark: '#111827',
        mid: '#4B5563',
        light: '#F3F4F6',
        border: '#E5E7EB',
      },
      fontFamily: {
        display: ['var(--font-oswald)'],
        body: ['var(--font-inter)'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceChevron: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        bounceChevron: 'bounceChevron 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
