/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      height: {
        '128': '600px',
        "quarte":"80%"
      },
      colors: {
        'Wisteria': '#ACACDE',
        "Azure":"#E5FCFF",
        "Uraniun":"#ABDAFC",
        "WP":"#25D366"
      },
    },
  },
  plugins: [],
}
