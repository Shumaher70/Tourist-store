import { Button, Typography } from '@material-tailwind/react';
import { productCard } from '../../dammyDB/dammyProducts';
import ProductCard from './ProductCard';
import { nanoid } from '@reduxjs/toolkit';
import { NavLink } from 'react-router-dom';

const SimilarProductSection = () => {
   const clickHandler = () => {
      window.scrollTo(0, 0);
   };

   return (
      <section className="wrapper">
         <div className="w-full flex justify-between items-center">
            <Typography className="sm:text-4xl text-3xl font-normal">
               SIMILAR PRODUCTS
            </Typography>
            <NavLink className="sm:block hidden" to="/products/fistral-classic">
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
         <div className="w-full flex flex-wrap gap-5">
            {productCard.map((item) => (
               <ProductCard
                  key={nanoid()}
                  img1={item.mainImg2}
                  img2={item.mainImg1}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                  src={item.src}
               />
            ))}
         </div>
      </section>
   );
};

export default SimilarProductSection;
