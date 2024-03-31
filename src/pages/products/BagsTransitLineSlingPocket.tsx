import { useState } from 'react';

import { products, productCard } from '../../dammyDB/dammyProducts';

import { nanoid } from '@reduxjs/toolkit';
import NavProducts from '../../components/product/NavProducts';
import NavProductsNext from '../../components/product/NavProductsNext';
import HighLightsSection from '../../components/product/HighLightsSection';
import VideoSection from '../../components/product/VideoSection';
import DetailsSection from '../../components/product/DetailsSection';
import ReviwesSection from '../../components/product/ReviwesSection';
import ImgesSection from '../../components/product/ImgesSection';
import SimilarProduct from '../../components/product/SimilarProduct';
import ProductCard from '../../components/product/ProductCard';
import MoreSection from '../../components/product/MoreSection';
import ProductSectionCart from '../../components/product/ProductSectionCart';

const BagsTransitLineSlingPocket = () => {
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
                  title: 'Bags',
                  link: '/collections/zelte',
               },
               {
                  title: 'Transit Line Sling Pocket, castlerock',
                  link: '/products/transit-line-sling-pocket',
               },
            ]}
         />
         <ProductSectionCart
            elementBotton={elementBotton}
            product={products.cotegory.bags.transitLineSlingPocket.mainSection}
         />
         <NavProductsNext
            beforeBottmElement={bottomElement}
            product={products.cotegory.bags.transitLineSlingPocket.mainSection}
            highLight={highLight}
            videos={videos}
            details={details}
            review={review}
         />
         <HighLightsSection
            product={products.cotegory.bags.transitLineSlingPocket.maketSection}
            highLightsSectionHandler={highLightsSectionHandler}
            pin0="
            2xl:top-[370px] 2xl:left-[273px] 
            xl:top-[271px] xl:left-[200px]
            lg:top-[232px] lg:left-[166px]
            md:top-[240px] md:left-[162px] 
            sm:top-[321px] sm:left-[215px] 
            top-[155px] left-[113px]
            "
            pin1="
            2xl:top-[278px] 2xl:left-[271px] 
            xl:top-[190px] xl:left-[196px]
            lg:top-[166px] lg:left-[166px]
            md:top-[178px] md:left-[161px] 
            sm:top-[228px] sm:left-[215px] 
            top-[111px] left-[113px]
            "
            pin2="
            2xl:top-[368px] 2xl:left-[414px] 
            xl:top-[271px] xl:left-[289px]
            lg:top-[231px] lg:left-[250px]
            md:top-[243px] md:left-[268px] 
            sm:top-[321px] sm:left-[345px] 
            top-[155px] left-[172px]
            "
            pin3="
            2xl:top-[303px] 2xl:left-[102px] 
            xl:top-[204px] xl:left-[60px]
            lg:top-[182px] lg:left-[49px]
            md:top-[204px] md:left-[54px] 
            sm:top-[263px] sm:left-[73px] 
            top-[125px] left-[37px]
         "
            pin4="
            2xl:top-[285px] 2xl:left-[457px] 
            xl:top-[199px] xl:left-[318px]
            lg:top-[186px] lg:left-[291px]
            md:top-[200px] md:left-[299px] 
            sm:top-[263px] sm:left-[399px] 
            top-[125px] left-[189px]
         "
         />
         <VideoSection
            product={products.cotegory.bags.transitLineSlingPocket.video}
            videoSectionhandler={videoSectionhandler}
         />
         <DetailsSection
            detailsSectionHandler={detailsSectionHandler}
            product={products.cotegory.bags.transitLineSlingPocket.details}
         />

         <ReviwesSection reviwesSectionHandler={reviwesSectionHandler} />

         <ImgesSection
            product={products.cotegory.bags.transitLineSlingPocket.imgesSection}
         />
         <SimilarProduct
            src={products.cotegory.bags.transitLineSlingPocket.mainSection.src}
         >
            <div className="w-full flex flex-wrap justify-between gap-5">
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

export default BagsTransitLineSlingPocket;
