import { Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

interface SaleSectionProps {
   img: string;
   title?: string;
   description?: string;
   src?: string;
}

const SaleSection: React.FC<SaleSectionProps> = ({
   img,
   title,
   description,
   src,
}) => {
   return (
      <section className="wrapper bg-[#f2f2f2] flex flex-col lg:flex-row gap-10">
         <div className="basis-2/4">
            <img
               className="w-full h-full objeccover"
               src={require(`./img/${img}`)}
               alt={img}
            />
         </div>
         <div className="basis-2/5 flex flex-col justify-center">
            <div className="flex flex-col p-10 bg-white">
               {title && (
                  <Typography className="xl:text-4xl sm:text-4xl text-3xl font-normal text-center lg:text-start ">
                     {title}
                  </Typography>
               )}
               {description && (
                  <Typography className="text-center lg:text-start mt-5">
                     {description}
                  </Typography>
               )}
               <hr className="border-[#2f2f2f2]" />
               <Link
                  className="lg:mt-10 mt-5"
                  to={src ? src : '/'}
                  onClick={() => window.scrollTo(0, 0)}
               >
                  <Button
                     color="gray"
                     className="bg-black text-white w-full rounded-none lg:py-5 font-normal lg:text-md "
                  >
                     Discover Now
                  </Button>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default SaleSection;
