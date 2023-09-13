import { useState } from 'react';
import { ProductSectionCart } from '../../components';

import { products, maketProduct } from '../../dammyDB/dammyProducts';

import NavProducts from '../../components/product/NavProducts';
import NavProductsNext from '../../components/product//NavProductsNext';
import HighLightsSection from '../../components/product/HighLightsSection';

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
    </>
  );
};

export default TentsFistalClassic;
