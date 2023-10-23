import { useEffect, useState } from 'react';

import { Typography } from '@material-tailwind/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { nanoid } from '@reduxjs/toolkit';
import CustomButtonExit from '../CustomButtonExit';
import { useInView } from 'react-intersection-observer';

interface HighLightSectionProps {
   product: {
      maketMainTitle: string;
      maketMainShortDescription1: string;
      maketMainShortDescription2: string;
      maketMainShortDescription3: string;
      maketMainImg1: string;
      maketMainImg2: string;
      maketMainImg3: string;
      mainImg: string;
      maket: {
         [key: string]: string;
      }[];
   };

   highLightsSectionHandler: (event: boolean) => void;

   pin0?: string;
   pin1?: string;
   pin2?: string;
   pin3?: string;
   pin4?: string;
   pin5?: string;
}

const HighLightsSection = ({
   product,
   highLightsSectionHandler,
   pin0,
   pin1,
   pin2,
   pin3,
   pin4,
   pin5,
}: HighLightSectionProps) => {
   const [showCarousel, setShowCarousel] = useState<{ [key: string]: boolean }>(
      {
         index1: false,
         index2: false,
         index3: false,
         index4: false,
         index5: false,
         index6: false,
      }
   );
   const [open, setOpen] = useState<boolean>(false);
   const [initialCarousel, setinitialCarousel] = useState<
      {
         [key: string]: string;
      }[]
   >([]);

   const [isVisible, setIsVisible] = useState(false);
   const { ref, inView } = useInView({ threshold: 0.5 });

   useEffect(() => {
      if (inView) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      }
      highLightsSectionHandler(isVisible);
   }, [highLightsSectionHandler, inView, isVisible]);

   const PingElement = () => {
      const [ping, setPing] = useState(false);

      useEffect(() => {
         const timer = setInterval(() => {
            setPing((prevPing) => !prevPing);
         }, 2000);
         return () => clearInterval(timer);
      }, []);

      return (
         <div
            className={`${
               ping ? 'animate-pulse' : ''
            } absolute rounded-full md:w-3 md:h-3 w-2 h-2 bg-[#ffffffa8]`}
         />
      );
   };

   const handleCarouselClick = (index?: number) => {
      setShowCarousel({
         index0: index === 0,
         index1: index === 1,
         index2: index === 2,
         index3: index === 3,
         index4: index === 4,
         index5: index === 5,
      });

      const newArray = Array.isArray(product.maket)
         ? product.maket.slice(index).concat(product.maket.slice(0, index))
         : [];

      setinitialCarousel(newArray);

      if (index !== undefined) {
         setOpen(true);
      } else {
         setOpen(false);
      }
   };
   const CustomRightArrow = ({ ...rest }) => {
      const { onClick } = rest;
      return (
         <button
            className="absolute right-0 rounded-full transition linear duration-250 hover:bg-black hover:text-white"
            onClick={() => onClick()}
         >
            <svg
               width="40"
               height="40"
               viewBox="0 0 16 16"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className="flex justify-center items-center"
            >
               <path
                  d="M6 3L11 8L6 13"
                  stroke="CurrentColor"
                  strokeWidth="1"
                  className="block"
               ></path>
            </svg>
         </button>
      );
   };
   const CustomLeftArrow = ({ ...rest }) => {
      const { onClick } = rest;
      return (
         <button
            className="absolute left-0 rounded-full rotate-180 transition linear duration-250 hover:bg-black hover:text-white"
            onClick={() => onClick()}
         >
            <svg
               width="40"
               height="40"
               viewBox="0 0 16 16"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M6 3L11 8L6 13"
                  stroke="CurrentColor"
                  strokeWidth="1"
               ></path>
            </svg>
         </button>
      );
   };

   return (
      <section
         id="highlights"
         className="relative flex flex-col lg:flex-row gap-5 items-center px-[10%] py-[2%] bg-[#f2f2f2]"
      >
         <div className="relative flex lg:basis-3/5 flex-col">
            <div className="lg:w-2/5">
               {product.maketMainTitle && (
                  <Typography
                     ref={ref}
                     className="sm:text-4xl text-3xl font-normal"
                  >
                     {product.maketMainTitle}
                  </Typography>
               )}

               <Typography className="flex gap-5 items-center border-t-[1px] border-black py-2 font-normal mt-10">
                  <img
                     src={require(`../../dammyDB/${product.maketMainImg1}`)}
                     alt={product.maketMainImg1 as string}
                     className="w-[26px] h-[26px]"
                  />
                  {product.maketMainShortDescription1}
               </Typography>

               <Typography className="flex gap-5 items-center border-t-[1px] border-black py-2 font-normal">
                  <img
                     src={require(`../../dammyDB/${product.maketMainImg2}`)}
                     alt={product.maketMainImg2 as string}
                     className="w-[26px] h-[26px]"
                  />
                  {product.maketMainShortDescription2}
               </Typography>

               <Typography className="flex gap-5 items-center border-y-[1px] border-black py-2 font-normal">
                  <img
                     src={require(`../../dammyDB/${product.maketMainImg3}`)}
                     alt={product.maketMainImg3 as string}
                     className="w-[26px] h-[26px]"
                  />
                  {product.maketMainShortDescription3}
               </Typography>
            </div>
         </div>

         <div className="relative 2xl:w-[600px] xl:w-[430px] lg:w-[450px] md:w-[400px] sm:w-[512px] w-[250px]">
            <img
               src={require(`../../dammyDB/${product.mainImg}`)}
               alt="tent"
               className="brightness-95"
            />

            {pin4 && (
               <div
                  onClick={() => handleCarouselClick(4)}
                  className={`cursor-pointer absolute bsolute flex justify-center items-center sm:w-10 sm:h-10 w-6 h-6 bg-[#ffffff7c] border-[1px] border-[#b1b1b1] rounded-full ${pin4}`}
                  data-index="4"
               >
                  <PingElement />
                  <div
                     className={`absolute sm:w-3 sm:h-3 w-1.5 h-1.5 rounded-full ${
                        showCarousel.index4 ? 'bg-white' : 'bg-black'
                     }`}
                  />
               </div>
            )}

            {pin1 && (
               <div
                  onClick={() => handleCarouselClick(1)}
                  className={`cursor-pointer absolute flex justify-center items-center sm:w-10 sm:h-10 w-6 h-6 bg-[#ffffff7c] border-[1px] border-[#b1b1b1] rounded-full  ${pin1}`}
                  data-index="1"
               >
                  <PingElement />
                  <div
                     className={`absolute sm:w-3 sm:h-3 w-1.5 h-1.5 rounded-full ${
                        showCarousel.index1 ? 'bg-white' : 'bg-black'
                     }`}
                  />
               </div>
            )}

            {pin3 && (
               <div
                  onClick={() => handleCarouselClick(3)}
                  className={`cursor-pointer absolute flex justify-center items-center sm:w-10 sm:h-10 w-6 h-6 bg-[#ffffff7c] border-[1px] border-[#b1b1b1] rounded-full ${pin3}`}
                  data-index="3"
               >
                  <PingElement />
                  <div
                     className={`absolute sm:w-3 sm:h-3 w-1.5 h-1.5 rounded-full ${
                        showCarousel.index3 ? 'bg-white' : 'bg-black'
                     }`}
                  />
               </div>
            )}

            {pin0 && (
               <div
                  onClick={() => handleCarouselClick(0)}
                  className={`cursor-pointer absolute flex justify-center items-center sm:w-10 sm:h-10 w-6 h-6 bg-[#ffffff7c] border-[1px] border-[#b1b1b1] rounded-full  ${pin0}`}
                  data-index="0"
               >
                  <PingElement />
                  <div
                     className={`absolute sm:w-3 sm:h-3 w-1.5 h-1.5 rounded-full ${
                        showCarousel.index0 ? 'bg-white' : 'bg-black'
                     }`}
                  />
               </div>
            )}

            {pin5 && (
               <div
                  onClick={() => handleCarouselClick(5)}
                  className={`cursor-pointer absolute flex justify-center items-center sm:w-10 sm:h-10 w-6 h-6 bg-[#ffffff7c] border-[1px] border-[#b1b1b1] rounded-full ${pin5}`}
                  data-index="5"
               >
                  <PingElement />
                  <div
                     className={`absolute sm:w-3 sm:h-3 w-1.5 h-1.5 rounded-full ${
                        showCarousel.index5 ? 'bg-white' : 'bg-black'
                     }`}
                  />
               </div>
            )}

            {pin2 && (
               <div
                  onClick={() => handleCarouselClick(2)}
                  className={`cursor-pointer absolute flex justify-center items-center sm:w-10 sm:h-10 w-6 h-6 bg-[#ffffff7c] border-[1px] border-[#b1b1b1] rounded-full ${pin2}`}
                  data-index="2"
               >
                  <PingElement />
                  <div
                     className={`absolute sm:w-3 sm:h-3 w-1.5 h-1.5 rounded-full ${
                        showCarousel.index2 ? 'bg-white' : 'bg-black'
                     }`}
                  />
               </div>
            )}
         </div>

         {window.innerWidth < 1024 && (
            <div
               className={`${
                  open ? 'translate-x-0 scale-1' : 'translate-x-[-100%] scale-0'
               } fixed top-0 left-0 w-full h-full bg-[#1111115e] z-50 `}
            />
         )}
         {window.innerWidth < 1024 && (
            <div
               className={`${
                  open ? 'translate-x-0 scale-1' : 'translate-x-[-100%] scale-0'
               } fixed left-0 bottom-0 w-full sm:h-auto h-full bg-white z-50 duration-200 ease-in`}
            >
               <Carousel
                  responsive={{
                     desktop: {
                        breakpoint: { max: 3000, min: 0 },
                        items: 1,
                     },
                  }}
                  showDots={false}
                  infinite={true}
                  customLeftArrow={<CustomLeftArrow />}
                  customRightArrow={<CustomRightArrow />}
                  sliderClass="md:min-h-[450px] sm:min-h-[300px] sm:py-10"
                  itemClass="min-h-full sm:py-0 sm:px-0 py-10 px-10"
               >
                  {product &&
                     initialCarousel.map((item) => {
                        return (
                           <div
                              key={nanoid()}
                              className="w-ful h-full flex flex-col"
                           >
                              <div className="w-full md:min-h-[300px] sm:min-h-[200px] min-h-[150px] flex justify-center">
                                 <div className="md:w-[500px] md:min-h-[300px] sm:w-[400px] sm:min-h-[250px]">
                                    <img
                                       src={require(`../../dammyDB/${item.img}`)}
                                       alt={item.img}
                                       className="object-cover md:w-[500px] md:min-h-[300px] sm:w-[400px] sm:min-h-[250px] w-[300px] h-[200px]"
                                       draggable={false}
                                    />
                                 </div>
                              </div>
                              <div className="w-full md:min-h-[20vh] sm:px-[40px]">
                                 <Typography className="mt-5 text-2xl font-normal border-b-[1px] border-black">
                                    {item.title}
                                 </Typography>
                                 <Typography className="h-[80%] overflow-y-auto">
                                    {item.description}
                                 </Typography>
                              </div>
                           </div>
                        );
                     })}
               </Carousel>
               <CustomButtonExit
                  onClick={() => handleCarouselClick()}
                  buttonStyle="top-2 right-5 w-[30px] h-[30px]"
               />
            </div>
         )}

         {window.innerWidth >= 1024 && (
            <div
               className={`${
                  open ? 'translate-x-0 scale-1' : 'translate-x-[-100%] scale-0'
               } absolute left-0 ml-[10%] xl:w-[40%] xl:h-[80%] w-[40%] h-[95%] bg-white duration-200 ease-in`}
            >
               <Carousel
                  className="relative w-full h-full"
                  responsive={{
                     desktop: {
                        breakpoint: { max: 3000, min: 0 },
                        items: 1,
                     },
                  }}
                  showDots={false}
                  infinite={true}
                  customLeftArrow={<CustomLeftArrow />}
                  customRightArrow={<CustomRightArrow />}
                  sliderClass="h-full"
                  itemClass="h-full"
               >
                  {product &&
                     initialCarousel.map((item) => {
                        return (
                           <div
                              key={nanoid()}
                              className="flex flex-col justify-center w-full h-full lg:px-[10%] lg:pb-[20px] lg:pt-[50px]"
                           >
                              <div className="w-full lg:h-[100%] flex justify-center">
                                 <img
                                    src={require(`../../dammyDB/${item.img}`)}
                                    alt={item.img}
                                    className="object-cover 2xl:min-w-full 2xl:min-h-full xl:w-[300px] xl:h-[170px] lg:w-[250px] lg:h-[180px]"
                                    draggable={false}
                                 />
                              </div>
                              <div className="2xl:mt-5">
                                 <Typography className="xl:text-2xl lg:text-[20px] font-normal border-b-[1px] border-black">
                                    {item.title}
                                 </Typography>
                                 <Typography className="2xl:h-[100px] xl:h-[80px] lg:h-[150px] overflow-y-auto">
                                    {item.description}
                                 </Typography>
                              </div>
                           </div>
                        );
                     })}
               </Carousel>
               <CustomButtonExit
                  onClick={() => handleCarouselClick()}
                  buttonStyle="top-2 right-5 w-[30px] h-[30px]"
               />
            </div>
         )}
      </section>
   );
};

export default HighLightsSection;
