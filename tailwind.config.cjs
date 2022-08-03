/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {
      height: {
        '128': '600px',
      },
      maxHeight: {
        '128': '70%',
      },
      colors: {
        'Wisteria': '#ACACDE',
        "Azure":"#E5FCFF",
        "Uraniun":"#ABDAFC",
        "WP":"#B8336A"
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
]
}
