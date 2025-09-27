import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    path.join(__dirname, '../../apps/**/*.{js,ts,jsx,tsx}'),
    path.join(__dirname, '../../packages/**/*.{js,ts,jsx,tsx}'),
    path.join(__dirname, './components/**/*.{ts,tsx}')
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require('../../tailwind.config.base.js')],
};