/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': "Poppins, 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif",
    },
    extend: {
      colors: {
        'brand-primary':   '#08605D',
      }
    },
  },
  plugins: [],
}

