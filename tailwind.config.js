import withMT from '@material-tailwind/react/utils/withMT';
export default withMT({
   content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
      './node_modules/tw-elements/dist/js/**/*.js',
   ],

   theme: {
      extend: {
         animation: {
            pulse: 'pulse 1.5s linear infinite',
         },
         keyframes: {
            pulse: {
               '0%': {
                  transform: 'scale(0)',
                  opacity: 0,
               },
               '75%': {
                  transform: 'scale(3.5)',
                  opacity: 1,
               },
               '100%': {
                  transform: 'scale(4)',
                  opacity: 0.5,
               },
            },
         },
         content: {
            link: "url('/src/pages/img/arrow.svg')",
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
