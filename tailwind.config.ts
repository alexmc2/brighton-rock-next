import type { Config } from 'tailwindcss';
import {
  blue,
  green,
  red,
  purple,
  yellow,
  pink,
  orange,
  teal,
  grey,
} from '@mui/material/colors';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: blue[300],
          main: blue[500],
          dark: blue[700],
          contrastText: '#fff',
        },
        secondary: {
          light: green[300],
          main: green[500],
          dark: green[700],
          contrastText: '#fff',
        },
        error: {
          light: red[300],
          main: red[500],
          dark: red[700],
          contrastText: '#fff',
        },
        purple: {
          light: purple[300],
          main: purple[500],
          dark: purple[700],
          contrastText: '#fff',
        },
        yellow: {
          light: yellow[300],
          main: yellow[500],
          dark: yellow[700],
          contrastText: '#000',
        },
        pink: {
          light: pink[300],
          main: pink[500],
          dark: pink[700],
          contrastText: '#fff',
        },
        orange: {
          light: orange[300],
          main: orange[500],
          dark: orange[700],
          contrastText: '#fff',
        },
        teal: {
          light: teal[300],
          main: teal[500],
          dark: teal[700],
          contrastText: '#fff',
        },
        grey: {
          light: grey[300],
          main: grey[500],
          dark: grey[700],
          contrastText: '#000',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
