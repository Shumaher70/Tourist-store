import { useState } from 'react';
import { ProductSectionCart } from '../../components';
import { products, productCard } from '../../dammyDB/dammyProducts';

import {
   NavProducts,
   NavProductsNext,
   HighLightsSection,
   VideoSection,
   DetailsSection,
   ReviwesSection,
   ImgesSection,
   MoreSection,
   ProductCard,
} from '../../components/product/index';

import { Button, Typography } from '@material-tailwind/react';

import { NavLink } from 'react-router-dom';

import { nanoid } from '@reduxjs/toolkit';

interface SimilarProductProps {
   children?: React.ReactNode;
}

const TentsFistalClassic = () => {
   const [bottomElement, setBottomElement] = useState<number>(0);
   const [highLight, setHighLight] = useState(false);
   const [videos, setVideos] = useState(false);
   const [details, setDetails] = useState(false);
   const [review, setReview] = useState(false);

   const highLightsSectionHandler = (event: boolean) => setHighLight(event);
   const videoSectionhandler = (event: boolean) => setVideos(event);
   const detailsSectionHandler = (event: boolean) => setDetails(event);
   const reviwesSectionHandler = (event: boolean) => setReview(event);

   const elementBotton = (element: number) => {
      setBottomElement(element - 65);
   };

   const clickHandler = () => {
      window.scrollTo(0, 0);
   };

   const SimilarProduct: React.FC<SimilarProductProps> = ({ children }) => (
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
         {children}
      </section>
   );

   return (
      <>
         <NavProducts
            content={[
               {
                  title: 'Home',
                  link: '/',
               },
               {
                  title: 'Tents',
                  link: '/collections/zelte',
               },
               {
                  title: 'Fistral, classic',
                  link: '/products/fistral-classic',
               },
            ]}
         />
         <ProductSectionCart
            elementBotton={elementBotton}
            product={products.cotegory.tents.fistalClassic.mainSection}
         />
         <NavProductsNext
            beforeBottmElement={bottomElement}
            product={products.cotegory.tents.fistalClassic.mainSection}
            highLight={highLight}
            videos={videos}
            details={details}
            review={review}
         />
         <HighLightsSection
            product={products.cotegory.tents.fistalClassic.maketSection}
            highLightsSectionHandler={highLightsSectionHandler}
         />
         <VideoSection
            product={products.cotegory.tents.fistalClassic.video}
            videoSectionhandler={videoSectionhandler}
         />
         <DetailsSection
            detailsSectionHandler={detailsSectionHandler}
            product={products.cotegory.tents.fistalClassic.details}
         />

         <ReviwesSection reviwesSectionHandler={reviwesSectionHandler} />

         <ImgesSection
            product={products.cotegory.tents.fistalClassic.imgesSection}
         />
         <SimilarProduct>
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
         </SimilarProduct>
         <MoreSection />
      </>
   );
};

export default TentsFistalClassic;
