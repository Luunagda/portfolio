import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    // colors: {
    //   // transparent: 'transparent',
    //   'blue-light-cyan': '#94e0f5',
    //   'blue-dark-cyan': '#11207c',
    // },
    extend: {
      colors: {
        heading: '#090909',
        copy: '#234345',
        accent: '#268baa',
        border: '#e2e4e8',
        dim: '#59797b',
        'bg-base-100': '#090909',
        'blue-light-cyan': '#94e0f5',
        'blue-dark-cyan': '#11207c',
        'black-cyan': 'rgb(9, 9, 9)',
        'purple-cyan': '#761558',
        'yellow-cyan': '#f0b81b',
        'yellow-ligh-cyan': '#ffeb5d',
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        heading: ['Poppins', ...defaultTheme.fontFamily.mono],
      },
      // fontSize: {
      //   'vs': ['0.8125rem', '1.5'],
      //   'sm': ['0.875rem', '1rem'],
      //   'post-title': ['2rem', '1.5'],
      // },
      // screens: {
      //   lp: { max: '1440px' },
      //   tl: { max: '1199px' },
      //   tp: { max: '1023px' },
      //   ph: { max: '767px' },
      // },
      // spacing: {
      //   15: '3.75rem',
      //   23: '5.75rem',
      //   95: '23.75rem',
      //   content: '48.75rem',
      // },
    },
  },
  plugins: [
    // plugin(function ({ addVariant }) {
    //   addVariant('hocus', ['&:hover', '&:focus'])
    //   addVariant('group-hocus', ['.group:hover &', '.group:focus &'])
    // }),
    require('daisyui'),
  ],
}
