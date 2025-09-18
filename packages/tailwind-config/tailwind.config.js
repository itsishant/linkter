/** @type {import('tailwindcss').Config} */
module.exports = {
      content: [
        // Define content paths for all your apps/packages
        "../../apps/**/*.{js,ts,jsx,tsx}",
        "../../packages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};