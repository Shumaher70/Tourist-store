const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],

  theme: {
    extend: {
      screens: {
        sm: '640px',

        md: '768px',

        lg: '1024px',

        xl: '1280px',

        '2xl': '1536px',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tw-elements/dist/plugin.cjs')],
});
