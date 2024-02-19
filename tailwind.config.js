/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');

module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./routes/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        standard: "7px"
      },
      colors: {
        linkBlue: '#175CD3',
        darkGray: '#101828',
        bgGray:'#0C111D',
        shadowBlue: "#c9d2e8",
        primaryLightBg: "#F9FAFB",
        primaryDark: '#161B26',
        primaryDarkColor: '#FAFAFA',
        primaryDarkActive: "#1F242F",
        primaryDarkBG: "#101828",
        placeHolderColor: "#667085",
        primaryDarkHoverColor: "#161b27",
        wheatWhite: '#F5FDFF',
        success: '#039855',
        teamBackground: '#F2F4F7',
        primaryLabelColor: "#98A2B3",
        buttonBlue: '#1947C4',
      },
      fontSize: {
        'small-400': [
          '12px',
          {
            lineHeight: '20px',
            letterSpacing: '-1%',
            fontWeight: '400',
          },
        ],
        'small-500': [
          '12px',
          {
            lineHeight: '20px',
            letterSpacing: '-1%',
            fontWeight: '500',
          },
        ],
        'small-600': [
          '12px',
          {
            lineHeight: '20px',
            letterSpacing: '-1%',
            fontWeight: '600',
          },
        ],
        'small-700': [
          '12px',
          {
            lineHeight: '20px',
            letterSpacing: '-1%',
            fontWeight: '700',
          },
        ],
        'regular-400': [
          '14px',
          {
            lineHeight: '22px',
            letterSpacing: '-1%',
            fontWeight: '400',
          },
        ],
        'regular-500': [
          '14px',
          {
            lineHeight: '22px',
            letterSpacing: '-1%',
            fontWeight: '500',
          },
        ],
        'regular-600': [
          '14px',
          {
            lineHeight: '22px',
            letterSpacing: '-1%',
            fontWeight: '600',
          },
        ],
        'large-400': [
          '16px',
          {
            lineHeight: '26px',
            letterSpacing: '-1%',
            fontWeight: '400',
          },
        ],
        'large-500': [
          '16px',
          {
            lineHeight: '26px',
            letterSpacing: '-1%',
            fontWeight: '500',
          },
        ],
        'large-600': [
          '16px',
          {
            lineHeight: '26px',
            letterSpacing: '-0.5%',
            fontWeight: '600',
          },
        ],
        'h3-400': [
          '18px',
          {
            lineHeight: '30px',
            letterSpacing: '-1%',
            fontWeight: '400',
          },
        ],
        'h3-500': [
          '18px',
          {
            lineHeight: '30px',
            letterSpacing: '-1%',
            fontWeight: '500',
          },
        ],
        'h3-600': [
          '18px',
          {
            lineHeight: '30px',
            letterSpacing: '-0.5%',
            fontWeight: '600',
          },
        ],
        'h2-400': [
          '24px',
          {
            lineHeight: '36px',
            letterSpacing: '-1%',
            fontWeight: '400',
          },
        ],
        'h2-500': [
          '24px',
          {
            lineHeight: '36px',
            letterSpacing: '-1%',
            fontWeight: '500',
          },
        ],
        'h2-600': [
          '24px',
          {
            lineHeight: '36px',
            letterSpacing: '-0.5%',
            fontWeight: '600',
          },
        ],
        'h1-400': [
          '28px',
          {
            lineHeight: '42px',
            letterSpacing: '-1%',
            fontWeight: '400',
          },
        ],
        'h1-500': [
          '28px',
          {
            lineHeight: '42px',
            letterSpacing: '-1%',
            fontWeight: '500',
          },
        ],
        'h1-600': [
          '28px',
          {
            lineHeight: '42px',
            letterSpacing: '-0.5%',
            fontWeight: '600',
          },
        ],
      },
    },
  },
  plugins: [typography],
}

