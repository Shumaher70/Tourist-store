import { Typography } from '@material-tailwind/react';
import { nanoid } from '@reduxjs/toolkit';
import { AiOutlineCheckCircle } from 'react-icons/ai';

interface MaterialSectionProps {
   img?: string;
   title: string;
   description: string;
   benefit?: string[];
}
const MaterialSection: React.FC<MaterialSectionProps> = ({
   img = 'MaterialSectionImg.jpg',
   title,
   description,
   benefit,
}) => {
   return (
      <section
         className="
         wrapper 
         flex 
         sm:flex-row 
         flex-col 
         gap-[10%]
         sm:h-[80vh]
         bg-[#f2f2f2]
      "
      >
         <div className="flex-1">
            <div
               className="
               w-full 
               h-full 
               flex 
               flex-col 
               justify-center
            "
            >
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

export default MaterialSection;
