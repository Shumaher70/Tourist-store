import { Typography } from '@material-tailwind/react';
import ButtonCustom from './ButtonCustom';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
   img: string;
   title: string;
   subtitle?: string;
   description?: string;
   src: string;
   btnTitle?: string;
   btnStyle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
   img,
   title,
   subtitle,
   description,
   src,
   btnTitle,
   btnStyle,
}) => {
   return (
      <section
         className="
      relative
      w-screen
      h-screen
      flex
      flex-col
      justify-center
      items-center
   "
      >
         <div className="w-full h-full">
            <img
               src={require(`./img/${img}`)}
               alt={img}
               className="w-full h-full object-cover brightness-[0.8]"
            />
         </div>

         <div
            className="
            absolute
            flex
            flex-col
            justify-center
            items-center
            px-[10%]
         "
         >
            <Typography className="uppercase text-sm font-bold text-white">
               {subtitle}
            </Typography>
            <Typography
               className="
               xl:text-8xl 
               lg:text-7xl 
               md:text-6xl 
               sm:text-5xl 
               text-[8vw]
               uppercase 
               text-white 
               font-normal 
               mt-3"
            >
               {title}
            </Typography>

            <Typography className="font-normal text-white sm:text-xl text-sm text-center mt-5">
               {description}
            </Typography>
            <Link to={src} className="mt-5">
               <ButtonCustom btnStyle={btnStyle} btnTitle={btnTitle} />
            </Link>
         </div>
      </section>
   );
};

export default HeroSection;
