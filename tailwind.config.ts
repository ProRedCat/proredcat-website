import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'primary-cream': '#FFFDE7',
        'primary-navy-dark': '#001A4D',
        'primary-green-light': '#D8FFE7',
        'primary-green-dark': '#003E19',
        'primary-blue-light': '#D8FFFD',
        'primary-blue-dark': '#003D39',
        'red-secondary': '#FF0000',
        'orange-secondary': '#FF0000',
      },
      // @ts-ignore
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
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
