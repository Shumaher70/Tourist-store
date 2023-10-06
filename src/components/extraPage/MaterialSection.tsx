import { Typography } from '@material-tailwind/react';

interface MaterialSectionProps {
   img?: string;
   title: string;
   description: string;
}
const MaterialSection: React.FC<MaterialSectionProps> = ({
   img = 'MaterialSectionImg.jpg',
   title,
   description,
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
               <Typography className="border-t-[1px] border-black mt-5 pt-5">
                  {description}
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

export default MaterialSection;
