import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'body': '#1d1f21',
        'dark': '#0f1010',
        'gold': '#d7b474',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        serif: ['var(--font-noto-serif)']
      },
    },
  },
  plugins: [],
}
export default config
