import { useState } from 'react';
import { ProductSectionCart } from '../../components';

import { products } from '../../dammyDB/dammyProducts';

import NavProducts from '../../components/product/NavProducts';
import NavProductsNext from '../../components/product//NavProductsNext';

const TentsFistalClassic = () => {
  const [bottomElement, setBottomElement] = useState<number>(0);

  const elementBotton = (element: number) => {
    setBottomElement(element - 60);
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
    </>
  );
};

export default TentsFistalClassic;
