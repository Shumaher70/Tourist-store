import { useState } from 'react';
import { ProductSectionCart } from '../../components';

import { products } from '../../dammyDB/dammyProducts';

import NavProducts from '../../components/product/NavProducts';
import NavProductsNext from '../../components/product//NavProductsNext';

import HighLightsSection from '../../components/product/HighLightsSection';
import VideoSection from '../../components/product/VideoSection';
import DetailsSection from '../../components/product/DetailsSection';
import ReviwesSection from '../../components/product/ReviwesSection';
import ImgaesSection from '../../components/product/ImgaesSection';
import SimilarProductSection from '../../components/product/SimilarProductSection';
import MoreSection from '../../components/product/MoreSection';

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
         />
         <VideoSection
            product={products.cotegory.tents.fistalClassic.video}
            videoSectionhandler={videoSectionhandler}
         />
         <DetailsSection detailsSectionHandler={detailsSectionHandler} />
         <ReviwesSection reviwesSectionHandler={reviwesSectionHandler} />

         <ImgaesSection
            product={products.cotegory.tents.fistalClassic.imgesSection}
         />
         <SimilarProductSection />
         <MoreSection />
      </>
   );
};

export default TentsFistalClassic;
