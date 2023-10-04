import { Typography } from '@material-tailwind/react';

interface MoreSpaceSectionProps {
   img?: string;
}
const MoreSpaceSection: React.FC<MoreSpaceSectionProps> = ({
   img = 'MoreSpaceSectionImg.webp',
}) => {
   return (
      <section
         className="
         wrapper 
         flex 
         sm:flex-row 
         flex-col 
         gap-[10%]
         sm:h-[60vh]
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
                  MORE SPACE
               </Typography>
               <Typography className="border-t-[1px] border-black mt-5 pt-5">
                  Thanks to a new variant of our Inflatable Diamond Grid (IDG),
                  we were able to handle the struts of the airframe more
                  efficiently. This results in a stable tent with less weight.
                  With a footprint of 5.2 m² (inner tent 4.2 m²), Kirra weighs
                  only 3.8 kg.
               </Typography>
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
