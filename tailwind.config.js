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
        'brand-blue':  '#8ea3a8',
        'brand-green':   '#4a9c96',
        'brand-grey':  '#717171',
        'brand-gray':  '#717171',
      }
    },
  },
  plugins: [],
}

