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
      keyframes: {
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1},
        }
      },
      animation: {
        fadeOut: 'fadeOut 1s ease-in-out',
        fadeIn: 'fadeIn 1s ease-in-out',
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
