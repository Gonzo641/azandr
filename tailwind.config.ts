import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'container-bg': '#e3e4d8',
      },
      fontFamily: {
        'vtc-carrie': ['"VTC Carrie"', 'sans-serif'],
        'dm-mono': ['"DM Mono"', 'monospace'],
        anton: ["var(--font-anton)", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
