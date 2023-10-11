import { Typography } from '@material-tailwind/react';
import ButtonCustom from './ButtonCustom';
import { Link } from 'react-router-dom';
import AnchorLink from '../AnchorLink';

interface HeroSectionProps {
   img: string;
   title: string;
   subtitle?: string;
   description?: string;
   src?: string;
   btnTitle?: string;
   btnStyle?: string;
   id?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
   img,
   title,
   subtitle,
   description,
   src,
   btnTitle,
   btnStyle,
   id,
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
      text-center
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
            {subtitle && (
               <Typography className="uppercase text-sm font-bold text-white">
                  {subtitle}
               </Typography>
            )}
            {title && (
               <Typography
                  className="
               text-[8.5vw]
               uppercase 
               text-white 
               font-normal 
               mt-3
               whitespace-nowrap
               "
               >
                  {title}
               </Typography>
            )}

            <Typography className="font-normal text-white sm:text-xl text-sm text-center mt-5">
               {description}
            </Typography>
            {src && (
               <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to={src ? src : '/'}
                  className="mt-5"
               >
                  <ButtonCustom btnStyle={btnStyle} btnTitle={btnTitle} />
               </Link>
            )}

            {id && (
               <AnchorLink className="mt-5" href={`#${id}`} offset={100}>
                  <ButtonCustom btnStyle={btnStyle} btnTitle={btnTitle} />
               </AnchorLink>
            )}
         </div>
      </section>
   );
};

export default HeroSection;
