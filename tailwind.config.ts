import flowbitePlugin from 'flowbite/plugin'
import type { Config } from "tailwindcss";

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    screens: {
      'sm': '768px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 768px) { ... }

      'lg': '1536px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1920px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '2160px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        }
      }
    }
  },

  plugins: [flowbitePlugin]
} as Config;
