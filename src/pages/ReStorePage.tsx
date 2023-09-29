import { nanoid } from '@reduxjs/toolkit';
import ProductCard from '../components/product/ProductCard';
import { productCard } from '../dammyDB/dammyProducts';
import TemplatePage from './TemplatePage';
import { Button, Typography } from '@material-tailwind/react';

const ReStorePage = () => {
   return (
      <>
         <TemplatePage
            id={'restore'}
            title="RE:STORE"
            description="Here you can find more information about our Re:Store program"
            buttonTitle="DISCOVER PRODUCTS"
            buttonStyle="bg-black text-white"
            img="ReStorePageImg.webp"
         />

         <div id="restore" className="wrapper w-full flex-col">
            <div
               className="
               flex
               justify-between
               items-center
               w-full
            "
            >
               <Typography className="text-4xl font-normal">
                  RE:STORE
               </Typography>
               <Button
                  onClick={() => window.scrollTo(0, 0)}
                  color="gray"
                  className="
                     rounded-none
                     bg-white
                     border-[1px]
                     border-black
                     text-black
                     py-4
                     px-8
                     hover:bg-black
                     hover:text-white
                     transition
                  "
               >
                  DISCOVER
               </Button>
            </div>
            <div className="flex flex-wrap gap-5">
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
         </div>
      </>
   );
};

export default ReStorePage;
