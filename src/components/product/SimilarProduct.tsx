import { Button, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

interface SimilarProductProps {
   children?: React.ReactNode;
   src: string;
}

const SimilarProduct: React.FC<SimilarProductProps> = ({ children, src }) => {
   const clickHandler = () => {
      window.scrollTo(0, 0);
   };

   return (
      <section className="wrapper">
         <div className="w-full flex justify-between items-center">
            <Typography className="sm:text-4xl text-3xl font-normal">
               SIMILAR PRODUCTS
            </Typography>
            <NavLink className="sm:block hidden" to={src}>
               <Button
                  onClick={clickHandler}
                  color="gray"
                  size="lg"
                  className="
               px-5 
               py-3 
               text-black 
               rounded-none 
               bg-white 
               border-[1px] 
               border-black
               transition
               hover:bg-black
               hover:text-white
            "
               >
                  DISCOVER
               </Button>
            </NavLink>
         </div>
         {children}
      </section>
   );
};

export default SimilarProduct;
