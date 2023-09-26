import {
   Card,
   CardBody,
   CardFooter,
   Typography,
} from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

interface productCardProps {
   img1: string;
   img2: string;
   title: string;
   type: string;
   price: string;
   src: string;
}

const ProductCard: React.FC<productCardProps> = ({
   img1,
   img2,
   title,
   type,
   price,
   src,
}) => {
   const clickHandler = () => {
      window.scrollTo(0, 0);
   };

   return (
      <div
         onClick={clickHandler}
         className="flex flex-wrap md:justify-between justify-center gap-5 my-5"
      >
         <NavLink to={src}>
            <Card className="rounded-none cursor-pointer">
               <div className="md:max-w-[350px] w-full ">
                  <img
                     src={require(`../../dammyDB/${img1}`)}
                     alt="tent"
                     className="brightness-[95%]"
                  />
                  <img
                     className="absolute top-0 opacity-0 hover:opacity-100 transition-all brightness-[95%]"
                     src={require(`../../dammyDB/${img2}`)}
                     alt="tent"
                  />
               </div>
               <CardBody className="pb-0">
                  <Typography variant="h5" className="uppercase text-black">
                     {title}
                  </Typography>
               </CardBody>
               <CardFooter className="flex justify-between capitalize  py-2">
                  <Typography>{type}</Typography>
                  <Typography className="text-black border-b-[1px] border-black">
                     € {price}, 00
                  </Typography>
               </CardFooter>
            </Card>
         </NavLink>
      </div>
   );
};

export default ProductCard;
