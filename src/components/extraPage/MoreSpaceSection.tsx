import { Typography } from '@material-tailwind/react';
import { nanoid } from '@reduxjs/toolkit';
import { AiOutlineCheckCircle } from 'react-icons/ai';

interface MoreSpaceSectionProps {
   title?: string;
   benefit?: string[];
   benefitImg?: string;
   description?: string;
   img?: string;
   bg?: boolean;
   reverse?: boolean;
}

const MoreSpaceSection = ({
   img = 'MoreSpaceSectionImg.webp',
   title = 'MORE SPACE',
   description = `Thanks to a new variant of our Inflatable Diamond Grid (IDG),
   we were able to handle the struts of the airframe more
   efficiently. This results in a stable tent with less weight.
   With a footprint of 5.2 m² (inner tent 4.2 m²), Kirra weighs
   only 3.8 kg.`,
   benefit,
   benefitImg,
   bg = true,
   reverse,
}: MoreSpaceSectionProps) => {
   return (
      <section
         className={`
            wrapper 
            flex 
            ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row '}
            flex-col 
            gap-[10%]
            sm:h-[80vh]
            ${bg ? 'bg-[#f2f2f2]' : ''}
         `}
      >
         <div className="flex-1">
            <div className="w-full h-full flex flex-col justify-center">
               <Typography className="sm:text-4xl text-[8vw] font-normal uppercase">
                  {title}
               </Typography>

               {benefit && (
                  <ul className="mt-5 border-b-[1px] border-black">
                     {benefit?.map((item, index) => (
                        <li
                           key={nanoid()}
                           className={`
                           ${
                              index === -1
                                 ? 'border-b-[1px] border-black'
                                 : 'border-t-[1px]  border-black  '
                           }
                           font-medium 
                           flex 
                           gap-2 
                           py-2 
                           items-center
                        `}
                        >
                           <AiOutlineCheckCircle className="w-[25px] h-[25px]" />{' '}
                           {item}
                        </li>
                     ))}
                  </ul>
               )}

               {benefitImg && (
                  <div className="mt-5">
                     <img
                        src={require(`./img/${benefitImg}`)}
                        alt={benefitImg}
                     />
                  </div>
               )}

               <Typography className="mt-5">{description}</Typography>
            </div>
         </div>

         <div className="flex-1">
            <img
               src={require(`./img/${img}`)}
               alt={img}
               className="w-full h-full object-cover brightness-[.95]"
            />
         </div>
      </section>
   );
};

export default MoreSpaceSection;
