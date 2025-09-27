/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Enable all default plugins
  corePlugins: {
    preflight: true,
  },
  // Ensure JIT mode is enabled
  mode: 'jit',
  // Important for Next.js
  important: true,
  // Add any custom configurations here
}
