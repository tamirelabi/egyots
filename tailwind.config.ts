import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3C6E4A',
        secondary: '#A7D09A',
        accent: '#C8DDC3',
        foreground: '#1a1a1a',
        muted: '#666666',
        background: '#ffffff',
      },
      fontFamily: {
        headline: ['var(--font-headline)', 'sans-serif'],
        subheading: ['var(--font-subheading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
