import { Typography } from '@material-tailwind/react';
import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

interface VarianSectionProps {
   img1: string;
   img2: string;
   details: string[];
   season1: string;
   season2: string;
}

const VariantSection: React.FC<VarianSectionProps> = ({
   img1,
   img2,
   season1,
   season2,
   details,
}) => {
   const widthSectionRef = useRef<HTMLImageElement>(null);

   const [widthSection, setWidthSection] = useState(0);
   const [rangeInput, setRangeInput] = useState('50');

   useEffect(() => {
      if (widthSectionRef.current?.offsetWidth) {
         setWidthSection(widthSectionRef.current?.offsetWidth);
      }

      window.addEventListener('resize', () => {
         if (widthSectionRef.current?.offsetWidth)
            setWidthSection(widthSectionRef.current?.offsetWidth);
      });
   }, []);

   return (
      <section
         className="
         range
         wrapper
         w-full 
         h-full
      "
      >
         <Typography className="sm:text-4xl text-[8vw] font-normal uppercase">
            VARIANTS
         </Typography>
         <div className="mt-10 flex flex-wrap gap-5">
            {details.map((item) => (
               <div
                  key={nanoid()}
                  className="flex gap-2 justify-center items-center"
               >
                  <AiOutlineCheckCircle className="h-[20px] w-[20px]" />
                  <Typography className="font-normal">{item}</Typography>
               </div>
            ))}
         </div>

         <div className="relative w-full h-full mt-5">
            <img
               ref={widthSectionRef}
               src={require(`./img/${img1}`)}
               alt="img1"
               className="w-full h-full"
            />
            {
               <Typography
                  className="
                  absolute 
                  bg-[#f2f2f2d8] 
                  px-2 
                  py-1 
                  rounded-md 
                  sm:top-5 
                  sm:right-5
                  top-2 
                  right-2
                  sm:text-lg
                  text-[13px]"
               >
                  {season1}
               </Typography>
            }
            <div
               style={{ width: `${rangeInput}%` }}
               className="
               absolute 
               top-0 
               h-full 
               z-[1] 
               overflow-hidden
            "
            >
               {
                  <Typography
                     className="
                  absolute 
                  bg-[#f2f2f2d8] 
                  px-2 
                  py-1 
                  rounded-md 
                  sm:top-5 
                  sm:left-5
                  top-2 
                  left-2
                  sm:text-lg
                  text-[13px]
               "
                  >
                     {season2}
                  </Typography>
               }
               <img
                  src={require(`./img/${img2}`)}
                  alt="img2"
                  style={{
                     minWidth: `${widthSection}px`,
                     height: '100%',
                  }}
               />
            </div>
            <input
               type="range"
               min={0}
               max={100}
               value={rangeInput}
               className="absolute z-20 top-0 cursor-pointer"
               onChange={(e) => setRangeInput(e.target.value)}
            />
            <div
               style={{ left: `${rangeInput}%` }}
               className="
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
               z-10
            "
            >
               <div className="sm:w-[10px] sm:h-[10px] w-[5px] h-[5px]  border-l-[1px] border-b-[1px] border-white rotate-[45deg]" />
               <div className="sm:w-[10px] sm:h-[10px] w-[5px] h-[5px]  border-l-[1px] border-b-[1px] border-white rotate-[225deg]" />
            </div>
         </div>
      </section>
   );
};

export default VariantSection;
