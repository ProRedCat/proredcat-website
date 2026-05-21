import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";


const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      colors: {
        'foreground': '#001A4D',
        'primary-cream': '#FFFDE7',
        'primary-navy-dark': '#001A4D',
        'primary-charcoal': '#001A4D',
        'primary-teal': '#003D39',
        'primary-green-light': '#D8FFE7',
        'primary-green-dark': '#003E19',
        'primary-blue-light': '#D8FFFD',
        'primary-blue-dark': '#003D39',
        'red-secondary': '#B42318',
        'orange-secondary': '#B42318',
      },
      // @ts-expect-error - typography theme function types are not exported
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.primary-navy-dark'),
            a: {
              color: theme('colors.primary-navy-dark'),
            },
            h1: { color: theme('colors.primary-navy-dark') },
            h2: { color: theme('colors.primary-navy-dark') },
            h3: { color: theme('colors.primary-navy-dark') },
            h4: { color: theme('colors.primary-navy-dark') },
            strong: { color: theme('colors.primary-navy-dark') },
            blockquote: {
              color: theme('colors.primary-green-dark'),
              borderLeftColor: theme('colors.primary-green-light'),
            },
            code: {
              color: theme('colors.primary-navy-dark')
            }
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
