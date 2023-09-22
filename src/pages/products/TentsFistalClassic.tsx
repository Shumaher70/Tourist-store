import { useState } from 'react';
import { ProductSectionCart } from '../../components';

import {
   products,
   maketProduct,
   videosProduct,
} from '../../dammyDB/dammyProducts';

import NavProducts from '../../components/product/NavProducts';
import NavProductsNext from '../../components/product//NavProductsNext';

import HighLightsSection from '../../components/product/HighLightsSection';
import VideoSection from '../../components/product/VideoSection';
import DetailsSection from '../../components/product/DetailsSection';
import ReviwesSection from '../../components/product/ReviwesSection';
import ImgaesSection from '../../components/product/ImgaesSection';

const TentsFistalClassic = () => {
   const [bottomElement, setBottomElement] = useState<number>(0);

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
            product={products.cotegory.tents.fistalClassic}
         />
         <NavProductsNext
            beforeBottmElement={bottomElement}
            product={products.cotegory.tents.fistalClassic}
         />
         <HighLightsSection
            product={products.cotegory.tents.fistalClassic}
            maketProduct={maketProduct.fistalClassic}
         />
         <VideoSection videosProduct={videosProduct.fistalClassic} />
         <DetailsSection />
         <ReviwesSection />
         <ImgaesSection imges={products.cotegory.tents.fistalClassic.images} />
      </>
   );
};

export default TentsFistalClassic;
