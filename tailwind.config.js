/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      "inter": ["Inter", "sans-serif"],
    },
    colors: {
      "green": "hsl(75, 94%, 57%)",
      "white": "hsl(0, 0%, 100%)",
      "grey": "hsl(0, 0%, 20%)",
      "dark-grey": "hsl(0, 0%, 12%)",
      "off-black": "hsl(0, 0%, 8%)"
    },
    extend: {},
  },
  plugins: [],
}

