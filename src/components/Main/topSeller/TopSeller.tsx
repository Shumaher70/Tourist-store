import { productCard } from '../../../dammyDB/dammyProducts';

import { Typography, Button, Card } from '@material-tailwind/react';

import { NavLink } from 'react-router-dom';
import ProductCard from '../../product/ProductCard';

const TopSeller = () => {
   return (
      <div className="flex-col items-center py-10 px-[10%]">
         <div className="flex justify-between ">
            <Typography
               variant="h2"
               className="font-normal uppercase text-2xl sm:text-4xl"
            >
               top seller
            </Typography>
            <NavLink to="/collections/topseller">
               <Button
                  color="white"
                  className="rounded-none border-[1px] border-[#000000]"
               >
                  DISCOVER
               </Button>
            </NavLink>
         </div>

         <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2">
            {[
               productCard[0],
               productCard[1],
               productCard[2],
               productCard[3],
            ].map((item) => (
               <ProductCard
                  img1={item.mainImg2}
                  img2={item.mainImg1}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                  src={item.src}
               />
            ))}
         </div>
      </div>
   );
};

export default TopSeller;
