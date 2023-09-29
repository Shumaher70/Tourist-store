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
   SimilarProduct,
} from '../../components/product/index';

import { nanoid } from '@reduxjs/toolkit';

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
            pin0="
               md:top-[247px] md:left-[261px] 
               sm:top-[312px] sm:left-[326px] 
               2xl:top-[368px] 2xl:left-[396px] 
               top-[152px] left-[151px]
            "
            pin1="
               md:top-[243px] md:left-[10px] 
               sm:top-[327px] sm:left-[38px] 
               2xl:top-[381px] 2xl:left-[60px] 
               top-[158px] left-[19px]
            "
            pin2="
               md:top-[105px] md:left-[257px] 
               sm:top-[124px] sm:left-[303px] 
               2xl:top-[159px] 2xl:left-[376px] 
               top-[59px] left-[148px]
            "
            pin3="
               md:top-[195px] md:left-[202px] 
               sm:top-[260px] sm:left-[249px] 
               2xl:top-[317px] 2xl:left-[316px] 
               top-[122px] left-[116px]
            "
            pin4="
               md:top-[138px] md:left-[62px] 
               sm:top-[168px] sm:left-[108px] 
               2xl:top-[213px] 2xl:left-[124px] 
               top-[89px] left-[42px]
            "
            pin5="
              md:top-[238px] md:left-[353px] 
              sm:top-[306px] sm:left-[449px] 
              2xl:top-[360px] 2xl:left-[507px] 
              top-[152px] left-[224px]
            "
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
         <SimilarProduct
            src={products.cotegory.tents.fistalClassic.mainSection.src}
         >
            <div className="w-full flex flex-wrap gap-5">
               {productCard
                  .filter(
                     (item) =>
                        item.type !== 'tents' && item.type !== 'gift card'
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

export default TentsFistalClassic;
