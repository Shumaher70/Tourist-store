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

const GiftCard = () => {
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
                  title: 'Gift Card',
                  link: '/products/gift-card',
               },
            ]}
         />
         <ProductSectionCart
            elementBotton={elementBotton}
            product={products.cotegory.giftCard.card.mainSection}
         />
         <NavProductsNext
            beforeBottmElement={bottomElement}
            product={products.cotegory.giftCard.card.mainSection}
            details={details}
            review={review}
         />

         <DetailsSection
            detailsSectionHandler={detailsSectionHandler}
            product={products.cotegory.giftCard.card.details}
         />

         <ReviwesSection reviwesSectionHandler={reviwesSectionHandler} />

         <SimilarProduct src={products.cotegory.giftCard.card.mainSection.src}>
            <div className="w-full flex justify-between flex-wrap gap-5">
               {productCard
                  .filter((item) => !item.type.includes('gift card'))
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

export default GiftCard;
