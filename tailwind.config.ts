import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
      }
    },
  },
  plugins: [],
};
export default config;
