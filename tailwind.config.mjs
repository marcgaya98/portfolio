/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      colors: {
        carbon: {
          950: '#090909',
          900: '#0E0E0E',
          850: '#141414',
          800: '#1A1A1A',
        },
        accent: {
          DEFAULT: '#FF4F00',
          hover: '#FF6622',
          muted: 'rgba(255, 79, 0, 0.12)',
        },
      },
    },
  },
  plugins: [],
};
