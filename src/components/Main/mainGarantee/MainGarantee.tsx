import { Carousel, Typography, Button } from '@material-tailwind/react';
import { mainGaranteeTrigger } from './mainGaranteeTrigger';
import { NavLink } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

const dammyBD = [
   {
      img: './garantee-bg-1.webp',
      title: 'LIFETIME WARRANTY',
      description: `All HEIMPLANET Products are built to withstand the harsh
      test of time. If any of our products do not perform as
      promised, just contact us!`,
      src: '/blogs/projekte/lebenslanger-support-garantie',
   },

   {
      img: './garantee-bg-2.webp',
      title: '1% FOR THE PLANET',
      description: `It is not so much for its beauty that the forest makes a
      claim upon men's hearts, as for that subtle something, that
      quality of air that emanation from old trees, that so
      wonderfully changes and renews a weary spirit.`,
      src: '/blogs/projekte/1-for-the-planet',
   },

   {
      img: './garantee-bg-3.webp',
      title: 'DYECOSHELL',
      description: `It is not so much for its beauty that the forest makes a
      claim upon men's hearts, as for that subtle something, that
      quality of air that emanation from old trees, that so
      wonderfully changes and renews a weary spirit.`,
      src: '/blogs/designraum/dyecoshell™',
   },
];

const MainGarantee = () => {
   return (
      <Carousel
         className="xl:h-[70vh] 2xl:h-[80vh] lg:h-[60vh] w-full overflow-y-hidden"
         prevArrow={() => false}
         nextArrow={() => false}
         navigation={({ setActiveIndex, activeIndex }) => (
            <div className="absolute w-full h-[25%] px-[10%] bottom-4 left-2/4 z-50 flex -translate-x-2/4 pt-10 sm:py-10 ">
               <div className=" flex w-full h-full justify-between items-center border-t-[1px] border-white">
                  {mainGaranteeTrigger.map((_, i) => (
                     <img
                        key={i}
                        src={require(`./${_}`)}
                        alt="1"
                        className={`block w-20 md:w-40 md:pt-10 cursor-pointer transition-all ${
                           activeIndex === i ? 'opacity-100' : 'opacity-50'
                        }`}
                        onClick={() => setActiveIndex(i)}
                     />
                  ))}
               </div>
            </div>
         )}
      >
         {dammyBD &&
            dammyBD.map((item) => (
               <div key={nanoid()} className="relative flex h-full w-full ">
                  <div className="w-full h-full">
                     <img
                        src={require(`${item.img}`)}
                        alt="garantee-bg-3.webp"
                        className="h-full w-full object-cover brightness-[.8]"
                     />
                  </div>
                  <div className="absolute wrapper flex flex-col gap-5 lg:w-2/4 sm:w-3/4 w-full">
                     <Typography className="uppercase self-start text-white font-normal sm:text-4xl text-2xl py-2 border-y-[1px] border-white whitespace-nowrap">
                        {item.title}
                     </Typography>

                     <Typography className="text-white">
                        {item.description}
                     </Typography>
                     <div className="flex gap-2">
                        <NavLink
                           onClick={() => window.scrollTo(0, 0)}
                           to={`${item.src}`}
                        >
                           <Button
                              size="lg"
                              color="white"
                              className="rounded-none mt-5"
                           >
                              LEARN MORE
                           </Button>
                        </NavLink>
                     </div>
                  </div>
               </div>
            ))}
      </Carousel>
   );
};

export default MainGarantee;
