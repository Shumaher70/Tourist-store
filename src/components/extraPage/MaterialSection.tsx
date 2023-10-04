import { Typography } from '@material-tailwind/react';

interface MaterialSectionProps {
   img?: string;
}
const MaterialSection: React.FC<MaterialSectionProps> = ({
   img = 'MaterialSectionImg.jpg',
}) => {
   return (
      <section
         className="
         wrapper 
         flex 
         sm:flex-row 
         flex-col 
         gap-[10%]
         sm:h-[100vh]
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
                  The Material
               </Typography>
               <Typography className="border-t-[1px] border-black mt-5 pt-5">
                  For the new outer tent fabric, we specifically looked for a
                  material that should be more resilient but also lighter than
                  before. That's why we chose a high tenacity polyester with 40D
                  yarn and a double ripstop construction. High tenacity
                  polyester yarn has a higher tensile strength than regular
                  polyester yarns. Accordingly, our new tent fabric also has a
                  higher tensile strength. For us, polyester is still the best
                  tent fabric for our tent constructions, especially with a high
                  tenacity polyester yarn.
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
