import withMT from '@material-tailwind/react/utils/withMT';
export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],

  theme: {
    extend: {
      content: {
        link: "url('C:/Users/Oleg/Desktop/projects/react/02.tourist-shop/src/pages/img/arrow.svg')",
      },
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
