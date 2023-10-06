import { Typography } from '@material-tailwind/react';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import Carousel from 'react-multi-carousel';

interface DetailsSectionProps {
   images: string[];
}

const DetailsSection: React.FC<DetailsSectionProps> = ({ images }) => {
   const CustomDot = ({ ...rest }) => {
      const { index, active, onClick } = rest;

      return (
         <button
            className={`${
               active &&
               index === 1 &&
               window.innerWidth < 1024 &&
               window.innerWidth > 464
                  ? 'w-2/3'
                  : 'w-1/3'
            } w-1/3 h-[5px] m-0 p-0 border-1 ${active ? 'bg-black' : ''}`}
            onClick={() => onClick()}
         >
            {React.Children.toArray([])[index]}
         </button>
      );
   };

   return (
      <section className="py-[5%] bg-[#f2f2f2]">
         <Typography className="px-[10%] sm:text-4xl text-[8vw] font-normal uppercase">
            DETAILS
         </Typography>
         <div className="relative w-full h-full">
            <Carousel
               centerMode={true}
               containerClass="mt-5 cursor-pointer"
               draggable
               minimumTouchDrag={100}
               responsive={{
                  desktop: {
                     breakpoint: {
                        max: 3000,
                        min: 1024,
                     },
                     items: 3,
                     partialVisibilityGutter: 40,
                  },
                  mobile: {
                     breakpoint: {
                        max: 464,
                        min: 0,
                     },
                     items: 1,
                     partialVisibilityGutter: 30,
                  },
                  tablet: {
                     breakpoint: {
                        max: 1024,
                        min: 464,
                     },
                     items: 2,
                     partialVisibilityGutter: 30,
                  },
               }}
               slidesToSlide={1}
               swipeable
               arrows={false}
               customDot={<CustomDot />}
               renderDotsOutside={true}
               showDots={true}
               dotListClass="bottom-[-15px] px-10"
            >
               {images.map((img, index) => (
                  <div key={nanoid()} className="w-full h-full">
                     <img
                        src={require(`./img/${img}`)}
                        alt={'slide' + index}
                        draggable={false}
                        className="w-full h-full object-cover p-2"
                     />
                  </div>
               ))}
            </Carousel>

            <div
               className="
               pointer-events-none
               absolute 
               flex 
               justify-center 
               items-center 
               sm:gap-2 
               gap-1 
               bg-black 
               sm:w-[50px] 
               sm:h-[50px]
               w-[30px] 
               h-[30px] 
               rounded-full 
               top-2/4
               -translate-y-2/4
               -translate-x-2/4
               cursor-pointer
               left-2/4
               "
            >
               <div className="sm:w-[10px] sm:h-[10px] w-[5px] h-[5px]  border-l-[1px] border-b-[1px] border-white rotate-[45deg]" />
               <div className="sm:w-[10px] sm:h-[10px] w-[5px] h-[5px]  border-l-[1px] border-b-[1px] border-white rotate-[225deg]" />
            </div>
         </div>
      </section>
   );
};

export default DetailsSection;
