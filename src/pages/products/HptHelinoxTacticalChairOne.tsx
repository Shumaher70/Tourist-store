import { useState } from 'react';
import { ProductSectionCart } from '../../components';
import { products, productCard } from '../../dammyDB/dammyProducts';

import {
   NavProducts,
   NavProductsNext,
   DetailsSection,
   ReviwesSection,
   MoreSection,
   ProductCard,
   SimilarProduct,
} from '../../components/product/index';

import { nanoid } from '@reduxjs/toolkit';

const HptHelinoxTacticalChairOne = () => {
   const [bottomElement, setBottomElement] = useState<number>(0);
   const [details, setDetails] = useState(false);
   const [review, setReview] = useState(false);

   const detailsSectionHandler = (event: boolean) => setDetails(event);
   const reviwesSectionHandler = (event: boolean) => setReview(event);

   const elementBotton = (element: number) => {
      setBottomElement(element - 65);
   };

   return (
      <>
         <NavProducts
            content={[
               {
                  title: 'Home',
                  link: '/',
               },
               {
                  title: 'HTP Selected',
                  link: '/collections/hpt-selected',
               },
               {
                  title: 'helinox - tactical chair one',
                  link: '/products/camping-helinox-tactical-chair-one',
               },
            ]}
         />
         <ProductSectionCart
            elementBotton={elementBotton}
            product={
               products.cotegory.hpt.campingHelinoxTacticalChairOne.mainSection
            }
         />
         <NavProductsNext
            beforeBottmElement={bottomElement}
            product={
               products.cotegory.hpt.campingHelinoxTacticalChairOne.mainSection
            }
            details={details}
            review={review}
         />

         <DetailsSection
            detailsSectionHandler={detailsSectionHandler}
            product={
               products.cotegory.hpt.campingHelinoxTacticalChairOne.details
            }
         />

         <ReviwesSection reviwesSectionHandler={reviwesSectionHandler} />

         <SimilarProduct
            src={
               products.cotegory.hpt.campingHelinoxTacticalChairOne.mainSection
                  .src
            }
         >
            <div className="w-full justify-between flex flex-wrap gap-5">
               {productCard
                  .filter(
                     (item) =>
                        !item.mainImg1.includes(
                           'campingHelinoxTacticalChairOne'
                        )
                  )
                  .map((item) => (
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

export default HptHelinoxTacticalChairOne;
