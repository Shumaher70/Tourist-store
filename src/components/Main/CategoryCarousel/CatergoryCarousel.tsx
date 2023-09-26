import { Typography } from '@material-tailwind/react';
import { dammyCategoryDiscription } from './dammyCategoryDiscription';
import { nanoid } from 'nanoid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CatrgoryCarousel = () => {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 5,
         slidesToSlide: 7, // optional, default to 1.
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
         slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         slidesToSlide: 1, // optional, default to 1.
      },
   };

   const CustomRightArrow = ({ ...rest }) => {
      const { onClick } = rest;
      return (
         <button
            className=" absolute right-0 rounded-full bg-white  mr-[10%] transition linear  duration-250 hover:bg-black hover:text-white border-[1px] border-black"
            onClick={() => onClick()}
         >
            <svg
               width="50"
               height="50"
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
            className=" absolute left-0 rounded-full  ml-[10%] rotate-180 transition linear  duration-250 hover:bg-black hover:text-white border-[1px] border-black"
            onClick={() => onClick()}
         >
            <svg
               width="50"
               height="50"
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
      <Carousel
         additionalTransfrom={0}
         arrows={true}
         centerMode={true}
         className=""
         containerClass="container min-w-full py-[5%] border-b-[1px] border-black bg-[#F2F2F2]"
         draggable
         focusOnSelect={false}
         infinite
         itemClass=""
         keyBoardControl
         minimumTouchDrag={80}
         pauseOnHover
         renderArrowsWhenDisabled={false}
         renderButtonGroupOutside={false}
         customLeftArrow={<CustomLeftArrow />}
         customRightArrow={<CustomRightArrow />}
         renderDotsOutside={false}
         responsive={responsive}
         rewind={false}
         rewindWithAnimation={false}
         rtl={false}
         sliderClass=""
         slidesToSlide={1}
         swipeable
      >
         {dammyCategoryDiscription.map((item) => {
            return (
               <div
                  key={nanoid()}
                  className="flex flex-col text-center h-full justify-between cursor-pointer brightness-95 "
               >
                  <div>
                     <div>
                        <img
                           src={require(`./categoryImg/${item.img}`)}
                           alt={item.img}
                           draggable="false"
                        />
                     </div>
                  </div>
                  <Typography
                     variant="h2"
                     className="uppercase font-normal lg:text-3xl sm:text-2xl text-1xl"
                  >
                     {item.discription}
                  </Typography>
               </div>
            );
         })}
      </Carousel>
   );
};

export default CatrgoryCarousel;
