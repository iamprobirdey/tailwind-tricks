/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        screens: {
            tablet: '960px',
            desktop: '1248px'
        },
        colors: {
            violet: '#fndnfkd',
            purple: '#3F#CBB',
            midnight: '#121063',
            metal: '#565584',
            'tahiti-blue': '#3AB7BF',
            'cool-white': '##ECEBFF',
            'bubble-gums': '#FF77E9',
            'copper-rust': '#78DCCA'
        },
        boxShadow: {
            sm: '0px 2px 4px 0px rgba (12, 10, 55, 0.15)',
            lg: '0px 8px 20px 0px rgba(18 16 99 0.08)'
        },
        fontSize: {
            xs: ['14px', { lineHeight: '24px', letterSpacing: '-0.03rem' }],
        },
        extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
  