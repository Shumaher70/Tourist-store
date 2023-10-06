import { Typography } from '@material-tailwind/react';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import Carousel from 'react-multi-carousel';

interface DetailsSectionProps {
   slide1: string[];
   slide2: string[];
}

const DetailsSection: React.FC<DetailsSectionProps> = ({ slide1, slide2 }) => {
   const CustomDotSlide1 = ({ ...rest }) => {
      const { index, active, onClick } = rest;

      return (
         <button
            className={`${
               active ? 'w-2/3' : 'w-1/3'
            } w-1/3 h-[3px] m-0 p-0 border-1 ${active ? 'bg-black' : ''}`}
            onClick={() => onClick()}
         >
            {React.Children.toArray([])[index]}
         </button>
      );
   };

   const CustomDotSlide2 = ({ ...rest }) => {
      const { index, active, onClick } = rest;

      return (
         <button
            className={`md:w-[15px] md:h-[15px] w-[10px] h-[10px]  rounded-full md:m-2 m-1 border-2 ${
               active ? 'bg-white' : ''
            }`}
            onClick={() => onClick()}
         >
            {React.Children.toArray([])[index]}
         </button>
      );
   };

   return (
      <section className="pt-[5%] border-t-[1px] border-[#f2f2f2]">
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
               customDot={<CustomDotSlide1 />}
               renderDotsOutside={true}
               showDots={true}
               dotListClass="bottom-[-15px] px-10"
            >
               {slide1.map((img, index) => (
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

         <Carousel
            centerMode={true}
            containerClass="mt-10 cursor-pointer ring-1 ring-[#f2f2f2]"
            draggable
            minimumTouchDrag={100}
            responsive={{
               desktop: {
                  breakpoint: {
                     max: 3000,
                     min: 1,
                  },
                  items: 1,
                  partialVisibilityGutter: 40,
               },
            }}
            slidesToSlide={1}
            swipeable
            arrows={false}
            customDot={<CustomDotSlide2 />}
            renderDotsOutside={false}
            showDots={true}
            dotListClass=""
         >
            {slide2.map((img, index) => (
               <div key={nanoid()} className="w-full h-full">
                  <img
                     src={require(`./img/${img}`)}
                     alt={'slide' + index}
                     draggable={false}
                     className="w-full h-full object-cover"
                  />
               </div>
            ))}
         </Carousel>
      </section>
   );
};

export default DetailsSection;
