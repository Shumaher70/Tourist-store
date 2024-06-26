import { useState } from 'react';
import { products, productCard } from '../../dammyDB/dammyProducts';

import NavProducts from '../../components/product/NavProducts';
import NavProductsNext from '../../components/product/NavProductsNext';
import DetailsSection from '../../components/product/DetailsSection';
import ReviwesSection from '../../components/product/ReviwesSection';
import MoreSection from '../../components/product/MoreSection';
import ProductCard from '../../components/product/ProductCard';
import SimilarProduct from '../../components/product/SimilarProduct';

import { nanoid } from '@reduxjs/toolkit';
import ProductSectionCart from '../../components/product/ProductSectionCart';

const HpthygieneBasicNatureFirstAidKitStandart = () => {
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
                  title: 'Hygiene basic nature-first air kit standart',
                  link: '/products/hygiene-basic-nature-first-aid-kit-standart',
               },
            ]}
         />
         <ProductSectionCart
            elementBotton={elementBotton}
            product={
               products.cotegory.hpt.hygieneBasicNatureFirstAidKitStandart
                  .mainSection
            }
         />
         <NavProductsNext
            beforeBottmElement={bottomElement}
            product={
               products.cotegory.hpt.hygieneBasicNatureFirstAidKitStandart
                  .mainSection
            }
            details={details}
            review={review}
         />

         <DetailsSection
            detailsSectionHandler={detailsSectionHandler}
            product={
               products.cotegory.hpt.hygieneBasicNatureFirstAidKitStandart
                  .details
            }
         />

         <ReviwesSection reviwesSectionHandler={reviwesSectionHandler} />

         <SimilarProduct
            src={
               products.cotegory.hpt.hygieneBasicNatureFirstAidKitStandart
                  .mainSection.src
            }
         >
            <div className="w-full justify-between flex flex-wrap gap-5">
               {productCard
                  .filter(
                     (item) =>
                        !item.mainImg1.includes(
                           'hygieneBasicNatureFirstAidKitStandart'
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

export default HpthygieneBasicNatureFirstAidKitStandart;
