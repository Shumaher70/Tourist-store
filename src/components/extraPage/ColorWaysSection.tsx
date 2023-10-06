import { Typography } from '@material-tailwind/react';

interface ColorWaysSectionProps {
   img?: string;
}
const ColorWaysSection: React.FC<ColorWaysSectionProps> = ({
   img = 'ColorWaysSectionImg.jpg',
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
      "
      >
         <div className="flex-1">
            <img
               src={require(`./img/${img}`)}
               alt={img}
               className="w-full h-full object-cover brightness-[.95]"
            />
         </div>

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
                  COLORWAYS
               </Typography>
               <Typography className="border-t-[1px] border-black mt-5 pt-5">
                  All tents now have a new & uniform colour scheme. For the
                  inner tent, we use a black mesh that harmonises better with
                  the new colour concept. We have also unified the colour of the
                  airframes, so that they are now all in a very dark anthracite,
                  which fits perfectly with all three colourways. The tents are
                  now available in three colourways Classic (Light Grey),
                  4-Season (Dark Red) & Cairo Camo (Signature Pattern).
               </Typography>
            </div>
         </div>
      </section>
   );
};

export default ColorWaysSection;
