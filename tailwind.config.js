/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': "Archivo, 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif",
      'narrow': "ArchivoNarrow, sans",
    },
    extend: {
      colors: {
        'brand-primary':   '#4a9c96',
      }
    },
  },
  plugins: [],
}

